import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink, formatPhoneLink } from "@/lib/utils";

const FOOTER_LINKS = {
  services: [
    { label: "Buy Used Cars", href: "/buy" },
    { label: "Sell Your Car", href: "/sell" },
    { label: "Car Valuation", href: "/valuation" },
    { label: "Car Exchange", href: "/exchange" },
    { label: "Finance / EMI", href: "/finance" },
    { label: "Book Test Drive", href: "/test-drive" },
  ],
  company: [
    { label: "About First Motors", href: "/about" },
    { label: "Why First Motors", href: "/why-first-motors" },
    { label: "Quality Check", href: "/inspection" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  brands: [
    { label: "Maruti Suzuki", href: "/buy?brand=maruti-suzuki" },
    { label: "Hyundai", href: "/buy?brand=hyundai" },
    { label: "Tata", href: "/buy?brand=tata" },
    { label: "Honda", href: "/buy?brand=honda" },
    { label: "Toyota", href: "/buy?brand=toyota" },
    { label: "Kia", href: "/buy?brand=kia" },
    { label: "Mahindra", href: "/buy?brand=mahindra" },
    { label: "Volkswagen", href: "/buy?brand=volkswagen" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  const whatsappLink = formatWhatsAppLink(
    SITE_CONFIG.whatsapp,
    WHATSAPP_MESSAGES.general
  );

  return (
    <footer style={{ background: "var(--color-navy-950)", color: "#d1d5db" }}>
      {/* Main Footer */}
      <div className="container-fm py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-white.png"
                alt="First Motors Official Logo"
                width={170}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              Trusted Pre-Owned Cars. Transparent Deals. Easy Ownership.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <div className="space-y-1 text-sm">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Direct Contacts</p>
                <div className="flex flex-col gap-1.5 pt-1">
                  <a
                    href="tel:+918267871486"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <Phone size={14} className="text-red-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Shariq Ansari:</span>
                    <span className="text-gray-300">82678 71486</span>
                  </a>
                  <a
                    href="tel:+919953950721"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <Phone size={14} className="text-red-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Shamir Khan:</span>
                    <span className="text-gray-300">99539 50721</span>
                  </a>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors group pt-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp: 82678 71486 / 99539 50721</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
              >
                <Mail size={14} className="flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-sm pt-1">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-red-400" />
                <span style={{ color: "#d1d5db" }}>{SITE_CONFIG.address.full}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "#1a2a50" }}
                  aria-label="First Motors on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-pink-400" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              )}
              {SITE_CONFIG.social.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "#1a2a50" }}
                  aria-label="First Motors on Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-400" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {SITE_CONFIG.social.youtube && (
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "#1a2a50" }}
                  aria-label="First Motors on YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-red-400" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
                Business Hours
              </h4>
              <div className="space-y-1 text-sm" style={{ color: "#9ca3af" }}>
                <p className="text-white font-medium">Open All 7 Days</p>
                <p>Mon – Sun: 9:30 AM – 7:30 PM</p>
              </div>
            </div>
          </div>

          {/* Popular Brands */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Popular Brands
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_LINKS.brands.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Map Link */}
            {SITE_CONFIG.address.googleMapsUrl && (
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MapPin size={14} />
                Get Directions
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "#1a2a50" }}
      >
        <div className="container-fm py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            © {new Date().getFullYear()} First Motors. All rights reserved.
          </p>

          {/* Centered stylish attribution */}
          <div className="text-xs font-medium" style={{ color: "#9ca3af" }}>
            Designed &amp; Developed by{" "}
            <a
              href="https://inboxcrew.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-all duration-200 hover:text-red-400 inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-500/10 shadow-sm"
            >
              InboxCrew
            </a>
          </div>

          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs hover:text-white transition-colors"
                style={{ color: "#9ca3af" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
