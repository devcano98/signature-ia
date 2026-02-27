import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const authConfig = {
  providers: [Google, GitHub],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/generator");

      // Basic protection logic
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: { strategy: "jwt" }, // Required for Middleware auth verification without DB adapter
} satisfies NextAuthConfig;
