export type SignatureData = {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
  avatarUrl?: string; // For future AI avatar
  vibe: "corporate" | "creative" | "minimalist";
};

export type TemplateProps = {
  data: SignatureData;
  className?: string; // For wrapper styling, though inline styles are king inside
};
