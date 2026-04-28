import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import ProblemSection from "./components/ProblemSection";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyChoose from "./components/WhyChoose";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutWhy from "./components/AboutWhy";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="agency-bg">
        <Navbar />
        <Hero />
        <TrustedBy />
        <ProblemSection />
        <AboutWhy />
        <Services />
        <Process />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}