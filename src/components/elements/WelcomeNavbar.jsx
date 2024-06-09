import { useState, useEffect } from 'react';
import logo from "@/assets/ajahaldur_logo_white.png";
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import RegistrationModal from './RegLogModal';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('register');

    const handleRegistrationClick = () => {
        setIsRegistrationOpen(true);
        setActiveTab('register');
    };

    const handleLoginClick = () => {
        setIsRegistrationOpen(true);
        setActiveTab('login');
    };

    const handleCloseRegistration = () => {
        setIsRegistrationOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menu = document.getElementById('mobile-menu');
            if (menu && !menu.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <nav className="w-full z-10 h-20 bg-footer bg-opacity-80 fixed text-textInDark md:flex justify-between md:px-8 pl-1 pr-4">
            <div className="flex gap-10 h-full items-center">
                <Link to="/">
                    <div className="md:flex h-20 hidden">
                        <img src={logo} alt="Logo" />
                    </div>
                </Link>
                <div className="hidden md:flex gap-6 h-full items-center">
                    <Link to="/"><button className="text-textInDark">Pealeht</button></Link>
                    <Link to="/about"><button className="text-textInDark">Tutvustus</button></Link>
                    <Link to="/pricelist"><button className="text-textInDark">Hinnakiri</button></Link>
                    <Link to="/contact"><button className="text-textInDark">Kontakt</button></Link>
                </div>
            </div>
            <div className='hidden md:flex gap-4 h-full items-center ml-auto'>
                <button className="text-textInLight bg-buttonLight px-6 py-2 rounded-md" onClick={handleRegistrationClick}>Registreeri</button>
                <button className="text-buttonLight border border-buttonLight px-6 py-2 rounded-md" onClick={handleLoginClick}>Logi sisse</button>
            </div>
            <Link to="/">
                <div className="fixed md:hidden z-10 top-0">
                    <img src={logo} alt="Logo" className='h-[80px]' />
                </div>
            </Link>
            <button
                className="md:hidden text-white fixed top-8 right-8 z-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>
            {isMenuOpen && (
                <div id="mobile-menu" className="z-10 md:hidden absolute top-20 left-0 right-0 bg-footer bg-opacity-80 text-textInDark flex flex-col items-center gap-4 px-8 py-4">
                    <Link to="/"><button className="text-textInDark">Pealeht</button></Link>
                    <Link to="/about"><button className="text-textInDark">Tutvustus</button></Link>
                    <Link to="/pricelist"><button className="text-textInDark">Hinnakiri</button></Link>
                    <Link to="/contact"><button className="text-textInDark">Kontakt</button></Link>
                    <div className='flex flex-col gap-4 pt-2 w-48'>
                        <button className="text-textInLight bg-buttonLight rounded-md px-6 py-2" onClick={handleRegistrationClick}>Registreeri</button>
                        <button className="text-buttonLight border bg-footer rounded-md border-buttonLight px-6 py-2" onClick={handleLoginClick}>Logi sisse</button>
                    </div>
                </div>
            )}
            {isRegistrationOpen && <RegistrationModal onClose={handleCloseRegistration} activeTab={activeTab} />}
        </nav>
    );
}

export default Navbar;
