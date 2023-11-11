import Container from "@/components/common/Container";
import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import { IoMdGlasses } from "react-icons/io";

const Header = () => {
    return (
        <header className="w-full border-b">
            <Container className="flex items-center gap-5 justify-between h-20">
                <Link
                    href="/"
                    className="flex items-center gap-1 text-xl font-semibold italic text-purple-700"
                >
                    <IoMdGlasses className="h-8 w-8" /> Chokidar
                </Link>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;
