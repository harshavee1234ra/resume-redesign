import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Manrope } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Harshavardhan Portfolio",
  description: "Portfolio of Harshavardhan Bodapati — Full Stack Developer",
    generator: 'v0.app'
}

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
