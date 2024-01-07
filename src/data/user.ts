import { db } from "@/db";
import { eq } from "drizzle-orm";

import { users } from "@/db/schemas";

type GetUser = typeof users.$inferSelect | undefined;

export const getUserByEmail = async (email: string) => {
  try {
    const user: GetUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user: GetUser = await db.query.users.findFirst({
      where: eq(users.id, id),
    });

    return user;
  } catch (error) {
    return null;
  }
};
