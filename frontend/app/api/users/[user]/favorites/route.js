import { NextResponse } from "next/server";
import supabase_server from "@/lib/supabase-server.js";
import supabase from "@/lib/supabase.config.js";

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body?.listing_id) return NextResponse.json({ message: `Error while saving to favorites, error: Missing "listing_id" in body.` }, { status: 400 })

    const { data: { user }, error: user_error } = await supabase_server.auth.admin.getUserById(params.user);
    if (user_error || !user) return NextResponse.json({ message: `Error while saving to favorites`, error: user_error }, { status: 400 });

    const { data, error } = await supabase_server.from("user_favorite_listings").insert({ listing_id: body.listing_id, user_uid: params.user });
    if (error) return NextResponse.json({ message: `Error while saving to favorites`, error }, { status: 400 });

    return NextResponse.json({ message: "Successfully inserted new listing into favorites" }, { status: 201 })
}

export async function GET(request, { params }) {
    const { data, error } = await supabase.from("user_favorite_listings").select("*, listings(*)").eq("user_uid", params.user);
    if (error) return NextResponse.json({ message: `Error while retrieving favorite listings`, error }, { status: 400 });

    const listings = data?.map(element => element?.listings);

    return NextResponse.json({ message: "Successfully Retrieved favorite listings", data: listings }, { status: 200 })
}