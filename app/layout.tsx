import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUSOR — Proposal Details States",
  description: "Business view of all proposal detail states for the JUSOR influencer marketing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
