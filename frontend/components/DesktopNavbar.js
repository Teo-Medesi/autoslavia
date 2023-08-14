import logo from "@/public/svgs/logo.svg"
import Image from "next/image"
import { Russo_One } from "next/font/google";
import Link from "next/link";
import SearchBar from "./SearchBar";
import UserProfilePicture from "./UserProfilePicture";

const russo = Russo_One({ subsets: ["latin"], weight: "400" });

const DesktopNavbar = ({ className }) => {
  return (
    <nav className={className + " w-full flex gap-8 items-center px-12 bg-primary "}>
      <div className="">
        <ul className="flex gap-8 w-max text-xl items-center">
          <Link href="/"><li><h3 className={"text-2xl tracking-wide text-white flex items-center " + russo.className}><span className="text-secondary">AU</span>TO<Image src={logo} className="w-12 h-12" />SLA<span className="text-secondary">VIA</span></h3></li></Link>
          <li className="nav-link hidden lg:block"><Link href="#">Categories</Link></li>
          <li className="nav-link hidden lg:block"><Link href="/">Contact</Link></li>
        </ul>
      </div>
      <SearchBar />
      <UserProfilePicture />
    </nav>
  )
}

export default DesktopNavbar