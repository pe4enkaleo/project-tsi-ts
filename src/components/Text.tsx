import React, { HTMLAttributes } from "react";

interface TextProps {
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary";
    align?: "left" | "center" | "right";
    children: React.ReactNode;
    className?: string;
}

export const Text = ({
    size = "medium",
    color = "primary",
    align = "left",
    className = "",
    children
}: TextProps) => {
    const sizeClasses = {
        small: "text-[14px] leading-[20px]",
        medium: "text-[16px] leading-[24px]",
        large: "text-[18px] leading-[28px]"
    };

    const colorClasses = {
        primary: "text-gray-900 dark:text-white",
        secondary: "text-gray-600 dark:text-gray-400"
    };
    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };
    return(
        <p className={`${sizeClasses[size]} ${colorClasses[color]} ${alignClasses[align]} ${className}`}>
            {children}
        </p>
    );
};