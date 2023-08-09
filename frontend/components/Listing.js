import Image from "next/image"
import { Roboto } from "next/font/google"
import Link from "next/link"
import Tags from "./Tags"
import category from "@/public/svgs/category.svg"
import location from "@/public/svgs/location.svg"

const inter = Roboto({ subsets: ['latin'], weight: "400"})

const Listing = ({ listing = {} }) => {
    const tags = [
        { text: listing?.locations?.country, icon: location },
        { text: listing?.locations?.settlement, icon: location },
        { text: listing?.categories?.category, icon: category }
    ]
    
    if (listing?.cover_image) return (
        <div className={"pt-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/6 " + inter.className}>
            <Link href={`/listings/${listing.id}`} className="block h-96 cursor-pointer shadow-md border-b-4 border-primary shadow-gray2 rounded bg-white overflow-hidden">
                <div className="h-1/2 relative">
                    <Image layout="fill" objectFit="cover" className="rounded-t" src={listing.cover_image} alt="listing" />
                </div>
                <div className="p-4 space-y-2 text-black">
                    <h3 className="text-xl font-semibold text-primary">
                        {(listing.price && listing.price_currency) ? `${listing.price} ${listing.price_currency}` : "No Price"}
                    </h3>
                    <h2 className="text-lg overflow-hidden">{listing.title}</h2>
                    <p className="line-clamp-3">{listing.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default Listing
