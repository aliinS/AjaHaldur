import { Link as ScrollLink } from 'react-scroll';
import Navbar from '../components/elements/WelcomeNavbar';
import contact_img from "../assets/contact_img.png";
import { Button } from "@/components/ui/button";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from '../components/elements/ContactForm';
import contactform from '../assets/contactform.png';
import Faq from '../components/elements/Faq';
import Footer from '../components/elements/Footer';

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
                            Kui teil on küsimusi, tagasisidet või soovite meiega lihtsalt vestelda,
                            oleme alati hea meelega abiks.
                        </p>
                        <div className="flex gap-2">
                        <a href="#contact-form">
                            <Button className="rounded-none bg-buttonLight text-textInLight hover:bg-footer hover:text-textInDark">Kirjuta meile!</Button>
                        </a>
                        <a href="#contact-ways">
                            <Button variant="outline" className="bg-transparent rounded-none border-buttonLight text-textInDark" >Veel...</Button>
                        </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact-ways' className='w-full bg-bgLight py-16 px-5'>
                <div className='flex flex-col gap-y-20 md:flex-row'>
                    <div className='flex flex-col items-center text-center gap-3 md:w-1/3'>
                        <AiOutlineMail className='size-16' />
                        <h2 className='text-2xl font-bold'>Kirjuta</h2>
                        <p className='text-lg'>Küsimuste või kasutajatoe saamiseks võtke julgelt meiega ühendust.</p>
                        <p className='underline underline-offset-4 font-bold'>AjaHaldur@MISIGANES.com</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-3 md:w-1/3'>
                        <BsTelephone className='size-16' />
                        <h2 className='text-2xl font-bold'>Helista</h2>
                        <p className='text-lg'>Helistage meile, et otse meie meeskonnaga ühendust saada.</p>
                        <p className='underline underline-offset-4 font-bold'>(+372) 51 234 456</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-3 md:w-1/3'>
                        <IoLocationOutline className='size-16' />
                        <h2 className='text-2xl font-bold'>Kontor</h2>
                        <p className='text-lg'>Meie kontor on virtuaalne. Teie küsimustele vastame hea meelega e-posti või telefoni teel.</p>
                        <p className='underline underline-offset-4 font-bold'>AjaHaldur@MISIGANES.com või (+372) 51 234 456</p>
                    </div>
                </div>
            </section>

            <Faq />

            <section id='contact-form' className='flex flex-col gap-10 md:flex-row'>
                <div>
                    <img className="blur-sm w-full h-auto"
                        src={contactform}
                        alt="" />
                </div>
                <div className='text-textInLight md:flex md:flex-col mx-3 md:justify-evenly'>
                    <h2 className='font-bold text-3xl text-center'>Kirjuta meile!</h2>
                    <p className='text-center font-normal pt-2 pb-6'>Kui teil on küsimusi, tahate anda tagasisidet või teil on probleeme meie rakendusega, siis kirjutage meile.</p>

                    <ContactForm />
                </div>

            </section>

            <Footer />


        </>
    )
}

export default Contact
