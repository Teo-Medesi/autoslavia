import ListingsGrid from "@/components/ListingsGrid";

const getListings = async (category, filters = {}) => {
    "use server";
    if (!category) throw new Error("Missing category param!");

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories/${category}`)
    const data = await response.json();

    return data.data;
}

export default async function Category({params}) {
    const listings = await getListings(params?.category) || [];

    return (
        <div className="w-full min-h-[100vh]">
            <ListingsGrid className="h-full !justify-start gap-4" listingsProp={listings} getMoreListings={async () => {"use server"; return getListings(params?.category)}} />
        </div>
    )

}