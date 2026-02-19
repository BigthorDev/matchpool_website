import { useLanguage } from "../context/LanguageContext";
import { Share2 } from "lucide-react";
import winningAvatar from "@/assets/AvatarWinning.png";
import sadAvatar from "@/assets/AvatarSad.png";

export function SocialCompetition() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(20,184,166,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("social.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("social.subtitle")}
          </p>
        </div>

        {/* Main Description */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          {t("social.description")}
        </p>

        {/* Avatar Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Winning Position */}
          <div className="bg-gradient-to-br from-yellow-500/10 via-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl" />
                <img
                  src={winningAvatar}
                  alt="Winning Avatar"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-3">
                {t("social.first.title")}
              </h3>
              <p className="text-gray-300 text-lg">
                {t("social.first.description")}
              </p>
            </div>
          </div>

          {/* Losing Position */}
          <div className="bg-gradient-to-br from-blue-500/10 via-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
                <img
                  src={sadAvatar}
                  alt="Sad Avatar"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-black text-blue-400 mb-3">
                {t("social.last.title")}
              </h3>
              <p className="text-gray-300 text-lg">
                {t("social.last.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Share Feature Callout */}
        <div className="bg-gradient-to-r from-green-500/10 via-teal-500/10 to-green-500/10 rounded-xl p-8 border border-green-500/30 backdrop-blur-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Share2 className="w-8 h-8 text-green-400" />
            <p className="text-xl font-bold text-white text-center">
              {t("social.shareFeature")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
