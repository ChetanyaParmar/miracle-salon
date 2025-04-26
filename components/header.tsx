"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-light text-xl tracking-tight transition-colors duration-300 flex items-center",
              isScrolled || pathname !== "/" ? "text-gray-900" : "text-white",
            )}
          >
            MIRACLE<span className="text-rose-300">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm hover:text-[#0076CE] transition-colors duration-300",
                  pathname === item.href ? "text-rose-300" : "",
                  isScrolled || pathname !== "/" ? "text-gray-900" : "text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                size="sm"
                className={cn(
                  "rounded-full transition-all duration-300",
                  isScrolled || pathname !== "/"
                    ? "bg-[#0076CE] hover:bg-[#C6E6FB] text-white"
                    : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm",
                )}
              >
                <Phone className="mr-2 h-4 w-4" /> Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled || pathname !== "/" ? "text-gray-900" : "text-white",
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled || pathname !== "/" ? "text-gray-900" : "text-white",
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md fixed inset-0 z-40 pt-20">
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="space-y-8 flex flex-col flex-1 justify-center items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-2xl font-light text-gray-900 hover:text-rose-300 transition-colors",
                    pathname === item.href && "text-rose-300",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-8 text-center">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button size="lg" className="w-full bg-[#B0E0E6] hover:bg-[#B0E0E6] text-white rounded-full">
                  <Phone className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
