"use client";

import { Toaster, DefaultToastOptions } from "react-hot-toast";

const toasterOptions: DefaultToastOptions = {
  style: {
    background: "#1e293b", // Slate-800
    color: "#fff",
    border: "1px solid #334155", // Slate-700
    padding: "16px",
    borderRadius: "8px",
  },
  success: {
    iconTheme: {
      primary: "#22c55e", // Green-500
      secondary: "#fff",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444", // Red-500
      secondary: "#fff",
    },
  },
};

export default function ProviderToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={toasterOptions}
      containerStyle={{
        zIndex: 9999, // Ensure it's above everything
      }}
    />
  );
}
