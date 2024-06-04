import Navbar from '../components/elements/WelcomeNavbar';
import Footer from '../components/elements/Footer';
import { Button } from "@/components/ui/button";
import featureimage from "../assets/features_img.png"
import { LucideBox } from 'lucide-react';
import registration from "../assets/registration.png";
import users from "../assets/usersimg.png"
import placeholder from "../assets/placeholder.svg"
import { Link } from 'react-scroll';


function Features() {
    return (
        <>
            <Navbar />

            <section id="about-hero" className="h-screen relative">
                <img
                    className="h-full w-full absolute inset-0 object-cover blur-sm brightness-25"
                    src={featureimage}
                    alt="clocks"
                />

                <div className="absolute inset-0 px-8 flex items-center">
                    <div className="flex flex-col gap-6 justify-center h-full w-1/2 lg:p-10">
                        <h1 className="text-4xl font-bold text-textInDark">
                            Aeg ei ole lõpmatu ressurss!
                        </h1>
                        <p className="text-textInDark">
                            Avastage meie tundide haldamise rakenduse täielik potentsiaal ja optimeerige oma töövoog ning igakuine aruandlus!
                        </p>
                        <div className="flex gap-2">
                        <Link to="second-info" smooth={true} duration={500}>
                                <Button className=" bg-buttonLight text-textInLight hover:bg-footer hover:text-textInDark">Alusta!</Button>
                            </Link>
                            <Link to="second-info" smooth={true} duration={500}>
                                <Button variant="outline" className="bg-transparent border-buttonLight text-textInDark" >Loe edasi...</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="second-info" className="flex flex-col md:flex-row gap-4 mx-5 px-10 items-center pt-10 pb-10">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Konto loomine on imelihtne!</h2>
                        <p>
                            Peale esialgset sättimist saad kiirelt ja mugavalt oma tiimi graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
                        </p></div>
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 max-w-[500px]">
                        <div className="flex flex-col gap-2 lg:w-1/2 items-center md:text-center">
                            <LucideBox size={32} />
                            <h2 className="font-bold text-lg">Lihtne kasutajaliides</h2>
                            <p className="text-sm">Meie rakenduse kasutamiseks ei ole vaja eelnevaid teadmisi. Lihtne ja selge liides võimaldab teil koheselt tööle asuda.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2 items-center md:text-center">
                            <LucideBox size={32} />
                            <h2 className="font-bold text-lg">Kiire ja efektiivne seadistamine</h2>
                            <p className="text-sm">Töötajate lisamine, gruppide ja personaalsete tabelite loomine on kiire ja lihtne.</p>
                        </div>
                    </div>
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end md:items-center">
                    <img src={registration} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
                </div>
            </section>

            <section id="third-info" className="flex flex-col md:flex-row-reverse gap-4 px-16 items-center pt-10 pb-10 bg-gradient-to-r from-bgLight">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Kutsu oma tiimiliikmed kampa!</h2>
                        <p>
                        Meie kasutajasõbralik liides muudab meeskonnatöö lihtsaks! 
                        </p></div>
                    <div className="flex flex-col gap-4 max-w-[500px]">
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Kutsuge oma meeskond vaid mõne hiireklõpsuga!</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Lisage uusi meeskonnaliikmeid ja määrake rolle sekunditega.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Looge meeskonnaliikmete jaoks kohandatud rolle ja õigusi.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Säästke aega ja vaeva ning alustage oma meeskonnatööga kohe!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end">
                    <img src={users} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
                </div>
            </section>

            <section id="fourth-info" className="flex flex-col md:flex-row gap-4 px-16 items-center pt-10 pb-10 bg-gradient-to-r from-bgMid">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Loo hõlpsalt graafikuid!</h2>
                        <p>
                            Peale esialgset sättimist saad kiirelt ja mugavalt oma tiimi graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
                        </p></div>
                    <div className="flex flex-col lg:flex-row gap-4 max-w-[500px]">
                        <div className="flex flex-col gap-2 lg:w-1/2 items-center md:text-center">
                            <h2 className="font-bold text-lg">Lihtne kasutajaliides</h2>
                            <p className="text-sm">Meie rakenduse kasutamiseks ei ole vaja eelnevaid teadmisi. Lihtne ja selge liides võimaldab teil koheselt tööle asuda.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2 items-center md:text-center">
                            <h2 className="font-bold text-lg">Kiire ja efektiivne seadistamine</h2>
                            <p className="text-sm">Töötajate lisamine, gruppide ja personaalsete tabelite loomine on kiire ja lihtne.</p>
                        </div>
                    </div>
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end">
                    <img src={placeholder} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
                </div>
            </section>

            <section id="fifth-info" className="flex flex-col md:flex-row gap-4 px-16 items-center pt-10 pb-10 bg-gradient-to-r from-bgDark">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Jälgi oma töötatud tunde!</h2>
                        <p>
                            Peale esialgset sättimist saad kiirelt ja mugavalt oma tiimi graafikuid moodustada, nende tööaega jälgida ja analüüse teha.
                        </p></div>
                    <div className="flex flex-col lg:flex-row gap-4 max-w-[500px]">
                        <div className="flex flex-col gap-2 lg:w-1/2 items-center">
                            <LucideBox size={32} />
                            <h2 className="font-bold text-lg">Lihtne kasutajaliides</h2>
                            <p className="text-sm">Meie rakenduse kasutamiseks ei ole vaja eelnevaid teadmisi. Lihtne ja selge liides võimaldab teil koheselt tööle asuda.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2 items-center">
                            <LucideBox size={32} />
                            <h2 className="font-bold text-lg">Kiire ja efektiivne seadistamine</h2>
                            <p className="text-sm">Töötajate lisamine, gruppide ja personaalsete tabelite loomine on kiire ja lihtne.</p>
                        </div>
                    </div>
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end">
                    <img src={placeholder} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
                </div>
            </section>

            <section id="sixth-info" className="flex flex-col md:flex-row-reverse gap-4 px-16 items-center pt-10 pb-10 bg-gradient-to-r from-bgMid">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Jälgi ja analüüsi oma tööaega!</h2>
                        <p>
                        Meie kasutajasõbralik liides muudab meeskonnatöö lihtsaks! 
                        </p></div>
                    <div className="flex flex-col gap-4 max-w-[500px]">
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Kutsuge oma meeskond vaid mõne hiireklõpsuga!</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Lisage uusi meeskonnaliikmeid ja määrake rolle sekunditega.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Looge meeskonnaliikmete jaoks kohandatud rolle ja õigusi.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <LucideBox size={20} />
                            <p className="text-sm">Säästke aega ja vaeva ning alustage oma meeskonnatööga kohe!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end">
                    <img src={placeholder} alt="Screenshot of AjaHaldur personal table" className="max-h-[600px] w-auto object-cover" />
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Features