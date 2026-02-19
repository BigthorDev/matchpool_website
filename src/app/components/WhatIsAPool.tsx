import { Users, Trophy, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function WhatIsAPool() {
  const { t } = useLanguage();

  const regionalNames = [
    {
      name: "Polla",
      regions: t("whatIsPool.polla.regions"),
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Quiniela",
      regions: t("whatIsPool.quiniela.regions"),
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Prode",
      regions: t("whatIsPool.prode.regions"),
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
            {t("whatIsPool.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("whatIsPool.subtitle")}
          </p>
        </div>

        {/* Main Definition */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-green-500/20 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t("whatIsPool.feature1.title")}</h3>
              <p className="text-gray-400 text-sm">{t("whatIsPool.feature1.description")}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t("whatIsPool.feature2.title")}</h3>
              <p className="text-gray-400 text-sm">{t("whatIsPool.feature2.description")}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t("whatIsPool.feature3.title")}</h3>
              <p className="text-gray-400 text-sm">{t("whatIsPool.feature3.description")}</p>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("whatIsPool.mainDescription")}
            </p>
          </div>
        </div>

        {/* Regional Names */}
        <div className="mb-8">
          <h3 className="text-3xl font-black text-center mb-4 text-white">
            {t("whatIsPool.regionalTitle")}
          </h3>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            {t("whatIsPool.regionalSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {regionalNames.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all hover:scale-105 transform"
              >
                <div className={`bg-gradient-to-r ${item.color} text-black font-black text-2xl py-3 px-6 rounded-lg mb-4 text-center shadow-lg`}>
                  "{item.name}"
                </div>
                
                <p className="text-gray-300 text-base text-center font-medium">
                  {item.regions}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call Out */}
        <div className="text-center mt-12 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl p-8 border border-green-500/30">
          <p className="text-xl text-gray-200 font-semibold mb-2">
            {t("whatIsPool.callout")}
          </p>
          <p className="text-green-400 font-black text-2xl">
            {t("whatIsPool.calloutHighlight")}
          </p>
        </div>
      </div>
    </section>
  );
}