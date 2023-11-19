import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

//Components:
import ParentWrapper from "./parent-wrapper";

const syne = Syne({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Paul Chen - Portfolio",
  description:
    "A creative developer with 3 years of relevant experience based in the Philippines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={syne.className + " bg-secondary"}>
        <ParentWrapper>{children}</ParentWrapper>
      </body>
    </html>
  );
}
