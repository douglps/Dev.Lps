"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styled from "styled-components";
import * as S from "@/src/styles/PrivacidadeStyled";

import cafe from "@/images/utils/coffee-pr.svg";

const COFFEE_ICON_WIDTH = 24;
const COFFEE_ICON_HEIGHT = 24;

const FontWeight = styled.span`
  font-weight: 700;
`;

export default function TermoUsoPage() {
  const handleNavClick = (id: string) => `#${id}`;

  const sections = [
    { id: "proposito-website", label: "1. Do Propósito do Website" },
    { id: "seguranca-informacao", label: "2. Segurança da Informação" },
    {
      id: "contribuicoes-voluntarias",
      label: "3. Das Contribuições Voluntárias",
    },
    { id: "direitos-autorais", label: "4. Direitos Autorais" },
    { id: "uso-permitido-proibido", label: "5. Uso Permitido e Proibido" },
    {
      id: "responsabilidades-isencoes",
      label: "6. Das Responsabilidades e Isenções",
    },
    { id: "links-externos", label: "7. Dos Links Externos" },
    { id: "interacao-formularios", label: "8. Da Interação com Formulários" },
    { id: "modificacoes-termos", label: "9. Das Modificações dos Termos" },
    { id: "privacidade-dados", label: "10. Da Privacidade e Dados Pessoais" },
    { id: "contato", label: "11. Contato" },
  ];

  return (
    <>
    <Script
            id="hotjar-script" // Um ID único é recomendado
            strategy="afterInteractive" // Carrega o script após a página ser interativa
          >
            {`
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6428713,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script><S.ContainerPrivacidade role="region" aria-labelledby="titulo-termos-uso">
      <S.PrivacidadeGrid>
        <S.PrivacidadeNavegacao aria-label="Sumário dos termos de uso">
          <ul>
            {sections.map((sec) => (
              <li key={sec.id}>
                <Link
                  href={handleNavClick(sec.id)}
                  aria-label={`Ir para a seção ${sec.label}`}
                >
                  {sec.label}
                </Link>
              </li>
            ))}
          </ul>
        </S.PrivacidadeNavegacao>

        <S.PrivacidadeContainerConteudo aria-label="Conteúdo dos Termos de Uso">
          <h1 id="titulo-termos-uso">TERMOS DE USO</h1>
          <p>
            <strong>Última atualização:</strong> 26/05/2025
          </p>

          {/* Preâmbulo */}
          <p>
            Este documento estabelece os Termos de Uso aplicáveis à navegação e
            utilização do portfólio profissional online{" "}
            <FontWeight>Dev.Lps</FontWeight>, de propriedade e operado pelo
            <FontWeight> titular</FontWeight> (doravante denominado {"'Titular'"}).
            Ao acessar e utilizar este website, o{" "}
            <FontWeight>usuário</FontWeight> (doravante denominado {"'Usuário'"})
            manifesta sua aceitação integral e incondicional das condições aqui
            dispostas.
          </p>

          {/* Seção 1: Do Propósito do Website */}
          <h2 id="proposito-website">1. Do Propósito do Website</h2>
          <p>
            1.1. O presente website destina-se primariamente à exibição de
            portfólio profissional, apresentando projetos, conceitos e soluções
            visuais desenvolvidas pelo <FontWeight>Titular</FontWeight>.
          </p>
          <p>
            1.2. Adicionalmente ao seu caráter informativo e demonstrativo, o
            website poderá, a critério exclusivo do <FontWeight>Titular</FontWeight>,
            ser monetizado por meio de:
          </p>
          <ul>
            <li>a) Exibição de publicidade e parcerias comerciais.</li>
            <li>b) Oferta de serviços criativos e/ou digitais.</li>
            <li>c) Disponibilização de conteúdos exclusivos ou sob demanda.</li>
          </ul>
          <p>
            1.3. O <FontWeight>Usuário</FontWeight> poderá, a seu critério e de forma
            espontânea, realizar contribuições voluntárias para o projeto,
            conforme detalhado na Seção 3.
          </p>

          {/* Seção 2: Segurança da Informação */}
          <h2 id="seguranca-informacao">2. Segurança da Informação</h2>
          <p>
            2.1. O <FontWeight>Titular</FontWeight> emprega medidas técnicas e
            organizacionais razoáveis para proteger a segurança das informações
            do website contra acessos não autorizados, perdas ou alterações
            indevidas.
          </p>
          <p>
            2.2. Embora o <FontWeight>Titular</FontWeight> se esforce para
            proteger o ambiente digital, não é possível garantir a segurança
            absoluta de qualquer sistema online. O <FontWeight>Usuário</FontWeight>
            reconhece e concorda que a transmissão de informações pela internet
            possui riscos inerentes.
          </p>

          {/* Seção 3: Das Contribuições Voluntárias */}
          <h2 id="contribuicoes-voluntarias">
            3. Das Contribuições Voluntárias
          </h2>
          <p>
            3.1. O <FontWeight>Titular</FontWeight> disponibiliza mecanismos para
            que <FontWeight>Usuários</FontWeight> interessados possam realizar
            contribuições financeiras de natureza voluntária, visando apoiar o
            desenvolvimento contínuo e a manutenção deste projeto.
          </p>
          <p>
            3.2. A chave para a realização de tais contribuições será
            explicitamente indicada em seção específica do website
            <S.Cafezin>
              <Link href="/cafe">
                {" "}
                (Contribua com um café){" "}
                <Image
                  src={cafe}
                  alt="Ícone de café para contribuir com um café"
                  width={COFFEE_ICON_WIDTH}
                  height={COFFEE_ICON_HEIGHT}
                />
              </Link>
            </S.Cafezin>
            .
          </p>
          <p>
            3.3. As contribuições efetuadas são consideradas{" "}
            <FontWeight>não reembolsáveis</FontWeight> e não vinculam o{" "}
            <FontWeight>Titular</FontWeight> a qualquer obrigação de entrega de
            produto ou serviço.
          </p>
          <p>
            3.4. A realização da contribuição implica na aceitação plena e
            consciente destas condições pelo <FontWeight>Usuário</FontWeight>.
          </p>

          {/* Seção 4: Direitos Autorais */}
          <h2 id="direitos-autorais">4. Direitos Autorais</h2>
          <p>
            4.1. Todo o conteúdo presente neste website é{" "}
            <FontWeight>propriedade intelectual do Titular</FontWeight>, salvo
            quando expressamente indicado em contrário.
          </p>
          <p>
            4.2. É estritamente{" "}
            <FontWeight>
              proibida a reprodução, cópia, modificação, redistribuição ou uso
              comercial
            </FontWeight>{" "}
            de qualquer material sem autorização prévia e expressa do{" "}
            <FontWeight>Titular</FontWeight>.
          </p>

          {/* Seção 5: Uso Permitido e Proibido */}
          <h2 id="uso-permitido-proibido">5. Uso Permitido e Proibido</h2>
          <ul>
            <li>
              <FontWeight>Permitido</FontWeight>: A navegação pelo site, a
              visualização do conteúdo e o compartilhamento do link de acesso
              são permitidos ao <FontWeight>Usuário</FontWeight>.
            </li>
            <li>
              <FontWeight>Proibido</FontWeight>: É vedado ao{" "}
              <FontWeight>Usuário</FontWeight> copiar ou reproduzir projetos,
              utilizar o conteúdo para fins comerciais ou acadêmicos sem
              permissão explícita do <FontWeight>Titular</FontWeight>, ou
              atribuir autoria indevida a qualquer material exibido neste
              website.
            </li>
          </ul>

          {/* Seção 6: Das Responsabilidades e Isenções */}
          <h2 id="responsabilidades-isencoes">
            6. Das Responsabilidades e Isenções
          </h2>
          <p>
            6.1. O <FontWeight>Titular</FontWeight> deste portfólio{" "}
            <FontWeight>não se responsabiliza</FontWeight> por falhas técnicas,
            indisponibilidade temporária do serviço ou por quaisquer danos
            diretos ou indiretos decorrentes da interpretação ou uso do conteúdo
            aqui apresentado pelo <FontWeight>Usuário</FontWeight>.
          </p>

          {/* Seção 7: Dos Links Externos */}
          <h2 id="links-externos">7. Dos Links Externos</h2>
          <p>
            7.1. Este website poderá conter links para{" "}
            <FontWeight>websites de terceiros</FontWeight>. O{" "}
            <FontWeight>Titular</FontWeight>{" "}
            <FontWeight>não se responsabiliza</FontWeight> pelas políticas,
            conteúdos ou práticas de privacidade de sites externos.
          </p>

          {/* Seção 8: Da Interação com Formulários */}
          <h2 id="interacao-formularios">8. Da Interação com Formulários</h2>
          <p>
            8.1. A utilização de quaisquer formulários de contato ou interação
            no site deve ser feita pelo <FontWeight>Usuário</FontWeight> com{" "}
            <FontWeight>informações verdadeiras e precisas</FontWeight>. Envios
            maliciosos, spam ou conteúdos ofensivos poderão ser bloqueados e, se
            necessário, reportados às autoridades competentes pelo{" "}
            <FontWeight>Titular</FontWeight>.
          </p>

          {/* Seção 9: Das Modificações dos Termos */}
          <h2 id="modificacoes-termos">9. Das Modificações dos Termos</h2>
          <p>
            9.1. Estes Termos de Uso{" "}
            <FontWeight>poderão ser alterados a qualquer momento</FontWeight> e
            sem aviso prévio. Recomenda-se a revisão periódica deste documento
            pelo <FontWeight>Usuário</FontWeight> para se manter atualizado
            sobre as condições de uso.
          </p>

          {/* Seção 10: Da Privacidade e Dados Pessoais */}
          <h2 id="privacidade-dados">10. Da Privacidade e Dados Pessoais</h2>
          <p>
            10.1. Para informações detalhadas sobre a coleta, tratamento e uso
            de dados pessoais, por favor, consulte a{" "}
            <Link href="/privacidade">
              <S.PrivSpanLink as="span">Política de Privacidade</S.PrivSpanLink>
            </Link>{" "}
            específica deste website.
          </p>

          {/* Seção 11: Contato */}
          <h2 id="contato">11. Contato</h2>
          <p>
            11.1. Para quaisquer dúvidas ou esclarecimentos relacionados a estes
            Termos de Uso, o <FontWeight>Usuário</FontWeight> pode entrar em
            contato através do e-mail{" "}
            <FontWeight>dl.douglaslps@gmail.com</FontWeight> ou visitar nosso
            website em{" "}
            <S.PrivSpanLink
              as="a"
              href="https://devlps.vercel.app/"
              target="_blank"
            >
              <FontWeight>https://devlps.vercel.app/</FontWeight>
            </S.PrivSpanLink>
            .
          </p>
        </S.PrivacidadeContainerConteudo>
      </S.PrivacidadeGrid>
    </S.ContainerPrivacidade></>
  );
}