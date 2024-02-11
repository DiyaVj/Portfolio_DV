/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Diya's Portfolio",
  description: 'Welcome to my portfolio! Diya Vijay this side.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
