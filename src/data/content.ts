export const profile = {
  name: "Melih Karabacak",
  role: "Oyun & Web Geliştirici",
  tagline:
    "Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisi. Godot ile oyunlar, Next.js ile web uygulamaları geliştiriyorum.",
  location: "İstanbul, Türkiye",
  email: "melihkarabacak17@gmail.com",
  github: "https://github.com/melih-krbck",
  githubUser: "melih-krbck",
  linkedin: "https://www.linkedin.com/in/melih-karabacak-b05133286/",
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: "Geliştiriliyor" | "Canlı" | "Tamamlandı";
  featured?: boolean;
  live?: string;
  repo?: string;
  accent: string; // css color
  emoji: string;
  logo?: string; // /public yolu — varsa emoji yerine gerçek logo gösterilir
};

export const projects: Project[] = [
  {
    slug: "vessel-null",
    title: "Vessel: Null",
    subtitle: "2D Souls-like + Pekiştirmeli Öğrenme Boss AI",
    description:
      "Bitirme projem. Godot 4 ile geliştirilen, gotik-sci-fi atmosferli bir 2D Souls-like. Oyuncu, çökmüş bir dijital simülasyonda (Edenyx) doğan özgür bir yapay zeka. Öne çıkan yanı: final boss'un davranışlarının pekiştirmeli öğrenme (RL) ile eğitilmesi. Çift zıplama, dash, kombo saldırı, soul sistemi ve düşman AI'ları uygulandı.",
    tags: ["Godot 4", "GDScript", "Python", "RL / PyTorch", "PixelLab AI"],
    status: "Geliştiriliyor",
    featured: true,
    accent: "#a855f7",
    emoji: "🗡️",
  },
  {
    slug: "kolayfresh",
    title: "KolayFresh",
    subtitle: "Gerçek bir manav için e-ticaret sitesi",
    description:
      "Beşiktaş'ta gerçek bir manavın online sipariş sitesi. Ürün listeleme (Türkçe arama), sepet, kapıda ödeme, adres defteri ve tam bir admin paneli (sipariş/ürün yönetimi, satış grafiği, PDF sipariş fişi). PWA olarak yüklenebiliyor ve çevrimdışı çalışıyor.",
    tags: ["Next.js 16", "Supabase", "TypeScript", "Tailwind", "PWA"],
    status: "Tamamlandı",
    featured: true,
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
    status: "Canlı",
    featured: true,
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
    status: "Tamamlandı",
    repo: "https://github.com/melih-krbck/CRM-Project",
    accent: "#6366f1",
    emoji: "💼",
  },
  {
    slug: "atolye-yonetim",
    title: "Atölye Yönetim Sistemi",
    subtitle: "Tabela & lazer kesim atölyeleri için panel",
    description:
      "Pleksi/sac/kompozit/MDF tabela ve lazer kesim atölyeleri için web tabanlı yönetim paneli. Sipariş takibi, maliyet hesabı, stok yönetimi ve PDF teklif oluşturma. 8 modüllük MVP tamamlandı ve canlıda çalışıyor.",
    tags: ["React", "TypeScript", "Supabase", "jsPDF", "Tailwind"],
    status: "Canlı",
    live: "https://atolye-yonetim.vercel.app",
    accent: "#f59e0b",
    emoji: "🏭",
    logo: "/logos/atolye.svg",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Oyun Geliştirme",
    items: ["Godot 4", "GDScript", "Oyun Tasarımı", "Pekiştirmeli Öğrenme (RL)", "Pixel Art (AI)"],
  },
  {
    title: "Web & Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Araçlar",
    items: ["Python", "Supabase", "PostgreSQL", "Git", "Vercel"],
  },
];
