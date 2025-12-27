import { Layers, MousePointerClick, FileWarning, ArrowDown } from "lucide-react";

export function Villain() {
  return (
    <section className="py-24 bg-[#F4F5F7] relative border-t border-grey-medium/5">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
            You Didn’t Start a Business to Become an <span className="text-primary">IT Manager.</span>
          </h2>
          <p className="text-lg md:text-xl text-grey-medium leading-relaxed max-w-4xl mx-auto font-medium">
            You have the vision and the content. <br />
            But you’re losing 20+ hours every week battling broken tools and messy automations.
          </p>
        </div>

        {/* THE PAIN GRID */}
        {/* Changed mb-20 to mb-10 to pull the quote up */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          
          {/* Card 1: Integration Issues */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-grey-medium/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-grey-light/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Layers className="w-7 h-7 text-black group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Tool Fragmentation</h3>
            <p className="text-grey-medium leading-relaxed text-sm">
              You have five different subscriptions (Email, Course, CRM, Payment), and none of them sync. You’re terrified to touch anything because one wrong click breaks the whole stack.
            </p>
          </div>

          {/* Card 2: Manual Work */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-grey-medium/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-grey-light/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <MousePointerClick className="w-7 h-7 text-black group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">The "Admin Trap"</h3>
            <p className="text-grey-medium leading-relaxed text-sm">
              You are acting as a human API—manually copying email addresses, generating invoices, and sending login links. This is $10/hour work, not CEO work.
            </p>
          </div>

          {/* Card 3: Lost Sales */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-grey-medium/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
            <div className="w-14 h-14 bg-grey-light/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <FileWarning className="w-7 h-7 text-black group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">The Conversion Leak</h3>
            <p className="text-grey-medium leading-relaxed text-sm">
              You have traffic, but your checkout process is clunky. Potential clients click 'Buy,' get confused by the friction, and leave. You are losing money while you sleep.
            </p>
          </div>

        </div>

        {/* BOTTOM HOOK (Tightened Spacing) */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Shorter Divider Line (h-10) */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-grey-medium/20 to-grey-medium/40 -mt-6"></div>
          
          {/* Quote Container */}
          <div className="relative pt-2 pb-2">
             {/* Quote Mark */}
             <div className="absolute -top-9 left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-grey-medium/20 font-black select-none pointer-events-none">
               “
             </div>
             
             {/* Text Block */}
             <p className="pt-4 text-2xl md:text-3xl font-medium text-black max-w-3xl mx-auto tracking-tight relative z-10">
                A pretty website that doesn’t convert isn’t an asset. <br />
                <span className="text-grey-medium">It’s an expensive hobby.</span>
             </p>
          </div>
          
          <ArrowDown className="w-6 h-6 text-primary animate-bounce pt-2" />
        </div>

      </div>
    </section>
  );
}