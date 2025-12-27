import { ScanSearch, Cpu, Key } from "lucide-react";

export function ThePlan() {
  return (
    <section id="process" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      
      {/* Background Grid - kept subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADLINE - Lighter weight (Semi-bold instead of Bold) */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            From Chaos to Clarity in <span className="text-primary">3 Steps.</span>
          </h2>
          {/* Sub-headline: Pure white but lighter font weight */}
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light leading-relaxed">
            We remove the fear of the unknown. <br /> 
            Here is exactly how we deploy your system.
          </p>
        </div>

        {/* THE PIPELINE (3 STEPS) */}
        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 z-0">
             {/* Animated Pulse */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/2 animate-flow opacity-50"></div>
          </div>

          {/* STEP 1: The Blueprint Audit */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            {/* Icon Node */}
            <div className="w-24 h-24 bg-[#0A1019] rounded-2xl border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(48,24,205,0.2)] transition-all duration-500">
              <ScanSearch className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500" />
            </div>
            
            {/* Step Number */}
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Step 01</div>
            
            {/* Title - Reduced to Medium weight */}
            <h3 className="text-2xl font-medium text-white mb-4">The Blueprint Audit</h3>
            
            {/* Body - Pure White, Light Weight */}
            <p className="text-zinc-100 text-lg font-light leading-relaxed max-w-sm mx-auto opacity-90">
              We identify exactly where your tech stack is leaking money.
            </p>
          </div>

          {/* STEP 2: The System Build */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            {/* Icon Node */}
            <div className="w-24 h-24 bg-[#0A1019] rounded-2xl border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(48,24,205,0.2)] transition-all duration-500">
              <Cpu className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500" />
            </div>
            
            {/* Step Number */}
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Step 02</div>
            
            {/* Title - Reduced to Medium weight */}
            <h3 className="text-2xl font-medium text-white mb-4">The System Build</h3>
            
            {/* Body - Pure White, Light Weight */}
            <p className="text-zinc-100 text-lg font-light leading-relaxed max-w-sm mx-auto opacity-90">
              We build the "Machine" (Platform + CRM + Automation) while you focus on content.
            </p>
          </div>

          {/* STEP 3: The Handover */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            {/* Icon Node */}
            <div className="w-24 h-24 bg-[#0A1019] rounded-2xl border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(48,24,205,0.2)] transition-all duration-500">
              <Key className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500" />
            </div>
            
            {/* Step Number */}
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Step 03</div>
            
            {/* Title - Reduced to Medium weight */}
            <h3 className="text-2xl font-medium text-white mb-4">The Handover</h3>
            
            {/* Body - Pure White, Light Weight */}
            <p className="text-zinc-100 text-lg font-light leading-relaxed max-w-sm mx-auto opacity-90">
              We hand over the keys and train you, so you have total control.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}