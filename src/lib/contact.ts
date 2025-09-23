// lib/contact.ts
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  company?: string;
  industry?: string;
  currentWebsite?: string;
  projectTypes?: string;
  budget: string;
  timeline?: string;
  carePlan?: string;
  message: string;
  goals?: string;
  targetAudience?: string;
  designInspiration?: string;
  specialRequirements?: string;
  hp?: string; // honeypot
  captcha_token?: string; // opcional para reCAPTCHA
}

// Configuración de la API de contacto
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || 'https://api.ramxdigital.com/api/contact';

export async function submitContact(data: ContactFormData): Promise<void> {
  try {
    const payload = {
      ...data,
      source: 'website',
      timestamp: new Date().toISOString()
    };

    const response = await fetch(CONTACT_API_URL, {
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

    // La API ya responde con el formato correcto

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
