import Link from "next/link";
import { ArrowRight, Server, Shield, Activity, RefreshCw, Workflow, Gauge, CheckCircle2, TrendingUp } from "lucide-react";

export default function GrowthEnginePage() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* 1. HERO: The Ceiling Breaker */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-8">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100">
               <TrendingUp className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              For Scaling Creators ($10k/mo+)
            </span>
          </div>

          {/* H1 Matches Homepage Hero Standard */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight mb-8 max-w-5xl mx-auto leading-[1.05]">
            Scale to $100k/mo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Without Breaking the Machine.</span>
          </h1>

          <p className="text-lg md:text-xl text-grey-medium max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            You’ve hit the "Complexity Ceiling"—too many tools, too much manual work. <br/>
            <span className="text-black font-semibold">We migrate, consolidate, and optimize your stack for scale.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#book" className="btn-primary py-4 px-8 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 text-lg font-bold">
              Book a Tech Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#migration" className="py-4 px-8 rounded-xl border border-grey-light text-grey-medium hover:text-black hover:border-black transition-all font-bold text-lg">
              Explore Migration
            </Link>
          </div>
        </div>
      </section>


      {/* 2. THE DIAGNOSIS: The "Franken-Stack" */}
      <section className="py-24 bg-[#050505] text-white border-y border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Left: The Copy */}
            <div className="space-y-8">
              {/* UPDATED: Matches Homepage Villain H2 (text-3xl md:text-5xl lg:text-6xl) */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Is Your Business Held Together by <span className="text-primary">Duct Tape?</span>
              </h2>
              {/* UPDATED: Matches Homepage Subtext (text-lg md:text-xl font-medium) */}
              <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">
                You started with a $29 tool. Then you added another. And another. Now you're paying $1,500/mo for a stack that doesn't talk to itself.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <Activity className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">Subscription Bloat</h3>
                    <p className="text-sm text-zinc-400">Paying for ClickFunnels, Kajabi, Zapier, and ActiveCampaign simultaneously? We cut that cost by 40%.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <Gauge className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">Data Silos</h3>
                    <p className="text-sm text-zinc-400">Your email list doesn't know who bought your course. Upsells are manual. You are flying blind.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <Shield className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">The "Fragility" Factor</h3>
                    <p className="text-sm text-zinc-400">One Zapier error breaks your entire onboarding flow. You need a system that is robust, not fragile.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Visual */}
            <div className="relative h-full flex items-center">
              <div className="w-full bg-[#0A1019] p-8 rounded-3xl border border-white/10 relative z-10 font-mono text-sm shadow-2xl">
                 <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <span className="text-zinc-500">System_Diagnostic.log</span>
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="text-red-400">&gt; ERROR: Duplicate Customer Records Found (1,402)</div>
                    <div className="text-yellow-400">&gt; WARN: API Rate Limit Exceeded (Zapier)</div>
                    <div className="text-zinc-400">&gt; CHECK: Monthly Software Cost...</div>
                    <div className="text-white font-bold bg-white/10 p-2 rounded inline-block">$2,450.00 / month</div>
                    <div className="text-red-400 mt-2">&gt; STATUS: CRITICAL INEFFICIENCY</div>
                 </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-50"></div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. THE SOLUTION: The Optimization Protocol */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
            {/* UPDATED: Matches Homepage H2 */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
              We Don't Just "Fix" It. <br />
              <span className="text-primary">We Re-Engineer It.</span>
            </h2>
            {/* UPDATED: Matches Homepage Subtext */}
            <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">
              We act as your Fractional CTO. <br />
              We audit, migrate, and consolidate your business into a single, high-performance ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Cards (Content same, structure standard) */}
             <div className="p-8 rounded-3xl border border-grey-medium/10 bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Server className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Tech Consolidation</h3>
                <p className="text-grey-medium leading-relaxed">
                   We move you from 10 scattered tools to <strong>Kajabi</strong> or a unified <strong>WordPress</strong> ecosystem. We reduce your monthly software bill while increasing functionality.
                </p>
             </div>

             <div className="p-8 rounded-3xl border border-grey-medium/10 bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <RefreshCw className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">White-Glove Migration</h3>
                <p className="text-grey-medium leading-relaxed">
                   Terrified of losing data? We handle the entire migration—students, payments, and emails—with <strong>zero downtime</strong>.
                </p>
             </div>

             <div className="p-8 rounded-3xl border border-grey-medium/10 bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Workflow className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Behavioral Automation</h3>
                <p className="text-grey-medium leading-relaxed">
                   We set up "Smart Tags." If a student finishes Module 3, they get an upsell email. If they fail a payment, access is revoked automatically.
                </p>
             </div>
          </div>
        </div>
      </section>


      {/* 4. THE MIGRATION PROMISE */}
      <section id="migration" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Visual */}
             <div className="relative order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-grey-medium/10">
                   <div className="mb-8">
                      <div className="flex justify-between text-sm font-bold text-black mb-2">
                         <span>Transferring Student Data...</span>
                         <span className="text-green-600">100%</span>
                      </div>
                      <div className="w-full h-3 bg-grey-light rounded-full overflow-hidden">
                         <div className="h-full bg-green-500 w-full animate-pulse"></div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-green-500" />
                         <span className="text-grey-medium font-medium">12,405 Contacts Migrated</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-green-500" />
                         <span className="text-grey-medium font-medium">Payment History Preserved</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-green-500" />
                         <span className="text-grey-medium font-medium">Zero Downtime Verified</span>
                      </div>
                   </div>
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             </div>

             {/* Right: Copy */}
             <div className="order-1 lg:order-2 space-y-6">
                {/* UPDATED: Matches Homepage H2 */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                   "What if I lose my data?" <br/>
                   <span className="text-primary">It won't happen.</span>
                </h2>
                {/* UPDATED: Matches Homepage Subtext */}
                <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">
                   We treat your business data like a bank transfer. We run parallel systems during the transition so your students never experience an interruption.
                </p>
                <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">
                   We have migrated <strong>thousands of students</strong> and millions in revenue data across platforms like Kajabi, Teachable, WordPress, and Circle.
                </p>
                <div className="pt-4">
                   <Link href="/contact#book" className="text-primary font-bold text-lg border-b-2 border-primary/20 hover:border-primary transition-all">
                      Discuss Your Migration Strategy &rarr;
                   </Link>
                </div>
             </div>

          </div>
        </div>
      </section>


      {/* 5. SUCCESS: THE DASHBOARD */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
            {/* UPDATED: Matches Homepage H2 */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                The "CEO" Dashboard.
            </h2>
            {/* UPDATED: Matches Homepage Subtext */}
            <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">
               When the engineering is done, you get clarity. <br />
               You stop guessing and start scaling.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-grey-medium/10 rounded-3xl shadow-2xl overflow-hidden">
             
             <div className="bg-[#F9FAFB] border-b border-grey-medium/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-bold uppercase text-grey-medium tracking-widest">Inkio Scale_OS v2.0</div>
             </div>

             <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                   <p className="text-sm text-grey-medium font-medium">Monthly Recurring Revenue</p>
                   <p className="text-4xl font-bold text-black">$84,200</p>
                   <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                      <TrendingUp className="w-3 h-3" /> +12% vs last month
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-sm text-grey-medium font-medium">Software Costs</p>
                   <p className="text-4xl font-bold text-black">$450</p>
                   <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                      <ArrowRight className="w-3 h-3 rotate-45" /> Reduced by 65%
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-sm text-grey-medium font-medium">System Health</p>
                   <p className="text-4xl font-bold text-black">100%</p>
                   <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      <Shield className="w-3 h-3" /> Zero Errors
                   </div>
                </div>
             </div>
             
             <div className="h-48 bg-gradient-to-t from-blue-50/50 to-transparent relative mt-4 mx-8 border-t border-dashed border-grey-medium/20">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4 pb-4 opacity-30">
                   <div className="w-8 h-[20%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[35%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[45%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[60%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[55%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[75%] bg-primary rounded-t-sm"></div>
                   <div className="w-8 h-[90%] bg-primary rounded-t-sm"></div>
                </div>
             </div>
          </div>

          <div className="mt-16 text-center">
             <Link href="/contact#book" className="btn-primary py-5 px-12 rounded-xl shadow-xl hover:shadow-2xl transition-all font-bold text-xl inline-flex items-center gap-3 hover:-translate-y-1">
                Audit My Business <ArrowRight className="w-6 h-6" />
             </Link>
          </div>

        </div>
      </section>

    </div>
  );
}