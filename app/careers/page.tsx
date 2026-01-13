import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Beaker, Users, GraduationCap, Heart, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Magnova Therapeutics team and help transform healthcare through science and innovation.",
}

export default function RecruitmentPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal">
            Join Our <span className="text-primary-green">Team</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Be part of a passionate team dedicated to transforming skincare through science and innovation.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-primary-green text-white hover:bg-primary-green/90">
                Contact Us <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-secondary-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Why Join Magnova</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're more than just a skincare company. We're a team of innovators committed to making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Beaker className="h-10 w-10 text-primary-green" />,
                title: "Innovation",
                description: "Work with cutting-edge technology and contribute to groundbreaking skincare solutions."
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-primary-green" />,
                title: "Growth",
                description: "Continuous learning and development opportunities to advance your career."
              },
              {
                icon: <Users className="h-10 w-10 text-primary-green" />,
                title: "Community",
                description: "Join a diverse and inclusive team that values collaboration and support."
              },
              {
                icon: <Heart className="h-10 w-10 text-primary-green" />,
                title: "Impact",
                description: "Make a real difference in people's lives by improving their skin health and confidence."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-white border-none shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2">{benefit.icon}</div>
                  <CardTitle className="text-lg font-medium">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section - Currently removed as per request */}
      <section className="py-16 bg-white" id="open-positions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are always looking for talented individuals to join our mission. While we don't have specific open positions listed right now, we'd love to hear from you.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-center bg-secondary-beige/20 rounded-2xl p-8 border border-primary-gold/20">
            <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Users className="h-8 w-8 text-primary-gold" />
            </div>
            <h3 className="text-xl font-bold text-secondary-charcoal mb-3">Send Us Your Resume</h3>
            <p className="text-muted-foreground mb-8">
              If you're passionate about skincare science and want to make a difference, send your resume and cover letter to our HR team.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 w-full sm:w-auto font-bold">
                Contact HR Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-primary-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Our Culture</h2>
              <p className="text-muted-foreground mb-6">
                At Magnova, we foster a culture of collaboration, innovation, and continuous learning. We believe that diverse perspectives drive better solutions and are committed to creating an inclusive environment where everyone can thrive.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary-green text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-secondary-charcoal">Collaborative environment with cross-functional teams</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary-green text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-secondary-charcoal">Flexible work arrangements to support work-life balance</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary-green text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-secondary-charcoal">Professional development and continuous learning opportunities</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary-green text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-secondary-charcoal">Commitment to diversity, equity, and inclusion</p>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg"
                alt="Team Collaboration"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg"
                alt="Office Environment"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg"
                alt="Research Activity"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg"
                alt="Team Event"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Our Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed a straightforward process to help you find the right opportunity with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-20">
                    <h3 className="text-xl font-medium text-secondary-charcoal">Application</h3>
                    <p className="text-muted-foreground mt-2">
                      Submit your application through our careers page. Make sure to include your resume and a cover letter explaining why you're interested in joining Magnova.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-20">
                    <h3 className="text-xl font-medium text-secondary-charcoal">Initial Review</h3>
                    <p className="text-muted-foreground mt-2">
                      Our recruitment team will review your application and reach out for an initial conversation if there's a potential match.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-20">
                    <h3 className="text-xl font-medium text-secondary-charcoal">Interviews</h3>
                    <p className="text-muted-foreground mt-2">
                      You'll meet with different team members to discuss your experience, skills, and fit with our culture. This may include technical assessments for specific roles.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-20">
                    <h3 className="text-xl font-medium text-secondary-charcoal">Offer & Onboarding</h3>
                    <p className="text-muted-foreground mt-2">
                      If everything aligns, we'll extend an offer and welcome you to the Magnova team! Our comprehensive onboarding process will help you get up to speed quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
