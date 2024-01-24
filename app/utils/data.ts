import { TablePropType } from "../components/table";
import {
    ArrowRightIcon,
    BoxIcon,
    CategoryImage,
    DiscountShapeIcon,
    InfoCircleIcon,
    LogoutIcon,
    ProfileIcon,
    SettingsIcon,
    TrendUpIcon,
    GuyImage,
    Guy2Image,
    GirlImage,
    Girl2Image,
    LadyImage,
    ShoppingImage,
    BoxTickImage,
    RotateImage,
    CoinImage,
} from "../utils/images";

export const linkData = [
    {
        id: 1,
        title: "Dashboard",
        imgSrc: CategoryImage,
    },
    {
        id: 2,
        title: "Trend",
        imgSrc: TrendUpIcon,
    },
    {
        id: 3,
        title: "Profile",
        imgSrc: ProfileIcon,
    },
    {
        id: 4,
        title: "Box",
        imgSrc: BoxIcon,
    },
    {
        id: 5,
        title: "Discount",
        imgSrc: DiscountShapeIcon,
    },
    {
        id: 6,
        title: "Info",
        imgSrc: InfoCircleIcon,
    },
    {
        id: 7,
        title: "Close",
        imgSrc: ArrowRightIcon,
    },
    {
        id: 8,
        title: "Settings",
        imgSrc: SettingsIcon,
    },
    {
        id: 9,
        title: "Logout",
        imgSrc: LogoutIcon,
    },
];

export const chartData = [
    { name: "Jan", amount: 6000 },
    { name: "Feb", amount: 17000 },
    { name: "Mar", amount: 3500 },
    { name: "Apr", amount: 28000 },
    { name: "May", amount: 8000 },
    { name: "Jun", amount: 45000 },
    { name: "Jul", amount: 8000 },
    { name: "Aug", amount: 18000 },
    { name: "Sep", amount: 35000 },
    { name: "Oct", amount: 4000 },
    { name: "Nov", amount: 25000 },
    { name: "Dec", amount: 21000 },
];

export const tableData: TablePropType["tableData"] = [
    {
        id: 1,
        name: "Marcus Bergson",
        imgSrc: Guy2Image,
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
    },
    {
        id: 2,
        name: "Jaydon Vaccaro",
        imgSrc: LadyImage,
        date: "Nov 14, 2023",
        amount: "$150,000",
        status: "Refund",
    },
    {
        id: 3,
        name: "Corey Schleifer",
        imgSrc: GirlImage,
        date: "Nov 13, 2023",
        amount: "$87,000",
        status: "Paid",
    },
    {
        id: 4,
        name: "Cooper Press",
        imgSrc: Girl2Image,
        date: "Nov 12, 2023",
        amount: "$100,000",
        status: "Paid",
    },
    {
        id: 5,
        name: "Phillip Lubin",
        imgSrc: GuyImage,
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
    },
    {
        id: 6,
        name: "Floyd Miles",
        imgSrc: Guy2Image,
        date: "Nov 18, 2023",
        amount: "$75,000",
        status: "Refund",
    },
];

export const platformData = [
    {
        id: 1,
        name: "Book Bazaar",
        percent: 15,
        amount: 2500000,
        color: "#6160DC",
    },
    {
        id: 2,
        name: "Artisan Aisle",
        percent: 10,
        amount: 1800000,
        color: "#54C5EB",
    },
    {
        id: 1,
        name: "Artisan Aisle",
        percent: 8,
        amount: 1200000,
        color: "#FFB74A",
    },
    {
        id: 1,
        name: "XStore",
        percent: 5,
        amount: 700000,
        color: "#34CAA5",
    },
];

export const cardData = [
    {
        id: 1,
        imgSrc: BoxTickImage,
        title: "Total Order",
        amount: 350,
        trend: "up",
    },
    {
        id: 2,
        imgSrc: RotateImage,
        title: "Total Refund",
        amount: 270,
        trend: "down",
    },
    {
        id: 3,
        imgSrc: ShoppingImage,
        title: "Average Sales",
        amount: 1567,
        trend: "down",
    },
    {
        id: 4,
        imgSrc: CoinImage,
        title: "Total Income",
        amount: "$350.000",
        trend: "up",
    },
];
