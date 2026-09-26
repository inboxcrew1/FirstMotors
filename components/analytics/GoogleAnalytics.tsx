"use client";
import Script from "next/script";

// Set NEXT_PUBLIC_GA_ID in .env.local with your GA4 Measurement ID (format: G-XXXXXXXXXX)
// Get it from: analytics.google.com -> Admin -> Data Streams -> Measurement ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  const initScript = [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag(\"js\",new Date());",
    "gtag(\"config\",\"" + GA_ID + "\",{page_path:window.location.pathname});",
  ].join("");
  return (
    <>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
    </>
  );
}