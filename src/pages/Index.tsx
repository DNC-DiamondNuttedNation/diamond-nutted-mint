import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MintingInterface } from "@/components/MintingInterface";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main id="minting" className="container mx-auto px-4 py-16">
        <MintingInterface />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
