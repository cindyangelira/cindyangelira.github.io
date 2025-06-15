
const SkillsSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, color: '#ff6b6b' },
    { name: 'JAVASCRIPT', level: 90, color: '#4ecdc4' },
    { name: 'REACT', level: 85, color: '#45b7d1' },
    { name: 'TYPESCRIPT', level: 80, color: '#96ceb4' },
    { name: 'NODE.JS', level: 75, color: '#feca57' },
    { name: 'DESIGN', level: 88, color: '#ff9ff3' },
  ];

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\SKILLS\ABILITIES.SYS</h2>
        <div className="space-y-4">
          <p className="font-pixel text-xs text-retro-lime mb-4">
            SYSTEM ANALYSIS COMPLETE...
            <span className="blink">_</span>
          </p>
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-pixel text-xs">{skill.name}</span>
                <span className="font-pixel text-xs text-retro-cyan">{skill.level}%</span>
              </div>
              <div className="pixel-progress">
                <div 
                  className="pixel-progress-fill"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
          <div className="mt-6 p-3 bg-black text-retro-lime font-pixel text-xs">
            > SKILL_LOADER.EXE COMPLETED SUCCESSFULLY
            <br />
            > ALL SYSTEMS OPERATIONAL
            <span className="blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
