"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const ResearchSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-charcoal mb-4">Science & Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our products are backed by extensive research and clinical studies to ensure efficacy and safety.
          </p>
        </div>

        <Tabs defaultValue="technology" className="w-full">
          <TabsList className="grid w-full md:w-fit mx-auto grid-cols-3 mb-8 gap-1 text-xs sm:text-sm">
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="clinical">Clinical Results</TabsTrigger>
            <TabsTrigger value="timeline">Research Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="technology">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary-green mb-4">Skin Brightening Technology</h3>
                <p className="text-muted-foreground mb-4">
                  Our proprietary skin brightening technology combines scientifically proven ingredients that work
                  synergistically to reduce hyperpigmentation and even skin tone.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-beige/30 p-4 rounded-lg">
                    <h4 className="font-medium text-secondary-charcoal">Targeted Melanin Inhibition</h4>
                    <p className="text-sm text-muted-foreground">
                      Precisely targets melanin production at the cellular level without harming surrounding tissues.
                    </p>
                  </div>
                  <div className="bg-secondary-beige/30 p-4 rounded-lg">
                    <h4 className="font-medium text-secondary-charcoal">Enhanced Delivery System</h4>
                    <p className="text-sm text-muted-foreground">
                      Liposomal delivery ensures active ingredients penetrate deeper into the skin for maximum efficacy.
                    </p>
                  </div>
                  <div className="bg-secondary-beige/30 p-4 rounded-lg">
                    <h4 className="font-medium text-secondary-charcoal">Antioxidant Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Powerful antioxidants neutralize free radicals and protect skin from environmental damage.
                    </p>
                  </div>
                </div>
                <Button className="mt-6 bg-primary-green text-white hover:bg-primary-green/90">
                  Learn More About Our Technology
                </Button>
              </motion.div>

              <motion.div
                className="md:w-1/2 relative w-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/hero.png"
                  alt="Skin Brightening Technology"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="clinical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary-red mb-4">Clinical Study Results</h3>
                <p className="text-muted-foreground mb-6">
                  Our products have been clinically tested on diverse skin types with impressive results.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Skin Brightness Improvement</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-red h-2 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Dark Spot Reduction</span>
                      <span className="text-sm font-medium">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-red h-2 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Skin Texture Improvement</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-red h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Overall Satisfaction</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-red h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Study Methodology</h3>
                <p className="text-muted-foreground mb-4">
                  Our clinical studies follow rigorous scientific protocols to ensure reliable results.
                </p>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Double-blind, placebo-controlled studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>12-week duration with regular assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Diverse participant pool across age groups and skin types</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Instrumental measurements and expert clinical grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Self-assessment questionnaires for subjective improvements</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Clinical Study Methodology"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-green/20"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-green"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] text-center md:text-right p-4 bg-white/80 rounded-lg md:bg-transparent relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-green">2018</h3>
                    <h4 className="font-medium">Initial Research</h4>
                    <p className="text-sm text-muted-foreground">
                      Began research on novel skin brightening compounds and delivery systems.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-green"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)] md:pl-8 md:w-[calc(50%-2rem)] text-center md:text-left p-4 bg-white/80 rounded-lg md:bg-transparent relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-green">2019</h3>
                    <h4 className="font-medium">Formula Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Developed and refined our proprietary formulations through extensive lab testing.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-green"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] text-center md:text-right p-4 bg-white/80 rounded-lg md:bg-transparent relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-green">2020</h3>
                    <h4 className="font-medium">Clinical Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Conducted comprehensive clinical trials to validate efficacy and safety.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-green"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)] md:pl-8 md:w-[calc(50%-2rem)] text-center md:text-left p-4 bg-white/80 rounded-lg md:bg-transparent relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-green">2021</h3>
                    <h4 className="font-medium">Product Launch</h4>
                    <p className="text-sm text-muted-foreground">
                      Launched our first line of skincare products to the market with great success.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-red"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] text-center md:text-right p-4 bg-white/80 rounded-lg md:bg-transparent relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-red">Present</h3>
                    <h4 className="font-medium">Ongoing Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuing research and development of new formulations and technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default ResearchSection
