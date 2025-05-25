// src/utils/theme.ts
"use client";

// Garante que o código só execute no navegador
function isBrowser() {
  return typeof window !== "undefined";
}

export function initTheme() {
  if (!isBrowser()) {
    return;
  }
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");

  // Uma forma mais concisa de garantir a classe correta
  document.documentElement.className = theme;
}

export function toggleTheme() {
  if (!isBrowser()) {
    return;
  }
  const current = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const next = current === "dark" ? "light" : "dark";

  // Direto ao ponto: remove a classe atual e adiciona a próxima
  document.documentElement.classList.remove(current);
  document.documentElement.classList.add(next);
  localStorage.setItem("theme", next);
}