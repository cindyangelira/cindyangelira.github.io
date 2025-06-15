
const SkillsSection = () => {
  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\SKILLS\PHILOSOPHY.TXT</h2>
        <div className="space-y-4">
          <p className="font-pixel text-xs text-retro-lime mb-4">
            LOADING TECHNICAL PHILOSOPHY...
            <span className="blink">_</span>
          </p>
          
          <div className="border-l-2 border-retro-cyan pl-4">
            <div className="font-pixel text-xs leading-relaxed space-y-4">
              <p>
                IN DATA SCIENCE, YOU BUILD WITH WHATEVER SOLVES THE PROBLEM. 
                PROJECTS SPAN THE FULL TECHNICAL SPECTRUM - BACKEND ML PIPELINES, 
                CLOUD INFRASTRUCTURE, FRONTEND INTERFACES.
              </p>
              <p className="text-retro-cyan">
                TECHNOLOGY STACK ADAPTS TO THE CHALLENGE, NOT THE OTHER WAY AROUND.
              </p>
              <p className="text-retro-yellow">
                STACK-AGNOSTIC BY NECESSITY, POLYGLOT BY DESIGN.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-black text-retro-lime font-pixel text-xs">
            {'>'} PHILOSOPHY.TXT LOADED SUCCESSFULLY
            <br />
            {'>'} MINDSET: SOLUTION-ORIENTED
            <span className="blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
