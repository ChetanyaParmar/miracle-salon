import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import '@/styles/fonts.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.png"
            alt="Salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white space-y-6 md:pr-12">
            <div className="inline-block px-3 py-1 border border-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
              Premium Beauty Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-Folies tracking-tight">
              MIRACLE<span className="text-rose-300">.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-md">
              Where beauty meets innovation. Experience the future of beauty services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce bg-white/10 backdrop-blur-md p-2 rounded-full">
            <ArrowRight className="h-5 w-5 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">The Future of Beauty</h2>
            <p className="text-gray-600 leading-relaxed">
              At Miracle Salon, we blend cutting-edge techniques with timeless expertise to create a beauty experience
              that's ahead of its time. Our team of skilled professionals is dedicated to enhancing your natural beauty
              with precision and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium beauty services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hair Styling - Large Tile */}
            <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/hairstyle.png?height=800&width=800"
                alt="Hair styling"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-light text-white mb-2">Hair Styling</h3>
                <p className="text-white/80 mb-4 max-w-md">
                  Expert cuts, coloring, and styling for all hair types. Our stylists blend technical precision with
                  artistic vision.
                </p>
                <Link
                  href="/services/hair"
                  className="inline-flex items-center text-[#0076CE] hover:text-rose-100 transition-colors"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Makeup */}
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/makeup.png?height=400&width=400"
                alt="Makeup"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-light text-white mb-2">Makeup</h3>
                <p className="text-white/80 mb-3 text-sm">Professional makeup for any occasion.</p>
                <Link
                  href="/services/makeup"
                  className="inline-flex items-center text-[#0076CE] hover:text-rose-100 transition-colors text-sm"
                >
                  Explore <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Nail Care */}
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/nailart.png?height=400&width=400"
                alt="Nail care"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-light text-white mb-2">Nail Care</h3>
                <p className="text-white/80 mb-3 text-sm">Manicures, pedicures, and nail art.</p>
                <Link
                  href="/services/nails"
                  className="inline-flex items-center text-[#0076CE] hover:text-rose-100 transition-colors text-sm"
                >
                  Explore <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Facial Treatments */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/facial.png?height=400&width=800"
                alt="Facial treatments"
                width={800}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-light text-white mb-2">Facial Treatments</h3>
                <p className="text-white/80 mb-3">
                  Rejuvenating facials for glowing skin. Advanced techniques for all skin types.
                </p>
                <Link
                  href="/services/facial"
                  className="inline-flex items-center text-[#0076CE] hover:text-rose-100 transition-colors"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 h-12">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=700&width=600"
                  alt="Salon team"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#0076CE] rounded-3xl"></div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to redefine beauty experiences, Miracle Salon has evolved into a sanctuary of
                transformation and self-expression. Our journey began with a simple belief: everyone deserves to feel
                extraordinary.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of dedicated artisans continues to uphold this philosophy, combining technical expertise
                with artistic vision to create personalized experiences that celebrate your unique beauty.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-8 h-12">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Client Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their Miracle experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-rose-300 fill-rose-300" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">{testimonial.comment}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into our artistry and the transformations we create
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl group">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Gallery+Image+${item}`}
                  alt={`Gallery image ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button variant="outline" className="rounded-full px-8 h-12">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Elevate Your Beauty Experience</h2>
            <p className="text-xl mb-10 text-white/80 font-light">
              Book your appointment today and discover the Miracle difference.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12">
                <Phone className="mr-2 h-4 w-4" /> Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Hair Styling",
    comment:
      "The stylists at Miracle Salon are true artists. My experience was nothing short of transformative—they understood exactly what I wanted and delivered beyond my expectations.",
  },
  {
    name: "Michael Chen",
    service: "Facial Treatment",
    comment:
      "The facial treatment was a perfect blend of relaxation and results. My skin has never looked better, and the attention to detail throughout the experience was impeccable.",
  },
  {
    name: "Emily Rodriguez",
    service: "Nail Care",
    comment:
      "I've visited many salons, but Miracle stands apart. Their nail artists are meticulous, creative, and truly passionate about their craft. A truly luxurious experience.",
  },
]
