# Melih Karabacak — Portfolyo

Kişisel portfolyo sitem. Oyun ve web geliştirme projelerimi sergileyen, koyu ve oyun-temalı tek sayfalık bir uygulama.

🔗 **Canlı:** [melih-karabacak.vercel.app](https://melih-karabacak.vercel.app/)

## Hakkında

Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Godot ile oyunlar, Next.js / React ile web uygulamaları geliştiriyorum. Bu site; Hero, Projeler, Yetenekler, Hakkımda ve İletişim bölümlerinden oluşuyor; koyu bir arayüz, neon vurgular, cam efektli kartlar ve scroll ile beliren animasyonlar içeriyor.

## Teknolojiler

- **Next.js 16** (App Router, Turbopack)
- **React 19** · **TypeScript**
- **Tailwind CSS v4**
- **Vercel** (deploy — her push otomatik yayına gider)

## Sergilenen projeler

| Proje | Açıklama | Teknolojiler |
|-------|----------|--------------|
| **Vessel: Null** | Pekiştirmeli öğrenme boss AI'lı 2D Souls-like (bitirme projesi) | Godot 4, GDScript, Python, RL |
| **KolayFresh** | Gerçek bir manav için e-ticaret sitesi | Next.js, Supabase, TypeScript, PWA |
| **Resonari** | Çizerken gerçek zamanlı müzik üreten uygulama | React, Vite, Tone.js |
| **CRM Sistemi** | Katmanlı mimaride müşteri & satış yönetimi | C#, ASP.NET Core, MSSQL |
| **Atölye Yönetim** | Tabela & lazer kesim atölyeleri için panel | React, TypeScript, Supabase, jsPDF |

## Özellikler

- Koyu, oyun-temalı arayüz (mor/cyan/pembe neon paleti)
- Gerçek proje logoları ve marka ikonlu sosyal butonlar (hover efektleri)
- Scroll reveal animasyonları + `prefers-reduced-motion` desteği
- Tamamen responsive
- İçerik tek dosyada (`src/data/content.ts`) — kolay güncelleme

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [localhost:3000](http://localhost:3000) adresini aç.

Üretim derlemesi için:

```bash
npm run build
npm start
```

## Proje yapısı

```
src/
├─ app/                 # layout, sayfa, global stiller
├─ components/          # Nav, Hero, ProjectCard, Sections, SocialButton, Reveal
└─ data/content.ts      # tüm içerik (profil, projeler, yetenekler)
public/logos/           # proje logoları
```

## İletişim

- **E-posta:** melihkarabacak17@gmail.com
- **GitHub:** [melih-krbck](https://github.com/melih-krbck)
- **LinkedIn:** [melih-karabacak](https://www.linkedin.com/in/melih-karabacak-b05133286/)
