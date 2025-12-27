"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { AuditModal } from "@/components/ui/AuditModal"; // Import

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            
            {/* COLUMN 1 */}
            <div className="space-y-6 md:col-span-1">
              <Link href="/" className="block w-32 md:w-40">
                <Image src="/logo-white.svg" alt="Inkio Agency" width={160} height={45} className="w-full h-auto object-contain" />
              </Link>
              <p className="text-grey-medium text-sm leading-relaxed">
                We engineer the ecosystems that let Coaches and Service Pros sleep while their business scales.
              </p>
              <div className="flex gap-4">
                 <a href="https://www.linkedin.com/company/inkio-web-solutions/" target="_blank" rel="noopener noreferrer" className="text-grey-medium hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
                 <a href="https://www.instagram.com/inkioweb" target="_blank" rel="noopener noreferrer" className="text-grey-medium hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
                 <a href="https://web.facebook.com/inkiowebsolutions/" target="_blank" rel="noopener noreferrer" className="text-grey-medium hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6">
              <h4 className="font-display text-lg">Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="/solutions/launchpad" className="text-grey-light hover:text-primary transition-colors flex items-center gap-2 group">The Launchpad <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/solutions/growth-engine" className="text-grey-light hover:text-primary transition-colors flex items-center gap-2 group">The Growth Engine <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li>
                  <button onClick={() => setIsModalOpen(true)} className="text-grey-light hover:text-primary transition-colors flex items-center gap-2 group text-left">
                    Free Tech Audit <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-6">
              <h4 className="font-display text-lg">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-grey-light hover:text-white transition-colors">Philosophy</Link></li>
                <li><Link href="/#results" className="text-grey-light hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/contact#book" className="text-grey-light hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="space-y-6">
              <h4 className="font-display text-lg">Contact</h4>
              <p className="text-grey-medium text-sm leading-relaxed">
                Ibadan, Nigeria<br /><span className="opacity-60">Global Remote Operations</span>
              </p>
              <a href="mailto:info@inkioweb.com" className="text-white hover:text-primary transition-colors block font-medium">info@inkioweb.com</a>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grey-medium">
            <p>© {currentYear} Inkio Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}