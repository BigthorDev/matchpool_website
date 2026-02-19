import { Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import blackShieldLogo from "@/assets/blackShield.png";

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPoolTypes = () => {
    navigate("/pool-types");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToTerms = () => {
    navigate("/terms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrivacy = () => {
    navigate("/privacy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPoints = () => {
    navigate("/points");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <button 
              onClick={scrollToTop}
              className="mb-4 hover:opacity-80 transition-opacity"
            >
              <img 
                src={blackShieldLogo} 
                alt="Matchpool Logo" 
                className="w-16 h-16"
              />
            </button>
            <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
              Matchpool
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-gray-500 text-xs italic">
              {t("footer.entertainment")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.howItWorks")}
                </button>
              </li>
              <li>
                <button
                  onClick={goToPoolTypes}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.poolTypes")}
                </button>
              </li>
              <li>
                <button
                  onClick={goToPoints}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.points")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.faqs")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-white mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={goToTerms}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.terms")}
                </button>
              </li>
              <li>
                <button
                  onClick={goToPrivacy}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t("nav.privacy")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white mb-4">{t("nav.contact")}</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@matchpool.app" 
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                support@matchpool.app
              </a>
              <p className="text-gray-500 text-xs">
                BIGTHOR DEVELOPMENT
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}