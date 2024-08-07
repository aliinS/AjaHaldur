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
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [timeDifference, setTimeDifference] = useState(null);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [diplayFilteredDate, setDisplayFilteredDate] = useState("");

  const [selectedFilterDate1, setSelectedFilterDate1] = useState(null);
  const [selectedFilterDate2, setSelectedFilterDate2] = useState(null);

  let promise = null;

  function handleSelectedDateChange(date) {
    const formattedDate = format(date, "yyyy-MM-dd");
    setDate(formattedDate);
  }

  const calculateTimeDifference = () => {

    if (data.supports_time_range == 1) {
      let start = new Date(`1970-01-01T${startTime}:00`);
      let end = new Date(`1970-01-01T${endTime}:00`);

      let difference = end - start;

      let hours = Math.floor(difference / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTime(minutes !== 0 ? `${hours}.${minutes}` : `${hours}`);
      console.log(start, end, difference);
      console.log(`Time : ${time}`);

      return minutes !== 0 ? `${hours}.${minutes}` : `${hours}`;
    }
    return time;
  };

  function storeTableContent() {



    calculateTimeDifference();

    let message = "";
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/content/store`, {
          date: format(date, "yyyy-MM-dd"),
          time: calculateTimeDifference(),
          start_time: startTime || 'null',
          end_time: endTime || 'null',
          supports_time_range: data.supports_time_range,
          location: location,
          table_id: data.id,
        })
        .then((response) => {
          fetchData();
          setTime("");
          setLocation("");
          setDate("");
          setStartTime("");
          setEndTime("");
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
    // });
  }

  function updateTableContent(id) {
    let message = "";
    // axios.get("/sanctum/csrf-cookie").then(() => {
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
    // });
  }

  function deleteTableContent(id) {
    let message = "";
    // axios.get("/sanctum/csrf-cookie").then(() => {
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
    // });
  }

  function updateTable(id) {
    let message = "";
    // axios.get("/sanctum/csrf-cookie").then(() => {
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
    // });
  }

  function fetchData() {
    let message = "";
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/show/${id}`)
        .then((response) => {
          setData(response.data.table);
          setUnfilteredData(response.data.table);
          setHours(response.data.hours);
          message = response.data.message;

          // if query params from url have to and from, then filter the content
          const params = new URLSearchParams(window.location.search);
          const to = params.get("to");
          const from = params.get("from");
          if (to && from) {
            filterData(from, to);
          }
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
    // });
  }

  function filterData(from, to) {
    let message = "";

    if (selectedFilterDate1 && selectedFilterDate2) {
      let date1;
      let date2;

      if (to && from) {
        date1 = from;
        date2 = to;
      } else {
        date1 = format(selectedFilterDate1, "yyyy-MM-dd");
        date2 = format(selectedFilterDate2, "yyyy-MM-dd");

        //add date 1 to 'from' and date2 to 'to' query params
        navigate(`?from=${date1}&to=${date2}`);
      }

      // axios.get("/sanctum/csrf-cookie").then(() => {
        promise = axios
          .get(`api/tables/content/filter/${id}?from=${date1}&to=${date2}`)
          .then((response) => {
            const newData = {
              ...data,
              content: response.data.content,
              hours: response.data.hours,
            };

            setDisplayFilteredDate(
              `${format(selectedFilterDate1, "PPP")} - ${format(
                selectedFilterDate2,
                "PPP"
              )}`
            );

            setFiltered(true);

            setData(newData);
            message = response.data.message;
          })
          .catch((error) => {
            console.log(
              "%cERROR: ",
              "color: tomato; font-weight: bold;",
              error
            );
            message = error.data.message;
          });

        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return message;
          },
          error: message,
        });
      // });
    }
  }

  // filter reset
  function resetFilter() {
    setFiltered(false);
    navigate("");
    fetchData();
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
            <h1 className="text-2xl text-wrap	break-words">{data?.title}</h1>
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
                      placeholder="Tabeli nimi"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <AlertDialogFooter className="flex flex-col">
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
              <Popover className={'flex w-full'}>
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
              <input value={startTime} onChange={(e) => {
                setStartTime(e.target.value);
              }} className={data?.supports_time_range ? '"flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 bg-[#EFEFEF] placeholder:text-black/50 text-black"' : 'hidden'} type="time" id="start_time" name="start_time"></input>
              <input value={endTime} onChange={(e) => {
                setEndTime(e.target.value);
              }} className={data?.supports_time_range ? '"flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 bg-[#EFEFEF] placeholder:text-black/50 text-black"' : 'hidden'} type="time" id="end_time" name="end_time"></input>
              <Input
                className={data?.supports_time_range ? "hidden" : "flex w-full"}
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
                placeholder="Märge"
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
                  Tunnid: {data?.hours?.toFixed(2)}
                </div>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <button className="bg-[#EFEFEF] px-4 py-2 text-black text-md rounded-md hover:bg-gray-100">
                      Filtrid
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <span className={filtered ? "block font-bold" : "hidden"}>
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
                      <p className="text-2xl">-</p>
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
                    </AlertDialogDescription>
                    <AlertDialogFooter className="flex flex-col">
                      <AlertDialogAction
                        className="w-full bg-white hover:bg-gray-100 text-black"
                        onClick={filterData}
                      >
                        Filtreeri
                      </AlertDialogAction>
                      <AlertDialogCancel className="w-full bg-[#FF0000]/60 hover:bg-red-600 text-white">
                        Katkesta
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button
                  className={filtered ? "h-full bg-[#EFEFEF]" : "hidden"}
                  variant="secondary"
                  onClick={() => {
                    resetFilter();
                  }}
                >
                  Taasta filter
                </Button>
              </div>

              <Table className=" bg-[#EFEFEF] rounded-lg">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-48">Kuupäev</TableHead>
                    <TableHead className={data?.supports_time_range ? 'w-48' : 'hidden'}>Algus</TableHead>
                    <TableHead className={data?.supports_time_range ? 'w-48' : 'hidden'}>Lõpp</TableHead>
                    <TableHead className="w-48">{data?.supports_time_range ? 'Tundide kogus' : 'Tunnid'}</TableHead>
                    <TableHead className="w-auto">Märge</TableHead>
                    <TableHead className="w-4"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.content?.map((el) => (
                    <TableRow key={el.id}>
                      <TableCell className="font-medium w-48">
                        {format(el?.date, "PPP")}
                      </TableCell>

                      <TableCell className={data.supports_time_range ? 'w-auto' : 'hidden'}>
                        {data?.supports_time_range ? el?.start_time : el?.location || "-"}
                      </TableCell>

                      <TableCell className={data.supports_time_range ? 'w-auto' : 'hidden'}>
                        {el?.end_time}
                      </TableCell>

                      <TableCell className="w-48">{el?.time}</TableCell>

                      <TableCell className="w-48">{el?.location || "-"}</TableCell>

                      <TableCell className="w-fit flex gap-2 justify-end">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button
                              className="w-fit hover:bg-gray-100"
                              variant="outline"
                              onClick={() => {
                                setDate(el.date);
                                setTime(el.time);
                                setLocation(el.location);
                              }}
                            >
                              <Pencil className="size-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              updateTableContent(el.id);
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
                              <AlertDialogFooter className="flex flex-col">
                                {/* ... (other JSX) */}
                                <AlertDialogAction
                                  className="w-full bg-white hover:bg-gray-100"
                                  type="submit"
                                  onClick={() => {
                                    updateTableContent(el.id);
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
                              Kas soovite kustutada sissekande? <br />{" "}
                              {format(el?.date, "PPP")} | {el.time}h |{" "}
                              {el?.location || "-"}
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="w-full bg-white hover:bg-gray-100 text-black">
                                Katkesta
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="w-full bg-[#FF0000]/60 text-white hover:bg-red-600"
                                onClick={() => {
                                  deleteTableContent(el.id);
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
