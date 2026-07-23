import Nav from "@/components/Nav";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import AgentSandbox from "@/components/AgentSandbox";
import Systems from "@/components/Systems";
import Testimonials from "@/components/Testimonials";
import Engineering from "@/components/Engineering";
import Lab from "@/components/Lab";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated canvas background */}
      <GridBackground />

      {/* Content (above canvas) */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <AgentSandbox />
        <Systems />
        <Testimonials />
        <Engineering />
        <Lab />
        <Process />
        <Services />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
