"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink, formatPhoneLink } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Buy Cars", href: "/buy" },
  { label: "Sell Your Car", href: "/sell" },
  { label: "Exchange", href: "/exchange" },
  { label: "Finance", href: "/finance" },
  {
    label: "About",
    children: [
      { label: "About First Motors", href: "/about" },
      { label: "Why First Motors", href: "/why-first-motors" },
      { label: "Quality Check", href: "/inspection" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const whatsappLink = formatWhatsAppLink(
    SITE_CONFIG.whatsapp,
    WHATSAPP_MESSAGES.general
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2.5"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container-fm flex items-center justify-between gap-4">
          {/* Official Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="First Motors Home"
          >
            <Image
              src="/logo.png"
              alt="First Motors Official Logo"
              width={180}
              height={58}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 hover:text-navy-900 transition-colors">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-navy-900 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50 hover:text-navy-900"
                  }`}
                  style={{
                    color: pathname === link.href ? "var(--color-navy-900)" : undefined,
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={formatPhoneLink(SITE_CONFIG.phone)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Call First Motors"
            >
              <Phone size={15} />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm px-4 py-2"
              aria-label="WhatsApp First Motors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/buy" className="btn btn-primary text-sm px-5 py-2.5">
              Browse Cars
            </Link>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={formatPhoneLink(SITE_CONFIG.phone)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Call First Motors"
            >
              <Phone size={20} style={{ color: "var(--color-navy-900)" }} />
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X size={22} style={{ color: "var(--color-navy-900)" }} />
              ) : (
                <Menu size={22} style={{ color: "var(--color-navy-900)" }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <Image
                src="/logo.png"
                alt="First Motors"
                width={140}
                height={45}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-4 px-4">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 pt-4 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`flex items-center px-3 py-3 rounded-lg font-semibold transition-colors ${
                      pathname === link.href
                        ? "bg-blue-50 text-blue-900"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Dealership Contacts */}
            <div className="px-4 py-3 border-t bg-slate-50 space-y-1.5" style={{ borderColor: "#e5e7eb" }}>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Direct Dealership Contacts</p>
              <div className="space-y-1 text-xs">
                <a href="tel:+918267871486" className="flex items-center justify-between text-gray-700 font-semibold hover:text-navy-900">
                  <span>Sharif Ansari</span>
                  <span className="text-gray-500 font-medium">82678 71486</span>
                </a>
                <a href="tel:+919953950721" className="flex items-center justify-between text-gray-700 font-semibold hover:text-navy-900">
                  <span>Shamir Khan</span>
                  <span className="text-gray-500 font-medium">99539 50721</span>
                </a>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="p-4 border-t space-y-3" style={{ borderColor: "#e5e7eb" }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link href="/buy" className="btn btn-primary w-full">
                Browse Cars
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[68px]" aria-hidden="true" />
    </>
  );
}
