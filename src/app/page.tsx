import { BenefitsSection } from "./components/benefits-section";
import { HomeHero } from "./components/home-hero";
import { ServiceNotice } from "./components/service-notice";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pt-10 sm:px-10 sm:pt-14 lg:px-16 lg:pt-16">
        <HomeHero />
        <BenefitsSection />
        <ServiceNotice />
      </main>

      <Footer />
    </div>
  );
}
