
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: 'RETRO_GAME.EXE',
      description: 'A nostalgic pixel-art game built with modern web technologies',
      tech: ['JS', 'HTML5', 'CSS3'],
      status: 'COMPLETED',
      icon: '🎮'
    },
    {
      id: 2,
      name: 'PORTFOLIO_V2.ZIP',
      description: 'Modern portfolio website with 90s aesthetic vibes',
      tech: ['REACT', 'TS', 'TAILWIND'],
      status: 'IN_PROGRESS',
      icon: '💻'
    },
    {
      id: 3,
      name: 'API_MANAGER.BAT',
      description: 'RESTful API management tool with retro terminal interface',
      tech: ['NODE', 'EXPRESS', 'MONGO'],
      status: 'PLANNING',
      icon: '🔧'
    }
  ];

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\PROJECTS\SHOWCASE.DIR</h2>
        <div className="space-y-4">
          <p className="font-pixel text-xs text-retro-lime mb-4">
            SCANNING PROJECT DIRECTORY...
            <span className="blink">_</span>
          </p>
          {projects.map((project) => (
            <div key={project.id} className="retro-window p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{project.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-pixel text-xs text-retro-cyan">{project.name}</h3>
                    <span className={`font-pixel text-xs px-2 py-1 ${
                      project.status === 'COMPLETED' ? 'bg-retro-lime text-black' :
                      project.status === 'IN_PROGRESS' ? 'bg-retro-yellow text-black' :
                      'bg-retro-magenta text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="font-pixel text-xs leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-pixel text-xs bg-retro-dark-gray text-white px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 p-3 bg-black text-retro-lime font-pixel text-xs">
            > {projects.length} PROJECT(S) LOADED
            <br />
            > TYPE 'VIEW [PROJECT_NAME]' FOR DETAILS
            <span className="blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
