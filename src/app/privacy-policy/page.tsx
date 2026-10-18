import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MileStone Scholarship",
  description: "Privacy Policy and Student Data Protection Policy for MileStone Scholarship Program.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-secondary text-accent">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Effective Date: 2026 Academic Session
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              MileStone Scholarship Program (&quot;MileStone&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting the privacy and personal data of students, parents, and visitors. This policy outlines how we collect, store, and utilize information provided through our platform.
            </p>
            <h2 className="text-sm font-bold text-foreground">1. Data We Collect</h2>
            <p>
              When applying for scholarships or requesting guidance, we may collect your name, contact details, academic credentials (Class 10/12/degree marks), and identity documents strictly for eligibility verification.
            </p>
            <h2 className="text-sm font-bold text-foreground">2. Document Security</h2>
            <p>
              Uploaded student certificates and identity documents are stored in secure cloud object repositories with time-limited signed access. We never sell, rent, or publicly disclose confidential student data.
            </p>
            <h2 className="text-sm font-bold text-foreground">3. Contact for Inquiries</h2>
            <p>
              For privacy-related questions or data deletion requests, email us at <strong className="text-foreground">milestonescholarship@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
