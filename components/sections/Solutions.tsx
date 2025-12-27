import { Rocket, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Texture (Technical Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Choose Your Engine.
          </h2>
          <p className="text-lg text-grey-medium max-w-2xl mx-auto font-medium">
            We don't do "cookie-cutter."<br />
            Select the ecosystem that matches your current stage of growth.
          </p>
        </div>

        {/* THE SOLUTIONS GRID */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* OPTION A: The Launchpad System */}
          <div className="relative bg-white p-8 md:p-12 rounded-3xl border border-grey-medium/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Rocket className="w-3 h-3" />
              For The "Zero to Launch" Creator
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-black mb-4">The Launchpad System</h3>
            
            {/* Description (Exact words) */}
            <p className="text-grey-medium leading-relaxed mb-8 flex-1 text-lg">
              Perfect if you have the expertise but no system. We take you from "No Idea" to "First Sale".
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-grey-light/50 mb-8"></div>

            {/* Includes */}
            <div className="space-y-5 mb-10">
              <p className="text-xs font-bold text-grey-medium uppercase tracking-widest">Includes:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-black font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  Course Site Setup
                </li>
                <li className="flex items-center gap-3 text-black font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  Payment Setup
                </li>
                <li className="flex items-center gap-3 text-black font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  Basic Automation
                </li>
              </ul>
            </div>

            {/* Button */}
            <Link href="/solutions/launchpad" className="w-full btn-secondary flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-grey-medium/10 hover:border-primary hover:text-primary transition-all font-bold text-lg">
              Launch My Idea
            </Link>
          </div>

          {/* OPTION B: The Growth Engine (Dark/Premium) */}
          <div className="relative bg-[#0A1019] p-8 md:p-12 rounded-3xl border border-grey-medium/20 shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group text-white ring-1 ring-white/10">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
              <TrendingUp className="w-3 h-3" />
              For The Scaling Pro ($100k+)
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4">The Growth Engine</h3>
            
            {/* Description (Exact words) */}
            <p className="text-grey-light leading-relaxed mb-8 flex-1 text-lg">
              Perfect if you have sales but are drowning in manual work. We migrate you to a unified platform.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8"></div>

            {/* Includes */}
            <div className="space-y-5 mb-10">
              <p className="text-xs font-bold text-grey-medium uppercase tracking-widest">Includes:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  Advanced CRM
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  Pipeline Architecture
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  Migration
                </li>
              </ul>
            </div>

            {/* Button */}
            <Link href="/solutions/growth-engine" className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all font-bold text-lg group-hover:bg-white group-hover:text-primary">
              Scale My Business <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}