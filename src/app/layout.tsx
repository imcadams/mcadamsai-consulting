// src/app/layout.tsx
import { Inter } from 'next/font/google'
import PlausibleProvider from 'next-plausible'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <PlausibleProvider 
          domain="mcadamsai.com" 
          trackLocalhost={true}
          enabled={true}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
