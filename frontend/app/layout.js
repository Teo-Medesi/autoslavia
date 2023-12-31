import './globals.css'
import { Inter, Russo_One } from 'next/font/google'
import { Footer, MobileNavbar, DesktopNavbar } from '@/components'
import SessionProvider from '@/context/SessionContext';

const inter = Inter({ subsets: ['latin'] })
const russo = Russo_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: 'Autoslavia',
  description: "Autoslavia - Uncover Ex-Yugoslavia's Finest Rides, Where History Meets Horsepower!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-background " + inter.className}>
        <SessionProvider>
          <MobileNavbar className="md:hidden h-[10vh]" />
          <DesktopNavbar className="hidden md:flex h-[10vh]" />
          <div className='min-h-[90vh] bg-background'>{children}</div>
          <Footer className="hidden" />
        </SessionProvider>
      </body>
    </html>
  )
}
