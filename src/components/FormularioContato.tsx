import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useEffect } from "react";

// Importa os styled components do arquivo ContatoStyled.ts
import {
  StyledContainerForm,
  StyledInfoForm,
  StyledFormContato,
} from "@/src/styles/ContatoStyled"; // Ajuste o caminho conforme a localização real

interface FormularioContatoProps {
  semMargin?: boolean;
}

const schema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      "Nome deve conter apenas letras e espaços"
    ),
  email: z.string().email("E-mail inválido"),
  telefone: z
    .string()
    .min(14, "Telefone incompleto")
    .max(15, "Telefone inválido")
    .optional()
    .or(z.literal("")),
  whats: z
    .string()
    .min(14, "WhatsApp incompleto")
    .max(15, "WhatsApp inválido")
    .optional()
    .or(z.literal("")),
  mensagem: z
    .string()
    .min(15, "Mensagem deve ter no mínimo 15 caracteres")
    .max(500, "Mensagem deve ter no máximo 400 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function FormularioContato({
  semMargin = false,
}: FormularioContatoProps) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = form.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      form.style.setProperty("--mouse-x", `${x}%`);
      form.style.setProperty("--mouse-y", `${y}%`);
    };

    form.addEventListener("mousemove", handleMouseMove);
    return () => form.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur", // Exibe mensagens após blur (perda de foco)
  });

  const telefone = watch("telefone");
  const whats = watch("whats");
  const mensagem = watch("mensagem") || "";

  const onSubmit = async (data: FormData) => {
    console.log("Dados enviados para o backend:", data);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Mensagem enviada com sucesso!", responseData);
        setShowSuccessMessage(true);
        reset();
        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        console.error("Erro ao enviar mensagem:", responseData.message);
      }
    } catch (error) {
      console.error("Erro de rede ao enviar mensagem:", error);
    }
  };

  const isFieldValid = (fieldName: keyof FormData) => {
    const value = watch(fieldName);
    const isOptional = fieldName === "telefone" || fieldName === "whats";
    const hasValue = value && value.length > 0;

    return (
      isSubmitted &&
      !errors[fieldName] &&
      ((!isOptional && hasValue) || (isOptional && hasValue))
    );
  };

  const getInputClassName = (fieldName: keyof FormData) => {
    // Estas classes agora são definidas no styled-component,
    // mas o `input-valid` precisa de uma lógica para adicionar o background-image
    // e o `input-error` para a borda vermelha.
    // Podemos fazer isso passando props para o StyledInput.
    const baseClass = `input-default`; // Base será aplicada pelo StyledInputDefault

    if (!isSubmitted) return baseClass;

    if (errors[fieldName]) return `${baseClass} input-error`; // Esta classe será mapeada para uma prop no StyledInput

    const value = watch(fieldName);
    const isEmpty = !value || value.length === 0;

    if (!isEmpty && isFieldValid(fieldName) && !showSuccessMessage) {
      return `${baseClass} input-valid`; // Esta classe também será mapeada para uma prop
    }

    return baseClass;
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 11);
    if (cleaned.length <= 10) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3").trim();
    } else {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3").trim();
    }
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "telefone" | "whats"
  ) => {
    const formatted = formatPhone(e.target.value);
    setValue(field, formatted, { shouldValidate: true });
  };

  return (
    <StyledContainerForm>
      <StyledInfoForm $noMargin={semMargin}>
        * Campos Obrigatórios
      </StyledInfoForm>
      <StyledFormContato
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        ref={formRef}
      >
        <div>
          <label htmlFor="nome">*Nome:</label>
        </div>
        <div className="input-form">
          <input
            id="nome"
            type="text"
            {...register("nome")}
            className={getInputClassName("nome")}
            aria-invalid={!!errors.nome}
            aria-describedby="nome-error"
            placeholder="Nome"
          />
          {isSubmitted && errors.nome && (
            <div id="nome-error" className="error-message" role="alert">
              {errors.nome.message}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email">*Email:</label>
        </div>
        <div className="input-form">
          <input
            id="email"
            type="email"
            {...register("email")}
            className={getInputClassName("email")}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            autoComplete="on"
            placeholder="seu@email.com"
          />
          {isSubmitted && errors.email && (
            <div id="email-error" className="error-message" role="alert">
              {errors.email.message}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
        </div>
        <div className="input-form client-contact">
          <input
            id="telefone"
            type="text"
            placeholder="(99) 99999-9999"
            maxLength={15}
            value={telefone || ""}
            onChange={(e) => handlePhoneChange(e, "telefone")}
            className={getInputClassName("telefone")}
            aria-invalid={!!errors.telefone}
            aria-describedby="telefone-error"
          />
          {isSubmitted && errors.telefone && (
            <div id="telefone-error" className="error-message" role="alert">
              {errors.telefone.message}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="whats">WhatsApp:</label>
        </div>
        <div className="input-form client-contact">
          <input
            id="whats"
            type="text"
            placeholder="(99) 9999-9999"
            maxLength={15}
            value={whats || ""}
            onChange={(e) => handlePhoneChange(e, "whats")}
            className={getInputClassName("whats")}
            aria-invalid={!!errors.whats}
            aria-describedby="whats-error"
          />
          {isSubmitted && errors.whats && (
            <div id="whats-error" className="error-message" role="alert">
              {errors.whats.message}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="mensagem">*Mensagem:</label>
        </div>
        <div className="input-form">
          <textarea
            id="mensagem"
            {...register("mensagem")}
            className={getInputClassName("mensagem") + " mensagem"}
            maxLength={400}
            aria-invalid={!!errors.mensagem}
            aria-describedby="mensagem-error"
            placeholder="Olá! Gostaria de ..."
          ></textarea>
          <div className="info-msg">{mensagem.length} / 500 caracteres</div>
          {isSubmitted && errors.mensagem && (
            <div id="mensagem-error" className="error-message" role="alert">
              {errors.mensagem.message}
            </div>
          )}
        </div>

        <span className="enviar">
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </span>

        {showSuccessMessage && (
          <div className="success-message fade-in">
            Mensagem enviada com sucesso!
          </div>
        )}
      </StyledFormContato>
    </StyledContainerForm>
  );
}
