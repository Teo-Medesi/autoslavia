import { NextResponse } from "next/server";
import supabase from "../../../../lib/supabase.config.js"

export async function GET(request) {
    const {data, error} = await supabase.rpc("get_random_listings");
    if (error) return NextResponse.json({error}, {status: 500});

    return NextResponse.json({message: "success", data: data}, {status: 200});
}