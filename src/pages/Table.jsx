import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
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
        .post(`api/tables/show/${id}`)
        .then((response) => {
          setData(response.data.table);
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
    <div className="flex mt-2">
      <div className="flex">
        <Sidebar>
          <button
            className="w-8 h-8 flex justify-center items-center"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <SidebarItem
              icon={<Package size={20} color="#c2c2c2" />}
              text="Dashboard"
              active
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
        </Sidebar>
      </div>

      <div className="text-[#c2c2c2] font-thin pt-6 ml-14">
        <h1 className="ml-9 text-xl">{data?.title}</h1>

        <div className="flex flex-col ml-8 mt-8 gap-4">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant="destructive"
                onClick={() => {
                  setTitle(data.title)
                }}
              >
                Edit
              </Button>
            </AlertDialogTrigger>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                updateTable(data.id);
              }}
            >
              <AlertDialogContent>
                <Input
                  className="flex w-11/12"
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
          <Card className="flex w-11/12 justify-center lg:w-fit">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                storeTableContent();
              }}
            >
              <CardContent className="flex flex-col w-full items-center p-4 gap-4 lg:flex-row">
                <Popover className="flex w-fit">
                  <PopoverTrigger asChild>
                    <Button
                      variant={"secondary"}
                      className={cn(
                        "w-11/12 px-1 justify-start text-left font-normal",
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
                  className="flex w-11/12"
                  type="number"
                  placeholder="Hours"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
                <Input
                  className="flex w-11/12"
                  type="text"
                  placeholder="Object"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <Separator className="my-2 lg:w-[1px] lg:h-full" />
                <Button
                  className="flex w-11/12"
                  type="submit"
                  variant="secondary"
                >
                  Submit
                </Button>
              </CardContent>
            </form>
          </Card>

          <Table className="w-11/12 lg:w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead className="text-right">Object</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.content?.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">
                    {format(data?.date, "PPP")}
                  </TableCell>
                  <TableCell>{data?.time}</TableCell>
                  <TableCell className="text-right">{data?.location}</TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button
                          variant="destructive"
                          onClick={() => {
                            setDate(data.date);
                            setTime(data.time);
                            setLocation(data.location);
                          }}
                        >
                          Edit
                        </Button>
                      </AlertDialogTrigger>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          updateTableContent(data.id);
                        }}
                      >
                        <AlertDialogContent>
                          <Popover className="flex w-fit">
                            <PopoverTrigger asChild>
                              <Button
                                variant={"secondary"}
                                className={cn(
                                  "w-11/12 px-1 justify-start text-left font-normal",
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
                            className="flex w-11/12"
                            type="number"
                            placeholder="Hours"
                            value={time}
                            onChange={(e) => {
                              setTime(e.target.value);
                            }}
                          />
                          <Input
                            className="flex w-11/12"
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
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        deleteTableContent(data.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
