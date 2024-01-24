import Image from "next/image";
import { ShoppingImage, TrendUpIcon, TrendingUpImage } from "../utils/images";

const Card = () => {
    return (
        <div>
            <div>
                <Image src={ShoppingImage} alt="Shopping" />
                <Image src={TrendUpIcon} alt="Trend Up" />
            </div>
            <div>
                <span>Total Income</span>
                <span>$2,300</span>
            </div>
            <div>
                <div>
                    <Image src={TrendingUpImage} alt="Trending Up" />
                    <span>23.5%</span>
                </div>
                <span>vs. previous month</span>
            </div>
        </div>
    );
};

export default Card;
