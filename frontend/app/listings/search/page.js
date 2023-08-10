import ListingsGrid from "@/components/ListingsGrid";
import { getListingsBySearch } from "@/actions";

export default async function Search({searchParams}) {
    const listings = await getListingsBySearch(searchParams?.keywords) || [];

    return (
        <div className="w-full min-h-[100vh]">
            <ListingsGrid className="h-full !justify-start gap-4" listingsProp={listings} getMoreListings={async () => {"use server"; return getListingsBySearch(searchParams?.keywords)}} />
        </div>
    )

}