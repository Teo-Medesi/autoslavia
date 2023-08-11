"use client"
import zastava from "@/public/jugo.png"
import { useState } from "react";
import { signUpWithEmailAndPassword } from "@/actions";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="w-full h-[90vh] bg-white md:bg-background flex justify-center items-center">
            <form action={signUpWithEmailAndPassword} className="w-full md:w-2/3 md:border-t-8 border-t-primary lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex flex-col gap-12 justify-between padding-x padding-y-2 rounded-md bg-white aspect-4/5 md:shadow-md shadow-gray-2">
                {
                    !isSubmitted
                        ?
                        <>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="text-gray">Email</label>
                                <input name="email" type="email" className="input-sm !bg-white !w-full" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="text-gray">Password</label>
                                <input name="password" type="password" className="input-sm !bg-white !w-full" />
                            </div>
                            <button onClick={() => setIsSubmitted(true)} type="submit" className="btn-secondary !w-full !text-base">Sign Up</button>

                            <div className="w-full flex justify-center gap-8">
                                <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z" className="fill-primary hover:fill-black"></path> </g></svg>
                                <svg className="w-12 h-12 cursor-pointer hover:fill-black fill-primary" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>google</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24.7,20.5v7.6H35.6a10.9,10.9,0,0,1-10.9,8,12.1,12.1,0,1,1,7.9-21.3l5.6-5.6A20,20,0,1,0,24.7,44c16.8,0,20.5-15.7,18.9-23.5Z"></path> </g> </g> </g></svg>
                            </div>

                            <div className="cursor-pointer first-letter:w-full text-center border-t border-gray2 text-gray2 hover:text-primary p-8"><Link href="/sign-in">Already a user? Sign in....</Link></div>
                        </>
                        :
                        <div className="w-full h-full flex justify-center items-center flex-col gap-12">
                            <Image src={zastava} className="w-3/4" alt="Jugo 45 car"/>
                            <div className="text-center">
                                <h1 className="text-2xl">Please check your inbox</h1>
                                <p className="text-gray">A confirmation email has beeen sent to your email.</p>
                            </div>
                        </div>
                }
            </form>
        </div>
    )
}