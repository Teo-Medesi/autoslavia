import { Russo_One } from "next/font/google";
import Image from "next/image";
import zastava from "../public/zastava.png"

const russo = Russo_One({subsets: ["latin"], weight: "400"});

export default function Home() {
  return (
    <main className={russo.className + " w-full h-full bg-background"}>
      <header className="flex w-full px-12 h-[70vh] bg-background ">
        <div className="flex text-black flex-col gap-16 w-full h-full basis-1/2 justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, natus suscipit molestias rem delectus placeat distinctio eius cum, aliquam, ipsam incidunt officiis quae dolores maiores! Sapiente tenetur eius laborum.</p>
          </div>
          <div className="flex w-full gap-32 items-center justify-center">
            <button className="p-6 px-20 rounded uppercase text-xl bg-primary text-background">lorem</button>
            <button className="p-6 px-20 rounded uppercase text-xl bg-primary text-background">ipsum</button>
          </div>

        </div>
        <div>

          <Image className="w-full h-full"  src={zastava}/>

        </div>
      </header>
      <section className="h-[25vh] bg-primary">
        
      </section>
      <section className="h-[50vh">

      </section>
    </main>
  )
}
