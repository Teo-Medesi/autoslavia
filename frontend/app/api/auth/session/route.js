import supabase from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function GET() {
    const {data, error} = await supabase.auth.getSession();
    if (error || !data) return NextResponse.json({message: `Error while retrieving session`, error}, {status: 400}); 

    return NextResponse.json({message: "Successfully retrieved session", data}, {status: 200});
}