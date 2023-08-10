import ListingsGrid from "@/components/ListingsGrid";
import { getListingsByCategory } from "@/actions";

export default async function Category({params}) {
    const listings = await getListingsByCategory(params?.category) || [];

    return (
        <div className="w-full min-h-[100vh]">
            <ListingsGrid className="h-full !justify-start gap-4" listingsProp={listings} getMoreListings={async () => {"use server"; return getListingsByCategory(params?.category)}} />
        </div>
    )

}