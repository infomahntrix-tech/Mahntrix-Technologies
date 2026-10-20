import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Video,
  Radio,
  Zap,
  Coins,
  ShieldCheck,
  Smartphone,
  Server,
  Sparkles,
  Lock,
  Heart,
  Flame,
  CheckCircle2,
  Cpu,
  Layers,
  Globe,
  Users,
  Eye,
  Download
} from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import RevealText from "@/components/motion/RevealText";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import ViCatchInteractiveDemo from "@/components/product/ViCatchInteractiveDemo";

export const metadata = {
  title: "ViCatch — 1-on-1 Live Video Discovery, Community Lounge & Social Streaming | Mahntrix Technologies",
  description: "Explore ViCatch: Mahntrix Technologies' flagship 1-on-1 live video discovery and interactive social streaming platform. Sub-80ms WebRTC video calls, community lounge, direct messaging, interactive gifting, and real-time creator economy.",
  openGraph: {
    title: "ViCatch — Live Video Discovery, Community Lounge & Streaming Platform",
    description: "Built by Mahntrix Technologies with React Native, WebRTC, Socket.io, and AWS. Sub-second video discovery, community lounge, and interactive virtual gifting.",
    images: ["/images/projects/vicatch-hero.jpg"],
  },
};

const VICATCH_STATS = [
  { value: "< 80ms", label: "Media Stream Latency", sub: "WebRTC P2P & TURN cluster" },
  { value: "60 FPS", label: "HD Video Rendering", sub: "Hardware-accelerated mobile engine" },
  { value: "99.99%", label: "Signaling Reliability", sub: "Socket.io clustered event mesh" },
  { value: "AES-256", label: "End-to-End Encryption", sub: "DTLS-SRTP secure media payloads" },
];

const CORE_CAPABILITIES = [
  {
    icon: Video,
    num: "01",
    title: "Instant 1-on-1 Video Discovery",
    description: "High-speed peer discovery pairing active users in milliseconds. Adaptive video bitrates ensure smooth 60fps streaming even over fluctuating 4G/5G and Wi-Fi networks.",
    deliverables: ["Sub-80ms WebRTC connection time", "Dynamic bitrate resolution scaling", "Crystal-clear HD two-way audio", "Background reconnect resilience"],
    accent: "#22D3EE",
  },
  {
    icon: Users,
    num: "02",
    title: "Global Community Lounge",
    description: "Dynamic community hub showing active members worldwide. Curated 'For You' matching clusters users based on active interest tags, languages, and shared passions.",
    deliverables: ["Curated passion & vibe matchmaking", "Active presence telemetry", "Instant one-tap match invitations", "Customizable filter preferences"],
    accent: "#c8f02d",
  },
  {
    icon: Coins,
    num: "03",
    title: "In-App Wallet & Virtual Gifting",
    description: "Full in-app economy engine with coin bundles, animated 3D gifts (diamonds, sports cars, hearts), creator revenue share, and live in-call tipping triggers.",
    deliverables: ["Real-time coin ledger & wallet", "Animated in-call 3D gift explosions", "Creator tip jars & cashout pipeline", "Gamified level-up achievements"],
    accent: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Enterprise Safety & Moderation",
    description: "Privacy-first architecture built to protect users. Features native screenshot prevention, immediate one-tap blocking, automated harassment filters, and user reporting queues.",
    deliverables: ["Android FLAG_SECURE & iOS shields", "One-tap block & instant disconnect", "Automated inappropriate content flags", "24/7 audit logging & report triage"],
    accent: "#EC4899",
  },
  {
    icon: Smartphone,
    num: "05",
    title: "Cross-Platform Native Experience",
    description: "Single-codebase efficiency engineered with React Native and Expo. Delivers 60fps native performance, gesture interactions, and deep hardware camera/mic controls across iOS and Android.",
    deliverables: ["React Native 0.86 & Expo 57 build", "Reanimated 4 fluid gesture engine", "Custom dark-mode neon design system", "App Store & Play Store ready"],
    accent: "#8B5CF6",
  },
  {
    icon: Server,
    num: "06",
    title: "Scalable Cloud Architecture",
    description: "High-throughput backend deployed on AWS Elastic Beanstalk with Redis Pub/Sub event distribution, Prisma ORM data modeling, and automated horizontal auto-scaling.",
    deliverables: ["Clustered Node.js microservices", "Redis matchmaking queue buffers", "AWS S3 secure avatar storage", "Prisma PostgreSQL schema integrity"],
    accent: "#10B981",
  },
];

