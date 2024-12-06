import "@/App.css";
import { Navigation } from "@/components/elements/navigation";
import { Button } from "@/components/ui/button";
import { Boxes, LucideBox, Check } from "lucide-react";
import firstimg from "@/assets/first_image.png";
import secondimg from "@/assets/second_image.png";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";
import Faq from "../components/elements/Faq";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Privacy() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-16 max-w-4xl pt-28">
        <h1 className="text-4xl font-bold mb-8">Privaatsuspoliitika</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Kogutav Informatsioon</h2>
            <p className="text-gray-700 mb-4">
              Konto loomisel ja teenuse kasutamisel kogume järgmist informatsiooni:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Nimi</li>
              <li>E-posti aadress</li>
              <li>Parool (krüpteeritud)</li>
              <li>Profiilipilt (valikuline)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Kuidas Me Kasutame Teie Andmeid</h2>
            <p className="text-gray-700 mb-4">
              Teie andmeid kasutatakse ainult:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Konto loomiseks ja haldamiseks</li>
              <li>Autentimiseks ja turvalisuse tagamiseks</li>
              <li>Teenuste pakkumiseks ja parendamiseks</li>
              <li>Teiega suhtlemiseks teie konto ja meie teenuste osas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Andmekaitse</h2>
            <p className="text-gray-700 mb-4">
              Võtame teie andmete turvalisust tõsiselt. Teie parool on krüpteeritud ja kõik andmed on turvaliselt talletatud. Me ei jaga ega müü teie isikuandmeid kolmandatele osapooltele.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Teie Õigused</h2>
            <p className="text-gray-700 mb-4">
              Teil on õigus:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Pääseda ligi oma isikuandmetele</li>
              <li>Uuendada oma profiili informatsiooni (nimi, e-post ja profiilipilt) igal ajal</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Kui soovite oma konto kustutada, palun võtke meiega ühendust aadressil{" "}
              <a href="mailto:privacy-ajahaldur@matlikofficial.com" className="text-blue-600 hover:underline">
                privacy-ajahaldur@matlikofficial.com
              </a>
              . Konto kustutamisel eemaldame:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Teie isikuandmed (nimi, e-post, profiilipilt)</li>
              <li>Kõik teie isiklikud tabelid ja nende sisu</li>
              <li>Teie meeskondade liikmelisused</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Märkus: Kõik meeskondades loodud tabelid jäävad meeskonna omanikele statistilistel ja ajaloolistel eesmärkidel kättesaadavaks, kuid need ei ole enam seotud teie isikuandmetega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Võtke Meiega Ühendust</h2>
            <p className="text-gray-700">
              Kui teil on küsimusi meie privaatsuspoliitika või andmete käsitlemise kohta, palun võtke meiega ühendust aadressil{" "}
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

export default Privacy;
