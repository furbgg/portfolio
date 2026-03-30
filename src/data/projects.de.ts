import type { Project } from "@/types";

function cloudinaryThumb(videoUrl: string): string {
  return videoUrl.replace(/\.mp4$/, ".jpg");
}

export const projects: Project[] = [
  {
    slug: "stockmeister",
    title: "StockMeister",
    tagline:
      "Full-Stack-Restaurantmanagement-System mit Login, Dashboard, Lagerverwaltung, POS und Mehrsprachigkeit.",
    description:
      "StockMeister ist mein Abschlussprojekt aus der Ausbildung und wurde als Full-Stack-Restaurantmanagement-System entwickelt. Die Anwendung vereint Login, Dashboard, Lager- und Rezeptverwaltung, Low-Stock-Warnungen, Waste-Management, POS und Mehrsprachigkeit in einer modernen Weboberfläche.",
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
      role: "Abschlussprojekt — Full-Stack Entwicklung",
      heroImage: "/projects/stockmeister/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
      heroVideoLabel: "Dashboard & Login",
      challenge: [
        'StockMeister ist mein Abschlussprojekt aus der Ausbildung und ein Full-Stack-Webprojekt für die Gastronomie. Ziel des Projekts war es, zentrale Abläufe eines Restaurantbetriebs in einer einzigen Anwendung zusammenzuführen und digital abzubilden.',
        'Die Anwendung umfasst einen Login-Bereich mit rollenbasierter Zugriffskontrolle, ein Dashboard mit Kennzahlen und Übersichten, eine Zutaten- und Rezeptverwaltung, Low-Stock- und Out-of-Stock-Warnungen, Lageranpassungen, Waste-Management sowie ein <span class="text-primary font-medium">POS-System</span> für Bestellungen und Zahlungen. Zusätzlich unterstützt das System mehrere Sprachen, darunter Deutsch, Englisch, Türkisch und BHS.',
        'Technisch habe ich das Projekt mit <span class="text-primary font-medium">React, TypeScript, Vite und Tailwind CSS</span> im Frontend sowie mit <span class="text-primary font-medium">Java 17, Spring Boot, Spring Security, JWT, JPA/Hibernate und PostgreSQL</span> im Backend umgesetzt. Die Kommunikation zwischen Frontend und Backend erfolgt über eine REST-API. Für die lokale Entwicklung und das Deployment-Setup habe ich Docker verwendet.',
        'Besonders wichtig war mir eine praxisnahe und benutzerfreundliche Umsetzung. Bestellungen im POS wirken sich direkt auf den Lagerbestand aus, kritische Bestände werden hervorgehoben, und durch die Mehrsprachigkeit ist die Anwendung auch in einem internationalen Team einsetzbar.',
      ],
      impacts: [
        {
          title: "Eigenständige Full-Stack Entwicklung",
          description:
            "Das gesamte Projekt wurde von der Konzeption über das Design bis zur technischen Umsetzung eigenständig entwickelt — Frontend, Backend, Datenbank und Deployment.",
        },
        {
          title: "Praxisnahe Abläufe",
          description:
            "Bestellungen im POS wirken sich direkt auf den Lagerbestand aus. Kritische Bestände werden automatisch erkannt und hervorgehoben.",
        },
        {
          title: "Mehrsprachigkeit für internationale Teams",
          description:
            "Unterstützung für Deutsch, Englisch, Türkisch und BHS — einsetzbar in einem internationalen Gastronomiebetrieb.",
        },
        {
          title: "REST-API Architektur",
          description:
            "Saubere Trennung von Frontend und Backend über eine RESTful API mit JWT-basierter Authentifizierung und rollenbasierter Zugriffskontrolle.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
          title: "Login, Rollen und Dashboard",
          description:
            "Dieses Video zeigt den Login-Prozess, den geschützten Zugriff über Rollen sowie das Dashboard mit Kennzahlen, Diagrammen und aktuellen Übersichten.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4",
          title: "Kategorien und Low-Stock",
          description:
            "Hier wird die Verwaltung von Zutatenkategorien sowie die Erkennung von niedrigen und leeren Lagerbeständen gezeigt. Kritische Bestände können schnell aktualisiert werden.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813144/StockMeister_Pos_und_alle_zakh4s.mp4",
          title: "POS und Mehrsprachigkeit",
          description:
            "In diesem Video wird das POS-System mit Produktkategorien, der Bestell- und Bezahlablauf sowie die Sprachumschaltung zwischen Deutsch, Englisch, Türkisch und BHS gezeigt.",
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
          role: "Relationale Datenbank",
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
          role: "Containerisierung",
          colorClass: "on-surface",
        },
      ],
      features: [
        {
          title: "POS-System",
          description:
            "Bestell- und Bezahlablauf mit Produktkategorien. Jede Bestellung wirkt sich in Echtzeit auf den Lagerbestand aus.",
          icon: "point_of_sale",
          wide: true,
        },
        {
          title: "Low-Stock-Warnungen",
          description:
            "Automatische Erkennung und Hervorhebung von niedrigen und leeren Lagerbeständen mit schneller Aktualisierungsmöglichkeit.",
          icon: "warning",
        },
        {
          title: "Mehrsprachigkeit",
          description:
            "Unterstützung für DE, EN, TR und BHS — einsetzbar in internationalen Teams.",
          tags: ["i18n", "DE", "EN", "TR", "BHS"],
        },
        {
          title: "Rollenbasierte Zugriffskontrolle",
          description:
            "JWT-basierte Authentifizierung mit Spring Security. Verschiedene Benutzerrollen mit abgestuften Berechtigungen.",
          icon: "shield",
          wide: true,
        },
        {
          title: "Waste-Management",
          description:
            "Erfassung und Verwaltung von Lebensmittelabfällen zur Kostenoptimierung im Restaurantbetrieb.",
          icon: "delete",
        },
        {
          title: "Dashboard",
          description:
            "Zentrale Übersicht mit Kennzahlen, Diagrammen und aktuellen Bestandsinformationen auf einen Blick.",
          icon: "dashboard",
        },
      ],
    },
  },
  {
    slug: "sportanlage-plattform",
    title: "Sportanlage Plattform",
    tagline:
      "Multilinguale Buchungs- und Verwaltungsplattform für Sportanlagen mit Kundenfrontend, Admin-Dashboard und Stripe-Integration.",
    description:
      "Dieses Projekt ist meine zweite größere Webanwendung und umfasst eine mehrsprachige Buchungs- und Verwaltungsplattform für eine Sportanlage. Enthalten sind ein Kundenfrontend, ein Admin-Dashboard, Buchungs- und Zahlungsabläufe, Gutschein- und Happy-Hour-Funktionen sowie eine Oberfläche in fünf Sprachen.",
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
      role: "Full-Stack Entwicklung — Eigenprojekt",
      heroImage: "/projects/sportanlage-plattform/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
      heroVideoLabel: "Startseite & Benutzeroberfläche",
      challenge: [
        'Dieses Projekt ist eine mehrsprachige Full-Stack-Webanwendung für die digitale Verwaltung einer Sportanlage und stellt meine zweite größere Webplattform dar. Die Anwendung verbindet ein öffentliches Kundenfrontend mit einem umfangreichen Admin-Bereich und deckt dabei nicht nur klassische Reservierungsprozesse, sondern auch operative, organisatorische und sicherheitsrelevante Anforderungen ab.',
        'Im öffentlichen Bereich stehen eine moderne Buchungsstrecke, mehrsprachige Benutzerführung, Online-Zahlungen, Gutscheinlogik, zeitabhängige <span class="text-primary font-medium">Happy-Hour-Rabatte</span> sowie Funktionen zur eigenständigen Verwaltung bestehender Buchungen im Mittelpunkt. Die Oberfläche unterstützt fünf Sprachen: Deutsch, Englisch, Türkisch, Albanisch und BHS.',
        'Der Admin-Bereich ist als eigenständige Verwaltungsoberfläche konzipiert und geht deutlich über ein einfaches CRUD-Panel hinaus. Enthalten sind ein Dashboard mit Kennzahlen und Auswertungen, Reservierungs- und Zahlungsverwaltung, Gutschein- und Rabattsteuerung, Konfiguration von Preisen und Zeitslots, Verwaltung von Material und Größenbeständen, Personal- und Kontaktverwaltung, Benachrichtigungsfunktionen sowie Systemeinstellungen.',
        'Ein besonderer Schwerpunkt liegt auf <span class="text-primary font-medium">Sicherheit und Zuverlässigkeit</span>. Integriert wurden JWT-basierte Authentifizierung, Refresh-Token-Rotation, aktive Sitzungsverwaltung sowie eine Zwei-Faktor-Authentifizierung per TOTP. Sensible Tokens werden gehasht verarbeitet; Rate-Limiting, Sicherheitsheader, CORS-Konfiguration und sichere Cookie-Strategien wurden ebenfalls berücksichtigt.',
        'Technisch basiert das Projekt auf <span class="text-primary font-medium">React 19, TypeScript, Vite und Tailwind CSS</span> im Frontend sowie auf <span class="text-primary font-medium">Java 17, Spring Boot 3.2, Spring Security, JWT, PostgreSQL und Flyway</span> im Backend. Ergänzt durch Stripe, strukturierte Logs, Monitoring-Schnittstellen und automatisierte Tests.',
      ],
      impacts: [
        {
          title: "Umfangreiche Full-Stack-Plattform",
          description:
            "Kundenfrontend + Admin-Dashboard in einer Anwendung. Buchungen, Zahlungen, Gutscheine, Personalverwaltung und Konfiguration an einem Ort.",
        },
        {
          title: "5-sprachige Internationalisierung",
          description:
            "Vollständige Benutzerführung in Deutsch, Englisch, Türkisch, Albanisch und BHS — einsetzbar in einem multikulturellen Umfeld.",
        },
        {
          title: "Professionelle Sicherheitsarchitektur",
          description:
            "JWT mit Refresh-Token-Rotation, TOTP-2FA, gehashte Tokens, Rate Limiting, Sicherheitsheader und sichere Cookie-Konfiguration.",
        },
        {
          title: "Stripe-Integration & Zahlungslogik",
          description:
            "Online-Zahlungen, Vor-Ort-Zahlung, Refund-Logik, Gutschein-System mit Gültigkeit und Limits sowie zeitabhängige Happy-Hour-Rabatte.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
          title: "Startseite",
          description:
            "Dieses Video zeigt die öffentliche Startseite der Website und vermittelt einen Eindruck von Aufbau, Navigation und Benutzeroberfläche.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4",
          title: "Turnierbereich",
          description:
            "Dieses Video zeigt den Turnierbereich der Website mit Turnierübersicht und Anmeldeseite aus Benutzersicht.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4",
          title: "Buchungsablauf",
          description:
            "Hier wird gezeigt, wie eine Buchung im Frontend durchgeführt wird — vom Auswahlprozess bis zur Reservierung.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4",
          title: "Buchungsverwaltung",
          description:
            "Das Buchungssystem aus Sicht der Verwaltung, einschließlich Übersicht, Bearbeitung und Verwaltung bestehender Reservierungen.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4",
          title: "Mehrsprachigkeit",
          description:
            "Die Sprachumschaltung der Website in Deutsch, Englisch, Türkisch, Albanisch und BHS (Bosnisch/Kroatisch/Serbisch).",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4",
          title: "Admin-Dashboard",
          description:
            "Admin-Login sowie Dashboard mit Tabellen, Kennzahlen, Buchungsdaten und weiteren Übersichten im Verwaltungsbereich.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4",
          title: "Admin-Kategorien",
          description:
            "Überblick über die verschiedenen Kategorien, Tabs und Verwaltungsbereiche innerhalb des Admin-Panels.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4",
          title: "Systemkonfiguration",
          description:
            "Einstellungsseite im Admin-Bereich mit Konfigurationen wie Preisen, Öffnungszeiten, Benachrichtigungen, Happy-Hour-Einstellungen und weiteren Systemoptionen.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4",
          title: "Happy-Hour",
          description:
            "Happy-Hour-Funktion mit zeitabhängigen Rabatten und ihrer Darstellung innerhalb der Anwendung.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453701/Gutschein_hswwgw.mp4",
          title: "Gutschein-System",
          description:
            "Gutscheinlogik der Anwendung — von der Verwaltung im Admin-Bereich bis zur Sichtbarkeit und Nutzung im Frontend.",
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
          role: "Datenbank & Migrationen",
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
          role: "Zahlungsabwicklung",
          colorClass: "primary",
        },
        {
          name: "Docker",
          icon: "view_in_ar",
          role: "Containerisierung",
          colorClass: "on-surface",
        },
        {
          name: "Spring Security",
          icon: "shield",
          role: "Auth & 2FA",
          colorClass: "tertiary",
        },
      ],
      features: [
        {
          title: "Buchungssystem mit Slot-Hold",
          description:
            "Verfügbarkeitslogik, Slot-Hold-Mechanismus und dynamische Preisberechnung. Buchungen, Umbuchungen und Stornierungen aus einer Oberfläche.",
          icon: "calendar_month",
          wide: true,
        },
        {
          title: "Stripe-Zahlungen & Refunds",
          description:
            "Online-Zahlungen via Stripe, Vor-Ort-Zahlung sowie vollständige Refund-Logik für stornierte Buchungen.",
          icon: "payments",
        },
        {
          title: "5 Sprachen",
          description:
            "Vollständige Internationalisierung in Deutsch, Englisch, Türkisch, Albanisch und BHS.",
          tags: ["i18n", "DE", "EN", "TR", "AL", "BHS"],
        },
        {
          title: "Admin-Dashboard & KPIs",
          description:
            "Umfangreicher Verwaltungsbereich mit Umsatz-, Auslastungs- und Trendansichten, Reservierungs- und Zahlungsverwaltung, Personal- und Kontaktverwaltung.",
          icon: "dashboard",
          wide: true,
        },
        {
          title: "Gutschein- & Happy-Hour-System",
          description:
            "Gutscheine mit Gültigkeit, Limits und Rabattlogik. Zeitabhängige Happy-Hour-Preisvorteile mit konfigurierbaren Zeitfenstern.",
          icon: "loyalty",
        },
        {
          title: "2FA & Sicherheitsarchitektur",
          description:
            "TOTP-basierte Zwei-Faktor-Authentifizierung, JWT mit Refresh-Token-Rotation, Rate Limiting, gehashte Tokens und sichere Cookie-Konfiguration.",
          icon: "verified_user",
        },
      ],
    },
  },
  {
    slug: "ecommerce-plattform",
    title: "E-Commerce Plattform",
    tagline:
      "Moderne E-Commerce-Plattform für kuratierte Souvenirs und Wohnaccessoires mit hochwertigem Storefront, Kundenbereich, Wunschliste, Checkout, Zahlungsintegration und Admin-Workflow. Bald verfügbar.",
    description:
      "Eine moderne Full-Stack E-Commerce-Plattform für handverlesene Souvenirs und Wohnaccessoires mit hochwertigem UI, responsivem Frontend, intelligenter Produktsuche, Wunschliste, Kundenkonto, mehrstufigem Checkout, Zahlungsanbindung, Retourenlogik und Admin-Workflows. Technisch umgesetzt mit React, TypeScript, Tailwind CSS, Java Spring Boot, PostgreSQL, Redis, Stripe, OAuth und automatisierten E-Mail-Prozessen. Bald verfügbar.",
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
