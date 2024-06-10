import type { Metadata } from "next";
import { Nunito, Mohave } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });
const mohave = Mohave({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Baldwin Portfolio",
  description: "I'm Sam Baldwin, a Junior Software Developer based in Buckinghamshire. I have a terrible sense of humour and love for continued learning. My favourite part of software development are the people I get to meet and collaborate with.. I'm always looking for new opportunities to learn and grow as a developer. I'm currently looking for a new role in software development, so please feel free to reach out to me if you think I'd be a good fit for your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mohave.className}>{children}</body>
    </html>
  );
}
