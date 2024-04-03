import "@/App.css";
import { Boxes, LucideBox } from "lucide-react";
import firstimg from "@/assets/first_image.png";
import secondimg from "@/assets/second_image.png";

import { Navigation } from "../components/elements/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Navbar from "../components/elements/WelcomeNavbar";




function Welcome() {
  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

  return (
    <>
      <Navbar />
      <section id="hero-banner" className="h-screen relative">
        <img
          className="h-full w-full absolute inset-0 object-cover blur-sm brightness-50"
          src={firstimg}
          alt="A person managing tasks on a computer screen" // More descriptive alt text
        />

        <div className="absolute inset-0 px-8 flex items-center">
          <div className="flex flex-col gap-6 justify-center h-full w-1/2 lg:p-10">
            <h1 className="text-4xl font-bold text-textInDark">
              Ajahaldur - Sinu aja efektiivne valitseja!
            </h1>
            <p className="text-textInDark">
              Tere tulemast AjaHaldurisse – kõikehõlmavasse tööaja jälgimise ja
              <br />
              graafikute koostamise platvormi!
            </p>
            <div className="flex gap-2">
              <Button className="rounded-none bg-footer">Alusta siit!</Button>
              <Button variant="outline" className="bg-transparent rounded-none border-buttonLight text-textInDark" >Rohkem infot ...</Button>  {/* Use a pre-defined variant */}
            </div>
          </div>
        </div>
      </section>
      <br />

      <section id="second" className="h-[600px] flex flex-col md:flex-row gap-4 px-8 items-center">
        <div className="flex flex-col gap-6 text-center h-full md:w-1/2">
          <h2 className="font-bold text-2xl">Lihtsusta ja kiirenda oma igakuised töötundide halduseid!</h2>
          <p>
            Peale esialgset sättimist saad kiirelt ja mugavalt oma tiimi graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full lg:w-1/2 items-center">
              <LucideBox size={32} />
              <h2 className="font-bold text-lg">Mugavus</h2>
              <p className="text-sm">Loo ja halda oma tiimi töögraafikuid AjaHalduris lihtsalt ja mugavalt.</p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-1/2 items-center">
              <LucideBox size={32} />
              <h2 className="font-bold text-lg">Lihtsus</h2>
              <p className="text-sm">Tehke koostööd ilma vaevata ja hoia kõik osalejad samal lehel.</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" className="bg-transparent border-black rounded-none">
              Loe lähemalt...
            </Button>
            <Button variant="link" className="bg-transparent border-white gap-1 ">
              Registreeri <Boxes />
            </Button>
          </div>
        </div>
        <div className="h-full md:w-1/2 flex md:justify-end">
          <img src={secondimg} alt="Image" className="h-96 w-auto object-cover" />
        </div>
      </section>

    </>
  );
}

export default Welcome;