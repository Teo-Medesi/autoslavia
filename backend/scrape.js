import KupujemProdajem from "kp-scraper/kp-scraper.js";
import Olx from "olxba-scraper/olxba-scraper.js";
import supabase from "./supabase.config.js";

const scrape = async () => {
  updateCategories();
}

const updateCategories = async () => {
  const kp = new KupujemProdajem();

  await kp.init();

  const categories = await kp.getCategories();
  const category = await categories.getCategory("Automobili");

  const { data, error } = await supabase.from("categories").insert(category.subCategories).select();
  console.log(data, error);


  await kp.close();
}

scrape();