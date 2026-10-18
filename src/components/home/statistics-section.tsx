"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { statistics } from "@/constants/home-data";
import { SectionHeader } from "@/components/ui/section-header";
import { Target } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

export function StatisticsSection() {
  const { t } = useLocale();

  const statLabels = [
    t("homeStats.students", "Students Supported"),
    t("homeStats.scholarships", "Scholarships Awarded"),
    t("homeStats.institutions", "Partner Institutions"),
    t("homeStats.successRate", "Success Rate"),
  ];

  return (
    <section className="py-16 md:py-20 relative" id="statistics">
      {/* Background accent */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-navy/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={
              <span className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5" />
                {t("homeStats.badge", "Our Impact")}
              </span>
            }
            title={
              <>
                {t("homeStats.titlePart1", "Milestone in")}{" "}
                <span className="text-accent">{t("homeStats.titlePart2", "Numbers")}</span>
              </>
            }
            subtitle={t(
              "homeStats.subtitle",
              "Transforming lives and building futures by making quality education accessible to every deserving student."
            )}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
          {statistics.map((stat, i) => {
            const Icon = stat.icon;
            const label = statLabels[i] || stat.label;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-premium transition-shadow hover:shadow-card-hover">
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground font-medium">{label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
