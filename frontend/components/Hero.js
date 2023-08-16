import { Russo_One } from 'next/font/google';
import zastava from "../public/zastava8.png"
import Image from 'next/image';

const Hero = () => {
  return (
    <header className="hidden md:flex flex-col xl:flex-row w-full justify-center items-center md:px-12  xl:py-12 md:py-0 h-[90vh] xl:h-[70vh] bg-background ">
        <div className="flex text-black pt-12 pb-0 xl:py-12 flex-col gap-10 xl:gap-20 w-full h-full basis-1/2 justify-center items-center">
          <div className="flex flex-col xl:text-left items-center w-full justify-center gap-4">
            <h1 className="text-4xl text-center xl:text-left font-bold xl:text-5xl uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, natus suscipit molestias rem delectus placeat distinctio eius cum, aliquam, ipsam incidunt officiis quae dolores maiores! Sapiente tenetur eius laborum.</p>
          </div>
          <div className="flex w-full justify-center xl:justify-start">
            <button className="btn-primary-xl uppercase">Explore Cars</button>
          </div>
        </div> 
        <div className="hidden md:flex justify-center">
          <Image className="w-4/6 xl:w-5/6 hidden md:block" src={zastava}/>
        </div>
    </header>
  )
}

export default Hero 