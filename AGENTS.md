# Kişisel Portfolyo Sitesi — Master Rules

Bu dosya portfolyo projesinin tüm kurallarını içerir.

## Proje Kimliği

- **Tip:** Kişisel geliştirici portfolyo sitesi (static)
- **Sahibi:** Furkan — Full-Stack Developer, Avusturya merkezli
- **Stack:** React + TypeScript + Tailwind CSS v4
- **Deploy:** Vercel (ücretsiz tier) veya Netlify
- **Domain:** Henüz belirlenmedi (opsiyonel, ~10€/yıl)
- **Diller:** DE (varsayılan), EN (toggle ile geçiş)
- **Maliyet hedefi:** 0€ (hosting + build ücretsiz)

## Tasarım Stratejisi

TASARIM-FIRST: Kullanıcı Stitch veya başka araçlardan HTML tasarımı gönderir,
AI bunu React component'lerine çevirir. Tasarım gelmeden kod yazılmaz.

## Hedef Kitle

- **Birincil:** HR personeli, teknik bilgisi düşük, görsel etkilenmeye açık
- **İkincil:** Teknik lead/CTO, GitHub repo'larına bakar
- HR GitHub'dan anlamaz → projeler görsel olarak (GIF/video/screenshot) sunulmalı
- Canlı demo pahalı → video/GIF kayıt ile çözülür

## Site Yapısı

```
Tek sayfa (Single Page) veya minimal çok sayfa:

├── Hero Section
│   ├── Ad, soyad
│   ├── Ünvan: "Full-Stack Developer"
│   ├── Kısa tagline (1 cümle, ne yaptığını özetler)
│   └── CTA butonları: CV indir, İletişim, GitHub
│
├── Projeler Section
│   ├── Proje kartları (grid veya carousel)
│   │   ├── Screenshot veya otomatik oynayan GIF/video
│   │   ├── Proje adı
│   │   ├── 2-3 cümle: problem → çözüm → sonuç
│   │   ├── Tech stack badge'leri (ikon + isim)
│   │   └── Linkler: GitHub repo | Canlı demo (varsa) | Video demo
│   └── Detay modal veya alt sayfa (opsiyonel)
│
├── Hakkımda Section
│   ├── Kısa bio (3-5 cümle)
│   ├── Tech stack overview (kullanılan teknolojiler)
│   └── Deneyim timeline (opsiyonel)
│
├── İletişim Section
│   ├── Email
│   ├── LinkedIn
│   ├── GitHub
│   └── İletişim formu (opsiyonel, Formspree veya benzeri ücretsiz)
│
└── Footer
    ├── Copyright
    └── Sosyal linkler
```

## Değişmez Kurallar

### Genel
- Static site → backend YOK, veritabanı YOK
- Tüm içerik JSON veya MDX dosyalarından okunur (hardcoded metin YASAK)
- Projeler `data/projects.ts` dosyasından gelir → yeni proje eklemek = 1 obje eklemek
- Responsive: mobil-first tasarım zorunlu
- Performans: Lighthouse 90+ (tüm kategoriler)
- Accessibility: temel a11y kuralları (alt text, aria-label, kontrast)

