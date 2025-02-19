"use client";

import { SearchManufacturer } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
    <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
        />
    </button>
);

export default function SearchBar() {
    const router = useRouter();

    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please fill in the search bar");
        }

        updateSearchParams(model, manufacturer);
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model.toLowerCase());
        } else {
            searchParams.delete("model");
        }

        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer.toLowerCase());
        } else {
            searchParams.delete("manufacturer");
        }

        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathname, { scroll: false });
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="search__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="car modle"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
}
