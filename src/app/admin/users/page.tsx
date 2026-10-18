"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";

const users = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", role: "STUDENT", applications: 2, joined: "2025-01-15" },
  { id: "2", name: "Rahul Kumar", email: "rahul@example.com", role: "STUDENT", applications: 1, joined: "2025-02-20" },
  { id: "3", name: "Admin User", email: "admin@milestone.in", role: "ADMIN", applications: 0, joined: "2024-06-01" },
  { id: "4", name: "Ananya Patel", email: "ananya@example.com", role: "STUDENT", applications: 3, joined: "2025-03-10" },
  { id: "5", name: "Vikash Yadav", email: "vikash@example.com", role: "STUDENT", applications: 1, joined: "2025-04-05" },
];

const roleColors: Record<string, string> = {
  STUDENT: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  ADMIN: "bg-red-500/10 text-red-500 border-red-500/20",
  COUNSELOR: "bg-purple-500/10 text-purple-500 border-purple-500/20",
};

export default function AdminUsersPage() {
  return (
    <div className="max-w-6xl">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Users</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage platform users and roles.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-9 rounded-xl w-56" />
          </div>
        </div>
      </ScrollReveal>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left font-medium text-muted-foreground px-4 py-3">User</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Role</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Applications</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-3">Joined</th>
                <th className="text-right font-medium text-muted-foreground px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </td>
                  <td className="px-4 py-3"><Badge className={roleColors[user.role]} variant="outline">{user.role}</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">{user.applications}</td>
                  <td className="px-4 py-3 text-muted-foreground">{user.joined}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><MoreHorizontal className="h-4 w-4" /></Button>
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
