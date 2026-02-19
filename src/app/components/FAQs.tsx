import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    { question: t("faqs.q1"), answer: t("faqs.a1") },
    { question: t("faqs.q2"), answer: t("faqs.a2") },
    { question: t("faqs.q3"), answer: t("faqs.a3") },
    { question: t("faqs.q4"), answer: t("faqs.a4") },
    { question: t("faqs.q5"), answer: t("faqs.a5") },
    { question: t("faqs.q6"), answer: t("faqs.a6") },
    { question: t("faqs.q7"), answer: t("faqs.a7") },
    { question: t("faqs.q8"), answer: t("faqs.a8") },
    { question: t("faqs.q9"), answer: t("faqs.a9") },
    { question: t("faqs.q10"), answer: t("faqs.a10") },
    { question: t("faqs.q11"), answer: t("faqs.a11") },
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            {t("faqs.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("faqs.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 hover:border-green-500 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-black pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-green-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed border-t pt-4 border-gray-200">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
