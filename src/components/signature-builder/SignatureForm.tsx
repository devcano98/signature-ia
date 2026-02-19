"use client";

import React, { useEffect, useState } from "react";
import { SignatureData, signatureSchema, SignatureFormValues } from "./types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Sparkles, Lock } from "lucide-react";
import { LoginModal } from "@/components/auth/login-modal";

interface SignatureFormProps {
  data: SignatureData;
  onUpdate: (field: keyof SignatureData, value: string) => void;
  isAuth: boolean;
}

export const SignatureForm = ({
  data,
  onUpdate,
  isAuth,
}: SignatureFormProps) => {
  const t = useTranslations("Index");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const form = useForm<SignatureFormValues>({
    resolver: zodResolver(signatureSchema),
    defaultValues: data,
    mode: "onChange",
  });

  // Sync form changes to parent
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name) {
        onUpdate(name as keyof SignatureData, value[name] as string);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch, onUpdate]);

  const handleAiAction = (action: string) => {
    if (!isAuth) {
      setIsLoginModalOpen(true);
      return;
    }
    // TODO: Implement AI Action
    console.log("AI Action triggered:", action);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{t("formTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fullName")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("placeholders.fullName")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 items-end">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t("jobTitle")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("placeholders.jobTitle")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="mb-2 shrink-0"
                  onClick={() => handleAiAction("enhanceJobTitle")}
                  title={t("enhanceWithAi")}
                >
                  {isAuth ? (
                    <Sparkles className="h-4 w-4 text-purple-500" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("phone")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("placeholders.phone")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("placeholders.email")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("website")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("placeholders.website")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("linkedin")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("placeholders.linkedin")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("github")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("placeholders.github")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                        onClick={() => {
                          form.setValue("vibe", vibe); // Update form
                          onUpdate("vibe", vibe); // Update parent immediately
                        }}
                        className="capitalize"
                      >
                        {t(`vibes.${vibe}`)}
                      </Button>
                    ),
                  )}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};
