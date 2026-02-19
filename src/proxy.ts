import NextAuth from "next-auth";
import { auth as authConfig } from "./auth"; // Import basic auth config to avoid edge runtime issues if needed
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "es",
  localePrefix: "always",
});

// We can't import the full 'auth' object from auth.ts if it depends on Drizzle/Node modules in middleware (Edge).
// For now, let's use a simpler approach or just wrap if supported.
// Ideally, we move auth config to auth.config.ts if it has Node dependencies, but Drizzle adapter might be tricky on Edge.
// HOWEVER, Drizzle with Postgres.js is not Edge compatible usually.
// NextAuth v5 Middleware is Edge compatible. We might need to separate config.

// Let's rely on the standard NextAuth export for now, assuming Drizzle is only managing sessions in callbacks/adapter which runs on server, not middleware matcher necessarily for all db ops?
// Actually, using DrizzleAdapter in auth.ts makes it non-edge compatible.
// We need a separate auth.config.ts for middleware if we want to use `auth` wrapper there without DB.

// TEMPORARY FIX: Just use intl middleware for now to ensure routing works,
// and we will rely on server components to check auth status,
// or I will implement the split if user wants strictly middleware protection.

// Given the complexity of Edge + Drizzle Adapter, I will implement a chaining function.

export default function proxy(req: any) {
  // 1. Run Intl Middleware
  const response = intlMiddleware(req);

  // 2. We could add Auth check here, but let's stick to I18n routing first
  // and handle Auth protection in Layouts/Pages for simpler non-edge DB interaction.

  return response;
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
