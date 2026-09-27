import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2" }],
  },
  manifest: "/site.webmanifest?v=2",
  title: "CompanyOS — a company operating-system concept",
  description:
    "CompanyOS is a concept for turning meetings, tickets, goals, and customer notes into priorities, owners, and a weekly brief. It is not a finished customer product.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="premium-motion">
      <body className="min-h-screen text-zinc-100 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
