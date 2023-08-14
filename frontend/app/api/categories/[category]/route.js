import { NextResponse } from "next/server";
import supabase from "@/lib/supabase.config.js";

export async function GET(request, {params}) {
    const {data: category_data, category_error} = await supabase.from("categories").select("id").eq("category", params?.category?.toLowerCase());
    const {data, listings_error} = await supabase.rpc("get_random_listings_by_category", {category_id: category_data?.[0]?.id});

    if (category_error) return NextResponse.json({category_error}, {status: 500});
    if (listings_error) return NextResponse.json({listings_error}, {status: 500});

    return NextResponse.json({message: "success", data: data}, {status: 200});
}