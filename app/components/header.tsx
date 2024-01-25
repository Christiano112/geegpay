"use client";

import Image from "next/image";
import { memo } from "react";
import { inter } from "../font";
import SearchInput from "./ui/search";
import { ArrowDownIcon2, BellIcon, CategoryImage, CalendarIcon, ManImage } from "../utils/images";

type PropType = {
    showNav: boolean;
    onSearch: (search: string) => void;
    setShowNav: (showNav: boolean) => void;
};

const Header = memo(({ onSearch, showNav, setShowNav }: PropType) => {
    return (
        <header className="bg-grey flex items-center gap-6 justify-between p-4 border-b border-b-[#EBECF2]">
            <div className="mr-auto w-full flex items-center gap-2">
                {!showNav && (
                    <button onClick={() => setShowNav(true)}>
                        <Image src={CategoryImage} alt="Side Nav Toggle" />
                    </button>
                )}
                <h1 className="font-semibold text-xl text-dark">Dashboard</h1>
            </div>
            <div className={`${inter.className} flex items-center gap-4 text-dark w-full grow`}>
                <SearchInput onSearch={onSearch} />

                <div className="hidden md:flex items-center gap-2 mr-2">
                    <Image src={CalendarIcon} alt="Calendar" />
                    <span className="font-medium text-sm whitespace-nowrap">November 15, 2023</span>
                </div>
                <button className="border border-light-ash3 p-1 rounded-full hidden md:grid place-items-center">
                    <Image src={BellIcon} alt="Bell" />
                </button>
                <div className="hidden md:flex items-center gap-1 border border-light-ash3 px-2 py-1 rounded-3xl min-w-max w-full max-w-fit">
                    <Image src={ManImage} alt="Profile" className="h-8 w-8" />
                    <div className="flex flex-col items-center justify-center text-xs">
                        <span>Justin Bergson</span>
                        <span className="text-dark-ash5 text-xs">Justin@gmail.com</span>
                    </div>
                    <button>
                        <Image src={ArrowDownIcon2} alt="Arrow Down" />
                    </button>
                </div>
            </div>
        </header>
    );
});

Header.displayName = "Header";

export default Header;
