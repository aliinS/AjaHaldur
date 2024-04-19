import "@/App.css";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";

function Welcome() {
  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

  let location = useLocation();

  return (
    <>
    <Navbar />
      <div className="flex flex-col relative p-[2rem] max-w-7xl mx-auto px-6 bg-gradient-to-r from-bgLight gap-14 pb-28">
        {/* Development alert */}
        <Alert className="mt-24 bg-bgMid">
          <AlertTriangle color="green" className="h-4 w-4 " />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>
            This page is under development. Expect bugs to appear
          </AlertDescription>
        </Alert>

        {/* page content */}
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-textInLight">404 <span className="text-2xl text-textInLight"> - Page `{location.pathname}` not found</span></h1>
        </div>
        <Link to="/"><Button variant='secondary' className='w-fit bg-buttonLight rounded-none text-textInLight'>Return to Homepage</Button></Link>
      </div>


      <Footer />
    </>
  );
}

export default Welcome;
