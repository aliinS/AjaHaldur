import "@/App.css";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";
import Faq from "../components/elements/Faq";

function Terms() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-16 max-w-4xl pt-28">
        <h1 className="text-4xl font-bold mb-8">Kasutustingimused</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Teenuse Kasutamine</h2>
            <p className="text-gray-700 mb-4">
              AjaHaldur on mõeldud kasutamiseks isiklikuks ja meeskonnatööks. Teenuse kasutamiseks peate:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Olema vähemalt 13-aastane</li>
              <li>Registreeruma kehtiva e-posti aadressiga</li>
              <li>Hoidma oma kontoandmed turvaliselt</li>
              <li>Kasutama teenust seaduslikul eesmärgil</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Kasutaja Kohustused</h2>
            <p className="text-gray-700 mb-4">
              Teenuse kasutamisel kohustute:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Mitte jagama oma kontoandmeid teistega</li>
              <li>Mitte kasutama teenust pahatahtlikul eesmärgil</li>
              <li>Austama teiste kasutajate privaatsust</li>
              <li>Järgima kõiki kehtivaid seadusi ja eeskirju</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellektuaalne Omand</h2>
            <p className="text-gray-700 mb-4">
              AjaHaldur ja kõik sellega seotud materjalid on kaitstud autoriõigusega. Kasutajad säilitavad õigused oma loodud sisule, kuid annavad meile õiguse seda sisu kuvada ja töödelda teenuse osutamiseks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Teenuse Kättesaadavus</h2>
            <p className="text-gray-700 mb-4">
              Püüame tagada teenuse pideva kättesaadavuse, kuid võime:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Teha plaanilisi hooldustöid</li>
              <li>Uuendada teenust parema kasutajakogemuse tagamiseks</li>
              <li>Piirata ligipääsu turvalisuse tagamiseks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Vastutuse Piiramine</h2>
            <p className="text-gray-700 mb-4">
              AjaHaldur ei vastuta:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Kasutaja poolt sisestatud andmete õigsuse eest</li>
              <li>Teenuse kasutamisest tingitud kaudsete kahjude eest</li>
              <li>Vääramatu jõu tõttu tekkinud tõrgete eest</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Kontakt</h2>
            <p className="text-gray-700">
              Küsimuste korral kasutustingimuste kohta võtke meiega ühendust aadressil{" "}
              <a href="mailto:privacy-ajahaldur@matlikofficial.com" className="text-blue-600 hover:underline">
                privacy-ajahaldur@matlikofficial.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
}

export default Terms; 