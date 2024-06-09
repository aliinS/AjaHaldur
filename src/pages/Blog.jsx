import "@/App.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/elements/WelcomeNavbar";
import Footer from "../components/elements/Footer";

function Blog() {

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-4 mx-5 px-10 items-center pt-8 pb-8">
                <div className="flex flex-col gap-6 md:text-start text-center h-full md:w-1/2">
                    <div className="flex flex-col gap-5 pb-5 max-w-[500px] md:pt-[100px] pt-[50px]">
                        <h2 className="font-bold text-3xl md:text-4xl">Blogi on alles valmimisel!</h2>
                        <p>
                            Siit blogist saate tulevikus häid nippe, kuidas meie rakendusest viimast võtta!
                        </p></div>
                </div>
            </div>

            <div className="p-10">
                <Link to="/">
                    <Button
                        variant="secondary"
                        className="w-fit bg-buttonLight text-textInLight"
                    >
                        Esilehele
                    </Button>
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default Blog;
