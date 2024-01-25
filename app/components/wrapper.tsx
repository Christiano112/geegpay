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
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowNav(false);
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-full h-full p-0 m-0 scroll-smooth overflow-hidden bg-grey min-h-screen">
            {showNav && (
                <div className="h-full w-full fixed px-0 mx-0 transition-all duration-700 ease-in-out z-50">
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
