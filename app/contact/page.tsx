"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Calendar, Clock, Video, HelpCircle, ArrowRight, ChevronDown, ChevronUp, Search, Map, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);

  // --- API STATE ---
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    website: "",
    stage: "",
    pain: "",
    budget: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("Application Received"); // Added this line

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        // Set the dynamic message from the API (e.g., "Welcome back!" or "Application Received")
        setSuccessMessage(result.message || "Application Received");
        setStatus("success");
      } else {
        setStatus("error");
        // Capture the specific error from the API
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Connection failed. Please check your internet.");
    }
  };
  // ----------------

  // FAQ Data - Expanded list
  const faqs = [
    {
      question: "Do I need to be technically savvy?",
      answer: "Absolutely not. That’s our job. We speak 'Developer' so you can speak 'Creator.' We build the system, hand you the keys, and give you a simple training video on how to drive it."
    },
    {
      question: "How long does a build take?",
      answer: "For the Launchpad (New Creators), we typically launch in 14-21 days. For the Growth Engine (Migrations & Custom Builds), it usually takes 4-6 weeks depending on the complexity of your data."
    },
    {
      question: "Do you work with platforms other than Kajabi?",
      answer: "Yes. We are experts in Kajabi, Thinkific, Podia, Skool, and WordPress. During our audit, we will recommend the platform that fits your business model best, not just the one we like most."
    },
    {
      question: "What if I already have a team?",
      answer: "We love working with teams. We can act as your 'Fractional CTO,' coordinating with your copywriter, designer, or VA to ensure the tech supports their work perfectly."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes. We offer a 'System Stability' retainer for clients who want us to handle updates, new automations, and troubleshooting so they never have to touch the backend."
    },
    {
      question: "Can you migrate my email list?",
      answer: "Yes. We specialize in 'White-Glove Migration.' We move your contacts, tags, and segments from Mailchimp, ConvertKit, or ActiveCampaign with zero data loss."
    },
    {
      question: "Do you offer refunds?",
      answer: "We work in clear, approved milestones. You approve the design and the architecture before we build. Because of the custom nature of the work, we do not offer refunds once a milestone is completed."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-12 text-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Accepting New Clients</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight mb-6 leading-[1.1]">
            Let’s Revolutionize <br />
            <span className="text-primary">Your Revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-grey-medium font-medium max-w-2xl mx-auto leading-relaxed">
            No high-pressure sales tactics. <br />
            Just a 30-minute audit to see if we can help you scale.
          </p>
        </div>
      </section>

      {/* 2. WHAT HAPPENS ON THIS CALL? */}
      <section className="py-16 bg-[#F9FAFB] border-y border-grey-medium/5">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What happens on this call?</h2>
             
             <div className="inline-flex flex-wrap justify-center gap-3 md:gap-6">
                <span className="flex items-center gap-2 px-4 py-2 bg-white border border-grey-medium/10 rounded-full text-sm font-bold text-black shadow-sm">
                   <Video className="w-4 h-4 text-primary" /> Google Meet
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white border border-grey-medium/10 rounded-full text-sm font-bold text-black shadow-sm">
                   <Clock className="w-4 h-4 text-primary" /> 30 Minutes
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white border border-grey-medium/10 rounded-full text-sm font-bold text-black shadow-sm">
                   <CheckCircle className="w-4 h-4 text-primary" /> Zero Obligation
                </span>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             
             <div className="bg-white p-8 rounded-2xl border border-grey-medium/10 shadow-sm relative group hover:shadow-md transition-all">
                <div className="text-5xl font-black text-grey-light/50 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">01</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                   <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">We Audit Your Stack</h3>
                <p className="text-grey-medium font-medium leading-relaxed">
                   We look at your current tools (Kajabi, Zapier, Email) and identify where you are leaking money or time.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl border border-grey-medium/10 shadow-sm relative group hover:shadow-md transition-all">
                <div className="text-5xl font-black text-grey-light/50 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">02</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                   <Map className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">We Map the Architecture</h3>
                <p className="text-grey-medium font-medium leading-relaxed">
                   We outline exactly how Inkio would rebuild your system to handle $50k-$100k/mo volume.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl border border-grey-medium/10 shadow-sm relative group hover:shadow-md transition-all">
                <div className="text-5xl font-black text-grey-light/50 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">03</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                   <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Decision Time</h3>
                <p className="text-grey-medium font-medium leading-relaxed">
                   If we are a fit, we share pricing and timelines. If not, we point you in the right direction.
                </p>
             </div>

          </div>
        </div>
      </section>


      {/* 3. THE APPLICATION INTERFACE */}
      <section id="book" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-0 bg-white border border-grey-medium/10 rounded-3xl shadow-2xl overflow-hidden">
            
            <div className="bg-[#050505] text-white p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-white">Tell us about your project.</h2>
                <p className="text-zinc-400 font-medium">Please fill this out before selecting a time. It helps us prepare.</p>
              </div>

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in py-10">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    {/* UPDATED MESSAGE HERE */}
                    <h3 className="text-2xl font-bold text-white">{successMessage}</h3>
                    <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                      Thank you, {formData.firstName}. <br/>
                      Please proceed to the calendar on the right to select your time slot.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">First Name</label>
                      <input 
                        name="firstName" 
                        required 
                        onChange={handleChange} 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="Jane" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">Email</label>
                      <input 
                        name="email" 
                        required 
                        onChange={handleChange} 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="jane@company.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">Website / Social URL</label>
                    <input 
                      name="website" 
                      onChange={handleChange} 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="www.yourwebsite.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">Which best describes you?</label>
                    <select 
                      name="stage" 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option className="text-black" value="">Select your stage...</option>
                      <option className="text-black" value="Launch">I'm ready to Launch (Zero to One)</option>
                      <option className="text-black" value="Scale">I'm scaling a $100k+ Business (Hustle to Autopilot)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">What is your biggest "Tech Pain" right now?</label>
                    <textarea 
                      name="pain" 
                      onChange={handleChange} 
                      rows={3} 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="e.g. My email list doesn't talk to my course platform..."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">Budget Range</label>
                    <select 
                      name="budget" 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option className="text-black" value="">Select a range...</option>
                      <option className="text-black" value="1.5-3k">$1.5k - $3k (MVP / Quick Fix)</option>
                      <option className="text-black" value="4.5-7k">$4.5k - $7k (Launchpad System)</option>
                      <option className="text-black" value="7-10k+">$7k - $10k+ (Growth Engine / Custom)</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    {status === "error" && (
                        <p className="text-red-400 text-sm mb-3 font-bold">{errorMessage}</p>
                    )}
                    <button 
                      type="submit" 
                      disabled={status === "loading"} 
                      className="w-full btn-primary py-4 rounded-xl font-bold text-lg hover:shadow-primary/20 hover:shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                    <p className="text-center text-xs text-zinc-500 mt-4">
                      After submitting, you can confirm your time on the calendar.
                    </p>
                  </div>

                </form>
              )}
            </div>

            <div className="bg-white relative h-[800px] lg:h-auto border-l border-grey-medium/10">
              <iframe 
                src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ukppRT0idn0XzAAN7H4ZOEB5A0CGdOk7j_nSNlhUDHMDW23xQ_sUmHbhURSDpE3B64xnZTLSY?gv=true" 
                className="absolute inset-0 w-full h-full border-0" 
                title="Inkio Tech Audit Booking"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>


      {/* 4. FAQ SECTION */}
      <section className="py-24 bg-[#F9FAFB] border-t border-grey-medium/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-grey-medium font-medium">Everything you need to know.</p>
          </div>

          <div className="grid gap-6">
            {faqs.slice(0, isFaqExpanded ? faqs.length : 3).map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-grey-medium/10 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-black mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> 
                  {faq.question}
                </h3>
                <p className="text-grey-medium font-medium leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsFaqExpanded(!isFaqExpanded)}
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-blue-700 transition-colors border-b-2 border-primary/20 hover:border-primary pb-1"
            >
              {isFaqExpanded ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Read More Questions <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}