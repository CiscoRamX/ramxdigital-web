// src/lib/contact.ts
export type ContactPayload = {
  name: string;
  email: string;
  business?: string;
  budget?: string;
  message: string;
  hp?: string;              // honeypot
  captcha_token?: string;   // reservado para reCAPTCHA (Paso 2)
};

// Cambia automáticamente test/prod según el modo de Vite
const BASE = import.meta.env.DEV
  ? "https://n8n-n8n.bsdhjo.easypanel.host/webhook-test"
  : "https://n8n-n8n.bsdhjo.easypanel.host/webhook";

const ENDPOINT = `${BASE}/contacto`;

export async function submitContact(data: ContactPayload) {
  // Si el honeypot viene con contenido, lo tratamos como spam
  if (data.hp && data.hp.trim() !== "") {
    throw new Error("Spam detected.");
  }

  // Enviamos como x-www-form-urlencoded para evitar preflight
  const body = new URLSearchParams();
  body.set("name", data.name);
  body.set("email", data.email);
  if (data.business) body.set("business", data.business);
  if (data.budget) body.set("budget", data.budget);
  body.set("message", data.message);
  if (data.captcha_token) body.set("captcha_token", data.captcha_token);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }

  return true;
}

