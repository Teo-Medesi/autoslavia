import './globals.css'
import { Inter, Russo_One } from 'next/font/google'
import MobileNavbar from './components/MobileNavbar'
import DesktopNavbar from './components/DesktopNavbar'

const inter = Inter({ subsets: ['latin'] })
const russo = Russo_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: 'Autoslavia',
  description: "Autoslavia - Uncover Ex-Yugoslavia's Finest Rides, Where History Meets Horsepower!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-background" + russo.className}>
        <MobileNavbar className="md:hidden h-[10vh]" />
        <DesktopNavbar className="hidden md:flex h-[10vh]" />
        <div className='h-[80vh] bg-background md:h-[90vh]'>{children}</div>
      </body>
    </html>
  )
}
