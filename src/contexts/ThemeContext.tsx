// src/contexts/ThemeContext.tsx
"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { initTheme, toggleTheme as themeToggleFn } from "@/src/utils/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components"; // Corrigido o import para o styled-components

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// --- OBJETOS DE TEMA REAIS (Corrigido o nome da propriedade para o darkTheme) ---
const lightTheme = {
  colors: {
    bgPages:
      "linear-gradient(180deg, #fff2df94 20%, rgba(223, 255, 235, 0.801) 80%)",
    background: "#ffffff82", // Cor de fundo para tema CLARO
    background2: "#141414d9",
    background3: "#6811f052",
    linkMenu: "#fff",
    letras: "#000000",
    letrasSkills: "#ffffff",
    botao: "#006516",
    botaoHover: "#11f041",
    abasMore: "#e2f5de",
    citado: "#914b00",
    fundoSkills: "#232323",
    fundoSkillsIcons:
      "conic-gradient(rgb(243, 243, 243) 180deg, rgb(2, 2, 2) 360deg)",
    fundoModal: "#e2f5de",
  },
  shadows: {
    fundoShadow: "0.1rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4)",
    letrasShadow: "0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.8)",
    skillsShadow: "inset 0rem 0rem 0rem 40rem #b2e7bd4d",
    skillsIcons: "inset 0 0 9rem 30rem #00000080",
    fundoPortifolio: "inset 0rem 0rem 9rem 30rem rgb(211 211 211 / 50%)",
    fundoMenu: "inset 0rem 0rem 9rem 30rem rgb(0 0 0 / 60%)",
  },
  filters: {
    fundoBlur: "blur(5px)", // Blur para tema CLARO
  },
  bgimages: {
    bgPages:
      "linear-gradient(180deg, #fff2df94 20%, rgba(223, 255, 235, .801) 80%);",
    bgPortifolio: "url('/images/use/bg-vd-roxo-br.avif')",
  },
};

const darkTheme = {
  colors: {
    background: "rgba(0, 0, 0, 0.31)",
    background2: "#ffffffe6",
    background3: "#71608b66",
    linkMenu: "#151515",
    letras: "#ffffff",
    letrasSkills: "#000000",
    botao: "#006516",
    botaoHover: "#11f041",
    abasMore: "#cfcfcf0f",
    citado: "#ff8400",
    fundoSkills: "#cdeeee",
    fundoSkillsIcons:
      "conic-gradient(rgb(8.3636363636, 14.6363636364, 9.6704545455) 180deg, rgb(178.5, 178.5, 178.5) 360deg)",
    fundoModal: "#353535",
  },
  shadows: {
    fundoShadow: "0.1rem 0.2rem 0.3rem rgba(255, 255, 255, 0.4)",
    letrasShadow: "0.2rem 0.4rem 0.5rem #ffffff45",
    skillsShadow: "inset 0rem 0rem 0rem 40rem rgba(207, 207, 207, .06)",
    skillsIcons: "inset 0 0 9rem 30rem #00000080",
    fundoPortifolio: "inset 0rem 0rem 9rem 30rem rgba(0, 0, 0, .5)",
    fundoMenu: "inset 0rem 0rem 9rem 30rem rgb(255 255 255 / 60%)",
  },
  filters: {
    fundoBlur: "blur(10px)", // Blur para tema ESCURO
  },

  bgimages: {
    bgPages: "linear-gradient(45deg, #120b1c 30%, #121f14 85%, #150332)",
    bgPortifolio: "url('/images/use/bg-vd-roxo-pr.avif')",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Estado que reflete o tema atual ('light' ou 'dark')
  const [theme, setTheme] = useState<Theme>("dark"); // Default pode ser "dark" ou "light"

  useEffect(() => {
    // Inicializa o tema no carregamento do cliente
    // (Verifica o localStorage ou sistema para definir a classe 'light' ou 'dark' no <html>)
    if (typeof window !== "undefined") {
      initTheme();
      const currentTheme = document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    // Observa mudanças na classe 'dark' ou 'light' no <html>
    // Isso é útil se o tema for alterado por scripts externos ou por uma preferência do sistema
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []); // Sem dependências para rodar apenas na montagem e desmontagem

  // Lógica para alternar o tema e atualizar a classe no <html>
  const handleToggleTheme = () => {
    // Esta função atualiza a classe no <html> (via sua utilidade `themeToggleFn`)
    // e o MutationObserver acima irá capturar essa mudança para atualizar o estado `theme` aqui.
    themeToggleFn();
  };

  // Seleciona o objeto de tema apropriado para o styled-components
  const currentStyledTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentStyledTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
