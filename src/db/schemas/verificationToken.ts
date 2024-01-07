import { createId } from "@paralleldrive/cuid2";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    id: text("id")
      .notNull()
      .$defaultFn(() => createId()),
    email: text("email").notNull(),
    token: text("token").notNull().unique("token"),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.email, vt.token] }),
  })
);
