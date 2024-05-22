import { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import { Checkbox } from "@/components/ui/checkbox";
import { login, logout, register } from "@/api/auth";



function RegistrationModal({ onClose, activeTab }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userData = JSON.parse(localStorage.getItem("user"));


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
            <div className="bg-bgMid p-8 md:min-w-[500px] rounded-lg ">

                {/* REGISTRATION FORM */}
                <Tabs defaultValue={activeTab} className="">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="register" id="register">Registreeri</TabsTrigger>
                        <TabsTrigger value="login" id="login">Logi sisse</TabsTrigger>
                    </TabsList>
                    <TabsContent value="register" id="register">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                register(name, email, password);
                            }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign up</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-2">
                                    <Input
                                        placeholder="Username"
                                        type="name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                    // onClick={() => {
                                    //   register(name, email, password);
                                    // }}
                                    >
                                        Register
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>

                    {/* LOGIN FORM */}
                    <TabsContent value="login" id="login" className="">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                login(email, password);
                            }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Log in</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-2">
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button
                                        className="w-full"
                                    // onClick={() => {
                                    //   login(email, password);
                                    // }}
                                    >
                                        Log in
                                    </Button>
                                    <Button disabled variant="link" className=" mt-2">
                                        Forgot Password?
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                </Tabs>
                <button onClick={onClose} className="absolute top-0 right-0 p-2">
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

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click occurs outside of the menu
            const menu = document.getElementById('mobile-menu');
            if (menu && !menu.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener when the menu is open
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            // Remove event listener when the menu is closed to prevent memory leaks
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        // Cleanup function to remove event listener when component unmounts
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

            {/* Burger menu button for mobile */}
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
            {/* Mobile menu */}
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
            {/* Registration modal */}
            {isRegistrationOpen && <RegistrationModal onClose={handleCloseRegistration} activeTab={activeTab} />}
        </nav>
    );
}

export default Navbar;
