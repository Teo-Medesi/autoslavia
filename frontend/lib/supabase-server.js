import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const supabaseUrl = 'https://allqdhvtvglimqphvaat.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

const supabase = createServerComponentClient({cookies, headers}, {supabaseKey, supabaseUrl});

export default supabase;