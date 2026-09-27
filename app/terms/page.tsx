import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | First Motors",
  description: "Terms and Conditions for use of the First Motors website.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/terms",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/terms",
    title: "Terms & Conditions | First Motors",
    description: "Terms and Conditions for use of the First Motors website.",
  },
};

// TODO: Have this reviewed by a qualified legal professional before going live.

export default function TermsPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10">
          <h1 className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>Terms &amp; Conditions</h1>
          <p className="text-slate-400 mt-1 text-sm">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
        </div>
      </div>

      <div className="container-fm py-10">
        <div className="max-w-3xl mx-auto card p-8">
          <div className="mb-6 p-3 rounded-lg text-sm text-amber-800" style={{ background: "#fef9c3", border: "1px solid #fde68a" }}>
            ⚠ <strong>Note:</strong> This is a template. Have it reviewed by a qualified legal professional before publishing.
          </div>

          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>1. Use of Website</h2>
              <p>By using the First Motors website, you agree to use it for lawful purposes only. You must not use this website in any way that causes damage to the website or impairs its availability.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>2. Vehicle Information</h2>
              <p>Vehicle information displayed on this website, including prices, specifications and availability, is provided for informational purposes only. Prices and availability are subject to change without notice. Please contact us directly to confirm current availability and pricing.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>3. No Warranties</h2>
              <p>This website is provided &quot;as is&quot; without any warranties of any kind. First Motors does not warrant that the information on this website is accurate, complete or up to date at all times.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>4. Finance and EMI Information</h2>
              <p>EMI calculations shown on this website are indicative estimates only. Actual interest rates, loan approvals and terms are determined by lending institutions and are subject to their eligibility criteria. First Motors does not guarantee any finance approvals.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>5. Limitation of Liability</h2>
              <p>First Motors shall not be liable for any loss or damage arising from your use of this website or reliance on any information displayed on it.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>6. Changes to Terms</h2>
              <p>First Motors reserves the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>7. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in the city where First Motors is registered.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>8. Contact</h2>
              <p>For any questions regarding these terms, please contact us through our <a href="/contact" className="underline">Contact page</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
