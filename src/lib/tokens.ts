import { v4 as uuid } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import { db } from "@/db";
import { verificationTokens } from "@/db/schemas";
import { eq } from "drizzle-orm";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db
      .delete(verificationTokens)
      .where(eq(verificationTokens.id, existingToken.id));
  }

  await db.insert(verificationTokens).values({
    email,
    token,
    expires,
  });

  const newEntry = await db.query.verificationTokens.findFirst({
    where:
      eq(verificationTokens.token, token) &&
      eq(verificationTokens.email, email),
  });

  return newEntry;
};
