import "@/App.css";
import { AlertTriangle } from "lucide-react";
import logo from "@/assets/ajahaldur_logo_white.png";
import { Navigation } from "@/components/elements/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link, useLocation } from "react-router-dom";

function Welcome() {
  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

  let location = useLocation();

  return (
    <>
      <div className="flex flex-col relative h-[100vh] p-[2rem] max-w-7xl mx-auto px-6">
        {/* Development alert */}
        <Alert>
          <AlertTriangle color="white" className="h-4 w-4" />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>
            This page is under development. Expect bugs to appear
          </AlertDescription>
        </Alert>

        {/* Nav */}
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />

          <Navigation />
        </div>

        {/* Homepage content */}
        <div className="flex flex-col w-full text-gray-100 gap-4">
          <h1 className="text-6xl">404 <span className="text-2xl"> - Page `{location.pathname}` not found</span></h1>
          <Button variant='secondary' className='w-fit'><Link to="/">Return to Homepage</Link></Button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
