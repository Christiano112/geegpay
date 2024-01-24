import { ReactNode } from "react";
import SideNav from "./side-nav";

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-full h-full p-0 m-0 scroll-smooth">
            <div className="h-full fixed px-0 mx-0">
                <SideNav />
            </div>
            <div
                className="grow min-h-max h-full left-[5rem] bg-grey"
                style={{
                    width: "calc(100vw - 5rem)",
                    marginLeft: "5rem",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Wrapper;
