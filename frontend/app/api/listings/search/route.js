import { NextResponse } from "next/server";
import supabase from "@/lib/supabase.config.js"

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const keywords = searchParams?.get("keywords");
    
    const { data, error} = await supabase.from("listings").select("*, categories(*), locations(*), listing_images(*), listing_warnings(*), listing_characteristics(*), listing_gear!fk_listing_gear_listing_id(*)").textSearch("title", keywords);
    if (error) return NextResponse.json({error}, {status: 500});

    return NextResponse.json({message: "success", data: data}, {status: 200});
}