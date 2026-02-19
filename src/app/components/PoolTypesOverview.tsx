import { Zap, Star, Coins, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function PoolTypesOverview() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const poolTypes = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("poolTypes.standard.title"),
      description: t("poolTypes.standard.description"),
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      anchor: "standard"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("poolTypes.full.title"),
      description: t("poolTypes.full.description"),
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      anchor: "full"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t("poolTypes.extreme.title"),
      description: t("poolTypes.extreme.description"),
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      badge: "Coins",
      anchor: "extreme"
    }
  ];

  const handlePoolTypeClick = (anchor: string) => {
    navigate("/pool-types");
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section id="pool-types" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            {t("poolTypes.title")}
          </h2>
          <p className="text-xl text-gray-400">
            {t("poolTypes.subtitle")}
          </p>
        </div>

        {/* Pool Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {poolTypes.map((pool, index) => (
            <button
              key={index}
              onClick={() => handlePoolTypeClick(pool.anchor)}
              className="relative text-left w-full"
            >
              {pool.badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg z-10">
                  {pool.badge}
                </div>
              )}
              <div className={`bg-gray-800/50 border-2 ${pool.borderColor} rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}>
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pool.color} text-white mb-6 shadow-lg`}>
                  {pool.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {pool.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {pool.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => handlePoolTypeClick("standard")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
          >
            {t("poolTypes.viewDetails")}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}