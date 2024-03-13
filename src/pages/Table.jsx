import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
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
import { Calendar as CalendarIcon, Pencil, Trash2 } from "lucide-react";
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
import AppLayout from "../components/elements/AppLayout";

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
    let message = "";
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
    let message = "";
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

  function deleteTableContent(id) {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .delete(`api/tables/content/delete/${id}`)
        .then((response) => {
          fetchData();
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

  function updateTable(id) {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/update/${id}`, {
          title: title,
        })
        .then((response) => {
          fetchData();
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

  function fetchData() {
    let message = "";
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/show/${id}`)
        .then((response) => {
          setData(response.data.table);
          setHours(response.data.hours);
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
    fetchData();
  }, []);

  return (
    <AppLayout>
      <div className="flex">
        {/* CONTENT */}
        <div className="text-black w-full flex flex-col p-2 gap-4">
          <div className="w-full flex justify-between gap-4 p-4 bg-white rounded-lg">
            <h1 className="text-2xl">{data?.title}</h1>
            <div className="flex items-center">
              <AlertDialog>
                <AlertDialogTrigger
                  onClick={() => {
                    setTitle(data?.title);
                  }}
                >
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
                      className="flex w-full "
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
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="p-4 bg-white grid xl:grid-cols-4 gap-4 rounded-lg">
              <Popover className="flex w-full">
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full px-1 justify-start text-left font-normal bg-[#EFEFEF]",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Vali kuupäev</span>}
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
                className="flex w-full"
                type="number"
                placeholder="Tunnid"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <Input
                className="flex w-full "
                type="text"
                placeholder="Asukoht"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <Button
                className="flex w-full bg-[#EFEFEF]"
                type="submit"
                variant="secondary"
              >
                Salvesta
              </Button>
            </div>

            <div className="overflow-x-auto flex flex-col gap-4 p-4 bg-white rounded-lg">
              <div className="flex gap-4">
                <div className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md ">
                  Tunnid: {hours}
                </div>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <button className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md ">
                      Filtrid
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <Table className=" bg-[#EFEFEF] rounded-lg">
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
                      <TableCell className="w-auto">
                        {data?.location || "-"}
                      </TableCell>
                      <TableCell className="w-fit flex gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button
                              className="w-fit"
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
                                    onSelect={setDate}
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
                                {/* ... (other JSX) */}
                                <AlertDialogCancel
                                  onClick={() => {
                                    setTime("");
                                    setLocation("");
                                    setDate(null);
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
                        <Button
                          variant="destructive"
                          className="bg-[#FF0000]/60 text-blac kw-fit"
                          onClick={() => {
                            deleteTableContent(data.id);
                          }}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
