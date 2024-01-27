import { BarChart3, Boxes, Package, RefreshCw, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/elements/Sidebar";
import DashboardBox from "@/components/elements/DashboardBox";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fetchPersonalTables } from "@/api/tables";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useEffect } from "react";

export default function Dashboard() {
  const [personalTables, setPersonalTables] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [groups, setGroups] = useState([]);
  const [groupsPage, setGroupsPage] = useState(1);
  const [canLoadMoreGroups, setCanLoadMoreGroups] = useState(true);

  const navigate = useNavigate();
  let promise = null;

  function loadPersonalTables() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/personal?page=1&amount=4`)
        .then((response) => {
          setPersonalTables(response.data.data);
          promise = null;
          if (response.data.last_page == groupsPage) {
            setCanLoadMoreGroups(false);
          }
          setPage(2);
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Data loaded successfully`;
        },
        error: "Data cannot be retrieved",
      });
    });
  }

  function loadMorePersonalTables(amount = 4) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/personal?page=${page}&amount=${amount}`)
        .then((response) => {
          setPersonalTables(personalTables.concat(response.data.data));
          promise = null;
          if (response.data.last_page == page) {
            setCanLoadMore(false);
          }
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Data loaded successfully`;
        },
        error: "Data cannot be retrieved",
      });
    });
  }

  function loadGroups() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/groups?page=1&amount=4`)
        .then((response) => {
          setGroups(response.data.data);
          promise = null;
          if (response.data.last_page == groupsPage) {
            setCanLoadMoreGroups(false);
          }
          setGroupsPage(2);
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Data loaded successfully`;
        },
        error: "Data cannot be retrieved",
      });
    });
  }

  function loadMoreGroups(amount = 4) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/groups?page=${page}&amount=${amount}`)
        .then((response) => {
          setGroups(groups.concat(response.data.data));
          promise = null;
          setGroupsPage(groupsPage + 1);
          if (response.data.last_page == groupsPage) {
            setCanLoadMoreGroups(false);
          }
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Data loaded successfully`;
        },
        error: "Data cannot be retrieved",
      });
    });
  }

  useEffect(() => {
    loadPersonalTables();
    loadGroups();

    console.log(axios.defaults.headers.common['Authorization']);
  }, []);

  return (
    <div className="flex">
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
              text="Avaleht"
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
              text="Grupid"
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
              text="Tabelid"
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
              text="Seaded"
            />
          </button>
        </Sidebar>
      </div>

      <div className="text-[#c2c2c2] font-thin p-4 w-full ml-14">
        <div
          id="PersonalTables"
          className="w-full h-fit p-4 flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold">Personal tables:</h1>
          <div
            className={
              personalTables.length === 0
                ? "hidden"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
            }
          >
            {personalTables?.map((data) => (
              <DashboardBox
                key={data.id}
                text={data.title}
                createdAt={data.created_at}
                updatedAt={data.updated_at}
              />
            ))}
          </div>
          <div
            className={
              personalTables.length === 0
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
                : "hidden"
            }
          >
            <div className="flex flex-col w-full h-[200px] rounded-md border border-[#c2c2c2] p-4">
              <h1 className="text-xl font-bold h-full">
                You don't have any tables right now
              </h1>
            </div>
          </div>
          <Button
            variant="secondary"
            disabled={!canLoadMore}
            className={personalTables.length === 0 ? "hidden" : "flex gap-2"}
            onClick={() => {
              loadMorePersonalTables();
              setPage(page + 1);
            }}
          >
            Load more <RefreshCw />
          </Button>
        </div>

        <div id="Groups" className="w-full h-fit p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Your groups:</h1>
          <div
            className={
              groups.length === 0
                ? "hidden"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
            }
          >
            {groups?.map((data) => (
              <DashboardBox
                key={data.id}
                text={data.name}
                createdAt={data.created_at}
                updatedAt={data.updated_at}
              />
            ))}
          </div>
          <div
            className={
              groups.length === 0
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
                : "hidden"
            }
          >
            <div className="flex flex-col w-full h-[200px] rounded-md border border-[#c2c2c2] p-4">
              <h1 className="text-xl font-bold h-full">
                You don't have any groups right now
              </h1>
            </div>
          </div>
          <Button
            variant="secondary"
            disabled={!canLoadMoreGroups}
            className={groups.length === 0 ? "hidden" : "flex gap-2"}
            onClick={() => {
              loadMoreGroups();
            }}
          >
            Load more <RefreshCw />
          </Button>
        </div>
      </div>
    </div>
  );
}
