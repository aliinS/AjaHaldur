import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/api/auth";
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
              <TableCell className="font-bold text-xl w-full text-center lg:w-60 lg:text-left">Marten Saar</TableCell>
              <TableCell><Button className="w-full">Töötunnid</Button></TableCell>
              <TableCell><Button className="w-full">Õigused</Button></TableCell>
              <TableCell className=""><Button className="w-full" variant="destructive">Eemalda</Button></TableCell>
            </TableRow>

            
            <TableRow className="flex flex-col lg:flex-row items-center">
              <TableCell className="font-bold text-xl w-full text-center lg:w-60 lg:text-left">Karl Andreas Mätlik</TableCell>
              <TableCell><Button className="w-full">Töötunnid</Button></TableCell>
              <TableCell><Button className="w-full">Õigused</Button></TableCell>
              <TableCell className=""><Button className="w-full" variant="destructive">Eemalda</Button></TableCell>
            </TableRow>

          </TableBody>
        </Table>


        </div>
        
      </div>
    </div>
  );
}
