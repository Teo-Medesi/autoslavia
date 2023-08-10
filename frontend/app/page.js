import { CategoriesFeatured, ListingsGrid, Hero } from "@/components";
import { getFeaturedListings } from "@/actions";

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
