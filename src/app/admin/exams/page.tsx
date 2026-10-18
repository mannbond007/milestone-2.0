"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Calendar, Clock } from "lucide-react";

const exams = [
  { id: "1", title: "MBBS Scholarship Test 2025", date: "April 20, 2025", duration: "90 min", status: "completed" },
  { id: "2", title: "Engineering Scholarship Test", date: "May 15, 2025", duration: "90 min", status: "ongoing" },
  { id: "3", title: "Law Entrance Scholarship", date: "June 10, 2025", duration: "120 min", status: "upcoming" },
];

const statusColors: Record<string, string> = {
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  ongoing: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  upcoming: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

export default function AdminExamsPage() {
  return (
    <div className="max-w-5xl">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Exams</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage scholarship tests and exams.</p>
          </div>
          <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" /> Schedule Exam
          </Button>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {exams.map((exam, i) => (
          <ScrollReveal key={exam.id} delay={i * 0.05}>
            <div className="bg-card rounded-2xl border border-border/50 p-5 transition-all hover:shadow-card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{exam.title}</h3>
                    <Badge className={statusColors[exam.status]} variant="outline">{exam.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{exam.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{exam.duration}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl"><Edit className="h-3 w-3 mr-1" /> Edit</Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
