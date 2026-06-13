import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Trophy, Target, TrendingUp, Award, Info, CheckCircle } from "lucide-react";

const scoringCategories = [
  {
    icon: Target,
    titleKey: "points.correctResult.title",
    descriptionKey: "points.correctResult.description",
    firstRound: 5,
    knockout: 10,
    exampleKey: "points.correctResult.example",
  },
  {
    icon: Award,
    titleKey: "points.homeGoals.title",
    descriptionKey: "points.homeGoals.description",
    firstRound: 2,
    knockout: 4,
    exampleKey: "points.homeGoals.example",
  },
  {
    icon: Award,
    titleKey: "points.awayGoals.title",
    descriptionKey: "points.awayGoals.description",
    firstRound: 2,
    knockout: 4,
    exampleKey: "points.awayGoals.example",
  },
  {
    icon: TrendingUp,
    titleKey: "points.goalDifference.title",
    descriptionKey: "points.goalDifference.description",
    firstRound: 1,
    knockout: 2,
    exampleKey: "points.goalDifference.example",
  },
] as const;

const summaryRows = [
  { labelKey: "points.table.correctResult", firstRound: 5, knockout: 10 },
  { labelKey: "points.table.homeGoals", firstRound: 2, knockout: 4 },
  { labelKey: "points.table.awayGoals", firstRound: 2, knockout: 4 },
  { labelKey: "points.table.goalDifference", firstRound: 1, knockout: 2 },
] as const;

export function PointsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
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

          {/* Change Notice */}
          <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 border border-teal-500/30 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <p className="text-gray-200 text-lg leading-relaxed">
                {t("points.changeNotice")}
              </p>
            </div>
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

          {/* Scoring Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-8 text-center">{t("points.scoring.title")}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scoringCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.titleKey}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-green-400" />
                      <h3 className="font-black text-lg">{t(category.titleKey)}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{t(category.descriptionKey)}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-black/40 border border-gray-700 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400 mb-1">{t("points.firstRound")}</p>
                        <p className="text-2xl font-black text-green-400">{category.firstRound}</p>
                      </div>
                      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400 mb-1">{t("points.knockout")}</p>
                        <p className="text-2xl font-black text-teal-400">{category.knockout}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <p className="text-xs text-gray-300">{t(category.exampleKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-6 text-center">{t("points.table.title")}</h2>

            <div className="overflow-x-auto rounded-2xl border border-green-500/20">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-green-500/10 border-b border-green-500/20">
                    <th className="px-6 py-4 font-black text-green-400">{t("points.table.category")}</th>
                    <th className="px-6 py-4 font-black text-center text-green-400">{t("points.firstRound")}</th>
                    <th className="px-6 py-4 font-black text-center text-teal-400">{t("points.knockout")}</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((row) => (
                    <tr key={row.labelKey} className="border-b border-gray-800">
                      <td className="px-6 py-4 text-gray-300">{t(row.labelKey)}</td>
                      <td className="px-6 py-4 text-center font-black text-green-400">{row.firstRound}</td>
                      <td className="px-6 py-4 text-center font-black text-teal-400">{row.knockout}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-green-500/10 to-teal-500/10">
                    <td className="px-6 py-4 font-black text-white">{t("points.table.maximum")}</td>
                    <td className="px-6 py-4 text-center font-black text-2xl text-green-400">10</td>
                    <td className="px-6 py-4 text-center font-black text-2xl text-teal-400">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Extreme Pools */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-4 text-yellow-400">{t("points.extreme.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("points.extreme.description")}</p>
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
              <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
                {t("points.tournamentWinner.description")}
              </p>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-6 text-center">{t("points.example.title")}</h2>

            <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 border border-green-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-black text-xl mb-3 text-green-400">{t("points.example.scenario.title")}</h3>
                  <div className="bg-black/40 rounded-lg p-4">
                    <p className="text-gray-300">{t("points.example.scenario.description")}</p>
                  </div>
                </div>

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
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-black text-black flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 mb-2">{t("points.example.calculation.step2")}</p>
                        <p className="text-teal-400 font-black">{t("points.example.calculation.step2Result")}</p>
                      </div>
                    </div>
                  </div>
                </div>

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
