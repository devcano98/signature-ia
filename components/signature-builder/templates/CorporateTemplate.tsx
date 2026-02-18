import React from "react";
import { SignatureData } from "../types";
// import Image from "next/image";

export const CorporateTemplate = ({ data }: { data: SignatureData }) => {
  const {
    fullName,
    jobTitle,
    phone,
    email,
    linkedin,
    github,
    website,
    avatarUrl,
  } = data;
  const primaryColor = "#0f172a"; // slate-900
  const secondaryColor = "#64748b"; // slate-500
  const linkColor = "#2563eb"; // blue-600

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        lineHeight: "1.4",
        color: "#333",
      }}
    >
      <tbody>
        <tr>
          {avatarUrl && (
            <td style={{ paddingRight: "16px", verticalAlign: "top" }}>
              <img
                src={avatarUrl}
                alt={fullName}
                width={80}
                height={80}
                style={{ borderRadius: "50%", display: "block" }}
              />
            </td>
          )}
          <td style={{ verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "4px" }}>
                    <strong style={{ fontSize: "18px", color: primaryColor }}>
                      {fullName}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "8px",
                      color: secondaryColor,
                      fontWeight: "bold",
                    }}
                  >
                    {jobTitle}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderTop: `2px solid ${primaryColor}`,
                      paddingTop: "8px",
                    }}
                  >
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        {phone && (
                          <tr>
                            <td
                              style={{
                                paddingRight: "8px",
                                color: secondaryColor,
                              }}
                            >
                              Phone:
                            </td>
                            <td>
                              <a
                                href={`tel:${phone}`}
                                style={{
                                  textDecoration: "none",
                                  color: linkColor,
                                }}
                              >
                                {phone}
                              </a>
                            </td>
                          </tr>
                        )}
                        {email && (
                          <tr>
                            <td
                              style={{
                                paddingRight: "8px",
                                color: secondaryColor,
                              }}
                            >
                              Email:
                            </td>
                            <td>
                              <a
                                href={`mailto:${email}`}
                                style={{
                                  textDecoration: "none",
                                  color: linkColor,
                                }}
                              >
                                {email}
                              </a>
                            </td>
                          </tr>
                        )}
                        {website && (
                          <tr>
                            <td
                              style={{
                                paddingRight: "8px",
                                color: secondaryColor,
                              }}
                            >
                              Web:
                            </td>
                            <td>
                              <a
                                href={website}
                                style={{
                                  textDecoration: "none",
                                  color: linkColor,
                                }}
                              >
                                {website}
                              </a>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
                {(linkedin || github) && (
                  <tr>
                    <td style={{ paddingTop: "8px" }}>
                      {linkedin && (
                        <a
                          href={linkedin}
                          style={{
                            textDecoration: "none",
                            color: linkColor,
                            marginRight: "10px",
                            fontSize: "12px",
                          }}
                        >
                          LinkedIn
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          style={{
                            textDecoration: "none",
                            color: linkColor,
                            fontSize: "12px",
                          }}
                        >
                          GitHub
                        </a>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
