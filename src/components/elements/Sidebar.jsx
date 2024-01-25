import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '@/assets/Ajahaldur_Logo_1.svg'


const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const expanded = useState(true)
  
    return (
        <aside className="h-screen w-16 flex border-r fixed">
            <nav className="h-full flex flex-col shadow-sm ">
                <div className="pb-2 flex justify-between items-center mb-14">
                    <Link to="/"><img src={logo} alt="" /> </Link>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="grid grid-cols-1 gap-4 px-4">{children}</ul>
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
        relative flex items-center p-2
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gray-700"
            : "bg-gray-800/50"
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

