
import React from 'react';
import { Message } from '../types';
import { Icon } from './Icons';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} p-1 md:p-2`}>
      <div
        className={`relative rounded-lg px-3 py-2 shadow-md max-w-sm lg:max-w-xl ${
          isUser
            ? 'bg-[#005c4b] rounded-br-none'
            : 'bg-[#202c33] rounded-bl-none'
        }`}
      >
        <p className="text-gray-200 text-sm break-words" style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
        <div className="flex justify-end items-center mt-1 text-xs text-gray-400">
          <span className="mr-1">{message.timestamp}</span>
          {isUser && <Icon name="double-check" className="text-[#53bdeb] w-4 h-4" />}
        </div>
      </div>
    </div>
  );
};
