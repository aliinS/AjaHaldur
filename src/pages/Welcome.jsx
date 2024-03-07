import "@/App.css";
import { AlertTriangle, LucideBox } from "lucide-react";
import logo from "@/assets/Ajahaldur_Logo_1.svg";
import preview from "@/assets/preview.jpg";
import { Navigation } from "@/components/elements/navigation";
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

function Welcome() {
  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

  return (
    <>
      <div className="w-full h-16 bg-black text-white flex justify-between px-8">
        <div className="flex gap-2 h-full items-center">
          <p>Logo</p>
          <Button variant="link" className="text-white">
            Pealeht
          </Button>
          <Button variant="link" className="text-white">
            Tutvustus
          </Button>
          <Button variant="link" className="text-white">
            Hinnakiri
          </Button>
        </div>
        <div className="flex gap-2 h-full items-center">
          <Button variant="link" className="text-white">
            Registreeri
          </Button>
          <Button className="text-black bg-white">Logi sisse</Button>
        </div>
      </div>

      <div className="h-[600px] relative">
        <img
          className="h-full w-full object-cover"
          src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg"
          alt="Image"
        />

        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm px-8">
          <div className="flex flex-col gap-6 justify-center h-full w-1/2">
            <h1 className="text-4xl font-bold">
              Ajahaldur - Sinu aja effektiivne valitseja
            </h1>
            <p>
              Tere tulemast AjaHaldurisse – kõikehõlmavasse tööaja jälgimise ja
              graafikute koostamise platvormi!
            </p>
            <div className="flex gap-2">
              <Button>Alusta siit!</Button>
              <Button variant="outline" className="bg-transparent border-white">
                Rohkem infot...
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[600px] relative flex gap-4 px-8">
        <div className="flex flex-col gap-6 justify-center h-full w-1/2">
          <h1 className="text-4xl font-bold">
            Lihtsusta ja kiirenda igakuised töötundidega seotud halduseid
          </h1>
          <p>
            Peale esialgselt sättimist, saad kiirelt ja mugavalt oma tiimi
            graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <LucideBox size={32} />
              <h2 className="font-bold text-lg">Mugavus</h2>
              <p className="text-sm">Loo</p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <LucideBox size={32} />
              <h2 className="font-bold text-lg">Lihtsus</h2>
              <p className="text-sm">Collaborate effortlessly and keep everyone on the same page with our app</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-transparent border-black">
              Rohkem infot...
            </Button>
            <Button variant="link" className="bg-transparent border-white">
              Rohkem infot...
            </Button>
          </div>
        </div>
        <div className="h-full w-1/2 flex items-center justify-end">
          <img src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg" alt="Image" className="h-96 w-96 object-cover" />
        </div>
      </div>

    </>
  );
}

export default Welcome;
