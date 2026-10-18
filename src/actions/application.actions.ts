"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { ApplicationStatus } from "@prisma/client";

/**
 * Create a new scholarship application (draft).
 */
export async function createApplication(data: {
  scholarshipId: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: Date;
  gender: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  pincode: string;
  category: string;
  tenthMarks: number;
  twelfthMarks?: number;
  lastExamMarks?: number;
  collegeName?: string;
  courseName?: string;
  yearOfStudy?: string;
}) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser) throw new Error("User not found");

  return prisma.application.create({
    data: { ...data, userId: dbUser.id },
  });
}

/**
 * Update an existing draft application.
 */
export async function updateApplication(
  applicationId: string,
  data: Record<string, unknown>
) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser) throw new Error("User not found");

  // Verify ownership
  const app = await prisma.application.findUnique({ where: { id: applicationId } });
  if (!app || app.userId !== dbUser.id) throw new Error("Unauthorized");
  if (app.status !== "DRAFT") throw new Error("Cannot edit submitted application");

  return prisma.application.update({
    where: { id: applicationId },
    data,
  });
}

/**
 * Submit a draft application.
 */
export async function submitApplication(applicationId: string) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser) throw new Error("User not found");

  const app = await prisma.application.findUnique({ where: { id: applicationId } });
  if (!app || app.userId !== dbUser.id) throw new Error("Unauthorized");
  if (app.status !== "DRAFT") throw new Error("Already submitted");

  return prisma.application.update({
    where: { id: applicationId },
    data: { status: "SUBMITTED", submittedAt: new Date() },
  });
}

/**
 * Get applications for the current user.
 */
export async function getMyApplications() {
  const user = await currentUser();
  if (!user) return [];

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser) return [];

  return prisma.application.findMany({
    where: { userId: dbUser.id },
    include: { scholarship: true },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Admin: Get all applications with optional filters.
 */
export async function getAllApplications(
  page = 1,
  limit = 20,
  status?: ApplicationStatus
) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const where = status ? { status } : {};

  const [applications, total] = await Promise.all([
    prisma.application.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true, email: true } },
        scholarship: { select: { title: true, amount: true } },
      },
    }),
    prisma.application.count({ where }),
  ]);

  return { applications, total, pages: Math.ceil(total / limit) };
}

/**
 * Admin: Approve or reject an application.
 */
export async function updateApplicationStatus(
  applicationId: string,
  status: "APPROVED" | "REJECTED",
  notes?: string
) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser || dbUser.role !== "ADMIN") throw new Error("Unauthorized");

  return prisma.application.update({
    where: { id: applicationId },
    data: { status, adminNotes: notes },
  });
}

/**
 * Admin: Get dashboard statistics.
 */
export async function getDashboardStats() {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const [
    totalApplications,
    pendingApplications,
    approvedApplications,
    rejectedApplications,
    totalUsers,
    totalScholarships,
  ] = await Promise.all([
    prisma.application.count(),
    prisma.application.count({ where: { status: { in: ["SUBMITTED", "UNDER_REVIEW"] } } }),
    prisma.application.count({ where: { status: "APPROVED" } }),
    prisma.application.count({ where: { status: "REJECTED" } }),
    prisma.user.count(),
    prisma.scholarship.count(),
  ]);

  return {
    totalApplications,
    pendingApplications,
    approvedApplications,
    rejectedApplications,
    totalUsers,
    totalScholarships,
  };
}
