import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | First Motors",
  description: "Privacy Policy for First Motors website — how we collect, use and protect your personal information.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/privacy-policy",
    title: "Privacy Policy | First Motors",
    description: "Privacy Policy for First Motors website.",
  },
};

// TODO: Have this reviewed by a qualified legal professional before going live.

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10">
          <h1 className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>Privacy Policy</h1>
          <p className="text-slate-400 mt-1 text-sm">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
        </div>
      </div>

      <div className="container-fm py-10">
        <div className="max-w-3xl mx-auto card p-8">
          <div
            className="mb-6 p-3 rounded-lg text-sm text-amber-800"
            style={{ background: "#fef9c3", border: "1px solid #fde68a" }}
          >
            ⚠ <strong>Note:</strong> This is a template privacy policy. Please have it reviewed by a qualified legal professional before publishing this website.
          </div>

          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>1. Introduction</h2>
              <p>First Motors (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use and safeguard information when you visit our website or contact us.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, phone number and email address provided through contact forms, test drive bookings, or valuation requests.</li>
                <li>Vehicle details provided when requesting a valuation or selling enquiry.</li>
                <li>Usage data such as pages visited, browser type and device information, collected automatically.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your enquiries about our vehicles or services.</li>
                <li>To arrange test drives or valuations you have requested.</li>
                <li>To improve our website and services.</li>
                <li>We do not sell your personal information to third parties.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>4. Data Storage and Security</h2>
              <p>We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>5. Cookies</h2>
              <p>Our website may use cookies to improve your browsing experience. You can adjust your browser settings to disable cookies, though some features may not function properly.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>6. Third-Party Links</h2>
              <p>Our website contains links to third-party services (such as Google Maps and WhatsApp). We are not responsible for the privacy practices of those services.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>7. Contact</h2>
              <p>For any privacy-related questions, please contact us through our <a href="/contact" className="underline">Contact page</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
