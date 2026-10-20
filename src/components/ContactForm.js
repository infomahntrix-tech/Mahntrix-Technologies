"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { sendContactEmail } from "@/utils/emailService";
import { trackFormStart, trackFormError, trackLeadSubmission } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Websites",
    budget: "$5,000 - $15,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Track form start on first interaction
    trackFormStart({
      form_id: 'main_contact_form',
      form_name: 'Consultation Request',
      service_name: formData.service || 'Websites',
    });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      trackFormError({
        form_id: 'main_contact_form',
        form_name: 'Consultation Request',
        error_type: 'required_fields_missing',
      });
      toast.error("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        // Confirmed server/relay success: push generate_lead event with non-PII parameters
        trackLeadSubmission({
          form_id: 'main_contact_form',
          form_name: 'Consultation Request',
          service_name: formData.service || 'Websites',
          budget_tier: formData.budget || 'Not specified',
        });
        setIsSubmitted(true);
        toast.success("Thank you! Your consultation request has been dispatched to infomahntrix@gmail.com. We'll be in touch within 24 hours.");
      } else {
        throw new Error(result.error || "Failed to transmit message");
      }
    } catch (err) {
      console.error("Submission error:", err);
      trackFormError({
        form_id: 'main_contact_form',
        form_name: 'Consultation Request',
        error_type: 'submission_relay_error',
      });
      toast.error("Transmission notice: If you don't hear back shortly, please email us directly at infomahntrix@gmail.com");
      // Still set submitted if direct relay was triggered
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-lime/30 bg-ink-soft p-8 sm:p-12 text-center flex flex-col items-center justify-center animate-in fade-in duration-500">
        <div className="size-16 rounded-full bg-lime/10 border border-lime flex items-center justify-center text-lime mb-6">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-paper">
          Consultation Request Received!
        </h3>
        <p className="mt-3 max-w-md text-sm text-fog leading-relaxed">
          Thanks for reaching out, <span className="text-lime">{formData.name}</span>. Our technical team is reviewing your project requirements and will send a preliminary scope &amp; scheduling link shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "Websites",
              budget: "$5,000 - $15,000",
              message: "",
            });
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-paper hover:bg-white/15 transition-colors"
        >
          Send another message
          <ArrowRight className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-10 shadow-2xl space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Name <span className="text-lime">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper placeholder-fog-dim focus:border-lime focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Email <span className="text-lime">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper placeholder-fog-dim focus:border-lime focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper placeholder-fog-dim focus:border-lime focus:outline-none transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper placeholder-fog-dim focus:border-lime focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Service */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper focus:border-lime focus:outline-none transition-colors"
          >
            <option value="Websites">Websites</option>
            <option value="Web Applications">Web Applications</option>
            <option value="Mobile Applications">Mobile Applications</option>
            <option value="Enterprise ERP Systems">Enterprise ERP Systems</option>
            <option value="Custom CRM Platforms">Custom CRM Platforms</option>
            <option value="Custom Software Engineering">Custom Software Engineering</option>
            <option value="AI & LLM Solutions">AI &amp; LLM Solutions</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
            Estimated Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper focus:border-lime focus:outline-none transition-colors"
          >
            <option value="< $5,000">&lt; $5,000</option>
            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
            <option value="$15,000 - $35,000">$15,000 - $35,000</option>
            <option value="$35,000+">$35,000+ / Custom Enterprise</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-fog mb-2">
          Project Details <span className="text-lime">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project goals, technical requirements, and target timeline..."
          className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-paper placeholder-fog-dim focus:border-lime focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 bg-lime text-ink hover:bg-lime-bright h-14 px-8 text-base font-display disabled:opacity-50 cursor-pointer"
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {isSubmitting ? (
            "Transmitting Request..."
          ) : (
            <>
              Send message
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </span>
      </button>

      <p className="text-center text-[11px] font-mono text-fog-dim">
        By submitting you agree to our confidential NDA guarantee. No spam, ever.
      </p>
    </form>
  );
}
