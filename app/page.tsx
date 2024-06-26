import { Hero, CarCatalogue } from "@/components";

import Image from "next/image";

export default function Home({searchParams}:{searchParams: any}) {
    return (
        <main className="overflow-hidden">
            <Hero />
            <CarCatalogue searchParams={searchParams}/>
        </main>
    );
}
