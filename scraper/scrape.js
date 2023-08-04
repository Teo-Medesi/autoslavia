import KupujemProdajem from "kp-scraper/kp-scraper.js";
import supabase from "./supabase.config.js";

const run = async () => {
  await updateListingsKupujemProdajem(1, 2);
  await updateListingsKupujemProdajem(1, 2);
  process.exit(0);
}

function extractPrice(price) {
  const sanitizedPrice = price.replace(/[.,]/g, '');

  const regex = /(\d+(?:\.\d+)?)\s*(\D+)/;
  const match = sanitizedPrice.match(regex);

  if (match && match.length === 3) {
    const extractedPrice = parseFloat(match[1]);
    const currency = match[2];
    return { price: extractedPrice, currency };
  }

  return {};
}

const updateListingsKupujemProdajem = async (pageStart = 1, pageEnd = 5) => {
  try {
    const kp = new KupujemProdajem();

    await kp.init();

    const categories = await kp.getCategories();
    const category = await categories.getVehicleCatetegory();

    let listings = [];

    for (let page = pageStart; page <= pageEnd; page++) {
      const data = (await category.getDetailedListings({ outputTimestamps: true, page })).getAllListings();
      await kp.page.screenshot({ path: "screenshot.png" })
      listings.push(...data);
    }

    console.log(listings);

    for (const listing of listings) {
      let { data: location_id } = await supabase.from("locations").select("id").eq("country", "Srbija").eq("settlement", listing?.location);

      if (Object.keys(location_id).length === 0) {
        const location_object = await supabase.from("locations").insert({ country: "Srbija", settlement: listing?.location }).select("id");
        location_id = location_object?.data?.[0]?.id;
        console.log(`location_id: ${JSON.stringify(location_object)}`);
      }
      else {
        location_id = location_id?.[0]?.id;
      }

      const category_object = await supabase.from("categories").select("id").eq("name", listing?.subcategory);
      const category_id = category_object?.data?.[0]?.id;

      const { price, currency } = extractPrice(listing?.price);

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

      let listing_object = await supabase.from("listings").insert(newListing).select("id");
      let listing_id = listing_object?.data?.[0]?.id;

      if (!listing_id) {
        listing_object = await supabase.from("listings").select("id").eq("url", newListing.url);
        listing_id = listing_object?.data?.[0]?.id;

        if (listing_object.error) continue;
      }

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

const updateCategoriesKupujemProdajem = async () => {
  const kp = new KupujemProdajem();

  await kp.init();

  const categories = await kp.getCategories();
  const category = await categories.getCategory("automobili");
  const subCategories = category.subCategories.map(element => { return { category_url: element.url, category: element.name.toLowerCase() } });

  await supabase.from("categories").insert(subCategories);

  await kp.close();
}

run();