import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Calculator from "@/components/Calculator";
import Solutions from "@/components/Solutions";
import Results from "@/components/Results";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Calculator />
        <div id="solutions">
          <Solutions />
        </div>
        <div id="results">
          <Results />
        </div>
        <div id="about">
          <About />
        </div>
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
