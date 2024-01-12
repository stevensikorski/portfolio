import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailFormProps = {
  name: string;
  email: string;
  message: string;
};

export default function EmailForm({ name, email, message }: EmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-zinc-800">
          <Container>
            <Section className="bg-white my-10 px-10 py-4">
              <Heading className="leading-tight">You received the following message from the contact form</Heading>
              <Text className="text-zinc-800 text-lg font-semibold">{name}</Text>
              <Text className="text-zinc-700">{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
