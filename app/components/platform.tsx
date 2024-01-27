import { useState } from "react";

interface PlatformPropTye {
    platformData: {
        id: number;
        name: string;
        percent: number;
        amount: number;
        color: string;
    }[];
}

const Platform = ({ platformData }: PlatformPropTye) => {
    const [isAll, setIsAll] = useState(false);
    const [platforms, setPlatforms] = useState(platformData.slice(0, 4));

    return (
        <article className="bg-white pt-4 pr-4 pb-8 pl-6 rounded-xl h-full w-full">
            <div className="flex items-center justify-between gap-8 text-lg">
                <h3 className="text-dark font-semibold">Top Platform</h3>
                <button
                    className="text-primary font-medium cursor-pointer"
                    onClick={() => {
                        setIsAll(!isAll);
                        setPlatforms(isAll ? platformData.slice(0, 4) : platformData);
                    }}
                >
                    {!isAll ? "See All" : "See Less"}
                </button>
            </div>

            <div className="space-y-4 text-lg mt-6">
                {platforms?.map((platform) => (
                    <div key={platform.id}>
                        <p className="text-dark2 font-semibold">{platform.name}</p>
                        <div className="h-2 w-full bg-gray rounded-lg my-2">
                            <div
                                className="h-2 rounded-lg"
                                style={{
                                    width: `${platform.percent * 5}%`,
                                    backgroundColor: platform.color,
                                }}
                            ></div>
                        </div>
                        <div className="text-neutral flex items-center justify-between gap-6">
                            <span>{`$${platform.amount}`}</span>
                            <span>{`+${platform.percent}%`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Platform;
