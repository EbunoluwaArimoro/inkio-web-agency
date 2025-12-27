"use client"; // 1. Made Client Component

import { useState } from "react";
import { ArrowRight, CreditCard, Users, Lock } from "lucide-react";
import Link from "next/link";
import { AuditModal } from "@/components/ui/AuditModal"; // 2. Import the modal

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 3. Add State

  return (
    // UPDATED PADDING: pt-32 pulls it up nicely under the fixed header without overlapping
    <section className="relative pt-32 pb-16 lg:pt-30 lg:pb-24 bg-white overflow-hidden selection:bg-primary/20">
      
      {/* 0. THE NET/GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 1. AMBIENT LIVING BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[35rem] h-[35rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: The Authority Pitch */}
          <div className="space-y-6 max-w-2xl">
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight leading-[1.05]">
              Turn Your Expertise Into an <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Automated Platform.</span>
            </h1>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl text-grey-medium leading-relaxed max-w-lg font-medium">
              Stop stitching together broken tools. <br />
              We engineer the living ecosystems that let Coaches and Consultants sleep while their business scales.
            </p>

            {/* ACTION AREA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/contact#book" className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-xl shadow-primary/20 group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-primary/90 gap-2">
                  Book Clarity Call <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              {/* BUTTON TRIGGERING MODAL */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-grey-light bg-white/50 backdrop-blur-sm px-6 text-sm font-bold text-black transition-all hover:bg-white hover:border-grey-medium hover:shadow-md cursor-pointer"
              >
                Get Tech Checklist
              </button>
            </div>

            {/* PARTNERS */}
            <div className="pt-8 mt-4 border-t border-grey-medium/20">
              <p className="text-[10px] font-bold text-grey-medium uppercase tracking-widest mb-4">
                Official Agency Partners
              </p>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80">
                <span className="font-sans font-extrabold text-xl tracking-tighter text-grey-medium hover:text-[#222] transition-colors cursor-default">Thinkific</span>
                <span className="font-sans font-black text-2xl tracking-tight uppercase text-grey-medium hover:text-[#006CFF] transition-colors cursor-default">KAJABI</span>
                <span style={{ fontFamily: 'Georgia, serif' }} className="text-xl font-black italic tracking-tight text-grey-medium hover:text-[#FFE01B] hover:bg-black hover:px-1 transition-all cursor-default">Mailchimp</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The "Nexus" System */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-[1000px] lg:-mt-35">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3018CD" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3018CD" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3018CD" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M250 250 L400 100" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
                <circle r="3" fill="#3018CD">
                   <animateMotion dur="3s" repeatCount="indefinite" path="M250 250 L400 100" keyPoints="0;1" keyTimes="0;1" />
                </circle>
                <path d="M250 250 L100 400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
                <circle r="3" fill="#3018CD">
                   <animateMotion dur="4s" repeatCount="indefinite" path="M250 250 L100 400" keyPoints="0;1" keyTimes="0;1" />
                </circle>
                <path d="M250 250 L120 120" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
                <circle r="3" fill="#3018CD">
                   <animateMotion dur="5s" repeatCount="indefinite" path="M250 250 L120 120" keyPoints="0;1" keyTimes="0;1" />
                </circle>
                <path d="M250 250 L380 380" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
                <circle r="3" fill="#3018CD">
                   <animateMotion dur="6s" repeatCount="indefinite" path="M250 250 L380 380" keyPoints="0;1" keyTimes="0;1" />
                </circle>
             </svg>

             {/* CENTRAL NODE */}
             <div className="mr-15 mt-4 relative z-20 animate-float-slow flex items-center justify-center w-[500px] h-[500px]"> 
                <div className="w-28 h-28 glass-card rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(48,24,205,0.15)] border border-white/60 z-30">
                   <div className="w-14 h-14 bg-gradient-to-tr from-primary to-indigo-600 rounded-full flex items-center justify-center text-white mb-1 shadow-inner">
                     <span className="text-4xl leading-none pt-1" style={{ fontFamily: 'var(--font-allerta), sans-serif', fontWeight: '400' }}>
                       N
                     </span>
                   </div>
                   <span className="text-[9px] font-black text-black uppercase tracking-widest">Inkio Core</span>
                </div>
                <div className="absolute w-28 h-28 border border-primary/20 rounded-full animate-ping opacity-20 duration-[3000ms]"></div>

                {/* Satellite Nodes */}
                <div className="absolute top-0 right-0 animate-float-medium glass-card p-3 rounded-xl flex items-center gap-3 shadow-lg hover:scale-105 transition-transform cursor-default border-white/60">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600"><CreditCard className="w-5 h-5" /></div>
                    <div>
                       <div className="text-[10px] text-grey-medium font-bold uppercase">Revenue</div>
                       <div className="text-base font-black text-black">$12k/mo</div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 animate-float-slow glass-card p-3 rounded-xl flex items-center gap-3 shadow-lg hover:scale-105 transition-transform cursor-default border-white/60">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Users className="w-5 h-5" /></div>
                    <div>
                       <div className="text-[10px] text-grey-medium font-bold uppercase">Students</div>
                       <div className="text-base font-black text-black">1,504</div>
                    </div>
                </div>
                <div className="absolute top-10 left-4 animate-float-fast glass-card px-3 py-2 rounded-full flex items-center gap-2 shadow-md border-white/60">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white"><Lock className="w-3 h-3" /></div>
                    <span className="text-[10px] font-bold">Secure</span>
                </div>
                 <div className="absolute bottom-10 right-4 animate-float-medium animation-delay-2000 glass-card px-4 py-2 rounded-lg flex flex-col items-center justify-center shadow-md border-white/60">
                     <span className="text-[10px] text-grey-medium font-bold uppercase mb-1">Conv. Rate</span>
                     <span className="text-lg font-black text-primary">+4.8%</span>
                 </div>
             </div>
          </div>

        </div>
      </div>

      {/* 4. MODAL INSTANCE */}
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}