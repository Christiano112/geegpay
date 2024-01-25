"use client";

import { ReactNode, useState, useEffect } from "react";
import SideNav from "./side-nav";

interface WrapperPropsType {
    showNav: boolean;
    children: ReactNode;
    setShowNav: (showNav: boolean) => void;
}

const Wrapper = ({ children, showNav, setShowNav }: WrapperPropsType) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 770) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [setShowNav]);

    return (
        <div className="relative w-full h-full p-0 m-0 scroll-smooth overflow-hidden bg-grey min-h-screen">
            {showNav && (
                <div className="h-full fixed px-0 mx-0 transition-all duration-700 ease-in-out z-50">
                    <SideNav setShowNav={setShowNav} />
                </div>
            )}
            <div
                className={`h-full bg-grey transition-all duration-700 ease-in-out ${
                    showNav && !isMobile ? "ml-20" : "ml-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Wrapper;
