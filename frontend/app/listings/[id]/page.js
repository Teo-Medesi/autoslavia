import ImageCarousel from "../../../components/ImageCarousel";
import Tags from "../../../components/Tags";
import category from "@/public/svgs/category.svg"
import location from "@/public/svgs/location.svg"
import favorite from "@/public/svgs/star.svg"
import gear from "@/public/svgs/gear2.svg"
import Characteristics from "../../../components/Characteristics";
import Warnings from "../../../components/Warnings";
import Link from "next/link";
import { getListing, getSession, isFavoriteListing } from "@/actions";
import { Favorite } from "@/components";

export default async function Listing({ params }) {
    const { user } = await getSession();
    const listing = await getListing(params.id);

    const isFavorite = await isFavoriteListing(listing?.id, user?.id) || false;
    const listing_gear = listing?.listing_gear?.map(element => { return { text: element.text, icon: gear } }) || [];
    const tags = [{ text: listing?.locations?.country, icon: location }, { text: listing?.locations?.settlement, icon: location }, { text: listing?.categories?.category, icon: category }, ...listing_gear]
    const characteristics = listing?.listing_characteristics?.map(element => { return { key: element.key, value: element.value } }) || [];

    return (
        <div className="flex w-full lg:w-1/2 h-full items-center flex-col gap-4 bg-white">
            <div className="w-full max-h-[75vh] overflow-hidden"><ImageCarousel images={listing?.listing_images} /></div>
            <div className="padding-x-sm md:padding-x pb-12 flex flex-col gap-8">
                <Tags tagsProp={tags} />
                <div className="flex flex-col p-4 gap-8 text-black">
                    <h2 className="text-4xl">{listing?.title}</h2>
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white bg-primary p-2 px-8 w-max rounded">{(listing?.price && listing?.price_currency) ? `${listing?.price} ${listing?.price_currency}` : "No Price"}</h3>
                        <Favorite listingId={listing?.id} userId={user?.id} isFavorite={isFavorite} />
                    </div>
                    <p className="text-xl">{listing?.full_description || listing?.description}</p>
                </div>
                <Characteristics characteristics={characteristics} />
                <Warnings warnings={listing?.listing_warnings || []} />
                <section className="w-full space-y-4">
                    <h1 className="text-4xl">Contact</h1>
                    <p className="mb-12">In order to contact the owner of this listing, you need to go to the original listing's website. This is so as to be respectful to the origin from which this data has been scraped.</p>
                    <p className="text-gray hidden md:block">Original Listing</p>
                    <Link className="text-primary hidden md:block" href={listing?.url}>{listing?.url}</Link>
                    <div className="flex justify-center md:hidden"><button className="btn-secondary">Go to Original Website</button></div>
                </section>
            </div>
        </div>
    )
}