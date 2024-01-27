import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/api/auth";

export default function SettingsTable() {
  const navigate = useNavigate();

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
              active
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

      <div className="text-[#c2c2c2] font-thin pt-6  ml-14">
        <h1 className="ml-9 text-xl">SEADED</h1>
      </div>
    </div>
  );
}
