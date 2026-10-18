import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { importantDates } from "@/constants/home-data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Important Dates",
  description: "Key dates for the Milestone Scholarship Program — registration, test, results, and disbursement timelines.",
};

export default function ImportantDatesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Timeline"
              title="Important Dates"
              subtitle="Stay on track with key dates for the scholarship application cycle."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-6">
              {importantDates.map((item, i) => {
                const Icon = item.icon;
                const statusColors = {
                  completed: "bg-green-500/10 text-green-600 border-green-500/20",
                  ongoing: "bg-accent/10 text-accent border-accent/20",
                  upcoming: "bg-muted text-muted-foreground border-border",
                };
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="relative pl-16">
                      <div className={`absolute left-3.5 top-3 h-6 w-6 rounded-full flex items-center justify-center z-10 ${
                        item.status === "completed" ? "bg-green-500" : item.status === "ongoing" ? "bg-accent" : "bg-muted-foreground/30"
                      }`}>
                        <Icon className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-card rounded-2xl border border-border/50 p-5 transition-all hover:shadow-card-hover">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{item.title}</h3>
                          <Badge className={statusColors[item.status]} variant="outline">
                            {item.status === "completed" ? "Completed" : item.status === "ongoing" ? "Ongoing" : "Upcoming"}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-accent mb-1">{item.date}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
