import React, { useState, useEffect } from 'react';
import logo from "@/assets/ajahaldur_logo_white.png";
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function RegistrationModal({ onClose, activeTab }) {

    //PRESS ESC TO CLOSE THE MODAL
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    //CLICK OUTSIDE THE FORM TO CLOSE THE MODAL
    const handleOutsideClick = (event) => {
        const modal = document.querySelector('.bg-bgDark');
        if (modal && !modal.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);



    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-footer bg-opacity-50 z-10">
            <div className="bg-bgDark p-8 rounded-lg md:h-[500px] max-w-[350px] md:max-w-[500px] h-[530px]">

                {/* REGISTRATION FORM */}
                <Tabs defaultValue={activeTab} className="md:w-[400px] w-[300px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="register" id="register">Registreeri</TabsTrigger>
                        <TabsTrigger value="login" id="login">Logi sisse</TabsTrigger>
                    </TabsList>
                    <TabsContent value="register" id="register">
                        <Card>
                            <CardHeader>
                                <CardTitle>Registreeri</CardTitle>
                                <CardDescription>
                                    Konto registreerimisel nõustud meie privaatsuspoliitika ja muude tingimustega.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Nimi</Label>
                                    <Input id="name" placeholder="Nimi" autoComplete="name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" placeholder="example@gmail.com" autoComplete="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Parool</Label>
                                    <Input id="password" placeholder="parool" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Registreeri</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* LOGIN FORM */}
                    <TabsContent value="login" id="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Logi sisse</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="example@gmail.com" autoComplete="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Parool</Label>
                                    <Input id="password" type="password" placeholder="parool" autoComplete="current-password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Logi sisse</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
                <button onClick={onClose} className="absolute top-0 right-0 p-2 text-">
                    <X size={24} />
                </button>
            </div>
        </div>
    );
}

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

    return (
        <nav className="w-full z-10 h-20 bg-footer bg-opacity-80 fixed text-textInDark md:flex justify-between md:px-8 pl-1 pr-4">
            <div className="flex gap-10 h-full items-center">
                <div className="md:flex h-20 hidden">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="hidden md:flex gap-6 h-full items-center">
                    <button className="text-textInDark">Pealeht</button>
                    <button className="text-textInDark">Tutvustus</button>
                    <button className="text-textInDark">Hinnakiri</button>
                </div>
            </div>
            <div className='hidden md:flex gap-4 h-full items-center'>
                <button className="text-textInLight bg-buttonLight rounded-none px-6 py-2" onClick={handleRegistrationClick}>Registreeri</button>
                <button className="text-buttonLight border border-buttonLight rounded-none px-6 py-2" onClick={handleLoginClick}>Logi sisse</button>
            </div>
            {/* Burger menu button for mobile */}
            <div className="fixed md:hidden z-10 top-0">
                <img src={logo} alt="Logo" className='h-[80px]' />
            </div>
            <button
                className="md:hidden text-white fixed top-8 right-8 z-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="z-10 md:hidden absolute top-20 left-0 right-0 bg-footer bg-opacity-80 text-textInDark flex flex-col items-center gap-4 px-8 py-4">
                    <button className="text-textInDark">Pealeht</button>
                    <button className="text-textInDark">Tutvustus</button>
                    <button className="text-textInDark">Hinnakiri</button>
                    <div className='flex flex-col gap-4 pt-8 w-48'>
                        <button className="text-textInLight bg-buttonLight rounded-none px-6 py-2" onClick={handleRegistrationClick}>Registreeri</button>
                        <button className="text-buttonLight border border-buttonLight rounded-none px-6 py-2" onClick={handleLoginClick}>Logi sisse</button>
                    </div>
                </div>
            )}
            {/* Registration modal */}
            {isRegistrationOpen && <RegistrationModal onClose={handleCloseRegistration} activeTab={activeTab} />}
        </nav>
    );
}

export default Navbar;
