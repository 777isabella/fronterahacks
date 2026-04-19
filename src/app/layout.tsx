import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UStopia RGV",
  description: "An accessibility hub for literacy and community resources in the Rio Grande Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[color:var(--foreground)]">
        <header className="aero-bar">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              UStopia RGV
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link href="/mission" className="hover:underline">
                Mission
              </Link>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
              <Link href="/find" className="hover:underline">
                Find for me
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-10 border-t py-8 text-sm" style={{ borderColor: "var(--aero-border)" }}>
          <div className="mx-auto w-full max-w-5xl px-6">
            Built for Frontera Hacks — Rio Grande Valley
          </div>
        </footer>
      </body>
    </html>
  );
}
