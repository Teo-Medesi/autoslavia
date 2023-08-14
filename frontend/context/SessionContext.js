"use client";
import supabase from "@/lib/supabase-client.js";
import { useSearchParams } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react"

const SessionContext = createContext();

const SessionProvider = ({children}) => {
  const [session, setSession] = useState({});
  const searchParams = useSearchParams();

  useEffect(() =>{
    const {data} = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) setSession(session);
      else {
        const { data: { session, user}, error } = await supabase.auth.getSession();
        setSession({...session, user});
      }
      
      if (process.env.NEXT_PUBLIC_DEVELOPMENT) console.log(`EVENT: ${event}, session: ${session}`);
    })

    return () => {
      data.subscription.unsubscribe();
    }
  }, [supabase])
  
  return (
    <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
  )
}

export default SessionProvider;
export const useSession = () => useContext(SessionContext);