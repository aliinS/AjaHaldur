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
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"








export default function SingleTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [date, setDate] = React.useState();

  let promise = null;

  useEffect(() => {
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
              logout()
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
          <Card className='flex w-fit'>
            <CardContent className='flex flex-col items-center gap-4 mt-4 lg:flex-row lg:mt-6'>
              <Popover className='flex w-fit'>
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
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Input className="flex w-11/12" type="number" placeholder="Hours" />

              <Separator className="my-2 lg:w-[1px] lg:h-full" />

              <Button className='flex w-11/12' variant="secondary">Submit</Button>
            </CardContent>
          </Card>

          <Table className='w-11/12'>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead className="text-right">Object</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">27.01.2024</TableCell>
                <TableCell>12h</TableCell>
                <TableCell className="text-right">Kalevi põik, 8, korter 14, elutuba</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>
    </div>
  );
}
