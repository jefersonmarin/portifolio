import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // 👈 fonte mais moderna
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans", // usa o mesmo nome que seu globals.css espera
});

export const metadata: Metadata = {
  title: "Portfólio | Jeferson Marin",
  description: "Desenvolvedor Frontend & Criador de Websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

