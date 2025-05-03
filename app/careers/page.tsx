import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap, Beaker, Users, Heart } from "lucide-react"

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
            <Button className="bg-primary-green text-white hover:bg-primary-green/90">
              View Open Positions <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
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
      
      {/* Open Positions Section */}
      <section className="py-16 bg-white" id="open-positions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our team and contribute to our mission.
            </p>
          </div>
          
          <Tabs defaultValue="research" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="research">Research & Development</TabsTrigger>
              <TabsTrigger value="marketing">Marketing & Sales</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="research" className="space-y-4">
              {[
                {
                  title: "Senior Formulation Scientist",
                  location: "Boston, MA",
                  type: "Full-time",
                  description: "Lead the development of innovative skincare formulations, collaborating with research partners and clinical teams."
                },
                {
                  title: "Clinical Research Coordinator",
                  location: "Remote",
                  type: "Full-time",
                  description: "Oversee clinical trials and testing of new product formulations, ensuring compliance with regulatory standards."
                },
                {
                  title: "Laboratory Technician",
                  location: "Boston, MA",
                  type: "Full-time",
                  description: "Support research and development activities by conducting experiments and analyzing test results."
                }
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>
            
            <TabsContent value="marketing" className="space-y-4">
              {[
                {
                  title: "Digital Marketing Manager",
                  location: "New York, NY",
                  type: "Full-time",
                  description: "Develop and implement digital marketing strategies to drive brand awareness and growth."
                },
                {
                  title: "Content Creator",
                  location: "Remote",
                  type: "Contract",
                  description: "Create engaging skincare content for social media platforms and blog to educate and inspire our audience."
                }
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>
            
            <TabsContent value="operations" className="space-y-4">
              {[
                {
                  title: "Supply Chain Manager",
                  location: "Boston, MA",
                  type: "Full-time",
                  description: "Oversee global supply chain operations to ensure efficient sourcing and delivery of high-quality ingredients and products."
                },
                {
                  title: "Quality Assurance Specialist",
                  location: "Boston, MA",
                  type: "Full-time",
                  description: "Ensure all products meet the highest standards of quality and safety through rigorous testing and inspection processes."
                }
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Don't see a position that matches your skills?</p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green/10">
                Submit Open Application
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

// Job Card Component
function JobCard({ job }: { job: { title: string; location: string; type: string; description: string } }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-medium text-secondary-charcoal">{job.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Briefcase className="h-4 w-4 mr-1" />
              {job.location} • {job.type}
            </CardDescription>
          </div>
          <Button size="sm" className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
            Apply
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{job.description}</p>
      </CardContent>
    </Card>
  )
}