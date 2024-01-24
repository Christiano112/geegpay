import Image from "next/image";
import Link from "next/link";
import { linkData } from "../utils/data";
import { BrightnessImage, Logo, MoonIcon, VectorIcon } from "../utils/images";

const SideNav = () => {
    const dashboardLink = linkData[0];
    const upperLinks = linkData.slice(1, 6);
    const lowerLinks = linkData.slice(6);

    return (
        <nav className="max-w-[5rem] py-4 pl-4 bg-gray2 relative h-full z-50 transition-all duration-150 ease-out md:ease-in border-r border-r-[#EBECF2]">
            <div className="pr-4 mb-12 grid place-items-center">
                <Image src={Logo} alt="Logo" />
            </div>

            <div className="flex justify-between items-center mb-4">
                <Link href="#" className="ml-3">
                    <Image src={dashboardLink.imgSrc} alt={dashboardLink.title} />
                </Link>
                <button className="">
                    <Image src={VectorIcon} alt="toggle side nav" />
                </button>
            </div>

            <ul className="mr-4 mb-6 flex flex-col items-center gap-4 self-stretch">
                {upperLinks.map((item) => (
                    <li key={item.id}>
                        <Link href="#">
                            <Image src={item.imgSrc} alt={item.title} />
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="mr-4 mb-20 bg-white rounded-full p-2 flex flex-col justify-center items-center gap-4">
                <li>
                    <Link href="#" className="rounded-full p-2 bg-primary grid place-items-center">
                        <Image src={BrightnessImage} alt="bright" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={MoonIcon} alt="moon" />
                    </Link>
                </li>
            </ul>

            <ul className="mr-4 flex flex-col items-center gap-4 self-stretch mt-auto">
                {lowerLinks.map((item) => (
                    <li key={item.id}>
                        <Link href="#">
                            <Image src={item.imgSrc} alt={item.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
