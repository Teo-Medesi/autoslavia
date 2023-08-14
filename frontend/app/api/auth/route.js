import { NextResponse } from "next/server";

export default async function GET(request) {
    const {searchParams} = new URL(request.url);
    const authCode = searchParams.get("code");
    
    try {
        if (!authCode) throw new Error("Missing authorization code!");

        const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token`)

    }
    catch (error) {
        return NextResponse.json({message: `Error while retrieving access token, error: ${error}`}, {status: 400})
    }
}