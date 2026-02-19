"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      // Create a timeline for entrance animation
      const tl = gsap.timeline();

      // Ensure the container is hidden initially or use fromTo
      tl.fromTo(
        containerRef.current,
        {
          // Initial state
          y: 20,
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.98,
        },
        {
          // Target state
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1, // Slight delay to ensure it doesn't jarringly pop in
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [pathname], // Re-run animation when pathname changes (though template remounts anyway in Next.js)
    },
  );

  return (
    <div ref={containerRef} className="relative min-h-[83svh]">
      {children}
    </div>
  );
}
