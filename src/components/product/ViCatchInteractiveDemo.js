"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Users,
  MessageSquare,
  Coins,
  ShieldCheck,
  Zap,
  Globe,
  Filter,
  Sparkles,
  Radio,
  Search,
  UserPlus,
  Send,
  ShoppingBag,
  ArrowRight,
  ArrowUpRight,
  Lock,
  EyeOff
} from "lucide-react";

export default function ViCatchInteractiveDemo() {
  const [activeTab, setActiveTab] = useState("discover");
  const [coins, setCoins] = useState(35);
  const [selectedGift, setSelectedGift] = useState(null);
  const [walletFeedback, setWalletFeedback] = useState(null);

  const handleSendGift = (gift) => {
    if (coins >= gift.cost) {
      setCoins((prev) => prev - gift.cost);
      setSelectedGift(gift);
      setWalletFeedback(`Sent ${gift.icon} ${gift.name} (-${gift.cost} coins)!`);
      setTimeout(() => {
        setSelectedGift(null);
        setWalletFeedback(null);
      }, 2500);
    } else {
      setWalletFeedback("Insufficient coins! Reload below to test.");
      setTimeout(() => setWalletFeedback(null), 2500);
    }
  };

  const GIFTS = [
    { name: "Sparkle Heart", cost: 5, icon: "💖", desc: "Show positive vibes" },
    { name: "Golden Star", cost: 15, icon: "⭐", desc: "Recognize great energy" },
    { name: "Neon Diamond", cost: 25, icon: "💎", desc: "Premium supporter spotlight" },
    { name: "Luxury Gift Box", cost: 50, icon: "🎁", desc: "Top tier fan recognition" },
  ];

  return (
    <div className="relative rounded-3xl border border-white/10 bg-ink-soft/90 p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -left-32 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-lime/10 blur-3xl pointer-events-none" />

      {/* Top Header & Tab Switcher */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 mb-2">
            <span className="size-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Interactive Product Simulator
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-paper">
            Experience ViCatch in Real-Time
          </h3>
          <p className="text-xs sm:text-sm text-fog max-w-2xl mt-1.5 leading-relaxed">
            Explore authentic production app screens. Discover our real-time 1-on-1 video engine, community lounge, direct socket messaging, and virtual gift economy.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10 self-start lg:self-center shadow-inner">
          <button
            onClick={() => setActiveTab("discover")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "discover"
                ? "bg-lime text-ink font-bold shadow-lg shadow-lime/20"
                : "text-fog hover:text-paper hover:bg-white/5"
            }`}
          >
            <Compass className="size-3.5" />
            Discover
          </button>

          <button
            onClick={() => setActiveTab("lounge")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "lounge"
                ? "bg-lime text-ink font-bold shadow-lg shadow-lime/20"
                : "text-fog hover:text-paper hover:bg-white/5"
            }`}
          >
            <Users className="size-3.5" />
            Lounge
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "messages"
                ? "bg-lime text-ink font-bold shadow-lg shadow-lime/20"
                : "text-fog hover:text-paper hover:bg-white/5"
            }`}
          >
            <MessageSquare className="size-3.5" />
            Messages
          </button>

          <button
            onClick={() => setActiveTab("gifts")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "gifts"
                ? "bg-lime text-ink font-bold shadow-lg shadow-lime/20"
                : "text-fog hover:text-paper hover:bg-white/5"
            }`}
          >
            <Coins className="size-3.5" />
            Gift Economy
          </button>

          <button
            onClick={() => setActiveTab("safety")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "safety"
                ? "bg-lime text-ink font-bold shadow-lg shadow-lime/20"
                : "text-fog hover:text-paper hover:bg-white/5"
            }`}
          >
            <ShieldCheck className="size-3.5" />
            Safety Shield
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="relative z-10 mt-8">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* TAB 1: DISCOVER (Real App Screen) */}
          {/* ========================================================================= */}
          {activeTab === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-center"
            >
              {/* Phone Frame Mockup */}
              <div className="flex flex-col items-center">
                <div className="group relative w-full max-w-[310px] sm:max-w-[335px] rounded-[3.2rem] p-3 sm:p-3.5 border-4 border-white/20 bg-gradient-to-b from-zinc-800 via-black to-zinc-900 shadow-2xl shadow-cyan-500/10 ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.015]">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 border border-white/15 flex items-center justify-between px-3 text-[9px] font-mono text-fog-dim shadow-inner">
                    <span className="size-2 rounded-full bg-emerald-500/80 animate-pulse" />
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-zinc-900 border border-white/20" />
                      <span className="size-1.5 rounded-full bg-indigo-950/90" />
                    </div>
                  </div>

                  {/* Clean, Unobstructed Screen */}
                  <div className="relative aspect-[472/1024] w-full rounded-[2.4rem] overflow-hidden border border-white/10 bg-black shadow-inner">
                    <Image
                      src="/images/vicatch/vicatch-discover.png"
                      alt="ViCatch Real-Time 1-on-1 Video Discovery Screen"
                      fill
                      priority
                      sizes="(max-width: 640px) 310px, 335px"
                      className="object-cover object-top select-none pointer-events-none"
                    />

                    {/* Subtle glass glare overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Telemetry Badge under Phone */}
                <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-fog backdrop-blur-sm">
                  <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Production Mobile Build · Sub-80ms WebRTC Engine</span>
                </div>
              </div>

              {/* Discover Features Deep Dive */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-xs font-mono text-cyan-300 font-semibold">
                    <Compass className="size-3.5" />
                    Instant 1-on-1 Video Discovery
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-paper mt-3 leading-tight">
                    Spontaneous Peer Matching with Zero Lag
                  </h4>
                  <p className="text-sm text-fog leading-relaxed mt-2.5">
                    Say goodbye to static profile swiping. ViCatch&apos;s Discover screen initiates real-time peer matching in milliseconds via direct hardware-accelerated WebRTC media pipelines, complete with interest tags, verified status, and live geo telemetry.
                  </p>
                </div>

                {/* Core Feature Breakdown Cards */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-cyan-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Zap className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">One-Tap Video Invite &amp; Skip</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        High-speed SDP signaling over clustered Socket.io. Users can skip or extend an invite instantly without video buffering or handshake timeouts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-cyan-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Globe className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Location &amp; Passion Tag Discovery</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Displays verified badges, city location (e.g. Mumbai), spoken languages, and rich passion tags (#Dance, #Bollywood, #Travel) right on the stream card.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-cyan-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Filter className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Real-Time Coins &amp; Filter Header</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Includes live virtual coin tracking (35 Coins), instantaneous coin top-ups, notification bells, and refined gender/region filter drawers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Navigation */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab("lounge")}
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-display font-semibold text-ink text-xs hover:bg-lime-bright transition-all cursor-pointer shadow-md shadow-lime/20"
                  >
                    <span>Explore Community Lounge</span>
                    <ArrowRight className="size-3.5" />
                  </button>

                  <Link
                    href="/contact/?product=ViCatch"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-fog hover:text-paper hover:bg-white/10 transition-all"
                  >
                    <span>Request APK Demo</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: LOUNGE (Real App Screen) */}
          {/* ========================================================================= */}
          {activeTab === "lounge" && (
            <motion.div
              key="lounge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-center"
            >
              {/* Phone Frame Mockup */}
              <div className="flex flex-col items-center">
                <div className="group relative w-full max-w-[310px] sm:max-w-[335px] rounded-[3.2rem] p-3 sm:p-3.5 border-4 border-white/20 bg-gradient-to-b from-zinc-800 via-black to-zinc-900 shadow-2xl shadow-purple-500/10 ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.015]">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 border border-white/15 flex items-center justify-between px-3 text-[9px] font-mono text-fog-dim shadow-inner">
                    <span className="size-2 rounded-full bg-emerald-500/80 animate-pulse" />
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-zinc-900 border border-white/20" />
                      <span className="size-1.5 rounded-full bg-indigo-950/90" />
                    </div>
                  </div>

                  {/* Clean, Unobstructed Screen */}
                  <div className="relative aspect-[472/1024] w-full rounded-[2.4rem] overflow-hidden border border-white/10 bg-black shadow-inner">
                    <Image
                      src="/images/vicatch/vicatch-lounge.png"
                      alt="ViCatch Global Community Lounge Screen"
                      fill
                      priority
                      sizes="(max-width: 640px) 310px, 335px"
                      className="object-cover object-top select-none pointer-events-none"
                    />

                    {/* Subtle glass glare overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Telemetry Badge under Phone */}
                <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-fog backdrop-blur-sm">
                  <span className="size-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>Production Mobile Build · Redis Pub/Sub Live Presence</span>
                </div>
              </div>

              {/* Lounge Features Deep Dive */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-400/10 border border-purple-400/20 px-3 py-1 text-xs font-mono text-purple-300 font-semibold">
                    <Users className="size-3.5" />
                    Community Lounge &amp; Active Roster
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-paper mt-3 leading-tight">
                    Global Community Hub with Live Presence
                  </h4>
                  <p className="text-sm text-fog leading-relaxed mt-2.5">
                    The Lounge acts as the interactive town square of ViCatch. Users browse who is online right now worldwide, search by interests and languages, and discover compatible companions grouped into curated &apos;For You&apos; passion carousels.
                  </p>
                </div>

                {/* Core Feature Breakdown Cards */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-purple-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                      <Sparkles className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Curated &apos;For You&apos; Passion Matching</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Algorithmic discovery clusters members sharing common interests (#Music, #Travel, #Chat) and mutual languages with real-time status telemetry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-purple-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                      <Radio className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Live &apos;All&apos; Active User Roster</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        High-concurrency Redis presence engine displays active online indicators with zero battery drain, making connecting seamless at any hour.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-purple-400/20 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                      <Search className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Universal Search &amp; Fast Filtering</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Instant search bar enabling swift discovery by username, common interests, spoken languages, and geographical proximity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Navigation */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab("messages")}
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-display font-semibold text-ink text-xs hover:bg-lime-bright transition-all cursor-pointer shadow-md shadow-lime/20"
                  >
                    <span>View Messages &amp; Chat</span>
                    <ArrowRight className="size-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab("discover")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-fog hover:text-paper hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <span>← Back to Discover</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: MESSAGES (Real App Screen) */}
          {/* ========================================================================= */}
          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-center"
            >
              {/* Phone Frame Mockup */}
              <div className="flex flex-col items-center">
                <div className="group relative w-full max-w-[310px] sm:max-w-[335px] rounded-[3.2rem] p-3 sm:p-3.5 border-4 border-white/20 bg-gradient-to-b from-zinc-800 via-black to-zinc-900 shadow-2xl shadow-lime/10 ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.015]">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 border border-white/15 flex items-center justify-between px-3 text-[9px] font-mono text-fog-dim shadow-inner">
                    <span className="size-2 rounded-full bg-emerald-500/80 animate-pulse" />
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-zinc-900 border border-white/20" />
                      <span className="size-1.5 rounded-full bg-indigo-950/90" />
                    </div>
                  </div>

                  {/* Clean, Unobstructed Screen */}
                  <div className="relative aspect-[472/1024] w-full rounded-[2.4rem] overflow-hidden border border-white/10 bg-black shadow-inner">
                    <Image
                      src="/images/vicatch/vicatch-messages.png"
                      alt="ViCatch Real-Time Messages & Chat Screen"
                      fill
                      priority
                      sizes="(max-width: 640px) 310px, 335px"
                      className="object-cover object-top select-none pointer-events-none"
                    />

                    {/* Subtle glass glare overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Telemetry Badge under Phone */}
                <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-fog backdrop-blur-sm">
                  <span className="size-2 rounded-full bg-lime animate-pulse" />
                  <span>Production Mobile Build · Socket.io Mesh &amp; Shop Shortcut</span>
                </div>
              </div>

              {/* Messages Features Deep Dive */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime/10 border border-lime/30 px-3 py-1 text-xs font-mono text-lime font-bold">
                    <MessageSquare className="size-3.5" />
                    Socket.io Chat &amp; Follower Mesh
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-paper mt-3 leading-tight">
                    Persistent Direct Messaging &amp; Video Handoff
                  </h4>
                  <p className="text-sm text-fog leading-relaxed mt-2.5">
                    Connections don&apos;t end when the video call finishes. ViCatch&apos;s Messages tab provides low-latency 1-on-1 text communication, dynamic follower carousels, unread notification alerts, and instantaneous video call-back handoffs.
                  </p>
                </div>

                {/* Core Feature Breakdown Cards */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-lime/30 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      <UserPlus className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Followers Carousel &amp; Quick-Reach</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Top horizontal scroll row spotlights new followers and mutual connections with one-tap instant messaging triggers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-lime/30 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      <Send className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Real-Time Socket Threads &amp; Presence</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Bi-directional event mesh delivers instant text messages, unread count badges, delivery status, and contextual prompts (e.g. &apos;☕ Let&apos;s video call!&apos;).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-lime/30 transition-all">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      <ShoppingBag className="size-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-paper">Integrated Coin Shop Shortcut</h5>
                      <p className="text-xs text-fog leading-relaxed mt-1">
                        Direct in-header Shop shortcut allows users to buy coin packages, send virtual gifts, and upgrade supporter badges right from their messaging inbox.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Navigation */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab("gifts")}
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-display font-semibold text-ink text-xs hover:bg-lime-bright transition-all cursor-pointer shadow-md shadow-lime/20"
                  >
                    <span>Check Gift Economy</span>
                    <ArrowRight className="size-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab("lounge")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-fog hover:text-paper hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <span>← Back to Lounge</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: IN-APP GIFT ECONOMY */}
          {/* ========================================================================= */}
          {activeTab === "gifts" && (
            <motion.div
              key="gifts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-center"
            >
              {/* Wallet Card */}
              <div className="rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent p-6 sm:p-8 space-y-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    Virtual Wallet Balance
                  </span>
                  <Coins className="size-5 text-yellow-400" />
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-paper">
                      {coins.toLocaleString()}
                    </span>
                    <span className="font-mono text-sm text-yellow-400 font-semibold">Coins</span>
                  </div>
                  <p className="text-xs text-fog mt-1">Available for live video gifts &amp; creator support</p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <button
                    onClick={() => {
                      setCoins((prev) => prev + 100);
                      setWalletFeedback("Reloaded +100 Coins to test wallet!");
                      setTimeout(() => setWalletFeedback(null), 2500);
                    }}
                    className="w-full rounded-full border border-yellow-500/40 bg-yellow-400/20 py-2.5 text-xs font-mono font-bold text-yellow-300 hover:bg-yellow-400/30 transition-all cursor-pointer shadow-md"
                  >
                    + Reload 100 Coins (Test Simulator)
                  </button>
                </div>

                {walletFeedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl bg-lime/20 border border-lime p-3 text-center text-xs text-lime font-bold"
                  >
                    {walletFeedback}
                  </motion.div>
                )}
              </div>

              {/* Gift Store Grid */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-paper">
                    Interactive 3D Virtual Gifts
                  </h4>
                  <p className="text-xs sm:text-sm text-fog mt-1">
                    Click any gift below to test live in-call tipping and balance updates.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {GIFTS.map((gift) => (
                    <div
                      key={gift.name}
                      onClick={() => handleSendGift(gift)}
                      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-lime/40 hover:bg-lime/[0.03] transition-all cursor-pointer select-none"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {gift.icon}
                        </span>
                        <span className="rounded-full bg-yellow-400/10 px-2 py-0.5 text-xs font-mono font-bold text-yellow-400">
                          {gift.cost} coins
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="font-display text-sm font-bold text-paper">{gift.name}</p>
                        <p className="text-[11px] text-fog mt-0.5">{gift.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: SAFETY SHIELD & MODERATION */}
          {/* ========================================================================= */}
          {activeTab === "safety" && (
            <motion.div
              key="safety"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-lime/30 transition-all">
                <div className="flex size-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  <Lock className="size-5" />
                </div>
                <h5 className="font-display text-base font-bold text-paper">End-to-End Encrypted</h5>
                <p className="text-xs text-fog leading-relaxed">
                  DTLS-SRTP encryption secures audio/video streams peer-to-peer. No third-party eavesdropping is technically possible.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-lime/30 transition-all">
                <div className="flex size-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  <EyeOff className="size-5" />
                </div>
                <h5 className="font-display text-base font-bold text-paper">Screenshot Protection</h5>
                <p className="text-xs text-fog leading-relaxed">
                  Native Android FLAG_SECURE and iOS privacy shields block screen recording and screenshot captures of active video sessions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-lime/30 transition-all">
                <div className="flex size-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  <ShieldCheck className="size-5" />
                </div>
                <h5 className="font-display text-base font-bold text-paper">One-Tap Block &amp; Report</h5>
                <p className="text-xs text-fog leading-relaxed">
                  Instant user blocking severs WebRTC media and chat relays immediately. Automated reports flag accounts for 24/7 moderator triage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-lime/30 transition-all">
                <div className="flex size-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  <Sparkles className="size-5" />
                </div>
                <h5 className="font-display text-base font-bold text-paper">AI Behavior Guardrails</h5>
                <p className="text-xs text-fog leading-relaxed">
                  Real-time client moderation detects abusive keywords and harassment patterns to protect user safety and platform integrity.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
