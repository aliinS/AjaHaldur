import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboar";
import Welcome from "./pages/Welcome";
import SingleTable from "./pages/SingleTable";
import Settings from "./pages/Settings";
import SingleGroup from "./pages/SingleGroup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="singletable" element={<SingleTable />} />
        <Route path="settingsTable" element={<Settings />} />
        <Route path="grouptable" element={<SingleGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);