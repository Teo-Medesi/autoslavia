import { Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

const Listing = ({ listing = {} }) => {
    return (
        <div className={"py-8 " + inter.className}>
            <div className="flex cursor-pointer w-full md:w-80 border-b-8 border-primary rounded aspect-4/5 flex-col bg-white">
                <div className="aspect-16/9 w-full relative"><Image fill={true} className="rounded-t" src={listing.cover_image} alt="listing" /></div>
                <div className="flex flex-col p-4 gap-4 text-black">
                    <h2 className="text-2xl whitespace-nowrap overflow-hidden">{listing.title}</h2>
                    <h3 className="text-xl font-bold text-primary">{(listing.price && listing.price_currency) ? `${listing.price} ${listing.price_currency}` : "No Price"}</h3>
                    <p className="line-clamp-3">{listing.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Listing