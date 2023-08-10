import { CategoriesFeatured, ListingsGrid, Hero } from "@/components";

const getFeaturedListings = async (filters = {}) => {
  "use server";
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/featured`, {next: {revalidate: 60}});
  const data = await response.json();

  return data.data;
}

export default async function Home() {
  const listings = await getFeaturedListings();

  return (
    <main className="w-full h-full bg-background overflow-x-hidden">
      <Hero />
      <CategoriesFeatured />
      <ListingsGrid className="min-h-[50vh]" listingsProp={listings} getMoreListings={getFeaturedListings} />
    </main>
  )
}
