"use client";

import React, { useRef, useState } from "react";
import { SignatureData } from "./types";
import { CorporateTemplate } from "./templates/CorporateTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { MinimalistTemplate } from "./templates/MinimalistTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, FileCode, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export const SignaturePreview = ({ data }: { data: SignatureData }) => {
  const t = useTranslations("Index");
  const previewRef = useRef<HTMLDivElement>(null);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const copyHtml = () => {
    if (previewRef.current) {
      // We select the table inside the div, not the div itself to avoid extra padding in the paste
      // For templates that might not be tables yet (placeholders), we fallback to first child
      const table =
        previewRef.current.querySelector("table") ||
        previewRef.current.firstElementChild;
      if (table) {
        const html = table.outerHTML;
        navigator.clipboard.writeText(html);
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      }
    }
  };

  const copyText = () => {
    if (previewRef.current) {
      const text = previewRef.current.innerText;
      navigator.clipboard.writeText(text);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t("previewTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div
            ref={previewRef}
            className="border border-dashed rounded-lg p-6 bg-white overflow-x-auto min-h-[200px] flex items-center justify-center"
          >
            {data.vibe === "corporate" && <CorporateTemplate data={data} />}
            {data.vibe === "creative" && <CreativeTemplate data={data} />}
            {data.vibe === "minimalist" && <MinimalistTemplate data={data} />}
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={copyHtml} variant="outline" className="gap-2">
              {copiedHtml ? (
                <Check className="w-4 h-4" />
              ) : (
                <FileCode className="w-4 h-4" />
              )}
              {copiedHtml ? t("copiedHtml") : t("copyHtml")}
            </Button>
            <Button onClick={copyText} variant="outline" className="gap-2">
              {copiedText ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copiedText ? t("copiedText") : t("copyText")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
