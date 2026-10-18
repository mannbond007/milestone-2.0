"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";

/**
 * Sync the current Clerk user to our database.
 * Called after sign-in/sign-up to ensure we have a local user record.
 */
export async function syncUser() {
  const user = await currentUser();
  if (!user) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (existingUser) return existingUser;

  // Create new user in our database
  const newUser = await prisma.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User",
      email: user.emailAddresses[0]?.emailAddress ?? "",
      avatar: user.imageUrl,
    },
  });

  return newUser;
}

/**
 * Get the current user from our database by their Clerk ID.
 */
export async function getCurrentUser() {
  const user = await currentUser();
  if (!user) return null;

  return prisma.user.findUnique({
    where: { clerkId: user.id },
    include: {
      applications: { include: { scholarship: true }, orderBy: { createdAt: "desc" } },
      notifications: { orderBy: { createdAt: "desc" }, take: 10 },
    },
  });
}

/**
 * Admin action: Update a user's role.
 */
export async function updateUserRole(userId: string, role: Role) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  // Verify the current user is an admin
  const adminUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });
  if (!adminUser || adminUser.role !== "ADMIN") throw new Error("Unauthorized");

  return prisma.user.update({
    where: { id: userId },
    data: { role },
  });
}

/**
 * Admin action: Get all users with pagination.
 */
export async function getUsers(page = 1, limit = 20) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { applications: true } } },
    }),
    prisma.user.count(),
  ]);

  return { users, total, pages: Math.ceil(total / limit) };
}
