import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Sectors } from "@/components/landing/Sectors";
import { Compliance } from "@/components/landing/Compliance";
import { Coverage } from "@/components/landing/Coverage";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Sectors />
      <Compliance />
      <Coverage />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
