import React from "react";
import { SignatureData } from "../types";

export const CreativeTemplate = ({ data }: { data: SignatureData }) => {
  // Creative template implementation (Placeholder for now)
  // This would typically use bolder colors and diverse layouts
  return (
    <div
      style={{
        fontFamily: "Courier New, monospace",
        color: "#e11d48",
        padding: "20px",
        border: "2px solid #e11d48",
      }}
    >
      <strong style={{ fontSize: "20px" }}>{data.fullName}</strong>
      <br />
      <span style={{ fontStyle: "italic" }}>
        {data.jobTitle} - Creative Director
      </span>
      <br />
      <br />
      (Creative Template Coming Soon)
    </div>
  );
};
