
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
    email: { text: 'EMAIL: cindybtari@gmail.com', link: 'mailto:cindybtari@gmail.com' },
    linkedin: { text: 'LINKEDIN: https://www.linkedin.com/in/cindyab/', link: 'https://www.linkedin.com/in/cindyab/' },
    github: { text: 'GITHUB: @cindyangelira', link: 'https://github.com/cindyangelira' },
    twitter: { text: 'TWITTER: @hiddenlayerr', link: 'https://twitter.com/hiddenlayerr' },
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
    const newOutput = [...output, `> ${cmd}`];
    
    if (command === 'clear') {
      setOutput(['Terminal cleared.', '']);
    } else if (commands[command as keyof typeof commands]) {
      const response = commands[command as keyof typeof commands];
      if (Array.isArray(response)) {
        newOutput.push(...response);
      } else if (typeof response === 'object' && response.text) {
        newOutput.push(response.text);
      } else {
        newOutput.push(response as string);
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

  const renderLine = (line: string, index: number) => {
    const command = line.split(': ')[0].toLowerCase();
    if (command === 'email' && line.includes('cindybtari@gmail.com')) {
      return (
        <div key={index} className="text-retro-lime">
          EMAIL: <a href="mailto:cindybtari@gmail.com" className="text-retro-cyan underline hover:text-retro-yellow cursor-pointer">cindybtari@gmail.com</a>
        </div>
      );
    } else if (command === 'linkedin' && line.includes('linkedin.com')) {
      return (
        <div key={index} className="text-retro-lime">
          LINKEDIN: <a href="https://www.linkedin.com/in/cindyab/" target="_blank" rel="noopener noreferrer" className="text-retro-cyan underline hover:text-retro-yellow cursor-pointer">https://www.linkedin.com/in/cindyab/</a>
        </div>
      );
    } else if (command === 'github' && line.includes('cindyangelira')) {
      return (
        <div key={index} className="text-retro-lime">
          GITHUB: <a href="https://github.com/cindyangelira" target="_blank" rel="noopener noreferrer" className="text-retro-cyan underline hover:text-retro-yellow cursor-pointer">@cindyangelira</a>
        </div>
      );
    } else if (command === 'twitter' && line.includes('hiddenlayerr')) {
      return (
        <div key={index} className="text-retro-lime">
          TWITTER: <a href="https://twitter.com/hiddenlayerr" target="_blank" rel="noopener noreferrer" className="text-retro-cyan underline hover:text-retro-yellow cursor-pointer">@hiddenlayerr</a>
        </div>
      );
    }
    return (
      <div key={index} className="text-retro-lime">
        {line}
      </div>
    );
  };

  return (
    <div className="retro-window p-6">
      <div className="retro-window-inset p-4">
        <h2 className="font-pixel text-sm mb-4 text-retro-magenta">C:\CONTACT\TERMINAL.EXE</h2>
        <div className="bg-black p-4 font-pixel text-xs h-64 overflow-y-auto">
          {output.map((line, index) => renderLine(line, index))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-retro-cyan">&gt; </span>
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
