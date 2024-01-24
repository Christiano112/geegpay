import Headline from "./ui/headline";

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
    return (
        <article className="bg-white pt-4 pr-4 pb-8 pl-6 rounded-xl h-full w-full">
            <Headline text="Top Platform" />

            <div className="space-y-4 text-lg mt-6">
                {platformData?.map((platform) => (
                    <div key={platform.id}>
                        <p className="text-dark2 font-semibold">{platform.name}</p>
                        <div className="h-2 w-full bg-gray rounded-b-lg my-2">
                            <div
                                className="h-2 rounded-lg"
                                style={{
                                    width: `${platform.percent * 3}%`,
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
