// UiChemy Tagging Map - Component to Elementor Widget Mapping
// This frame documents how RamxDigital components should be exported to Elementor

export function UiChemyTaggingMap() {
  const componentMappings = [
    {
      component: "Header",
      elementorWidget: "Elementor Pro Nav Menu (or The Plus Nav if Pro not available)",
      notes: "Use site CSS variables for gradient CTAs"
    },
    {
      component: "CTAButton (Primary)",
      elementorWidget: "Elementor Button",
      notes: "Apply --accent-grad via site CSS custom properties"
    },
    {
      component: "CTAButton (Secondary)",
      elementorWidget: "Elementor Button",
      notes: "Border style with --accent color"
    },
    {
      component: "CTAButton (Tertiary)",
      elementorWidget: "Elementor Button",
      notes: "Text-only style with arrow icon"
    },
    {
      component: "SectionTitle (Display)",
      elementorWidget: "Elementor Heading",
      notes: "Use --text-display font size token"
    },
    {
      component: "SectionTitle (H1-H3)",
      elementorWidget: "Elementor Heading",
      notes: "Map to corresponding heading levels"
    },
    {
      component: "Body Text",
      elementorWidget: "Text Editor",
      notes: "Use Lexend font family"
    },
    {
      component: "IconCard",
      elementorWidget: "Icon Box",
      notes: "24px grid icons, --accent color"
    },
    {
      component: "PricingCard",
      elementorWidget: "Heading + Text + Button (or Price Table – Pro)",
      notes: "Most popular styling via CSS classes"
    },
    {
      component: "TestimonialCard",
      elementorWidget: "Testimonial widget",
      notes: "Include star row styling"
    },
    {
      component: "FAQItem",
      elementorWidget: "Accordion (or semantic <details> noted)",
      notes: "Ensure 44px+ hit area on mobile"
    },
    {
      component: "ProjectCard",
      elementorWidget: "Custom Post Type with featured image",
      notes: "Card hover effects via CSS"
    },
    {
      component: "ContactPage Forms",
      elementorWidget: "Elementor Form (Pro) or chosen form plugin",
      notes: "Style inputs with --bg and --muted border"
    },
    {
      component: "Footer Social Icons",
      elementorWidget: "Social Icons",
      notes: "Use brand colors"
    },
    {
      component: "Background Glow Effects",
      elementorWidget: "SVG assets",
      notes: "Export as individual SVG files for positioning"
    },
    {
      component: "Noise Texture",
      elementorWidget: "SVG assets",
      notes: "Background overlay at 2-3% opacity"
    }
  ];

  const cssVariables = [
    { token: "--accent-grad", css: "linear-gradient(90deg,#6EE7F9 0%, #A78BFA 100%)" },
    { token: "--accent-grad-hover", css: "linear-gradient(90deg,#22D3EE 0%, #8B5CF6 100%)" },
    { token: "--ring", css: "rgba(99,102,241,.35)" },
    { token: "--cta-text", css: "#0B0D12" },
    { token: "--text-display", css: "64px desktop, 40px mobile" },
    { token: "--text-overline", css: "12px Lexend 500, +4% letter-spacing" },
    { token: "--dur-1", css: "160ms" },
    { token: "--dur-2", css: "260ms" },
    { token: "--dur-3", css: "380ms" },
    { token: "--ease", css: "cubic-bezier(.21,.8,.35,1)" }
  ];

  const motionNotes = [
    "Button hover: scale 1.02 + glow ring (--ring)",
    "Card hover: translateY -4px + elevate to medium shadow",
    "Chip hover: translateY -2px",
    "Hero stagger: H1 → paragraph → CTAs → chips (80ms stagger)",
    "Service cards: slide-up sequential",
    "Pricing cards: float-in, 'Most popular' pulse border once",
    "Mobile: reduce motion (no parallax, simple fades/transforms)"
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* UICHEMY TAGGING MAP FRAME */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">UiChemy Tagging Map</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Component mappings for faithful Figma → Elementor export. 
          Use this reference to ensure proper widget selection and styling during export.
        </p>
      </div>

      {/* Component Mappings */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Component → Elementor Widget Mapping</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">RamxDigital Component</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Elementor Widget</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Implementation Notes</th>
              </tr>
            </thead>
            <tbody>
              {componentMappings.map((mapping, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 p-3 font-medium">{mapping.component}</td>
                  <td className="border border-gray-300 p-3">{mapping.elementorWidget}</td>
                  <td className="border border-gray-300 p-3 text-sm">{mapping.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CSS Variables */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Token → CSS Variable Mapping</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cssVariables.map((variable, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <code className="font-mono text-sm block mb-2 text-blue-600">{variable.token}</code>
              <div className="text-sm text-gray-700">{variable.css}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Motion Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Motion Implementation Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="space-y-2">
            {motionNotes.map((note, index) => (
              <li key={index} className="text-sm">
                <span className="text-yellow-800">•</span> {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Export Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Export Guidelines</h2>
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="font-semibold mb-2">SVG Assets</h3>
            <p className="text-sm">Export glow effects and noise textures as individual SVG files. Keep hero lightweight - no heavy video on first paint.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Responsive Breakpoints</h3>
            <p className="text-sm">Desktop: 1440px | Tablet: 768px | Mobile: 375px</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Typography Hierarchy</h3>
            <p className="text-sm">Space Grotesk (headings) | Lexend (body) | Maintain font-size tokens across breakpoints</p>
          </div>
        </div>
      </section>
    </div>
  );
}