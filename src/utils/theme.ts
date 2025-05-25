"use client";

// Tipos de tema suportados
export type ThemeMode = "light" | "dark" | "system";

// Verifica se está no navegador
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// Resolve o tema real com base no modo ("light" | "dark" | "system")
function resolveTheme(mode: ThemeMode): "light" | "dark" {
  if (mode === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  }
  return mode;
}

// Aplica o tema ao <html>
function applyTheme(mode: ThemeMode) {
  const finalTheme = resolveTheme(mode);

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(finalTheme);

  // Transição suave ao mudar o tema
  document.documentElement.style.transition =
    "background-color 0.3s, color 0.3s";

  // Salva o modo preferido
  localStorage.setItem("theme", mode);
}

export function initTheme(): void {
  if (!isBrowser()) return;

  const stored = localStorage.getItem("theme") as ThemeMode | null;
  const mode: ThemeMode = stored || "system";
  applyTheme(mode);

  // Observa mudanças no sistema (caso tema seja "system")
  if (mode === "system") {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => applyTheme("system"));
  }

  // Sincroniza entre abas/janelas
  window.addEventListener("storage", (e) => {
    if (e.key === "theme" && e.newValue) {
      const mode = e.newValue as ThemeMode;
      applyTheme(mode);
    }
  });
}

export function toggleTheme(): void {
  if (!isBrowser()) return;

  const stored = localStorage.getItem("theme") as ThemeMode | null;
  const currentMode = stored || "system";

  // Alterna entre light e dark, nunca system
  const nextMode: ThemeMode =
    resolveTheme(currentMode) === "dark" ? "light" : "dark";

  applyTheme(nextMode);
}
