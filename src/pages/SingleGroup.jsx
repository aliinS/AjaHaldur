import AppLayout from "../components/elements/AppLayout";
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

  return (
    <AppLayout>
      <div className="flex mt-2">
        <div className="text-[#c2c2c2] font-thin pt-6 ml-14">
          <h1 className="ml-9 text-xl">Just see konkreetne grupp andmebaasist</h1>
          <p>Ofc on siin grupi CRUD</p>
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
                  <AlertDialog>
                    <AlertDialogTrigger className="w-full">
                      <Button className="w-full">Töötunnid</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Töötunnid</AlertDialogTitle>
                      </AlertDialogHeader>
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
                      <div className="max-h-96 h-fit overflow-y-auto">
                        <Table className="text-white max-h-96 ">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Hours</TableHead>
                              <TableHead>Object</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga ja numbriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="w-1/3">March 4th, 2024 </TableCell>
                              <TableCell className="w-1/5">12</TableCell>
                              <TableCell className="w-1/2">Kuressaare mingi tänav mingi koreteriga</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <AlertDialogCancel>Sulge</AlertDialogCancel>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
                <TableCell className="w-full lg:w-fit">
                  <Button className="w-full">Õigused</Button>
                </TableCell>
                <TableCell className="w-full lg:w-fit">
                  {/* <Button className="w-full" variant="destructive">
                    Eemalda
                  </Button> */}
                  <AlertDialog>
                    <Button className="w-full" variant="destructive">
                      <AlertDialogTrigger>Eemalda</AlertDialogTrigger>
                    </Button>
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
    </AppLayout>
  );
}
