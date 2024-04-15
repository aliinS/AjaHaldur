import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";


function Faq() {


  return (
    <>
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
              <AccordionTrigger className="text-left">Kes saavad seda rakendust kasutada?</AccordionTrigger>
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
            <a href="/contact#contact-form">
              <Button variant="outline" className="bg-bgLight rounded-none border-black">Kirjuta meile!</Button>
            </a>

          </div>
        </div>


      </section>
    </>
  );
}

export default Faq;
