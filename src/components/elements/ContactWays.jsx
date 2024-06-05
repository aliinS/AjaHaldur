import { Mail, Phone,  MapPin } from 'lucide-react';

function ContactWays() {

    return (
        <>
            <section id="contact-ways" className="w-full bg-bgLight py-16 px-5">
                <div className="flex flex-col gap-y-20 md:flex-row">
                    <div className="flex flex-col items-center text-center gap-3 md:w-1/3">
                        <Mail className="size-16" />
                        <h2 className="text-2xl font-bold">Kirjuta</h2>
                        <p className="text-lg">
                            Küsimuste või kasutajatoe saamiseks võtke julgelt meiega ühendust.
                        </p>
                        <p className="underline underline-offset-4 font-bold">
                            info@ajahaldur.com *
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 md:w-1/3">
                        <Phone className="size-16" />
                        <h2 className="text-2xl font-bold">Helista</h2>
                        <p className="text-lg">
                            Helistage meile, et otse meie meeskonnaga ühendust saada.
                        </p>
                        <p className="underline underline-offset-4 font-bold">
                            (+372) 51 234 567
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 md:w-1/3">
                        <MapPin className="size-16" />
                        <h2 className="text-2xl font-bold">Kontor</h2>
                        <p className="text-lg">
                            Meie kontor on virtuaalne. Teie küsimustele vastame hea meelega
                            e-posti või telefoni teel.
                        </p>
                        <p className="underline underline-offset-4 font-bold">
                            info@ajahaldur.com või (+372) 51 234 567
                        </p>
                    </div>
                </div>
            </section>
        </>

    );
}

export default ContactWays;