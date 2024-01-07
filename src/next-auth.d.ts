import { JWT } from "next-auth/jwt";
import { type DefaultSession } from "next-auth";

export type UserRoles = "ADMIN" | "USER";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRoles;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRoles;
  }
}
