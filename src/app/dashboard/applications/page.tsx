"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Eye, Plus } from "lucide-react";
import Link from "next/link";

const mockApplications = [
  { id: "1", scholarship: "MBBS Scholarship", status: "APPROVED", date: "2025-03-15", amount: "₹5,00,000", course: "MBBS" },
  { id: "2", scholarship: "B.Tech Scholarship", status: "UNDER_REVIEW", date: "2025-04-10", amount: "₹4,00,000", course: "B.Tech CSE" },
  { id: "3", scholarship: "Law Scholarship", status: "DRAFT", date: "2025-05-01", amount: "₹3,00,000", course: "BA LLB" },
];

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  SUBMITTED: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  UNDER_REVIEW: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  APPROVED: "bg-green-500/10 text-green-500 border-green-500/20",
  REJECTED: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function ApplicationsPage() {
  return (
    <div className="max-w-5xl">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">My Applications</h1>
            <p className="text-muted-foreground text-sm mt-1">Track and manage your scholarship applications.</p>
          </div>
          <Link href="/dashboard/apply">
            <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" /> New Application
            </Button>
          </Link>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {mockApplications.map((app, i) => (
          <ScrollReveal key={app.id} delay={i * 0.05}>
            <div className="bg-card rounded-2xl border border-border/50 p-5 transition-all hover:shadow-card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{app.scholarship}</h3>
                    <Badge className={statusColors[app.status]} variant="outline">
                      {app.status.replace("_", " ")}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Course: {app.course}</span>
                    <span>Amount: {app.amount}</span>
                    <span>Applied: {app.date}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl shrink-0">
                  <Eye className="h-3.5 w-3.5 mr-1" /> View Details
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
