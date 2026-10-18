"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  lineColor?: "primary" | "gold";
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] bg-accent/10 text-accent border border-accent/20 shadow-[0_2px_10px_rgba(163,120,44,0.05)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          {badge}
        </div>
      )}
      <h2 className={cn("font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:tracking-tighter text-primary dark:text-white leading-[1.2] md:leading-[1.15] text-pretty whitespace-nowrap", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground/90 max-w-2xl leading-relaxed mx-auto text-pretty font-normal">
          {subtitle}
        </p>
      )}
      {/* Decorative separator */}
      <div className={cn("flex items-center gap-3.5 mt-8", align === "center" ? "justify-center" : "justify-start")}>
        {align === "center" ? (
          <>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-accent" />
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(163,120,44,0.65)]" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-accent" />
          </>
        ) : (
          <>
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(163,120,44,0.65)]" />
            <div className="h-[2px] w-24 bg-gradient-to-r from-accent to-transparent" />
          </>
        )}
      </div>
    </div>
  );
}
