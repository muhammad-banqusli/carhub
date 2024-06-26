"use client";

import { CustomButtonInterface } from "@/types";
import Image from "next/image";

export default function CustomButton({
    title,
    containerStyles,
    handleClick,
    textStyles,
    rightIcon,
    btnType = "button",
}: CustomButtonInterface) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
}
