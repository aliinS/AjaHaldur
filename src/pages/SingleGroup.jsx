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
  const navigate = useNavigate();

  let promise = null;

  function fetchGroupInfo() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/groups/show/${id}`)
        .then((response) => {
          setData(response.data.group);
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
        error:message,
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
      <div className="flex mt-2">
        <div className="text-[#c2c2c2] w-full flex flex-col p-6 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">{data?.name}</h1>
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
                  <AlertDialogTitle>Change table's name</AlertDialogTitle>
                  <Input
                    className="flex w-full text-white"
                    type="text"
                    placeholder="Title"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => {
                        setName("");
                      }}
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      type="submit"
                      onClick={() => {
                        updateGroup();
                      }}
                    >
                      Update
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </form>
            </AlertDialog>
            <div className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="secondary">Lisa kasutaja</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setInviteEmail(e.target.value);
                    }}
                  />
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        inviteMember();
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="secondary">Kasutajad</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Kasutajad</AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className="max-h-80 h-fit overflow-y-auto min-w-64 w-full overflow-x-auto lg:w-full lg:max-w-full">
                    <Table className="text-white max-h-80 min-w-64 lg:w-full lg:max-w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nimi</TableHead>
                          <TableHead>Email</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data?.users.map((user) => {
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
                    <AlertDialogCancel>Sulge</AlertDialogCancel>
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
            <Table>
              <TableBody>
                {data?.users.map((user) => {
                  return (
                    <TableRow key={user.id} className='flex flex-col lg:flex-row items-center'>
                      <TableCell className="font-bold text-xl w-full text-center lg:w-96 lg:text-left">
                        {user.name}
                      </TableCell>
                      <TableCell className="w-full lg:w-fit">
                        <AlertDialogDesc>
                          <AlertDialogTriggerDesc className="w-full">
                            <Button className="w-full">Töötunnid</Button>
                          </AlertDialogTriggerDesc>
                          <AlertDialogContentDesc className="items-center flex flex-col w-full">
                            <AlertDialogHeaderDesc>
                              <AlertDialogTitleDesc>
                                Töötunnid
                              </AlertDialogTitleDesc>
                            </AlertDialogHeaderDesc>
                            <Popover className="flex w-full">
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className="w-full px-1 justify-start text-left font-normal"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" initialFocus />
                              </PopoverContent>
                            </Popover>
                            <Input
                              className="flex w-full text-white"
                              type="number"
                              placeholder="Hours"
                            />
                            <Input
                              className="flex w-full text-white"
                              type="text"
                              placeholder="Object"
                            />
                            <Button
                              className="flex w-full"
                              type="submit"
                              variant="secondary"
                            >
                              Submit
                            </Button>
                            <Separator
                              orientation="vertical"
                              className="hidden lg:flex"
                            />
                            <Separator className="flex lg:hidden" />

                            <div className="max-h-80 h-fit overflow-y-auto min-w-64 w-full overflow-x-auto lg:w-full lg:max-w-full">
                              <Table className="text-white max-h-80 min-w-64 lg:w-full lg:max-w-full">
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Hours</TableHead>
                                    <TableHead>Object</TableHead>
                                    <TableHead></TableHead>
                                    <TableHead></TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell className="min-w-40">
                                      March 30th, 2024
                                    </TableCell>
                                    <TableCell className="min-w-20">
                                      12
                                    </TableCell>
                                    <TableCell className="min-w-60">
                                      Kuressaare mingi tänav mingi koreteriga
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
                                </TableBody>
                              </Table>
                            </div>
                            <AlertDialogCancelDesc className="w-full">
                              Sulge
                            </AlertDialogCancelDesc>
                          </AlertDialogContentDesc>
                        </AlertDialogDesc>
                      </TableCell>
                      <TableCell className="w-full lg:w-fit">
                        <Button className="w-full">Õigused</Button>
                      </TableCell>
                      <TableCell className="w-full lg:w-fit">
                        <AlertDialog>
                          <AlertDialogTrigger className="w-full">
                            <Button className="w-full" variant="destructive">
                              Eemalda
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="">
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Kas oled kindel, et soovid eemaldada kasutaja
                                ({ user.name }).
                              </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Katkesta</AlertDialogCancel>
                              <AlertDialogAction onClick={() => {
                                removeMember(user.id);
                              }}>
                                Kinnita
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
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
