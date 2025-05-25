"use client"; // Indica que este é um componente cliente, pois usa hooks de estado e interage com o DOM
import { MeuPortfolio } from "@/src/components/MeuPortifolio";

import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");

  // Efeito para obter o tema inicial no cliente
  useEffect(() => {
    // Verifica se window está definido para garantir que o código roda no cliente
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    }
  }, []); // Executa apenas na montagem no cliente

  // Efeito para observar mudanças no tema (classe 'dark' no <html>)
  useEffect(() => {
    if (typeof window === "undefined") return; // Garante que o código só roda no cliente

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []); // Executa apenas na montagem e desmontagem

  return (
    <>
      <MeuPortfolio />
    </>
  );
}