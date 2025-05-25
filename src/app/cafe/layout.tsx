import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "DevLps | Portifólio de Douglas Lopes",
  description:
    "Apoie o desenvolvimento e os conteúdos do DigiGram contribuindo com um café.",
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