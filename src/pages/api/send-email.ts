// src/pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, telefone, whats, mensagem } = req.body;

  console.log("--- Debug do Backend (send-email.ts) ---");
  console.log("Dados recebidos no backend:", { nome, email, telefone, whats, mensagem });

  console.log("Variáveis de ambiente (Nodemailer):");
  console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
  console.log("EMAIL_PORT:", process.env.EMAIL_PORT);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "******** (senha presente)" : "AUSENTE!");
  console.log("EMAIL_TO:", process.env.EMAIL_TO);

  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_PORT ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS ||
    !process.env.EMAIL_TO
  ) {
    console.error("ERRO: Variáveis de ambiente do Nodemailer ausentes!");
    return res.status(500).json({ message: "Erro de configuração do servidor de e-mail." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
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

  } catch (error: unknown) {
    console.error("--------------------------------------------------");
    if (error instanceof Error) {
      console.error("ERRO DETALHADO ao enviar e-mail:", error.message);
      return res.status(500).json({
        message: "Erro interno ao enviar e-mail",
        detailedError: error.message,
      });
    }

    console.error("Erro desconhecido ao enviar e-mail:", error);
    console.error("--------------------------------------------------");
    return res.status(500).json({ message: "Erro inesperado ao enviar e-mail" });
  }
}
