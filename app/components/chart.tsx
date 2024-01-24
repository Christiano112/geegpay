"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
} from "recharts";
import CustomizedToolTip from "./ui/customizedTooltip";

type PropType = {
    chartData: {
        name: string;
        amount: number;
    }[];
};

const Chart = ({ chartData }: PropType) => {
    return (
        <section className="p-4 bg-white border border-grey4 rounded-xl h-full w-full min-w-max">
            <div className="flex items-center gap-4 justify-between mb-6">
                <h3 className="text-dark font-semibold text-lg">Sales Trend</h3>
                <div className="text-tertiary flex items-center gap-2">
                    <span className="text-sm">Sort by :</span>
                    <select
                        name="sort"
                        id="sort"
                        className="border border-grey5 px-2 py-1 text-xs rounded-3xl"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%" minHeight={240} maxHeight={275}>
                <BarChart
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis
                        dataKey="name"
                        scale="point"
                        style={{
                            fontSize: "14px",
                            lineHeight: "22px",
                            color: "#525252",
                            fontFamily: "inherit",
                        }}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                    />
                    <YAxis
                        style={{
                            fontSize: "12px",
                            lineHeight: "22px",
                            color: "#525252",
                            fontFamily: "inherit",
                        }}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={20}
                    />
                    <CartesianGrid vertical={false} strokeDasharray="3" fill="white" />
                    <Tooltip content={<CustomizedToolTip />} cursor={{ fill: "transparent" }} />
                    <Bar
                        fill="#34CAA51A"
                        activeBar={(props: any) => (
                            <Rectangle
                                {...props}
                                radius={[20, 20, 0, 0]}
                                className="fill-[#34CAA5]"
                            />
                        )}
                        shape={(props: any) => <Rectangle {...props} radius={[20, 20, 0, 0]} />}
                        dataKey="amount"
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Chart;
