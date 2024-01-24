"use client";

import { useState, useEffect } from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Chart from "./components/chart";
import Card from "./components/card";
import OrdersTable from "./components/table";
import Platform from "./components/platform";
import { cardData, chartData, platformData, tableData } from "./utils/data";

const Dashboard = () => {
    const [data, setData] = useState(tableData);

    const onSearch = (value: string) => {
        if (value && value.trim() !== "") {
            const filteredData = tableData.filter((item) => {
                return item.name.toLowerCase().includes(value.toLowerCase());
            });
            setData(filteredData);
        } else {
            setData(tableData);
        }
    };

    return (
        <Wrapper>
            <Header onSearch={onSearch} />
            <div className="grid grid-cols-4 md:grid-cols-10 justify-between gap-4 px-2 py-4 h-full w-full">
                <div className="col-span-4 md:col-span-6">
                    <Chart chartData={chartData} />
                </div>
                <div className="col-span-4">
                    <Card cardData={cardData} />
                </div>
                <div className="col-span-4 md:col-span-6">
                    <OrdersTable tableData={data} />
                </div>
                <div className="col-span-4">
                    <Platform platformData={platformData} />
                </div>
            </div>
        </Wrapper>
    );
};

export default Dashboard;
