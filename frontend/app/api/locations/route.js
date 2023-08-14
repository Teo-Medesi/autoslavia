import { NextResponse } from "next/server";
import supabase from "@/lib/supabase.config.js";

export async function GET(request, {params}) {
    const {data, error} = await supabase.from("locations").select("*");

    if (error) return NextResponse.json({category_error}, {status: 500});

    return NextResponse.json({message: "success", data: data}, {status: 200});
}