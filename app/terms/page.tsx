import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-grey-medium hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-grey-medium mb-12">Last Updated: October 26, 2025</p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-grey-medium prose-a:text-primary max-w-none">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h3>2. Services Provided</h3>
          <p>
            Inkio Agency provides web development, automation, and technical consulting services ("Services"). The specific deliverables are defined in individual client agreements.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            The Site and its original content, features, and functionality are owned by Inkio Agency and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3>4. Limitation of Liability</h3>
          <p>
            In no event shall Inkio Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service.
          </p>

          <h3>5. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
          </p>
          
          <h3>6. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </div>
  );
}