// utils/theme.ts
export function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);
}

export function toggleTheme() {
  const current = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.classList.remove(current);
  document.documentElement.classList.add(next);
  localStorage.setItem("theme", next);
}
