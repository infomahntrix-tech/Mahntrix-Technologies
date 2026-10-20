// Production-Ready Analytics Data Layer Utility for Mahntrix Technologies
// Google Tag Manager -> Google Analytics 4

// Explicit PII Blacklist to strictly prevent accidental data leakage
const PII_KEYS = new Set([
  'name',
  'fullname',
  'full_name',
  'firstname',
  'first_name',
  'lastname',
  'last_name',
  'email',
  'email_address',
  'phone',
  'phone_number',
  'mobile',
  'tel',
  'message',
  'message_text',
  'comment',
  'password',
  'token',
  'address',
  'street',
  'zip',
  'postal_code',
]);

/**
 * Sanitizes an object to guarantee no personally identifiable information (PII)
 * is passed into window.dataLayer.
 */
function sanitizeEventPayload(payload) {
  if (!payload || typeof payload !== 'object') return {};

  const clean = {};
  for (const [key, value] of Object.entries(payload)) {
    const lowerKey = key.toLowerCase();
    if (PII_KEYS.has(lowerKey)) {
      continue; // Skip any sensitive fields
    }
    // Only allow primitive types (string, number, boolean)
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      clean[key] = value;
    }
  }
  return clean;
}

/**
 * Push an event to window.dataLayer safely
 */
export function pushToDataLayer(eventPayload) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const sanitized = sanitizeEventPayload(eventPayload);
  
  // Attach standard page context
  const fullPayload = {
    ...sanitized,
    page_path: window.location.pathname,
    page_title: document.title,
  };

  window.dataLayer.push(fullPayload);

  if (process.env.NODE_ENV === 'development') {
    console.log('[GA4 dataLayer event]:', fullPayload.event, fullPayload);
  }
}

/**
 * 1. Track Successful Lead Generation (generate_lead)
 * Fired ONLY after confirmed server / relay success of an actual enquiry form.
 */
let lastLeadTimestamp = 0;
let lastLeadPayloadKey = '';

export function trackLeadSubmission({
  form_id = 'contact_form',
  form_name = 'Consultation Request',
  service_name = 'General Inquiry',
  budget_tier = 'Not specified',
} = {}) {
  const now = Date.now();
  const payloadKey = `${form_id}-${service_name}`;
  // Deduplicate rapid duplicate submissions within 3 seconds
  if (payloadKey === lastLeadPayloadKey && now - lastLeadTimestamp < 3000) {
    return;
  }
  lastLeadTimestamp = now;
  lastLeadPayloadKey = payloadKey;

  pushToDataLayer({
    event: 'generate_lead',
    form_id,
    form_name,
    service_name,
    budget_tier,
    currency: 'USD',
  });
}

/**
 * 2. Track Form Start (form_start)
 * Fired once when a user first interacts with an enquiry form.
 */
const formStartCache = new Set();

export function trackFormStart({
  form_id = 'contact_form',
  form_name = 'Consultation Request',
  service_name = 'General Inquiry',
} = {}) {
  // Prevent duplicate form_start events within the same page session
  if (formStartCache.has(form_id)) return;
  formStartCache.add(form_id);

  pushToDataLayer({
    event: 'form_start',
    form_id,
    form_name,
    service_name,
  });
}

/**
 * 3. Track Meaningful Form Error (form_error)
 * Fired when client validation rejects submission.
 */
export function trackFormError({
  form_id = 'contact_form',
  form_name = 'Consultation Request',
  error_type = 'validation_error',
} = {}) {
  pushToDataLayer({
    event: 'form_error',
    form_id,
    form_name,
    error_type,
  });
}

/**
 * 4. Track Direct Contact Click (contact_click)
 * Fired for WhatsApp, Telephone, and Email link clicks.
 */
let lastClickTimestamp = 0;
let lastClickMethod = '';

export function trackContactClick({
  contact_method, // 'whatsapp' | 'phone' | 'email'
  click_location = 'page_body',
  destination = '',
} = {}) {
  const now = Date.now();
  const key = `${contact_method}-${click_location}`;
  // Prevent duplicate clicks on rapid double-clicking within 1.2 seconds
  if (lastClickMethod === key && now - lastClickTimestamp < 1200) {
    return;
  }
  lastClickTimestamp = now;
  lastClickMethod = key;

  pushToDataLayer({
    event: 'contact_click',
    contact_method,
    click_location,
    destination: destination || undefined,
  });
}

/**
 * 5. Track High-Value CTA Clicks (cta_click)
 * Fired for primary booking/consultation buttons before navigating.
 */
let lastCtaTimestamp = 0;
let lastCtaName = '';

export function trackCtaClick({
  cta_name = 'Book consultation',
  cta_location = 'banner',
  destination_url = '/contact/',
  service_name = '',
} = {}) {
  const now = Date.now();
  if (lastCtaName === `${cta_name}-${cta_location}` && now - lastCtaTimestamp < 1200) {
    return;
  }
  lastCtaTimestamp = now;
  lastCtaName = `${cta_name}-${cta_location}`;

  pushToDataLayer({
    event: 'cta_click',
    cta_name,
    cta_location,
    destination_url,
    service_name: service_name || undefined,
  });
}

/**
 * 6. Global delegate listener to automatically track any tel:, mailto:, or WhatsApp links
 * site-wide without needing manual props on every new element.
 */
export function setupGlobalAnalyticsListeners() {
  if (typeof window === 'undefined') return;

  const handleDocumentClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';

    // Check if element was already explicitly tracked to prevent duplicate event
    if (link.dataset.analyticsTracked === 'true') {
      return;
    }

    // Check for explicit data-analytics-cta attribute on clicked element or parent link
    const ctaEl = link.closest('[data-analytics-cta]');
    if (ctaEl) {
      trackCtaClick({
        cta_name: ctaEl.dataset.analyticsCta || 'CTA Click',
        cta_location: ctaEl.dataset.analyticsLocation || 'page_cta',
        destination_url: ctaEl.getAttribute('href') || '/contact/',
      });
      return;
    }

    if (href.startsWith('mailto:')) {
      trackContactClick({
        contact_method: 'email',
        click_location: link.closest('footer') ? 'footer' : 'page_body',
        destination: href.replace('mailto:', ''),
      });
    } else if (href.startsWith('tel:')) {
      trackContactClick({
        contact_method: 'phone',
        click_location: link.closest('footer') ? 'footer' : 'page_body',
        destination: href.replace('tel:', ''),
      });
    } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackContactClick({
        contact_method: 'whatsapp',
        click_location: link.closest('footer') ? 'footer' : 'page_body',
      });
    }
  };

  document.addEventListener('click', handleDocumentClick, { capture: true, passive: true });
}
