
import { useState } from 'react';

const RetroHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header className="retro-window p-2 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-retro-magenta border border-black"></div>
          <span className="font-pixel text-xs">PORTFOLIO.EXE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-pixel text-xs blink text-retro-lime">ONLINE</span>
          <span className="font-pixel text-xs">{currentTime}</span>
          <div className="flex gap-1">
            <button className="w-4 h-4 bg-retro-yellow border border-black"></button>
            <button className="w-4 h-4 bg-retro-cyan border border-black"></button>
            <button className="w-4 h-4 bg-retro-magenta border border-black"></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RetroHeader;
