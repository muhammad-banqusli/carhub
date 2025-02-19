"use client";

import { CardCardProps } from "@/types";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@/utils";

import { CustomButton, CarDetails } from "@/components";

function CarCard({ car }: CardCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const {
        city_mpg,
        class: carType,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
    } = car;

    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className="car-card group transition-all overflow-hidden hover:translate-x-1 hover:translate-y-1">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car)}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray transition-all">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            width={20}
                            height={20}
                            alt="tire"
                        />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            width={20}
                            height={20}
                            alt="gas"
                        />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container translate-y-24 group-hover:translate-y-0 transition-all duration-500">
                    <CustomButton
                        title="View More"
                        containerStyles="w-full py-4 rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car}
            />
        </div>
    );
}
export default CarCard;
