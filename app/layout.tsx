import type { Metadata } from "next";
import "./globals.css";
import { LayoutProps } from "@/.next/types/app/layout";

export const metadata: Metadata = {
  title: "Quest of Ardoxine",
  description: "Bond or Blood",
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
