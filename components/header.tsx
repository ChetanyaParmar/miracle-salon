"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Scissors,Instagram, Layout, FileText, MessageCircle, List, Globe } from "lucide-react"
import { RiGalleryLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { name: "Home", href: "/", icon: <Layout className="h-5 w-5" /> },
    { name: "Services", href: "/services", icon: <List className="h-5 w-5" /> },
    { name: "Gallery", href: "/gallery", icon: <FileText className="h-5 w-5" /> },
    { name: "About", href: "/about", icon: <Globe className="h-5 w-5" /> },
    { name: "Contact", href: "/contact", icon: <MessageCircle className="h-5 w-5" /> },
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
          <button
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-gray-900" /> : <Menu className="h-5 w-5 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Circular Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div ref={menuRef} className="relative">

            {/* Circular menu background */}
            <div className="w-[250px] h-[250px] relative">
              {/* Semi-circular dark background */}
              <div className="absolute w-full h-full rounded-full border border-[#2A2A2A] border-[50px]"></div>

              {/* Center button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Menu className="h-6 w-6 text-gray-800" />
              </div>

              {/* Menu items positioned in a circle */}
              <div className="w-full h-full absolute">
                {/* Home - Top Left */}
                <div className="absolute top-[23%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <TiHomeOutline className="h-6 w-6 text-white"/>
                </Link>
                </div>

                {/* Services - Bottom Left */}
                <div className="absolute top-[50%] left-[12%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                  <Scissors className="h-6 w-6 text-white" />
                </Link>
                </div>

                {/* Instagram - Bottom Left */}
                <div className="absolute top-[77%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
                  <a href="https://instgram.com">
                  <Instagram className="h-6 w-6 text-white" />
                  </a>
                </div>

                {/* About - Top Right */}
                <div className="absolute top-[25%] left-[79%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  <img src="/assets/aboutus.svg" className="h-12 w-12" alt="" />
                </Link>
                </div>

                {/* Contact - Middle Right */}
                <div className="absolute top-[50%] left-[89%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <MessageCircle className="h-6 w-6 text-white" />
                </Link>
                </div>

                {/* Book - Bottom */}
                <div className="absolute top-[89%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="h-6 w-6 text-white" />
                </Link>
                </div>

                {/* Gallery - Bottom Right */}
                <div className="absolute top-[77%] left-[77%] transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
                <RiGalleryLine className="h-6 w-6 text-white"/>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
