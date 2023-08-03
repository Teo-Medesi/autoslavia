"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Listing({ params }) {
    const [listing, setListing] = useState({});

    useEffect(() => {
        if (Object.keys(listing).length === 0) getListing();
    }, [])


    const getListing = async () => {
        const response = await fetch(`/api/listings/${params.id}`);
        const data = await response.json();

        setListing(data.data);
    }

    return (
        <div className={"flex h-[92vh]" + inter.className}>
            <div className="basis-1/4"></div>
            <div className="flex mt-12 basis-2/4 h-full flex-col bg-white">
                <div className="aspect-16/9 w-full relative"><Image fill={true} className="rounded-t" src={listing.cover_image} alt="listing" /></div>
                <div className="flex flex-col p-4 gap-4 text-black">
                    <h2 className="text-2xl whitespace-nowrap overflow-hidden">{listing.title}</h2>
                    <h3 className="text-xl font-bold text-primary">{(listing.price && listing.price_currency) ? `${listing.price} ${listing.price_currency}` : "No Price"}</h3>
                    <p className="">{listing.full_description || listing.description}</p>
                </div>
            </div>
            <div className="basis-1/4"></div>
        </div>
    )
}