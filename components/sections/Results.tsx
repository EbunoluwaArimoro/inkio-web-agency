import { CalendarCheck, MessageSquare, Workflow, TrendingUp, ArrowRight } from "lucide-react";

export function Results() {
  return (
    <section id="results" className="py-24 bg-[#F4F5F7] border-t border-grey-medium/5 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Real Businesses. Real Systems. <br />
            <span className="text-primary">Real Freedom.</span>
          </h2>
          <p className="text-lg text-grey-medium max-w-2xl mx-auto font-medium">
            We don't measure success by "design awards." <br />
            We measure it by hours reclaimed and revenue automated.
          </p>
        </div>

        {/* THE "INTELLIGENCE REPORT" (Monochrome & Technical) */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-grey-medium/10 overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#FAFAFA] px-8 py-4 border-b border-grey-medium/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-grey-medium/40"></div>
              <div className="w-2 h-2 rounded-full bg-grey-medium/40"></div>
              <div className="w-2 h-2 rounded-full bg-grey-medium/40"></div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-grey-medium font-mono">System_Optimization_Log_v3.0</div>
          </div>

          {/* THE ROWS */}
          <div className="divide-y divide-grey-light/50">

            {/* CASE 1: Recruiter */}
            <div className="group p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start md:items-center hover:bg-grey-light/20 transition-colors duration-300">
              
              {/* Identity */}
              <div className="md:col-span-3 flex md:block items-center gap-4">
                <div className="w-10 h-10 bg-grey-light/50 rounded-lg flex items-center justify-center text-black mb-0 md:mb-3">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">The Recruiter</h3>
                  <p className="text-[10px] text-grey-medium uppercase tracking-wider font-bold">Service Business</p>
                </div>
              </div>

              {/* The "Before vs After" Comparison */}
              <div className="md:col-span-6 space-y-4">
                
                {/* The Old Way (Greyed Out) */}
                <div className="flex gap-4 opacity-60">
                  <div className="w-0.5 bg-grey-medium/30 h-auto"></div>
                  <div>
                    <p className="text-[10px] font-bold text-grey-medium uppercase">Without Inkio</p>
                    <p className="text-sm text-grey-medium line-through decoration-grey-medium/50">
                      Manually emailing candidates & chasing no-shows (5 hrs/week lost).
                    </p>
                  </div>
                </div>

                {/* The Inkio Way (Highlighted) */}
                <div className="flex gap-4">
                  <div className="w-0.5 bg-primary h-auto shadow-[0_0_10px_rgba(48,24,205,0.4)]"></div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase">With Inkio</p>
                    <p className="text-sm font-medium text-black">
                      Self-booking calendar synced to automated SMS reminders.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Hard Metric */}
              <div className="md:col-span-3 flex md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-3xl font-black text-black leading-none mb-1">260 Hrs</p>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide">
                    Reclaimed Per Year
                  </p>
                </div>
              </div>

            </div>

            {/* CASE 2: E-Commerce */}
            <div className="group p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start md:items-center hover:bg-grey-light/20 transition-colors duration-300">
              
              {/* Identity */}
              <div className="md:col-span-3 flex md:block items-center gap-4">
                <div className="w-10 h-10 bg-grey-light/50 rounded-lg flex items-center justify-center text-black mb-0 md:mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">E-Com Brand</h3>
                  <p className="text-[10px] text-grey-medium uppercase tracking-wider font-bold">Retail</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex gap-4 opacity-60">
                  <div className="w-0.5 bg-grey-medium/30 h-auto"></div>
                  <div>
                    <p className="text-[10px] font-bold text-grey-medium uppercase">Without Inkio</p>
                    <p className="text-sm text-grey-medium line-through decoration-grey-medium/50">
                      Support team drowning in "Where is my order?" emails.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-0.5 bg-primary h-auto shadow-[0_0_10px_rgba(48,24,205,0.4)]"></div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase">With Inkio</p>
                    <p className="text-sm font-medium text-black">
                      AI Chatbot connected to live Inventory & Shipping database.
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric */}
              <div className="md:col-span-3 flex md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-3xl font-black text-black leading-none mb-1">65% Drop</p>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide">
                    In Support Tickets
                  </p>
                </div>
              </div>

            </div>

            {/* CASE 3: Course Creator */}
            <div className="group p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start md:items-center hover:bg-grey-light/20 transition-colors duration-300">
              
              {/* Identity */}
              <div className="md:col-span-3 flex md:block items-center gap-4">
                <div className="w-10 h-10 bg-grey-light/50 rounded-lg flex items-center justify-center text-black mb-0 md:mb-3">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Course Creator</h3>
                  <p className="text-[10px] text-grey-medium uppercase tracking-wider font-bold">Education</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex gap-4 opacity-60">
                  <div className="w-0.5 bg-grey-medium/30 h-auto"></div>
                  <div>
                    <p className="text-[10px] font-bold text-grey-medium uppercase">Without Inkio</p>
                    <p className="text-sm text-grey-medium line-through decoration-grey-medium/50">
                      "Franken-stack" tech where email didn't talk to the course.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-0.5 bg-primary h-auto shadow-[0_0_10px_rgba(48,24,205,0.4)]"></div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase">With Inkio</p>
                    <p className="text-sm font-medium text-black">
                      Unified "Revenue Engine" where leads are nurtured on autopilot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric */}
              <div className="md:col-span-3 flex md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-3xl font-black text-black leading-none mb-1">Autopilot</p>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide">
                    Lead Nurturing
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}