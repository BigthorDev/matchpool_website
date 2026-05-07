import { FileText, AlertCircle, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Terms() {
  const { t } = useLanguage();

  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            {t("terms.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {t("terms.updated")}
          </p>
          <p className="text-lg text-gray-600 font-medium">
            {t("terms.owner")}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              {t("terms.intro")}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("terms.section1.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`terms.section1.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("terms.section2.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3", "point4", "point5"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`terms.section2.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("terms.section3.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`terms.section3.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("terms.section4.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3", "point4", "point5"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`terms.section4.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-black mb-4">{t("terms.section5.title")}</h3>
            <ul className="space-y-3">
              {["point1", "point2", "point3", "point4", "point5"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`terms.section5.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections 6-11 */}
          {[6, 7, 8, 9, 10, 11].map((num) => (
            <div key={num} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-black mb-4">{t(`terms.section${num}.title`)}</h3>
              <p className="text-gray-700 leading-relaxed">{t(`terms.section${num}.desc`)}</p>
            </div>
          ))}

          {/* Section 12 - Contact */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">{t("terms.section12.title")}</h3>
            <p className="mb-2">{t("terms.section12.desc")}</p>
            <a href="mailto:support@matchpool.app" className="text-white underline font-bold text-lg hover:text-gray-200">
              support@matchpool.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
