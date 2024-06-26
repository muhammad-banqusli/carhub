"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter();
    console.log("isNext", isNext);
    console.log("pageNumber", pageNumber);

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        const newPathname = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathname, { scroll: false });
    };
    
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
}
