"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, ToggleLeft, ToggleRight } from "lucide-react";
import { scholarshipCategories } from "@/constants/home-data";

export default function AdminScholarshipsPage() {
  return (
    <div className="max-w-6xl">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Scholarships</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage scholarship programs.</p>
          </div>
          <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" /> Add Scholarship
          </Button>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarshipCategories.slice(0, 9).map((cat, i) => {
          const Icon = cat.icon;
          return (
            <ScrollReveal key={cat.id} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border/50 p-5 transition-all hover:shadow-card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${cat.color}15` }}>
                    <Icon className="h-5 w-5" style={{ color: cat.color }} />
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
                </div>
                <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{cat.title}</h3>
                <p className="text-sm text-accent font-medium mt-1">{cat.amount}</p>
                <p className="text-xs text-muted-foreground mt-2">{cat.eligibility}</p>
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/50">
                  <Button variant="outline" size="sm" className="rounded-lg flex-1"><Edit className="h-3 w-3 mr-1" /> Edit</Button>
                  <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8 text-green-500"><ToggleRight className="h-4 w-4" /></Button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
