import { Mail, Phone, MapPin, Calendar, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us — Book a Free Consultation | Mahntrix Technologies",
  description: "Get in touch with Mahntrix Technologies. Book a free 30-minute strategy consultation for web applications, mobile apps, enterprise ERP, and AI solutions.",
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/919575932050?text=Hello%20Mahntrix%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32 pb-24">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
          <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
            GET IN TOUCH
          </span>
        </div>
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          Let&apos;s build something <span className="text-lime">amazing together.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fog leading-relaxed font-sans">
          Have an upcoming web application, cross-platform mobile app, custom enterprise ERP/CRM, or AI automation project? We&apos;d love to hear about it.
        </p>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Left Column: Direct Channels & Booking */}
          <div className="space-y-8">
            {/* Direct Contact Cards */}
            <div className="rounded-3xl border border-white/10 bg-ink-soft p-8 space-y-6">
              <div>
                <p className="eyebrow text-fog-dim mb-1">Email</p>
                <a
                  href="mailto:infomahntrix@gmail.com"
                  className="flex items-center gap-3 text-lg font-display font-semibold text-paper hover:text-lime transition-colors group"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 group-hover:bg-lime/10 text-lime">
                    <Mail className="size-5" />
                  </div>
                  <span className="break-all">infomahntrix@gmail.com</span>
                </a>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="eyebrow text-fog-dim mb-1">Phone / WhatsApp</p>
                <a
                  href="tel:+919575932050"
                  className="flex items-center gap-3 text-lg font-display font-semibold text-paper hover:text-lime transition-colors group"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 group-hover:bg-lime/10 text-lime">
                    <Phone className="size-5" />
                  </div>
                  <span>+91 95759 32050</span>
                </a>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="eyebrow text-fog-dim mb-1">Location</p>
                <div className="flex items-center gap-3 text-base text-paper font-display">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lime">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold">India</p>
                    <p className="text-xs text-fog font-mono">Serving Global Clients (USA, UK, AUS, NZ, India)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp / Booking Box */}
            <div className="rounded-3xl border border-lime/30 bg-lime/5 p-8 backdrop-blur-sm">
              <span className="eyebrow text-lime">( Quick Discussion )</span>
              <h3 className="font-display text-2xl font-bold text-paper mt-2">
                Need instant answers?
              </h3>
              <p className="mt-2 text-sm text-fog leading-relaxed">
                Connect directly with our technical founder on WhatsApp for immediate feasibility questions or schedule a dedicated strategy session.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-display font-semibold text-ink hover:bg-lime-bright transition-colors"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Response Guarantee */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-xs font-mono text-fog">
              <Clock className="size-5 text-lime shrink-0" />
              <span>We review and respond to all qualified inquiries within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
