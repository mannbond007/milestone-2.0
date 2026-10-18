"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="cta">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
            <Sparkles className="h-3.5 w-3.5" />
            Start Your Journey Today
          </span>
          <h2 className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Your Future Starts With a
            <br className="hidden sm:inline" />
            <span className="gradient-text-gold"> Single Step</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-white/60 max-w-xl mx-auto leading-relaxed">
            Don&apos;t let financial constraints hold you back. Apply for the Milestone Scholarship and take the first step toward your dream career.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="gradient-gold text-slate-950 font-bold rounded-xl px-8 h-12 shadow-gold hover:opacity-90 transition-all text-base group" id="cta-apply-btn">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base dark:border-white/10 dark:hover:bg-white/5" id="cta-contact-btn">
                Contact Us
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
