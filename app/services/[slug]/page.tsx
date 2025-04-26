import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Scissors, Sparkles, Fingerprint, Smile, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <div className="flex items-center mb-4">
          <service.icon className="w-8 h-8 mr-3 text-neutral-700" />
          <h1 className="text-4xl font-bold">{service.title}</h1>
        </div>
        <p className="text-neutral-600 max-w-3xl">{service.description}</p>
      </div>

      <div className="mb-16">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-[500px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-6">Our {service.title} Services</h2>
          <div className="space-y-8">
            {service.detailedServices.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center text-sm text-neutral-500 border-b pb-2">
                  <span>Starting from</span>
                  <span className="font-medium text-neutral-900">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-neutral-50 p-6 rounded-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>
            <p className="text-neutral-600 mb-6">
              Ready to experience our {service.title.toLowerCase()} services? Call us to book your appointment today.
            </p>
            <Button size="lg" className="w-full mb-4">
              <Phone className="mr-2 h-4 w-4" /> Call to Book
            </Button>
            <p className="text-sm text-neutral-500 text-center">
              Or visit our salon at
              <br />
              123 Beauty Street, New York
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose Our {service.title} Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex">
              <div className="mr-4 text-neutral-900">•</div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Explore Our Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .filter((s) => s.slug !== params.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-neutral-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-neutral-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600">{s.shortDescription}</p>
              </Link>
            ))}
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
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Our expert stylists provide cutting-edge hair services tailored to your unique style and preferences. From trendy cuts to vibrant colors, we help you express yourself through your hair.",
    shortDescription: "Cuts, coloring, and styling for all hair types.",
    detailedServices: [
      {
        name: "Haircut & Styling",
        description:
          "A personalized haircut tailored to your face shape and style preferences, followed by professional styling.",
        price: 45,
      },
      {
        name: "Hair Coloring",
        description:
          "Full or partial hair coloring using premium products that maintain hair health while providing vibrant, long-lasting color.",
        price: 75,
      },
      {
        name: "Highlights & Balayage",
        description: "Add dimension and depth to your hair with our expert highlighting and balayage techniques.",
        price: 120,
      },
      {
        name: "Hair Treatments",
        description:
          "Rejuvenating treatments to restore hair health, including deep conditioning, keratin treatments, and scalp therapy.",
        price: 60,
      },
    ],
    benefits: [
      {
        title: "Expert Stylists",
        description:
          "Our hair stylists are certified professionals with years of experience and continuous education in the latest techniques.",
      },
      {
        title: "Premium Products",
        description:
          "We use only high-quality, salon-grade products that protect and nourish your hair while providing exceptional results.",
      },
      {
        title: "Personalized Approach",
        description:
          "Every service begins with a thorough consultation to understand your needs, lifestyle, and hair goals.",
      },
      {
        title: "Relaxing Experience",
        description:
          "Enjoy a complimentary scalp massage with every hair service in our comfortable, modern salon environment.",
      },
    ],
  },
  {
    title: "Makeup",
    slug: "makeup",
    icon: Sparkles,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Whether you're preparing for a special occasion or want to learn new makeup techniques, our makeup artists create looks that enhance your natural beauty and boost your confidence.",
    shortDescription: "Professional makeup for any occasion.",
    detailedServices: [
      {
        name: "Special Occasion Makeup",
        description: "Professional makeup application for weddings, parties, photoshoots, and other special events.",
        price: 65,
      },
      {
        name: "Bridal Makeup",
        description:
          "Comprehensive bridal makeup service including consultation, trial, and day-of application with premium, long-lasting products.",
        price: 150,
      },
      {
        name: "Makeup Lesson",
        description:
          "One-on-one makeup tutorial where you'll learn techniques tailored to your features and preferences.",
        price: 80,
      },
      {
        name: "Eyelash Extensions",
        description: "Full set of premium eyelash extensions applied with precision for a natural or dramatic look.",
        price: 120,
      },
    ],
    benefits: [
      {
        title: "Skilled Artists",
        description:
          "Our makeup artists are trained in the latest techniques and trends, with experience working with all skin types and tones.",
      },
      {
        title: "Quality Products",
        description:
          "We use high-performance, hypoallergenic makeup brands that look beautiful and feel comfortable on your skin.",
      },
      {
        title: "Customized Looks",
        description:
          "Every makeup application is tailored to enhance your unique features and match your personal style.",
      },
      {
        title: "Long-Lasting Results",
        description: "Our techniques and products ensure your makeup stays fresh and beautiful throughout your event.",
      },
    ],
  },
  {
    title: "Nail Care",
    slug: "nails",
    icon: Fingerprint,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Treat yourself to our luxurious nail services. Our nail technicians are skilled in the latest techniques and use high-quality products to ensure your nails look perfect for weeks.",
    shortDescription: "Manicures, pedicures, and nail art.",
    detailedServices: [
      {
        name: "Classic Manicure",
        description: "Nail shaping, cuticle care, hand massage, and polish application for beautifully groomed hands.",
        price: 35,
      },
      {
        name: "Gel Manicure",
        description: "Long-lasting gel polish application that stays chip-free and glossy for up to two weeks.",
        price: 45,
      },
      {
        name: "Luxury Pedicure",
        description:
          "Comprehensive foot care including soak, exfoliation, callus removal, massage, and polish for rejuvenated feet.",
        price: 55,
      },
      {
        name: "Nail Art & Design",
        description: "Custom nail art ranging from simple accents to elaborate designs, tailored to your preferences.",
        price: 15,
      },
    ],
    benefits: [
      {
        title: "Hygienic Practices",
        description:
          "We maintain the highest standards of cleanliness with sterilized tools and single-use items for every client.",
      },
      {
        title: "Skilled Technicians",
        description:
          "Our nail technicians are experienced professionals who stay updated on the latest nail trends and techniques.",
      },
      {
        title: "Premium Products",
        description:
          "We use high-quality, non-toxic nail products that promote nail health while providing beautiful results.",
      },
      {
        title: "Relaxing Environment",
        description:
          "Our nail services are performed in a comfortable, peaceful setting for a truly relaxing experience.",
      },
    ],
  },
  {
    title: "Facial Treatments",
    slug: "facial",
    icon: Smile,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Our facial treatments are designed to rejuvenate your skin and address specific concerns. Using premium skincare products, we help you achieve a healthy, glowing complexion.",
    shortDescription: "Rejuvenating facials for glowing skin.",
    detailedServices: [
      {
        name: "Classic Facial",
        description:
          "A customized facial that includes cleansing, exfoliation, extraction, mask, and moisturizing for refreshed skin.",
        price: 70,
      },
      {
        name: "Anti-Aging Facial",
        description:
          "Specialized treatment targeting fine lines and wrinkles, promoting collagen production and skin elasticity.",
        price: 95,
      },
      {
        name: "Acne Treatment",
        description:
          "Deep cleansing facial designed to address acne concerns, reduce inflammation, and prevent breakouts.",
        price: 85,
      },
      {
        name: "Hydrating Facial",
        description: "Intensive moisture treatment for dry or dehydrated skin, restoring balance and radiance.",
        price: 80,
      },
    ],
    benefits: [
      {
        title: "Skin Analysis",
        description: "Every facial begins with a thorough skin analysis to identify your specific needs and concerns.",
      },
      {
        title: "Customized Approach",
        description: "Our estheticians tailor each treatment to address your unique skin type and conditions.",
      },
      {
        title: "Professional Products",
        description: "We use medical-grade skincare products with active ingredients that deliver visible results.",
      },
      {
        title: "Ongoing Skin Health",
        description: "We provide personalized skincare advice to help you maintain results between treatments.",
      },
    ],
  },
]