### Proje Gösterimi
- Her proje için EN AZ 1 görsel (screenshot, GIF veya video) zorunlu
- GIF/video tercih edilir (çalışır hali gösterir, HR'ı etkiler)
- Canlı demo linki opsiyonel (sadece aktif olan projeler için)
- Tech stack badge'leri standart → `data/techStack.ts` dosyasından
- Proje açıklaması formatı: Problem → Çözüm → Sonuç (teknik olmayan dilde)

### Medya
- Görseller optimized (WebP format, lazy loading)
- Video/GIF dosyaları: max 10MB, autoplay + muted + loop
- Büyük dosyalar → YouTube/Vimeo embed veya Cloudinary (ücretsiz tier)
- `/public/projects/[proje-slug]/` altında organize

### İçerik Dili
- Varsayılan: Deutsch (Avusturya pazarı için)
- İngilizce toggle (i18n ile)
- Türkçe YOK (profesyonel portfolyo, hedef pazar Avusturya/DACH + uluslararası)

### Tasarım
- Stitch'ten gelen tasarım bire bir uygulanır
- Tasarım gelmeden placeholder UI yazılmaz
- Dark mode desteği (opsiyonel ama önerilir)
- Animasyonlar: subtle, profesyonel (framer-motion veya CSS transitions)
- Sayfa yükleme süresi: 3sn altında

### Kod Kalitesi
- AI kalıntısı SIFIR (yorum, placeholder, Lorem ipsum YASAK)
- Component yapısı temiz, reusable
- SEO meta tag'leri zorunlu (title, description, og:image)
- Sitemap.xml otomatik üretilir

### Deploy
- Vercel veya Netlify (ücretsiz)
- CI/CD: push to main → otomatik deploy
- Custom domain bağlama (opsiyonel)

## Veri Yapısı

### `data/projects.ts`
```typescript
export interface Project {
  slug: string;
  title: string;
  tagline: string;            // 1 cümle özet
  description: string;        // 2-3 cümle: problem → çözüm → sonuç
  techStack: TechKey[];       // badge olarak gösterilecek
  media: {
    thumbnail: string;        // kart için küçük görsel
    images?: string[];        // screenshot'lar
    video?: string;           // demo videosu (dosya yolu veya embed URL)
    gif?: string;             // otomatik oynayan GIF
  };
  links: {
    github?: string;
    demo?: string;
    video?: string;           // YouTube/Vimeo linki
  };
  featured: boolean;          // ana sayfada öne çıkar mı
  order: number;              // sıralama
}
```

### `data/profile.ts`
```typescript
export interface Profile {
  name: string;
  title: string;              // "Full-Stack Developer"
  tagline: string;            // hero section tagline
  bio: string;                // hakkımda bölümü
  location: string;           // "Avusturya"
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;              // PDF CV dosya yolu
  languages: string[];        // konuşulan diller
}
```

### `data/techStack.ts`
```typescript
export interface Tech {
  key: string;                // "react", "java", "spring-boot" vs.
  name: string;               // görüntülenen ad
  icon: string;               // ikon dosya yolu veya icon library referansı
  category: "frontend" | "backend" | "database" | "devops" | "other";
}
```

## Proje İçerikleri (Eklenecekler)

Bu bölüm projeler tamamlandıkça güncellenir:

### 1. White-Label E-Commerce Platform (tukkan)
- **Durum:** Geliştirme aşamasında
- **Açıklama:** Çok müşterili SaaS e-ticaret platformu
- **Stack:** Java 17, Spring Boot 3, React, TypeScript, PostgreSQL, Stripe, Docker
- **Medya:** Tamamlandığında ekran kaydı alınacak

### 2. (Diğer projeler eklenecek)

## Dosya Yapısı

```
portfolio/
├── AGENTS.md                 # Bu dosya (kurallar)
├── public/
│   ├── projects/             # Proje görselleri (slug bazlı klasörler)
│   ├── cv/                   # CV PDF dosyası
│   └── favicon/              # Favicon setleri
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, Container
│   │   ├── sections/         # Hero, Projects, About, Contact
│   │   ├── ui/               # Button, Card, Badge, Modal
│   │   └── common/           # LanguageToggle, ThemeToggle, SEO
│   ├── data/
│   │   ├── projects.ts       # Proje verileri
│   │   ├── profile.ts        # Profil bilgileri
│   │   └── techStack.ts      # Teknoloji listesi
│   ├── hooks/                # Custom hooks
│   ├── i18n/                 # Çeviri dosyaları (de.json, en.json)
│   ├── styles/               # Global stiller
│   ├── types/                # TypeScript tipleri
│   └── App.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Akış

1. Stitch'ten tasarım gelir (HTML/görsel)
2. Tasarım React component'lerine çevrilir
3. `data/` dosyaları doldurulur
4. Proje görselleri/GIF'leri hazırlanır
5. Vercel'e deploy edilir
6. (Opsiyonel) Custom domain bağlanır
