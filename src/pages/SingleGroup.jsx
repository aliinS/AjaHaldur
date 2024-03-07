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
import { Link, useNavigate } from "react-router-dom";
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



export default function SingleGroup() {
  const navigate = useNavigate();

  return (
    <div className="flex mt-2">
      <div className="flex">
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

      <div className="text-[#c2c2c2] w-screen flex flex-col p-6 gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Grupi nimi</h1>
          <div className="flex gap-2">
            <Button variant="secondary">Lisa kasutaja</Button>
            <Button variant="secondary">Kasutajad</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableBody>
              <TableRow className="flex flex-col lg:flex-row items-center">
                <TableCell className="font-bold text-xl w-full text-center lg:w-96 lg:text-left">
                  Marten Saar
                </TableCell>
                <TableCell className="w-full lg:w-fit">
                  <AlertDialogDesc>
                    <AlertDialogTriggerDesc className="w-full">
                      <Button className="w-full">Töötunnid</Button>
                    </AlertDialogTriggerDesc>
                    <AlertDialogContentDesc className="items-center flex flex-col w-full">
                      <AlertDialogHeaderDesc>
                        <AlertDialogTitleDesc>Töötunnid</AlertDialogTitleDesc>
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
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
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
                          ([KASUTAJA]).
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Katkesta</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {}}>
                          Kinnita
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <Table>
            <TableBody>
              <TableRow className="flex flex-col lg:flex-row items-center">
                <TableCell className="font-bold text-xl w-full text-center lg:w-96 lg:text-left">
                  Aliin Saar
                </TableCell>
                <TableCell className="w-full lg:w-fit">
                  <AlertDialogDesc>
                    <AlertDialogTriggerDesc className="w-full">
                      <Button className="w-full">Töötunnid</Button>
                    </AlertDialogTriggerDesc>
                    <AlertDialogContentDesc className="items-center flex flex-col w-full">
                      <AlertDialogHeaderDesc>
                        <AlertDialogTitleDesc>Töötunnid</AlertDialogTitleDesc>
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
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
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
                          ([KASUTAJA]).
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Katkesta</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {}}>
                          Kinnita
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableBody>
              <TableRow className="flex flex-col lg:flex-row items-center">
                <TableCell className="font-bold text-xl w-full text-center lg:w-96 lg:text-left">
                  Karl Andreas Mätlik
                </TableCell>
                <TableCell className="w-full lg:w-fit">
                  <AlertDialogDesc>
                    <AlertDialogTriggerDesc className="w-full">
                      <Button className="w-full">Töötunnid</Button>
                    </AlertDialogTriggerDesc>
                    <AlertDialogContentDesc className="items-center flex flex-col w-full">
                      <AlertDialogHeaderDesc>
                        <AlertDialogTitleDesc>Töötunnid</AlertDialogTitleDesc>
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
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
                                  <Trash className="size-4" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="min-w-40">
                                March 30th, 2024
                              </TableCell>
                              <TableCell className="min-w-20">12</TableCell>
                              <TableCell className="min-w-60">
                                Kuressaare mingi tänav mingi koreteriga
                              </TableCell>
                              <TableCell className="">
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
                                        <Calendar mode="single" initialFocus />
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
                                <Button className="w-fit" variant="destructive">
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
                          ([KASUTAJA]).
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Katkesta</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {}}>
                          Kinnita
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
