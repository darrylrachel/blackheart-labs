"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-electric-blue font-bold text-2xl">MomentumAI</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-charcoal hover:text-electric-blue transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/blog" className="text-charcoal hover:text-electric-blue transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-charcoal hover:text-electric-blue transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/subscribe">
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-soft-white hover-scale">
              Subscribe
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="default" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-soft-white" /> : <Menu className="h-6 w-6 text-soft-white" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-5 flex flex-col items-center space-y-4 mt-1 mx-4 rounded-lg">
          <Link
            href="/"
            className="text-charcoal hover:text-electric-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-charcoal hover:text-electric-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-charcoal hover:text-electric-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link href="/subscribe" className="w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-soft-white w-full">Subscribe</Button>
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
