import React from 'react';
import { Icon } from './Icons';

export const ChatHeader: React.FC = () => {
  return (
    <header className="flex items-center p-2 bg-[#202c33] text-white shadow-md z-10">
      <img
        src="https://picsum.photos/seed/ocult/40/40"
        alt="Ocult day"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-grow">
        <h1 className="font-semibold text-lg">Ocult day</h1>
        <p className="text-sm text-gray-400">online</p>
      </div>
      <div className="flex items-center space-x-4 pr-2">
        <button className="text-gray-300 hover:text-white">
          <Icon name="video-call" className="w-6 h-6" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Icon name="phone" className="w-5 h-5" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Icon name="more-vert" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
