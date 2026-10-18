"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Megaphone } from "lucide-react";
import { useState } from "react";

export default function AdminAnnouncementsPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-3xl">
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Announcements</h1>
          <p className="text-muted-foreground text-sm mt-1">Send notifications to all users.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="bg-card rounded-2xl border border-border/50 p-6">
          {sent ? (
            <div className="text-center py-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-4">
                <Megaphone className="h-7 w-7 text-green-500" />
              </div>
              <h3 className="font-heading text-xl font-extrabold tracking-tight text-primary dark:text-white mb-2">Announcement Sent!</h3>
              <p className="text-sm text-muted-foreground">All users have been notified.</p>
              <Button variant="outline" className="mt-4 rounded-xl" onClick={() => setSent(false)}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="announcementTitle">Title</Label>
                <Input id="announcementTitle" placeholder="Announcement title" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="announcementMessage">Message</Label>
                <Textarea id="announcementMessage" placeholder="Write your announcement..." rows={5} required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Send To</Label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input type="radio" name="target" value="all" defaultChecked className="accent-gold" /> All Users
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input type="radio" name="target" value="students" className="accent-gold" /> Students Only
                  </label>
                </div>
              </div>
              <Button type="submit" className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
                <Send className="h-4 w-4 mr-2" /> Send Announcement
              </Button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
