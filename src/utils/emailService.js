import { trackLeadSubmission } from "@/lib/analytics";

// High-reliability email delivery service for Mahntrix Technologies
export const RECIPIENT_EMAIL = "infomahntrix@gmail.com";

export const sendContactEmail = async (formData) => {
  try {
    // 1. Try local Next.js API route first
    try {
      const apiResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        trackLeadSubmission({
          form_id: 'contact_form_service',
          form_name: 'Consultation Request',
          service_name: formData.service || formData.projectType || 'General Inquiry',
          budget_tier: formData.budget || 'Not specified',
        });
        return { success: true, data };
      }
    } catch (apiErr) {
      console.warn('Local /api/contact call failed, falling back to direct relay:', apiErr.message);
    }

    // 2. Direct FormSubmit HTTP Relay to infomahntrix@gmail.com
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name || '');
    formDataToSend.append('email', formData.email || '');
    formDataToSend.append('phone', formData.phone || '');
    formDataToSend.append('company', formData.company || '');
    formDataToSend.append('service', formData.service || formData.projectType || 'Consultation Request');
    formDataToSend.append('budget', formData.budget || 'Not specified');
    formDataToSend.append('message', formData.message || '');
    formDataToSend.append('_subject', `🚀 New Consultation: ${formData.name || 'Client'} [${formData.service || formData.projectType || 'Inquiry'}]`);
    formDataToSend.append('_replyto', formData.email || '');
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_template', 'table');

    const relayResponse = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json',
      },
    });

    const relayResult = await relayResponse.json().catch(() => ({}));

    if (relayResult.success === "true" || relayResult.success === true || relayResponse.ok) {
      trackLeadSubmission({
        form_id: 'contact_form_relay',
        form_name: 'Consultation Request',
        service_name: formData.service || formData.projectType || 'General Inquiry',
        budget_tier: formData.budget || 'Not specified',
      });
      return { success: true };
    } else {
      throw new Error(relayResult.message || 'Transmission failed');
    }
  } catch (error) {
    console.error('sendContactEmail error:', error);

    // Final emergency JSON POST attempt
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service || formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: `⚡ Consultation Request: ${formData.name}`,
          _replyto: formData.email,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        return { success: true };
      }
    } catch (e) {
      console.error('Final emergency relay error:', e);
    }

    return { success: false, error: error.message };
  }
};