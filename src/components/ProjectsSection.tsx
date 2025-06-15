
const ProjectsSection = () => {
  const projects = [
    {
      name: 'DATA_PIPELINE.ML',
      description: 'Real-time ML pipeline processing 100K+ events/day',
      tech: ['Python', 'Apache Kafka', 'TensorFlow', 'Docker'],
      status: 'PRODUCTION',
      year: '2024'
    },
    {
      name: 'CUSTOMER_INSIGHTS.AI',
      description: 'Customer behavior prediction model with 94% accuracy',
      tech: ['Scikit-learn', 'PostgreSQL', 'React', 'FastAPI'],
      status: 'DEPLOYED',
      year: '2023'
    },
    {
      name: 'FORECAST_ENGINE.SYS',
      description: 'Time series forecasting for supply chain optimization',
      tech: ['R', 'Shiny', 'AWS', 'Prophet'],
      status: 'ACTIVE',
      year: '2023'
    }
  ];

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\PROJECTS\PORTFOLIO.DIR</h2>
        <div className="space-y-4">
          <p className="font-pixel text-xs text-retro-lime mb-4">
            SCANNING DIRECTORY...
            <span className="blink">_</span>
          </p>
          
          {projects.map((project, index) => (
            <div key={project.name} className="retro-window-inset p-3 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-pixel text-xs text-retro-cyan">{project.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-xs text-retro-yellow">{project.year}</span>
                  <div className={`w-2 h-2 ${
                    project.status === 'PRODUCTION' ? 'bg-retro-lime' :
                    project.status === 'DEPLOYED' ? 'bg-retro-cyan' : 'bg-retro-yellow'
                  } animate-pulse`}></div>
                  <span className="font-pixel text-xs">{project.status}</span>
                </div>
              </div>
              
              <p className="font-pixel text-xs leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-retro-dark-gray px-2 py-1 font-pixel text-xs border border-black">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-3 bg-black text-retro-lime font-pixel text-xs">
            {'>'} DIR SCAN COMPLETE
            <br />
            {'>'} {projects.length} PROJECT(S) FOUND
            <span className="blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
