"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/home-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FAQPreview() {
  return (
    <section className="py-20 md:py-28 relative" id="faq-preview">
      <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="FAQs"
            title={<>Frequently Asked <span className="text-accent">Questions</span></>}
            subtitle="Get quick answers to the most common questions about our scholarship program."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border/50 px-5 data-[state=open]:shadow-premium transition-shadow"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-loose pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link href="/faqs" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group">
              View All FAQs
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
