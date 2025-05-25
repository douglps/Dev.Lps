// styled.d.ts
import 'styled-components'; // Importa o módulo styled-components para estender seus tipos

// 1. Primeiro, defina a interface do SEU objeto de tema
// Esta interface deve corresponder exatamente à estrutura do objeto que você passa para o ThemeProvider
interface MyTheme {
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
  }
  // Adicione outras seções do tema aqui (ex: breakpoints, typography, spacing)
  // breakpoints: {
  //   sm: string;
  //   md: string;
  //   lg: string;
  // };
}

// 2. Agora, estenda a interface DefaultTheme do styled-components
// Isso informa ao TypeScript que o seu "DefaultTheme" terá a estrutura de MyTheme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}