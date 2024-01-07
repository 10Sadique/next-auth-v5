import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password must contain at least 1 character(s)" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password must contain at least 1 character(s)" }),
  name: z.string().min(1, { message: "Name is required" }),
});
