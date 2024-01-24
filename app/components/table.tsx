import Image from "next/image";
import { DocumentDownloadIcon } from "../utils/images";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Headline from "./ui/headline";

export interface TablePropType {
    tableData: {
        id: number;
        name: string;
        imgSrc: string | StaticImport;
        date: string;
        amount: string;
        status: "Paid" | "Refund";
    }[];
}

const OrdersTable = ({ tableData }: TablePropType) => {
    return (
        <section className="bg-white border border-grey4 rounded-xl p-4 h-full w-full grow">
            <Headline text="Last Orders" />

            <div className="mt-6">
                <table className=" min-w-full">
                    <thead>
                        <tr className="text-base text-dark-ash4 border-b border-b-grey3">
                            <th scope="col" className="px-2 py-2 font-medium text-left">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-2 font-medium text-left">
                                Date
                            </th>
                            <th scope="col" className="px-2 py-2 font-medium text-left">
                                Amount
                            </th>
                            <th scope="col" className="px-2 py-2 font-medium text-left">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-2 font-medium text-left">
                                Invoice
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-grey3">
                        {tableData.map((item) => (
                            <tr key={item.id} className="text-tertiary">
                                <td className="px-2 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={item.imgSrc} alt="User" />
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                </td>
                                <td className="text-dark-ash px-2 py-3 whitespace-nowrap">
                                    {item.date}
                                </td>
                                <td className="font-medium text-secondary px-2 py-3 whitespace-nowrap">
                                    {item.amount}
                                </td>
                                <td
                                    className="px-2 py-3 whitespace-nowrap"
                                    style={{
                                        color: item.status === "Paid" ? "#34CAA5" : "#ED544E",
                                    }}
                                >
                                    {item.status}
                                </td>
                                <td className="px-2 py-3 whitespace-nowrap">
                                    <button className="text-secondary text-sm flex items-center gap-1">
                                        <Image src={DocumentDownloadIcon} alt="Download" />
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrdersTable;
