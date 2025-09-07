interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
        <h1 className="font-heading font-bold text-text mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-subtle mb-8">
            Last updated: September 7, 2025
          </p>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">1. Information We Collect</h2>
            <p className="text-subtle leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Fill out our contact form</li>
              <li>• Email us directly</li>
              <li>• Subscribe to our care plans</li>
              <li>• Request a consultation</li>
            </ul>
            
            <p className="text-subtle leading-relaxed mt-4">
              This may include your name, email address, business name, project details, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">2. How We Use Your Information</h2>
            <p className="text-subtle leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Respond to your inquiries and provide customer service</li>
              <li>• Deliver our web design and development services</li>
              <li>• Send you project updates and important communications</li>
              <li>• Improve our services and website</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">3. Information Sharing</h2>
            <p className="text-subtle leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• With your explicit consent</li>
              <li>• To trusted service providers who assist us in operating our business (such as payment processors)</li>
              <li>• When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">4. Data Security</h2>
            <p className="text-subtle leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">5. Cookies and Analytics</h2>
            <p className="text-subtle leading-relaxed mb-4">
              We use Google Analytics to understand how visitors interact with our website. This helps us improve our services and user experience. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
            </p>
            <p className="text-subtle leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">6. Your Rights</h2>
            <p className="text-subtle leading-relaxed mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Access the personal data we hold about you</li>
              <li>• Rectify inaccurate personal data</li>
              <li>• Erase your personal data in certain circumstances</li>
              <li>• Restrict processing of your personal data</li>
              <li>• Object to processing of your personal data</li>
              <li>• Data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">7. Data Retention</h2>
            <p className="text-subtle leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Project-related information is typically retained for 7 years for business and tax purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">8. Third-Party Services</h2>
            <p className="text-subtle leading-relaxed mb-4">
              Our website may integrate with third-party services such as:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Google Analytics for website analytics</li>
              <li>• Email service providers for communications</li>
              <li>• Payment processors for billing</li>
            </ul>
            <p className="text-subtle leading-relaxed mt-4">
              These services have their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">9. Changes to This Policy</h2>
            <p className="text-subtle leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">10. Contact Us</h2>
            <p className="text-subtle leading-relaxed mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="text-subtle">
              <p>Email: hello@ramxdigital.com</p>
              <p>Address: Devon, United Kingdom</p>
            </div>
          </section>

          <div className="border-t border-muted pt-8 mt-12">
            <p className="text-subtle text-sm">
              This privacy policy is compliant with UK GDPR and UK data protection laws. RamxDigital is committed to protecting your privacy and handling your data responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}