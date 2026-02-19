import { z } from "zod";

export interface SignatureData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  website?: string;
  linkedin?: string;
  github?: string;
  vibe: "corporate" | "creative" | "minimalist";
  avatarUrl?: string;
}

export const signatureSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  github: z.string().url("Invalid URL").optional().or(z.literal("")),
  vibe: z.enum(["corporate", "creative", "minimalist"]),
  avatarUrl: z.string().optional(),
});

export type SignatureFormValues = z.infer<typeof signatureSchema>;
