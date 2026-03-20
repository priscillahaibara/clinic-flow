import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Professionals } from "@/components/layout/Professionals";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Professionals />
      <Footer />
    </div>
  );
}
