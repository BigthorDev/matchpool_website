import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import blackShieldLogo from "@/assets/blackShield.png";

export function Hero() {
  const { t } = useLanguage();

  const gameUrl = "https://game.matchpool.app";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.3) 35px, rgba(34, 197, 94, 0.3) 70px)`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src={blackShieldLogo} 
            alt="Matchpool Logo" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl animate-float"
          />
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 bg-gradient-to-r from-green-400 via-teal-400 to-green-500 text-transparent bg-clip-text">
          {t("hero.title")}
        </h1>

        <p className="text-xl md:text-2xl text-green-400 mb-6 font-bold">
          {t("hero.tagline")}
        </p>

        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={gameUrl}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 hover:shadow-green-500/70"
          >
            {t("hero.cta1")}
          </a>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg text-lg transition-all"
          >
            {t("nav.howItWorks")}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400 mx-auto" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}