
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
              {'>'} LOADING USER PROFILE...
              <span className="blink">_</span>
            </p>
            <p>
              DATA SCIENTIST & BUSINESS SOLUTION ARCHITECT - STILL CODING, 
              STILL BUILDING MODELS, BUT NOW I ALSO DECIDE WHICH AI PROBLEMS 
              ARE WORTH SOLVING AND MAKE SURE THEY ACTUALLY GET SOLVED RIGHT.
            </p>
            <p className="text-retro-cyan">
              EXPERIENCE: 5+ YEARS TURNING DATA INTO INSIGHTS AND STRATEGY INTO WORKING SOLUTIONS.
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
