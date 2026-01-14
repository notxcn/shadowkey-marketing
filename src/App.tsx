import './index.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { Docs } from './components/Docs';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Security />
        <Docs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
