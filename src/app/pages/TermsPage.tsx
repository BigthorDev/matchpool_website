import { Navbar } from "../components/Navbar";
import { Terms } from "../components/Terms";
import { Footer } from "../components/Footer";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <Terms />
      </div>
      <Footer />
    </div>
  );
}