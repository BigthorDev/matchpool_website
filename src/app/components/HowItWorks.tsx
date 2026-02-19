import { Users, Target, Trophy, Calculator } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Users className="w-12 h-12" />,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative shield patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-green-500">
          <path d="M50,5 L90,20 L90,50 Q90,85 50,95 Q10,85 10,50 L10,20 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-500">
          <path d="M50,5 L90,20 L90,50 Q90,85 50,95 Q10,85 10,50 L10,20 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex">
              {/* Step Number */}
              <div className="absolute -top-6 -left-6 text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                {index + 1}
              </div>

              {/* Card */}
              <div className="relative bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-green-500 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col w-full">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white mb-6 shadow-lg w-fit`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/points")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
          >
            <Calculator className="w-5 h-5" />
            {t("howItWorks.pointsCTA")}
          </button>
        </div>
      </div>
    </section>
  );
}