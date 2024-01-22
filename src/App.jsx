import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
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
                    <Button variant="secondary" className="w-full">
                      Log in
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
        </SheetContent>
      </Sheet>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
