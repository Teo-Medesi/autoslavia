"use client";
import supabase from "@/supabase.config.js";
import { createContext, useState, useContext, useEffect } from "react"

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    console.log("bruh");
    const {data} = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user);
      console.log(`EVENT: ${event}, user: ${session?.user}`);
    })

    return () => {
      data.subscription.unsubscribe();
    }
  }, [supabase])
  
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  )
}

export default UserProvider;
export const useUser = () => useContext(UserContext);