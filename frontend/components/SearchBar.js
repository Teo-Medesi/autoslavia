"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import icon from "@/public/svgs/search.svg"
import Image from "next/image";

const SearchBar = () => {
    const [keywords, setKeywords] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (keywords) {
            router.push(`/listings/search?keywords=${keywords}`);
            router.refresh();
        }
    }

    const handleKeyDown = event => {
        if (event.key === "Enter") handleSearch();
    }
    
    return (
        <div className="w-full flex items-center">
            <input onChange={event => setKeywords(event.target.value)} onKeyDown={handleKeyDown} placeholder="Search Autoslavia..." type="text" className="p-2 rounded-l font-semibold placeholder:text-gray outline-none text-black w-full" />
            <div onClick={handleSearch} className="bg-secondary p-2 rounded-r cursor-pointer"><Image src={icon} alt="search icon" className="w-6 h-6" /></div>
        </div>
    )
}

export default SearchBar;