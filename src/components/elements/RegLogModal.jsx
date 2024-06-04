import { useEffect, useRef } from 'react';
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

function RegistrationModal({ onClose, activeTab }) {
    const modalRef = useRef();

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
                            <CardDescription className="flex flex-row md:gap-2 items-center flex-wrap">
                                <Checkbox className="md:ml-7 ml-3" />
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
            </div>
        </div>
    );
}

export default RegistrationModal;
