import { Lock, Shield, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Privacy() {
  const { t } = useLanguage();

  return (
    <section id="privacy" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6">
            <Lock className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            {t("privacy.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {t("privacy.updated")}
          </p>
          <p className="text-lg text-gray-600 font-medium">
            {t("privacy.owner")}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              {t("privacy.intro")}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("privacy.section1.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3", "point4", "point5"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`privacy.section1.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections 2-10 */}
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-black mb-4">{t(`privacy.section${num}.title`)}</h3>
              <p className="text-gray-700 leading-relaxed">{t(`privacy.section${num}.desc`)}</p>
            </div>
          ))}

          {/* Section 11 - Contact */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">{t("privacy.section11.title")}</h3>
            <p className="mb-2">{t("privacy.section11.desc")}</p>
            <a href="mailto:support@matchpool.app" className="text-white underline font-bold text-lg hover:text-gray-200">
              support@matchpool.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
