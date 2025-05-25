// src/styles/styled.d.ts (ou qualquer caminho dentro de /src)

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      background2: string;
      background3: string;
      linkMenu: string;
      letras: string;
      letrasSkills: string;
      botao: string;
      botaoHover: string;
      abasMore: string;
      citado: string;
      fundoSkills: string;
      fundoSkillsIcons: string;
      fundoModal: string;
    };

    shadows: {
      fundoShadow: string;
      letrasShadow: string;
      skillsShadow: string;
      skillsIcons: string;
      fundoPortifolio: string;
      fundoMenu: string;
    };

    filters: {
      fundoBlur: string;
    };

    bgimages: {
      bgPages: string;
      bgPortifolio: string;
    };
  }
}
