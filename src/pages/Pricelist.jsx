import Navbar from "../components/elements/WelcomeNavbar";
import pricing_img from "../assets/pricelist_img.png";
import { Button } from "@/components/ui/button";
import Faq from "../components/elements/Faq";
import Footer from "../components/elements/Footer";
import { Check } from 'lucide-react';
import ContactWays from "../components/elements/ContactWays";
import { Link } from 'react-scroll';


function Pricelist() {

    return (
        <>
            <Navbar />

            <section id="pricelist-banner" className="h-screen relative">
                <img
                    className="h-full w-full absolute inset-0 object-cover blur-sm brightness-50"
                    src={pricing_img}
                    alt="Happy workers behind computers"
                />

                <div className="absolute inset-0 px-8 flex items-center">
                    <div className="flex flex-col gap-6 justify-center h-full w-1/2 lg:p-10">
                        <h1 className="text-4xl font-bold text-textInDark">
                            AjaHalduri põhifunktsioonide kasutamine on tasuta!
                        </h1>
                        <p className="text-textInDark">
                            Kui soovid rohkemat teada, siis..
                        </p>
                        <div className="flex gap-2">
                            <Link to="pricelist" smooth={true} duration={500}>
                                <Button className="bg-buttonLight text-textInLight hover:bg-footer hover:text-textInDark">
                                    Vaata hinnakirja...
                                </Button>
                            </Link>
                            <a href="/contact">
                                <Button
                                    variant="outline"
                                    className="bg-transparent border-buttonLight text-textInDark"
                                >
                                    Võta ühendust
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricelist" className=" bg-gradient-to-r from-bgLight flex flex-col text-center px-16 py-20 w-full">
                <div>
                    <h1 className="font-bold text-3xl">PAKETID</h1>
                    <p className="pt-3 mb-10 md:mb-20">Tee sobiv valik lähtudes oma vajadustest.</p>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <div className="border rounded-md border-black p-10 flex flex-col gap-3 items-center w-fit">
                        <h2 className="font-bold text-2xl">BASIC</h2>
                        <h2 className="text-xl">Hind: <b>0€</b></h2>
                        <Button className="bg-black text-textInDark w-[200px] m-4">Vali</Button>
                        <p>Pakett sisaldab:</p>
                        <div className="flex flex-col-2">
                            <ul className="divide-y divide-black border-e border-black text-start">
                                <li className="p-2">Personaaltabel</li>
                                <li className="p-2">Grupp</li>
                                <li className="p-2">Tiimi suurus grupis</li>
                                <li className="p-2">Andmete filtreerimine</li>
                                <li className="p-2">Andmete eksport</li>
                                <li className="p-2">Klienditugi</li>
                            </ul>
                            <ul className="divide-y divide-black ">
                                <li className="p-2">X tk</li>
                                <li className="p-2">X tk</li>
                                <li className="p-2">max X</li>
                                <li className="p-2"><Check /></li>
                                <li className="p-2"><Check /></li>
                                <li className="p-2"><Check /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border rounded-md border-black p-10 flex flex-col gap-3 items-center w-fit">
                        <h2 className="font-bold text-2xl">ADVANCED</h2>
                        <h2 className="text-xl">Hind: <b>X€</b></h2>
                        <Button className=" bg-black text-textInDark w-[200px] m-4">Vali</Button>
                        <p>Pakett sisaldab:</p>
                        <div className="flex flex-col-2">
                            <ul className="divide-y divide-black border-e border-black text-start">
                                <li className="p-2">Personaaltabel</li>
                                <li className="p-2">Grupp</li>
                                <li className="p-2">Tiimi suurus grupis</li>
                                <li className="p-2">Andmete filtreerimine</li>
                                <li className="p-2">Andmete eksport</li>
                                <li className="p-2">Klienditugi</li>
                            </ul>
                            <ul className="divide-y divide-black ">
                                <li className="p-2">X tk</li>
                                <li className="p-2">X tk</li>
                                <li className="p-2">max X</li>
                                <li className="p-2"><Check /></li>
                                <li className="p-2"><Check /></li>
                                <li className="p-2"><Check /></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </section>

            <Faq />

            <ContactWays />

            <Footer />
        </>
    );
}

export default Pricelist;