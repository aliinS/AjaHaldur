import { BarChart3, Boxes, Package, Settings} from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { Link } from "react-router-dom";


export default function SettingsTable() {

    return(
        <div className="flex mt-2">
            <div className="flex">
                <Sidebar>
                    <Link to="/dashboard"><SidebarItem icon={<Package size={20} color="#c2c2c2"/>} text="Avaleht" active /> </Link>
                    <SidebarItem icon={<Boxes size={20} color="#c2c2c2"/>} text="Grupid"  />
                    <SidebarItem icon={<BarChart3 size={20} color="#c2c2c2"/>} text="Tabelid"  />
                    <Link to="/settings"><SidebarItem icon={<Settings size={20} color="#c2c2c2"/>} text="Seaded"  /></Link>
                </Sidebar>
            </div>

            <div className="text-[#c2c2c2] font-thin pt-6">

                <h1 className="ml-9 text-xl">SEADED</h1>
            </div>
        </div>
    );
}