require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: ['https://ramxdigital.com', 'https://www.ramxdigital.com', 'http://localhost:3000', 'http://localhost:3001'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Environment variables
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'cisco@ramxdigital.com';

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token) {
  if (!RECAPTCHA_SECRET_KEY || !token) return { success: true }; // Skip if not configured

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    });

    const data = await response.json();
    return {
      success: data.success && data.score >= 0.5,
      score: data.score
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'reCAPTCHA verification failed' };
  }
}

// Validate form data
function validateFormData(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Honeypot check
  if (data.hp) {
    errors.push('Suspicious activity detected');
  }

  return errors;
}

// Send notification email to team
async function sendTeamNotification(formData) {
  // Format project types array if it exists
  const projectTypesFormatted = Array.isArray(formData.projectTypes)
    ? formData.projectTypes.join(', ')
    : (formData.projectTypes || 'Not specified');

  // Calculate lead score based on budget and project complexity
  const getLeadScore = () => {
    if (formData.budget?.includes('10k+') || formData.budget?.includes('15k+')) return '🔥 HIGH VALUE';
    if (formData.budget?.includes('5k-10k') || formData.budget?.includes('3k-5k')) return '⭐ QUALIFIED';
    return '💡 POTENTIAL';
  };

  const emailContent = `
🚀 ${getLeadScore()} LEAD RECEIVED!

👤 CLIENT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Business: ${formData.business || 'Not specified'}
• Industry: ${formData.industry || 'Not specified'}
• Current Website: ${formData.currentWebsite || 'None mentioned'}

💼 PROJECT SCOPE:
• Services Needed: ${projectTypesFormatted}
• Budget Range: ${formData.budget || 'Not specified'}
• Timeline: ${formData.timeline || 'Not specified'}
• Care Plan Interest: ${formData.carePlan || 'Not mentioned'}

🎯 PROJECT VISION:
• Main Goals: ${formData.goals || 'Not specified'}
• Target Audience: ${formData.targetAudience || 'Not specified'}
• Design Inspiration: ${formData.designInspiration || 'None provided'}
• Special Requirements: ${formData.specialRequirements || 'None mentioned'}

💬 PROJECT DESCRIPTION:
${formData.message}

📊 SUBMISSION DETAILS:
• Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
• Source: Website Contact Wizard
• IP Address: ${formData.ip || 'Unknown'}
• Lead Quality: ${getLeadScore()}

---
💼 RamXDigital - Advanced Lead Management System
🌐 ramxdigital.com | 📧 Response required within 4 hours
  `;

  const budgetLabel = formData.budget ? ` - ${formData.budget}` : '';
  const companyLabel = formData.business || '';
  const servicesLabel = Array.isArray(formData.projectTypes)
    ? formData.projectTypes.slice(0, 2).join(', ')
    : (formData.projectTypes || 'Web Project');

  // Enhanced subject line with lead quality
  const leadQuality = formData.budget?.includes('10k+') || formData.budget?.includes('15k+')
    ? '🔥 HIGH VALUE'
    : '⭐ QUALIFIED';

  return transporter.sendMail({
    from: `"RamXDigital Lead System" <${SMTP_USER}>`,
    to: NOTIFICATION_EMAIL,
    subject: `${leadQuality} LEAD: ${formData.name} ${companyLabel ? `(${companyLabel})` : ''} - ${servicesLabel}${budgetLabel}`,
    text: emailContent,
    replyTo: formData.email
  });
}

// Send auto-response to client
async function sendAutoResponse(formData) {
  // Personalise based on project types
  const projectTypes = formData.projectTypes || '';
  const isMaintenanceInterested = projectTypes.includes('maintenance');
  const isSEOInterested = projectTypes.includes('seo');
  const isNewWebsite = projectTypes.includes('new-website') || projectTypes.includes('redesign');

  let personalizedContent = '';
  if (isNewWebsite) {
    personalizedContent = `

🌟 EXCITING PROJECT AHEAD!
I can see you're looking at ${projectTypes.includes('new-website') ? 'a new website' : 'a website redesign'}. Based on your budget range (${formData.budget}), I've got some brilliant ideas that could work perfectly for your ${formData.industry || 'business'}.`;
  }

  if (isMaintenanceInterested) {
    personalizedContent += `

🛡️ SMART THINKING ON MAINTENANCE!
You've shown interest in our Care Plans - that's forward-thinking! Proper website maintenance is crucial for ${formData.industry || 'any business'}, and our Care ${formData.carePlan || 'plans'} could be perfect for keeping your site secure and optimised.`;
  }

  if (isSEOInterested) {
    personalizedContent += `

📈 SEO & PERFORMANCE FOCUS!
Great to see you're thinking about SEO! We're actually developing an advanced SEO monitoring platform that will give you detailed insights into your website's performance. This could be a game-changer for your ${formData.industry || 'business'}.`;
  }

  const emailContent = `
Hello ${formData.name},

Thank you for taking the time to complete our detailed project questionnaire! 🚀

I've just reviewed your submission for ${formData.business || formData.company || 'your project'}, and I'm excited about the possibilities.${personalizedContent}

📋 WHAT HAPPENS NEXT:
1. I'll personally review your project requirements (${formData.timeline})
2. Prepare a tailored proposal based on your goals
3. Send you a comprehensive quote within 4 hours (UK business hours)
4. Schedule a strategy call to discuss your vision in detail

💡 YOUR PROJECT SUMMARY:
• Project Type: ${projectTypes}
• Budget Range: ${formData.budget}
• Timeline: ${formData.timeline}
• Main Goals: ${formData.goals || 'To be discussed'}

🚀 Can't wait for our response?
Book a 30-minute strategy call directly:
https://calendly.com/cisco-ramxdigital/30min

Looking forward to helping transform your digital presence!

Best regards,
Cisco Ramos
Founder & Lead Developer
RamXDigital

---
💼 RamXDigital - Bespoke Web Solutions
🌐 ramxdigital.com | 📧 cisco@ramxdigital.com
🔜 SEO Platform: seo.ramxdigital.com (launching soon!)

This is an automated response, but I personally read and respond to every enquiry.
  `;

  return transporter.sendMail({
    from: `"Cisco Ramos - RamXDigital" <${SMTP_USER}>`,
    to: formData.email,
    subject: "✅ We've received your message - RamXDigital",
    text: emailContent,
    replyTo: 'cisco@ramxdigital.com'
  });
}

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const formData = {
      ...req.body,
      ip: req.ip || req.connection.remoteAddress,
      timestamp: new Date().toISOString()
    };

    // Validate form data
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(formData.captcha_token);
    if (!recaptchaResult.success) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed',
        error: 'RECAPTCHA_FAILED'
      });
    }

    // Send emails in parallel
    const [teamEmail, clientEmail] = await Promise.all([
      sendTeamNotification(formData),
      sendAutoResponse(formData)
    ]);

    // Success response
    res.json({
      success: true,
      message: "Message sent successfully. We'll be in touch soon.",
      data: {
        name: formData.name,
        email: formData.email,
        timestamp: formData.timestamp
      }
    });

    console.log(`✅ Contact form submitted by ${formData.name} (${formData.email})`);

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: 'SERVER_ERROR'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Contact API server running on port ${PORT}`);
  console.log(`📧 SMTP configured: ${!!SMTP_HOST}`);
  console.log(`🔒 reCAPTCHA configured: ${!!RECAPTCHA_SECRET_KEY}`);
});

module.exports = app;