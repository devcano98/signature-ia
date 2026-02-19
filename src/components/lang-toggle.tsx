"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    // Basic replacement for now. `next-intl` provides `Link` and `usePathname` that handle this better,
    // but for a simple switch we can preserve the path segments.
    // Assuming path starts with /en or /es
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale); // Should be caught by middleware normally
    }
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("es")}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
