import { Russo_One } from "next/font/google";
import Image from "next/image";
import zastava from "../public/zastava.png"
import volkswagen from "../public/svgs/brands/volkswagen-svgrepo-com.svg"
import audi from "../public/svgs/brands/audi-svgrepo-com.svg"
import peugeot from "../public/svgs/brands/peugeot-svgrepo-com.svg"
import renault from "../public/svgs/brands/renault-svgrepo-com.svg"
import mercedes from "../public/svgs/brands/mercedes-benz-svgrepo-com.svg"
import skoda from "../public/svgs/brands/skoda-svgrepo-com.svg"
import opel from "../public/svgs/brands/opel-svgrepo-com.svg"
import fiat from "../public/svgs/brands/fiat-svgrepo-com.svg"
import ford from "../public/svgs/brands/ford-svgrepo-com.svg"
import ferrari from "../public/svgs/brands/ferrari-svgrepo-com.svg"
import porsche from "../public/svgs/brands/porsche-svgrepo-com.svg"
import Link from "next/link";

const russo = Russo_One({subsets: ["latin"], weight: "400"});

export default function Home() {
  const brands = [volkswagen, audi, peugeot, renault, mercedes, skoda, opel, ferrari, porsche, fiat, ford]
  
  return (
    <main className={russo.className + " w-full h-full bg-background"}>
      <header className="flex w-full px-6 justify-center md:px-12 py-12 md:py-0 md:h-[70vh] bg-background ">
        <div className="flex text-black flex-col gap-16 w-full h-full basis-1/2 justify-center items-center">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-4xl md:text-5xl uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, natus suscipit molestias rem delectus placeat distinctio eius cum, aliquam, ipsam incidunt officiis quae dolores maiores! Sapiente tenetur eius laborum.</p>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-16 md:gap-32 items-center justify-center">
            <button className="p-6 px-20 rounded uppercase text-xl bg-primary text-background">lorem</button>
            <button className="p-6 px-20 rounded uppercase text-xl bg-primary text-background">ipsum</button>
          </div>

        </div>
        <div className="hidden md:block">

          <Image className="w-full h-full hidden md:block"  src={zastava}/>

        </div>
      </header>
      <section className="md:h-[22vh] bg-primary flex flex-col py-12 md:py-0 gap-8 md:gap-0 md:flex-row justify-between items-center px-12">
        {brands.map(element => <Link href="#" className="rounded-full p-4 bg-background cursor-pointer"><Image src={element} className="w-20 h-20"/></Link>)}
      </section>
      <section className="h-[50vh] bg-background p-24">
        
      </section>
    </main>
  )
}
