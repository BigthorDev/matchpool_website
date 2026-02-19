import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Trophy, Target, Coins, TrendingUp, Award, User, AlertCircle, CheckCircle } from "lucide-react";

export function PointsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
              <Trophy className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
              {t("points.title")}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t("points.subtitle")}
            </p>
          </div>

          {/* Overview */}
          <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 border border-green-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-green-400" />
              {t("points.overview.title")}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("points.overview.description")}
            </p>
          </div>

          {/* Step 1: Base Score */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-black text-black">
                1
              </div>
              <h2 className="text-3xl font-black">{t("points.step1.title")}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Exact Score */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <span className="text-4xl font-black text-green-400">5</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.exactScore.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.exactScore.description")}</p>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.exactScore.example")}</p>
                </div>
              </div>

              {/* Correct Result */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-8 h-8 text-green-400" />
                  <span className="text-4xl font-black text-green-400">2</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.correctResult.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.correctResult.description")}</p>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.correctResult.example")}</p>
                </div>
              </div>

              {/* Goal Difference */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <span className="text-4xl font-black text-green-400">1</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.goalDifference.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.goalDifference.description")}</p>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.goalDifference.example")}</p>
                </div>
              </div>

              {/* Home Goal */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                  <span className="text-4xl font-black text-green-400">1</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.homeGoal.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.homeGoal.description")}</p>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.homeGoal.example")}</p>
                </div>
              </div>

              {/* Away Goal */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                  <span className="text-4xl font-black text-green-400">1</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.awayGoal.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.awayGoal.description")}</p>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.awayGoal.example")}</p>
                </div>
              </div>

              {/* Player Events (Pro) */}
              <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <User className="w-8 h-8 text-yellow-400" />
                  <span className="text-4xl font-black text-yellow-400">1</span>
                </div>
                <h3 className="font-black text-lg mb-2">{t("points.step1.playerEvents.title")}</h3>
                <p className="text-gray-400 text-sm">{t("points.step1.playerEvents.description")}</p>
                <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg">
                  <p className="text-xs text-gray-300">{t("points.step1.playerEvents.example")}</p>
                </div>
              </div>
            </div>

            {/* Base Score Range */}
            <div className="mt-8 bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="font-black text-lg mb-3 text-green-400">{t("points.step1.range.title")}</h3>
              <p className="text-gray-300">{t("points.step1.range.description")}</p>
            </div>
          </div>

          {/* Step 2: Coin Deduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-black text-black">
                2
              </div>
              <h2 className="text-3xl font-black">{t("points.step2.title")}</h2>
            </div>

            <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Coins className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-xl mb-2 text-yellow-400">{t("points.step2.subtitle")}</h3>
                  <p className="text-gray-300 leading-relaxed">{t("points.step2.description")}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-black">{t("points.step2.highScore.title")}</h4>
                  </div>
                  <p className="text-gray-400 mb-3">{t("points.step2.highScore.description")}</p>
                  <div className="bg-yellow-500/10 rounded-lg p-3">
                    <p className="text-sm text-gray-300">{t("points.step2.highScore.example")}</p>
                  </div>
                </div>

                <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-black">{t("points.step2.lowScore.title")}</h4>
                  </div>
                  <p className="text-gray-400 mb-3">{t("points.step2.lowScore.description")}</p>
                  <div className="bg-yellow-500/10 rounded-lg p-3">
                    <p className="text-sm text-gray-300">{t("points.step2.lowScore.example")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="font-black text-yellow-400">{t("points.step2.note.title")}</span>{" "}
                  {t("points.step2.note.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Stage Multiplier */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center font-black text-black">
                3
              </div>
              <h2 className="text-3xl font-black">{t("points.step3.title")}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500/20 rounded-full mb-4">
                    <span className="text-3xl font-black text-gray-400">1×</span>
                  </div>
                  <h3 className="font-black text-2xl mb-2">{t("points.step3.groupStage.title")}</h3>
                  <p className="text-gray-400">{t("points.step3.groupStage.description")}</p>
                </div>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-300 text-center">{t("points.step3.groupStage.example")}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/30 rounded-xl p-8">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-full mb-4">
                    <span className="text-3xl font-black text-teal-400">2×</span>
                  </div>
                  <h3 className="font-black text-2xl mb-2 text-teal-400">{t("points.step3.knockout.title")}</h3>
                  <p className="text-gray-300">{t("points.step3.knockout.description")}</p>
                </div>
                <div className="mt-6 p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                  <p className="text-sm text-gray-300 text-center">{t("points.step3.knockout.example")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Winner */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-4">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-black mb-3">{t("points.tournamentWinner.title")}</h2>
                <div className="inline-block">
                  <span className="text-6xl font-black text-yellow-400">30</span>
                  <span className="text-2xl text-gray-400 ml-2">{t("points.tournamentWinner.points")}</span>
                </div>
              </div>
              <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-6">
                {t("points.tournamentWinner.description")}
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-300 text-center">
                  <span className="font-black text-yellow-400">{t("points.tournamentWinner.note.title")}</span>{" "}
                  {t("points.tournamentWinner.note.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-6 text-center">{t("points.example.title")}</h2>
            
            <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 border border-green-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                {/* Scenario */}
                <div>
                  <h3 className="font-black text-xl mb-3 text-green-400">{t("points.example.scenario.title")}</h3>
                  <div className="bg-black/40 rounded-lg p-4">
                    <p className="text-gray-300">{t("points.example.scenario.description")}</p>
                  </div>
                </div>

                {/* Calculation Steps */}
                <div>
                  <h3 className="font-black text-xl mb-4">{t("points.example.calculation.title")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 bg-black/40 rounded-lg p-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-black text-black flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 mb-2">{t("points.example.calculation.step1")}</p>
                        <p className="text-green-400 font-black">{t("points.example.calculation.step1Result")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-black/40 rounded-lg p-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-black text-black flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 mb-2">{t("points.example.calculation.step2")}</p>
                        <p className="text-yellow-400 font-black">{t("points.example.calculation.step2Result")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-black/40 rounded-lg p-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-black text-black flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 mb-2">{t("points.example.calculation.step3")}</p>
                        <p className="text-teal-400 font-black">{t("points.example.calculation.step3Result")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Result */}
                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500 rounded-xl p-6 text-center">
                  <p className="text-gray-300 mb-2">{t("points.example.final.title")}</p>
                  <p className="text-5xl font-black text-green-400">{t("points.example.final.result")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pool Type Differences */}
          <div>
            <h2 className="text-3xl font-black mb-6 text-center">{t("points.poolTypes.title")}</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-black text-xl mb-4 text-green-400">{t("points.poolTypes.regular.title")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.regular.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.regular.feature2")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6">
                <h3 className="font-black text-xl mb-4 text-yellow-400">{t("points.poolTypes.pro.title")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.pro.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.pro.feature2")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-orange-500/30 rounded-xl p-6">
                <h3 className="font-black text-xl mb-4 text-orange-400">{t("points.poolTypes.coins.title")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.coins.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{t("points.poolTypes.coins.feature2")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