const ARCHITECTURE_STACK = [
  {
    category: "Mobile Client (iOS & Android)",
    items: [
      { name: "React Native 0.86 & Expo 57", desc: "Cross-platform native performance with silky 60fps gesture handling." },
      { name: "Reanimated 4 & Gesture Handler", desc: "Fluid floating heart animations, radar sweeps, and modal sheets." },
      { name: "Expo Camera & Audio", desc: "Granular hardware camera control, microphone volume normalization, and filter shaders." },
      { name: "Lucide & SVG Micro-Graphics", desc: "Crisp vector iconography optimized for high-DPI AMOLED smartphone screens." },
    ],
  },
  {
    category: "Real-Time Streaming & Signaling",
    items: [
      { name: "WebRTC Peer-to-Peer", desc: "Direct low-latency media transport without intermediate server transcoding lag." },
      { name: "Socket.io 4.7 Event Mesh", desc: "Instant bi-directional signaling for SDP handshakes, ICE candidates, and live chat." },
      { name: "Coturn STUN / TURN Relays", desc: "Guaranteed fallback relay infrastructure ensuring 99.99% connection success across NATs." },
      { name: "DTLS-SRTP Encryption", desc: "Banking-grade end-to-end stream encryption ensuring privacy between matched users." },
    ],
  },
  {
    category: "Cloud Backend & Database",
    items: [
      { name: "Node.js & Express Microservices", desc: "High-throughput asynchronous backend handling user auth, queues, and API contracts." },
      { name: "Redis In-Memory Buffers", desc: "Sub-millisecond matchmaking queues, active presence monitoring, and rate limiters." },
      { name: "Prisma & PostgreSQL", desc: "Relational persistence for user profiles, wallet transactions, coins, and audit trails." },
      { name: "AWS Elastic Beanstalk & S3", desc: "Auto-scaling compute clusters with secure presigned media uploads." },
    ],
  },
];

const PRODUCT_FAQS = [
  {
    question: "What is ViCatch and how does it work?",
    answer: "ViCatch is our proprietary 1-on-1 live video matching and interactive social streaming application. Users tap to start discovery, and our smart radar algorithm pairs them with matched peers in sub-80 milliseconds. Once connected, users can engage in crystal-clear HD video chat, send live floating emojis, drop animated virtual gifts, and expand their social circle.",
  },
  {
    question: "Can Mahntrix Technologies customize or whitelabel ViCatch for our brand?",
    answer: "Yes, absolutely. We can deploy ViCatch under your proprietary branding, customize the UI theme, adjust matchmaking algorithms for specific verticals (such as dating, language exchange, expert advisory, or private fan calls), and integrate your payment gateways and cloud infrastructure.",
  },
  {
    question: "How does ViCatch maintain 60fps video over unstable mobile networks?",
    answer: "ViCatch utilizes WebRTC with dynamic adaptive bitrate (ABR) throttling. If network bandwidth dips, the engine prioritizes audio fidelity and adjusts video resolution seamlessly between 1080p, 720p, and 480p without dropping the connection or causing audio stutter.",
  },
  {
    question: "What monetization and creator economy features are built in?",
    answer: "ViCatch includes a turnkey virtual economy: users purchase coin bundles through standard app store in-app purchases (IAP) or payment gateways, send animated 3D gifts during video calls, and creators accumulate coins that can be converted to real revenue payouts according to your platform fee margin.",
  },
  {
    question: "How can we test or review the ViCatch mobile app?",
    answer: "You can request an Android APK preview or schedule a guided architecture walkthrough with our engineering team by clicking 'Request ViCatch Walkthrough' below. We'll provide access to our staging environment and live demonstration build.",
  },
  {
    question: "Who owns the intellectual property if we commission a custom live video app?",
    answer: "When Mahntrix Technologies engineers a custom application for your business, you receive 100% intellectual property ownership, complete source code repositories (mobile client, backend APIs, Coturn signaling configs), and deployment documentation.",
  },
];

