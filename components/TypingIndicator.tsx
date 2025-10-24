
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start items-end p-1 md:p-2">
      <img
        src="https://picsum.photos/seed/ocult/40/40"
        alt="Ocult day typing"
        className="w-8 h-8 rounded-full mr-2"
      />
      <div className="bg-[#202c33] rounded-lg rounded-bl-none px-3 py-2 shadow-md">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
