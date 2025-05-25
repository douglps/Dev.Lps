// src/app/cafe/layout.tsx
import type { Metadata } from "next";
import "@/src/styles/globals.css"; // Se você usa globals.css aqui, ok.

export const metadata: Metadata = {
  // O título aqui sobrescreve o do layout raiz para a rota /cafe
  // ou pode ser omitido para herdar do layout raiz e ser sobrescrito pelo page.tsx
  // Se quiser um título específico para a seção "cafe" (ex: "DevLps | Café"), defina-o aqui.
  // Caso contrário, pode removê-lo para que o `page.tsx` defina o título final.
  title: "DevLps | Seção Café", // Exemplo se quisesse um título diferente para a seção
  description:
    "Apoie o desenvolvimento e os conteúdos do DevLps contribuindo com um café.",
  // Outras tags como icons, themeColor, etc., podem ser definidas aqui se forem específicas para a seção /cafe
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="cafe-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /cafe */}
    </main>
  );
}
