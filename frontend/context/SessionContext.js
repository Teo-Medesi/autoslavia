"use client";
import supabase from "@/lib/supabase-client.js";
import { createContext, useState, useContext, useEffect } from "react"

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({ signOut: supabase.auth.signOut, session: { user: {} } });

  useEffect(() => {
    // listening for auth events such as SIGN_IN, SIGN_OUT...
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {

      // retrieving session data on initial render
      if (session) setSession(current => { return { ...current, session } });
      else {
        const { data: { session, user }, error } = await supabase.auth.getSession();
        setSession(current => { return { ...current, ...session, user, error } });
      }

      if (process.env.NEXT_PUBLIC_DEVELOPMENT) console.log(`EVENT: ${event}, user: ${session?.user?.email}`);
    })

    return () => {
      // removing the listener
      data.subscription.unsubscribe();
    }
  }, [])

  return (
    <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
  )
}

export default SessionProvider;

// returns { session, signOut}
export const useSession = () => useContext(SessionContext);