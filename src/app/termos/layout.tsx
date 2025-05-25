import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Termos de Uso | DevLps",
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="termos-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /termos */}
    </main>
  );
}
