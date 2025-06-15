
const AboutSection = () => {
  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4 mb-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\ABOUT\README.TXT</h2>
        <div className="border-l-2 border-retro-cyan pl-4">
          <div className="mb-4">
            <div className="w-24 h-24 bg-retro-dark-gray border-2 border-black mb-4 pixel-art flex items-center justify-center">
              <span className="font-pixel text-xs">AVATAR</span>
            </div>
          </div>
          <div className="font-pixel text-xs leading-relaxed space-y-4">
            <p className="text-retro-lime">
              > LOADING USER PROFILE...
              <span className="blink">_</span>
            </p>
            <p>
              HELLO WORLD! I'M A PASSIONATE DEVELOPER WHO LOVES CREATING 
              DIGITAL EXPERIENCES THAT BLEND NOSTALGIA WITH MODERN FUNCTIONALITY.
            </p>
            <p className="text-retro-cyan">
              SPECIALIZING IN:
              <br />
              - FRONTEND DEVELOPMENT
              <br />
              - UI/UX DESIGN  
              <br />
              - RETRO AESTHETICS
              <br />
              - PIXEL PERFECT CODE
            </p>
            <p className="text-retro-yellow">
              STATUS: READY TO COLLABORATE
              <span className="blink">█</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
