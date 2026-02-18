"use client";

import React, { useState } from "react";
import { SignatureForm } from "@/components/signature-builder/SignatureForm";
import { SignaturePreview } from "@/components/signature-builder/SignaturePreview";
import { SignatureData } from "@/components/signature-builder/types";
import { ModeToggle } from "@/components/mode-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const [data, setData] = useState<SignatureData>({
    fullName: "Jane Doe",
    jobTitle: "Software Architect",
    phone: "+1 555 0123",
    email: "jane@example.com",
    website: "https://janedoe.com",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    vibe: "corporate",
    avatarUrl: "https://ui-avatars.com/api/?name=Jane+Doe&background=random", // Placeholder for now
  });

  const handleUpdate = (field: keyof SignatureData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center relative">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {t("title")}
          </h1>
          <div className="absolute top-0 right-0 flex gap-2">
            <LangToggle />
            <ModeToggle />
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SignatureForm data={data} onUpdate={handleUpdate} />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <SignaturePreview data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
