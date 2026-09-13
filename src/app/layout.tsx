import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth Globe",
  description: "Interactive 3D Earth globe",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
