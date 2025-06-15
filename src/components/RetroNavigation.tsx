
const RetroNavigation = ({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  const navItems = [
    { id: 'about', label: 'ABOUT.TXT', icon: '📄' },
    { id: 'skills', label: 'SKILLS.DAT', icon: '💾' },
    { id: 'projects', label: 'PROJECTS.ZIP', icon: '📦' },
    { id: 'contact', label: 'CONTACT.BAT', icon: '📞' },
  ];

  return (
    <nav className="retro-window p-4 mb-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`retro-button flex flex-col items-center gap-2 p-4 ${
              activeSection === item.id ? 'bg-retro-cyan' : ''
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-pixel text-xs text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default RetroNavigation;
