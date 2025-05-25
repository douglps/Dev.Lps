import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Política de Privacidade | DevLps",
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="privacidade-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /privacidade */}
    </main>
  );
}