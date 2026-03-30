import type { Project } from "@/types";

function cloudinaryThumb(videoUrl: string): string {
  return videoUrl.replace(/\.mp4$/, ".jpg");
}

export const projectsTR: Project[] = [
  {
    slug: "stockmeister",
    title: "StockMeister",
    tagline:
      "Giriş sistemi, kontrol paneli, stok yönetimi, POS ve çoklu dil desteği sunan Full-Stack restoran yönetim platformu.",
    description:
      "StockMeister, staj dönemimi bitirme projem olarak geliştirdiğim kapsamlı bir restoran yönetim sistemidir. Sistem; yetkilendirmeli giriş, interaktif dashboard, stok ve tarif yönetimi, düşük stok uyarıları, atık (waste) kontrolü, modern bir POS modülü ve çok dilli desteği tek bir platformda birleştiriyor.",
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
      role: "Bitirme Projesi — Full-Stack Geliştirme",
      heroImage: "/projects/stockmeister/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
      heroVideoLabel: "Dashboard & Giriş Ekranı",
      challenge: [
        'StockMeister, mesleki eğitimimi (Ausbildung) başarıyla tamamlarken geliştirdiğim, gastronomi sektörüne yönelik tasarlanmış bir Full-Stack web uygulamasıdır. Amacım, bir restoranın temel operasyonlarını dijitalleştirerek merkezi tek bir çözümde toplamaktı.',
        'Proje içerisinde; role dayalı erişim kontrolü sunan bir giriş portalı, önemli metrikleri anlık gösteren bir dashboard, detaylı reçete/malzeme takibi, azalan veya biten stoklar için otomatik uyarılar, anlık depo ayarlamaları, israf edilen ürünlerin takibi ve doğrudan satış işlemlerini yöneten bir <span class="text-primary font-medium">POS sistemi</span> bulunuyor. Üstelik tüm sistem Almanca, İngilizce, Türkçe ve BHS dillerini destekleyecek şekilde uluslararası standartlarda kodlandı.',
        'Teknik altyapı olarak Frontend tarafında <span class="text-primary font-medium">React, TypeScript, Vite ve Tailwind CSS</span> kullanırken; Backend tarafını <span class="text-primary font-medium">Java 17, Spring Boot, Spring Security, JWT, JPA/Hibernate ve PostgreSQL</span> mimarisiyle inşa ettim. Hem veritabanı hem de sunucu haberleşmesini güvenli REST-API endpointleri üzerinden sağladım. Lokal geliştirme ve testleri izole hale getirmek için Docker mimarisini kullandım.',
        'Bu projede benim için en önemli kriter pratik kullanım kolaylığıydı: POS ekranında siparişi onayladığınız an, kullanılan malzemeler otomatik olarak ana stoktan düşer. Kritik seviyeye inen stoklar ekranda görsel uyarıyla belirir.'
      ],
      impacts: [
        {
          title: "Bağımsız Full-Stack Uygulama",
          description:
            "İhtiyaç analizinden veritabanı tasarımına, frontend kodlamasından uzak sunucu yayınlamasına kadar tüm proje %100 bağımsız olarak geliştirildi.",
        },
        {
          title: "Gerçek Zamanlı Zincirleme Akış",
          description:
            "POS işlemlerinin (Masa siparişlerinin) depo stoğunu eş zamanlı ve hatasız olarak azalttığı akıllı loglama.",
        },
        {
          title: "Çok Uluslu Ekipler İçin i18n",
          description:
            "TR, DE, EN ve BHS dahil çoklu dil altyapısı sayesinde enternasyonal restoran personeline anında erişim sağladı.",
        },
        {
          title: "Modern REST-API Mimarisi",
          description:
            "Güvenli JWT doğrulama altyapısıyla desteklenen pürüzsüz servis odaklı mimari.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4",
          title: "Giriş, Roller & Dashboard",
          description:
            "Güvenli giriş adımlarını, farklı kullanıcı rollerini ve finansal durumu özetleyen zengin kontrol panelini gösterir.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813141/StockMeister_Dashboard_k9pjbn.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4",
          title: "Kritik Stok Takibi",
          description:
            "Malzemelerin nasıl kategorilere ayrıldığını ve tükenmek üzere olan stoğun anında tespitini içerir.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774813142/StockMeister_Kategorien_und_Niedriger_Bestand_xsbjbu.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774813144/StockMeister_Pos_und_alle_zakh4s.mp4",
          title: "POS Entegrasyonu & Dil Değişimi",
          description:
            "Satış noktası (POS) iş akışını, sipariş-ödeme ekranlarını ve sistemdeki pürüzsüz dil geçişlerini sergiler.",
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
          role: "İlişkisel Veritabanı",
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
          role: "Konteyner Çözümü",
          colorClass: "on-surface",
        },
      ],
      features: [
        {
          title: "Satış Noktası (POS)",
          description:
            "Sipariş anında ürün stoğunu doğrudan düşüren tam bağlantılı gerçek zamanlı ödeme ve masa sistemi.",
          icon: "point_of_sale",
          wide: true,
        },
        {
          title: "Düşük Stok Alarmları",
          description:
            "Belirlenen seviyenin altına inen stoğu anında kırmızı şekilde uyararak tedarik gecikmelerini önler.",
          icon: "warning",
        },
        {
          title: "Uluslararası Çoklu Dil (i18n)",
          description:
            "İngilizce, Almanca, Türkçe ve BHS aktif olarak tam çevrili gelir.",
          tags: ["i18n", "TR", "EN", "DE", "BHS"],
        },
        {
          title: "Rol Bazlı Yetkilendirme",
          description:
            "Kimlik hırsızlığını ve erişim problemlerini engelleyen JWT tabanlı üst düzey oturum izolasyonu.",
          icon: "shield",
          wide: true,
        },
        {
          title: "Fire/Atık Kontrolü",
          description:
            "Bozulan veya ziyan olan gıdaların takibini yaparak gereksiz masrafları raporlar.",
          icon: "delete",
        },
        {
          title: "Merkezi Dashboard",
          description:
            "Tek bakışta restoranın durumunu, o ayki hedefleri ve acil bildirimleri özetleyen kontrol ekranı.",
          icon: "dashboard",
        },
      ],
    },
  },
  {
    slug: "sportanlage-plattform",
    title: "Spor Tesi̇sleri̇ Platformu",
    tagline:
      "Modern bir arayüz, gelişmiş admin kontrol paneli, Stripe çevrimiçi tahsilat ve rezerve imkânlarıyla donatılmış tesislere özel B2B / B2C yönetimi.",
    description:
      "İkinci büyük web platformu projem; kapalı/açık spor tesislerindeki saha kiralamalarını uçtan uca dijitale indiren devasa bir çok dilli işletme uygulamasıdır. Admin kontrol paneline giden verilerle, anlık indirim modüllerine kadar tüm kurguları barındırır.",
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
      role: "Full-Stack Geliştirme — Bireysel Proje",
      heroImage: "/projects/sportanlage-plattform/cover.png",
      heroVideoUrl:
        "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
      heroVideoLabel: "Anasayfa Görünümü",
      challenge: [
        'SaaS tarzında büyük ölçekli düşünülerek tasarlanan bu proje ile, gerçek fiziksel bir spor tesisinin yönetim sürecinde ihtiyaç duyduğu bütün operasyonel gereksinimler dijitalleştirildi. İki temel müşteri tabanına hitap ediyor: Maç ayarlamak için gelen oyuncular ve tesis finans süreçlerini yönetecek saha operatörleri.',
        'Frontend tarafında Stripe ödeme altyapısıyla güvenli yer ayırma, anlık değişen <span class="text-primary font-medium">happy-hour fırsatları</span> görme ve kullanıcı dostu randevu ekranı sunulurken; sistemin bütünü İngilizce, Almanca, Türkçe, Arnavutça ve BHS olmak üzere 5 dile uyumlu hale getirildi.',
        'Gelişmiş admin arka ofisi üzerinden; yetkililer karlılık raporlarını inceleyebilir, Stripe üzerinden direk iadesini yapabilir, müşterilerine kullan-at hediye kodları veya zaman bazlı indirimler oluşturabilir ve turnuvaların başvuru ağlarını kurgulayabilirler.',
        '<span class="text-primary font-medium">Uluslararası yazılım güvenlik standartları</span> projede aktif kılındı. Authentication (Oturum) mekanizması TOTP(2FA) kullanılarak sadece adminlere özel güvenlik bariyeri, Token Rotasyon algoritması kullanarak aktif koruma ve HTTPS limitasyonlarını merkeze koyan hassas bir firewall kurgusunu içeriyor.',
        'Projenin tamamı Backend katmanında <span class="text-primary font-medium">Java 17, Spring Boot 3.2, Spring Security, JWT, PostgreSQL + Flyway</span> ile yazılıp, Frontend katmanında <span class="text-primary font-medium">React 19, TypeScript, Vite ve Tailwind CSS</span> ikilisi harmanlanarak finalize edilmiştir.'
      ],
      impacts: [
        {
          title: "Kurumsal Altyapı Hızlı Çözüm",
          description:
            "B2C Müşteri arayüzü ile B2B Admin paneli yapısını aynı büyük mimaride birbirini bozmadan buluşturmayı başardım.",
        },
        {
          title: "Kapsamlı 5 Dil Yerelleştirme",
          description:
            "Her dil klasörünün bağımsız kalarak sistemi anlık olarak DE, EN, TR, AL ve BHS dil rotalarında çalıştırması.",
        },
        {
          title: "Sertifikalı Güvenlik Prensibi",
          description:
            "Admin hesabı için TOTP 2FA, Refresh JWT token mekanizması, dışarıdan erişime kapalı CORS limitleri oluşturuldu.",
        },
        {
          title: "Stripe Online Tahsilat & İade",
          description:
            "Kullanıcının kredi kartından onay alıp, anlık indirim çeki (Vaucher) entegre edip tahsil ettikten sonra, iade anında paranın otomatik hesaba yansıdığı mekanizma tasarımı.",
        },
      ],
      processVideos: [
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4",
          title: "Anasayfa",
          description:
            "Sitenin halka açık tasarım dili, UI navigasyonu ve genel konsept uyumu.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Homepage_jypzmw.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4",
          title: "Turnuva Merkezi",
          description:
            "Açılış aşamasındaki müsabakalara başvuru modülleri ve detayları.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453700/Turniere_x36ykt.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4",
          title: "Randevu Akışı",
          description:
            "Tarih ve saatin belirlenmesinden sonra, kilit mekanizmasının ödeme talebine kadarki serüveni.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453693/Buchungsystemslot_xgnahp.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4",
          title: "Bireysel Pane",
          description:
            "Müşterilerin kendi geçmiş saatlerini yönetebilme arabirimi.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Buchungsystem_Buchungverwalten_qxqxy7.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4",
          title: "Dinamik Çeviri Testi",
          description:
            "Sistemin saniyeler içinde bütün arabirimi anlık 5 dile çevirmesi.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453702/Mehrsprachingkeit_dgguyd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4",
          title: "Yönetici İstatistikleri",
          description:
            "Yöneticilere özel finansal okuma grafikleri.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453686/Admindashboard_g5qqjd.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4",
          title: "Kategori Parametreleri",
          description:
            "Hangi rezervasyonun hangi kortta olacağını belirleyen dinamik menüler.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453697/Adminpage_jxayiz.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4",
          title: "Sistem Ayarları",
          description:
            "Fiyat hesaplama modülü ve saat bloklamalarının genel otomatizasyonu.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453691/Admin_Einstellungen_coo1b5.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4",
          title: "Zamana Dayalı Fırsat",
          description:
            "Saatlik indirimleri programlayan Happy-Hour otomasyonu.",
          thumbnailUrl: cloudinaryThumb("https://res.cloudinary.com/din9yr5bk/video/upload/v1774453696/Happyhour_vejlnm.mp4"),
        },
        {
          url: "https://res.cloudinary.com/din9yr5bk/video/upload/v1774453701/Gutschein_hswwgw.mp4",
          title: "İndirim Motoru",
          description:
            "Özel kuponlara sahip müşterilerin sistemden otomatik iskontosunu alma döngüsü.",
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
          role: "Veritabanı",
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
          role: "Ödeme Geçidi",
          colorClass: "primary",
        },
        {
          name: "Docker",
          icon: "view_in_ar",
          role: "Konteyner Mimarisi",
          colorClass: "on-surface",
        },
        {
          name: "Spring Security",
          icon: "shield",
          role: "Auth & 2FA Katmanı",
          colorClass: "tertiary",
        },
      ],
      features: [
        {
          title: "Bağlantılı Randevu Sistemi",
          description:
            "Aynı saati 2 farklı müşterinin satın alamayacağı kitlenme mimarisine sahip reaktif fiyatlama modeli.",
          icon: "calendar_month",
          wide: true,
        },
        {
          title: "Finans Operasyonları",
          description:
            "Hibrit nakit veya stripe tabanlı satın alma rotasyonu ve gelişmiş iade foksiyonları.",
          icon: "payments",
        },
        {
          title: "Global Form: 5 Dil",
          description:
            "Uygulamayı İngilizce, Almanca, Türkçe, Arnavutça ve Boşnakçaya ulaştıran uluslararası iz.",
          tags: ["i18n", "EN", "DE", "TR", "AL", "BHS"],
        },
        {
          title: "Süper Yönetici Hub'ı",
          description:
            "Kritik verileri şifreleyerek fiyat ayarlayanlara sınırsız yönetim gücü verme felsefesi.",
          icon: "dashboard",
          wide: true,
        },
        {
          title: "Akıllı Kampanya Döngüsü",
          description:
            "Programlanmış belli saatlerde gürültüsüz indirim uygulayan zamanlı botlar.",
          icon: "loyalty",
        },
        {
          title: "Tehditlerden İzolasyon",
          description:
            "Oturumların zorla kapatılması, şifreleme ve rate limit algoritmalarıyla botları uzaklaştırma.",
          icon: "verified_user",
        },
      ],
    },
  },
  {
    slug: "ecommerce-plattform",
    title: "Akıllı E-Ticaret Platformu",
    tagline:
      "Modern yaşam objeleri için sıfırdan oluşturulmuş premium mağaza mimarisi. Yakında sizlerle.",
    description:
      "Ayrıcalıklı ürünleri vitrinlemek için kurgulanmış geniş ölçekli online alışveriş yazılımı. Sezgisel ürün kartları, istek listeleri, JWT + Oauth, PostgreSQL, Redis ve React güvencesi ile. Şu anda yoğun geliştirme aşamasında.",
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
