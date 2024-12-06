import "@/App.css";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";
import Faq from "../components/elements/Faq";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

function Cookies() {
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setAnalyticsCookies(preferences.analytics);
      setMarketingCookies(preferences.marketing);
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify({
      analytics: analyticsCookies,
      marketing: marketingCookies
    }));
    // Here you would typically trigger any necessary cookie updates
    alert('Küpsiste eelistused on salvestatud!');
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-16 max-w-4xl pt-28">
        <h1 className="text-4xl font-bold mb-8">Küpsiste Seaded</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 mb-6">
              Kasutame küpsiseid, et pakkuda paremat kasutajakogemust ja analüüsida veebisaidi kasutust. 
              Siit saate hallata oma küpsiste eelistusi.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Hädavajalikud Küpsised</h3>
                <p className="text-sm text-gray-600">
                  Need küpsised on vajalikud veebisaidi toimimiseks ja neid ei saa välja lülitada.
                </p>
              </div>
              <Switch 
                checked={essentialCookies} 
                disabled={true}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Analüütilised Küpsised</h3>
                <p className="text-sm text-gray-600">
                  Aitavad meil mõista, kuidas külastajad veebisaiti kasutavad.
                </p>
              </div>
              <Switch 
                checked={analyticsCookies}
                onCheckedChange={setAnalyticsCookies}
              />
            </div>
          </section>

          <section className="pt-4">
            <button 
              onClick={savePreferences}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Salvesta Eelistused
            </button>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Lisainfo</h2>
            <p className="text-gray-700">
              Küsimuste korral küpsiste kasutamise kohta võtke meiega ühendust aadressil{" "}
              <a href="mailto:ajahaldur@matlikofficial.com" className="text-blue-600 hover:underline">
                ajahaldur@matlikofficial.com
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

export default Cookies; 