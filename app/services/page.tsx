import Link from "next/link"
import Image from "next/image"
import { Scissors, Sparkles, Fingerprint, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image src="/assets/service.jpg?height=600&width=1600" alt="Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-white/20 backdrop-blur-sm rounded-full text-sm mb-4 text-white">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/80 max-w-xl font-light">
              Discover our comprehensive range of beauty services designed for the modern individual
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-16 mb-24`}
          >
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center">
                <service.icon className="w-6 h-6 mr-3 text-[#0076CE]" />
                <h2 className="text-3xl font-light text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <ul className="space-y-4">
                {service.offerings.map((offering, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#0076CE] mr-3">•</span>
                    <span className="text-gray-600">{offering}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`}>
                <Button className="bg-[#0076CE] hover:bg-rose-100 text-white rounded-full px-8 h-12">
                  Explore {service.title}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-gray-900">Ready to Transform?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600 font-light">
            Book your appointment today and experience the Miracle difference.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#0076CE] hover:bg-rose-100 text-white rounded-full px-8 h-12">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: "Hair Styling",
    slug: "hair",
    icon: Scissors,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our expert stylists provide cutting-edge hair services tailored to your unique style and preferences. From trendy cuts to vibrant colors, we help you express yourself through your hair with precision and artistry.",
    offerings: [
      "Haircuts for all genders",
      "Hair coloring and highlights",
      "Balayage and ombre techniques",
      "Blowouts and styling",
      "Hair treatments and masks",
      "Extensions and hair additions",
    ],
  },
  {
    title: "Makeup",
    slug: "makeup",
    icon: Sparkles,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Whether you're preparing for a special occasion or want to learn new makeup techniques, our makeup artists create looks that enhance your natural beauty and boost your confidence, using premium products and expert application.",
    offerings: [
      "Special occasion makeup",
      "Bridal makeup",
      "Everyday makeup application",
      "Makeup lessons and tutorials",
      "Eyelash extensions",
      "Eyebrow shaping and tinting",
    ],
  },
  {
    title: "Nail Care",
    slug: "nails",
    icon: Fingerprint,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Treat yourself to our luxurious nail services. Our nail technicians are skilled in the latest techniques and use high-quality products to ensure your nails look perfect for weeks, combining technical expertise with artistic vision.",
    offerings: [
      "Manicures and pedicures",
      "Gel and acrylic nail extensions",
      "Nail art and designs",
      "Dip powder nails",
      "Nail repair treatments",
      "Paraffin treatments",
    ],
  },
  {
    title: "Facial Treatments",
    slug: "facial",
    icon: Smile,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our facial treatments are designed to rejuvenate your skin and address specific concerns. Using premium skincare products, we help you achieve a healthy, glowing complexion through personalized treatments and expert care.",
    offerings: [
      "Deep cleansing facials",
      "Anti-aging treatments",
      "Acne and blemish control",
      "Hydrating and moisturizing facials",
      "Chemical peels",
      "Microdermabrasion",
    ],
  },
]
