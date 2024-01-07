"use server";

import * as z from "zod";
import { db } from "@/db";
import bcrypt from "bcryptjs";

import { users } from "@/db/schemas/user";
import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/validations";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken?.email as string,
    verificationToken?.token as string
  );

  return {
    success: "Confirmation email sent!",
  };
};
