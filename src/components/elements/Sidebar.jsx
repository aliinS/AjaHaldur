import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/ajahaldur_logo_white.png"

export default function Sidebar({ children }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex md:flex-col md:h-screen md:min-w-20 md:shadow-sm md:bg-[#E4E4E4] md:w-20 md:fixed top-0 bottom-0 left-0 md:top-0">
        <div className="p-2">
          <Link to="/" className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-16"/>
          </Link>
        </div>
        <Separator className='hidden '/>
        <div className="md:grid md:grid-cols-1 md:gap-4 md:p-4 md:h-full">{children}</div>
      </nav>
    </>
  );
}

export function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`
        relative flex items-center p-2
        font-medium rounded-md cursor-pointer
        transition-colors group border-2 
        ${active ? "bg-white" : "bg-white/50"}
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all`}></span>
      <div
        className={`
          absolute rounded-md px-2 py-1 ml-6
          bg-zinc-500 text-[#c2c2c2] text-sm
          invisible opacity-0 transition-all
          group-hover:visible group-hover:opacity-100
      `}
      >
        {text}
      </div>
    </div>
  );
}

export function SidenavMobile({ children }) {
  return (
    <nav className="md:hidden fixed bottom-0 h-16 flex items-center bg-[#E4E4E4] w-full z-[50]">
      <div className="flex justify-around h-fit items-center px-2 py-2 w-full gap-2">
        {children}
      </div>
    </nav>
  );
}

export function SidenavMobileItem({ icon, text, active }) {
  return (
    <div
      className={`relative flex flex-col items-center p-3
        font-medium rounded-md cursor-pointer w-full
        transition-colors group
        border-2
        ${active ? 'bg-white' : 'bg-white/50'}
      `}
    >
      {icon}
      {/* <span className={`mt-1 text-xs ${active ? 'text-white' : 'text-gray-500'}`}>{text}</span> */}
    </div>
  );
}