import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

function FlyingComet({ isDark, width }: { isDark: boolean; width: number }) {
  const head = isDark ? "#BAE6FD" : "#0284C7";
  // 'o' 왼쪽 출발 → 텍스트 위 정점 → 'v' 오른쪽 아래로 낙하
  const arcPath = `M 0 0 Q ${width / 2} -40 ${width + 14} 0`;
  return (
    <svg
      className="absolute pointer-events-none"
      style={{ left: 0, top: "50%", width: `${width}px`, height: "1px", overflow: "visible", zIndex: 20 }}
      aria-hidden="true"
    >
      <g opacity="0">
        {/* glow halo */}
        <circle cx="0" cy="0" r="7"   fill={head}     fillOpacity="0.18" />
        {/* head */}
        <circle cx="0" cy="0" r="3.2" fill={head} />
        {/* tail dots — trail behind via rotate="auto" on negative-X axis */}
        <circle cx="-8"  cy="0" r="2.1" fill="#6366F1" fillOpacity="0.62" />
        <circle cx="-14" cy="0" r="1.3" fill="#6366F1" fillOpacity="0.36" />
        <circle cx="-19" cy="0" r="0.8" fill="#6366F1" fillOpacity="0.18" />

        {/* fade in → visible → fade out → pause */}
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.05;0.1;0.85;0.92;1"
          dur="6s"
          repeatCount="3"
          fill="freeze"
        />
        {/* smooth arc motion with ease-in-out, comet rotates along path */}
        <animateMotion
          path={arcPath}
          dur="6s"
          repeatCount="3"
          rotate="auto"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.45 0 0.55 1"
          fill="freeze"
        />
      </g>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const [logoWidth, setLogoWidth] = useState(158);
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const el = logoTextRef.current;
    if (!el) return;
    let ro: ResizeObserver | null = null;
    let cancelled = false;

    const setup = () => {
      if (cancelled || !el) return;
      setLogoWidth(el.getBoundingClientRect().width);
      ro = new ResizeObserver(([entry]) => {
        setLogoWidth(entry.contentRect.width);
      });
      ro.observe(el);
    };

    // 폰트 스왑이 모두 끝난 뒤 한 번만 계측 → FlyingComet 재시작 방지
    document.fonts.ready.then(setup);

    return () => {
      cancelled = true;
      ro?.disconnect();
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
  };

  const navLinks = [
    { href: "#about",    label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#tech",     label: t("nav.tech") },
    { href: "#process",  label: t("nav.process") },
  ];

  const navBg = scrolled
    ? isDark
      ? "bg-[#020617]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(2,6,23,0.8)]"
      : "bg-[#F0F9FF]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(186,230,253,0.15)]"
    : "bg-transparent";

  const logoColor = isDark ? "text-[#BAE6FD]" : "text-[#0284C7]";
  const logoHover = isDark ? "group-hover:text-white" : "group-hover:text-[#0F172A]";
  const linkColor = isDark ? "text-[#F8FAFC]/60 hover:text-[#BAE6FD]" : "text-[#475569] hover:text-[#0284C7]";
  const btnColor  = isDark
    ? "border-[#6366F1]/30 text-[#BAE6FD]/70 hover:border-[#BAE6FD]/50 hover:text-[#BAE6FD]"
    : "border-[#6366F1]/30 text-[#0369A1] hover:border-[#0284C7]/50 hover:text-[#0284C7]";
  const barColor  = isDark ? "bg-[#BAE6FD] group-hover:bg-white" : "bg-[#0284C7] group-hover:bg-[#0F172A]";
  const mobileMenuBg = isDark ? "bg-[#020617]/95" : "bg-[#F0F9FF]/95";
  const mobileLinkColor = isDark ? "text-[#F8FAFC]/70 hover:text-[#BAE6FD]" : "text-[#475569] hover:text-[#0284C7]";

  return (
    <nav
      style={{ zIndex: 50 }}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="relative flex items-center group shrink-0"
          style={{ overflow: "visible" }}
        >
          {isDesktop && <FlyingComet isDark={isDark} width={logoWidth} />}
          <div ref={logoTextRef} className="flex items-center">
            <span className={`${logoColor} ${logoHover} font-bold text-xl sm:text-3xl tracking-tight transition-colors`}>
              onuel
            </span>
            <span className="text-[#6366F1] group-hover:text-[#818CF8] font-bold text-xl sm:text-3xl tracking-tight transition-colors">
              dev
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg ${linkColor} transition-colors duration-200 whitespace-nowrap`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right: theme toggle + lang toggle */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${btnColor} transition-all duration-200`}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={toggleLang}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${btnColor} transition-all duration-200`}
          >
            {i18n.language === "ko" ? "EN" : "KO"}
          </button>
        </div>

        {/* Mobile/Tablet right: theme toggle + lang toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full border ${btnColor} transition-all duration-200`}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={toggleLang}
            className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border ${btnColor} transition-all duration-200`}
          >
            {i18n.language === "ko" ? "EN" : "KO"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#6366F1]/15 transition-colors duration-200 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        } ${mobileMenuBg} backdrop-blur-md border-b border-[#6366F1]/15`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${mobileLinkColor} transition-colors py-1.5 text-sm`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
