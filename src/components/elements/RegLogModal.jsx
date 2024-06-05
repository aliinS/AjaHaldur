import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card2";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { login, logout, register } from "@/api/auth";

function RegistrationModal({ onClose, activeTab }) {
    const modalRef = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
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
            <div ref={modalRef} className="bg-bgMid p-8 md:min-w-[500px] w-[350px] rounded-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">
                    <X size={24} color='black' />
                </button>

                <Tabs defaultValue={activeTab}>

                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="register" id="register">Registreeri</TabsTrigger>
                        <TabsTrigger value="login" id="login">Logi sisse</TabsTrigger>
                    </TabsList>

                    <TabsContent value="register" id="register">
                        <Card>
                            <CardHeader>
                                <CardTitle>Registreeri</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        register(name, email, password);
                                    }}
                                    className="flex flex-col gap-4 text-white"
                                >
                                    <Input
                                        placeholder="Name"
                                        type="text"
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
                                    <Button className="w-full">Sign up</Button>
                                </form>
                            </CardContent>
                            <CardDescription className="flex flex-row md:gap-2 items-center flex-wrap">
                                <Checkbox required className="md:ml-7 ml-3" />
                                <p className='md:pl-2 leading-snug pb-3 md:ml-0 ml-3'>Konto registreerimisel nõustud meie <br /><a className='underline pr-1' href="#">privaatsuspoliitika</a>ja muude tingimustega.</p>
                            </CardDescription>
                            <CardFooter>
                                <Button className="bg-footer">Registreeri</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="login" id="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Logi sisse</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        login(email, password);
                                    }}
                                    className="flex flex-col gap-4 text-white"
                                >
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
                                    <Button className="w-full">Log in</Button>
                                    <Button disabled variant="link" className="text-white mt-2">
                                        Forgot Password?
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter>
                                <Button>Logi sisse</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    );
}

export default RegistrationModal;
