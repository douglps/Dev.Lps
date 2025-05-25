import { useMemo } from "react";
// Importe as imagens diretamente. Com o Next.js e o webpack,
// a importação de SVGs retorna o caminho da imagem.
import plusIcon from "@/images/utils/plus.svg";
import minusDarkIcon from "@/images/utils/minus-dark.svg";
import minusLightIcon from "@/images/utils/minus-light.svg";

/**
 * Hook para determinar o ícone do menu (plus/minus) baseado no estado de abertura e no tema.
 * @param isOpen - Booleano indicando se o menu está aberto.
 * @param theme - String indicando o tema atual ('light' ou 'dark').
 * @returns O caminho do arquivo SVG do ícone apropriado.
 */
export default function useMenuIcon(isOpen: boolean, theme: "light" | "dark"): string {
  return useMemo(() => 
    !isOpen ? plusIcon : (theme === "dark" ? minusDarkIcon : minusLightIcon)
  , [isOpen, theme]);
}
