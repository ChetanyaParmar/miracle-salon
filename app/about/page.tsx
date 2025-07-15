import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Miracle Salon</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">Our story, our team, and our commitment to excellence.</p>
      </div>

      {/* Our Story */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Salon interior"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-neutral-600 mb-4">
            Miracle Salon was founded in 2010 with a simple mission: to provide exceptional beauty services in a
            welcoming environment. What started as a small salon with just three chairs has grown into a full-service
            beauty destination.
          </p>
          <p className="text-neutral-600 mb-4">
            Our founder, Mr.Narendra Parmar, had a vision to create a space where clients could transform their look and boost
            their confidence. With over 20 years of experience in the beauty industry, Narendra assembled a team of talented
            professionals who share her passion for beauty and client satisfaction.
          </p>
          <p className="text-neutral-600">
            Today, Miracle Salon is known for its innovative techniques, personalized service, and commitment to using
            high-quality, sustainable products. We continue to evolve and grow, but our core values remain the same.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-neutral-600">
              We strive for excellence in everything we do, from the services we provide to the products we use. Our
              team regularly attends training sessions to stay updated on the latest techniques and trends.
            </p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Personalization</h3>
            <p className="text-neutral-600">
              We believe that beauty is not one-size-fits-all. We take the time to understand each client's unique needs
              and preferences to deliver personalized services that enhance their natural beauty.
            </p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-neutral-600">
              We are committed to using eco-friendly products and implementing sustainable practices in our salon. We
              believe in doing our part to protect the environment while helping our clients look and feel their best.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-neutral-600 mb-2">{member.role}</p>
              <p className="text-sm text-neutral-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Experience the Miracle Difference</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
          We're passionate about helping you look and feel your best. Book an appointment today and discover why our
          clients keep coming back.
        </p>
        <Link href="/contact">
          <Button size="lg">Book an Appointment</Button>
        </Link>
      </div>
    </div>
  )
}

const teamMembers = [
  {
    name: "Narendra Parmar",
    role: "Founder & Hair Stylist",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "With over 20 years of experience, Narendra is a master stylist specializing in cutting-edge hair techniques.",
  },
  {
    name: "Kunal Parmar",
    role: "Hair Stylist",
    image: "/assets/kunal.jpg?height=300&width=300",
    description:
      "Kunal's creative approach to hair styling has earned him a loyal clientele and industry recognition.",
  },
  {
    name: "Jyoti Parmar",
    role: "Makeup Artist",
    image: "/placeholder.svg?height=300&width=300",
    description: "Jyoti's attention to detail and knowledge of color theory make her an exceptional makeup artist.",
  },
  // {
  //   name: "Sarah Williams",
  //   role: "Nail Technician",
  //   image: "/placeholder.svg?height=300&width=300",
  //   description: "Sarah's precision and artistic flair have made her one of our most requested nail technicians.",
  // },
]
