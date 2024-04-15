import "@/App.css";
import { Boxes, LucideBox, Check } from "lucide-react";
import firstimg from "@/assets/first_image.png";
import secondimg from "@/assets/second_image.png";
import { Button } from "@/components/ui/button";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";
import Faq from "../components/elements/Faq";



function Welcome() {

  return (
    <>
      <Navbar />
      
      <section id="hero-banner" className="h-screen relative mb-8">
        <img
          className="h-full w-full absolute inset-0 object-cover blur-sm brightness-50"
          src={firstimg}
          alt="A farmer managing tasks on a mobile screen"
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
              <Button variant="outline" className="bg-transparent rounded-none border-buttonLight text-textInDark" >Rohkem infot ...</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="second" className="flex flex-col md:flex-row gap-4 mx-5 px-10 items-center pt-8 pb-8">
        <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
          <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
            <h2 className="font-bold text-3xl md:text-4xl">Lihtsusta ja kiirenda oma igakuised töötundide halduseid!</h2>
            <p>
              Peale esialgset sättimist saad kiirelt ja mugavalt oma tiimi graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
            </p></div>
          <div className="flex flex-col lg:flex-row gap-4 max-w-[500px]">
            <div className="flex flex-col gap-2 lg:w-1/2 items-center">
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
          <div className="flex gap-2 md:justify-start justify-center pb-2 pt-5">
            <Button variant="outline" className="bg-transparent border-black rounded-none">
              Loe lähemalt...
            </Button>
            <Button variant="link" className="bg-transparent border-white gap-1 ">
              Registreeri <Boxes />
            </Button>
          </div>
        </div>
        <div className="h-full md:w-1/2 flex md:justify-end pb-6">
          <img src={secondimg} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
        </div>
      </section>

      <section id="third-pricing" className="bg-bgLight pt-20 pb-20">
        <div className="container mx-auto max-w-sm md:max-w-4xl">
          <div className="gap-2 mb-5">
            <h1 className="font-bold text-3xl text-center">Hinnaplaan</h1>
            <p className="text-center pt-3">Vali plaan, mis sobib Sinu vajadustega.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <div className="border border-black flex flex-col text-start p-8 md:w-1/2 gap-3">
              <div className="flex justify-end"><LucideBox size={42} /></div>
              <p className="font-bold"><i>Initial</i></p>
              <h2 className="font-bold text-4xl">TASUTA</h2>
              <div className="border-t border-gray-500 my-4"></div>
              <p>Sisaldab:</p>
              <p className="flex gap-3"><Check /> Kuni 3? personaalse tabeli loomist</p>
              <p className="flex gap-3"><Check /> Kuni 2? grupi loomist</p>
              <p className="flex gap-3"><Check /> Tundide haldust</p>
              <p className="flex gap-3"><Check /> Tabelite eksport PDF-na</p>
              <p className="flex gap-3"><Check className="text-transparent" /></p>
              <div className="flex py-4">
                <button className="bg-footer text-textInDark py-2 w-full">Vali plaan</button>
              </div>
            </div>

            <div className="border border-black flex flex-col text-start p-8 md:w-1/2 gap-3">
              <div className="flex justify-end"><LucideBox size={42} /></div>
              <p className="font-bold"><i>Business</i></p>
              <h2 className="font-bold text-4xl">XX eur kuus</h2>
              <div className="border-t border-gray-500 my-4"></div>
              <p>Sisaldab:</p>
              <p className="flex gap-3"><Check /> Kuni X personaalse tabeli loomist</p>
              <p className="flex gap-3"><Check /> Kuni X grupi loomist</p>
              <p className="flex gap-3"><Check /> Tundide haldust</p>
              <p className="flex gap-3"><Check /> Tabelite eksport PDF-na</p>
              <p className="flex gap-3"><Check /> 24/7 klienditugi</p>
              <div className="flex py-4">
                <button className="bg-footer text-textInDark py-2 w-full">Vali plaan</button>
              </div>
            </div>
          </div>
        </div>
      </section >

      <Faq />

      <Footer />




    </>
  );
}

export default Welcome;