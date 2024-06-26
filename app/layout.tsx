import type { Metadata } from "next";
import "./globals.css";

import { Nav, Footer } from "@/components";

export const metadata: Metadata = {
    title: "Car Hub",
    description: "Discover the best car rentals offers.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="relative">
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