export default function ProductPage() {
  return (
    <main className="relative flex flex-col bg-ink text-paper">
      {/* ========================================================================= */}
      {/* 1. PRODUCT HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative flex min-h-[95svh] flex-col justify-center overflow-hidden bg-ink pt-32 pb-20">
        <HeroCanvas />

        <div className="relative mx-auto w-full max-w-6xl px-6 z-10">
          {/* Eyebrow Badge */}
          <FadeIn delay={0.05}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px] shadow-cyan-400/60 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-cyan-300 uppercase">
                PROPRIETARY FLAGSHIP PRODUCT · V1.0.0
              </span>
            </div>
          </FadeIn>

          {/* Main Title & Headline */}
          <h1 className="font-display text-giant max-w-5xl tracking-tight text-paper font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-lime">
              ViCatch
            </span>
            <br />
            <RevealText text="Spontaneous connections. Crystal-clear video." />
          </h1>

          {/* Subtitle */}
          <FadeIn delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
              ViCatch is our high-performance 1-on-1 live video matching and interactive social streaming platform. Engineered with sub-80ms WebRTC streams, smart radar matchmaking, animated virtual gifts, and a real-time creator economy.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact/?product=ViCatch" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform bg-lime text-ink hover:bg-lime-bright h-14 px-8 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Request APK &amp; Demo
                    <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>

              <a href="#simulator" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform border border-white/20 text-paper hover:bg-white/5 backdrop-blur-sm h-14 px-8 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Test interactive demo
                  </span>
                </span>
              </a>

              <a href="#architecture" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 text-fog hover:text-paper h-14 px-6 text-sm font-mono">
                  Explore architecture ↓
                </span>
              </a>
            </div>
          </FadeIn>

          {/* Hero Visual Container with Generated Mockup */}
          <FadeIn delay={0.55} className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/80 p-3 sm:p-6 shadow-2xl shadow-purple-950/40">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/projects/vicatch-hero.jpg"
                  alt="ViCatch Live Video Matching & 1-on-1 Streaming App Mockup"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Ambient Glow & Floating Live Badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-white/20 px-3.5 py-1.5 backdrop-blur-md text-xs font-mono text-paper">
                    <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                    LIVE MATCHING CONNECTED
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-lime/20 border border-lime/40 px-3 py-1.5 backdrop-blur-md text-xs font-mono text-lime font-bold">
                    60 FPS HD STREAM
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-xs font-mono text-fog">
                  <div className="rounded-xl bg-black/70 border border-white/10 p-3 backdrop-blur-md max-w-md">
                    <p className="text-paper font-semibold font-display text-sm">ViCatch Live Stream Session</p>
                    <p className="text-fog mt-0.5">Hardware-accelerated WebRTC P2P stream with floating emoji reactions, audio visualizers, and virtual gift drops.</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-black/70 border border-white/10 px-4 py-2.5 backdrop-blur-md self-start sm:self-auto">
                    <Lock className="size-3.5 text-lime" />
                    <span className="text-paper">DTLS-SRTP 256-Bit E2EE</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REAL-TIME TELEMETRY COUNTER STRIP */}
      {/* ========================================================================= */}
      <section className="border-y border-white/10 bg-ink-soft py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {VICATCH_STATS.map((stat, idx) => (
              <StaggerItem key={idx} className="border-l border-white/10 pl-6">
                <p className="font-display text-3xl sm:text-5xl font-bold text-lime">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-paper font-sans">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-fog font-mono">
                  {stat.sub}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE SIMULATOR (LIVE TEST) */}
      {/* ========================================================================= */}
      <section id="simulator" className="scroll-mt-28 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-lime">( Product Simulator )</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper mt-3">
              Test ViCatch features right in your browser
            </h2>
            <p className="mt-4 text-base sm:text-lg text-fog leading-relaxed">
              Explore how our real-time video discovery, global community lounge, direct socket messages, and virtual gift tipping interact seamlessly before downloading the build.
            </p>
          </div>

          <ViCatchInteractiveDemo />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE PRODUCT CAPABILITIES GRID */}
      {/* ========================================================================= */}
      <section id="features" className="scroll-mt-28 border-t border-white/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end mb-16">
            <div>
              <p className="eyebrow text-lime">( Core Capabilities )</p>
              <h2 className="font-display text-giant mt-3 text-paper font-bold">
                <RevealText text="Engineered for viral engagement." />
              </h2>
            </div>
            <FadeIn delay={0.2}>
              <Link href="/contact/?product=ViCatch" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 border border-white/20 hover:bg-white/10 backdrop-blur-sm h-12 px-6 text-sm text-paper font-display">
                  Deploy custom streaming app
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CORE_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.08}>
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-ink-soft p-8 transition-all duration-300 hover:border-lime/40 hover:bg-white/[0.03]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-lime">
                          {cap.num} / FEATURE
                        </span>
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-white/5 text-lime border border-white/10 group-hover:bg-lime group-hover:text-ink transition-colors">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-paper mt-6 group-hover:text-lime transition-colors">
                        {cap.title}
                      </h3>

                      <p className="mt-3 text-sm text-fog leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="mt-8 space-y-2 border-t border-white/5 pt-6">
                      {cap.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-paper/85 font-mono">
                          <span className="size-1.5 rounded-full bg-lime shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VISUAL DEEP DIVE: RADAR & GIFT STORE */}
      {/* ========================================================================= */}
      <section className="border-t border-white/10 bg-paper text-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            {/* Visual Image Mockup */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-black p-3 sm:p-5 shadow-2xl shadow-purple-950/20">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/projects/vicatch-features.jpg"
                    alt="ViCatch Live Radar & Virtual Gifting Economy Mockup"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Feature Description List */}
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-ink/60">( Deep-Dive )</p>
                <h2 className="font-display text-huge text-ink font-bold mt-2 leading-tight">
                  <RevealText text="Matchmaking Radar &amp; Virtual Token Economy" />
                </h2>
                <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed font-sans">
                  ViCatch merges the spontaneity of real-time discovery with a gamified social economy. Users earn and spend tokens, build their profile reputation, and reward creators during calls.
                </p>
              </div>

              <div className="space-y-4 divide-y divide-ink/10">
                <div className="pt-4 first:pt-0">
                  <h4 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-lime bg-ink px-2 py-0.5 rounded-md">01</span>
                    Continuous Radar Scanning
                  </h4>
                  <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                    Interactive radar sweeps the network for available video streams, displaying mutual interests, distance, and verified user trust scores before connecting.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-lime bg-ink px-2 py-0.5 rounded-md">02</span>
                    Seamless Micro-Tipping
                  </h4>
                  <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                    Instant in-call gifts trigger animated visual bursts on the remote caller&apos;s viewport, crediting coins directly to their creator wallet in real time.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-lime bg-ink px-2 py-0.5 rounded-md">03</span>
                    Level-Up Progression System
                  </h4>
                  <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                    Gamified badges, custom avatar borders, priority radar placement, and VIP matching rooms reward long-term user retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNICAL ARCHITECTURE SPECIFICATION */}
      {/* ========================================================================= */}
      <section id="architecture" className="scroll-mt-28 border-t border-white/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow text-lime">( Architecture Stack )</p>
            <h2 className="font-display text-giant text-paper font-bold mt-3">
              <RevealText text="Battle-tested engineering architecture." />
            </h2>
            <p className="mt-4 text-base sm:text-lg text-fog leading-relaxed">
              Engineered with modern, decoupled cloud systems designed to sustain tens of thousands of concurrent real-time audio and video sessions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {ARCHITECTURE_STACK.map((col, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl border border-white/10 bg-ink-soft p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
                      LAYER {idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-paper mt-2 pb-4 border-b border-white/10">
                      {col.category}
                    </h3>

                    <div className="mt-6 space-y-5">
                      {col.items.map((item, iIdx) => (
                        <div key={iIdx} className="space-y-1">
                          <p className="font-display text-sm font-bold text-paper flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-cyan-400" />
                            {item.name}
                          </p>
                          <p className="text-xs text-fog leading-relaxed pl-3.5">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-fog-dim">
                    High-throughput · 99.99% SLA
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. COMMERCIAL DEPLOYMENT & WHITELABEL OPTIONS */}
      {/* ========================================================================= */}
      <section className="border-t border-white/10 bg-ink-soft py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-lime/30 bg-lime/5 p-8 sm:p-14 backdrop-blur-md">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
              <div>
                <span className="eyebrow text-lime">( Commercial Partnership )</span>
                <h3 className="font-display text-3xl sm:text-5xl font-bold text-paper mt-3 leading-tight">
                  Deploy a custom version of ViCatch for your business.
                </h3>
                <p className="mt-4 text-base sm:text-lg text-fog leading-relaxed">
                  Looking to build a social discovery app, 1-on-1 private creator consultation platform, language exchange community, or interactive video marketplace?
                </p>
                <p className="mt-3 text-sm text-fog leading-relaxed">
                  Our engineering team can deploy, customize, and maintain the entire ViCatch stack under your brand — cutting traditional development timelines from 12 months down to 4 to 6 weeks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <h5 className="font-display text-base font-bold text-paper">Turnkey Whitelabel Rollout</h5>
                  <p className="text-xs text-fog mt-1">Full brand customization (logos, colors, copy), App Store &amp; Play Store deployments, and cloud setup.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <h5 className="font-display text-base font-bold text-paper">Custom Feature Extensions</h5>
                  <p className="text-xs text-fog mt-1">Add AI translation subtitles, group video rooms, private paid subscriptions, or custom matching filters.</p>
                </div>

                <Link href="/contact/?product=ViCatch-Commercial" className="w-full inline-flex">
                  <span className="w-full group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 bg-lime text-ink hover:bg-lime-bright h-14 px-8 text-base font-display">
                    Schedule architecture discussion
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ ACCORDION SECTION */}
      {/* ========================================================================= */}
      <section className="border-t border-white/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="eyebrow text-lime">( FAQ )</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper mt-3">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-fog max-w-xl mx-auto text-sm sm:text-base">
              Everything you need to know about ViCatch&apos;s capabilities, streaming performance, and commercial deployment options.
            </p>
          </div>

          <FaqAccordion items={PRODUCT_FAQS} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOTTOM CTA BANNER */}
      {/* ========================================================================= */}
      <CtaBanner
        eyebrow="Ready to experience ViCatch?"
        heading="Let's build your real-time video future."
        description="Request the live Android APK build, schedule an engineering walkthrough, or discuss deploying your custom live streaming platform."
        primaryButtonText="Request ViCatch Demo"
        primaryButtonHref="/contact/?product=ViCatch"
        secondaryButtonText="Explore all services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
