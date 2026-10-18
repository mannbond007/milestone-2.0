"use client";

import { FileText, Clock, CheckCircle, XCircle, Plus, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Mock data for demo (in production, fetched via server actions)
const mockStats = [
  { label: "Total Applications", value: "2", icon: FileText, color: "text-blue-500 bg-blue-500/10" },
  { label: "Under Review", value: "1", icon: Clock, color: "text-amber-500 bg-amber-500/10" },
  { label: "Approved", value: "1", icon: CheckCircle, color: "text-green-500 bg-green-500/10" },
  { label: "Rejected", value: "0", icon: XCircle, color: "text-red-500 bg-red-500/10" },
];

const mockApplications = [
  { id: "1", scholarship: "MBBS Scholarship", status: "APPROVED", date: "2025-03-15", amount: "₹5,00,000" },
  { id: "2", scholarship: "B.Tech Scholarship", status: "UNDER_REVIEW", date: "2025-04-10", amount: "₹4,00,000" },
];

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  SUBMITTED: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  UNDER_REVIEW: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  APPROVED: "bg-green-500/10 text-green-500 border-green-500/20",
  REJECTED: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function DashboardPage() {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-primary dark:text-white">Welcome Back! 👋</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s an overview of your scholarship journey.</p>
        </div>
      </ScrollReveal>

      {/* Quick Actions */}
      <ScrollReveal delay={0.05}>
        <div className="flex gap-3 mb-8">
          <Link href="/dashboard/apply">
            <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              New Application
            </Button>
          </Link>
          <Link href="/dashboard/notifications">
            <Button variant="outline" className="rounded-xl">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </Link>
        </div>
      </ScrollReveal>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {mockStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border/50 p-4 md:p-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color} mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Profile Completion */}
      <ScrollReveal delay={0.15}>
        <div className="bg-card rounded-2xl border border-border/50 p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">Profile Completion</h3>
            <span className="text-sm font-semibold text-accent">75%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/4 gradient-gold rounded-full transition-all duration-1000" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Complete your profile to increase your chances of scholarship approval.</p>
        </div>
      </ScrollReveal>

      {/* Recent Applications */}
      <ScrollReveal delay={0.2}>
        <div className="bg-card rounded-2xl border border-border/50 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">Recent Applications</h3>
            <Link href="/dashboard/applications" className="text-sm text-accent hover:text-accent-light transition-colors flex items-center gap-1">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {mockApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/30">
                <div>
                  <p className="font-medium text-foreground text-sm">{app.scholarship}</p>
                  <p className="text-xs text-muted-foreground">{app.date} • {app.amount}</p>
                </div>
                <Badge className={statusColors[app.status]} variant="outline">
                  {app.status.replace("_", " ")}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
