import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
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

const GroupBox = ({ text, createdAt, updatedAt, id, isOwner }) => {
  const squareStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    border: "1px solid #c2c2c2",
  };

  const navigate = useNavigate();

  const created_at = new Date(createdAt);
  const updated_at = new Date(updatedAt);

  // Format the date
  const formattedCreated_at = `${created_at.getDate()} ${created_at.toLocaleString(
    "En-US",
    { month: "short" }
  )}, ${created_at.getFullYear()}`;
  const formattedUpdated_at = `${updated_at.getDate()} ${updated_at.toLocaleString(
    "En-US",
    { month: "short" }
  )}, ${updated_at.getFullYear()}`;

  function deleteGroup(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post(`api/groups/delete/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      // toast.promise(promise, {
      //   loading: "Loading...",
      //   success: (data) => {
      //     return `Data updated successfully`;
      //   },
      //   error: "can't retrieve data",
      // });
    });
  }

  return (
    <div className="flex flex-col gap-2 w-full h-[200px] rounded-md p-4 bg-white text-black">
      <h1 className="text-xl font-bold h-full">{text}</h1>
      {}
      <Badge variant="outline" className={isOwner ? "w-fit" : "hidden"}>
        Omanik
      </Badge>
      <div className="flex w-full justify-between gap-4">
        <Button
          className="w-full border-2 border-black bg-white hover:bg-gray-100"
          variant="secondary"
          onClick={() => {
            navigate(`/group/${id}`);
          }}
        >
          Ava
        </Button>
        {isOwner && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-[#FF0000]/60 w-full hover:bg-red-600" variant="destructive">
                Kustuta
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                Kas olete kindel, et soovite kustutada grupi ({text})?
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="w-full bg-white text-black hover:bg-gray-100">
                  Loobu
                </AlertDialogCancel>
                <AlertDialogAction
                  className="w-full bg-[#FF0000]/60 text-white hover:bg-red-600"
                  onClick={() => {
                    deleteGroup(id);
                  }}
                >
                  Kustuta
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

export default GroupBox;
