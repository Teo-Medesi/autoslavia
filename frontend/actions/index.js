"use server";

const getLocations = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/locations`);
    const data = await response.json();

    const locations = data?.data?.map(location => location.settlement).filter(element => element != null);
    return locations;
}

const getListingsBySearch = async (keywords) => {
    if (!keywords) throw new Error("Missing keywords search param!");

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/search?keywords=${keywords}`)
    const data = await response.json();

    return data.data;
}

const getListing = async (id) => {
    const response = await fetch(`http://localhost:3000/api/listings/${id}`);
    const data = await response.json();

    return data.data;
}

const getListingsByCategory = async (category, filters = {}) => {
    if (!category) throw new Error("Missing category param!");

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories/${category}`)
    const data = await response.json();

    return data.data;
}

const getFeaturedListings = async (filters = {}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/featured`, {next: {revalidate: 60}});
    const data = await response.json();
  
    return data.data;
}

const addToFavorites = async (id) => {
    
}

const signUp = async (data) => {
    console.log(data);
}

const signIn = async (data) => {
    console.log(data);
}

export {
    getLocations,
    getFeaturedListings,
    getListingsBySearch,
    getListingsByCategory,
    getListing,
    addToFavorites,
    signUp,
    signIn
}