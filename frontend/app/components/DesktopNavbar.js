import logo from "../../public/svgs/logo.svg"
import Image from "next/image"
import { Russo_One } from "next/font/google";
import Link from "next/link";

const russo = Russo_One({ subsets: ["latin"], weight: "400" });

const DesktopNavbar = ({ className }) => {
  return (
    <nav className={className + " w-full flex gap-8 items-center px-12 bg-primary "}>
      <div className="">
        <ul className="flex gap-8 w-max text-xl items-center">
          <li><h3 className={"text-2xl tracking-wide flex items-center " + russo.className}><span className="text-tertiary">AU</span>TO<Image src={logo} className="w-12 h-12" />SLA<span className="text-tertiary">VIA</span></h3></li>
          <li className="hover:text-tertiary cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-tertiary cursor-pointer"><Link href="#">Categories</Link></li>
        </ul>
      </div>
      <input placeholder="Zastava 750..." type="text" className="p-2 rounded placeholder:text-black outline-none text-black w-full" />
      <div className="flex justify-end">
        <ul className="flex gap-8 text-xl items-center">
          <li className="hover:text-tertiary cursor-pointer">Help</li>
          <li><button className="p-4 rounded bg-tertiary w-max text-black">Sign Up</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default DesktopNavbar