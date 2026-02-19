"use client";

import React, { useState } from "react";
import { SignatureForm } from "@/components/signature-builder/SignatureForm";
import { SignaturePreview } from "@/components/signature-builder/SignaturePreview";
import { SignatureData } from "@/components/signature-builder/types";
import { useTranslations } from "next-intl";
import { User } from "next-auth";

interface SignatureGeneratorProps {
  user?: User;
}

export default function SignatureGenerator({ user }: SignatureGeneratorProps) {
  const t = useTranslations("Index");
  const [data, setData] = useState<SignatureData>({
    fullName: user?.name || "Jane Doe",
    jobTitle: "Software Architect",
    phone: "+1 555 0123",
    email: user?.email || "jane@example.com",
    website: "https://janedoe.com",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    vibe: "corporate",
    avatarUrl:
      user?.image ||
      "https://ui-avatars.com/api/?name=Jane+Doe&background=random",
  });

  const handleUpdate = (field: keyof SignatureData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        <div className="space-y-6">
          <SignatureForm data={data} onUpdate={handleUpdate} isAuth={!!user} />
        </div>
        <div className="lg:sticky lg:top-8 h-fit">
          <SignaturePreview data={data} />
        </div>
      </div>
    </div>
  );
}
