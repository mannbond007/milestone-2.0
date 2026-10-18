"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Eye, Search, Filter } from "lucide-react";

const applications = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", scholarship: "MBBS", status: "SUBMITTED", date: "2025-05-12", marks: "92%" },
  { id: "2", name: "Rahul Kumar", email: "rahul@example.com", scholarship: "B.Tech", status: "UNDER_REVIEW", date: "2025-05-11", marks: "88%" },
  { id: "3", name: "Ananya Patel", email: "ananya@example.com", scholarship: "Law", status: "SUBMITTED", date: "2025-05-10", marks: "85%" },
  { id: "4", name: "Vikash Yadav", email: "vikash@example.com", scholarship: "Nursing", status: "APPROVED", date: "2025-05-09", marks: "78%" },
  { id: "5", name: "Sneha Iyer", email: "sneha@example.com", scholarship: "BBA", status: "REJECTED", date: "2025-05-08", marks: "65%" },
];

const statusColors: Record<string, string> = {
  SUBMITTED: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  UNDER_REVIEW: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  APPROVED: "bg-green-500/10 text-green-500 border-green-500/20",
  REJECTED: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function AdminApplicationsPage() {
  return (
    <div className="max-w-6xl">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Applications</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage all scholarship applications.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name..." className="pl-9 rounded-xl w-56" />
            </div>
            <Button variant="outline" size="icon" className="rounded-xl"><Filter className="h-4 w-4" /></Button>
          </div>
        </div>
      </ScrollReveal>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Student</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Scholarship</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Marks</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Date</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Status</th>
                <th className="text-right font-medium text-muted-foreground px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.email}</p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{app.scholarship}</td>
                  <td className="px-4 py-3 text-muted-foreground">{app.marks}</td>
                  <td className="px-4 py-3 text-muted-foreground">{app.date}</td>
                  <td className="px-4 py-3">
                    <Badge className={statusColors[app.status]} variant="outline">
                      {app.status.replace("_", " ")}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Eye className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-green-500"><CheckCircle className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-red-500"><XCircle className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
