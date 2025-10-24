
import React, { useState, useCallback } from 'react';
import { Message, Sender } from './types';
import { ChatHeader } from './components/ChatHeader';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { sendMessageToAI } from './services/geminiService';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleSend = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const aiResponseText = await sendMessageToAI(userMessage.text);

    const aiMessage: Message = {
      id: `ai-${Date.now()}`,
      text: aiResponseText,
      sender: 'ai',
      timestamp: getCurrentTime(),
    };
    
    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  }, [inputValue]);

  return (
    <div className="h-screen w-screen bg-[#111b21] flex items-center justify-center font-sans">
      <div className="w-full h-full md:w-[95%] md:h-[95%] lg:w-[80%] xl:w-[65%] max-w-5xl md:max-h-[1200px] flex flex-col bg-[#111b21] shadow-2xl rounded-md">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat z-0"
          style={{ backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`, opacity: 0.06 }}
        ></div>
        <div className="relative z-10 flex flex-col flex-grow h-full">
            <ChatHeader />
            <MessageList messages={messages} isLoading={isLoading} />
            <MessageInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onSend={handleSend}
            />
        </div>
      </div>
    </div>
  );
};

export default App;
