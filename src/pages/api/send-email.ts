// src/pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, telefone, whats, mensagem } = req.body;

  // --- Verificações de Debug ---
  console.log("--- Debug do Backend (send-email.ts) ---");
  console.log("Dados recebidos no backend:", { nome, email, telefone, whats, mensagem });

  console.log("Variáveis de ambiente (Nodemailer):");
  console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
  console.log("EMAIL_PORT:", process.env.EMAIL_PORT);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "******** (senha presente)" : "AUSENTE!"); // Não logar a senha real!
  console.log("EMAIL_TO:", process.env.EMAIL_TO);

  // Verificação de presença das variáveis críticas
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    console.error("ERRO: Uma ou mais variáveis de ambiente do Nodemailer estão faltando ou são indefinidas!");
    return res.status(500).json({ message: "Erro de configuração do servidor de e-mail (variáveis de ambiente faltando)." });
  }
  // --- Fim das Verificações ---

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Use 'true' se a porta for 465 (SSL/TLS)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Adicione um log para verificar se o transporter está sendo criado
      // debug: true, // Descomente para logs detalhados do Nodemailer (apenas para debug)
    });

    console.log("Transporter Nodemailer criado com sucesso.");

    await transporter.sendMail({
      from: `"Contato do site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Novo Contato via Formulário",
      html: `
        <h3>Nova mensagem de ${nome}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || "-"}</p>
        <p><strong>WhatsApp:</strong> ${whats || "-"}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
    });

    console.log("E-mail enviado com sucesso pelo Nodemailer!");
    return res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error: any) {
    console.error("--------------------------------------------------");
    console.error("ERRO DETALHADO ao enviar e-mail:", error);
    // Verifique se o erro tem uma propriedade 'response' ou 'responseCode' para mais detalhes
    if (error.response) {
      console.error("Detalhes da resposta do erro:", error.response);
    }
    if (error.responseCode) {
      console.error("Código de resposta do erro:", error.responseCode);
    }
    console.error("--------------------------------------------------");
    return res.status(500).json({ message: "Erro interno ao enviar e-mail", detailedError: error.message });
  }
}