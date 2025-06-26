// app/layout.tsx
import type { Metadata } from "next";
// Import Google Fonts directly here as well if you want to use Next.js Font Optimization
// import { Kanit, Sarabun } from 'next/font/google';


// If using next/font, define them here:
// const kanit = Kanit({
//   weight: '700',
//   subsets: ['latin', 'thai'],
//   variable: '--font-kanit', // Match with --font-kanit in globals.css
//   display: 'swap',
// });

// const sarabun = Sarabun({
//   weight: ['400', '600'],
//   subsets: ['latin', 'thai'],
//   variable: '--font-sarabun', // Match with --font-sarabun in globals.css
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Color Pattern Demo",
  description: "Demonstrating color patterns with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      {" "}
      {/* Set language to Thai */}
      {/* If using next/font, add className like this: */}
      {/* <body className={`${kanit.variable} ${sarabun.variable}`}> */}
      <body>{children}</body>
    </html>
  );
}
