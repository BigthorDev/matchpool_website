import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import blackShieldLogo from "@/assets/blackShield.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const goToPoolTypes = () => {
    navigate("/pool-types");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const goToPoints = () => {
    navigate("/points");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const gameUrl = "https://game.matchpool.app";

  const navLinks = [
    { label: t("nav.howItWorks"), action: () => scrollToSection("how-it-works") },
    { label: t("nav.poolTypes"), action: goToPoolTypes },
    { label: t("nav.points"), action: goToPoints },
    { label: t("nav.faqs"), action: () => scrollToSection("faqs") },
    { label: t("nav.contact"), action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-green-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={blackShieldLogo}
              alt="Matchpool Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
              Matchpool
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="text-white hover:text-green-400 transition-colors font-medium text-sm"
              >
                {link.label}
              </button>
            ))}

            <a
              href={gameUrl}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-lg text-sm transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              {t("nav.playNow")}
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/20"
              aria-label="Toggle language"
            >
              <span className="text-sm font-bold text-white">{language === "en" ? "EN" : "ES"}</span>
            </button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
              aria-label="Toggle language"
            >
              <span className="text-sm font-bold text-white">{language === "en" ? "EN" : "ES"}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-green-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4 space-y-3">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="block w-full text-left text-white hover:text-green-400 transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href={gameUrl}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-lg transition-all mt-2"
            >
              {t("nav.playNow")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}