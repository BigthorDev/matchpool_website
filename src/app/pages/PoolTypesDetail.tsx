import { Zap, Star, Coins, Check, AlertCircle, Shuffle } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export function PoolTypesDetail() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.3) 35px, rgba(34, 197, 94, 0.3) 70px)`,
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 text-center">
            {t("poolTypesDetail.title")}
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            {t("poolTypesDetail.subtitle")}
          </p>
        </div>
      </section>

      {/* Standard Pool */}
      <section id="standard" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              {t("poolTypesDetail.standard.title")}
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="font-black text-black mb-2">{t("poolTypesDetail.standard.what")}</h3>
            <p className="text-gray-700">{t("poolTypesDetail.standard.whatDesc")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-black mb-6">{t("poolTypesDetail.standard.features")}</h3>
            <ul className="space-y-4">
              {[
                t("poolTypesDetail.standard.feature1"),
                t("poolTypesDetail.standard.feature2"),
                t("poolTypesDetail.standard.feature3"),
                t("poolTypesDetail.standard.feature4")
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-6">
            <p className="text-gray-700 italic">
              {t("poolTypesDetail.standard.useCase")}
            </p>
          </div>
        </div>
      </section>

      {/* Full Pool */}
      <section id="full" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
              <Star className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              {t("poolTypesDetail.full.title")}
            </h2>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
            <h3 className="font-black text-black mb-2">{t("poolTypesDetail.full.what")}</h3>
            <p className="text-gray-700">{t("poolTypesDetail.full.whatDesc")}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-black mb-6">{t("poolTypesDetail.full.features")}</h3>
            <ul className="space-y-4">
              {[
                t("poolTypesDetail.full.feature1"),
                t("poolTypesDetail.full.feature2"),
                t("poolTypesDetail.full.feature3"),
                t("poolTypesDetail.full.feature4")
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shuffle className="w-6 h-6 text-purple-600" />
              <h4 className="font-black text-black">{t("poolTypesDetail.full.random")}</h4>
            </div>
            <p className="text-gray-700">
              {t("poolTypesDetail.full.randomDesc")}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-6">
            <p className="text-gray-700 italic">
              {t("poolTypesDetail.full.useCase")}
            </p>
          </div>
        </div>
      </section>

      {/* Extreme Pool */}
      <section id="extreme" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
              <Coins className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              {t("poolTypesDetail.extreme.title")}
            </h2>
          </div>
          <div className="inline-block mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-black px-4 py-2 rounded-full shadow-lg">
            COIN-BASED
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
            <h3 className="font-black text-black mb-2">{t("poolTypesDetail.extreme.what")}</h3>
            <p className="text-gray-700">{t("poolTypesDetail.extreme.whatDesc")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-black mb-6">{t("poolTypesDetail.extreme.features")}</h3>
            <ul className="space-y-4">
              {[
                t("poolTypesDetail.extreme.feature1"),
                t("poolTypesDetail.extreme.feature2"),
                t("poolTypesDetail.extreme.feature3"),
                t("poolTypesDetail.extreme.feature4")
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How Coins Work */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-black text-black">{t("poolTypesDetail.extreme.coins")}</h3>
            </div>
            <p className="text-gray-700 mb-6">{t("poolTypesDetail.extreme.coinsDesc")}</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><span className="font-bold">{t("poolTypesDetail.extreme.cost")}</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><span className="font-bold">{t("poolTypesDetail.extreme.earning")}</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><span className="font-bold">{t("poolTypesDetail.extreme.future")}</span></p>
              </div>
            </div>
          </div>

          {/* Limits & Trade-offs */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-black text-black">{t("poolTypesDetail.extreme.limits")}</h3>
            </div>
            <p className="text-gray-700">
              {t("poolTypesDetail.extreme.limitsDesc")}
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-6">
            <p className="text-gray-700 italic">
              {t("poolTypesDetail.extreme.useCase")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}