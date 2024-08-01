import { PlusCircle, RefreshCw } from "lucide-react";
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
import { set } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox"


export default function Dashboard() {
  const [personalTables, setPersonalTables] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [groups, setGroups] = useState([]);
  const [groupsPage, setGroupsPage] = useState(1);
  const [canLoadMoreGroups, setCanLoadMoreGroups] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [tableName, setTableName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isTimeSupportEnabled, setIsTimeSupportEnabled] = useState(false);

  let promise = null;

  function checkIfCanLoadMorePersonal(response, page) {
    if (response.data.last_page == page) {
      setCanLoadMore(false);
    } else {
      setCanLoadMore(true);
    }

  }

  function checkIfCanLoadMoreGroups(response, page) {
    if (response.data.last_page == page) {
      setCanLoadMoreGroups(false);
    } else {
      setCanLoadMoreGroups(true);
    }
  }

  function loadPersonalTables() {
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/personal?page=1&amount=4`)
        .then((response) => {
          setPersonalTables(response.data.data);
          promise = null;
          checkIfCanLoadMorePersonal(response, page);
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
    // });
  }

  function loadMorePersonalTables(amount = 4) {
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/tables/personal?page=${page}&amount=${amount}`)
        .then((response) => {
          setPersonalTables(personalTables.concat(response.data.data));
          promise = null;
          checkIfCanLoadMorePersonal(response, page);
          setPage(page + 1);
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
    // });
  }

  function loadGroups() {
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/groups?page=1&amount=4`)
        .then((response) => {
          setGroups(response.data.data);
          promise = null;
          checkIfCanLoadMoreGroups(response, groupsPage);
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
    // });
  }

  function loadMoreGroups(amount = 4) {
    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .get(`api/groups?page=${page}&amount=${amount}`)
        .then((response) => {
          setGroups(groups.concat(response.data.data));
          promise = null;
          checkIfCanLoadMoreGroups(response, groupsPage);
          setGroupsPage(groupsPage + 1);
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
    // });
  }

  function storeUserTable() {

    setIsLoading(true);

    const words = tableName.split(" ");
    const lengths = words.map((word) => word.length);
    if (tableName.length > 45) {
      toast.error("Tabeli nimes ei tohi sõnad olla pikemad kui 45 tähemärki");
      setIsLoading(false);
      return;
    }



    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/store`, {
          title: tableName,
          type: "personal",
          supports_time_range: isTimeSupportEnabled
        })
        .then((response) => {
          loadPersonalTables();
          setTableName("");
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        })
        .finally(() => {
          setIsLoading(false);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Table created successfully`;
        },
        error: "Table cannot be created",
      });
    // });
  }

  function storeGroup() {
    setIsLoading(true);

    const words = groupName.split(" ");
    const lengths = words.map((word) => word.length);
    if (groupName.length > 45) {
      toast.error("Grupi nimes ei tohi sõnad olla pikemad kui 45 tähemärki");
      setIsLoading(false);
      return;
    }

    // axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/groups/store`, {
          name: groupName,
        })
        .then((response) => {
          loadGroups();
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        })
        .finally(() => {
          setIsLoading(false);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Group created successfully`;
        },
        error: "Group cannot be created",
      });
    // });
  }


  function truncateString(str, amount) {
    if (str.length <= amount) {
      return str;
    } else {
      return str.slice(0, amount) + (str.length > amount ? "..." : "");
    }
  }

  useEffect(() => {
    loadPersonalTables();
    loadGroups();
  }, []);

  return (
    <AppLayout>
      <div className="flex">
        <div className="text-[#c2c2c2] font-thin  w-full">
          <div
            id="PersonalTables"
            className="w-full h-fit p-4 flex flex-col gap-4"
          >
            <div className="flex fle-row w-full h-fit justify-between bg-white rounded-lg p-2 text-black">
              <h1 className="text-2xl font-bold">Personaal tabelid:</h1>
              <AlertDialog>
                <AlertDialogTrigger className="flex h-fit py-1 w-fit  px-6">
                  <PlusCircle size={24} />
                </AlertDialogTrigger>
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
                  <div className="flex flex-col gap-2 p-3 bg-white border-none py-3 text-black rounded-md">
                    <div className="flex gap-2">
                      <Checkbox id="terms2" 
                        checked={isTimeSupportEnabled}
                        
                        onCheckedChange={(e) => setIsTimeSupportEnabled(!isTimeSupportEnabled)}
                      />
                      <label
                        htmlFor="terms2"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Kellaaja toetamine*
                        <p className="text-gray-400 mt-2">
                          * Kui kellaaja toetamine on sisse lülitatud, siis saad lisada tunnivahemiku kindla tunni arvu asemel.
                        </p>
                        <p className="text-gray-400 mt-2">
                          <span className="text-red-400">NB! Seda valikut hiljem muuta ei anna.</span>
                        </p>
                        {isTimeSupportEnabled ? <p className="text-gray-400 mt-2">Kellaaja toetamine on sisse lülitatud</p> : <p className="text-gray-400 mt-2">Kellaaja toetamine on välja lülitatud</p>}
                      </label>
                    </div>
                  </div>


                  <AlertDialogFooter className="flex-col lg:gap-0">
                    <AlertDialogAction
                      disabled={tableName.length === 0 || tableName.length > 255 || isLoading}
                      className="flex w-full bg-white hover:bg-gray-100"
                      onClick={() => {
                        storeUserTable();
                      }}
                    >
                      Loo uus
                    </AlertDialogAction>
                    <AlertDialogCancel className="flex w-full bg-[#FF0000]/60 hover:bg-red-600">
                      Katkesta
                    </AlertDialogCancel>
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
                  text={truncateString(data.title, 15)}
                  createdAt={data.created_at}
                  updatedAt={data.updated_at}
                  id={data.id}
                  refreshPersonalTables={loadPersonalTables}
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
              <div className="flex flex-col w-full h-[200px] rounded-md border-2 border-[#c2c2c2] border-dashed p-4">
                <h1 className="text-xl font-bold h-full">
                  Sul ei ole hetkel ühtegi tabelit
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
              Lae veel <RefreshCw />
            </Button>
          </div>

          <div id="Groups" className="w-full h-fit p-4 flex flex-col gap-4">
            <div className="flex fle-row w-full h-fit justify-between bg-white rounded-lg p-2 text-black">
              <h1 className="text-2xl font-bold">Minu grupid:</h1>
              <AlertDialog>
                <AlertDialogTrigger className="flex h-fit py-1 w-fit  px-6">
                  <PlusCircle size={24} />
                </AlertDialogTrigger>
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
                  <AlertDialogFooter className="flex-col lg:gap-0">
                    <AlertDialogAction
                      disabled={groupName.length === 0 || groupName.length > 255 || isLoading}
                      className="flex w-full bg-white hover:bg-gray-100"
                      onClick={() => {
                        storeGroup();
                      }}
                    >
                      Loo uus
                    </AlertDialogAction>
                    <AlertDialogCancel className="flex w-full bg-[#FF0000]/60 hover:bg-red-600">
                      Katkesta
                    </AlertDialogCancel>
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
                  text={truncateString(data.name, 17)}
                  isOwner={data.isOwner}
                  createdAt={data.created_at}
                  updatedAt={data.updated_at}
                  refreshGroups={loadGroups}
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
              <div className="flex flex-col w-full h-[200px] rounded-md border-2 border-[#c2c2c2] border-dashed p-4">
                <h1 className="text-xl font-bold h-full">
                  Sul ei ole hetkel ühtegi gruppi
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
              Lae veel <RefreshCw />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
