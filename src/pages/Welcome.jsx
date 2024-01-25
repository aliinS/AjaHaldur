import { useState } from "react";
import { Menu } from 'lucide-react'
import logo from '../assets/Ajahaldur_Logo_1.svg'
import preview from '../assets/preview.jpg'
import '../App.css'
import { Outlet, Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios'

function Welcome() {

  // axios.get('test').then((response) => {
  //   console.log(response);
  // })

  return (
    <>
      <div className="flex flex-col relative h-[100vh] p-[2rem] max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>

          <div>
            <Sheet>
            <SheetTrigger><Menu color='white' size='36px' /></SheetTrigger>
            <SheetContent>
                <Tabs defaultValue="account" className="w-full my-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Sign up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card>
                      <CardHeader>
                        <CardTitle>Log in</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-2">
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                      </CardContent>
                      <CardFooter>
                        <Button variant="secondary" className="w-full">
                          Log in
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign up</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <Input placeholder="Username" />
                            <Input placeholder="Email" />
                            <Input placeholder="Password" />
                            <Input placeholder="Re-enter password" />
                        </CardContent>
                        <CardFooter>
                                <Button variant="secondary" className="w-full">Log in</Button>
                        </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
            </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-white mt-12 w-full text-left lg:w-1/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur in facilis vitae natus totam laborum, quia reprehenderit! Dolore sit harum omnis a pariatur officia dolorem commodi sed tempore aperiam provident voluptas neque, laborum cumque assumenda, perspiciatis optio quo deleniti quam perferendis veritatis. Harum soluta enim commodi nostrum, laudantium aliquid.</p>
          <Link to="/dashboard"><Button className='bg-[#040404] w-fit h-fit px-12 mt-4 lg:text-xl lg:py-2'>Try it out</Button></Link>
        </div>

        <div className="flex w-full h-full justify-center mt-24 p-4">
          <img className=" lg:absolute lg:-bottom-20 -z-10 lg:w-[1000px] h-fit rounded-lg" src={preview} alt="" />
        </div>
      </div>

      <div className="flex flex-col h-[100vh] bg-[#1A1A1A] p-[2rem]">
        
      </div>
    </>
  );
}

export default Welcome;
