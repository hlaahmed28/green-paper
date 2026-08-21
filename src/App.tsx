import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Facilities } from './components/Facilities';
import { VideoSection } from './components/VideoSection';
import { WhyUs } from './components/WhyUs';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-dark min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Facilities />
        <VideoSection />
        <WhyUs />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

