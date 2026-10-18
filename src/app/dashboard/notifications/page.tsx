"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockNotifications = [
  { id: "1", title: "Application Approved", message: "Your MBBS scholarship application has been approved! Check your dashboard for details.", time: "2 hours ago", read: false },
  { id: "2", title: "Document Verification", message: "Your submitted documents are being verified. This usually takes 3-5 business days.", time: "1 day ago", read: false },
  { id: "3", title: "Scholarship Test Reminder", message: "Your scholarship test is scheduled for April 20, 2025. Please prepare accordingly.", time: "3 days ago", read: true },
  { id: "4", title: "Welcome to Milestone", message: "Thank you for registering with Milestone Scholarship Program. Complete your profile to get started.", time: "1 week ago", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Notifications</h1>
            <p className="text-muted-foreground text-sm mt-1">Stay updated with your scholarship journey.</p>
          </div>
          <Button variant="outline" size="sm" className="rounded-xl">
            <Check className="h-3.5 w-3.5 mr-1" /> Mark All Read
          </Button>
        </div>
      </ScrollReveal>

      <div className="space-y-3">
        {mockNotifications.map((notification, i) => (
          <ScrollReveal key={notification.id} delay={i * 0.05}>
            <div className={`bg-card rounded-2xl border p-5 transition-all hover:shadow-card-hover ${
              notification.read ? "border-border/50" : "border-accent/20 bg-accent/5"
            }`}>
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  notification.read ? "bg-muted" : "bg-accent/10"
                }`}>
                  <Bell className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-accent"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold tracking-tight text-primary dark:text-white text-sm">{notification.title}</h3>
                    {!notification.read && <div className="h-2 w-2 rounded-full bg-accent" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
