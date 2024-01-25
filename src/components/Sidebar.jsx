import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";


const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const expanded = useState(true)
  
    return (
        <aside className="h-screen w-16 flex">
            <nav className="h-full flex flex-col shadow-sm ">
                <div className="pb-2 flex justify-between items-center mb-14">
                    <Link to="/dashboard"><img src="/src/assets/Ajahaldur_Logo_1.svg"alt="" /> </Link>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 pl-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-zinc-900 to-gray-950"
            : ""
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all`}
      >

      </span>

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
    </li>
  )
}

