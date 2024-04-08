import {
  BarChart3,
  Binary,
  Boxes,
  LogOut,
  Package,
  Pencil,
  Settings,
  Trash,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logout } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogDesc,
  AlertDialogActionDesc,
  AlertDialogCancelDesc,
  AlertDialogContentDesc,
  AlertDialogDescriptionDesc,
  AlertDialogFooterDesc,
  AlertDialogHeaderDesc,
  AlertDialogTitleDesc,
  AlertDialogTriggerDesc,
} from "@/components/ui/alert-dialog-desc";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { set } from "date-fns";
import AppLayout from "../components/elements/AppLayout";

export default function SingleGroup() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [inviteEmail, setInviteEmail] = useState();
  const [selectedTableData, setSelectedTableData] = useState();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  let promise = null;

  function fetchGroupInfo() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/groups/show/${id}`)
        .then((response) => {
          setData(response.data.group);
          console.log(response.data.group);
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Group info retrieved successfully`;
        },
        error: "can't retrieve group data",
      });
    });
  }

  function fetchTableInfo(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/groups/get-table/${id}`,
        {
          params: {
            group_id: data.id,
          },
        }
        )
        .then((response) => {
          setSelectedTableData(response.data);
          console.log(response.data);
          console.log(selectedTableData);
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading....",
        success: (data) => {
          return `Group info retrieved successfully`;
        },
        error: "can't retrieve group data",
      });
    });
  }

  function storeTableContent(table_id, user_id) {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/store`, {
          date: format(date, "yyyy-MM-dd"),
          time: time,
          location: location,
          table_id: selectedTableData.table.id,
        })
        .then((response) => {
          fetchTableInfo(user_id);
          setTime("");
          setLocation("");
          setDate("");
          message = response.data.message;
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
          message = error.data.message;
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return message;
        },
        error: message,
      });
    });
  }

  useEffect(() => {
    fetchGroupInfo();
  }, []);

  function inviteMember() {
    let message = null;
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/groups/invite/${id}`, {
          group_id: data.id,
          email: inviteEmail,
        })
        .then((response) => {
          // fetchData();
          console.log(response.data);
          fetchGroupInfo();
          message = response.data.message;
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
          message = error.response.data.message;
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return message;
        },
        error: message,
      });
    });
  }

  function updateGroup() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/groups/update/${data.id}`, {
          name: name,
        })
        .then((response) => {
          fetchGroupInfo();
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Table updated successfully`;
        },
        error: "can't retrieve data",
      });
    });
  }

  function removeMember(userID) {
    let message = null;
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/groups/members/delete/${data.id}`, {
          user_id: userID,
        })
        .then((response) => {
          fetchGroupInfo();
          message = response.data.message;
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
          message = error.response.data.message;
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return message;
        },
        error: message,
      });
    });
  }

  return (
    <AppLayout>
      <div className="flex">
        <div className="text-[#c2c2c2] w-full flex flex-col p-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="w-full flex justify-between gap-4 p-4 bg-white rounded-lg text-black">
              <h1 className="text-2xl">{data?.name}</h1>
              <div className="flex items-center">
                {data?.isOwner && (
                  <AlertDialog>
                    <AlertDialogTrigger
                      onClick={() => {
                        setName(data?.name);
                      }}
                    >
                      <Pencil className="size-5" />
                    </AlertDialogTrigger>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        updateGroup();
                      }}
                    >
                      <AlertDialogContent>
                        <AlertDialogTitle className="bg-white p-4 text-black rounded-md">
                          Muuda tabeli nime
                        </AlertDialogTitle>
                        <Input
                          className="flex w-full text-black py-4 bg-white h-fit"
                          type="text"
                          placeholder="Title"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <AlertDialogFooter className="flex-col">
                          <AlertDialogAction
                            className="bg-white lg:w-full"
                            type="submit"
                            onClick={() => {
                              updateGroup();
                            }}
                          >
                            Update
                          </AlertDialogAction>
                          <AlertDialogCancel
                            className="bg-[#FF0000]/60 lg:w-full"
                            onClick={() => {
                              setName("");
                            }}
                          >
                            Cancel
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </form>
                  </AlertDialog>
                )}
              </div>
            </div>
            <div className="flex bg-white w-full h-fit p-4 justify-around rounded-lg gap-4 flex-col lg:flex-row lg:justify-start">
              {data?.isOwner && (
                <AlertDialog>
                  <AlertDialogTrigger className="w-full lg:w-fit">
                    <Button variant="secondary" className="w-full bg-[#EFEFEF]">
                      Lisa kasutaja
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <h1 className="w-full h-fit py-4 p-4 bg-white rounded-md">
                      Lisa Kasutaja
                    </h1>
                    <Input
                      className="w-full h-fit p-4 bg-white rounded-md"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setInviteEmail(e.target.value);
                      }}
                    />
                    <AlertDialogFooter className="flex-col">
                      <AlertDialogAction
                        className="bg-white w-full"
                        onClick={() => {
                          inviteMember();
                        }}
                      >
                        Continue
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#FF0000]/60 w-full">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}

              <AlertDialog>
                <AlertDialogTrigger className="w-full lg:w-fit">
                  <Button variant="secondary" className="w-full bg-[#EFEFEF]">
                    Kasutajad
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-black text-left py-2">
                      Kasutajad
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className="max-h-80 h-fit overflow-y-auto min-w-64 w-full overflow-x-auto lg:w-full lg:max-w-full">
                    <Table className="text-black max-h-80 min-w-64 lg:w-full lg:max-w-full bg-white">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nimi</TableHead>
                          <TableHead>Email</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data?.membersList.map((user) => {
                          return (
                            <TableRow key={user.id}>
                              <TableCell>{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-[#FF0000]/60">
                      Sulge
                    </AlertDialogCancel>
                    {/* <AlertDialogAction
                      onClick={() => {
                        inviteMember();
                      }}
                    >
                      Continue
                    </AlertDialogAction> */}
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table className="flex bg-white flex-col rounded-lg">
              <TableBody>
                {data?.users.map((user) => {
                  return (
                    <TableRow
                      key={user.id}
                      className="flex flex-col lg:flex-row items-center bg-[#EFEFEF] m-4 rounded-lg"
                    >
                      <TableCell className="font-bold text-xl text-black w-full text-center lg:w-full lg:text-left">
                        {user.name}
                      </TableCell>
                      <TableCell className="w-full lg:w-fit">
                        <AlertDialogDesc>
                          <AlertDialogTriggerDesc className="w-full lg:w-fit">
                            <Button
                              className="w-full bg-white text-black"
                              onClick={() => {
                                fetchTableInfo(user?.id);
                              }}
                            >
                              Töötunnid
                            </Button>
                          </AlertDialogTriggerDesc>
                          <AlertDialogContentDesc className="items-center flex flex-col w-full">
                            <AlertDialogHeaderDesc className="flex w-full">
                              <AlertDialogTitleDesc className="text-black bg-white flex w-full h-fit p-4 rounded-lg">
                                Töötunnid
                              </AlertDialogTitleDesc>
                            </AlertDialogHeaderDesc>
                            <Popover className="flex w-full">
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full h-fit p-4 justify-start text-left font-normal bg-white",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? (
                                    format(date, "PPP")
                                  ) : (
                                    <span>Vali kuupäev</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  className="rounded-md border"
                                />
                              </PopoverContent>
                            </Popover>
                            <Input
                              className="flex w-full text-black h-fit p-4 bg-white"
                              type="number"
                              placeholder="Hours"
                              step="0.5"
                              onChange={(e) => {
                                setTime(e.target.value);
                              }}
                            />
                            <Input
                              className="flex w-full text-black h-fit p-4 bg-white"
                              type="text"
                              placeholder="Object"
                              onChange={(e) => {
                                setLocation(e.target.value);
                              }}
                            />
                            <Button
                              className="flex w-full text-black h-fit bg-white"
                              type="submit"
                              variant="secondary"
                              onClick={() => {
                                storeTableContent(
                                  selectedTableData.table.id,
                                  user.id
                                );
                              }}
                            >
                              Sisesta
                            </Button>
                            <Separator
                              orientation="vertical"
                              className="hidden lg:flex"
                            />
                            <Separator className="flex lg:hidden" />

                            <div className="max-h-80 h-fit overflow-y-auto p-2 min-w-64 w-full rounded-lg bg-white overflow-x-auto lg:w-full lg:max-w-full">
                              <Table className="text-black max-h-80 bg-[#EFEFEF] min-w-64 lg:w-full lg:max-w-full">
                                <TableHeader>
                                  <TableRow className="bg-[#EFEFEF]">
                                    <TableHead>Date</TableHead>
                                    <TableHead>Hours</TableHead>
                                    <TableHead>Object</TableHead>
                                    <TableHead></TableHead>
                                    <TableHead></TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {selectedTableData?.tableContent?.map(
                                    (data) => (
                                      <TableRow key={data.id}>
                                        <TableCell className="min-w-40">
                                          {format(new Date(data.date), "PPP")}
                                        </TableCell>
                                        <TableCell className="min-w-20">
                                          {data.time}
                                        </TableCell>
                                        <TableCell className="min-w-60">
                                          {data.location || "-"}
                                        </TableCell>
                                        <TableCell>
                                          <AlertDialog>
                                            <AlertDialogTrigger>
                                              <Button
                                                className="w-fit"
                                                variant="secondary"
                                              >
                                                <Pencil className="size-4" />
                                              </Button>
                                            </AlertDialogTrigger>

                                            <AlertDialogContent>
                                              <AlertDialogTitle>
                                                Change entry's data
                                              </AlertDialogTitle>
                                              <Popover className="flex w-fit">
                                                <PopoverTrigger asChild>
                                                  <Button variant={"secondary"}>
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                  <Calendar
                                                    mode="single"
                                                    initialFocus
                                                  />
                                                </PopoverContent>
                                              </Popover>
                                              <Input
                                                className="flex w-full"
                                                type="number"
                                                placeholder="Hours"
                                              />
                                              <Input
                                                className="flex w-full"
                                                type="text"
                                                placeholder="Object"
                                              />
                                              <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                  Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction type="submit">
                                                  Update
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog>
                                        </TableCell>
                                        <TableCell className="w-1/3">
                                          <Button
                                            className="w-fit"
                                            variant="destructive"
                                          >
                                            <Trash className="size-4" />
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                            <AlertDialogCancelDesc className="w-full">
                              <Button variant="secondary">Sulge</Button>
                            </AlertDialogCancelDesc>
                          </AlertDialogContentDesc>
                        </AlertDialogDesc>
                      </TableCell>

                      {data?.isOwner && (
                        <TableCell className="w-full lg:w-fit">
                          <Button className="w-full bg-white text-black lg:w-fit">
                            Õigused
                          </Button>
                        </TableCell>
                      )}

                      {data?.isOwner && (
                        <TableCell className="w-full lg:w-fit">
                          <AlertDialog>
                            <AlertDialogTrigger className="w-full lg:w-fit">
                              <Button
                                className="w-full bg-[#FF0000]/60"
                                variant="destructive"
                              >
                                Eemalda
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-black">
                                  Kas oled kindel, et soovid eemaldada kasutaja
                                  ({user.name}).
                                </AlertDialogTitle>
                              </AlertDialogHeader>
                              <AlertDialogFooter className="flex flex-col">
                                <AlertDialogAction
                                  className="bg-white w-full"
                                  onClick={() => {
                                    removeMember(user.id);
                                  }}
                                >
                                  Kinnita
                                </AlertDialogAction>
                                <AlertDialogCancel className="bg-[#FF0000]/60 w-full">
                                  Katkesta
                                </AlertDialogCancel>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
