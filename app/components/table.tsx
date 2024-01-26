import Image from "next/image";
import { useState } from "react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { DocumentDownloadIcon } from "../utils/images";

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
    const [isAll, setIsAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({} as TablePropType["tableData"][0]);
    const [orders, setOrders] = useState(tableData.slice(0, 6));

    return (
        <section className="bg-white border border-grey4 rounded-xl p-4 h-full w-full grow">
            <div className="flex items-center justify-between gap-8 text-lg">
                <h3 className="text-dark font-semibold">Last Orders</h3>
                <button
                    className="text-primary font-medium cursor-pointer"
                    onClick={() => {
                        setIsAll(!isAll);
                        setOrders(isAll ? tableData.slice(0, 6) : tableData);
                    }}
                >
                    {!isAll ? "See All" : "See Less"}
                </button>
            </div>

            <div className="mt-6 w-full overflow-x-auto overscroll-x-auto scroll-smooth">
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
                        {orders?.map((item) => (
                            <tr key={item.id} className="text-tertiary">
                                <td className="px-2 py-3 whitespace-nowrap min-w-[12rem]">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.name}
                                            className="w-8 h-8"
                                        />
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
                                    <button
                                        className="text-secondary text-sm flex items-center gap-1"
                                        onClick={() => {
                                            setOrder(item);
                                            setShowModal(true);
                                        }}
                                    >
                                        <Image src={DocumentDownloadIcon} alt="Download" />
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && order && (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-[#0000004D] z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4 w-full m-4 relative max-w-lg mx-auto">
                        <button
                            className="absolute top-2 right-2"
                            onClick={() => {
                                setShowModal(false);
                                setOrder({} as TablePropType["tableData"][0]);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#3C1263"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="flex flex-col items-center gap-6 justify-center">
                            <h3 className="text-dark font-semibold self-start">Order Details</h3>
                            <div className="flex flex-col gap-2">
                                <Image
                                    src={order.imgSrc}
                                    alt="pic of"
                                    className="w-20 h-20 object-contain mx-auto"
                                />
                                <p className="inline-flex items-center gap-2 justify-between mt-2">
                                    <span className="w-16">Name: </span>{" "}
                                    <span className="mr-auto font-semibold">{order.name}</span>
                                </p>
                                <p className="inline-flex items-center gap-2 justify-between">
                                    <span className="w-16">Date:</span>{" "}
                                    <span className="mr-auto text-dark-ash">{order.date}</span>
                                </p>
                                <p className="inline-flex items-center gap-2 justify-between">
                                    <span className="w-16">Amount:</span>{" "}
                                    <span className="mr-auto font-medium text-secondary">
                                        {order.amount}
                                    </span>
                                </p>
                                <p className="inline-flex items-center gap-2 justify-between">
                                    <span className="w-16">Status:</span>{" "}
                                    <span
                                        className="mr-auto text-sm"
                                        style={{
                                            color: order.status === "Paid" ? "#34CAA5" : "#ED544E",
                                        }}
                                    >
                                        {order.status}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OrdersTable;
