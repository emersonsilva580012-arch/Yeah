
import React from 'react';
import { Icon } from './Icons';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center p-2 bg-[#202c33] border-t border-transparent">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-grow p-3 rounded-full bg-[#2a3942] text-gray-200 placeholder-gray-400 border-transparent focus:outline-none focus:ring-2 focus:ring-[#00a884] transition-shadow duration-200"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={onSend}
        className="ml-3 bg-[#00a884] text-white p-3 rounded-full hover:bg-[#00876b] transition-colors duration-200 disabled:bg-gray-700 flex items-center justify-center"
        disabled={!value.trim()}
      >
        <Icon name="send" className="w-6 h-6" />
      </button>
    </div>
  );
};
