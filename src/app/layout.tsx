import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Optional: add weights you'll use
});

export const metadata: Metadata = {
  title: "Helikia | POP",
  description:
    "The Youth Word & Prayer Retreat is a 2Day Camping Retreat and as such we would kindly appreciate you bear it in mind and clear your schedule to avoid unnecessary movements in and out of the retreat venue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
