import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/drizzle/db";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" }, // Force JWT strategy to compatible with edge middleware
});
