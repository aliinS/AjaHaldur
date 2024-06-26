import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Welcome from "@/pages/Welcome";
import Table from "@/pages/Table";
import Settings from "@/pages/Settings";
import SingleGroup from "@/pages/SingleGroup";
import NotFound from "@/pages/NotFound";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricelist from "./pages/Pricelist";
import ScrollToTop from "./components/ui/scroll-to-top";
import Blog from "./pages/Blog";




export default function App() {


  if (localStorage.getItem("user")) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="table/:id" element={<Table />} />
            <Route path="settingsTable" element={<Settings />} />
            <Route path="group/:id" element={<SingleGroup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="about" element={<Features />} />
            <Route path="pricelist" element={<Pricelist />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />  
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
