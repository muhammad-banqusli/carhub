import { MouseEventHandler, Dispatch, SetStateAction } from "react";

export interface CustomButtonInterface {
    title: string;
    containerStyles: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    rightIcon?: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: Dispatch<SetStateAction<string>>;
}

export interface CarType {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CardCardProps {
    car: CarType;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarType;
}

export interface FitlerProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface CustomFilterProps {
    title: string;
    options: {
        value: string;
        title: string;
    }[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
