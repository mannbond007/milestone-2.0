import { DashboardSidebar } from "@/components/dashboard/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Manage your scholarship applications, track status, and access your student dashboard.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8 pb-20 lg:pb-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
