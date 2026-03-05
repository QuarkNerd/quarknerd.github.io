import type { Metadata } from "next";
import { InteractionProvider } from "@/components/InteractionProvider";
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
      <body>
        <InteractionProvider>{children}</InteractionProvider>
      </body>
    </html>
  );
}
