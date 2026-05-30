import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Timeline from "../components/Timeline";
import ParallaxSection from "../components/ParallaxSection";
import Gallery from "../components/Gallery";
import Applications from "../components/Applications";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <ParallaxSection />
      <Gallery />
      <Applications />
      <ContactForm />
    </>
  );
}
