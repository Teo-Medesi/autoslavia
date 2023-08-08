import ImageCarousel from "../../../components/ImageCarousel";
import Tags from "../../../components/Tags";
import category from "@/public/svgs/category.svg"
import location from "@/public/svgs/location.svg"
import gear from "@/public/svgs/gear2.svg"
import Characteristics from "../../../components/Characteristics";
import Warnings from "../../../components/Warnings";
import Loading from "@/components/Loading";

const getListing = async (id) => {
    const response = await fetch(`http://localhost:3000/api/listings/${id}`);
    const data = await response.json();

    return data.data;
}

export default async function Listing({ params }) {
    const listing = await getListing(params.id);
    const listing_gear = listing?.listing_gear?.map(element => { return { text: element.text, icon: gear } }) || [];
    const tags = [{ text: listing?.locations?.country, icon: location }, { text: listing?.locations?.settlement, icon: location }, { text: listing?.categories?.category, icon: category }, ...listing_gear]
    const characteristics = listing?.listing_characteristics?.map(element => { return { key: element.key, value: element.value } }) || [];

    return (
        <div className="flex basis-1/2 w-1/2 h-full items-center flex-col gap-4 bg-white">
            <div className="w-full max-h-[75vh] overflow-hidden"><ImageCarousel images={listing?.listing_images} /></div>
            <div className="px-4 flex flex-col gap-8">
                <Tags tagsProp={tags} />
                <div className="flex flex-col p-4 gap-4 text-black">
                    <h2 className="text-4xl">{listing?.title}</h2>
                    <h3 className="text-2xl font-bold text-white bg-primary p-2 px-8 w-max rounded">{(listing?.price && listing?.price_currency) ? `${listing?.price} ${listing?.price_currency}` : "No Price"}</h3>
                    <p className="text-xl">{listing?.full_description || listing?.description}</p>
                </div>
                <Characteristics characteristics={characteristics} />
                <Warnings warnings={listing?.listing_warnings || []} />
            </div>
        </div>
    )
}