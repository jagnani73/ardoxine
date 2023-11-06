import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quest of Ardoxine",
  description: "Bond or Blood",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
