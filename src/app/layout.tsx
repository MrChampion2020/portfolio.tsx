// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Portfolio',
//   description: 'My professional portfolio',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} min-h-screen bg-black`}>
//         <div className="flex min-h-screen">
//           <main className="flex-1 border-x border-gray-800 min-h-screen pb-20 lg:pb-0">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   )
// }



import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'My professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 border-x border-gray-800 min-h-screen pb-20 lg:pb-0 lg:ml-40 xl:ml-72">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

