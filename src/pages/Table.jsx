import { BarChart3, Boxes, LogOut, Package, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { logout } from "@/api/auth";

export default function SingleTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  let promise = null;

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/show/${id}`)
        .then((response) => {
          setData(response.data.table);
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Table created successfully`;
        },
        error: "Table cannot be created",
      });
    });
  }, []);

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
              active
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

      <div className="text-[#c2c2c2] font-thin pt-6 ml-14">
        <h1 className="ml-9 text-xl">{data?.title}</h1>
      </div>
    </div>
  );
}
