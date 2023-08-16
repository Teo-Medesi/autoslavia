"use client"
import { useSession } from "@/context/SessionContext"
import Link from "next/link";

export default function User() {
    const { session, signOut } = useSession();

    return (
        <div className="w-full h-[90vh] bg-white flex flex-col gap-4 justify-center items-center">

            <img onClick={() => console.log(session?.user)} src={session?.user?.user_metadata?.picture} className="rounded-full w-24 h-24 aspect-1/1 cursor-pointer" />
            <p className="text-xl">{session?.user?.email}</p>
            <p className="text-xl">{session?.user?.user_metadata?.full_name}</p>
            <Link href={"/user/favorites"} className="btn-primary">Favorite Listings</Link>
            <button onClick={async () => await fetch(`/api/auth/session/sign-out`, { method: "POST" })} className="btn-danger">Sign Out</button>

        </div>
    )
}