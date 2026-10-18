"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, GraduationCap, Edit } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl">
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">My Profile</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your personal information and account settings.</p>
        </div>
      </ScrollReveal>

      {/* Profile Card */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card rounded-2xl border border-border/50 p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <User className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Student Name</h2>
              <p className="text-sm text-muted-foreground">student@example.com</p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">Student</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" defaultValue="Student Name" className="rounded-xl" /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" defaultValue="student@example.com" disabled className="rounded-xl" /></div>
            <div className="space-y-2"><Label htmlFor="profilePhone">Phone</Label><Input id="profilePhone" placeholder="+91 XXXXX XXXXX" className="rounded-xl" /></div>
            <div className="space-y-2"><Label htmlFor="location">Location</Label><Input id="location" placeholder="City, State" className="rounded-xl" /></div>
          </div>

          <div className="mt-6">
            <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
              <Edit className="h-4 w-4 mr-2" /> Save Changes
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Account Info */}
      <ScrollReveal delay={0.1}>
        <div className="bg-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white mb-4">Account Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Role:</span>
              <span className="text-foreground font-medium">Student</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Joined:</span>
              <span className="text-foreground font-medium">May 2025</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Applications:</span>
              <span className="text-foreground font-medium">2 submitted</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
