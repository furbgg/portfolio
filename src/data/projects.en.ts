import type { Project } from "@/types";

function cloudinaryThumb(videoUrl: string): string {
  return videoUrl.replace(/\.mp4$/, ".jpg");
}

export const projectsEN: Project[] = [
  {
    slug: "stockmeister",
    title: "StockMeister",
    tagline:
      "Full-stack restaurant management system with login, dashboard, inventory control, POS, and multi-language support.",
    description:
      "StockMeister is my final apprenticeship project, developed as a comprehensive full-stack restaurant management system. The application seamlessly integrates a login portal, an interactive dashboard, inventory and recipe management, low-stock alerts, waste tracking, a modern POS module, and multiple language settings.",
    techStack: [
      "react",
      "typescript",
      "tailwind",
      "vite",
      "java",
      "spring-boot",
      "spring-security",
      "jwt",
      "postgresql",
      "docker",
    ],
    media: {
      thumbnail: "/projects/stockmeister/cover.png",
    },
    links: {},
    featured: true,
    order: 1,
    detail: {
      role: "Final Project — Full-Stack Development",
      heroImage: "/projects/stockmeister/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
      heroVideoLabel: "Dashboard & Login View",
      challenge: [
        'StockMeister is my final apprenticeship project and a full-stack web application designed for the gastronomy sector. The goal was to centralize essential restaurant operations into a single cohesive digital solution.',
        'The application features role-based access control, a dynamic dashboard tracking key performance indicators, ingredient and recipe supervision, low/out-of-stock alerts, real-time inventory adjustments, waste management, and a <span class="text-primary font-medium">POS system</span> for seamless order placement and processing. Furthermore, the platform supports multiple languages including English, German, Turkish, and BHS.',
        'On the technical side, I built the project using <span class="text-primary font-medium">React, TypeScript, Vite, and Tailwind CSS</span> on the frontend, powered by a backend using <span class="text-primary font-medium">Java 17, Spring Boot, Spring Security, JWT, JPA/Hibernate, and PostgreSQL</span>. A secure REST API ensures smooth communication between the layers. Docker was utilized to streamline local development and deployment.',
        'A strong emphasis was placed on practical usability. For example, any POS order immediately impacts the overarching inventory in real-time. Critical stock levels are visually highlighted to prompt swift action, making the platform practical for diverse, international kitchen teams.',
      ],
      impacts: [
        {
          title: "Independent Full-Stack Execution",
          description:
            "From initial planning and UI/UX design to backend development and deployment, this project was developed entirely independently.",
        },
        {
          title: "Real-world Practical Workflows",
          description:
            "POS transactions automatically adjust inventory in real time. Critical stock thresholds are inherently monitored to prevent shortages.",
        },
        {
          title: "Internationalization for Global Teams",
          description:
            "I18n support including EN, DE, TR, and BHS languages, enabling immediate adoption by international restaurant staff.",
        },
        {
          title: "Robust REST-API Architecture",
          description:
            "Implemented a clean separation of concerns, fortified with JWT authentication and strict role-based access validation.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
          title: "Login, Roles & Dashboard",
          description:
            "Showcases the secure login sequence, role-dependent views, and the overarching dashboard with live charts and key metrics.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4",
          title: "Categories & Low-Stock Alerts",
          description:
            "Demonstrates inventory category management combined with immediate detection and updating of depleted stock.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813144/StockMeister_Pos_und_alle_zakh4s.mp4",
          title: "POS Integration & i18n",
          description:
            "Walkthrough of the Point of Sale logic covering product categories, order-to-payment cycle, and seamless language switching.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813144/StockMeister_Pos_und_alle_zakh4s.mp4"),
        },
      ],
      techDetails: [
        {
          name: "Spring Boot",
          icon: "terminal",
          role: "Backend & REST-API",
          colorClass: "primary",
        },
        {
          name: "PostgreSQL",
          icon: "database",
          role: "Relational Database",
          colorClass: "tertiary",
        },
        {
          name: "React + Vite",
          icon: "code",
          role: "Frontend & UI",
          colorClass: "secondary",
        },
        {
          name: "Docker",
          icon: "view_in_ar",
          role: "Containerization",
          colorClass: "on-surface",
        },
      ],
      features: [
        {
          title: "Point of Sale (POS)",
          description:
            "Order management and checkout system intertwined directly with real-time inventory reductions upon payment.",
          icon: "point_of_sale",
          wide: true,
        },
        {
          title: "Low-Stock Monitoring",
          description:
            "Automated flagging of items falling below designated thresholds, facilitating immediate reordering actions.",
          icon: "warning",
        },
        {
          title: "Localization",
          description:
            "Fully translated interface available in English, German, Turkish, and BHS out of the box.",
          tags: ["i18n", "EN", "DE", "TR", "BHS"],
        },
        {
          title: "Role-based Access Control",
          description:
            "JWT security via Spring Security ensures that waitstaff, managers, and admins only see what they are authorized to.",
          icon: "shield",
          wide: true,
        },
        {
          title: "Waste Tracking",
          description:
            "Logs ingredient spoilage or mistakes, empowering management to cut down on costs effectively.",
          icon: "delete",
        },
        {
          title: "Insights Dashboard",
          description:
            "A macroscopic hub combining key numbers, live charts, and operational metrics at a glance.",
          icon: "dashboard",
        },
      ],
    },
  },
  {
    slug: "sportanlage-plattform",
    title: "Sports Facility Platform",
    tagline:
      "A multilingual booking and management ecosystem tailored for sports complexes, featuring a public storefront, admin dashboard, and Stripe integration.",
    description:
      "This project signifies my second large-scale web application—a comprehensive reservation platform for sports facilities. It bridges a modern public booking interface in five languages with a full-fledged admin panel handling courts, finances, discounts, and staff data.",
    techStack: [
      "react",
      "typescript",
      "tailwind",
      "vite",
      "java",
      "spring-boot",
      "spring-security",
      "jwt",
      "postgresql",
      "stripe",
      "docker",
    ],
    media: {
      thumbnail: "/projects/sportanlage-plattform/cover.png",
    },
    links: {},
    featured: true,
    order: 2,
    detail: {
      role: "Full-Stack Development — Personal Project",
      heroImage: "/projects/sportanlage-plattform/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
      heroVideoLabel: "Homepage & UI Navigation",
      challenge: [
        'Conceived as a scalable SaaS-like environment, this project digitally transforms the physical management operations for indoor/outdoor sports arenas. It serves two distinct audiences: public users looking to join matches or book courts seamlessly, and facility administrators requiring deep operational oversight.',
        'The public-facing frontend is optimized for conversion and accessibility, featuring streamlined booking funnels, integration with Stripe for safe checkouts, timed <span class="text-primary font-medium">happy hour</span> dynamic pricing, and self-service reservation management. It gracefully handles five distinct localization contexts: English, German, Turkish, Albanian, and BHS.',
        'Unlike basic CRUD panels, the admin dashboard acts as a central nervous system. Administrators can digest KPIs, process refunds, manage physical equipment loans, control discounting levers, orchestrate staff shifts, and tweak global system settings without developer intervention.',
        'A massive emphasis was placed on <span class="text-primary font-medium">modern security patterns</span>. The authentication layer uses JWTs complete with automated refresh token rotation and limits concurrent sessions. Admins are protected by TOTP-based 2FA. In addition, the system incorporates structured logging, basic rate-limiting, secure headers, and rigorous testing layers.',
        'The application is built on top of a rock-solid foundation: <span class="text-primary font-medium">React 19, TypeScript, Vite, and Tailwind CSS</span> on the client side, interacting with <span class="text-primary font-medium">Java 17, Spring Boot 3.2, Spring Security, JWT, PostgreSQL, and Flyway</span> on the server.',
      ],
      impacts: [
        {
          title: "Holistic Ecosystem Architecture",
          description:
            "Combines a B2C storefront with a B2B admin dashboard within one unified application architecture, streamlining deployments and logic.",
        },
        {
          title: "Complex 5-Language i18n",
          description:
            "Full localized context supporting DE, EN, TR, AL, and BHS—tailored directly to diverse customer segments.",
        },
        {
          title: "Enterprise-grade Security Flow",
          description:
            "Implemented TOTP 2FA, JWT refresh rotation strategies, hashed credentials, and strictly managed CORS boundaries.",
        },
        {
          title: "Stripe Payment & Refund Lifecycles",
          description:
            "Integrated seamless online checkout flows alongside on-site payment tracking, automated refund actions, and complex voucher discount strategies.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
          title: "Landing Page",
          description:
            "A showcase of the public entrance, highlighting UI responsiveness, layout strategy, and overall branding language.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4",
          title: "Tournament Center",
          description:
            "Focuses on the public view of scheduled events and the user registration sequence for competitions.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4",
          title: "Booking Funnel Journey",
          description:
            "An end-to-end look at a consumer booking a time slot, capturing date selection, options toggles, and payment initiation.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4",
          title: "Self-Service Management",
          description:
            "Displays the tools provided to users to individually oversee, amend, or terminate their active reservations.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4",
          title: "Language Toggling",
          description:
            "Visual demonstration of the application's instantaneous re-rendering across the 5 provided locales.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4",
          title: "Admin Analytics",
          description:
            "Entering the protected admin zone to review business metrics, charts, and macro booking data insights.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4",
          title: "Category Controls",
          description:
            "A fast look into how administrators organize facility structures and toggle various feature categories.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4",
          title: "System Parameters",
          description:
            "Exposes the deep configuration dashboard handling everything from dynamic pricing matrices to notification toggles.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4",
          title: "Happy-Hour Mechanics",
          description:
            "Setting up dynamic, time-limited discount periods in the backend and visualizing their effect on the frontend schedule.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453701/Gutschein_hswwgw.mp4",
          title: "Voucher Engine",
          description:
            "Generating usage-capped monetary codes via the admin interface and validating their consumption at checkout.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453701/Gutschein_hswwgw.mp4"),
        },
      ],
      techDetails: [
        {
          name: "Spring Boot 3.2",
          icon: "terminal",
          role: "Backend & REST-API",
          colorClass: "primary",
        },
        {
          name: "PostgreSQL + Flyway",
          icon: "database",
          role: "Database & Migrations",
          colorClass: "tertiary",
        },
        {
          name: "React 19 + Vite",
          icon: "code",
          role: "Frontend & UI",
          colorClass: "secondary",
        },
        {
          name: "Stripe",
          icon: "payments",
          role: "Payment Integration",
          colorClass: "primary",
        },
        {
          name: "Docker",
          icon: "view_in_ar",
          role: "Containerization",
          colorClass: "on-surface",
        },
        {
          name: "Spring Security",
          icon: "shield",
          role: "Auth & 2FA Layer",
          colorClass: "tertiary",
        },
      ],
      features: [
        {
          title: "Booking with Slot-Hold",
          description:
            "Robust concurrency logic ensuring overlapping bookings are impossible while capturing dynamic pricing variables.",
          icon: "calendar_month",
          wide: true,
        },
        {
          title: "Financial Operations",
          description:
            "Hybrid cash/online transaction support bridged with Stripe processing and fully tracked refund flows.",
          icon: "payments",
        },
        {
          title: "Linguistic Flexibility",
          description:
            "Completely isolated localization files powering clean content swaps across 5 different distinct audiences.",
          tags: ["i18n", "EN", "DE", "TR", "AL", "BHS"],
        },
        {
          title: "Administrative Hub",
          description:
            "A macroscopic control interface granting complete business agility over pricing, employees, inventory, and users.",
          icon: "dashboard",
          wide: true,
        },
        {
          title: "Dynamic Promo Rules",
          description:
            "Engineered mechanics validating time-sensitive coupons and automatically slashing prices during declared happy hours.",
          icon: "loyalty",
        },
        {
          title: "Security & Validation",
          description:
            "Backed by TOTP verification boundaries, expiring short-lived tokens, and strict HTTP cookie containment.",
          icon: "verified_user",
        },
      ],
    },
  },
  {
    slug: "ecommerce-plattform",
    title: "E-Commerce Platform",
    tagline:
      "A modern digital storefront tailored for curated lifestyle goods. Complete with a polished consumer journey, secure checkout, and back-office pipelines. Coming Soon.",
    description:
      "A meticulously designed e-commerce architecture catering to premium souvenirs and home accessories. It boasts an intuitive product discovery flow, localized multi-step checkouts, wishlists, and robust headless API fundamentals utilizing React, Spring Boot, Redis cacheing, and PostgreSQL. Currently under active development.",
    techStack: [
      "react",
      "typescript",
      "tailwind",
      "java",
      "spring-boot",
      "postgresql",
      "stripe",
      "docker",
    ],
    media: {
      thumbnail: "/projects/ecommerce-plattform/cover.png",
    },
    links: {},
    featured: true,
    order: 3,
  },
];
