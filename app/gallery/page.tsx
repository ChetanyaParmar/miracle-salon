"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Register GSAP plugins
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Hero animations
    gsap.fromTo(
      heroRef.current?.querySelector(".hero-content"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    )

    // Featured section animations
    gsap.from(featuredRef.current, {
      scrollTrigger: {
        trigger: featuredRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
    })

    // Gallery items animations with staggered effect
    const galleryItems = galleryRef.current?.querySelectorAll(".gallery-item")
    galleryItems?.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
      })
    })

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Carousel navigation
  const nextSlide = () => {
    if (!carouselRef.current) return
    setActiveSlide((prev) => (prev + 1) % featuredImages.length)
  }

  const prevSlide = () => {
    if (!carouselRef.current) return
    setActiveSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length)
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[100vh] flex items-center justify-center">
        <Image src="/assets/hero.png?height=1200&width=2400" alt="Gallery" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 hero-content">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-white/20 backdrop-blur-sm rounded-full text-sm mb-4 text-white">
              Our Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Gallery</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-xl font-light leading-relaxed">
              Browse our portfolio and get inspired for your next visit
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Featured Carousel Section */}
      <div ref={featuredRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-2 tracking-tight">Featured Work</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">Our most popular and trending styles that our clients love</p>

          <div className="relative overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {featuredImages.map((image, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-medium mb-2">{image.title}</h3>
                        <p className="text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSlide === index ? "bg-[#0076CE] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="container mx-auto px-4 py-24">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="bg-gray-50 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="rounded-full text-gray-700 data-[state=active]:bg-[#0076CE] data-[state=active]:text-white px-8"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="hair"
                className="rounded-full text-gray-700 data-[state=active]:bg-[#0076CE] data-[state=active]:text-white px-8"
              >
                Hair
              </TabsTrigger>
              <TabsTrigger
                value="makeup"
                className="rounded-full text-gray-700 data-[state=active]:bg-[#0076CE] data-[state=active]:text-white px-8"
              >
                Makeup
              </TabsTrigger>
              <TabsTrigger
                value="nails"
                className="rounded-full text-gray-700 data-[state=active]:bg-[#0076CE] data-[state=active]:text-white px-8"
              >
                Nails
              </TabsTrigger>
              <TabsTrigger
                value="facial"
                className="rounded-full text-gray-700 data-[state=active]:bg-[#0076CE] data-[state=active]:text-white px-8"
              >
                Facial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-item group overflow-hidden rounded-3xl ${
                    index % 5 === 0 || index % 5 === 3 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-medium">{image.alt}</h3>
                        <p className="text-sm text-white/80">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {["hair", "makeup", "nails", "facial"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
                {galleryImages
                  .filter((image) => image.category === category)
                  .map((image, index) => (
                    <div
                      key={index}
                      className={`gallery-item group overflow-hidden rounded-3xl ${
                        index % 5 === 0 || index % 5 === 3 ? "sm:col-span-2 sm:row-span-2" : ""
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-medium">{image.alt}</h3>
                            <p className="text-sm text-white/80">{image.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

const featuredImages = [
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Featured hair styling",
    title: "Premium Hair Styling",
    description: "Our signature hair styling services that transform your look",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Featured makeup",
    title: "Professional Makeup",
    description: "Perfect for special occasions and everyday glamour",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Featured nail art",
    title: "Creative Nail Art",
    description: "Express yourself with our custom nail designs",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Featured facial treatment",
    title: "Rejuvenating Facials",
    description: "Revitalize your skin with our premium treatments",
  },
]

const testimonials = [
  {
    name: "Emma Thompson",
    service: "Hair Styling",
    text: "The team transformed my hair completely. I've never received so many compliments! Their attention to detail and understanding of what would suit me best was impressive.",
  },
  {
    name: "Michael Chen",
    service: "Facial Treatment",
    text: "My skin has never looked better. The facial treatment was relaxing and the results were immediate. The staff was knowledgeable and made great recommendations for my skin type.",
  },
  {
    name: "Sophia Rodriguez",
    service: "Makeup & Nails",
    text: "I came in for a special event and left feeling like a celebrity. The makeup was flawless and my nails were exactly what I wanted. Will definitely be returning!",
  },
]

const galleryImages = [
  { src: "/placeholder.svg?height=600&width=600", alt: "Hair styling example 1", category: "hair" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Hair styling example 2", category: "hair" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Hair styling example 3", category: "hair" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Hair styling example 4", category: "hair" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Makeup example 1", category: "makeup" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Makeup example 2", category: "makeup" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Makeup example 3", category: "makeup" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Makeup example 4", category: "makeup" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Nail care example 1", category: "nails" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Nail care example 2", category: "nails" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Nail care example 3", category: "nails" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Nail care example 4", category: "nails" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Facial treatment example 1", category: "facial" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Facial treatment example 2", category: "facial" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Facial treatment example 3", category: "facial" },
  { src: "/placeholder.svg?height=600&width=600", alt: "Facial treatment example 4", category: "facial" },
]
