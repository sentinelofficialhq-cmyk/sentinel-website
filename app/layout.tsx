import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel — Wake up to your edge.",
  description:
    "AI-powered sports analysis. Today's top edges, live market movement, and profit tracking — so you can bet smarter and win more.",
  openGraph: {
    title: "Sentinel — Wake up to your edge.",
    description:
      "AI-powered sports analysis. Today's top edges, live market movement, and profit tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
