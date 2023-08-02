import KupujemProdajem from "kp-scraper/kp-scraper.js";
import supabase from "./supabase.config.js";
import data from "./data.json" assert { type: "json" };
import fs from "fs";

const run = async () => {
  await updateListings();
  process.exit(0);
}

function extractPrice(price) {
  const regex = /(\d+(?:\.\d+)?)\s*(\D+)/;
  const match = price.match(regex);

  if (match && match.length === 3) {
    const extractedPrice = match[1];
    const currency = match[2];
    return { price: extractedPrice, currency };
  }

  return {};
}

const updateListings = async () => {
  try {
    const kp = new KupujemProdajem();

    await kp.init();
    /* 
        const categories = await kp.getCategories();
        const category = await categories.getVehicleCatetegory();
     */
    let listings = [];

    listings = data;

    /*   for (let page = 0; page < 1; page++) {
        const data = (await category.getDetailedListings({ outputTimestamps: true, page })).getAllListings();
        listings.push(...data);
      }
    
      fs.writeFileSync("data.json", JSON.stringify(listings))
     */

    for (const listing of listings) {
      let { data: location_id } = await supabase.from("locations").select("id").eq("country", "Srbija").eq("settlement", listing?.location);

      if (Object.keys(location_id).length === 0) {
        const location_object = await supabase.from("locations").insert({ country: "Srbija", settlement: listing?.location }).select("id");
        location_id = location_object?.data[0]?.id;
        console.log(`location_id: ${JSON.stringify(location_object)}`);
      }


      const category_object = await supabase.from("categories").select("id").eq("name", listing?.subcategory);
      const category_id = category_object?.data[0]?.id;

      console.log(`category_id: ${JSON.stringify(category_id)}`);

      const { price, currency } = extractPrice(listing?.price);

      console.log(`price: ${price} currency: ${currency}`);

      const newListing = {
        title: listing.title,
        description: listing.description,
        full_description: listing.fullDescription,
        url: listing.url,
        cover_image: listing.coverImage,
        price: parseInt(price),
        price_currency: currency,
        location_id,
        category_id,
      }

      console.log(`newListing: ${JSON.stringify(newListing)}`);

      const listing_object = await supabase.from("listings").insert(newListing).select("id");
      const listing_id = listing_object?.data[0]?.id;

      console.log(`listing_id: ${JSON.stringify(listing_object)}`);

      const images = listing?.images?.map(element => { return { url: element, listing_id } })
      const warnings = listing?.vehicleInformation?.warnings?.map(element => { return { text: element, listing_id } });
      const gear = listing?.vehicleInformation?.gear?.map(element => { return { text: element, listing_id } });
      const characteristics = listing?.characteristics?.map(element => { return { ...element, listing_id } });

      await supabase.from("listing_images").insert(images);
      await supabase.from("listing_warnings").insert(warnings);
      await supabase.from("listing_gear").insert(gear);
      await supabase.from("listing_characteristics").insert(characteristics);
    }

    await kp.close();
  }
  catch (error) {
    console.error(`\n \n Error while updating listings, error: ${error} \n \n  stack: ${error.stack} \n \n`);
  }
}

const updateCategories = async () => {
  const kp = new KupujemProdajem();

  await kp.init();

  const categories = await kp.getCategories();
  const category = await categories.getCategory("automobili");
  const subCategories = category.subCategories.map(element => { return { ...element, name: element.name.toLowerCase() } });

  await supabase.from("categories").insert(subCategories);

  await kp.close();
}

run();