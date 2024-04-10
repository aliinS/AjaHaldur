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
import { addDays, format } from "date-fns";
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
  const [unfilteredData, setUnfilteredData] = useState([]);
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [filtered , setFiltered] = useState(false);
  const [diplayFilteredDate, setDisplayFilteredDate] = useState("");

  const [selectedFilterDate1, setSelectedFilterDate1] = useState(null);
  const [selectedFilterDate2, setSelectedFilterDate2] = useState(null);

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
          date: format(date, "yyyy-MM-dd"),
          time: time,
          location: location,
          table_id: data.id,
        })
        .then((response) => {
          fetchData();
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
          setUnfilteredData(response.data.table);
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

  function filterData() {
    setUnfilteredData(data);

    // filter data in `data` variable where you show entries between selectedFilterDate1 and selectedFilterDate2 by their created_at timestamp
    // store the filtered data in a variable called `data` and old data into `unfilteredData`
    //
    setUnfilteredData(data);
    // console.log(data);
    const filteredData = unfilteredData?.content.filter((entry) => {

      
      const formattedDate= new Date(entry.date);
      const formattedSelectedFilterDate1 = new Date(selectedFilterDate1);
      const formattedSelectedFilterDate2 = new Date(selectedFilterDate2);

      setFiltered(true);

      return (
        formattedDate >= formattedSelectedFilterDate1 && formattedDate <= formattedSelectedFilterDate2
      );
    });

    const date1 = new Date(selectedFilterDate1);
    const date2 = new Date(selectedFilterDate2);
    const formattedDate1 = format(date1, 'MMMM d, y');
    const formattedDate2 = format(date2, 'MMMM d, y');

    setDisplayFilteredDate(`${formattedDate1} - ${formattedDate2}`);

    setData({
      ...data,
      content: filteredData,
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
                    <AlertDialogTitle className="p-4 bg-white text-black rounded-lg">
                      Muuda tabeli nime
                    </AlertDialogTitle>
                    <Input
                      className="flex w-full  h-fit bg-white p-4"
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <AlertDialogFooter>
                      <AlertDialogAction
                        className="w-full bg-white hover:bg-gray-100"
                        type="submit"
                        onClick={() => {
                          updateTable(data.id);
                        }}
                      >
                        Uuenda
                      </AlertDialogAction>
                      <AlertDialogCancel
                        className="w-full bg-[#FF0000]/60 hover:bg-red-600"
                        onClick={() => {
                          setTitle("");
                        }}
                      >
                        Katkesta
                      </AlertDialogCancel>
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
                      "w-full px-1 justify-start text-left font-normal bg-[#EFEFEF] hover:bg-gray-100",
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
                min="0"
                max="24"
                step="0.5"
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
                className="flex w-full bg-[#EFEFEF] hover:bg-gray-100"
                type="submit"
                variant="secondary"
                onClick={() => {
                  storeTableContent();
                }}
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
                    <button className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md hover:bg-gray-100">
                      Filtrid
                    </button>
                    <span className={filtered ? "block font-bold" : "hidden"}>{diplayFilteredDate}</span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>mingi</AlertDialogHeader>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedFilterDate1 && "text-muted-foreground"
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
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedFilterDate2 && "text-muted-foreground"
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
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={filterData}>Continue</AlertDialogAction>
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
                                className="flex w-full h-fit bg-white p-4"
                                type="number"
                                placeholder="Hours"
                                step="0.5"
                                value={time}
                                onChange={(e) => {
                                  setTime(e.target.value);
                                }}
                              />
                              <Input
                                className="flex w-full h-fit bg-white p-4"
                                type="text"
                                placeholder="Object"
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
                                    updateTableContent(data.id);
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
                            <Button variant="destructive" className="hover:bg-red-600">
                              <Trash2 className="size-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              Kas soovite kustutada sissekande? <br />{" "}
                              {format(data?.date, "PPP")} | {data.time}h |{" "}
                              {data?.location || "-"}
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="w-full bg-white hover:bg-gray-100 text-black">Katkesta</AlertDialogCancel>
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
