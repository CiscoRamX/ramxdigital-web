// lib/contact.ts
interface ContactFormData {
  name: string;
  email: string;
  business: string;
  budget: string;
  message: string;
  hp?: string; // honeypot
  captcha_token?: string; // opcional para reCAPTCHA
}

// Configuración del webhook de n8n
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n-n8n.bsdhjo.easypanel.host/webhook/contact-form';

export async function submitContact(data: ContactFormData): Promise<void> {
  try {
    const payload = {
      ...data,
      source: 'website',
      timestamp: new Date().toISOString()
    };

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    let result;
    try {
      result = await response.json();
    } catch (e) {
      result = { success: response.ok };
    }

    if (!response.ok) {
      throw new Error(result.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    // Si n8n responde con "Workflow was started", considerarlo éxito
    if (result.message === 'Workflow was started') {
      return { success: true, message: 'Message sent successfully' };
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
