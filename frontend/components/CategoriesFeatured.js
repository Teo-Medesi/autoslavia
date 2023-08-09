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
    <section className="md:h-[22vh] border-secondary border-t-8 bg-primary hidden md:grid md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-11 grid-rows-1 auto-rows-[0] overflow-hidden gap-12 padding-x-2">
        {brands.map((element, index) => <div className="h-[22vh] flex items-center"><Link key={index} href={`/categories/${element.name}`} className="rounded-full self-center aspect-1/1 p-4 bg-background cursor-pointer"><Image src={element.src} alt={element.name} className=""/></Link></div>)}
    </section>
  )
}

export default CategoriesFeatured