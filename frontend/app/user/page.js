"use client"
import { useSession } from "@/context/SessionContext"
import Link from "next/link";

export default function User() {
    const { session, signOut } = useSession();

    return (
        <div className="w-full h-[90vh] flex justify-center items-center">
            <div className="w-full justify-center items-center md:w-2/3 md:border-t-8 border-t-primary lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex flex-col gap-12 padding-x padding-y-2 rounded-md bg-white aspect-4/5 md:shadow-md shadow-gray-2">
                <img onClick={() => console.log(session?.user)} src={session?.user?.user_metadata?.picture} className="rounded-full w-24 h-24 aspect-1/1 cursor-pointer" />
                <p className="text-xl">{session?.user?.email}</p>
                <p className="text-xl">{session?.user?.user_metadata?.full_name}</p>
                <Link href={"/user/favorites"} className="btn-primary">Favorite Listings</Link>
                <button onClick={async () => await fetch(`/api/auth/session/sign-out`, { method: "POST" })} className="btn-danger">Sign Out</button>
            </div>
        </div>
    )
}