import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/api/auth";

export default function SettingsTable() {
  const navigate = useNavigate();

  return (
    <div className="flex">
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
                  active
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

      <div className="text-[#c2c2c2] p-6">
        <h1 className="font-bold text-2xl">SEADED</h1>
        <p className="text-gray-300/50">
          Change your settings here.
        </p>
        <p className="text-red-500">NB! This is a work in progress.</p>
      </div>
    </div>
  );
}
