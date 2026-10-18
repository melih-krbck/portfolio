export type Lang = "tr" | "en";

export type StatusKey = "developing" | "live" | "completed";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: StatusKey;
  live?: string;
  repo?: string;
  accent: string;
  emoji: string;
  logo?: string;
};

export type SkillGroup = { title: string; items: string[] };

// Dile bağımsız profil bilgileri (tek kaynak)
export const profile = {
  name: "Melih Karabacak",
  email: "melihkarabacak17@gmail.com",
  github: "https://github.com/melih-krbck",
  githubUser: "melih-krbck",
  linkedin: "https://www.linkedin.com/in/melih-karabacak-b05133286/",
};

export type Dictionary = {
  role: string;
  tagline: string;
  location: string;
  nav: { projects: string; skills: string; about: string; contact: string };
  hero: {
    badge: string;
    greetingPre: string;
    greetingName: string;
    greetingPost: string;
    ctaProjects: string;
    tech: string;
  };
  projectsSection: { index: string; title: string; desc: string };
  skillsSection: { index: string; title: string };
  about: {
    index: string;
    title: string;
    paragraphs: string[];
    locationLabel: string;
    focusLabel: string;
    focusValue: string;
    langLabel: string;
    langValue: string;
    statusLabel: string;
    statusValue: string;
  };
  contact: {
    titlePre: string;
    titleHighlight: string;
    desc: string;
    email: string;
    github: string;
  };
  footer: string;
  liveLabel: string;
  codeLabel: string;
  statusLabels: Record<StatusKey, string>;
  projects: Project[];
  skills: SkillGroup[];
};

