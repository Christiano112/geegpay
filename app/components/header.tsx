"use client";

import Image from "next/image";
import { inter } from "../font";
import SearchInput from "./ui/search";
import { ArrowDownIcon2, BellIcon, CalendarIcon, ManImage } from "../utils/images";

type PropType = {
    onSearch: (search: string) => void;
};

const Header = ({ onSearch }: PropType) => {
    return (
        <header className="bg-grey flex items-center gap-6 justify-between p-4 border-b border-b-[#EBECF2]">
            <h1 className="font-semibold text-xl text-dark">Dashboard</h1>
            <div className={`${inter.className} flex items-center gap-4 text-dark w-full grow`}>
                <SearchInput onSearch={onSearch} />

                <div className="flex items-center gap-2">
                    <Image src={CalendarIcon} alt="Calendar" />
                    <span className="font-medium text-sm whitespace-nowrap">November 15, 2023</span>
                </div>
                <button className="border border-light-ash3 p-1 rounded-full grid place-items-center">
                    <Image src={BellIcon} alt="Bell" />
                </button>
                <div className="flex items-center gap-1">
                    <Image src={ManImage} alt="Profile" />
                    <div className="flex flex-col text-xs">
                        <span>Justin Bergson</span>
                        <span>Justin@gmail.com</span>
                    </div>
                    <button>
                        <Image src={ArrowDownIcon2} alt="Arrow Down" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
