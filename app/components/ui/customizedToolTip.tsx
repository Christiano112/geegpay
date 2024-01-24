import { TooltipProps } from "recharts";
import { inter } from "@/app/font";

const CustomizedToolTip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload?.length) {
        return (
            <div className="rounded-lg py-1 px-2 flex flex-col justify-center min-w-[5rem] w-full bg-dark3 text-white relative">
                <p className={`${inter.className} text-white text-center text-xs font-medium`}>
                    {`$${payload[0].value.toLocaleString()}`}
                </p>
                <div
                    className="absolute border-solid border-8 border-dark3 border-b-0 left-1/2 transform -translate-x-1/2 -bottom-2"
                    style={{ borderColor: "#090C2C transparent transparent transparent" }}
                ></div>
            </div>
        );
    }

    return null;
};

export default CustomizedToolTip;
