"use client"
import { useState } from "react"
import Listing from "./components/Listing.js";

const FeaturedListingsGrid = ({ className, listingsProp, getFeaturedListings }) => {
    const [listings, setListings] = useState(listingsProp);

    const handleClick = async () => {     
        const newListings = await getFeaturedListings();
        setListings(current => [...current, ...newListings]);
    }
    
    return (
        <section className={className + " flex flex-col md:flex-row md:justify-between items-center md:flex-wrap  bg-background p-6 md:p-24"}>
            {listings.map(listing => <Listing listing={listing} key={listing.id} />)}
            <div className="w-full mt-8 flex justify-center items-center"><button onClick={handleClick} className="p-4 cursor-pointer bg-primary text-xl">Load More</button></div>
        </section>
    )
}

export default FeaturedListingsGrid