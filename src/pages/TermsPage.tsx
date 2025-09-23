interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
        <h1 className="font-heading font-bold text-text mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-subtle mb-8">
            Last updated: September 7, 2025
          </p>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">1. Agreement to Terms</h2>
            <p className="text-subtle leading-relaxed">
              By accessing and using RamxDigital's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">2. Description of Services</h2>
            <p className="text-subtle leading-relaxed mb-4">
              RamxDigital provides:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Bespoke web design and development services</li>
              <li>• Custom WordPress development</li>
              <li>• SureCart ecommerce solutions</li>
              <li>• Website care and maintenance plans</li>
              <li>• SEO optimization services</li>
              <li>• Digital consultation and strategy</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">3. Project Process and Payments</h2>
            
            <h3 className="font-heading font-bold text-text mb-3 mt-6">3.1 Project Initiation</h3>
            <p className="text-subtle leading-relaxed mb-4">
              All projects begin with a detailed proposal outlining scope, timeline, and costs. Projects commence upon signed agreement and initial payment.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">3.2 Payment Terms</h3>
            <ul className="text-subtle space-y-2 ml-6 mb-4">
              <li>• 50% deposit required to begin work</li>
              <li>• Final 50% due upon project completion</li>
              <li>• Care plans billed monthly or annually</li>
              <li>• Invoices payable within 14 days</li>
              <li>• Late payments may incur 1.5% monthly interest</li>
            </ul>

            <h3 className="font-heading font-bold text-text mb-3">3.3 Project Changes</h3>
            <p className="text-subtle leading-relaxed">
              Changes to agreed project scope will be documented and may incur additional costs. We'll provide written estimates for any scope changes before proceeding.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">4. Intellectual Property and Ownership</h2>
            
            <h3 className="font-heading font-bold text-text mb-3 mt-6">4.1 Client Ownership</h3>
            <p className="text-subtle leading-relaxed mb-4">
              Upon full payment, clients own all custom code, designs, and content created specifically for their project. This includes WordPress themes, custom functionality, and design assets.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">4.2 Third-Party Components</h3>
            <p className="text-subtle leading-relaxed mb-4">
              Third-party plugins, themes, or services remain subject to their respective licenses. We'll clearly identify any third-party components used in your project.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">4.3 Portfolio Rights</h3>
            <p className="text-subtle leading-relaxed">
              We reserve the right to showcase completed projects in our portfolio and marketing materials, unless otherwise agreed in writing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">5. Care Plans and Ongoing Services</h2>
            
            <h3 className="font-heading font-bold text-text mb-3 mt-6">5.1 Service Level</h3>
            <p className="text-subtle leading-relaxed mb-4">
              Care plans include the services specified in your chosen plan. Response times and included hours are as outlined in your plan details.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">5.2 Cancellation</h3>
            <p className="text-subtle leading-relaxed mb-4">
              Care plans can be cancelled with 30 days written notice. Annual plans can be cancelled at renewal. No refunds for partial months.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">5.3 Service Limitations</h3>
            <p className="text-subtle leading-relaxed">
              Care plans cover maintenance and support as specified. Major developments, redesigns, or extensive modifications require separate project agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">6. Warranties and Disclaimers</h2>
            
            <h3 className="font-heading font-bold text-text mb-3 mt-6">6.1 Service Warranty</h3>
            <p className="text-subtle leading-relaxed mb-4">
              We warrant that services will be performed with professional skill and care. We'll correct any defects in our work at no charge for 30 days after project completion.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">6.2 Third-Party Disclaimers</h3>
            <p className="text-subtle leading-relaxed mb-4">
              We cannot warrant the performance of third-party services, plugins, or hosting providers. We'll assist with integration but cannot guarantee third-party functionality.
            </p>

            <h3 className="font-heading font-bold text-text mb-3">6.3 Business Results</h3>
            <p className="text-subtle leading-relaxed">
              While we design for optimal performance and conversion, we cannot guarantee specific business results, traffic levels, or revenue outcomes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">7. Limitation of Liability</h2>
            <p className="text-subtle leading-relaxed mb-4">
              Our total liability for any claim related to our services shall not exceed the amount paid for the specific services giving rise to the claim. We are not liable for:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Indirect, incidental, or consequential damages</li>
              <li>• Loss of profits, data, or business opportunities</li>
              <li>• Third-party service failures or security breaches</li>
              <li>• Client's failure to maintain backups</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">8. Client Responsibilities</h2>
            <p className="text-subtle leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Providing accurate project requirements and content</li>
              <li>• Timely feedback and approvals</li>
              <li>• Maintaining secure hosting and regular backups</li>
              <li>• Keeping software and plugins updated (unless covered by care plan)</li>
              <li>• Providing necessary access credentials and permissions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">9. Termination</h2>
            <p className="text-subtle leading-relaxed mb-4">
              Either party may terminate services with written notice. Upon termination:
            </p>
            <ul className="text-subtle space-y-2 ml-6">
              <li>• Client pays for all work completed to date</li>
              <li>• We'll provide completed deliverables upon payment</li>
              <li>• Ongoing care plans terminate at the end of the billing period</li>
              <li>• Both parties return confidential information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">10. Confidentiality</h2>
            <p className="text-subtle leading-relaxed">
              We maintain strict confidentiality of all client information and business details. We will not disclose confidential information except as required by law or with written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">11. Force Majeure</h2>
            <p className="text-subtle leading-relaxed">
              We are not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, government actions, internet outages, or third-party service failures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">12. Governing Law</h2>
            <p className="text-subtle leading-relaxed">
              These terms are governed by English law and subject to the jurisdiction of English courts. Any disputes will be resolved through good faith negotiation or mediation before litigation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">13. Changes to Terms</h2>
            <p className="text-subtle leading-relaxed">
              We may update these terms occasionally. Significant changes will be communicated via email. Continued use of our services after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading font-bold text-text mb-4">14. Contact Information</h2>
            <p className="text-subtle leading-relaxed mb-4">
              For questions about these terms, please contact:
            </p>
            <div className="text-subtle">
              <p>RamxDigital</p>
              <p>Email: hello@ramxdigital.com</p>
              <p>Location: Devon, United Kingdom</p>
            </div>
          </section>

          <div className="border-t border-muted pt-8 mt-12">
            <p className="text-subtle text-sm">
              These terms constitute the entire agreement between RamxDigital and the client regarding the use of our services. Any modifications must be agreed to in writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}