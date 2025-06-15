
const ProjectsSection = () => {
  const projects = [
    {
      name: 'PII_DISCOVERY.ENGINE',
      description: 'Architected and deployed a zero-to-production PII discovery engine from the ground up - solo. Built multi-modal detection pipelines combining classical ML, custom-trained YOLO for document layouts, transformer-based NER, and OCR preprocessing. Engineered data connectors for S3, PostgreSQL, MySQL, FTP with streaming ingestion capabilities. FastAPI microservices with PySpark for distributed processing. GDPR compliance logic handles right-to-be-forgotten requests across distributed storage with audit trails.',
      tech: ['Python', 'YOLO', 'Transformers', 'FastAPI', 'PySpark', 'PostgreSQL', 'S3'],
      status: 'PRODUCTION',
      year: '2024'
    },
    {
      name: 'AI_GRAPH.CUSTOMER360',
      description: 'Built an AI-powered graph-based Customer 360 analytics platform for banking. Neo4j knowledge graphs meet classical-to-transformer models meet real-time decisioning engines. Think customer behavior prediction, risk profiling, and regulatory compliance - all running on interconnected data relationships that traditional ML can\'t capture.',
      tech: ['Neo4j', 'Python', 'Transformers', 'Banking APIs', 'Real-time ML'],
      status: 'DEPLOYED',
      year: '2024'
    },
    {
      name: 'STEALTH_PROJECT.CLASSIFIED',
      description: 'Satellite imagery disaster assessment systems, cryptocurrency trading algorithms, autonomous AI agents, and several research collaborations under NDA. Some projects push the boundaries of what\'s possible with current tech, others solve problems that don\'t officially exist yet. The interesting stuff usually can\'t be discussed in public.',
      tech: ['Satellite Data', 'Crypto APIs', 'Autonomous Agents', 'Research Collab', 'NDA'],
      status: 'CLASSIFIED',
      year: '2023-2024'
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
                    project.status === 'DEPLOYED' ? 'bg-retro-cyan' : 
                    project.status === 'CLASSIFIED' ? 'bg-retro-magenta' : 'bg-retro-yellow'
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
            {'>'}DIR SCAN COMPLETE
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
