import React from "react";
import { SignatureData } from "../types";

export const MinimalistTemplate = ({ data }: { data: SignatureData }) => {
  // Minimalist template implementation
  return (
    <div
      style={{
        fontFamily: "Helvetica, sans-serif",
        color: "#000",
        padding: "10px",
      }}
    >
      <strong style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
        {data.fullName}
      </strong>
      <br />
      <span style={{ fontSize: "12px", color: "#666" }}>{data.jobTitle}</span>
      <br />
      <br />
      (Minimalist Template Coming Soon)
    </div>
  );
};
