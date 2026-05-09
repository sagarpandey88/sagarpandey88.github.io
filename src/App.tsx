import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type Section = 'summary' | 'skills' | 'experience' | 'projects' | 'certifications' | 'contact';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('summary');
  const [isDark, setIsDark] = useState(true);

  const scrollTo = (id: string) => {
    setActiveSection(id as Section);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-100'} font-sans`}>
      <Header isDark={isDark} setIsDark={setIsDark} activeSection={activeSection} onNavigate={scrollTo} />

      <Hero isDark={isDark} onNavigate={scrollTo} />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        <Summary isDark={isDark} />
        <Skills isDark={isDark} />
        {/* Experience section hidden - can be re-enabled */}
        <section id="experience" className="hidden" />
        <Projects isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
