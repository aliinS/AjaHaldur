import Navbar from "../components/elements/WelcomeNavbar";
import contact_img from "../assets/contact_img.png";
import { Button } from "@/components/ui/button";
import ContactForm from "../components/elements/ContactForm";
import contactform from "../assets/contactform.png";
import Faq from "../components/elements/Faq";
import Footer from "../components/elements/Footer";
import ContactWays from "../components/elements/ContactWays";

function Contact() {
  return (
    <>
      <Navbar />

      <section id="contact-banner" className="h-screen relative">
        <img
          className="h-full w-full absolute inset-0 object-cover blur-sm brightness-50"
          src={contact_img}
          alt="Happy workers behind computers"
        />

        <div className="absolute inset-0 px-8 flex items-center">
          <div className="flex flex-col gap-6 justify-center h-full w-1/2 lg:p-10">
            <h1 className="text-4xl font-bold text-textInDark">
              Soovime olla teile kättesaadavad!
            </h1>
            <p className="text-textInDark">
              Kui teil on küsimusi, tagasisidet või soovite meiega lihtsalt
              vestelda, oleme alati hea meelega abiks.
            </p>
            <div className="flex gap-2">
              <a href="#contact-form">
                <Button className=" bg-buttonLight text-textInLight hover:bg-footer hover:text-textInDark">
                  Kirjuta meile!
                </Button>
              </a>
              <a href="#contact-ways">
                <Button
                  variant="outline"
                  className="bg-transparent border-buttonLight text-textInDark"
                >
                  Veel...
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactWays />

      <Faq />

      <section
        id="contact-form"
        className="flex flex-col gap-10 md:flex-row md:py-8 md:pl-6"
      >
        <div>
          <img className="blur-sm w-full h-auto" src={contactform} alt="" />
        </div>
        <div className="text-textInLight md:flex md:flex-col mx-3 md:justify-evenly">
          <h2 className="font-bold text-3xl text-center">Kirjuta meile!</h2>
          <p className="text-center font-normal pt-2 pb-4">
            Kui teil on küsimusi, tahate anda tagasisidet või teil on probleeme
            meie rakendusega, siis kirjutage meile.
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
