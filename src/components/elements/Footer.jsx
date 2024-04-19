import React from 'react';
import logo from "@/assets/ajahaldur_logo_white.png";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer className="bg-footer text-textInDark p-4 w-full px-6">
            <div className='flex flex-col md:flex-row'>

                <div className="flex flex-col space-y-2 mt-4 mb-8 md:max-w-lg">
                    <div className="flex h-20 w-20 md:h-40 md:w-40">
                        <img src={logo} alt="Logo" />
                    </div>
                    <p className='pb-3 font-normal'>Saa meilt uuenduste teavitusi ja nippe rakenduse kasutamiseks.</p>
                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <input type="email" placeholder="example@gmail.com" className="md:max-w-96 px-2 py-1 w-full text-start border-2 border-white text-textInLight" />
                        <Button variant="outline" className="bg-buttonLight rounded-none w-full text-textInLight md:max-w-28 hover:bg-bgMid">Jälgi!</Button>
                    </div>
                    <p className='font-thin'>* Jälgides nõustute meie privaatsuspoliitikaga ning annate nõusoleku saada uuendusi meie ettevõttelt.</p>
                </div>
                <div className='md:flex md:flex-col-2 md:gap-10 w-full md:justify-evenly md:mt-6'>
                    <div className="flex flex-col items-start gap-4 mb-8">
                        <p className="text-xl font-extrabold">***</p>
                        <Link to="/about" className="hover:text-gray-400 flex items-center gap-2">AjaHaldurist</Link>
                        <Link to="/pricelist" className="hover:text-gray-400 flex items-center gap-2">Hinnakiri</Link>
                        <Link to="/contact" className="hover:text-gray-400 flex items-center gap-2">Kontakt</Link>
                        <Link to="#" className="hover:text-gray-400 flex items-center gap-2">Blogi</Link>

                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl font-normal">Jälgi meid</p>
                        <a href="#" className="hover:text-gray-400 flex items-center gap-2">
                            <BsFacebook className="flex-shrink-0 size-7" />
                            <span>Facebook</span>
                        </a>
                        <a href="#" className="hover:text-gray-400 flex items-center gap-2">
                            <InstagramLogoIcon className="flex-shrink-0 size-7" />
                            <span>Instagram</span>
                        </a>
                        <a href="#" className="hover:text-gray-400 flex items-center gap-2">
                            <LinkedInLogoIcon className="flex-shrink-0 size-7" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-10 mb-10 flex flex-col border-t md:items-center justify-between w-full md:px-3">
                <div className="flex flex-col md:flex-row-reverse md:justify-between gap-4 md:gap-0 md:items-center mt-3 md:w-full">
                    <div className="flex flex-col md:flex-row gap-4 underline underline-offset-4 md:w-full md:justify-end">
                        <a id='priv-policy' href="#" className="hover:text-gray-400">Privaatsusteave</a>
                        <a href="#" className="hover:text-gray-400">Kasutustingimused</a>
                        <a href="#" className="hover:text-gray-400">Küpsiste sätted</a>
                    </div>
                    <p className="text-sm flex items-center md:items-start pt-3 md:w-full">
                        <span className="mr-1">&copy;</span>
                        2024
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
