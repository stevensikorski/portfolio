import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailFormProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function EmailForm({ name, email, subject, message }: EmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-zinc-800">
          <Container>
            <Section className="bg-white my-10 px-10 py-4">
              <Heading className="leading-tight">{subject}</Heading>
              <Text className="text-zinc-700" style={{ whiteSpace: "pre-line" }}>
                {message}
              </Text>
              <Hr />
              <Text className="text-zinc-700">{name}</Text>
              <Text className="text-zinc-700">The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
