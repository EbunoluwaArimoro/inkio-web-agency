"use client";

import { useState } from "react";
import { ArrowRight, Download, Bell, Check } from "lucide-react";
import Link from "next/link";
import { AuditModal } from "@/components/ui/AuditModal";

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center justify-center border-t border-grey-medium/5">
      
      {/* Background Glow - Subtle Blue to link back to brand */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        {/* SIMULATED NOTIFICATION (Social Proof) */}
        <div className="inline-flex items-center gap-3 bg-white border border-grey-medium/10 shadow-2xl rounded-full px-6 py-3 mb-10 animate-bounce-slow">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Bell className="w-4 h-4 text-green-600 fill-current" />
          </div>
          <div className="text-left">
              <p className="text-[10px] font-bold text-grey-medium uppercase tracking-wider">Just Now</p>
              <p className="text-sm font-bold text-black">New Student Enrolled ($997.00)</p>
          </div>
        </div>

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mb-12 max-w-4xl mx-auto leading-[1.1]">
          Imagine a Business That <br />
          <span className="text-primary">Runs Without You.</span>
        </h2>

        {/* THE "EMPHASIZED" TEXT STACK */}
        <div className="flex flex-col gap-5 mb-14 max-w-3xl mx-auto items-center">
          
          <div className="flex items-center gap-3 text-lg md:text-2xl text-grey-medium font-medium">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-green-600 stroke-[3px]" />
              </div>
              <span>
                Wake up to <span className="text-black font-bold bg-green-50 px-2 py-1 rounded-lg border border-green-100">"New Student Enrolled"</span> notifications.
              </span>
          </div>

          <div className="flex items-center gap-3 text-lg md:text-2xl text-grey-medium font-medium">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-blue-600 stroke-[3px]" />
              </div>
              <span>
                See leads flow <span className="text-black font-bold border-b-2 border-blue-200">automatically</span> from content to CRM.
              </span>
          </div>

          <div className="flex items-center gap-3 text-lg md:text-2xl text-grey-medium font-medium">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-purple-600 stroke-[3px]" />
              </div>
              {/* Updated Copy Here */}
              <span>
                Spend time in your <span className="text-black font-bold italic">Zone of Genius</span>, not putting out fires.
              </span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button */}
          <Link href="/contact#book" className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 py-4 px-10 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all font-bold text-lg">
            Book Your Clarity Call <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Secondary Button - Triggers Modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-xl border-2 border-grey-medium/10 text-grey-medium hover:text-black hover:border-black transition-all font-bold text-lg bg-transparent cursor-pointer"
          >
            <Download className="w-5 h-5" /> Free Tech Audit
          </button>

        </div>

      </div>

      {/* Modal Instance */}
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}