
const DashboardBox = ({text}) => {
  const squareStyle = {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    borderRadius: '15px',
    border: '1px solid #c2c2c2',
  };

  return (
    <div style={squareStyle}>
      <p>{text}</p>
    </div>
  );
};

export default DashboardBox;
