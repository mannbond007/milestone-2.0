"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLocale, type Locale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative inline-block text-left", className)} ref={containerRef}>
      <button
        type="button"
        id="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t("lang.select", "Select Language")}
        className={cn(
          "h-9 px-3 rounded-full flex items-center gap-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer select-none",
          "border border-border bg-card hover:bg-muted/60 text-foreground",
          "focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-xs",
          isOpen && "ring-2 ring-accent/30 bg-muted/50"
        )}
      >
        <Globe className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
        <span className="uppercase tracking-wider">{locale}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t("lang.select", "Select Language")}
          className={cn(
            "absolute right-0 mt-1.5 w-36 rounded-xl border border-border bg-popover text-popover-foreground shadow-lg py-1 z-50",
            "animate-in fade-in zoom-in-95 duration-150"
          )}
        >
          <button
            type="button"
            role="option"
            aria-selected={locale === "en"}
            onClick={() => handleSelect("en")}
            className={cn(
              "w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-muted transition-colors cursor-pointer",
              locale === "en" ? "text-accent font-semibold bg-muted/40" : "text-foreground"
            )}
          >
            <span>English</span>
            {locale === "en" && <Check className="w-3.5 h-3.5 text-accent" />}
          </button>
          <button
            type="button"
            role="option"
            aria-selected={locale === "hi"}
            onClick={() => handleSelect("hi")}
            className={cn(
              "w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-muted transition-colors cursor-pointer",
              locale === "hi" ? "text-accent font-semibold bg-muted/40" : "text-foreground"
            )}
          >
            <span>हिन्दी</span>
            {locale === "hi" && <Check className="w-3.5 h-3.5 text-accent" />}
          </button>
        </div>
      )}
    </div>
  );
}
