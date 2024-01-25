
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import SingleTable from "./pages/SingleTable";
import Settings from "./pages/Settings";
import SingleGroup from "./pages/SingleGroup"
import "./App.css";
import { AlertTriangle } from "lucide-react";
import logo from "@/assets/Ajahaldur_Logo_1.svg";
import preview from "@/assets/preview.jpg";
import { Navigation } from "@/components/elements/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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