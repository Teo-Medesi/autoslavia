"use client";
import profile from "@/public/svgs/profile.svg"
import { useSession } from "@/context/SessionContext";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const UserProfilePicture = () => {
    const session = useSession();

    useEffect(() => {
        console.log(session)
    }, [session])

    return (
        <div className="flex justify-end">
            <ul className="flex gap-8 text-xl items-center">
                {
                    !session?.user
                        ?
                        <>
                            <li className="nav-link hidden lg:block">Help</li>
                            <li><Link href={"/sign-up"}><button className="btn-secondary">Sign Up</button></Link></li>
                        </>
                        : 
                        <>
                            {
                                session?.user?.user_metadata?.picture 
                                    ? 
                                    <img src={session?.user?.user_metadata?.picture } className="rounded-full w-full aspect-1/1 cursor-pointer" />
                                    : 
                                    <div className="rounded-full bg-secondary p-4 cursor-pointer"><Image src={profile} alt="profile picture" className="w-12 aspect-1/1" /></div>
                            }
                        </>
                }
            </ul>
        </div>
    )
}

export default UserProfilePicture