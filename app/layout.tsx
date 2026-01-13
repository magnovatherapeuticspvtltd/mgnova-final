import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Magnova Therapeutics - Healthy Skin Matters",
    template: "%s | Magnova Therapeutics",
  },
  description: "Magnova Therapeutics is a leading pharmaceutical company in India specialized in Dermatology & Skincare, dedicated to creating scientifically formulated solutions for better health and well-being.",
  keywords: ["Magnova Therapeutics", "Dermatology", "Skincare", "Pharmaceuticals", "India", "Skin Brightening", "Fungal Infection", "Gastrointestinal Care", "LuxGlow", "Cerafly", "Melifro"],
  authors: [{ name: "Magnova Therapeutics" }],
  creator: "Magnova Therapeutics",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://magnovatherapeutics.com",
    title: "Magnova Therapeutics - Healthy Skin Matters",
    description: "Pioneering scientific skincare solutions for healthier, more radiant skin. Explore our range of dermatological and gastrointestinal medicines.",
    siteName: "Magnova Therapeutics",
    images: [
      {
        url: "/logo.svg", // Ideally this should be an absolute URL to an OG image
        width: 1200,
        height: 630,
        alt: "Magnova Therapeutics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnova Therapeutics - Healthy Skin Matters",
    description: "Pioneering scientific skincare solutions for healthier, more radiant skin.",
    images: ["/logo.svg"], // Ideally this should be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
