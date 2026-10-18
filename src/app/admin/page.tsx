"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FileText, Users, CheckCircle, Clock, XCircle, BookOpen, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const adminStats = [
  { label: "Total Applications", value: 245, icon: FileText, color: "text-blue-500 bg-blue-500/10" },
  { label: "Pending Review", value: 38, icon: Clock, color: "text-amber-500 bg-amber-500/10" },
  { label: "Approved", value: 186, icon: CheckCircle, color: "text-green-500 bg-green-500/10" },
  { label: "Rejected", value: 21, icon: XCircle, color: "text-red-500 bg-red-500/10" },
  { label: "Total Users", value: 1250, icon: Users, color: "text-purple-500 bg-purple-500/10" },
  { label: "Active Scholarships", value: 16, icon: BookOpen, color: "text-accent bg-accent/10" },
];

const recentApplications = [
  { id: "1", name: "Priya Sharma", scholarship: "MBBS", status: "SUBMITTED", date: "2025-05-12" },
  { id: "2", name: "Rahul Kumar", scholarship: "B.Tech", status: "UNDER_REVIEW", date: "2025-05-11" },
  { id: "3", name: "Ananya Patel", scholarship: "Law", status: "SUBMITTED", date: "2025-05-10" },
  { id: "4", name: "Vikash Yadav", scholarship: "Nursing", status: "APPROVED", date: "2025-05-09" },
  { id: "5", name: "Sneha Iyer", scholarship: "BBA", status: "REJECTED", date: "2025-05-08" },
];

const statusColors: Record<string, string> = {
  SUBMITTED: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  UNDER_REVIEW: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  APPROVED: "bg-green-500/10 text-green-500 border-green-500/20",
  REJECTED: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl">
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-primary dark:text-white">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of the Milestone Scholarship Program.</p>
        </div>
      </ScrollReveal>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {adminStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border/50 p-4">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color} mb-2`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xl font-heading font-bold text-foreground">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Charts Placeholder + Recent */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Chart */}
        <ScrollReveal delay={0.1}>
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border/50 p-6">
            <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              Application Trends
            </h3>
            <div className="h-48 flex items-end justify-around gap-2 px-4">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md gradient-gold opacity-80 transition-all hover:opacity-100"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[9px] text-muted-foreground">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recent Applications */}
        <ScrollReveal delay={0.15}>
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border/50 p-6">
            <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white mb-4">Recent Applications</h3>
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.scholarship} • {app.date}</p>
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
    </div>
  );
}
