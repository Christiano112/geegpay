import { ReactNode } from 'react'
import SideNav from './side-nav';

const Wrapper = (
    { children }: { children: ReactNode }
) => {
    return (
        <div className="flex">
            <div className="h-full fixed px-0 mx-0">
                <SideNav />
            </div>
            <div className="absolute right-0 min-h-100vh left-0 md:left-[5rem]">
                {children}
            </div>
        </div>
    )
}

export default Wrapper;

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
};

