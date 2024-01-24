"use client";

import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Chart from "./components/chart";
import Card from "./components/card";
import OrdersTable from "./components/table";
import Platform from "./components/platform";
import { cardData, chartData, platformData, tableData } from "./utils/data";

const Dashboard = () => {
    const onSearch = (value: string) => {
        console.log(value);
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
                    <OrdersTable tableData={tableData} />
                </div>
                <div className="col-span-4">
                    <Platform platformData={platformData} />
                </div>
            </div>
        </Wrapper>
    );
};

export default Dashboard;
