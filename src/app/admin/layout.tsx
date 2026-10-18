import { AdminSidebar } from "@/components/admin/admin-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage scholarship applications, users, and program settings.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
