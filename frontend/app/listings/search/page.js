import ListingsGrid from "@/components/ListingsGrid";

const getListings = async (keywords) => {
    "use server";
    if (!keywords) throw new Error("Missing keywords search param!");

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/search?keywords=${keywords}`)
    const data = await response.json();

    return data.data;
}

export default async function Search({searchParams}) {
    const listings = await getListings(searchParams?.keywords) || [];

    return (
        <div className="w-full min-h-[100vh]">
            <ListingsGrid className="h-full !justify-start gap-4" listingsProp={listings} getMoreListings={async () => {"use server"; return getListings(searchParams?.keywords)}} />
        </div>
    )

}