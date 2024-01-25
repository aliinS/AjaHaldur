
const DashboardBox = ({text, createdAt, updatedAt, id}) => {
  const squareStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    border: '1px solid #c2c2c2',
  };

  const created_at = new Date(createdAt);
  const updated_at = new Date(updatedAt);

  // Format the date
  const formattedCreated_at = `${created_at.getDate()} ${created_at.toLocaleString('En-US', { month: 'short' })}, ${created_at.getFullYear()}`;
  const formattedUpdated_at = `${updated_at.getDate()} ${updated_at.toLocaleString('En-US', { month: 'short' })}, ${updated_at.getFullYear()}`;

  return (
    <div className="flex flex-col w-full h-[200px] rounded-md border border-[#c2c2c2] p-4">
      <h1 className="text-xl font-bold h-full">{text}</h1>
      <p className={createdAt == updatedAt ? "hidden" : "block"}>Updated: {formattedUpdated_at}</p>
      <p>Created: {formattedCreated_at}</p>
    </div>
  );
};

export default DashboardBox;
