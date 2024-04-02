import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/ajahaldur_logo_white.png";
import { Separator } from "@/components/ui/separator";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const expanded = useState(true);

  return (
    <>
      <nav className="h-screen border-r border-gray-600 flex flex-col shadow-sm bg-black w-16 sticky top-0">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" />{" "}
          </Link>
        </div>
        <Separator />
        <SidebarContext.Provider value={{ expanded }}>
          <div className="grid grid-cols-1 gap-4 p-4 h-full">{children}</div>
        </SidebarContext.Provider>
      </nav>
    </>
  );
}

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <div
      className={`
        relative flex items-center p-2
        font-medium rounded-md cursor-pointer
        transition-colors group border-2 border-gray-600/50
        ${active ? "bg-gray-800" : "bg-gray-800/50"}
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all`}></span>

      {expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-zinc-500 text-[#c2c2c2] text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </div>
  );
}
