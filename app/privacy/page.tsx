import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-grey-medium hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-grey-medium mb-12">Last Updated: October 26, 2025</p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-grey-medium prose-a:text-primary max-w-none">
          <p>
            At Inkio Agency ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number, and website URL.
          </p>

          <h3>2. How We Use Collected Information</h3>
          <p>
            Inkio Agency may collect and use Users personal information for the following purposes:
          </p>
          <ul>
            <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
            <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
          </ul>

          <h3>3. Web Browser Cookies</h3>
          <p>
            Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent.
          </p>

          <h3>4. Contacting Us</h3>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:info@inkioweb.com">info@inkioweb.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}