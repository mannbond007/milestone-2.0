"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, LayoutDashboard, FileText, Users, BookOpen, Newspaper, Calendar, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const adminLinks = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Applications", href: "/admin/applications", icon: FileText },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Scholarships", href: "/admin/scholarships", icon: BookOpen },
  { label: "Blog", href: "/admin/blog", icon: Newspaper },
  { label: "Exams", href: "/admin/exams", icon: Calendar },
  { label: "Announcements", href: "/admin/announcements", icon: Megaphone },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:border-r lg:border-border/50 lg:bg-card lg:min-h-[calc(100vh-5rem)]">
      <div className="p-5 border-b border-border/50">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <span className="font-heading font-bold text-foreground">Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                isActive ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
