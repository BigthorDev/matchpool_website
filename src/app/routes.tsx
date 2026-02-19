import { createBrowserRouter, RouteObject, Outlet } from "react-router";
import { Home } from "./pages/Home";
import { PoolTypesDetail } from "./pages/PoolTypesDetail";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { PointsPage } from "./pages/PointsPage";
import { LanguageProvider } from "./context/LanguageContext";

function RootLayout() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pool-types",
        element: <PoolTypesDetail />,
      },
      {
        path: "/points",
        element: <PointsPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);