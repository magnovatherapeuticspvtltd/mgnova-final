import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, BarChart4, GraduationCap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal">
            About <span className="text-primary-red">Magnova</span> <span className="text-primary-green">Therapeutics</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Pioneering scientific skincare solutions for healthier, more radiant skin.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-12 bg-secondary-beige/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary-charcoal mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Magnova Therapeutics began with a simple mission: to transform skincare through science and innovation. Our team of dermatologists, biochemists, and skincare enthusiasts came together with a shared vision of creating products that deliver real, visible results.
                </p>
                <p>
                  What sets us apart is our commitment to scientific research and evidence-based formulations. We believe that truly effective skincare must be rooted in rigorous science and validated through clinical testing.
                </p>
                <p>
                  Today, we're proud to offer our breakthrough LuxGlow Brightening Serum, with more innovative products in development. Our dedication to quality, efficacy, and safety remains unwavering as we continue to advance the field of dermatological skincare.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/research">
                  <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                    Our Research <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg"
                  alt="Magnova Therapeutics Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Board of Directors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guiding our strategic vision and governance with expertise and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Mrs. Kalindi Devi",
              "Mr. Mrityunjay Rai",
              "Mr. Alok Sahoo",
              "Mr. Sanjay Singh",
              "Mr. Ravi Shankar Singh",
              "Mrs. Savera Gupta",
              "Mr. Aditya Singh"
            ].map((name, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300 border-gray-100 bg-gray-50/50">
                <CardContent className="pt-6 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-gold/20 to-primary-red/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-charcoal">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Board Member</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary-red" />,
                title: "Excellence",
                description: "We maintain the highest standards in research, product development, and customer experience."
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-primary-red" />,
                title: "Innovation",
                description: "We continuously explore new technologies and approaches to advance skincare solutions."
              },
              {
                icon: <Users className="h-10 w-10 text-primary-red" />,
                title: "Integrity",
                description: "We are transparent about our research processes and honest in our communication with customers."
              },
              {
                icon: <Globe className="h-10 w-10 text-primary-green" />,
                title: "Sustainability",
                description: "We strive to minimize our environmental impact through responsible sourcing and packaging."
              },
              {
                icon: <BarChart4 className="h-10 w-10 text-primary-green" />,
                title: "Efficacy",
                description: "We are committed to creating products that deliver measurable, visible results."
              },
              {
                icon: <Award className="h-10 w-10 text-primary-green" />,
                title: "Accessibility",
                description: "We work to make effective skincare solutions available to diverse communities."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardHeader>
                  <div className="mx-auto mb-2">{value.icon}</div>
                  <CardTitle className="text-xl font-medium">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to advancing skincare through science.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary-green/20 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-green transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 text-left md:text-right">
                    <h3 className="text-xl font-bold text-primary-green">2018</h3>
                    <h4 className="font-medium text-secondary-charcoal">Company Founded</h4>
                    <p className="text-sm text-muted-foreground">
                      Magnova Therapeutics was established with a mission to revolutionize skincare through scientific innovation.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-green transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:ml-auto pl-10 md:pl-12">
                    <h3 className="text-xl font-bold text-primary-green">2019</h3>
                    <h4 className="font-medium text-secondary-charcoal">Research Partnership</h4>
                    <p className="text-sm text-muted-foreground">
                      Formed key research partnerships with leading dermatological institutions to advance our formulation technologies.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-green transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 text-left md:text-right">
                    <h3 className="text-xl font-bold text-primary-green">2020</h3>
                    <h4 className="font-medium text-secondary-charcoal">Breakthrough Discovery</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team developed a proprietary delivery system that significantly enhances the efficacy of brightening ingredients.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-green transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:ml-auto pl-10 md:pl-12">
                    <h3 className="text-xl font-bold text-primary-green">2022</h3>
                    <h4 className="font-medium text-secondary-charcoal">Clinical Trial Success</h4>
                    <p className="text-sm text-muted-foreground">
                      Completed extensive clinical trials demonstrating the safety and effectiveness of our brightening formulation.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-green transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 text-left md:text-right">
                    <h3 className="text-xl font-bold text-primary-green">2023</h3>
                    <h4 className="font-medium text-secondary-charcoal">LuxGlow Launch</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully launched our flagship LuxGlow Brightening Serum to critical acclaim from dermatologists and customers.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary-red transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:ml-auto pl-10 md:pl-12">
                    <h3 className="text-xl font-bold text-primary-red">2025</h3>
                    <h4 className="font-medium text-secondary-charcoal">Expanding Horizons</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently developing an expanded product line targeting additional skin concerns while continuing to advance our research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the difference of scientifically-proven skincare or become part of our growing team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/product">
              <Button className="bg-primary-red text-white hover:bg-primary-red/90">
                Shop Products
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green/10">
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}