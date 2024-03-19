import { RefreshCw } from "lucide-react";
import GroupBox from "@/components/elements/GroupBox";
import TableBox from "@/components/elements/TableBox";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fetchPersonalTables } from "@/api/tables";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import AppLayout from "../components/elements/AppLayout";

export default function Dashboard() {
  const [personalTables, setPersonalTables] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [groups, setGroups] = useState([]);
  const [groupsPage, setGroupsPage] = useState(1);
  const [canLoadMoreGroups, setCanLoadMoreGroups] = useState(true);

  const [tableName, setTableName] = useState("");
  const [groupName, setGroupName] = useState("");

  let promise = null;

  function loadPersonalTables() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/personal?page=1&amount=4`)
        .then((response) => {
          setPersonalTables(response.data.data);
          promise = null;
          if (response.data.last_page == page) {
            setCanLoadMore(false);
          } else {
            setCanLoadMore(true);
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
        .get(`api/tables/personal?page=${page}&amount=${amount}`)
        .then((response) => {
          setPersonalTables(personalTables.concat(response.data.data));
          promise = null;
          if (response.data.last_page == page) {
            setCanLoadMore(false);
          } else {
            setCanLoadMore(true);
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
        .get(`api/groups?page=1&amount=4`)
        .then((response) => {
          setGroups(response.data.data);
          promise = null;
          if (response.data.last_page == groupsPage) {
            setCanLoadMoreGroups(false);
          } else {
            setCanLoadMoreGroups(true);
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
        .get(`api/groups?page=${page}&amount=${amount}`)
        .then((response) => {
          setGroups(groups.concat(response.data.data));
          promise = null;
          setGroupsPage(groupsPage + 1);
          if (response.data.last_page == groupsPage) {
            setCanLoadMoreGroups(false);
          } else {
            setCanLoadMoreGroups(true);
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

  function storeUserTable() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/store`, {
          title: tableName,
          type: "personal",
        })
        .then((response) => {
          loadPersonalTables();
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
  }

  function storeGroup() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/groups/store`, {
          name: groupName,
        })
        .then((response) => {
          loadGroups();
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Group created successfully`;
        },
        error: "Group cannot be created",
      });
    });
  }

  useEffect(() => {
    loadPersonalTables();
    loadGroups();
  }, []);

  return (
    <AppLayout>
      <div className="flex">
        <div className="text-[#c2c2c2] font-thin p-2 w-full">
          <div
            id="PersonalTables"
            className="w-full h-fit p-4 flex flex-col gap-4"
          >
            <div className="flex fle-row w-full h-fit justify-between bg-white rounded-lg p-2 text-black">
              <h1 className="text-2xl font-bold">Personaal tabelid:</h1>
              <AlertDialog>
                <Button variant="secondary" className="w-fit px-6">
                  <AlertDialogTrigger className="text-3xl">
                    +
                  </AlertDialogTrigger>
                </Button>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-black">
                      Loo uus tabel
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <Input
                    type="email"
                    value={tableName}
                    onChange={(e) => {
                      setTableName(e.target.value);
                    }}
                    className="text-white bg-white border-none py-6 text-black"
                    placeholder="Tabeli nimi"
                  />
                  <AlertDialogFooter className="gap-2 lg:gap-0">
                    <AlertDialogCancel className="flex w-full bg-[#FF0000]/60">
                      Katkesta
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="flex w-full bg-white "
                      onClick={() => {
                        storeUserTable();
                      }}
                    >
                      Loo uus
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div
              className={
                personalTables.length === 0
                  ? "hidden"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full"
              }
            >
              {personalTables?.map((data) => (
                <TableBox
                  key={data.id}
                  text={data.title}
                  createdAt={data.created_at}
                  updatedAt={data.updated_at}
                  id={data.id}
                />
              ))}
            </div>
            <div
              className={
                personalTables.length === 0
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full"
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
              className={
                personalTables.length === 0 ? "hidden" : "flex gap-2 bg-white"
              }
              onClick={() => {
                loadMorePersonalTables();
                setPage(page + 1);
              }}
            >
              Load more <RefreshCw />
            </Button>
          </div>

          <div id="Groups" className="w-full h-fit p-4 flex flex-col gap-4">
            <div className="flex fle-row w-full h-fit justify-between bg-white rounded-lg p-2 text-black">
              <h1 className="text-2xl font-bold">Minu grupid:</h1>
              <AlertDialog>
                <Button variant="secondary" className="w-fit px-6">
                  <AlertDialogTrigger className="text-3xl">
                    +
                  </AlertDialogTrigger>
                </Button>
                <AlertDialogContent className="">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-black">
                      Loo uus grupp
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <Input
                    type="email"
                    value={groupName}
                    onChange={(e) => {
                      setGroupName(e.target.value);
                    }}
                    className="text-white bg-white border-none py-6 text-black"
                    placeholder="Grupi nimi"
                  />
                  <AlertDialogFooter className="gap-2 lg:gap-0">
                    <AlertDialogCancel className="flex w-full bg-[#FF0000]/60">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="flex w-full bg-white"
                      onClick={() => {
                        storeGroup();
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div
              className={
                groups.length === 0
                  ? "hidden"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full"
              }
            >
              {groups?.map((data) => (
                <GroupBox
                  id={data.id}
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
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full"
                  : "hidden"
              }
            >
              <div className="flex flex-col w-full h-[200px] rounded-md border border-[#c2c2c2] p-4">
                <h1 className="text-xl font-bold h-full">
                  You don't have any groups right now.
                </h1>
              </div>
            </div>
            <Button
              variant="secondary"
              disabled={!canLoadMoreGroups}
              className={groups.length === 0 ? "hidden" : "flex gap-2 bg-white"}
              onClick={() => {
                loadMoreGroups();
              }}
            >
              Load more <RefreshCw />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
