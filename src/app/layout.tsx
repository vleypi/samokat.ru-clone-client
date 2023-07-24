import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Box from '@/components/Box'
import Sidebar from '@/components/Sidebar/Sidebar'
import Search from '@/components/Search/Search'



const font = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Быстрая доставка продуктов на дом - Самокат',
  description: 'Быстрая доставка продуктов на дом - Самокат',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} flex h-full`}>
            <Box className='hidden md:flex flex-col  w-[350px] px-6 pb-6'>
                <Sidebar />
            </Box>
            <Box className='w-full overflow-y-auto py-6'> 
                  <main className='overflow-y-auto rounded-3xl bg-white p-4'>
                    <Search />
                    {children}
                  </main>
            </Box>
            {/* <Box className=' hidden md:flex flex-col w-[350px] px-6 pb-6'>
                <Sidebar />
            </Box> */}
      </body>
    </html>
  )
}
