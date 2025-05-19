import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    variant?: "outline" | "filled";
}

export const Input = ({
    variant = "outline",
    className = "",
    ...props
}: InputProps) => {
    const variants = {
        outline: "border border-gray-300 focus:border-blue-500",
        filled: "bg-gray-100 focus:bg-white",
    };
    return(
        <input className={`${variants[variant]} px-3 py-2 rounded-md ${className}`} {...props}/>
    );
};