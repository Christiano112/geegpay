"use client";

import { useState } from "react";

interface CustomizedBarPropsType {
    fill: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

const CustomizedBar = ({ fill, x, y, width = 20, height }: CustomizedBarPropsType) => {
    const radius = 10;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const gradient = isHovered
        ? "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)"
        : fill;

    const path = `M${x},${y + height} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + width - radius},${y} Q${x + width},${y} ${x + width},${y + radius} L${x + width},${y + height} Z`;

    return (
        <path
            d={path}
            fill={gradient}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};

export default CustomizedBar;
