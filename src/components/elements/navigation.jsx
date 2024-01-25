import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, logout, register } from "@/api/auth";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LogOut, Settings } from "lucide-react";
import { Link, redirect, useNavigate } from "react-router-dom";

const Navigation = () => {
  const { theme = "system" } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  if (!userData) {
    return (
      <div>
        <div className="hidden lg:flex text-white gap-4">
          <AlertDialog>
            <AlertDialogTrigger>Log in</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              </AlertDialogHeader>
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
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger>Sign up</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
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
      </div>
    );
  } else if (userData) {
    return (
      <div>
        <Sheet className="block md:hidden">
          <SheetTrigger>
            <Menu color="white" size="36px" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4">
            <SheetHeader>
              <SheetTitle>Welcome back, {userData.name}</SheetTitle>
            </SheetHeader>
            <Separator />
            <div>
              <Button
                className="w-full"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </Button>
            </div>
            <Separator />
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                navigate("/settingsTable");
              }}
            >
              <Settings className="mr-2" />
              Settings
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                logout();
              }}
            >
              <LogOut className="mr-2" />
              Log out
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
};

export { Navigation };
