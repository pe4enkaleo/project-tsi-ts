import React, { HTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size: "small"|"medium"|"large", color: "primary"|"secondary"; title: string
}

export const Button = (props:IButtonProps) => {
    const {size, color, title, ...rest} = props;
    const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";
    const classes = {
        colors: {
            primary: {
                button: "bg-amber-700",
                text: "text-red"
            },
            secondary: {
                button: "bg-red-500",
                text: "text-white"
            }
        },
        sizes: {
            small: "rounded-[100px] font-sm",
            medium: "rounded-[14px] font-base",
            large: "rounded-[16px] font-base min-h-[56px]"
        }
    };

   return (
    <button {...rest} className={
        defaultClass + " " + classes.sizes[size] + " " + 
        classes.colors[color].button
    }>
        <div className= {classes.colors[color].text}>{title}</div>
    </button>
   );
};
