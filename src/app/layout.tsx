

import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Champion Aden',
  description: 'My typescript portfolio',
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/logo.jpg', sizes: '16x16', type: 'image/jpg' },
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpg' },
    ],
    apple: [
      { url: '/logo.jpg' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  themeColor: 'black',
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
          <main className="flex-1 border-x border-gray-800 min-h-screen pb-20 lg:pb-0 lg:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

