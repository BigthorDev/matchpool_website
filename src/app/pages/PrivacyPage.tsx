import { Navbar } from "../components/Navbar";
import { Privacy } from "../components/Privacy";
import { Footer } from "../components/Footer";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <Privacy />
      </div>
      <Footer />
    </div>
  );
}