"use client";

import Wrapper from "./components/wrapper";
import Chart from "./components/chart";
import { chartData, platformData, tableData } from "./utils/data";
import Card from "./components/card";
import OrdersTable from "./components/table";
import Platform from "./components/platform";
import Header from "./components/header";

const Dashboard = () => {
    const onSearch = (value: string) => {
        console.log(value);
    };

    return (
        <Wrapper>
            <Header onSearch={onSearch} />
            <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-6 p-4">
                <div className="col-span-2 md:col-span-4">
                    <Chart chartData={chartData} />
                </div>
                <div className="col-span-2">
                    <Card />
                </div>
                <div className="col-span-2 md:col-span-4">
                    <OrdersTable tableData={tableData} />
                </div>
                <div className="col-span-2">
                    <Platform platformData={platformData} />
                </div>
            </div>
        </Wrapper>
    );
};

export default Dashboard;
