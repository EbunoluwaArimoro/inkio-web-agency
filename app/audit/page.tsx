"use client";

import { useState } from "react";
import { Check, Lock, Loader2, ArrowRight, ShieldCheck } from "lucide-react";

export default function AuditPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("Check Your Inbox!");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        // This captures "Welcome back!" or "Success!" from your API
        setSuccessMessage(result.message || "Check Your Inbox!");
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Connection failed. Please check your internet.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center py-20 px-4">
      <div className="bg-white rounded-3xl w-full max-w-lg p-10 shadow-2xl border border-grey-medium/10">
        
        {status === "success" ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-black">{successMessage}</h3>
            <p className="text-grey-medium text-lg leading-relaxed">
              We've processed the request for <br/><strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
                 <Lock className="w-3 h-3" /> Free Resource
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                The 6-Figure Business <br/>
                <span className="text-primary">Automation Blueprint</span>
              </h1>
              
              <p className="text-grey-medium font-medium leading-relaxed">
                Find hidden revenue leaks and automate your growth in minutes. Enter your email below to get instant access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-grey-medium uppercase tracking-widest mb-2">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@company.com" 
                  className="w-full bg-grey-light/30 border border-grey-medium/20 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-lg" 
                />
              </div>
              
              {status === "error" && (
                <p className="text-red-500 text-sm font-bold text-center">{errorMessage}</p>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full btn-primary py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>Send Me The Blueprint <ArrowRight className="w-6 h-6" /></>
                )}
              </button>
            </form>
            
            <div className="flex items-center justify-center gap-2 text-xs text-grey-medium opacity-70">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>100% Secure. Unsubscribe at any time.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}