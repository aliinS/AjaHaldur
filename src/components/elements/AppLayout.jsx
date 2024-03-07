// AppLayout.jsx
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar, {
  SidebarItem,
  SidenavMobile,
  SidenavMobileItem,
} from "./Sidebar";
import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
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
            <button onClick={() => navigate("/dashboard")}>
              <SidebarItem
                icon={<Package size={20} color="#c2c2c2" />}
                text="Dashboard"
                active={isActive("/dashboard")}
              />
            </button>

            <button onClick={() => navigate("/dashboard")}>
              <SidebarItem
                icon={<Boxes size={20} color="#c2c2c2" />}
                text="Groups"
                active={isActive("/xxx")}
              />
            </button>

            <button onClick={() => navigate("/dashboard")}>
              <SidebarItem
                icon={<BarChart3 size={20} color="#c2c2c2" />}
                text="Tables"
                active={isActive("/xxx")}
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button onClick={() => navigate("/settingsTable")}>
              <SidebarItem
                icon={<Settings size={20} color="#c2c2c2" />}
                text="Settings"
                active={isActive("/settingsTable")}
              />
            </button>

            <button onClick={() => logout()}>
              <SidebarItem
                icon={<LogOut size={20} color="#c2c2c2" />}
                text="Logout"
              />
            </button>
          </div>
        </div>
      </Sidebar>

      {/* Mobile Sidebar */}
      <SidenavMobile>
        <button onClick={() => navigate("/dashboard")}>
          <SidenavMobileItem
            icon={<Package size={20} color="#c2c2c2" />}
            text="Dashboard"
            active={isActive("/dashboard")}
          />
        </button>

        <button onClick={() => navigate("/dashboard")}>
          <SidenavMobileItem
            icon={<Boxes size={20} color="#c2c2c2" />}
            text="Groups"
            active={isActive("/xxx")}
          />
        </button>

        <button onClick={() => navigate("/dashboard")}>
          <SidenavMobileItem
            icon={<BarChart3 size={20} color="#c2c2c2" />}
            text="Tables"
            active={isActive("/xxx")}
          />
        </button>

        <button onClick={() => navigate("/settingsTable")}>
          <SidenavMobileItem
            icon={<Settings size={20} color="#c2c2c2" />}
            text="Settings"
            active={isActive("/settingsTable")}
          />
        </button>

        <button onClick={() => logout()}>
          <SidenavMobileItem
            icon={<LogOut size={20} color="#c2c2c2" />}
            text="Logout"
          />
        </button>
      </SidenavMobile>

      {/* Main Content */}
      <div className="text-[#c2c2c2] font-thin p-2 w-full">{children}</div>
    </div>
  );
}
