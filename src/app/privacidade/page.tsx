"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import * as S from "@/src/styles/PrivacidadeStyled";


export default function PrivacidadePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");


  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    }
  }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => `#${id}`;

  const sections = [
    { id: "controlador", label: "1. Controlador de Dados" },
    { id: "coleta", label: "2. Coleta de Dados Pessoais" },
    { id: "finalidadepriv", label: "3. Finalidade do Tratamento" },
    { id: "cookies", label: "4. Cookies e Rastreamento" },
    { id: "compartilhamento", label: "5. Compartilhamento de Dados" },
    { id: "seguranca", label: "6. Segurança das Informações" },
    { id: "direitospriv", label: "7. Direitos do Titular" },
    { id: "retencao", label: "8. Retenção de Dados" },
    { id: "alteracoes", label: "9. Alterações na Política" },
    { id: "contatopriv", label: "10. Contato" },
  ];

  return (
    <S.ContainerPrivacidade role="region" aria-labelledby="titulo-politica-privacidade">
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
            <strong>Última atualização:</strong> 16/05/2025
          </p>
          <p>
            Esta Política descreve como suas informações são coletadas,
            utilizadas e protegidas neste site. Ao continuar, você concorda com
            os termos.
          </p>

          <h2 id="controlador">1. Controlador de Dados</h2>
          <ul>
            <li>
              <strong>Nome:</strong> Douglas Lopes
            </li>
            <li>
              <strong>E-mail:</strong> dl.douglaslps@gmail.com
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <S.PrivSpanLink as="a" href="https://digigram-ten.vercel.app/" target="_blank" >
                https://digigram-ten.vercel.app/
              </S.PrivSpanLink>
            </li>
            <li>
              <strong>Jurisdicional:</strong> Brasil – conforme a LGPD
            </li>
          </ul>

          <h2 id="coleta">2. Coleta de Dados Pessoais</h2>
          <p>
            <strong>Fornecidos:</strong> Nome, e-mail, mensagem (obrigatórios),
            telefone e WhatsApp (opcional)
          </p>
          <p>
            <strong>Automáticos:</strong> IP, localização, navegador, sistema,
            páginas acessadas, etc.
          </p>

          <h2 id="finalidadepriv">3. Finalidade do Tratamento</h2>
          <ul>
            <li>Contato solicitado;</li>
            <li>Captação de leads e estatísticas;</li>
            <li>Personalização e segurança.</li>
          </ul>

          <h2 id="cookies">4. Cookies e Tecnologias</h2>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Funcionalidade essencial;</li>
            <li>Análise e personalização;</li>
            <li>Publicidade direcionada.</li>
          </ul>

          <h2 id="compartilhamento">5. Compartilhamento com Terceiros</h2>
          <p>
            Atualmente, não compartilhamos dados. Podendo mudar com atualização
            na política.
          </p>

          <h2 id="seguranca">6. Segurança das Informações</h2>
          <ul>
            <li>Criptografia SSL;</li>
            <li>Controles de acesso e backup;</li>
            <li>Ambientes monitorados e protegidos.</li>
          </ul>

          <h2 id="direitospriv">7. Direitos do Titular</h2>
          <p>Você pode solicitar:</p>
          <ul>
            <li>Acesso, retificação e eliminação dos dados;</li>
            <li>Revogação do consentimento;</li>
            <li>Portabilidade e informações sobre terceiros.</li>
          </ul>
          <p>
            Envie para dl.douglaslps@gmail.com com o assunto “Privacidade -
            LGPD”.
          </p>

          <h2 id="retencao">8. Retenção de Dados</h2>
          <p>
            Os dados serão armazenados apenas pelo tempo necessário às
            finalidades ou por obrigação legal.
          </p>

          <h2 id="alteracoes">9. Alterações Nesta Política</h2>
          <p>
            Esta política pode alterar a qualquer momento. Recomenda-se leitura
            periódica.
          </p>

          <h2 id="contatopriv">10. Contato</h2>
          <p>Em caso de dúvidas, entre em contato:</p>
          <ul>
            <li>
              <strong>E-mail:</strong> dl.douglaslps@gmail.com
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <S.PrivSpanLink as="a" href="https://digigram-ten.vercel.app/" target="_blank" >
                https://digigram-ten.vercel.app/
              </S.PrivSpanLink>
            </li>
          </ul>
        </S.PrivacidadeContainerConteudo>
      </S.PrivacidadeGrid>
    </S.ContainerPrivacidade>
  );
}