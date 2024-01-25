import { BarChart3, Boxes, Package, Settings} from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import DashboardBox from "../components/ui/DashboardBox";
import { Link } from "react-router-dom";



export default function Dashboard() {

    return(
        <div className="flex mt-2">
            <div className="flex">
                <Sidebar>
                    <Link to="/dashboard"><SidebarItem icon={<Package size={20} color="#c2c2c2"/>} text="Avaleht" active /> </Link>
                    <SidebarItem icon={<Boxes size={20} color="#c2c2c2"/>} text="Grupid"  />
                    <SidebarItem icon={<BarChart3 size={20} color="#c2c2c2"/>} text="Tabelid"  />
                    <Link to="/settingsTable"><SidebarItem icon={<Settings size={20} color="#c2c2c2"/>} text="Seaded"  /></Link>
                </Sidebar>
            </div>

            <div className="text-[#c2c2c2] font-thin pt-6">

                <h1 className="ml-9 text-xl">Minu personaaltabelid:</h1>
                <div className="flex">
                   <Link to="/singletable"> <DashboardBox text="Minu tabel 1"/></Link>
                    <DashboardBox text="Minu tabel"/>
                    <DashboardBox text="Minu tabel"/>
                    <DashboardBox text="Minu tabel"/>
                    <DashboardBox text="Minu tabel"/>
                    <DashboardBox text="Vaata veel +"/>
                </div>

                <h1 className="ml-9 text-xl pt-4">Minu grupid:</h1>
                <div className="flex">
                    <Link to="/grouptable"><DashboardBox text="Grupi nimetus"/> </Link>
                    <DashboardBox text="Grupi nimetus"/>
                    <DashboardBox text="Grupi nimetus"/>
                    <DashboardBox text="Grupi nimetus"/>
                    <DashboardBox text="Grupi nimetus"/>                    
                    <DashboardBox text="Vaata veel +"/>
                </div>
                
            </div>

        </div>
    );

}