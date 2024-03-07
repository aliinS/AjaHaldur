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
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { logout } from "@/api/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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

export default function SingleTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [title, setTitle] = useState();
  const [hours, setHours] = useState();

  let promise = null;

  function handleSelectedDateChange(date) {
    const formattedDate = format(date, "yyyy-MM-dd");
    setDate(formattedDate);
    console.log(formattedDate);
  }

  function storeTableContent() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/store`, {
          date: date,
          time: time,
          location: location,
          table_id: data.id,
        })
        .then((response) => {
          fetchData();
          setTime("");
          setLocation("");
          setDate(null);
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

  function updateTableContent(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/update/${id}`, {
          date: date,
          time: time,
          location: location,
          table_id: data.id,
        })
        .then((response) => {
          fetchData();
          setTime("");
          setLocation("");
          setDate(null);
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

  function deleteTableContent(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/delete/${id}`)
        .then((response) => {
          fetchData();
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

  function updateTable(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/update/${id}`, {
          title: title,
        })
        .then((response) => {
          fetchData();
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

  function fetchData() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/show/${id}`)
        .then((response) => {
          setData(response.data.table);
          setHours(response.data.hours);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        {/* SIDEBAR */}
        <div >
          <Sidebar>
            <div className="flex flex-col justify-between h-full ">
              <div className="flex flex-col gap-4">
                <button
                  className="w-8 h-8 flex justify-center items-center"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  <SidebarItem
                    icon={<Package size={20} color="#c2c2c2" />}
                    text="Dashboard"
                    
                  />
                </button>
                <button
                  className="w-8 h-8 flex justify-center items-center"
                  // onClick={() => {
                  //   navigate("/dashboard");
                  // }}
                >
                  <SidebarItem
                    icon={<Boxes size={20} color="#c2c2c2" />}
                    text="Groups"
                  />
                </button>
                <button
                  className="w-8 h-8 flex justify-center items-center"
                  // onClick={() => {
                  //   navigate("/dashboard");
                  // }}
                >
                  <SidebarItem
                    icon={<BarChart3 size={20} color="#c2c2c2" />}
                    text="Tables"
                  />
                </button>
              </div>
              
              <div className="flex flex-col gap-4">
                <button
                  className="w-8 h-8 flex justify-center items-center"
                  onClick={() => {
                    navigate("/settingsTable");
                  }}
                >
                  <SidebarItem
                    icon={<Settings size={20} color="#c2c2c2" />}
                    text="Settings"
                  />
                </button>
                <button
                  className="w-8 h-8 flex justify-center items-center"
                  onClick={() => {
                    logout();
                  }}
                >
                  <SidebarItem
                    icon={<LogOut size={20} color="#c2c2c2" />}
                    text="Loguout"
                  />
                </button>
              </div>
            </div>
          </Sidebar>
        </div>

        {/* CONTENT */}
        <div className="text-[#c2c2c2] w-screen flex flex-col p-6 gap-4">
          <div className="flex gap-2 ">
            <h1 className="text-2xl">{data?.title}</h1>
            <AlertDialog>
              <AlertDialogTrigger
                onClick={() => {
                  setTitle(data?.title);
                }}
              >
                {/* <Button
                  className="w-fit self-start"
                  variant="destructive"
                  onClick={() => {
                    setTitle(data.title);
                  }}
                >
                  Edit
                </Button> */}
                <Pencil className="size-5" />
              </AlertDialogTrigger>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  updateTable(data.id);
                }}
              >
                <AlertDialogContent>
                  <AlertDialogTitle>Change table's name</AlertDialogTitle>
                  <Input
                    className="flex w-full text-white"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => {
                        setTitle("");
                      }}
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      type="submit"
                      onClick={() => {
                        updateTable(data.id);
                      }}
                    >
                      Update
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </form>
            </AlertDialog>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="flex w-full justify-center text-white">
              <form
                className="flex flex-col w-full"
                onSubmit={(event) => {
                  event.preventDefault();
                  storeTableContent();
                }}
              >
                <CardHeader>
                  <CardTitle>Create new entry</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="flex flex-col w-full lg:h-16 items-center p-4 gap-4 lg:flex-row">
                  <Popover className="flex w-full">
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full px-1 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleSelectedDateChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    className="flex w-full text-white"
                    type="number"
                    placeholder="Hours"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                  <Input
                    className="flex w-full text-white"
                    type="text"
                    placeholder="Object"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <Separator orientation="vertical" className="hidden lg:flex" />
                  <Separator className="flex lg:hidden" />
                  <Button
                    className="flex w-full"
                    type="submit"
                    variant="secondary"
                  >
                    Submit
                  </Button>
                </CardContent>
              </form>
            </Card>
            <div className="overflow-x-auto">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-48">Date</TableHead>
                    <TableHead className="w-48">Hours</TableHead>
                    <TableHead className="w-auto">Object</TableHead>
                    <TableHead className="w-4"></TableHead>
                    <TableHead className="w-4"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.content?.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell className="font-medium w-48">
                        {format(data?.date, "PPP")}
                      </TableCell>
                      <TableCell className="w-48">{data?.time}</TableCell>
                      <TableCell className="w-auto">{data?.location}</TableCell>
                      <TableCell className="w-4">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button
                              className="w-fit"
                              variant="secondary"
                              onClick={() => {
                                setDate(data.date);
                                setTime(data.time);
                                setLocation(data.location);
                              }}
                            >
                              <Pencil className="size-4"/>
                            </Button>
                          </AlertDialogTrigger>
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              updateTableContent(data.id);
                            }}
                          >
                            <AlertDialogContent>
                              <AlertDialogTitle>
                                Change entry's data
                              </AlertDialogTitle>
                              <Popover className="flex w-fit">
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"secondary"}
                                    className={cn(
                                      "w-full px-1 justify-start text-left font-normal",
                                      !date && "text-muted-foreground"
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
                                    onSelect={handleSelectedDateChange}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <Input
                                className="flex w-full"
                                type="number"
                                placeholder="Hours"
                                value={time}
                                onChange={(e) => {
                                  setTime(e.target.value);
                                }}
                              />
                              <Input
                                className="flex w-full"
                                type="text"
                                placeholder="Object"
                                value={location}
                                onChange={(e) => {
                                  setLocation(e.target.value);
                                }}
                              />
                              <AlertDialogFooter>
                                <AlertDialogCancel
                                  onClick={() => {
                                    setDate(null);
                                    setTime("");
                                    setLocation("");
                                  }}
                                >
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  type="submit"
                                  onClick={() => {
                                    updateTableContent(data.id);
                                  }}
                                >
                                  Update
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </form>
                        </AlertDialog>
                      </TableCell>
                      <TableCell className="w-4">
                        <Button
                          className="w-fit"
                          variant="destructive"
                          onClick={() => {
                            deleteTableContent(data.id);
                          }}
                        >
                          <Trash className="size-4"/>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>{hours}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
