import Image from 'next/image'
import Link from 'next/link'
import zastava from "@/public/zastava2.png"
 
export default function NotFound() {
  return (
    <div className='text-black text-xl flex flex-col gap-4 justify-center items-center h-full'>
      <Image src={zastava} alt="fićo" className='aspect-1/1 w-1/4'/>
      <h2 className='text-4xl text-primary'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='text-xl p-4 bg-primary rounded text-background' href="/">Return Home</Link>
    </div>
  )
}