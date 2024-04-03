import React, { useState } from 'react';
import logo from "@/assets/ajahaldur_logo_white.png";
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full h-20 bg-footer text-textInDark flex justify-between px-8">
            <div className="flex gap-10 h-full items-center">
                <div className="flex h-20">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="hidden md:flex gap-6 h-full items-center">
                    <button className="text-textInDark">Pealeht</button>
                    <button className="text-textInDark">Tutvustus</button>
                    <button className="text-textInDark">Hinnakiri</button>
                </div>
            </div>
            <div className='hidden md:flex gap-4 h-full items-center'>
                <button className="text-textInLight bg-buttonLight rounded-none px-6 py-2">Registreeri</button>
                <button className="text-buttonLight border border-buttonLight rounded-none px-6 py-2">Logi sisse</button>
            </div>
            {/* Burger menu button for mobile */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="z-10 md:hidden absolute top-20 left-0 right-0 bg-footer text-textInDark flex flex-col items-center gap-4 px-8 py-4">
                    <button className="text-textInDark">Pealeht</button>
                    <button className="text-textInDark">Tutvustus</button>
                    <button className="text-textInDark">Hinnakiri</button>
                    <div className='flex flex-col gap-4 pt-8 w-48'>
                        <button className="text-textInLight bg-buttonLight rounded-none px-6 py-2">Registreeri</button>
                        <button className="text-buttonLight border border-buttonLight rounded-none px-6 py-2">Logi sisse</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
