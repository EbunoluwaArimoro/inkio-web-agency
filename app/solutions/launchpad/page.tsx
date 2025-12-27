import Link from "next/link";
import { ArrowRight, Rocket, Layers, CreditCard, Mail, Zap, BrainCircuit, BarChart3, FileText, Check, Smartphone } from "lucide-react";

export default function LaunchpadPage() {
  return (
    <div className="bg-white overflow-x-hidden"> 
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">For New Creators</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Launch Your Course. <br />
            Build Your List. <br />
            <span className="text-primary">Make Your First Sale.</span>
          </h1>

          <p className="text-lg md:text-xl text-grey-medium max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            (Without Touching a Line of Code.)<br/>
            You have the expertise to change lives. We build the <span className="text-black font-semibold">Automated Revenue Platform</span> that delivers it to the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#book" className="btn-primary py-4 px-8 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 text-lg font-bold">
              Start My Launch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#deliverables" className="py-4 px-8 rounded-xl border border-grey-light text-grey-medium hover:text-black hover:border-black transition-all font-bold text-lg">
              See What’s Included
            </Link>
          </div>
        </div>
      </section>


      {/* 2. THE PROBLEM: COMPACT & CLEAN (Divider Removed, Spacing Reduced) */}
      <section className="py-24 bg-[#F9FAFB] border-y border-grey-medium/5">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          
          {/* Top Row: Context & Visual */}
          {/* Reduced mb-20 to mb-16 for tighter layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16">
            
            {/* Context */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                You’re Ready to Teach, <br />
                <span className="text-grey-medium">But Stuck in "Tech Purgatory."</span>
              </h2>
              <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">
                You’ve spent months organizing your genius into a curriculum. You know your content can help people. But every time you try to launch, you hit a wall.
              </p>
            </div>

            {/* Visual: System Halted */}
            <div className="relative">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-grey-medium/10 relative z-10">
                <div className="flex items-center gap-2 mb-8 border-b border-grey-medium/10 pb-4">
                   <div className="text-xs font-bold uppercase tracking-widest text-grey-medium">Current Status</div>
                   <div className="ml-auto flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-grey-medium/30"></div>
                     <div className="w-2 h-2 rounded-full bg-grey-medium/30"></div>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-grey-light/10 rounded-lg border border-grey-medium/10">
                      <span className="text-sm font-medium text-grey-medium">Payment Gateway</span>
                      <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">DISCONNECTED</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-grey-light/10 rounded-lg border border-grey-medium/10">
                      <span className="text-sm font-medium text-grey-medium">Email Automation</span>
                      <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">INACTIVE</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-grey-light/10 rounded-lg border border-grey-medium/10">
                      <span className="text-sm font-medium text-grey-medium">Checkout Page</span>
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">ERROR 404</span>
                   </div>
                </div>

                <div className="mt-6 pt-6 border-t border-grey-medium/10 text-center">
                   <p className="text-sm text-grey-medium italic">"System Halted. Launch Delayed Indefinitely..."</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Bottom Row: The 3 Pain Points */}
          {/* REMOVED: border-t, pt-16 (Divider gone, moved up) */}
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Pain Point 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-black text-2xl">Platform Dilemma</h3>
              <p className="text-grey-medium font-medium leading-relaxed">
                Kajabi? Thinkific? Skool? The options are endless, and choosing wrong creates a migration nightmare later.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-black text-2xl">"Zapier" Trap</h3>
              <p className="text-grey-medium font-medium leading-relaxed">
                You have a course, but it doesn't talk to your email list. You're manually copying and pasting student data.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-black text-2xl">Blank Page</h3>
              <p className="text-grey-medium font-medium leading-relaxed">
                You’re staring at a default template, wondering how to write a sales page that actually converts.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 3. THE EXPERTISE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 max-w-3xl mx-auto leading-[1.1]">
            We Build Classrooms. <br />
            <span className="text-primary">You Focus on Students.</span>
          </h2>
          <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            We don't guess. <br />
            We are experts in the exact tools high-performing creators use to scale.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500 max-w-5xl mx-auto">
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-black text-black tracking-tight group-hover:text-[#006CFF] transition-colors">KAJABI</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-extrabold text-black tracking-tighter lowercase group-hover:text-[#222] transition-colors">thinkific</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-black text-black tracking-widest group-hover:text-[#F5B800] transition-colors" style={{fontFamily: 'monospace'}}>SKOOL</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-bold text-black tracking-tight group-hover:text-[#4B2AAD] transition-colors">podia</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-bold text-black tracking-wide group-hover:text-[#FF8F74] transition-colors">ConvertKit</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-bold text-black tracking-tighter group-hover:text-[#635BFF] transition-colors">stripe</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-2xl font-black text-black group-hover:text-[#FF4F00] transition-colors">_zapier</span></div>
             <div className="flex flex-col items-center justify-center gap-2 group"><span className="text-xl font-bold text-black italic group-hover:text-[#356AE6] transition-colors">ActiveCampaign &gt;</span></div>
          </div>
        </div>
      </section>


      {/* 4. THE PLAN */}
      <section className="py-24 bg-[#050505] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]">Your Journey from "Idea" to "Income."</h2>
            <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">We do the engineering required to get you paid.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors bg-[#0A1019]">
              <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-primary/20 transition-colors">01</div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We select the right platform for your business model (not just the trendy one) and map your curriculum.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors bg-[#0A1019]">
              <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-primary/20 transition-colors">02</div>
              <h3 className="text-xl font-bold text-white mb-2">Build</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We set up your course portal, design your high-converting sales page, and connect your payment processor.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors bg-[#0A1019]">
              <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-primary/20 transition-colors">03</div>
              <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We hand you the keys to a finished system—complete with a "Welcome Sequence" that nurtures new students automatically.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 5. DELIVERABLES */}
      <section id="deliverables" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.1]">What’s Inside Launchpad?</h2>
            <p className="text-lg md:text-xl text-grey-medium font-medium leading-relaxed">A complete "Business-in-a-Box" for new creators.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            <div className="flex flex-col p-8 rounded-2xl border border-grey-medium/10 hover:shadow-lg hover:border-blue-100 transition-all bg-white group h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Core Platform Setup</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                Full configuration of Kajabi, Thinkific, or Skool. We handle the domain, branding, and course upload.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-grey-medium/10 hover:shadow-lg hover:border-blue-100 transition-all bg-white group h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Automated Lead Gen</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                A "Clarity Magnet" landing page that captures emails and delivers your freebie automatically before you sell.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-grey-medium/10 hover:shadow-lg hover:border-blue-100 transition-all bg-white group h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Sales Engine</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                A professionally designed Sales Page & friction-free Checkout flow connected directly to Stripe/PayPal.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-grey-medium/10 hover:shadow-lg hover:border-blue-100 transition-all bg-white group h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Email Nurture System</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                We connect ConvertKit or ActiveCampaign to deliver login details and welcome emails instantly.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-grey-medium/10 hover:shadow-lg hover:border-blue-100 transition-all bg-white group h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                We set up your tracking pixels so you know exactly where your students are coming from.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-purple-100 hover:shadow-lg hover:border-purple-300 transition-all bg-purple-50/30 group h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-200 text-purple-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">
                Bonus
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">AI Content Blueprint</h3>
              <p className="text-sm text-grey-medium leading-relaxed">
                We use AI to help outline your course structure or draft your sales copy, cutting your writing time in half.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 6. SUCCESS: REDESIGNED WITH "GLASS CARD" */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
          
          {/* Centered Headline */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Imagine Launch Day...</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: The Narrative */}
            <div className="space-y-8">
              <div className="space-y-6 text-xl md:text-2xl font-medium text-blue-100">
                <p>
                  You hit "Send" on an email. You go to dinner with your family.
                </p>
                <p className="text-white font-bold">
                  And then your phone lights up.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                 <div className="flex items-center gap-3 text-lg font-medium text-blue-100">
                   <Check className="w-5 h-5 text-white" /> <span>No crashing website.</span>
                 </div>
                 <div className="flex items-center gap-3 text-lg font-medium text-blue-100">
                   <Check className="w-5 h-5 text-white" /> <span>No manual password resets.</span>
                 </div>
                 <p className="text-white font-bold text-xl pt-4">
                   Just your knowledge, reaching the people who need it.
                 </p>
              </div>

              <div className="pt-8">
                <Link href="/contact#book" className="btn-white bg-white text-primary py-4 px-8 rounded-xl shadow-xl hover:bg-blue-50 transition-all font-bold text-lg inline-flex items-center gap-2 hover:-translate-y-1">
                   Apply for Launchpad <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* RIGHT: The Card - CENTERED in Column */}
            <div className="relative flex justify-center lg:justify-center">
              
              {/* THE CARD */}
              <div className="relative w-full max-w-sm">
                 
                 {/* Glass Container */}
                 <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl relative z-10 overflow-hidden group hover:scale-105 transition-transform duration-500">
                    
                    {/* Top Row: App Icon + Time */}
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                          <Smartphone className="w-5 h-5 text-white" />
                       </div>
                       <span className="text-xs font-medium text-blue-100 uppercase tracking-widest">Now</span>
                    </div>

                    {/* Middle Row: Success Indicator */}
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
                          <Check className="w-6 h-6 text-green-400 stroke-[3px]" />
                       </div>
                       <div>
                          <p className="text-sm text-blue-100">Payment Success</p>
                          <p className="text-white font-bold">New Student Enrolled</p>
                       </div>
                    </div>

                    {/* Bottom Row: The Money & Name */}
                    <div className="space-y-1">
                       <p className="text-5xl font-bold text-white tracking-tight">$497.00</p>
                       <p className="text-sm text-blue-200">Purchased by Sarah Jenkins</p>
                    </div>

                    {/* Decorative Shine Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                 </div>

                 {/* Background Glows */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}