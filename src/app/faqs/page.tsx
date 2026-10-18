import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/home-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about the Milestone Scholarship Program — eligibility, application process, documents, and more.",
};

const categories = [
  { name: "General", questions: faqs },
  {
    name: "Eligibility",
    questions: [
      { question: "What is the minimum percentage required?", answer: "A minimum of 55% in your last qualifying examination is required. Some scholarships may require higher marks (60-70%)." },
      { question: "Is there an age limit?", answer: "Applicants should be between 16-30 years of age at the time of application." },
      { question: "Can students from any state apply?", answer: "Yes, the Milestone Scholarship is open to students from all states and union territories of India." },
    ],
  },
  {
    name: "Application",
    questions: [
      { question: "How long does the review process take?", answer: "Applications are reviewed within 7-10 working days after submission. You'll receive updates via email and your dashboard." },
      { question: "Can I edit my application after submission?", answer: "Once submitted, applications cannot be edited. However, you can contact support for corrections within 48 hours of submission." },
      { question: "What happens if my application is rejected?", answer: "You can reapply in the next scholarship cycle. We also provide feedback to help improve your next application." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="FAQs"
              title="Frequently Asked Questions"
              subtitle="Find answers to the most common questions about our scholarship program."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {categories.map((cat, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.1}>
              <div className="mb-10">
                <h3 className="font-heading text-xl font-extrabold tracking-tight text-primary dark:text-white mb-4">{cat.name}</h3>
                <Accordion className="space-y-3">
                  {cat.questions.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      className="bg-card rounded-xl border border-border/50 px-5 transition-shadow hover:shadow-premium"
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
