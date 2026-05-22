import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam's Barber Shop | University Heights, OH",
  description:
    "Adam's Barber Shop in University Heights, OH. Classic haircuts, beard trims, and straight razor shaves. Family-friendly, walk-ins welcome. Call (216) 321-8100.",
  keywords: [
    "barber shop",
    "University Heights",
    "haircut",
    "beard trim",
    "straight razor shave",
    "kids haircut",
    "Ohio barber",
  ],
  openGraph: {
    title: "Adam's Barber Shop | University Heights, OH",
    description:
      "Classic haircuts, beard trims, and straight razor shaves in University Heights, OH. 4.6 stars on Google.",
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
      <body>{children}</body>
    </html>
  );
}
