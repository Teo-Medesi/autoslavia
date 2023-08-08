import Image from "next/image";
import Link from "next/link";
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


const CategoriesFeatured = () => {
  const brands = [{src: volkswagen, name: "volkswagen"}, {src: audi, name: "audi"}, {src: peugeot, name: "peugeot"}, {src: renault, name: "renault"}, {src: mercedes, name: "mercedes"}, {src: skoda, name: "skoda"}, {src: opel, name: "opel"}, {src: ferrari, name: "ferrari"}, {src: porsche, name: ""}, {src: fiat, name: "fiat"}, {src: ford, name: "ford"}]
    
  return (
    <section className="md:h-[22vh] border-secondary border-t-8 bg-primary flex flex-wrap md:flex-nowrap py-12 md:py-0 gap-8 md:gap-0 md:flex-row justify-evenly md:justify-between items-center px-12">
        {brands.map((element, index) => <Link key={index} href={`/categories/${element.name}`} className="rounded-full p-4 bg-background cursor-pointer"><Image src={element.src} alt={element.name} className="w-12 h-12 md:w-20 md:h-20"/></Link>)}
    </section>
  )
}

export default CategoriesFeatured