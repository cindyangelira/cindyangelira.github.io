
import { useState } from 'react';

const ContactSection = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    'CONTACT SYSTEM INITIALIZED...',
    'TYPE "HELP" FOR AVAILABLE COMMANDS',
  ]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = '';

    switch (command) {
      case 'help':
        response = 'AVAILABLE COMMANDS: EMAIL, GITHUB, LINKEDIN, SOCIAL, CLEAR';
        break;
      case 'email':
        response = 'EMAIL: your.email@example.com';
        break;
      case 'github':
        response = 'GITHUB: github.com/yourusername';
        break;
      case 'linkedin':
        response = 'LINKEDIN: linkedin.com/in/yourusername';
        break;
      case 'social':
        response = 'CONNECTING TO SOCIAL NETWORKS... BEEP BOOP!';
        break;
      case 'clear':
        setTerminalHistory(['CONTACT SYSTEM INITIALIZED...', 'TYPE "HELP" FOR AVAILABLE COMMANDS']);
        setTerminalInput('');
        return;
      default:
        response = `COMMAND NOT FOUND: ${cmd}`;
    }

    setTerminalHistory(prev => [...prev, `> ${cmd}`, response]);
    setTerminalInput('');
  };

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\CONTACT\TERMINAL.EXE</h2>
        
        {/* Terminal Window */}
        <div className="bg-black p-4 h-64 overflow-y-auto mb-4 font-pixel text-xs">
          {terminalHistory.map((line, index) => (
            <div key={index} className={`mb-1 ${line.startsWith('>') ? 'text-retro-cyan' : 'text-retro-lime'}`}>
              {line}
            </div>
          ))}
          <div className="flex text-retro-cyan">
            <span>C:\CONTACT>&nbsp;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(terminalInput);
                }
              }}
              className="bg-transparent outline-none flex-1 text-retro-lime"
              autoFocus
            />
            <span className="blink">█</span>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => handleCommand('email')}
            className="retro-button flex items-center gap-2"
          >
            <span>📧</span>
            <span className="font-pixel text-xs">EMAIL</span>
          </button>
          <button 
            onClick={() => handleCommand('github')}
            className="retro-button flex items-center gap-2"
          >
            <span>🐙</span>
            <span className="font-pixel text-xs">GITHUB</span>
          </button>
          <button 
            onClick={() => handleCommand('linkedin')}
            className="retro-button flex items-center gap-2"
          >
            <span>💼</span>
            <span className="font-pixel text-xs">LINKEDIN</span>
          </button>
          <button 
            onClick={() => handleCommand('social')}
            className="retro-button flex items-center gap-2"
          >
            <span>🌐</span>
            <span className="font-pixel text-xs">SOCIAL</span>
          </button>
        </div>

        <div className="mt-4 p-3 bg-retro-dark-gray text-white font-pixel text-xs text-center">
          READY TO CONNECT • STATUS: ONLINE
          <span className="blink">_</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
