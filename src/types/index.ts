import { Role, ApplicationStatus } from "@prisma/client";

export type { Role, ApplicationStatus };

export interface DashboardStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  totalUsers: number;
  totalScholarships: number;
}

export interface ApplicationWithRelations {
  id: string;
  fullName: string;
  scholarshipId: string;
  status: ApplicationStatus;
  createdAt: Date;
  submittedAt: Date | null;
  scholarship: { title: string; amount: string };
  user: { name: string; email: string };
}
