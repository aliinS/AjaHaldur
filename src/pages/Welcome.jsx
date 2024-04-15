import "@/App.css";
import { Boxes, LucideBox, Check } from "lucide-react";
import firstimg from "@/assets/first_image.png";
import secondimg from "@/assets/second_image.png";
import { Button } from "@/components/ui/button";
import Navbar from "../components/elements/WelcomeNavbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "../components/elements/Footer";



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

      <section id="fourth-faq" className="flex px-16 py-20 bg-bgMid w-full">
        <div className="w-full">
          <h1 className="font-bold text-3xl">Korduma kippuvad küsimused</h1>
          <p className="pt-3 mb-10">Siit leiad vastused enamlevinud küsimustele meie rakenduse kohta.</p>
        <Accordion type="single" collapsible className="mb-10">
          <AccordionItem className="border-black border mb-4 px-2" value="item-1">
            <AccordionTrigger className="text-left">Mis on AjaHaldur?</AccordionTrigger>
            <AccordionContent>
              AjaHalduri põhifunktsiooniks on tööaja jälgimine.
              Rakendus on loodud selleks, et muuta tööaeg ja graafikute koostamine võimalikult lihtsaks ja tõhusaks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-black border mb-4 px-2" value="item-5">
            <AccordionTrigger className="text-left">Mida saab selle rakendusega teha?</AccordionTrigger>
            <AccordionContent>
            Rakenduse kasutajad saavad peale sisselogimist/registreerimist oma töötunde sisestada kuupäeva ja objekti/projekti alusel. 
            Hiljem tagantjärgi vaadata, millist tööd kus ja kui palju tegid, isaks saavad nad kasutada filtreerimisvõimalusi, et näha näiteks 
            eelmise kuu või eelmise nädala töötunde objekti või projekti kaupa. 
            AjaHaldur võimaldab kasutajatel luua erinevaid kaustasid erinevate töötundide jaoks ning moodustada gruppe, kuhu saab lisada teisi kasutajaid 
            e-posti aadresside abil. Grupi omanikuna on võimalik vaadata grupi liikmete poolt tehtud sissekandeid ja hallata seda infot vastavalt 
            vajadusele.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-black border mb-4 px-2" value="item-6">
            <AccordionTrigger className="text-left">Kes tohivad seda rakendust kasutada?</AccordionTrigger>
            <AccordionContent>
              Rakendus on kasutamiseks kõigile- töötajad, ülemused, tiimijuhid, vabakutselised, jne.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-black border mb-4 px-2" value="item-2">
            <AccordionTrigger className="text-left">Palju maksab selle rakenduse kasutamine?</AccordionTrigger>
            <AccordionContent>
              Rakendust saab kasutada TASUTA! Tasuta-versioonis on kasutajatele täitmiseks kuni X töötabelit ja kuni X gruppi. Kui soovite rohkem tabeleid 
              ja gruppe luua, siis on võimalus liituda meie tasulise versiooniga. Tasulise versiooni hinnakirjaga saad tutvuda SIIN! - cta nupp
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-black border mb-4 px-2" value="item-3">
            <AccordionTrigger className="text-left">Kuidas saan hiljem oma töötunnid ülemusele esitada?</AccordionTrigger>
            <AccordionContent>
              Ülemusele tundide esitamiseks on üldiselt kaks võimalust: <br />
              1. Kui ettevõte on AjaHalduri kasutaja, siis näeb ülemus töötaja sisse kantud tunde automaatselt vastavas grupis. <br />
              2. Kui ettevõte ei kasuta meie rakendust, siis on võimalus oma töötabelis välja filtreerida vastava perioodi, mis tunnid soovid esitada
              ning seejärel tabel välja eksportida PDF-na ning see ülemusele saata.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-black border mb-4 px-2" value="item-4">
            <AccordionTrigger className="text-left">Kas saan AjaHaldurit kasutada ka mobiilis?</AccordionTrigger>
            <AccordionContent>
              Jah. Meie rakendus toetab selle kasutamist ka mobiilibrauseris. Tulevikus soovime välja anda ka äpi.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>

        <div>
          <h2 className="text-xl font-bold pb-2">Tekkis veel küsimusi või ei leidnud vastust?</h2>
          <p className="pb-3">Meie klienditugi on teie teenistuses. Võtke ühendust ja leiame teile vastuse.</p>
          <Button variant="outline" className="bg-bgLight rounded-none border-black">Kirjuta meile!</Button>

        </div>
        </div>


      </section>

      <Footer />




    </>
  );
}

export default Welcome;