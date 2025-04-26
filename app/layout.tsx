import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Blackheart Labs | AI Tools for Solopreneurs",
  description:
    "Helping solopreneurs discover the best AI tools to automate, scale, and thrive with actionable guides and honest reviews.",
  openGraph: {
    title: "Blackheart Labs | AI Tools for Solopreneurs",
    description: "Work smarter, not harder. The best AI tools for solo entrepreneurs in one place.",
    type: "website",
    url: "https://blackheartlabs.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-white text-charcoal min-h-screen flex flex-col relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticleBackground />
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
