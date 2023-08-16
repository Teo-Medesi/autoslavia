"use client";

import Link from "next/link";

const NewListing = () => {
  return (
    <Link href={"/users/me/create-new-listing"} className="rounded-full w-12 hover:bg-background bg-secondary p-3"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg></Link>
  )
}

export default NewListing