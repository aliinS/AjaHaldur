import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TableBox = ({text, createdAt, updatedAt, id}) => {
  const squareStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    border: '1px solid #c2c2c2',
  };

  const navigate = useNavigate();

  const created_at = new Date(createdAt);
  const updated_at = new Date(updatedAt);

  // Format the date
  const formattedCreated_at = `${created_at.getDate()} ${created_at.toLocaleString('En-US', { month: 'short' })}, ${created_at.getFullYear()}`;
  const formattedUpdated_at = `${updated_at.getDate()} ${updated_at.toLocaleString('En-US', { month: 'short' })}, ${updated_at.getFullYear()}`;

  function deleteTable(id) {
    axios.get("/sanctum/csrf-cookie").then(() => {
      promise = axios
        .post(`api/tables/delete/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `Data updated successfully`;
        },
        error: "can't retrieve data",
      });
    });
  }

  return (
    <div className="flex flex-col gap-2 w-full h-[200px] rounded-md border border-[#c2c2c2] p-4">
      <h1 className="text-xl font-bold h-full">{text}</h1>
      <p className={createdAt == updatedAt ? "hidden" : "block"}>Updated: {formattedUpdated_at}</p>
      <p>Created: {formattedCreated_at}</p>
      <div className="flex w-full justify-between gap-4">
        <Button className="w-full" variant="secondary" onClick={
          () => {
            navigate(`/table/${id}`);
          }
        }>Open</Button>
        <Button 
          className="bg-red-800 w-full" 
          variant="destructive" 
          onClick={() => {
            deleteTable(id);
          }}>
            Delete
          </Button>
      </div>
    </div>
  );
};

export default TableBox;
