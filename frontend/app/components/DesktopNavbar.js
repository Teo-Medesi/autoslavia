import logo from "../../public/svgs/logo.svg"
import Image from "next/image"
import { Russo_One } from "next/font/google";

const russo = Russo_One({subsets: ["latin"], weight: "400"});

const DesktopNavbar = ({className}) => {
  return (
    <nav className={className + " w-full flex justify-between items-center px-12 bg-secondary " + russo.className}>
      <div className="w-full">
        <ul className="flex gap-8 text-xl items-center">
          <li><h3 className="text-2xl tracking-wide flex items-center"><span className="text-tertiary">AU</span>TO<Image src={logo} className="w-12 h-12"/>SLA<span className="text-tertiary">VIA</span></h3></li>
          <li className="hover:text-tertiary cursor-pointer"><a href="#">Home</a></li>
          <li className="hover:text-tertiary cursor-pointer"><a href="#">Categories</a></li>
        </ul>
      </div>
      <div className="w-full">
        <input placeholder="Zastava 750..." type="text" className="p-2 rounded placeholder:text-black outline-none text-black w-full" />
      </div>
      <div className="flex justify-end w-full">
        <ul className="flex gap-8 text-xl items-center">
          <li className="hover:text-tertiary cursor-pointer">Help</li>
          <li><button className="p-4 rounded bg-tertiary text-black">Sign Up</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default DesktopNavbar