import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipProcessSteps } from "@/constants/home-data";
import { BookOpen, Clock, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Scholarship Test",
  description: "Learn about the Milestone Scholarship Test — syllabus, pattern, dates, and preparation tips.",
};

const testInfo = [
  { title: "Duration", value: "90 Minutes", icon: Clock },
  { title: "Questions", value: "100 MCQs", icon: FileText },
  { title: "Subjects", value: "Based on Course", icon: BookOpen },
  { title: "Passing Score", value: "50%", icon: CheckCircle },
];

export default function ScholarshipTestPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Scholarship Test"
              title="Scholarship Assessment Test"
              subtitle="Our online assessment evaluates your aptitude and subject knowledge to determine scholarship eligibility."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Test Overview Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl border border-border/50 p-5 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mx-auto mb-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="text-lg font-heading font-bold text-foreground mt-1">{item.value}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white text-center mb-10">How the Test Works</h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {scholarshipProcessSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-loose">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href="/sign-up">
                <Button className="gradient-gold text-white font-semibold rounded-xl px-8 h-12 shadow-gold">
                  Register for Test
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
