"use client";

export default function Year() {
    const year = new Date().getFullYear();
    return <span>{year}</span>;
}
