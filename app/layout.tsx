import type { Metadata } from "next";
import { Inter, Space_Grotesk, Allerta_Stencil } from "next/font/google";
import "./globals.css";
// IMPORT THE COMPONENTS
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const telegraf = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-telegraf",
  display: "swap",
});

// Configure the Stencil font
const allertaStencil = Allerta_Stencil({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-allerta", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkio | Automated Revenue Systems for Coaches",
  description: "We engineer the ecosystems that let Coaches and Service Pros sleep while their business scales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Calendar to speed up the booking widget connection */}
        <link rel="preconnect" href="https://calendar.google.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </head>
      <body className={`${inter.variable} ${telegraf.variable} ${allertaStencil.variable} antialiased font-sans bg-white text-black`}>
        
        {/* HEADER */}
        <Header />
        
        {/* MAIN CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
        
      </body>
    </html>
  );
}