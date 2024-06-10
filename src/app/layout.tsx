import type { Metadata } from "next";
import { Mohave, Roboto, Poppins } from "next/font/google";
import "./globals.css";

const mohave = Mohave({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Sam Baldwin Portfolio",
  description:
    "I'm Sam Baldwin, a Junior Software Developer based in Buckinghamshire. I have a terrible sense of humour and love for continued learning. My favourite part of software development are the people I get to meet and collaborate with.. I'm always looking for new opportunities to learn and grow as a developer. I'm currently looking for a new role in software development, so please feel free to reach out to me if you think I'd be a good fit for your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
