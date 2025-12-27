"use client";

import Link from "next/link";
import { ArrowRight, Box, ShieldCheck, Zap, Layers, AlertTriangle, Terminal, Code2, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. HERO: THE ARCHITECTS (Dark, Immersive) */}
      <section className="relative pt-32 pb-24 bg-[#050505] text-white">
        
        {/* Background: Technical Grid + Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">System Architects</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
              We Build Systems That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Survive Success.</span>
            </h1>
            
            {/* Subhead */}
            <div className="grid md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-8 mt-8">
              <div className="md:col-span-4">
                <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                  // The Mission
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                  Most agencies stop when the website looks good. <br />
                  <strong className="text-white font-bold">We don’t stop until the business runs itself.</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. THE ORIGIN STORY: "THE GLITCH" */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual (The "System Failure" Terminal) */}
            <div className="relative order-2 lg:order-1">
               <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-zinc-800 font-mono text-sm leading-relaxed">
                 {/* Terminal Header */}
                 <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-zinc-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-zinc-400 text-xs ml-2">industry_analysis.log</div>
                 </div>

                 {/* Terminal Body */}
                 <div className="p-6 text-zinc-300 space-y-4">
                    <div>
                      <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> run portfolio_check --target="Coaching Industry"
                    </div>
                    <div className="opacity-50">Analyzing 500+ websites...</div>
                    <div className="space-y-1 pl-4 border-l-2 border-zinc-700">
                       <div>[INFO] Design Quality: <span className="text-green-400">HIGH</span></div>
                       <div>[INFO] Lead Capture: <span className="text-red-400">MISSING</span></div>
                       <div>[INFO] Auto-Onboarding: <span className="text-red-400">FAILED</span></div>
                       <div>[WARN] Tech Stack: <span className="text-yellow-400">FRAGMENTED</span></div>
                    </div>
                    <div className="bg-red-500/10 text-red-400 p-2 rounded border border-red-500/20 mt-4">
                       FATAL ERROR: Structural Integrity Compromised. <br/>
                       Business unable to scale beyond $10k/mo.
                    </div>
                    <div className="animate-pulse">_</div>
                 </div>
               </div>
               {/* Decorative backdrop */}
               <div className="absolute -top-10 -left-10 w-full h-full bg-grey-light rounded-xl -z-10 transform -rotate-3"></div>
            </div>

            {/* Right: Narrative */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.1]">
                Why We Stopped Building <br />
                <span className="text-primary">"Just Websites."</span>
              </h2>
              
              <div className="space-y-6 text-lg text-grey-medium font-medium leading-relaxed">
                <p>
                  Early in our journey, we were obsessed with design. We launched beautiful websites for ambitious coaches. They looked perfect.
                </p>
                <p>
                  But a few years later, we checked back on those clients. What we found chilled us: <span className="text-black bg-yellow-50 px-1">Many of those beautiful websites were gone.</span>
                </p>
                <p>
                  They didn’t fail because the logo was ugly. They failed because they lacked the infrastructure to handle success.
                </p>
                <div className="pl-6 border-l-4 border-primary">
                  <p className="text-black font-bold italic">
                    "The website was an elegant front door, but the back office was on fire."
                  </p>
                </div>
                <p>
                  That was the birth of Inkio. We transitioned from Designers to <strong className="text-black">System Architects</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. CORE VALUES: THE BLUEPRINT */}
      <section className="py-24 bg-[#050505] text-white relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The Inkio Standard.</h2>
            {/* UPDATED TEXT: More human-sounding */}
            <p className="text-zinc-400 text-lg">We treat your business like our own.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="group relative bg-[#0A1019] border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-24 h-24 text-white" />
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Total Ownership</h3>
              <p className="text-zinc-400 leading-relaxed">
                We don’t gatekeep code. We build platforms that <strong className="text-white">you own and control</strong>. You never have to fear a developer disappearing again.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#0A1019] border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-24 h-24 text-white" />
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Radical Integrity</h3>
              <p className="text-zinc-400 leading-relaxed">
                We will never sell you a shiny design if your backend is broken. We owe you the truth about what your business needs to scale.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#0A1019] border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24 text-white" />
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Future-Proofing</h3>
              <p className="text-zinc-400 leading-relaxed">
                We don't just use tools; we master them. From AI chatbots to complex CRM logic, we ensure you are ready for tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. THE VISION / CTA */}
      <section className="py-24 bg-white text-center border-t border-grey-medium/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Ready to stabilize your <br />
            <span className="text-primary">Digital Foundation?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Stop building on quicksand. <br />
            Let’s build the calm, profitable infrastructure your expertise deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/solutions/launchpad" className="btn-primary py-4 px-10 rounded-xl shadow-xl hover:shadow-primary/30 inline-flex items-center justify-center gap-2 font-bold text-lg">
                See How We Work <ArrowRight className="w-5 h-5" />
             </Link>
             <Link href="/contact#book" className="py-4 px-10 rounded-xl border border-grey-light text-grey-medium hover:text-black hover:border-black transition-all font-bold text-lg inline-flex items-center justify-center">
                Book an Audit
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}