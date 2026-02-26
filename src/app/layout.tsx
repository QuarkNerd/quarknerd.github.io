import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quarknerd",
  description: "8-bit themed personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body>{children}</body>
    </html>
  );
}
