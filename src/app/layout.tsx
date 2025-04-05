import { SupabaseProvider } from "@/components/SupabaseProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Treino",
  description: "Aplicativo para gerenciamento de treinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>
        <SupabaseProvider>
          <main className={styles.container}>{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
