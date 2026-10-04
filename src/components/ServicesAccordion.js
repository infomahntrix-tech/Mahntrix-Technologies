"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, Globe, Laptop, Smartphone, Database, Layers, Code, Bot } from "lucide-react";
import RevealText from "./motion/RevealText";
import { FadeIn } from "./motion/FadeIn";

export const SERVICES_DATA = [
  {
    id: "websites",
    num: "01",
    title: "Websites",
    tagline: "Ultra-fast, responsive Next.js marketing websites and digital experiences.",
    description: "We build bespoke Next.js and React marketing websites engineered to load in milliseconds, establish instant brand authority, and turn visitors into qualified business leads. Sub-second page loads, headless CMS integration, and seamless responsiveness across all screen sizes.",
    deliverables: ["High-Performance Next.js / React", "Headless CMS Integration", "Core Web Vitals 99+ Guarantee", "Interactive Micro-Animations"],
    icon: Globe,
    accent: "#c8f02d",
  },
  {
    id: "web-applications",
    num: "02",
    title: "Web Applications",
    tagline: "Scalable full-stack SaaS platforms, client portals, and real-time dashboards.",
    description: "From idea to production-grade cloud SaaS platforms. We engineer resilient, multi-tenant web applications with secure user authentication, complex relational databases, payment gateway integrations, and real-time WebSocket communications.",
    deliverables: ["Full-Stack SaaS Architecture", "Role-Based Multi-Tenancy", "Payment Gateways & Subscriptions", "Interactive Data Dashboards"],
    icon: Laptop,
    accent: "#00b4ff",
  },
  {
    id: "mobile-applications",
    num: "03",
    title: "Mobile Applications",
    tagline: "Native-feel cross-platform iOS & Android mobile apps with Flutter and React Native.",
    description: "From MVP to market leadership, we ship fluid mobile applications with silky 60fps native feel. Single codebase efficiency that scales across both iOS and Android with offline synchronization, push notifications, and seamless App Store deployments.",
    deliverables: ["iOS & Android Cross-Platform Apps", "Flutter & React Native Codebase", "Biometric Authentication & Push Notifications", "App Store & Google Play Certification"],
    icon: Smartphone,
    accent: "#36d6e7",
  },
  {
    id: "erps",
    num: "04",
    title: "Enterprise ERP Systems",
    tagline: "Centralized ERP solutions for schools, universities, hospitals, and manufacturing.",
    description: "Eliminate disconnected spreadsheets and legacy software. We engineer scalable ERP platforms unifying departmental workflows, student/patient records, inventory management, automated fee billing, and executive KPI telemetry.",
    deliverables: ["School & University Management ERP", "Hospital & Clinic EHR Suites", "Manufacturing & Inventory Control", "Real-Time Invoicing & Financial Reconciliation"],
    icon: Database,
    accent: "#10b981",
  },
  {
    id: "crms",
    num: "05",
    title: "Custom CRM Platforms",
    tagline: "Omnichannel customer relationship management and automated sales pipelines.",
    description: "Empower your sales and support teams with bespoke CRM systems featuring automated lead routing, WhatsApp Cloud API sync, multi-stage Kanban deal pipelines, interaction logs, and revenue forecasting without expensive per-seat fees.",
    deliverables: ["Custom Lead Routing & Scoring", "WhatsApp Cloud & Email Sync", "Visual Kanban Sales Funnels", "Rep Performance & Revenue Analytics"],
    icon: Layers,
    accent: "#8b5cf6",
  },
  {
    id: "custom-softwares",
    num: "06",
    title: "Custom Software Engineering",
    tagline: "Bespoke software systems, high-throughput backend APIs, and microservices.",
    description: "When off-the-shelf software cannot solve your unique operational challenge, we architect custom enterprise software. Built on modern backend architectures with bulletproof security, high availability, and automated CI/CD deployment pipelines.",
    deliverables: ["Bespoke Enterprise Systems", "High-Throughput REST & GraphQL APIs", "Microservices & Cloud Docker Topology", "Legacy System Modernization"],
    icon: Code,
    accent: "#f59e0b",
  },
  {
    id: "ai-llm",
    num: "07",
    title: "AI & LLM Solutions",
    tagline: "Autonomous AI agents, custom RAG assistants, and intelligent workflow automation.",
    description: "Transform business operations with custom generative AI solutions. We build fine-tuned LLM agents, intelligent conversational assistants grounded in your private knowledge base, automated document extraction pipelines, and smart predictive analytics.",
    deliverables: ["Custom Autonomous AI Agents", "RAG & Vector Knowledge Bases", "Intelligent Document Parsing", "WhatsApp & Slack AI Copilots"],
    icon: Bot,
    accent: "#ec4899",
  },
];

export default function ServicesAccordion() {
  const [activeItem, setActiveItem] = useState("websites");

  return (
    <section className="bg-ink pb-8">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-lime">( Services )</p>
            <h2 className="font-display text-giant mt-5 text-paper">
              <RevealText text="Full-stack digital solutions" />
            </h2>
          </div>
          <FadeIn delay={0.2}>
            <Link href="/services/" className="inline-flex">
              <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform border border-paper/30 hover:bg-paper/10 backdrop-blur-sm h-14 px-7 text-base text-paper font-display">
                <span className="relative z-10 inline-flex items-center gap-2">
                  All services
                  <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Accordion / List */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 divide-y divide-white/10">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = activeItem === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group py-7 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div
                  onClick={() => setActiveItem(isOpen ? null : service.id)}
                  className="flex cursor-pointer items-start justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4 sm:gap-8">
                    <span className="font-mono text-sm font-semibold text-lime pt-1">
                      {service.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors flex items-center gap-3">
                        <span>{service.title}</span>
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm sm:text-base text-fog">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pt-1">
                    <div className="flex size-10 items-center justify-center rounded-full border border-white/10 text-paper group-hover:border-lime group-hover:text-lime transition-colors">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details with Smooth Framer Motion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 ml-0 sm:ml-16 pt-4 border-t border-white/5">
                        <p className="text-sm sm:text-base text-paper/85 leading-relaxed max-w-3xl">
                          {service.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {service.deliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-soft px-3.5 py-1.5 text-xs font-mono text-paper/90"
                            >
                              <span className="size-1.5 rounded-full bg-lime"></span>
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6">
                          <Link
                            href={`/services/#${service.id}`}
                            className="inline-flex items-center gap-1.5 text-sm font-display font-medium text-lime hover:text-lime-bright transition-colors"
                          >
                            Explore detailed engineering process &amp; scope
                            <ArrowUpRight className="size-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
