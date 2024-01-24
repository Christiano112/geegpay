import Image from "next/image";
import Link from "next/link";
import { Logo } from "../utils/images";

const SideNav = () => {
    return (
        <nav className="max-w-[5rem] p-4 shadow-2xl relative h-full z-50 transition-all duration-150 ease-out md:ease-in">
            <Image src={Logo} alt="Logo" />
            SideNav
        </nav>
    )
}

export default SideNav;
