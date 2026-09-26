// =============================================================================
// FIRST MOTORS — GA4 EVENT TRACKING HELPERS
// Call these on user interactions to track leads in Google Analytics.
// =============================================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

function sendEvent(eventName: string, params?: EventParams) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackPhoneClick(contactName?: string) {
  sendEvent('phone_click', { event_category: 'Lead', event_label: contactName || 'General' });
}

export function trackWhatsAppClick(context?: string) {
  sendEvent('whatsapp_click', { event_category: 'Lead', event_label: context || 'General' });
}

export function trackDirectionsClick() {
  sendEvent('directions_click', { event_category: 'Engagement', event_label: 'Google Maps' });
}

export function trackGenerateLead(carName?: string, stockId?: string) {
  sendEvent('generate_lead', { event_category: 'Lead', event_label: carName || 'General Enquiry', stock_id: stockId });
}

export function trackCarView(carName: string, price: number, brand: string) {
  sendEvent('view_item', { event_category: 'Inventory', event_label: carName, currency: 'INR', value: price * 100000, item_brand: brand, item_name: carName });
}
