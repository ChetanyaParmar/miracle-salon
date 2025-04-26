import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image src="/placeholder.svg?height=600&width=1600" alt="Gallery" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-white/20 backdrop-blur-sm rounded-full text-sm mb-4 text-white">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Gallery</h1>
            <p className="text-xl text-white/80 max-w-xl font-light">
              Browse our portfolio and get inspired for your next visit
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-gray-50 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="rounded-full text-gray-700 data-[state=active]:bg-rose-300 data-[state=active]:text-white px-8"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="hair"
                className="rounded-full text-gray-700 data-[state=active]:bg-rose-300 data-[state=active]:text-white px-8"
              >
                Hair
              </TabsTrigger>
              <TabsTrigger
                value="makeup"
                className="rounded-full text-gray-700 data-[state=active]:bg-rose-300 data-[state=active]:text-white px-8"
              >
                Makeup
              </TabsTrigger>
              <TabsTrigger
                value="nails"
                className="rounded-full text-gray-700 data-[state=active]:bg-rose-300 data-[state=active]:text-white px-8"
              >
                Nails
              </TabsTrigger>
              <TabsTrigger
                value="facial"
                className="rounded-full text-gray-700 data-[state=active]:bg-rose-300 data-[state=active]:text-white px-8"
              >
                Facial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group overflow-hidden rounded-3xl">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {["hair", "makeup", "nails", "facial"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages
                  .filter((image) => image.category === category)
                  .map((image, index) => (
                    <div key={index} className="group overflow-hidden rounded-3xl">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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

const galleryImages = [
  { src: "/placeholder.svg?height=400&width=400", alt: "Hair styling example 1", category: "hair" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Hair styling example 2", category: "hair" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Hair styling example 3", category: "hair" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Hair styling example 4", category: "hair" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Makeup example 1", category: "makeup" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Makeup example 2", category: "makeup" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Makeup example 3", category: "makeup" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Makeup example 4", category: "makeup" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Nail care example 1", category: "nails" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Nail care example 2", category: "nails" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Nail care example 3", category: "nails" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Nail care example 4", category: "nails" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Facial treatment example 1", category: "facial" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Facial treatment example 2", category: "facial" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Facial treatment example 3", category: "facial" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Facial treatment example 4", category: "facial" },
]
