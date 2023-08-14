import { NextResponse } from "next/server";
import supabase from "@/lib/supabase.config";

export async function GET(request, {params}) {
    const { data, error} = await supabase.from("listings").select("*, categories(*), locations(*), listing_images(*), listing_warnings(*), listing_characteristics(*), listing_gear!fk_listing_gear_listing_id(*)").eq("id", params.listing);
 
    if (error) return NextResponse.json({error}, {status: 500});

    return NextResponse.json({message: "success", data: data?.[0]}, {status: 200});
}