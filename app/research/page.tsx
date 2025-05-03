import ResearchSection from "@/components/ResearchSection"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Download, ArrowRight, FileText, Beaker, Microscope } from "lucide-react"

export default function ResearchPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal">
            Our <span className="text-primary-green">Research</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Pioneering skincare solutions through science and innovation for healthier, more radiant skin.
          </p>
        </div>
      </section>
      
      {/* Main Research Section */}
      <ResearchSection />
      
      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Scientific Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our research has been published in leading scientific journals, validating our approach to skincare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clinical Efficacy of Advanced Brightening Formula",
                journal: "Journal of Dermatological Science",
                year: "2024",
                abstract: "This study demonstrates the efficacy of our proprietary brightening formula in reducing hyperpigmentation across diverse skin types."
              },
              {
                title: "Novel Delivery Systems for Active Skincare Ingredients",
                journal: "International Journal of Cosmetic Science",
                year: "2023",
                abstract: "An investigation of liposomal and nanoparticle delivery systems for enhanced penetration of active ingredients into the skin."
              },
              {
                title: "Long-term Safety Profile of Vitamin C Derivatives in Topical Formulations",
                journal: "Journal of Cosmetic Dermatology",
                year: "2023",
                abstract: "A comprehensive review of the safety and stability of various vitamin C derivatives in topical skincare formulations."
              }
            ].map((publication, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-primary-green">{publication.title}</CardTitle>
                  <CardDescription>{publication.journal} • {publication.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{publication.abstract}</p>
                  <Button variant="outline" size="sm" className="text-primary-green">
                    <FileText className="h-4 w-4 mr-2" /> View Abstract
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green/10">
              <Download className="h-4 w-4 mr-2" /> Download Research Catalog
            </Button>
          </div>
        </div>
      </section>
      
      {/* Research Partnership Section */}
      <section className="py-16 bg-secondary-beige/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Research Partnerships</h2>
              <p className="text-muted-foreground mb-6">
                We collaborate with leading research institutions, dermatologists, and skin specialists to develop cutting-edge skincare solutions.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-primary-green flex items-center">
                    <Beaker className="h-5 w-5 mr-2" />
                    Academic Collaborations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Partnerships with university research labs to explore novel ingredients and formulation techniques.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-primary-green flex items-center">
                    <Microscope className="h-5 w-5 mr-2" />
                    Clinical Research
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Rigorous clinical testing to validate the safety and efficacy of our products across diverse skin types.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                    Partner With Us <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Image 
                src="/placeholder.svg" 
                alt="Research Laboratory" 
                width={600} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}