"use client"
import { useState } from "react"
import Filter from "./Filter.js";
import Listing from "./Listing.js";

const ListingsGrid = ({ className, listingsProp, getMoreListings }) => {
    const [listings, setListings] = useState(listingsProp);

    const handleClick = async () => {     
        const newListings = await getMoreListings();
        setListings(current => [...current, ...newListings]);
    }
    
    return (
    <>
        <Filter />
        <section className={className + " grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-[25rem] gap-4 bg-background padding-x-sm padding-y-sm md:padding-x md:padding-y"}>
            {listings.map(listing => <Listing listing={listing} key={listing.id} />)}
            {listings.length > 30 && <div className="w-full flex justify-center items-center"><button onClick={handleClick} className="p-4 cursor-pointer bg-primary text-xl">Load More</button></div>}
        </section>
    </>
    )
}

export default ListingsGrid