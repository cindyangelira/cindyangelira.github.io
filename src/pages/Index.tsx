
import { useState, useEffect } from 'react';
import RetroHeader from '../components/RetroHeader';
import RetroNavigation from '../components/RetroNavigation';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-retro-gray flex items-center justify-center">
        <div className="retro-window p-8 text-center">
          <div className="font-pixel text-sm mb-4">LOADING PORTFOLIO.EXE</div>
          <div className="w-64 pixel-progress mb-4">
            <div 
              className="pixel-progress-fill bg-retro-lime"
              style={{ width: '100%', animation: 'progress 2s ease-in-out' }}
            ></div>
          </div>
          <div className="font-pixel text-xs text-retro-cyan">
            INITIALIZING RETRO INTERFACE...
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-retro-gray p-4 scanlines">
      <div className="max-w-4xl mx-auto">
        <RetroHeader />
        <RetroNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content Area */}
        <main className="mb-4">
          {renderSection()}
        </main>

        {/* Footer */}
        <footer className="retro-window p-4 text-center">
          <div className="flex justify-between items-center">
            <div className="font-pixel text-xs">
              © 2024 RETRO.PORTFOLIO
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-retro-lime animate-pulse"></div>
              <span className="font-pixel text-xs">SYSTEM OPERATIONAL</span>
            </div>
            <div className="font-pixel text-xs text-retro-cyan">
              MADE WITH <span className="text-retro-magenta">❤</span> IN THE 90S SPIRIT
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Pixel Elements */}
      <div className="fixed top-10 left-10 w-4 h-4 bg-retro-cyan animate-bounce opacity-20"></div>
      <div className="fixed top-20 right-20 w-4 h-4 bg-retro-magenta animate-pulse opacity-20"></div>
      <div className="fixed bottom-20 left-20 w-4 h-4 bg-retro-yellow animate-bounce opacity-20" style={{ animationDelay: '0.5s' }}></div>
      <div className="fixed bottom-10 right-10 w-4 h-4 bg-retro-lime animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;
