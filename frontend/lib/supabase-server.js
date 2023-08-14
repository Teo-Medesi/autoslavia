import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const supabaseUrl = 'https://allqdhvtvglimqphvaat.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

export default () => {
    createServerComponentClient({
        headers,
        cookies
    }, {
        supabaseKey,
        supabaseUrl
    })
}