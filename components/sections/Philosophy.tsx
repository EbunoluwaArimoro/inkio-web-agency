import { Cpu, Network, Zap, CheckCircle2 } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      
      {/* 1. Dark Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* 2. Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: The Manifesto */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-grey-light text-[10px] font-bold uppercase tracking-widest">
              <Cpu className="w-3 h-3" />
              The Inkio Methodology
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Stop Building Websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-grey-medium">Start Engineering Ecosystems.</span>
            </h2>
            
            <p className="text-lg text-grey-medium leading-relaxed max-w-xl font-medium">
              Amateurs look at the front-end (colors and fonts). We look at the back-end (data and automation). We don't just build pages; we architect the digital nervous system of your business.
            </p>

            {/* The 3 Pillars */}
            <div className="space-y-6 pt-4">
              
              {/* Pillar 1 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <Network className="w-6 h-6 text-grey-light group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Total Integration</h4>
                  <p className="text-sm text-grey-medium leading-relaxed">
                    No silos. Your email, CRM, and payment gateways talk to each other in real-time.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <Zap className="w-6 h-6 text-grey-light group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Automation First</h4>
                  <p className="text-sm text-grey-medium leading-relaxed">
                    If a human doesn't need to do it, they shouldn't. We automate onboarding, invoicing, and support.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: The "Blueprint" Visual */}
          <div className="relative">
            {/* The Card Container */}
            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 overflow-hidden shadow-2xl">
              
              {/* Header of the "System" */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-grey-medium">SYSTEM_ARCHITECTURE_V4.0</div>
              </div>

              {/* The Flow Diagram */}
              <div className="space-y-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-white/10 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg">01</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Lead Capture</div>
                    <div className="text-xs text-grey-medium">High-converting landing page entry.</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg">02</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Data Processing</div>
                    <div className="text-xs text-grey-medium">Sync to CRM + Tagging + Email Seq.</div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex items-center gap-6 bg-primary/20 p-4 rounded-xl border border-primary/30 shadow-[0_0_30px_rgba(48,24,205,0.2)]">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg">03</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Revenue Event</div>
                    <div className="text-xs text-white/80">Stripe Payment + Access Granted.</div>
                  </div>
                  <Zap className="w-5 h-5 text-white fill-current" />
                </div>

              </div>

            </div>

            {/* Decorative Elements behind the card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}