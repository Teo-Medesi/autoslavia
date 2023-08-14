import { NextResponse } from "next/server";
import supabase from "@/lib/supabase.config";

export default async function POST(request, {params}) {
    const body = await request.json();

    if (!body?.listing_id) return NextResponse.json({message: `Error while saving to favorites, error: Missing "listing_id" in body.`}, {status: 400}) 

    const { data, error} = await supabase.from("user_favorite_listings").insert({listing_id: body.listing_id, user_uid: params.uid});
    if (error) return NextResponse.json({message: `Error while saving to favorites, error: ${error}`}, {status: 400});

}