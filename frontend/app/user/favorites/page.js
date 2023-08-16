import { getSession, getUserFavoriteListings } from "@/actions";
import { ListingsGrid } from "@/components";

export default async function Favorites() {
    const { user } = await getSession();
    const listings = await getUserFavoriteListings(user?.id);

    return (
        <div className="w-full h-[90vh]">
            <ListingsGrid listingsProp={listings} />
        </div>
    )
}