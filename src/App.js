import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MarketSection from './components/Marketsection';
import Journey from './components/Journey';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/Faq';
import FinalCTA from './components/Finalcta';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', background: '#050816', minHeight: '100vh' }}>
      <div className="grid-bg" />
      <Navbar />
      <Hero />
      <Stats />
      <MarketSection />
      <Journey />
      <Curriculum />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}