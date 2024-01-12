"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailForm from "@/email/form";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = `${formData.get("firstName")} ${formData.get("lastName")}`;
  const email = formData.get("email");
  const message = formData.get("message");
  const captcha = formData.get("captcha");

  if (!validateString(email, 100)) {
    return {
      error: "Invalid email address.",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid email address.",
    };
  }
  if (!captcha) {
    return {
      error: "reCAPTCHA missing.",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ssikorski03@gmail.com",
      subject: "Message from Contact Form",
      reply_to: email as string,
      react: React.createElement(EmailForm, {
        name: name as string,
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
