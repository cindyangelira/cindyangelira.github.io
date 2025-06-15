
import { useState } from 'react';

const ContactSection = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'CONTACT.BAT - Personal Contact Interface v2.0',
    'Loading contact protocols...',
    '',
    'Available commands:',
    '  EMAIL    - Display email address',
    '  LINKEDIN - Show LinkedIn profile',
    '  GITHUB   - Access GitHub repositories',
    '  TWITTER  - Social media contact',
    '  HELP     - Show this help menu',
    '  CLEAR    - Clear terminal',
    '',
    'Type a command and press ENTER...',
  ]);

  const commands = {
    email: 'EMAIL: your.email@example.com',
    linkedin: 'LINKEDIN: https://linkedin.com/in/yourprofile',
    github: 'GITHUB: https://github.com/yourusername',
    twitter: 'TWITTER: @yourusername',
    help: [
      'Available commands:',
      '  EMAIL    - Display email address',
      '  LINKEDIN - Show LinkedIn profile', 
      '  GITHUB   - Access GitHub repositories',
      '  TWITTER  - Social media contact',
      '  HELP     - Show this help menu',
      '  CLEAR    - Clear terminal',
    ],
    clear: 'CLEAR'
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newOutput = [...output, `{'>'} ${cmd}`];
    
    if (command === 'clear') {
      setOutput(['Terminal cleared.', '']);
    } else if (commands[command as keyof typeof commands]) {
      const response = commands[command as keyof typeof commands];
      if (Array.isArray(response)) {
        newOutput.push(...response);
      } else {
        newOutput.push(response);
      }
      newOutput.push('');
      setOutput(newOutput);
    } else {
      newOutput.push(`Command '${cmd}' not recognized. Type HELP for available commands.`);
      newOutput.push('');
      setOutput(newOutput);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\CONTACT\TERMINAL.EXE</h2>
        <div className="bg-black p-4 font-pixel text-xs h-64 overflow-y-auto">
          {output.map((line, index) => (
            <div key={index} className="text-retro-lime">
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-retro-cyan">{'>'} </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent text-retro-lime outline-none flex-1 ml-1"
              autoFocus
            />
            <span className="text-retro-lime blink">█</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
