import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={"flex min-h-[92vh] bg-background " + inter.className}>
      <div className="basis-1/4 w-1/4 h-auto"></div>
      {children}
      <div className="basis-1/4 w-1/4 h-auto"></div>
    </div >
  )
}