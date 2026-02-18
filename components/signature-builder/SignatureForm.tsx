"use client";

import React from "react";
import { SignatureData } from "./types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface SignatureFormProps {
  data: SignatureData;
  onUpdate: (field: keyof SignatureData, value: string) => void;
}

export const SignatureForm = ({ data, onUpdate }: SignatureFormProps) => {
  const t = useTranslations("Index");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.name as keyof SignatureData, e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("formTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="fullName" className="mb-2 block">
              {t("fullName")}
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              placeholder={t("placeholders.fullName")}
            />
          </div>

          <div>
            <Label htmlFor="jobTitle" className="mb-2 block">
              {t("jobTitle")}
            </Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              value={data.jobTitle}
              onChange={handleChange}
              placeholder={t("placeholders.jobTitle")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="mb-2 block">
                {t("phone")}
              </Label>
              <Input
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder={t("placeholders.phone")}
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block">
                {t("email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                placeholder={t("placeholders.email")}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="website" className="mb-2 block">
              {t("website")}
            </Label>
            <Input
              id="website"
              name="website"
              value={data.website || ""}
              onChange={handleChange}
              placeholder={t("placeholders.website")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin" className="mb-2 block">
                {t("linkedin")}
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={data.linkedin || ""}
                onChange={handleChange}
                placeholder={t("placeholders.linkedin")}
              />
            </div>
            <div>
              <Label htmlFor="github" className="mb-2 block">
                {t("github")}
              </Label>
              <Input
                id="github"
                name="github"
                value={data.github || ""}
                onChange={handleChange}
                placeholder={t("placeholders.github")}
              />
            </div>
          </div>

          <div>
            <Label className="mb-3 block">{t("designVibe")}</Label>
            <div className="flex gap-2">
              {(["corporate", "creative", "minimalist"] as const).map(
                (vibe) => (
                  <Button
                    key={vibe}
                    type="button"
                    variant={data.vibe === vibe ? "default" : "outline"}
                    onClick={() => onUpdate("vibe", vibe)}
                    className="capitalize"
                  >
                    {t(`vibes.${vibe}`)}
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
