import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image src="/placeholder.svg?height=600&width=1600" alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-white/20 backdrop-blur-sm rounded-full text-sm mb-4 text-white">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-xl font-light">Book your appointment or send us a message</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-900">Book an Appointment</h2>
            <p className="text-gray-600 leading-relaxed">
              The easiest way to book an appointment is to call us directly. Our friendly staff will help you schedule a
              time that works for you and answer any questions you may have about our services.
            </p>

            <div className="bg-gray-50 p-10 rounded-3xl space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@miraclesalon.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Beauty Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 mt-1">
                  <Clock className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 8pm
                    <br />
                    Saturday: 9am - 6pm
                    <br />
                    Sunday: 10am - 4pm
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full bg-rose-300 hover:bg-rose-400 text-white rounded-full px-8 h-12">
              <Phone className="mr-2 h-4 w-4" /> Call to Book: (123) 456-7890
            </Button>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-900">Send Us a Message</h2>
            <form className="space-y-6 bg-gray-50 p-10 rounded-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="rounded-full border-gray-200 focus:border-rose-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="rounded-full border-gray-200 focus:border-rose-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full border-gray-200 focus:border-rose-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="rounded-full border-gray-200 focus:border-rose-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-full border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair Styling</option>
                  <option value="makeup">Makeup</option>
                  <option value="nails">Nail Care</option>
                  <option value="facial">Facial Treatments</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="rounded-2xl border-gray-200 focus:border-rose-300"
                />
              </div>

              <Button type="submit" className="w-full bg-rose-300 hover:bg-rose-400 text-white rounded-full px-8 h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.9414220174701!2d75.06085048646791!3d24.077473413640284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642de993f7dba9%3A0x950e37c63b7b3e96!2sMIRACLE%20SALON%20%26%20ACADEMY!5e0!3m2!1sen!2sin!4v1745665389617!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Miracle Salon Location"
          className="grayscale"
        ></iframe>
      </div>
    </div>
  )
}
