import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, logout, register } from "@/auth/auth";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LogOutIcon } from "lucide-react";

const Navigation = () => {
  const { theme = "system" } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData) {
    return (
      <div>
        <Sheet theme={theme}>
          <SheetTrigger>
            <Menu color="white" size="36px" />
          </SheetTrigger>
          <SheetContent>
            <Tabs defaultValue="account" className="w-full my-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Login</TabsTrigger>
                <TabsTrigger value="password">Sign up</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
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
                        variant="secondary"
                        className="w-full"
                        // onClick={() => {
                        //   login(email, password);
                        // }}
                      >
                        Log in
                      </Button>
                      <Button
                        disabled
                        variant="link"
                        className="text-white mt-2"
                      >
                        Forgot Password?
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </TabsContent>
              <TabsContent value="password">
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
                        variant="secondary"
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
            </Tabs>
          </SheetContent>
        </Sheet>
      </div>
    );
  } else if (userData) {
    return (
      <div className="flex gap-4 items-center">
        <p className="text-white">
          Welocome back, <span className="font-bold">{userData.name}</span>
        </p>
        <div className="h-6 rounded-full bg-white w-[1px]"></div>
        <Button
          variant="secondary"
          onClick={() => {
            logout();
          }}
        >
          <LogOutIcon className="mr-2" />
          Log out
        </Button>
      </div>
    );
  }
};

export { Navigation };
