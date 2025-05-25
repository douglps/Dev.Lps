"use client";

import Image from "next/image";
import Link from "next/link";

import * as S from "@/src/styles/PrivacidadeStyled";

import cafe from "@/images/utils/coffee-pr.svg";



const COFFEE_ICON_WIDTH = 24;
const COFFEE_ICON_HEIGHT = 24;

export default function TermoUsoPage() {
  const handleNavClick = (id: string) => `#${id}`;

  const sections = [
    { id: "identificacao", label: "1. Identificação" },
    { id: "finalidadetermos", label: "2. Finalidade do Site" },
    { id: "doacoes", label: "3. Contribuições Voluntárias" },
    { id: "direitostermos", label: "4. Direitos Autorais" },
    { id: "uso", label: "5. Uso Permitido e Proibido" },
    { id: "responsabilidade", label: "6. Responsabilidades e Isenções" },
    { id: "links", label: "7. Links Externos" },
    { id: "formulario", label: "8. Formulários e Interação" },
    { id: "modificacoes", label: "9. Modificações dos Termos" },
    { id: "privacidadetermos", label: "10. Privacidade e Dados" },
    { id: "contatotermos", label: "11. Contato" },
  ];

  return (
    <S.ContainerPrivacidade role="region" aria-labelledby="titulo-termos-uso">
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
          <h1 id="titulo-termos-uso">TERMO DE USO</h1>
          <p>
            <strong>Última atualização:</strong> 16/05/2025
          </p>

          <h2 id="identificacao">1. Identificação</h2>
          <ul>
            <li>
              <strong>Nome:</strong> Douglas Lopes
            </li>
            <li>
              <strong>E-mail:</strong> dl.douglaslps@gmail.com
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <S.PrivSpanLink
                as="a"
                href="https://devlps.vercel.app/"
                target="_blank"
              >
                https://devlps.vercel.app/
              </S.PrivSpanLink>
            </li>
            <li>
              <strong>Jurisdicional:</strong> Brasil
            </li>
          </ul>

          <h2 id="finalidadetermos">2. Finalidade do Site</h2>
          <p>
            Este site apresenta o portfólio profissional de Douglas Lopes, com
            exibição de projetos, ideias e soluções visuais. Além do caráter
            informativo e demonstrativo, o site pode ser monetizado por meio de:
          </p>
          <ul>
            <li>Exibição de anúncios e parcerias;</li>
            <li>Venda de serviços criativos e/ou digitais;</li>
            <li>Oferta de conteúdos exclusivos ou sob demanda.</li>
          </ul>
          <p>
            Adicionalmente, o usuário pode, de forma espontânea, contribuir com
            o projeto por meio de doações voluntárias via <strong>PIX</strong>,
            cuja chave é disponibilizada de forma visível no site.
          </p>

          <h2 id="doacoes">3. Contribuições Voluntárias (Doações)</h2>
          <p>
            Usuários que desejarem apoiar este projeto de forma espontânea podem
            realizar contribuições financeiras via <strong>PIX</strong>. Essa
            colaboração é opcional e destinada a incentivar a continuidade da
            produção de conteúdo, melhorias técnicas e manutenção do site.
          </p>
          <ul>
            <li>
              <strong>Chave PIX (fixa):</strong> exibida no menu lateral em{" "}
              <S.Cafezin>
                <Link href="/cafe">
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
            </li>
            <li>
              As doações são consideradas <em>não reembolsáveis</em> e não
              vinculam o autor a obrigações de entrega de produto ou serviço.
            </li>
            <li>
              A realização da doação implica no aceite voluntário e consciente
              desta condição.
            </li>
          </ul>

          <h2 id="direitostermos">4. Direitos Autorais</h2>
          <p>
            Todo o conteúdo presente é de propriedade intelectual de Douglas
            Lopes, salvo quando indicado o contrário. É proibida a reprodução,
            cópia, modificação, redistribuição ou uso comercial sem autorização
            expressa.
          </p>

          <h2 id="uso">5. Uso Permitido e Proibido</h2>
          <ul>
            <li>
              <strong>Permitido:</strong> Navegar, visualizar e compartilhar o
              link do site.
            </li>
            <li>
              <strong>Proibido:</strong> Copiar projetos, usar para fins
              comerciais ou acadêmicos sem permissão, atribuir autoria indevida.
            </li>
          </ul>

          <h2 id="responsabilidade">6. Responsabilidades e Isenções</h2>
          <p>
            O titular não se responsabiliza por falhas técnicas,
            indisponibilidade temporária, ou danos decorrentes da interpretação
            do conteúdo.
          </p>

          <h2 id="links">7. Links Externos</h2>
          <p>
            O site pode conter links para terceiros. O titular não se
            responsabiliza por políticas, conteúdos ou práticas externas.
          </p>

          <h2 id="formulario">8. Formulários e Interação</h2>
          <p>
            O uso dos formulários deve ser feito com informações verdadeiras.
            Envios maliciosos, spam ou ofensivos podem ser bloqueados e
            denunciados.
          </p>

          <h2 id="modificacoes">9. Modificações dos Termos</h2>
          <p>
            Este termo pode ser alterado a qualquer momento, sem aviso prévio.
            Recomenda-se leitura periódica.
          </p>

          <h2 id="privacidadetermos">10. Privacidade e Dados</h2>
          <p>
            Para informações sobre coleta e tratamento de dados pessoais, acesse
            a{" "}
            <Link href="/privacidade">
              <S.PrivSpanLink as="span">Política de Privacidade</S.PrivSpanLink>
            </Link>
            .
          </p>

          <h2 id="contatotermos">11. Contato</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> dl.douglaslps@gmail.com
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <S.PrivSpanLink
                as="a"
                href="https://devlps.vercel.app/"
                target="_blank"
              >
                https://devlps.vercel.app/
              </S.PrivSpanLink>
            </li>
          </ul>
        </S.PrivacidadeContainerConteudo>
      </S.PrivacidadeGrid>
    </S.ContainerPrivacidade>
  );
}
