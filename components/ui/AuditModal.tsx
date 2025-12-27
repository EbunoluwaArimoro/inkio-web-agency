"use client";

import { useState } from "react";
import { X, Check, Loader2, Lock, ArrowRight } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 bg-grey-light/50 hover:bg-grey-light rounded-full transition-colors text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-black">Check Your Inbox!</h3>
            <p className="text-grey-medium text-sm">
              We've sent the blueprint to <strong>{email}</strong>.
            </p>
            <button onClick={onClose} className="btn-primary w-full py-3 mt-4 rounded-xl font-bold">
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-100">
                 <Lock className="w-3 h-3" /> Free Resource
              </div>
              
              {/* UPDATED LEAD MAGNET NAME */}
              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight pt-2">
                The 6-Figure Business <br/>
                <span className="text-primary">Automation Blueprint</span>
              </h3>
              
              <p className="text-grey-medium text-sm font-medium">
                Find hidden revenue leaks and automate your growth in minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-grey-medium uppercase tracking-widest mb-1.5">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@company.com" 
                  className="w-full bg-grey-light/30 border border-grey-medium/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full btn-primary py-3.5 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>Send Me The Blueprint <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
            
            <p className="text-center text-[10px] text-grey-medium opacity-60">
              100% Secure. Unsubscribe at any time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}