export const content: Record<Lang, Dictionary> = {
  tr: {
    role: "Oyun & Web Geliştirici",
    tagline:
      "Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisi. Godot ile oyunlar, Next.js ile web uygulamaları geliştiriyorum.",
    location: "İstanbul, Türkiye",
    nav: { projects: "Projeler", skills: "Yetenekler", about: "Hakkımda", contact: "İletişim" },
    hero: {
      badge: "Selçuk Üniversitesi · Bilgisayar Mühendisliği",
      greetingPre: "Merhaba, ben ",
      greetingName: "Melih",
      greetingPost: ".",
      ctaProjects: "Projelerimi Gör",
      tech: "Godot · Next.js · Python · React",
    },
    projectsSection: {
      index: "01 / PROJELER",
      title: "Yaptığım işler",
      desc: "Oyun geliştirmeden gerçek müşteriler için üretim uygulamalarına kadar üzerinde çalıştığım projeler.",
    },
    skillsSection: { index: "02 / YETENEKLER", title: "Kullandığım teknolojiler" },
    about: {
      index: "03 / HAKKIMDA",
      title: "Biraz kendimden",
      paragraphs: [
        "Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Kod yazmaya olan ilgim oyun geliştirmeyle başladı ve zamanla web uygulamalarına da uzandı.",
        "Bitirme projem Vessel: Null, Godot ile geliştirdiğim bir 2D Souls-like — ilgimi en çok çeken kısım ise boss yapay zekasını pekiştirmeli öğrenme ile eğitmek. Bunun yanında React ve Next.js ile gerçek müşteriler için üretim uygulamaları geliştiriyorum.",
        "Güçlü bir tasarım vizyonuyla teknik uygulamayı bir araya getirmeyi seviyorum — ister bir oyunun atmosferi, ister bir arayüzün akışı olsun.",
      ],
      locationLabel: "Konum",
      focusLabel: "Odak",
      focusValue: "Oyun & Web",
      langLabel: "Diller",
      langValue: "GDScript, Python, TS",
      statusLabel: "Durum",
      statusValue: "Staja açık",
    },
    contact: {
      titlePre: "Birlikte bir şey ",
      titleHighlight: "yapalım",
      desc: "Staj fırsatları, proje işbirlikleri veya sadece merhaba demek için — her zaman ulaşabilirsin.",
      email: "E-posta Gönder",
      github: "GitHub Profili",
    },
    footer: "Next.js · Tailwind ile yapıldı",
    liveLabel: "Canlı Demo",
    codeLabel: "Kod",
    statusLabels: { developing: "Geliştiriliyor", live: "Canlı", completed: "Tamamlandı" },
    projects: [
      {
        slug: "vessel-null",
        title: "Vessel: Null",
        subtitle: "2D Souls-like + Pekiştirmeli Öğrenme Boss AI",
        description:
          "Bitirme projem. Godot 4 ile geliştirilen, gotik-sci-fi atmosferli bir 2D Souls-like. Oyuncu, çökmüş bir dijital simülasyonda (Edenyx) doğan özgür bir yapay zeka. Öne çıkan yanı: final boss'un davranışlarının pekiştirmeli öğrenme (RL) ile eğitilmesi. Çift zıplama, dash, kombo saldırı, soul sistemi ve düşman AI'ları uygulandı.",
        tags: ["Godot 4", "GDScript", "Python", "RL / PyTorch", "PixelLab AI"],
        status: "developing",
        accent: "#a855f7",
        emoji: "🗡️",
        logo: "/logos/vessel.svg",
      },
      {
        slug: "orka-motor",
        title: "ORKA Motor Yedek Parça",
        subtitle: "Motosiklet yedek parça sitesi — canlıda, gerçek alan adıyla",
        description:
          "Bir aile işletmesi için sıfırdan kurduğum çıkma/sıfır motosiklet yedek parça sitesi (orkamotor.com). Marka → model → yıl uyumluluğu, yazım hatalarını, eş anlamlıları ve bitişik yazımı anlayan Türkçe arama (PostgreSQL), sepetten WhatsApp ile sipariş ve ilan/katalog/marka yönetimli tam bir admin paneli. Next.js 16 önbellekleme ile mobil Lighthouse 90+, JSON-LD ve site haritası sayesinde Google'da dizinli; Supabase RLS ile güvenli.",
        tags: ["Next.js 16", "Supabase", "PostgreSQL", "TypeScript", "Tailwind", "SEO"],
        status: "live",
        live: "https://www.orkamotor.com",
        accent: "#e81b25",
        emoji: "🏍️",
        logo: "/logos/orka.png",
      },
      {
        slug: "kolayfresh",
        title: "KolayFresh",
        subtitle: "Gerçek bir manav için e-ticaret sitesi",
        description:
          "Beşiktaş'ta gerçek bir manavın online sipariş sitesi. Ürün listeleme (Türkçe arama), sepet, kapıda ödeme, adres defteri ve tam bir admin paneli (sipariş/ürün yönetimi, satış grafiği, PDF sipariş fişi). PWA olarak yüklenebiliyor ve çevrimdışı çalışıyor.",
        tags: ["Next.js 16", "Supabase", "TypeScript", "Tailwind", "PWA"],
        status: "completed",
        accent: "#38e6d4",
        emoji: "🥬",
        logo: "/logos/kolayfresh.png",
      },
      {
        slug: "resonari",
        title: "Resonari",
        subtitle: "Çizimini duy — çizerken müzik üreten uygulama",
        description:
          "Canvas'a çizdikçe gerçek zamanlı müzik üreten yaratıcı bir web uygulaması. Dikey konum notayı, renk enstrümanı (8 farklı), çizgi türü artikülasyonu, fırça kalınlığı ses yüksekliğini belirliyor. Katman sistemi, undo/redo, zoom/pan, kayıt & tekrar çalma ve link ile paylaşım içeriyor.",
        tags: ["React", "Vite", "Tone.js", "Tailwind", "Supabase"],
        status: "live",
        live: "https://cizimden-muzik.vercel.app",
        accent: "#f0508a",
        emoji: "🎨",
        logo: "/logos/resonari.svg",
      },
      {
        slug: "crm-project",
        title: "CRM Sistemi",
        subtitle: "Katmanlı mimaride müşteri & satış yönetimi",
        description:
          "C# / ASP.NET Core ile geliştirilen, temiz katmanlı mimariye (API · Business · DataAccess · Entities · DTO) sahip kapsamlı bir CRM. Müşteri, firma, satış, fırsat, teklif, ürün, aktivite, not ve destek talebi modülleri; rol tabanlı kullanıcı sistemi. Web API'nin yanında ayrı bir web arayüzü de içeriyor. Backend mimarisi ve katmanlı tasarım pratiğim üzerine odaklandığım proje.",
        tags: ["C#", "ASP.NET Core", "MSSQL", "Web API", "Katmanlı Mimari"],
        status: "completed",
        repo: "https://github.com/melih-krbck/CRM-Project",
        accent: "#6366f1",
        emoji: "💼",
        logo: "/logos/crm.svg",
      },
      {
        slug: "atolye-yonetim",
        title: "Atölye Yönetim Sistemi",
        subtitle: "Tabela & lazer kesim atölyeleri için panel",
        description:
          "Pleksi/sac/kompozit/MDF tabela ve lazer kesim atölyeleri için web tabanlı yönetim paneli. Sipariş takibi, maliyet hesabı, stok yönetimi ve PDF teklif oluşturma. 8 modüllük MVP tamamlandı ve canlıda çalışıyor.",
        tags: ["React", "TypeScript", "Supabase", "jsPDF", "Tailwind"],
        status: "live",
        live: "https://atolye-yonetim.vercel.app",
        accent: "#f59e0b",
        emoji: "🏭",
        logo: "/logos/atolye.svg",
      },
    ],
    skills: [
      { title: "Oyun Geliştirme", items: ["Godot 4", "GDScript", "Oyun Tasarımı", "Pekiştirmeli Öğrenme (RL)", "Pixel Art (AI)"] },
      { title: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
      { title: "Backend & Araçlar", items: ["Python", "C#", "Supabase", "PostgreSQL", "Git"] },
    ],
  },

  en: {
    role: "Game & Web Developer",
    tagline:
      "Computer Engineering student at Selçuk University. I build games with Godot and web apps with Next.js.",
    location: "Istanbul, Türkiye",
    nav: { projects: "Projects", skills: "Skills", about: "About", contact: "Contact" },
    hero: {
      badge: "Selçuk University · Computer Engineering",
      greetingPre: "Hi, I'm ",
      greetingName: "Melih",
      greetingPost: ".",
      ctaProjects: "View My Projects",
      tech: "Godot · Next.js · Python · React",
    },
    projectsSection: {
      index: "01 / PROJECTS",
      title: "What I've built",
      desc: "Projects I've worked on, from game development to production apps for real clients.",
    },
    skillsSection: { index: "02 / SKILLS", title: "Technologies I use" },
    about: {
      index: "03 / ABOUT",
      title: "A bit about me",
      paragraphs: [
        "I'm a Computer Engineering student at Selçuk University. My interest in coding started with game development and gradually grew into web applications.",
        "My graduation project, Vessel: Null, is a 2D Souls-like built with Godot — the part I find most exciting is training the boss AI with reinforcement learning. Alongside that, I build production apps for real clients with React and Next.js.",
        "I love combining a strong design vision with solid technical execution — whether it's the atmosphere of a game or the flow of an interface.",
      ],
      locationLabel: "Location",
      focusLabel: "Focus",
      focusValue: "Game & Web",
      langLabel: "Languages",
      langValue: "GDScript, Python, TS",
      statusLabel: "Status",
      statusValue: "Open to internships",
    },
    contact: {
      titlePre: "Let's build something ",
      titleHighlight: "together",
      desc: "For internship opportunities, project collaborations, or just to say hi — feel free to reach out anytime.",
      email: "Send Email",
      github: "GitHub Profile",
    },
    footer: "Built with Next.js · Tailwind",
    liveLabel: "Live Demo",
    codeLabel: "Code",
    statusLabels: { developing: "In Progress", live: "Live", completed: "Completed" },
    projects: [
      {
        slug: "vessel-null",
        title: "Vessel: Null",
        subtitle: "2D Souls-like + Reinforcement Learning Boss AI",
        description:
          "My graduation project. A gothic sci-fi 2D Souls-like built with Godot 4. You play as a free artificial intelligence born inside a collapsed digital simulation (Edenyx). The standout part: the final boss's behavior is trained with reinforcement learning (RL). Double jump, dash, combo attacks, a soul system and enemy AIs are implemented.",
        tags: ["Godot 4", "GDScript", "Python", "RL / PyTorch", "PixelLab AI"],
        status: "developing",
        accent: "#a855f7",
        emoji: "🗡️",
        logo: "/logos/vessel.svg",
      },
      {
        slug: "orka-motor",
        title: "ORKA Motor Spare Parts",
        subtitle: "Motorcycle spare parts store — live on a real domain",
        description:
          "A used & new motorcycle spare parts site I built from scratch for a family business (orkamotor.com). Brand → model → year fitment, a Turkish-aware search that handles typos, synonyms and joined words (PostgreSQL), cart-to-WhatsApp ordering and a full admin panel for listings, catalog and brands. Mobile Lighthouse 90+ with Next.js 16 caching, indexed on Google with JSON-LD and a sitemap, secured with Supabase RLS.",
        tags: ["Next.js 16", "Supabase", "PostgreSQL", "TypeScript", "Tailwind", "SEO"],
        status: "live",
        live: "https://www.orkamotor.com",
        accent: "#e81b25",
        emoji: "🏍️",
        logo: "/logos/orka.png",
      },
      {
        slug: "kolayfresh",
        title: "KolayFresh",
        subtitle: "E-commerce site for a real greengrocer",
        description:
          "An online ordering site for a real greengrocer in Beşiktaş, Istanbul. Product listing (with Turkish search), cart, cash on delivery, address book, and a full admin panel (order/product management, sales chart, PDF order receipt). Installable as a PWA and works offline.",
        tags: ["Next.js 16", "Supabase", "TypeScript", "Tailwind", "PWA"],
        status: "completed",
        accent: "#38e6d4",
        emoji: "🥬",
        logo: "/logos/kolayfresh.png",
      },
      {
        slug: "resonari",
        title: "Resonari",
        subtitle: "Hear your drawing — music generated as you draw",
        description:
          "A creative web app that generates music in real time as you draw on a canvas. Vertical position sets the note, color the instrument (8 of them), line style the articulation, and brush thickness the volume. Includes a layer system, undo/redo, zoom/pan, record & replay, and sharing via link.",
        tags: ["React", "Vite", "Tone.js", "Tailwind", "Supabase"],
        status: "live",
        live: "https://cizimden-muzik.vercel.app",
        accent: "#f0508a",
        emoji: "🎨",
        logo: "/logos/resonari.svg",
      },
      {
        slug: "crm-project",
        title: "CRM System",
        subtitle: "Layered-architecture customer & sales management",
        description:
          "A comprehensive CRM built with C# / ASP.NET Core, using a clean layered architecture (API · Business · DataAccess · Entities · DTO). Modules for customers, companies, sales, opportunities, quotes, products, activities, notes and support tickets; role-based user system. Ships with a separate web interface alongside the Web API. The project where I focused on backend architecture and layered design.",
        tags: ["C#", "ASP.NET Core", "MSSQL", "Web API", "Layered Architecture"],
        status: "completed",
        repo: "https://github.com/melih-krbck/CRM-Project",
        accent: "#6366f1",
        emoji: "💼",
        logo: "/logos/crm.svg",
      },
      {
        slug: "atolye-yonetim",
        title: "Workshop Management System",
        subtitle: "Panel for signage & laser-cutting workshops",
        description:
          "A web-based management panel for plexi/sheet-metal/composite/MDF signage and laser-cutting workshops. Order tracking, cost calculation, stock management and PDF quote generation. The 8-module MVP is complete and running in production.",
        tags: ["React", "TypeScript", "Supabase", "jsPDF", "Tailwind"],
        status: "live",
        live: "https://atolye-yonetim.vercel.app",
        accent: "#f59e0b",
        emoji: "🏭",
        logo: "/logos/atolye.svg",
      },
    ],
    skills: [
      { title: "Game Development", items: ["Godot 4", "GDScript", "Game Design", "Reinforcement Learning (RL)", "Pixel Art (AI)"] },
      { title: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
      { title: "Backend & Tools", items: ["Python", "C#", "Supabase", "PostgreSQL", "Git"] },
    ],
  },
};
