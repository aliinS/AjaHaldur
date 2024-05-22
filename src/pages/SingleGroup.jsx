import {
  BarChart3,
  Binary,
  Boxes,
  LogOut,
  Package,
  Pencil,
  Trash2,
  Settings,
  Trash,
  PlusCircle,
  Plus,
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

  const [filtered, setFiltered] = useState(false);
  const [selectedFilterDate1, setSelectedFilterDate1] = useState(null);
  const [selectedFilterDate2, setSelectedFilterDate2] = useState(null);
  const [diplayFilteredDate, setDisplayFilteredDate] = useState("");

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
        .get(`api/groups/get-table/${id}`, {
          params: {
            group_id: data.id,
          },
        })
        .then((response) => {
          setSelectedTableData(response.data);
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

  function updateTableContent(id) {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/update/${id}`, {
          date: format(date, "yyyy-MM-dd"),
          time: time,
          location: location,
          table_id: selectedTableData.table.id,
        })
        .then((response) => {
          fetchGroupInfo();
          setTime(null);
          setLocation(null);
          setDate(null);
          message = response.data.message;

          fetchTableInfo(selectedTableData.table.group_member_id);
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

  function deleteTableContent(id) {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .delete(`api/tables/content/delete/${id}`)
        .then((response) => {
          fetchGroupInfo();
          message = response.data.message;

          fetchTableInfo(selectedTableData.table.group_member_id);
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

  function filterData() {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .get(
          `api/tables/content/filter/${
            selectedTableData?.table?.id
          }?from=${format(selectedFilterDate1, "yyyy-MM-dd")}&to=${format(
            selectedFilterDate2,
            "yyyy-MM-dd"
          )}`,
          {
            group_id: data.id,
            date1: format(selectedFilterDate1, "yyyy-MM-dd"),
            date2: format(selectedFilterDate2, "yyyy-MM-dd"),
          }
        )
        .then((response) => {
          setFiltered(true);
          setDisplayFilteredDate(
            `${format(selectedFilterDate1, "PPP")} - ${format(
              selectedFilterDate2,
              "PPP"
            )}`
          );

          const newData = {
            ...selectedTableData,
            tableContent: response.data.content,
            hours: response.data.hours,
          };

          setSelectedTableData(newData);

          message = response.data.message;
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
          message = error.data.message;
        });
    });
  }

  function resetFilter(id) {
    setFiltered(false);
    setDisplayFilteredDate("");
    setSelectedFilterDate1(null);
    setSelectedFilterDate2(null);
    fetchTableInfo(id);
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
                          Muuda grupi nime
                        </AlertDialogTitle>
                        <Input
                          className="flex w-full text-black py-4 bg-white h-fit"
                          type="text"
                          placeholder="grupi nimi"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <AlertDialogFooter className="flex-col">
                          <AlertDialogAction
                            className="bg-white lg:w-full hover:bg-gray-100"
                            type="submit"
                            onClick={() => {
                              updateGroup();
                            }}
                          >
                            Uuenda
                          </AlertDialogAction>
                          <AlertDialogCancel
                            className="bg-[#FF0000]/60 lg:w-full hover:bg-red-600"
                            onClick={() => {
                              setName("");
                            }}
                          >
                            Katkesta
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
                    <Button
                      variant="secondary"
                      className="w-full bg-[#EFEFEF] hover:bg-gray-100"
                    >
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
                        className="bg-white w-full hover:bg-gray-100"
                        onClick={() => {
                          inviteMember();
                        }}
                      >
                        Lisa
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#FF0000]/60 w-full hover:bg-red-600">
                        Katkesta
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}

              <AlertDialog>
                <AlertDialogTrigger className="w-full lg:w-fit">
                  <Button
                    variant="secondary"
                    className="w-full bg-[#EFEFEF] hover:bg-gray-100"
                  >
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
                    <AlertDialogCancel className="bg-[#FF0000]/60 hover:bg-red-600">
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
                              variant="secondary"
                              className="w-full bg-white text-black hover:bg-gray-100"
                              onClick={() => {
                                fetchTableInfo(user?.id);
                              }}
                            >
                              Töötunnid
                            </Button>
                          </AlertDialogTriggerDesc>
                          <AlertDialogContentDesc className="items-center flex flex-col w-full max-h-screen overflow-auto">
                            <AlertDialogHeaderDesc className="flex w-full">
                              <AlertDialogTitleDesc className="text-black bg-white flex w-full justify-between h-fit p-4 rounded-lg items-center">
                                <h1>Töötunnid - {user.name}</h1>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="ghost">
                                      <PlusCircle className="size-6" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader className="text-black bg-white flex w-full justify-between h-fit p-4 rounded-lg font-bold">
                                      Sisesta uus töötund
                                      </AlertDialogHeader>
                                    <Popover className="flex w-full">
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-full h-fit p-4 justify-start text-left font-normal bg-white hover:bg-gray-100",
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
                                      placeholder="Tunnid"
                                      step="0.5"
                                      value={time}
                                      onChange={(e) => {
                                        setTime(e.target.value);
                                      }}
                                    />
                                    <Input
                                      className="flex w-full text-black h-fit p-4 bg-white"
                                      type="text"
                                      placeholder="Asukoht"
                                      value={location}
                                      onChange={(e) => {
                                        setLocation(e.target.value);
                                      }}
                                    />
                                    <AlertDialogFooter className="flex flex-col">
                                      <AlertDialogAction
                                        className="flex w-full text-black h-fit bg-white hover:bg-gray-100"
                                        type="submit"
                                        variant="secondary"
                                        onClick={() => {
                                          storeTableContent(
                                            selectedTableData.table.id,
                                            user.id
                                          );
                                        }}
                                      >
                                        Lisa uus
                                      </AlertDialogAction>
                                      <AlertDialogCancel className="flex w-full bg-[#FF0000]/60 hover:bg-red-600">
                                        Katkesta
                                      </AlertDialogCancel>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </AlertDialogTitleDesc>
                            </AlertDialogHeaderDesc>

                            <Separator
                              orientation="vertical"
                              className="hidden lg:flex"
                            />
                            <div className="flex gap-4 p-2 bg-white w-full rounded-md">
                              <div className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md ">
                                Tunnid: {selectedTableData?.hours}
                              </div>

                              <AlertDialog>
                                <AlertDialogTrigger>
                                  <button className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md hover:bg-gray-100">
                                    Filtrid
                                  </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <span
                                      className={
                                        filtered ? "block font-bold" : "hidden"
                                      }
                                    >
                                      {diplayFilteredDate}
                                    </span>
                                  </AlertDialogHeader>
                                  <AlertDialogDescription className="flex text-black gap-1">
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !selectedFilterDate1 &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {selectedFilterDate1 ? (
                                            format(selectedFilterDate1, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={selectedFilterDate1}
                                          onSelect={setSelectedFilterDate1}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                    <p className="text-2xl">-</p>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !selectedFilterDate2 &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {selectedFilterDate2 ? (
                                            format(selectedFilterDate2, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={selectedFilterDate2}
                                          onSelect={setSelectedFilterDate2}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </AlertDialogDescription>
                                  <AlertDialogFooter className="flex flex-col">
                                    <AlertDialogAction
                                      className="w-full bg-white hover:bg-gray-100"
                                      onClick={filterData}
                                    >
                                      Filtreeri
                                    </AlertDialogAction>
                                    <AlertDialogCancel className="w-full bg-[#FF0000]/60 hover:bg-red-600">
                                      Katkesta
                                    </AlertDialogCancel>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>

                              <Button
                                className={
                                  filtered ? "h-full bg-[#EFEFEF]" : "hidden"
                                }
                                variant="secondary"
                                onClick={() => {
                                  resetFilter(user.id);
                                }}
                              >
                                Taasta filter
                              </Button>
                            </div>
                            <div className="max-h-96 lg:max-h-[550px] h-fit overflow-y-auto p-2 min-w-64 w-full rounded-lg bg-white overflow-x-auto lg:w-full lg:max-w-full">
                              <Table className=" bg-[#EFEFEF] rounded-lg">
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-48">
                                      Kuupäev
                                    </TableHead>
                                    <TableHead className="w-48">
                                      Tunnid
                                    </TableHead>
                                    <TableHead className="w-auto">
                                      Asukoht
                                    </TableHead>
                                    <TableHead className="w-4"></TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {selectedTableData?.tableContent?.map(
                                    (data) => (
                                      <TableRow key={data.id}>
                                        <TableCell className="font-medium w-48">
                                          {format(new Date(data.date), "PPP")}
                                        </TableCell>
                                        <TableCell className="w-48">
                                          {data.time}
                                        </TableCell>
                                        <TableCell className="w-auto">
                                          {data.location || "-"}
                                        </TableCell>
                                        <TableCell className="w-fit flex gap-2 justify-end">
                                          <AlertDialog>
                                            <AlertDialogTrigger>
                                              <Button
                                                className="w-fit hover:bg-gray-100"
                                                variant="outline"
                                                onClick={() => {
                                                  setDate(data.date);
                                                  setTime(data.time);
                                                  setLocation(data.location);
                                                }}
                                              >
                                                <Pencil className="size-4" />
                                              </Button>
                                            </AlertDialogTrigger>
                                            <form
                                              onSubmit={(event) => {
                                                event.preventDefault();
                                                updateTableContent(data.id);
                                              }}
                                            >
                                              <AlertDialogContent>
                                                <AlertDialogTitle className="w-full h-fit p-4 bg-white rounded-lg text-black">
                                                  Muuda sissekannet
                                                </AlertDialogTitle>
                                                <Popover className="flex w-fit bg-white">
                                                  <PopoverTrigger asChild>
                                                    <Button
                                                      variant={"secondary"}
                                                      className={cn(
                                                        "w-full h-fit p-4 px-1 justify-start text-left font-normal bg-white hover:bg-gray-100",
                                                        !date &&
                                                          "text-muted-foreground"
                                                      )}
                                                    >
                                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                                      {date ? (
                                                        format(date, "PPP")
                                                      ) : (
                                                        <span>Pick a date</span>
                                                      )}
                                                    </Button>
                                                  </PopoverTrigger>
                                                  <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                      mode="single"
                                                      selected={date}
                                                      onSelect={setDate}
                                                      initialFocus
                                                    />
                                                  </PopoverContent>
                                                </Popover>
                                                <Input
                                                  className="flex w-full h-fit bg-white p-4"
                                                  type="number"
                                                  placeholder="Tunnid"
                                                  step="0.5"
                                                  value={time}
                                                  onChange={(e) => {
                                                    setTime(e.target.value);
                                                  }}
                                                />
                                                <Input
                                                  className="flex w-full h-fit bg-white p-4"
                                                  type="text"
                                                  placeholder="Asukoht"
                                                  value={location}
                                                  onChange={(e) => {
                                                    setLocation(e.target.value);
                                                  }}
                                                />
                                                <AlertDialogFooter>
                                                  {/* ... (other JSX) */}
                                                  <AlertDialogAction
                                                    className="w-full bg-white hover:bg-gray-100"
                                                    type="submit"
                                                    onClick={() => {
                                                      updateTableContent(
                                                        data.id
                                                      );
                                                    }}
                                                  >
                                                    Uuenda
                                                  </AlertDialogAction>
                                                  <AlertDialogCancel
                                                    className="w-full bg-[#FF0000]/60 hover:bg-red-600"
                                                    onClick={() => {
                                                      setTime("");
                                                      setLocation("");
                                                      setDate(null);
                                                    }}
                                                  >
                                                    Katkesta
                                                  </AlertDialogCancel>
                                                </AlertDialogFooter>
                                              </AlertDialogContent>
                                            </form>
                                          </AlertDialog>
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <Button
                                                variant="destructive"
                                                className="hover:bg-red-600"
                                              >
                                                <Trash2 className="size-4" />
                                              </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                              <AlertDialogHeader>
                                                Kas soovite kustutada
                                                sissekande? <br />{" "}
                                                {format(data?.date, "PPP")} |{" "}
                                                {data.time}h |{" "}
                                                {data?.location || "-"}
                                              </AlertDialogHeader>
                                              <AlertDialogFooter>
                                                <AlertDialogCancel className="w-full bg-white hover:bg-gray-100 text-black">
                                                  Katkesta
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                  className="w-full bg-[#FF0000]/60 text-white hover:bg-red-600"
                                                  onClick={() => {
                                                    deleteTableContent(data.id);
                                                  }}
                                                >
                                                  Kustuta
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog>
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
                          <Button
                            variant="secondary"
                            className="w-full bg-white text-black hover:bg-gray-100 lg:w-fit"
                          >
                            Õigused
                          </Button>

                        </TableCell>
                      )}

                      {data?.isOwner && (
                        <TableCell className="w-full lg:w-fit">
                          <AlertDialog>
                            <AlertDialogTrigger className="w-full lg:w-fit">
                              <Button
                                className="w-full bg-[#FF0000]/60 hover:bg-red-600"
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
                              <AlertDialogFooter className="flex flex-col-reverse">
                                <AlertDialogCancel className="bg-white w-full hover:bg-gray-100 text-black">
                                  Katkesta
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  className="bg-[#FF0000]/60 w-full hover:bg-red-600 text-white"
                                  onClick={() => {
                                    removeMember(user.id);
                                  }}
                                >
                                  Eemalda
                                </AlertDialogAction>
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
