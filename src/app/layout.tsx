import type { Metadata } from "next";
import "@styles/globals.css";

import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Planto",
  description: "Natural Plant Shop Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mediumDesktop:w-[90vw] ultraDesktop:w-[70vw] ultraLargDesktop:w-[60vw] mx-auto flex min-h-screen max-w-[1600px] flex-col overflow-x-hidden">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
