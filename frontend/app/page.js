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
import ListingsGrid from "./ListingsGrid";

const russo = Russo_One({subsets: ["latin"], weight: "400"});

const getFeaturedListings = async () => {
  "use server";
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/featured`, {next: {revalidate: 60}});
  const data = await response.json();
  console.log(data);

  return data.data;
}

export default async function Home() {
  const brands = [{src: volkswagen, name: "volkswagen"}, {src: audi, name: "audi"}, {src: peugeot, name: "peugeot"}, {src: renault, name: "renault"}, {src: mercedes, name: "mercedes"}, {src: skoda, name: "skoda"}, {src: opel, name: "opel"}, {src: ferrari, name: "ferrari"}, {src: porsche, name: ""}, {src: fiat, name: "fiat"}, {src: ford, name: "ford"}]
  const listings = await getFeaturedListings();

  return (
    <main className="w-full h-full bg-background overflow-x-hidden">
      <header className="flex flex-col xl:flex-row w-full justify-center items-center md:px-12 py-12 md:py-0 md:min-h-[70vh] bg-background ">
        <div className="flex text-black py-12 flex-col gap-16 w-full h-full basis-1/2 justify-center items-center">
          <div className="flex flex-col justify-center gap-2">
            <h1 className={russo.className + " text-4xl font-bold md:text-5xl uppercase"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, natus suscipit molestias rem delectus placeat distinctio eius cum, aliquam, ipsam incidunt officiis quae dolores maiores! Sapiente tenetur eius laborum.</p>
          </div>
          <div className="flex w-full justify-start">
            <button className="button-xl uppercase">lorem</button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image className="w-full h-full hidden md:block" src={zastava}/>
        </div>
      </header>
      <section className="md:h-[22vh] border-tertiary border-t-8 bg-primary flex flex-wrap md:flex-nowrap py-12 md:py-0 gap-8 md:gap-0 md:flex-row justify-evenly md:justify-between items-center px-12">
        {brands.map((element, index) => <Link key={index} href={`/categories/${element.name}`} className="rounded-full p-4 bg-background cursor-pointer"><Image src={element.src} alt={element.name} className="w-12 h-12 md:w-20 md:h-20"/></Link>)}
      </section>
      <ListingsGrid className="min-h-[50vh]" listingsProp={listings} getMoreListings={getFeaturedListings} />
    </main>
  )
}
