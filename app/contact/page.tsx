import SectionWrapper from "@/components/SectionWrapper"
import ContactForm from "@/components/ContactForm"
import { Phone, Mail, MapPin } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Magnova Therapeutics. Contact us via phone, email, or visit our office in Gorakhpur, Uttar Pradesh.",
}

export default function ContactPage() {
  return (
    <SectionWrapper className="pt-32 md:pt-40">
      <h1 className="text-4xl font-bold text-center text-primary">Get in Touch</h1>
      <p className="text-center text-gray-700 mt-4 max-w-xl mx-auto">
        Have questions about our products or services? We're here to help. Reach out to us using the contact information
        below or fill out the form.
      </p>

      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-white rounded-2xl shadow-md border border-primary/20 p-6">
            <h2 className="text-2xl font-medium text-primary mb-4">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-accent shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-700">91184 57314</p>
                  <p className="text-gray-700">900-595-2582</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-accent shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-700 break-all">Magnovatherapeuticspvtltd@gmail.com</p>
                  <p className="text-gray-700 break-all">info@magnovatherapeutics.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-700 max-w-xs">
                    H49, PHASE -4 , RAPTI NAGAR<br />
                    GORAKHPUR UTTAR PRADESH ,INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-primary/20 p-6">
            <h2 className="text-2xl font-medium text-primary mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-md border border-primary/20 p-6">
            <h2 className="text-2xl font-medium text-primary mb-4">Send us a Message</h2>
            <ContactForm onSubmitEndpoint="/api/sendMail" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
