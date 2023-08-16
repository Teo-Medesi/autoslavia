import supabase from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST() {
    const {error} = await supabase.auth.signOut();
    if (error) return NextResponse.json({message: `Error while signing out.`, error}, {status: 400}); 

    return NextResponse.json({message: "Successfully signed user out", data}, {status: 200});
}