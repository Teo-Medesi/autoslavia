"use client"
import { useSession } from "@/context/SessionContext"

export default function User() {
    const { signOut, session } = useSession();
    
    return (
        <div className="w-full h-[90vh] flex flex-col justify-center items-center">
            <p>{session?.user?.email}</p>
            <button onClick={signOut} className="btn-danger">Sign Out</button>
        </div>
    )
}