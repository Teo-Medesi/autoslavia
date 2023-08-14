import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = 'https://allqdhvtvglimqphvaat.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClientComponentClient({supabaseUrl, supabaseKey})

export default supabase;