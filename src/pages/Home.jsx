import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Subjects from '../components/sections/Subjects';
import Benefits from '../components/sections/Benefits';
import Certificates from '../components/sections/Certificates';
import Reviews from '../components/sections/Reviews';
import Formats from '../components/sections/Formats';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Subjects />
        <Benefits />
        <Certificates />
        <Reviews />
        <Formats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
