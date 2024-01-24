import { ReactNode } from "react";
import SideNav from "./side-nav";

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex">
            <div className="h-full fixed px-0 mx-0">
                <SideNav />
            </div>
            <div className="absolute right-0 h-full left-[5rem] bg-grey">{children}</div>
        </div>
    );
};

export default Wrapper;
