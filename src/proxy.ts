import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import createIntlMiddleware from "next-intl/middleware";

const { auth } = NextAuth(authConfig);

// 1. Configuramos el enrutador de idiomas
const intlMiddleware = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "es", // Tu idioma por defecto
  localePrefix: "always", // o "as-needed" según tu preferencia
});

// 2. Envolvemos el middleware de idiomas con el de autenticación
export default auth((req) => {
  return intlMiddleware(req);
});

// 3. Le decimos a Next.js en qué rutas debe ejecutarse este guardia
export const config = {
  // Ignora las rutas de la API, archivos estáticos (_next, imágenes, etc.)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
