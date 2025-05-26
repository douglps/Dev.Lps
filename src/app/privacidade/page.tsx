"use client";

import Link from "next/link";
import styled from "styled-components";

import * as S from "@/src/styles/PrivacidadeStyled";

const FontWeight = styled.span`
  font-weight: 700;
`;

export default function PrivacidadePage() {
  const handleNavClick = (id: string) => `#${id}`;

  const sections = [
    { id: "controlador-dados", label: "1. Do Controlador de Dados" },
    { id: "coleta-dados", label: "2. Da Coleta de Dados Pessoais" },
    { id: "finalidade-tratamento", label: "3. Da Finalidade e Base Legal do Tratamento" }, // Título atualizado
    { id: "cookies-tecnologias", label: "4. De Cookies e Tecnologias" },
    { id: "compartilhamento-dados", label: "5. Do Compartilhamento de Dados" },
    { id: "seguranca-informacoes", label: "6. Da Segurança das Informações" },
    { id: "direitos-titular", label: "7. Dos Direitos do Titular" },
    { id: "retencao-dados", label: "8. Da Retenção de Dados" },
    { id: "alteracoes-politica", label: "9. Das Alterações Nesta Política" },
    { id: "contato-privacidade", label: "10. Contato" },
  ];

  return (
    <S.ContainerPrivacidade
      role="region"
      aria-labelledby="titulo-politica-privacidade"
    >
      <S.PrivacidadeGrid>
        <S.PrivacidadeNavegacao aria-label="Sumário da política de privacidade">
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

        <S.PrivacidadeContainerConteudo aria-label="Conteúdo da Política de Privacidade">
          <h1 id="titulo-politica-privacidade">POLÍTICA DE PRIVACIDADE</h1>
          <p>
            <strong>Última atualização:</strong> 26/05/2025
          </p>
          <p>
            Esta Política de Privacidade descreve como as informações pessoais
            do <FontWeight>Usuário</FontWeight> são coletadas, utilizadas e
            protegidas neste website. Ao continuar a navegação e utilização
            deste site, o <FontWeight>Usuário</FontWeight> manifesta sua
            concordância com os termos aqui estabelecidos.
          </p>

          {/* Seção 1: Do Controlador de Dados */}
          <h2 id="controlador-dados">1. Do Controlador de Dados</h2>
          <p>
            1.1. O <FontWeight>Titular</FontWeight> deste website é o Controlador
            dos dados pessoais coletados por meio da plataforma.
          </p>
          <ul>
            <li>
              <FontWeight>Jurisdicional:</FontWeight> Brasil – em conformidade
              com a Lei Geral de Proteção de Dados (LGPD).
            </li>
            {/* INCLUÍDO: Sugestão para Encarregado de Dados (DPO) */}
            <li>
              <FontWeight>Encarregado de Dados (DPO):</FontWeight> O próprio Titular
              deste website atua como Encarregado de Dados (DPO) para este projeto.
              Para contato, utilize os canais indicados na Seção 10.
            </li>
          </ul>

          {/* Seção 2: Da Coleta de Dados Pessoais */}
          <h2 id="coleta-dados">2. Da Coleta de Dados Pessoais</h2>
          <p>
            2.1. O <FontWeight>Titular</FontWeight> poderá coletar dados
            pessoais do <FontWeight>Usuário</FontWeight> das seguintes formas:
          </p>
          <ul>
            <li>
              <FontWeight>Dados Fornecidos pelo Usuário:</FontWeight> Incluem
              nome, e-mail e conteúdo da mensagem (campos obrigatórios em
              formulários de contato), bem como telefone e WhatsApp (campos
              opcionais, caso o <FontWeight>Usuário</FontWeight> deseje
              fornecê-los).
            </li>
            <li>
              <FontWeight>Dados Coletados Automaticamente:</FontWeight> Ao
              navegar no website, informações como endereço IP, localização
              aproximada, tipo de navegador, sistema operacional, páginas
              acessadas e o tempo de permanência são coletadas
              automaticamente.
            </li>
          </ul>

          {/* Seção 3: Da Finalidade e Base Legal do Tratamento (Atualizada) */}
          <h2 id="finalidade-tratamento">3. Da Finalidade e Base Legal do Tratamento</h2>
          <p>
            3.1. Os dados pessoais coletados pelo <FontWeight>Titular</FontWeight>
            {" "}têm como finalidade principal, com as respectivas bases legais:
          </p>
          <ul>
            <li>
              <FontWeight>Responder a solicitações de contato iniciadas pelo Usuário:</FontWeight>
              {" "}Os dados fornecidos no formulário de contato são tratados com base no{" "}
              <FontWeight>consentimento</FontWeight> do Usuário, manifestado ao preencher e enviar a mensagem.
            </li>
            <li>
              <FontWeight>Realizar a captação de leads e análises estatísticas para melhoria do website:</FontWeight>
              {" "}A coleta de dados automáticos (não pessoalmente identificáveis) para fins de análise e aprimoramento do site é realizada com base no{" "}
              <FontWeight>legítimo interesse</FontWeight> do Titular em oferecer uma melhor experiência ao Usuário.
            </li>
            <li>
              <FontWeight>Personalizar a experiência de navegação do Usuário e garantir a segurança do ambiente online:</FontWeight>
              {" "}Este tratamento também se baseia no{" "}
              <FontWeight>legítimo interesse</FontWeight> do Titular em manter um ambiente seguro e funcional, bem como, quando aplicável, no{" "}
              <FontWeight>consentimento</FontWeight> do Usuário para cookies de personalização.
            </li>
          </ul>

          {/* Seção 4: De Cookies e Tecnologias (Atualizada) */}
          <h2 id="cookies-tecnologias">4. De Cookies e Tecnologias</h2>
          <p>
            4.1. O website utiliza cookies e outras tecnologias de rastreamento para melhorar a experiência do Usuário, analisar o tráfego e personalizar conteúdo. Essas tecnologias podem ser classificadas em:
          </p>
          <ul>
            <li>
              <FontWeight>Cookies Estritamente Necessários:</FontWeight> Essenciais para o funcionamento básico do site, como navegação e acesso a áreas seguras. Não exigem consentimento do Usuário.
            </li>
            <li>
              <FontWeight>Cookies de Desempenho e Análise:</FontWeight> Coletam informações anônimas ou agregadas sobre como os Usuários utilizam o site (ex: páginas mais visitadas, erros). Ferramentas como Google Analytics se enquadram aqui. Auxiliam na otimização do site.
            </li>
            <li>
              <FontWeight>Cookies de Funcionalidade:</FontWeight> Permitem que o site lembre de escolhas feitas pelo Usuário (ex: idioma, região) para proporcionar uma experiência mais personalizada.
            </li>
            <li>
              <FontWeight>Cookies de Publicidade/Marketing:</FontWeight> Utilizados para exibir anúncios mais relevantes ao Usuário, com base em seus interesses e comportamento de navegação em diferentes sites. Ferramentas como o Pixel do Facebook se enquadram aqui.
            </li>
          </ul>
          <p>
            4.2. Ao acessar este website, o Usuário será solicitado a fornecer seu consentimento para o uso de cookies (exceto os estritamente necessários), podendo gerenciar suas preferências a qualquer momento através do banner de consentimento de cookies exibido no site ou das configurações do seu navegador. A recusa de certos cookies pode afetar a funcionalidade e a personalização da experiência no site. Para mais detalhes sobre como controlar e excluir cookies, consulte a ajuda do seu navegador.
          </p>

          {/* Seção 5: Do Compartilhamento de Dados (Atualizada) */}
          <h2 id="compartilhamento-dados">5. Do Compartilhamento de Dados</h2>
          <p>
            5.1. O <FontWeight>Titular</FontWeight> poderá compartilhar dados
            do <FontWeight>Usuário</FontWeight> com terceiros nas seguintes situações:
          </p>
          <ul>
            <li>
              <FontWeight>Provedores de Serviços:</FontWeight> Para fins de
              análise de tráfego, desempenho do site e publicidade, dados (geralmente anonimizados ou pseudonimizados) podem
              ser coletados e compartilhados com serviços de terceiros como{" "}
              <FontWeight>Google Analytics</FontWeight> (Google Ireland Limited) e{" "}
              <FontWeight>Pixel do Facebook</FontWeight> (Meta Platforms, Inc.).
              Esses provedores atuam como operadores de dados, processando as
              informações em nome do <FontWeight>Titular</FontWeight> e de acordo
              com suas próprias políticas de privacidade.
            </li>
            <li>
              <FontWeight>Obrigação Legal ou Ordem Judicial:</FontWeight> Em
              casos de requisição legal ou ordem judicial, o <FontWeight>Titular</FontWeight>
              poderá ser obrigado a compartilhar dados com autoridades competentes.
            </li>
          </ul>
          <p>
            5.2. O <FontWeight>Titular</FontWeight>{" "} se compromete a utilizar
            apenas parceiros que demonstrem conformidade com as leis de proteção
            de dados aplicáveis e que ofereçam garantias de segurança e confidencialidade.
          </p>
          {/* INCLUÍDO: Transferência Internacional de Dados */}
          <p>
            5.3. Ao utilizar serviços de terceiros como Google Analytics e Pixel do Facebook, os dados do Usuário podem ser transferidos para outros países onde esses provedores possuem servidores (ex: Estados Unidos). Essas transferências são realizadas em conformidade com a LGPD, garantindo que os dados sejam protegidos por cláusulas contratuais padrão, normas corporativas globais ou outros mecanismos de proteção de dados válidos e reconhecidos pelas autoridades competentes.
          </p>

          {/* Seção 6: Da Segurança das Informações */}
          <h2 id="seguranca-informacoes">6. Da Segurança das Informações</h2>
          <p>
            6.1. O <FontWeight>Titular</FontWeight> adota diversas medidas de
            segurança para proteger os dados pessoais do{" "}
            <FontWeight>Usuário</FontWeight>, incluindo:
          </p>
          <ul>
            <li>
              <FontWeight>Criptografia SSL</FontWeight> para proteger a
              transmissão de dados;
            </li>
            <li>
              <FontWeight>Controles de acesso e backup</FontWeight> regulares;
            </li>
            <li>
              Manutenção de <FontWeight>ambientes monitorados e protegidos</FontWeight>
              {" "}para o armazenamento de dados.
            </li>
          </ul>

          {/* Seção 7: Dos Direitos do Titular */}
          <h2 id="direitos-titular">7. Dos Direitos do Titular</h2>
          <p>
            7.1. Conforme a LGPD, o <FontWeight>Usuário</FontWeight> (titular
            dos dados) possui os seguintes direitos:
          </p>
          <ul>
            <li>
              <FontWeight>Acesso, retificação e eliminação</FontWeight> de seus
              dados;
            </li>
            <li>
              <FontWeight>Revogação do consentimento</FontWeight> para o
              tratamento de dados;
            </li>
            <li>
              <FontWeight>Portabilidade</FontWeight> de seus dados e informações
              sobre o compartilhamento com terceiros.
            </li>
            <li>
              <FontWeight>Oposição:</FontWeight> Oposição ao tratamento de dados, quando não houver base legal para tal, ou por legítimo interesse que possa ser desproporcional.
            </li>
            <li>
              <FontWeight>Anonimização, Bloqueio ou Eliminação:</FontWeight> De dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
            </li>
          </ul>
          <p>
            7.2. Para exercer qualquer um desses direitos, o{" "}
            <FontWeight>Usuário</FontWeight> deve enviar uma solicitação para o
            contato indicado na Seção 10, com o assunto “Privacidade - LGPD”.
          </p>

          {/* Seção 8: Da Retenção de Dados */}
          <h2 id="retencao-dados">8. Da Retenção de Dados</h2>
          <p>
            8.1. Os dados pessoais do <FontWeight>Usuário</FontWeight> serão
            armazenados apenas pelo tempo necessário para cumprir as finalidades
            para as quais foram coletados ou para atender a obrigações legais, regulatórias
            ou para o exercício regular de direitos em processos judiciais, administrativos
            ou arbitrais.
          </p>

          {/* Seção 9: Das Alterações Nesta Política */}
          <h2 id="alteracoes-politica">9. Das Alterações Nesta Política</h2>
          <p>
            9.1. Esta Política de Privacidade{" "}
            <FontWeight>poderá ser alterada a qualquer momento</FontWeight> para
            refletir mudanças na legislação, em nossas práticas de privacidade ou
            na estrutura do website. Recomenda-se ao <FontWeight>Usuário</FontWeight> a
            leitura periódica deste documento para se manter atualizado sobre as
            condições de privacidade. A data da última atualização será sempre indicada no
            início do documento.
          </p>

          {/* Seção 10: Contato */}
          <h2 id="contato-privacidade">10. Contato</h2>
          <p>
            10.1. Para quaisquer dúvidas ou necessidade de informações adicionais
            sobre esta Política de Privacidade, o{" "}
            <FontWeight>Usuário</FontWeight> pode entrar em contato com o{" "}
            <FontWeight>Titular</FontWeight> através do e-mail{" "}
            <FontWeight>dl.douglaslps@gmail.com</FontWeight> ou visitar o
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
    </S.ContainerPrivacidade>
  );
}