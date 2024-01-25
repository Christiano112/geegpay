import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { inter } from "../font";
import {
    GreenTrendingUpImage,
    GreenWavesImage,
    RedWavesImage,
    RedTrendingDownImage,
} from "../utils/images";

interface CardProps {
    cardData?: {
        id: number;
        imgSrc: string | StaticImport;
        title: string;
        amount: string | number;
        trend: string;
    }[];
}

const Card = ({ cardData }: CardProps) => {
    return (
        <section className="w-full h-full grid gap-3 grid-cols-1 md:grid-cols-2 items-center place-items-center justify-between">
            {cardData?.map((data) => (
                <div
                    key={data.id}
                    className="bg-white rounded-xl px-4 py-4 border border-grey4 max-h-[14rem] h-full w-full text-balance"
                >
                    <div className="flex items-center gap-4 justify-between mb-[.625rem]">
                        <div className="border border-light-ash2 p-2 rounded-full grid place-items-center">
                            <Image
                                src={data.imgSrc}
                                alt={data.title}
                                className="object-cover min-w-2 min-h-2"
                            />
                        </div>
                        {data.trend === "up" ? (
                            <Image src={GreenWavesImage} alt="Trend Up" />
                        ) : (
                            <Image src={RedWavesImage} alt="Trend Down" />
                        )}
                    </div>
                    <p className="font-medium text-dark-ash3 text-lg">{data.title}</p>
                    <p className="text-tertiary font-semibold text-2xl">{data.amount}</p>
                    <div className="flex items-center gap-4 justify-between mt-[.625rem]">
                        <div
                            className="flex items-center justify-center gap-2 rounded-2xl text-pretty h-6 min-w-[4.75rem]"
                            style={{
                                color: data.trend === "up" ? "#34CAA5" : "#ED544E",
                                backgroundColor: data.trend === "up" ? "#34CAA51F" : "#ED544E1F",
                            }}
                        >
                            {data.trend === "up" ? (
                                <Image src={GreenTrendingUpImage} alt="Trending Up" />
                            ) : (
                                <Image src={RedTrendingDownImage} alt="Trending Down" />
                            )}
                            <span className="font-medium text-xs">23.5%</span>
                        </div>
                        <span className={`${inter.className} text-xs text-light-ash`}>
                            vs. previous month
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Card;
