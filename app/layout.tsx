import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Payzora - Coming Soon",
  description: "Your Crypto Financial Hub - Launching Soon",
  icons: {
    icon: [
      { url: '/payzora-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/payzora-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/payzora-logo.png',
    apple: '/payzora-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/payzora-logo.png?v=3" />
        <link rel="shortcut icon" href="/payzora-logo.png?v=3" />
        <link rel="apple-touch-icon" href="/payzora-logo.png?v=3" />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {children}
      </body>
    </html>
  );
}
