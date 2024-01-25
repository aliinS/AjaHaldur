import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Welcome from "@/pages/Welcome";
import SingleTable from "@/pages/SingleTable";
import Settings from "@/pages/Settings";
import SingleGroup from "@/pages/SingleGroup";
import NotFound from "@/pages/NotFound";

export default function App() {


  if (localStorage.getItem("user")) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="singletable" element={<SingleTable />} />
            <Route path="settingsTable" element={<Settings />} />
            <Route path="grouptable" element={<SingleGroup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
