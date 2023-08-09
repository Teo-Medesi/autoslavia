import { Russo_One } from 'next/font/google';
import zastava from "../public/zastava8.png"
import Image from 'next/image';

const Hero = () => {
  return (
    <header className="flex flex-col xl:flex-row w-full justify-center items-center md:px-12 py-12 md:py-0 md:min-h-[70vh] bg-background ">
        <div className="flex text-black py-12 flex-col gap-20 w-full h-full basis-1/2 justify-center items-center">
          <div className="flex flex-col items-center w-full justify-center gap-4">
            <h1 className="text-4xl font-bold md:text-6xl uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, natus suscipit molestias rem delectus placeat distinctio eius cum, aliquam, ipsam incidunt officiis quae dolores maiores! Sapiente tenetur eius laborum.</p>
          </div>
          <div className="flex w-full justify-start">
            <button className="btn-primary-xl uppercase">Explore Cars</button>
          </div>
        </div> 
        <div className="hidden md:block">
          <Image className="w-full h-full hidden md:block" src={zastava}/>
        </div>
    </header>
  )
}

export default Hero 