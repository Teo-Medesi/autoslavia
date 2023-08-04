import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const getListing = async (id) => {
    const response = await fetch(`http://localhost:3000/api/listings/${id}`);
    const data = await response.json();

    return data.data;
}

export default async function Listing({ params }) {
    const listing = await getListing(params.id);

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