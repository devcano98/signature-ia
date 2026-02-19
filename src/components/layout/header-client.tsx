"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Sparkles } from "lucide-react";
import { LangToggle } from "@/components/lang-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// Mock session for client component - in real app pass session as prop or use SessionProvider
// For now we will accept a prop for session presence or handle it differently.
// Since this is a client component, we might need a wrapper or pass session from layout.
// But the previous Header was async/server.
// Refactoring strategy: Keep Header as Server Component, but move interactive parts to a Client Component wrapper?
// OR make Header a client component and fetch session via hook or pass as prop.
// Passing as prop is easiest if Layout is Server Component.

// Let's assume for now we receive session/user presence as a prop or check it via a client hook if we had SessionProvider.
// But we don't have SessionProvider set up yet in layout.
// So, I will modify this to take `user` as a prop.

interface HeaderProps {
  variant?: "marketing" | "app";
  user?: any; // Avoiding complex checks for now
  userButton?: React.ReactNode;
}

export default function Header({
  variant = "marketing",
  user,
  userButton,
}: HeaderProps) {
  const t = useTranslations("Index"); // Using Index namespace for now
  const tAuth = useTranslations("Navigation"); // Using Auth namespace for now
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/generator", label: "Generator", icon: <Sparkles size={16} /> },
    // Add more links as needed
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-md bg-background/80" : "bg-background/40"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-600"
          >
            <Rocket className="text-primary" />
            SignatureAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="h-4 w-px bg-border mx-2" />

            <div className="flex items-center gap-2">
              <LangToggle />
              <ModeToggle />
            </div>

            {user ? (
              <div className="pl-2">{userButton}</div>
            ) : (
              <Button asChild size="sm" className="rounded-full ml-2">
                <Link href="/login">{tAuth("login")}</Link>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 md:hidden z-40"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-white/10 dark:border-white/5 bg-background/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/50 last:border-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border/50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {t("Navigation.settings")}
                  </span>
                  <div className="flex gap-2">
                    <LangToggle />
                    <ModeToggle />
                  </div>
                </div>

                {user ? (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("Navigation.account")}
                    </span>
                    {userButton}
                  </div>
                ) : (
                  <Button asChild className="w-full rounded-full">
                    <Link href="/api/auth/signin">
                      {t("Navigation.loginSignUp")}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
