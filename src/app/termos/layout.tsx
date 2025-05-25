import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "DevLps | Portifólio de Douglas Lopes",
  description:
    "Explore o portifólio digital de Douglas Lopes — desenvolvedor web focado em design funcional, performance e criatividade.",
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