// AppLayout.jsx
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar, {
  SidebarItem,
  SidenavMobile,
  SidenavMobileItem,
} from "./Sidebar";
import { BarChart3, Boxes, LogOut, LucideLayoutDashboard, Package, Settings } from "lucide-react";
import { logout } from "@/api/auth";

export default function AppLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <Sidebar>
        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-4">
            <button onClick={() => navigate("/dashboard")} className="w-fit">
              <SidebarItem
                icon={<Package size={20} color="black" />}
                text="Dashboard"
                active={isActive("/dashboard")}
              />
            </button>

            <button onClick={() => navigate("/dashboard")} className="w-fit">
              <SidebarItem
                icon={<Boxes size={20} color="black" />}
                text="Groups"
                active={isActive("/xxx")}
              />
            </button>

            <button onClick={() => navigate("/dashboard")} className="w-fit">
              <SidebarItem
                icon={<BarChart3 size={20} color="black" />}
                text="Tables"
                active={isActive("/xxx")}
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button onClick={() => navigate("/settingsTable")} className="w-fit">
              <SidebarItem
                icon={<Settings size={20} color="black" />}
                text="Settings"
                active={isActive("/settingsTable")}
              />
            </button>

            <button onClick={() => logout()} className="w-fit">
              <SidebarItem
                icon={<LogOut size={20} color="black" />}
                text="Logout"
              />
            </button>
          </div>
        </div>
      </Sidebar>

      {/* Mobile Sidebar */}
      <SidenavMobile>
        <button onClick={() => navigate("/dashboard")} className="flex items-center justify-center h-fit w-full">
          <SidenavMobileItem
            icon={<LucideLayoutDashboard size={20} color="black" />}
            // text="Dashboard"
            active={isActive("/dashboard")}
          />
        </button>

        {/* <button onClick={() => navigate("/dashboard")} className="flex items-center justify-center h-fit w-fit">
          <SidenavMobileItem
            icon={<Boxes size={20} color="black" />}
            // text="Groups"
            active={isActive("/xxx")}
          />
        </button>

        <button onClick={() => navigate("/dashboard")} className="flex items-center justify-center h-fit w-fit">
          <SidenavMobileItem
            icon={<BarChart3 size={20} color="black" />}
            // text="Tables"
            active={isActive("/xxx")}
          />
        </button> */}

        <button onClick={() => navigate("/settingsTable")} className="flex items-center justify-center h-fit w-full">
          <SidenavMobileItem
            icon={<Settings size={20} color="black" />}
            // text="Settings"
            active={isActive("/settingsTable")}
          />
        </button>

        <button onClick={() => logout()} className="flex items-center justify-center h-fit w-full">
          <SidenavMobileItem
            icon={<LogOut size={20} color="black" />}
            // text="Logout"
          />
        </button>
      </SidenavMobile>

      {/* Main Content */}
      <div className="text-[#c2c2c2] font-thin p-2 w-full mb-16 md:mb-0">{children}</div>
    </div>
  );
}
