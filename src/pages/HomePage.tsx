import { useTranslation } from "react-i18next";
import StarField from "../components/StarField";
import Navbar from "../components/Navbar";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

// ─── Static icon/tag data (language-independent) ─────────────────────────────

const servicesMeta = [
  {
    key: "web",
    tags: ["Next.js", "React", "TypeScript"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.97 14.97 0 0 1 4 9 14.97 14.97 0 0 1-4 9A14.97 14.97 0 0 0 8 12 14.97 14.97 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    key: "mobile",
    tags: ["Flutter", "Swift", "Kotlin"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path strokeLinecap="round" d="M12 18h.01" />
      </svg>
    ),
  },
  {
    key: "ai",
    tags: ["Unity", "Godot Engine", "C#"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M10 12h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v4M6 12h4" />
        <circle cx="16" cy="11" r="0.5" fill="currentColor" />
        <circle cx="18" cy="13" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

const techStack = [
  { name: "Next.js",        category: "Frontend" },
  { name: "React",          category: "Frontend" },
  { name: "TypeScript",     category: "Language" },
  { name: "Tailwind CSS",   category: "Frontend" },
  { name: "Node.js",        category: "Backend" },
  { name: "Python",         category: "Backend" },
  { name: "FastAPI",        category: "Backend" },
  { name: "PostgreSQL",     category: "Database" },
  { name: "Supabase",        category: "Backend" },
  { name: "Redis",          category: "Cache" },
  { name: "AWS",            category: "Cloud" },
  { name: "Docker",         category: "DevOps" },
  { name: "Kubernetes",     category: "DevOps" },
  { name: "GitHub Actions", category: "CI/CD" },

  { name: "Claude",         category: "AI" },
  { name: "Gemini",         category: "AI" },
];

const processNumbers = ["01", "02", "03", "04"] as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  // ── Theme shorthand ────────────────────────────────────────────────────────
  const text      = isDark ? "text-[#F8FAFC]"    : "text-[#0F172A]";
  const muted     = isDark ? "text-[#F8FAFC]/55" : "text-[#475569]";
  const faint     = isDark ? "text-[#F8FAFC]/50" : "text-[#475569]";
  const veryfaint = isDark ? "text-[#F8FAFC]/30" : "text-[#94A3B8]";
  const starlight = isDark ? "text-[#BAE6FD]"    : "text-[#0284C7]";
  const card50    = isDark ? "bg-[#0F172A]/50"   : "bg-white/70";
  const card60    = isDark ? "bg-[#0F172A]/60"   : "bg-white/80";
  const badge     = isDark
    ? "border-[#BAE6FD]/20 bg-[#BAE6FD]/5 text-[#BAE6FD]"
    : "border-[#0284C7]/30 bg-[#0284C7]/10 text-[#0284C7]";
  const scrollBorder  = isDark ? "border-[#BAE6FD]/25" : "border-[#0284C7]/25";
  const scrollDot     = isDark ? "bg-[#BAE6FD]/60"     : "bg-[#0284C7]/60";
  const footerBorder  = isDark ? "border-[#6366F1]/10" : "border-[#6366F1]/20";

  return (
    <>
      {isDark && <StarField />}
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ── */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="nebula-blob w-[600px] h-[600px] bg-[#6366F1] opacity-[0.07] top-[-100px] left-[-100px]" aria-hidden="true" />
          <div className="nebula-blob hidden md:block w-[500px] h-[500px] bg-[#BAE6FD] opacity-[0.04] top-[10%] right-[-80px]" aria-hidden="true" />
          <div className="nebula-blob hidden md:block w-[400px] h-[400px] bg-[#6366F1] opacity-[0.06] bottom-[5%] left-[30%]" aria-hidden="true" />

          <div className="relative text-center px-6 max-w-5xl mx-auto pb-24" style={{ zIndex: 10 }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${badge} text-sm mb-8 animate-fade-in`}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse-dot" />
              {t("hero.badge")}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
              <span className="gradient-text">{t("hero.title1")}</span>
              <br />
              <span className={text}>{t("hero.title2")}</span>
            </h1>

            <p className={`${muted} text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200`}>
              {t("hero.subtitle1")}
              <br className="hidden sm:block" />
              {t("hero.subtitle2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <a href="#about" className="px-8 py-4 rounded-full bg-[#6366F1] text-[#F8FAFC] font-semibold text-base btn-nebula-glow">
                {t("hero.cta_primary")}
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600" style={{ zIndex: 10 }}>
            <span className={`${veryfaint} text-xs tracking-widest uppercase`}>{t("hero.scroll")}</span>
            <div className={`w-5 h-9 rounded-full border ${scrollBorder} flex items-start justify-center pt-1.5`}>
              <div className={`w-1 h-2 rounded-full ${scrollDot} animate-scroll`} />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── About ── */}
        <section id="about" className="relative py-28 overflow-hidden">
          <div className="nebula-blob hidden md:block w-[400px] h-[400px] bg-[#6366F1] opacity-[0.05] top-0 right-0" aria-hidden="true" />
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-[#6366F1] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 block">{t("about.label")}</span>
            <h2 className={`text-4xl md:text-5xl font-bold ${text} mb-6 leading-tight`}>
              {t("about.title1")}
              <br />
              <span className="gradient-text">{t("about.title2")}</span>
            </h2>
            <p className={`${muted} leading-relaxed mb-1 text-base md:text-lg`}>{t("about.desc_l1")}</p>
            <p className={`${muted} leading-relaxed mb-1 text-base md:text-lg`}>{t("about.desc_l2")}</p>
            <p className={`${muted} leading-relaxed mb-1 text-base md:text-lg`}>{t("about.desc_l3")}</p>
            <p className={`${muted} leading-relaxed text-base md:text-lg`}>{t("about.desc_l4")}</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Services ── */}
        <section id="services" className="relative py-28 overflow-hidden">
          <div className="nebula-blob hidden md:block w-[500px] h-[500px] bg-[#BAE6FD] opacity-[0.03] bottom-0 left-0" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#6366F1] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 block">{t("services.label")}</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${text} mb-4`}>{t("services.title")}</h2>
              <p className={`${faint} max-w-xl mx-auto text-base md:text-lg`}>{t("services.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesMeta.map((s) => (
                <div key={s.key} className={`card-glow rounded-2xl p-7 ${card60} backdrop-blur-sm flex flex-col items-center text-center gap-4`}>
                  <div className={`w-12 h-12 rounded-xl bg-[#6366F1]/15 border border-[#6366F1]/25 flex items-center justify-center ${starlight}`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className={`${text} font-semibold text-lg md:text-xl mb-2`}>{t(`services.${s.key}_title`)}</h3>
                    <p className={`${faint} text-sm md:text-base leading-relaxed`}>{t(`services.${s.key}_desc`)}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 justify-center">
                    {s.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 ${isDark ? "text-[#BAE6FD]/80" : "text-[#0284C7]"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Tech Stack ── */}
        <section id="tech" className="relative py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#6366F1] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 block">{t("tech.label")}</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${text} mb-4`}>{t("tech.title")}</h2>
              <p className={`${faint} max-w-xl mx-auto text-base md:text-lg`}>{t("tech.subtitle")}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div key={tech.name} className={`tech-badge rounded-full px-4 py-2 text-sm md:text-base ${isDark ? "text-[#F8FAFC]/70" : "text-[#334155]"} cursor-default flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                  <span>{tech.name}</span>
                  <span className="text-[#6366F1]/60 text-xs">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Process ── */}
        <section id="process" className="relative py-28 overflow-hidden">
          <div className="nebula-blob hidden md:block w-[450px] h-[450px] bg-[#6366F1] opacity-[0.06] top-0 right-10" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#6366F1] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 block">{t("process.label")}</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${text} mb-4`}>{t("process.title")}</h2>
              <p className={`${faint} max-w-xl mx-auto text-base md:text-lg`}>{t("process.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processNumbers.map((num, i) => (
                <div key={num} className="relative h-full">
                  {i < processNumbers.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1px)] w-full h-px process-connector opacity-20" style={{ zIndex: 0 }} />
                  )}
                  <div className={`card-glow rounded-2xl p-6 ${card50} backdrop-blur-sm relative text-center h-full`} style={{ zIndex: 10 }}>
                    <div className="text-[#6366F1]/50 text-4xl font-black mb-4 tracking-tighter">{num}</div>
                    <h3 className={`${starlight} font-semibold text-lg md:text-xl mb-3`}>{t(`process.step${i + 1}_title`)}</h3>
                    <p className={`${faint} text-sm md:text-base leading-relaxed`}>{t(`process.step${i + 1}_desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={`relative border-t ${footerBorder} py-10`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className={`${starlight} font-bold text-lg`}>onuel</span>
              <span className="text-[#6366F1] font-bold text-lg">dev</span>
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#BAE6FD] animate-pulse-dot" />
            </div>
            <p className={`${veryfaint} text-sm text-center`}>{t("footer.copyright")}</p>
            <div className="flex gap-6 flex-wrap justify-center items-center">
              <a
                href="mailto:contact@onuel.dev"
                className={`${veryfaint} hover:text-[#BAE6FD] text-sm transition-colors inline-flex items-center gap-1.5`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                </svg>
                Contact
              </a>
              <Link to="/terms"   className={`${veryfaint} hover:text-[#BAE6FD] text-sm transition-colors`}>{t("footer.terms")}</Link>
              <Link to="/privacy" className={`${veryfaint} hover:text-[#BAE6FD] text-sm transition-colors`}>{t("footer.privacy")}</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
