import "@/App.css";
import { AlertTriangle } from "lucide-react";
import logo from "@/assets/Ajahaldur_Logo_1.svg";
import preview from "@/assets/preview.jpg";
import { Navigation } from "@/components/elements/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
function Welcome() {
  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

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
        <div className="flex flex-col w-full gap-4">
          <p className="text-white mt-12 w-full text-left lg:w-1/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            consectetur in facilis vitae natus totam laborum, quia
            reprehenderit! Dolore sit harum omnis a pariatur officia dolorem
            commodi sed tempore aperiam provident voluptas neque, laborum cumque
            assumenda, perspiciatis optio quo deleniti quam perferendis
            veritatis. Harum soluta enim commodi nostrum, laudantium aliquid.
          </p>
          <Button variant='secondary' className='w-fit px-4'>
          Try it out
          </Button>
        </div>

        <div className="flex w-full h-full justify-center mt-24 p-4">
          <img
            className=" lg:absolute lg:-bottom-20 -z-10 lg:w-[1000px] h-fit rounded-lg"
            src={preview}
            alt=""
          />
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col h-[100vh] bg-[#1A1A1A] p-[2rem]"></div>
    </>
  );
}

export default Welcome;
