"use server";

import React from "react";
import axios from "axios";
import { Resend } from "resend";

import { validateString, getErrorMessage } from "@/lib/utils";
import EmailForm from "@/email/form";

const resend = new Resend(process.env.RESEND_API_KEY);
const resend_email = process.env.RESEND_EMAIL;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export const sendEmail = async (formData: FormData) => {
  const name = `${formData.get("firstName")} ${formData.get("lastName")}`;
  const email = formData.get("email");
  const subject = formData.get("subject");
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

  const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`);
  if (!recaptchaResponse.data.success) {
    return {
      error: "reCAPTCHA verification failed.",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: resend_email as string,
      subject: "Message from Contact Form",
      reply_to: email as string,
      react: React.createElement(EmailForm, {
        name: name as string,
        email: email as string,
        subject: subject as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
