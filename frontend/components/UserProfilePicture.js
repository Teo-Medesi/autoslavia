"use client";
import profile from "@/public/svgs/profile.svg"
import { useSession } from "@/context/SessionContext";
import Link from "next/link";
import Image from "next/image";
import NewListing from "./NewListing";

const UserProfilePicture = () => {
    const { session } = useSession();

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
                                    <>
                                        <NewListing />
                                        <Link className="aspect-1/1 cursor-pointer w-12" href="/users/me"><img src={session?.user?.user_metadata?.picture} className="rounded-full w-full h-full" /></Link>
                                    </>
                                    :
                                    <>
                                        <NewListing />
                                        <Link href="/users/me"><div className="rounded-full w-12 bg-secondary p-4 cursor-pointer"><Image src={profile} alt="profile picture" className="w-full aspect-1/1" /></div></Link>
                                    </>
                            }
                        </>
                }
            </ul>
        </div>
    )
}

export default UserProfilePicture