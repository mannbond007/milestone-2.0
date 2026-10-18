import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { UserPlus, FileText, BookOpen, Award, Upload, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Apply",
  description: "Step-by-step guide on how to apply for the Milestone Scholarship Program.",
};

const steps = [
  { step: 1, icon: UserPlus, title: "Create Your Account", description: "Register on our platform with your email or Google account. Fill in your basic personal information." },
  { step: 2, icon: FileText, title: "Fill Application Form", description: "Complete the multi-step application form with your personal, academic, and course selection details." },
  { step: 3, icon: Upload, title: "Upload Documents", description: "Upload required documents including Aadhaar, marksheet, photograph, and relevant certificates." },
  { step: 4, icon: BookOpen, title: "Take Scholarship Test", description: "Appear for the online scholarship assessment test based on your chosen course category." },
  { step: 5, icon: CheckCircle, title: "Application Review", description: "Our team reviews your application, documents, and test results within 7-10 working days." },
  { step: 6, icon: Award, title: "Receive Scholarship", description: "Approved candidates receive scholarship confirmation and the amount is disbursed accordingly." },
];

const documents = [
  "Aadhaar Card (front & back)",
  "Class 10th Marksheet",
  "Class 12th Marksheet (if applicable)",
  "Passport-size Photograph",
  "Income Certificate",
  "Caste Certificate (if applicable)",
  "Domicile Certificate",
  "College Admission Letter (if available)",
];

export default function HowToApplyPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Application Guide"
              title="How to Apply"
              subtitle="Follow these simple steps to apply for the Milestone Scholarship Program."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl border border-border/50 p-6 flex items-start gap-5 transition-all hover:shadow-card-hover">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-heading font-bold text-lg shadow-gold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-lg mb-1">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-loose">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white text-center mb-8">Required Documents</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-2xl border border-border/50 p-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link href="/sign-up">
                <Button className="gradient-gold text-white font-semibold rounded-xl px-8 h-12 shadow-gold">
                  Start Application
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
