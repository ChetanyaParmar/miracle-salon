import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-light mb-6">
              MIRACLE<span className="text-rose-300">.</span>
            </h3>
            <p className="mb-6 leading-relaxed">
              Where beauty meets innovation. Professional hair styling, makeup, nail care, and facial treatments.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/miracle_salon_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white/70 hover:text-[#B0E0E6] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#B0E0E6] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#B0E0E6] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-light mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/hair" className="hover:text-rose-300 transition-colors">
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link href="/services/makeup" className="hover:text-rose-300 transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/services/nails" className="hover:text-rose-300 transition-colors">
                  Nail Care
                </Link>
              </li>
              <li>
                <Link href="/services/facial" className="hover:text-rose-300 transition-colors">
                  Facial Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-light mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-[#B0E0E6]" />
                <span>+91-8349334125</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-[#B0E0E6]" />
                <span>cp212428@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-[#B0E0E6]" />
                <span>
                  Shop No.3,TIT Complex,Sanjit Road 
                  <br />
                  Mandsaur, 458001
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-lg font-light mb-6">Hours</h3>
            <ul className="space-y-4">
              <li className="text-sm">Monday - Sunday: 10am - 10:30pm</li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Miracle Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
