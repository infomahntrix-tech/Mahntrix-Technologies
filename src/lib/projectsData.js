export const PROJECTS = [
  {
    id: "school-erp",
    slug: "school-erp",
    title: "School ERP Ecosystem",
    category: "Enterprise ERP Systems",
    year: "2026",
    url: "school-erp-sable.vercel.app",
    liveUrl: "https://school-erp-sable.vercel.app/",
    image: "/images/projects/school-erp.jpg",
    client: "Global School Management Group",
    color: "#36d6e7",
    description: "A centralized school management ERP managing admissions, student grading, automated fee billing, attendance, and faculty scheduling.",
    services: ["Enterprise ERP Systems", "Web Applications", "Custom Software"],
    metric: { value: "3.8×", label: "Faster Administrative Processing" },
    challenge: "Managing student records, fee collection, attendance, and exam reporting across disconnected spreadsheets created massive administrative overhead and error risks.",
    solution: "Engineered a cloud-based Next.js School ERP with role-based access for Admins, Teachers, Students, and Parents, automated fee receipts, real-time attendance, and digital grade cards.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
    results: [
      { number: "99.9%", label: "Platform Uptime" },
      { number: "10,000+", label: "Active Student Records" },
      { number: "85%", label: "Faster Fee Processing" },
      { number: "< 0.3s", label: "Query Response Time" }
    ],
    testimonial: {
      quote: "Mahntrix Technologies delivered a rock-solid school ERP that simplified our daily operations from fee collection to report cards.",
      author: "School Principal & Administrator",
      title: "Educational Directorate"
    }
  },
  {
    id: "hrms-platform",
    slug: "hrms-platform",
    title: "Enterprise HRMS Platform",
    category: "Custom Software",
    year: "2026",
    url: "hrms-seven-wine.vercel.app",
    liveUrl: "https://hrms-seven-wine.vercel.app/",
    image: "/images/projects/hrms-platform.jpg",
    client: "WorkForce Global Operations",
    color: "#8b5cf6",
    description: "Complete Human Resource Management System featuring automated payroll computation, attendance telemetry, leave tracking, and employee directories.",
    services: ["Custom Software", "Web Applications", "Custom CRM Platforms"],
    metric: { value: "70%", label: "Reduction in Payroll Cycle Time" },
    challenge: "Manual employee attendance tracking, fragmented leave requests, and complex tax/payroll calculation spreadsheets caused monthly HR bottlenecks.",
    solution: "Built a modern, reactive HRMS web application with automated shift scheduling, leave approval hierarchies, direct payroll generation, and employee self-service portals.",
    techStack: ["Next.js 15", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel"],
    results: [
      { number: "70%", label: "Faster Payroll Run" },
      { number: "100%", label: "Paperless HR Workflow" },
      { number: "5,000+", label: "Employees Managed" },
      { number: "4.9/5", label: "User Satisfaction" }
    ],
    testimonial: {
      quote: "Our HR operations went from chaotic spreadsheets to a sleek, automated dashboard. The Mahntrix team delivered exceptional quality.",
      author: "Head of People Operations",
      title: "WorkForce Global"
    }
  },
  {
    id: "ecommerce-webapp",
    slug: "ecommerce-webapp",
    title: "E-Commerce Store",
    category: "Web Applications",
    year: "2025",
    url: "e-commerce-next-webapp-x4s1.vercel.app",
    liveUrl: "https://e-commerce-next-webapp-x4s1.vercel.app/",
    image: "/images/projects/ecommerce-webapp.jpg",
    client: "Apex Retail Online",
    color: "#ec4899",
    description: "Lightning-fast headless e-commerce web application with instant cart updates, dynamic product filtering, and frictionless checkout flows.",
    services: ["Web Applications", "Websites", "Custom Software"],
    metric: { value: "+145%", label: "Increase in Mobile Conversion" },
    challenge: "Slow mobile loading times and complex multi-step checkout processes resulted in high cart abandonment and lost sales on legacy platforms.",
    solution: "Architected a high-performance Next.js e-commerce application with optimistic UI cart synchronization, category filtering, responsive product viewports, and edge-cached product catalogs.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Edge CDN"],
    results: [
      { number: "0.7s", label: "Average Page Load Time" },
      { number: "+145%", label: "Mobile Revenue Boost" },
      { number: "-35%", label: "Cart Drop-Off Rate" },
      { number: "99/100", label: "Lighthouse Performance" }
    ],
    testimonial: {
      quote: "The speed and fluid navigation of our new store built by Mahntrix resulted in an immediate jump in online orders.",
      author: "E-Commerce Director",
      title: "Apex Retail"
    }
  },
  {
    id: "export-import-trade",
    slug: "export-import-trade",
    title: "Export-Import Trade Portal",
    category: "Custom Software",
    year: "2026",
    url: "export-import-tau.vercel.app",
    liveUrl: "https://export-import-tau.vercel.app/",
    image: "/images/projects/export-import.jpg",
    client: "Global Cargo & Trade Network",
    color: "#f59e0b",
    description: "International commodity trading and logistics portal showcasing global export catalogs, container quotation engines, and customs clearance pipelines.",
    services: ["Custom Software", "Web Applications", "Websites"],
    metric: { value: "3.2×", label: "Increase in Trade Inquiries" },
    challenge: "International buyers needed a credible, modern digital showcase to inspect certified export commodities, download compliance specs, and submit container quote requests.",
    solution: "Designed and engineered an international export-import platform featuring categorized agricultural & manufactured commodities, multi-currency display, and instant lead routing.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "Email Automation"],
    results: [
      { number: "3.2×", label: "Global Lead Inquiries" },
      { number: "24/7", label: "Automated RFQ Routing" },
      { number: "40+", label: "Countries Reached" },
      { number: "100%", label: "Mobile Responsive" }
    ],
    testimonial: {
      quote: "Mahntrix built a trading portal that gives us global credibility with importers across Europe, the Middle East, and Asia.",
      author: "Director of International Trade",
      title: "Global Cargo Network"
    }
  },
  {
    id: "export-admin-dashboard",
    slug: "export-admin-dashboard",
    title: "Export Operations Dashboard",
    category: "Web Applications",
    year: "2026",
    url: "export-admin-dashboard.vercel.app",
    liveUrl: "https://export-admin-dashboard.vercel.app/",
    image: "/images/projects/export-dashboard.jpg",
    client: "Global Logistics Enterprise",
    color: "#10b981",
    description: "Executive operations dashboard tracking cargo shipments, customs compliance, order pipelines, revenue analytics, and warehouse inventory.",
    services: ["Web Applications", "Custom Software", "Enterprise ERP Systems"],
    metric: { value: "100%", label: "Live Container Visibility" },
    challenge: "Operations managers lacked a single-pane-of-glass dashboard to monitor export orders, customs paperwork status, vessel schedules, and freight billing.",
    solution: "Developed an interactive telemetry dashboard with live order tracking cards, revenue visualizers, document verification pipelines, and inventory alerts.",
    techStack: ["Next.js", "React", "Chart.js", "Tailwind CSS", "Vercel"],
    results: [
      { number: "100%", label: "Live Telemetry Visibility" },
      { number: "50%", label: "Less Time Spent in Status Calls" },
      { number: "< 0.4s", label: "Dashboard Query Speed" },
      { number: "Zero", label: "Lost Shipping Documents" }
    ],
    testimonial: {
      quote: "The admin dashboard built by Mahntrix gives our management total clarity over daily export shipments and revenue metrics.",
      author: "Chief Operations Officer",
      title: "Global Logistics Enterprise"
    }
  },
  {
    id: "insurance-website",
    slug: "insurance-website",
    title: "InsurShield Digital Insurance",
    category: "Websites",
    year: "2025",
    url: "insurance-web-theta.vercel.app",
    liveUrl: "https://insurance-web-theta.vercel.app/",
    image: "/images/projects/insurance-web.jpg",
    client: "InsurShield Financial & Protection Group",
    color: "#c8f02d",
    description: "Modern, high-trust insurance portal engineered with instant premium calculators, policy comparison tools, and online claim registration.",
    services: ["Websites", "Web Applications", "Custom Software"],
    metric: { value: "+190%", label: "Online Policy Inquiries" },
    challenge: "Traditional insurance websites overwhelmed users with complex policy jargon and slow quote processes, leading to high drop-offs.",
    solution: "Engineered a streamlined Next.js insurance website with interactive quote calculators, transparent coverage breakdowns, and mobile-first claim initiation forms.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Lucide Icons", "Vercel"],
    results: [
      { number: "+190%", label: "Digital Quote Inquiries" },
      { number: "98/100", label: "Google PageSpeed Score" },
      { number: "3.5×", label: "More Time Spent on Policy Pages" },
      { number: "100%", label: "Accessible Design" }
    ],
    testimonial: {
      quote: "The new insurance website has transformed our online customer acquisition. It's fast, modern, and builds instant trust.",
      author: "Chief Marketing Officer",
      title: "InsurShield Group"
    }
  },
  {
    id: "guesthouse-website",
    slug: "guesthouse-website",
    title: "Serene Stays Guest House",
    category: "Websites",
    year: "2025",
    url: "guesthouse-web.vercel.app",
    liveUrl: "https://guesthouse-web.vercel.app/",
    image: "/images/projects/guesthouse-web.jpg",
    client: "Serene Stays Luxury Hospitality",
    color: "#f59e0b",
    description: "Boutique hospitality website featuring immersive high-res room galleries, amenity showcases, location maps, and direct room booking forms.",
    services: ["Websites", "Web Applications"],
    metric: { value: "2.8×", label: "Direct Commission-Free Bookings" },
    challenge: "The property was paying 20%+ commissions to third-party travel agencies because their direct website lacked modern booking and visual appeal.",
    solution: "Crafted an elegant, responsive resort & guest house website with room showcase galleries, dining menus, instant WhatsApp booking, and reservation forms.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    results: [
      { number: "2.8×", label: "More Direct Bookings" },
      { number: "-20%", label: "Reduced OTA Commission Fees" },
      { number: "0.8s", label: "Page Load Latency" },
      { number: "4.9/5", label: "Guest Experience Rating" }
    ],
    testimonial: {
      quote: "Our guest house bookings have doubled since launching this beautiful website. Guests love the photos and direct booking flow.",
      author: "General Manager",
      title: "Serene Stays Resort"
    }
  },
  {
    id: "policy-portal",
    slug: "policy-portal",
    title: "PolicyGuard Advisory Platform",
    category: "Websites",
    year: "2026",
    url: "policy-website-two.vercel.app",
    liveUrl: "https://policy-website-two.vercel.app/",
    altUrl: "https://policy-website-five.vercel.app/",
    image: "/images/projects/policy-web.jpg",
    client: "PolicyGuard Corporate Advisors",
    color: "#00b4ff",
    description: "Corporate policy, compliance documentation, and risk management platform engineered for institutional governance and client advisory.",
    services: ["Websites", "Web Applications", "Custom Software"],
    metric: { value: "100%", label: "Compliance Document Accessibility" },
    challenge: "Corporate clients required a clean, secure digital repository to explore regulatory policies, terms of governance, and advisory consultations.",
    solution: "Developed high-trust digital policy platforms with structured content hierarchy, instant document search, and direct strategic consultation booking.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    results: [
      { number: "100%", label: "Policy Document Accessibility" },
      { number: "99+", label: "Performance Score" },
      { number: "4.8×", label: "Longer Reading Engagement" },
      { number: "Zero", label: "Broken Regulatory Links" }
    ],
    testimonial: {
      quote: "The policy platform engineered by Mahntrix allows our corporate partners to navigate complex compliance materials with ease.",
      author: "Managing Partner",
      title: "PolicyGuard Advisors"
    }
  }
];

export const WORK_CATEGORIES = [
  "All",
  "Enterprise ERP Systems",
  "Web Applications",
  "Websites",
  "Custom Software"
];
