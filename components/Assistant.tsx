import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { askGemini } from '../services/geminiService';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Raider, I have access to the Master Cheat Sheet V3.1. What component intel do you need?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const answer = await askGemini(userText);
    
    setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full shadow-xl shadow-orange-900/50 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-200">
          <div className="bg-gray-800 p-3 flex items-center gap-2 border-b border-gray-700">
            <Bot className="text-orange-500" size={20} />
            <h3 className="font-bold text-gray-200">Tactical Support AI</h3>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto max-h-[400px] min-h-[300px] space-y-3 bg-gray-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-800 text-gray-300 border border-gray-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-lg rounded-bl-none border border-gray-700">
                    <Loader2 className="animate-spin text-orange-500" size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-gray-900 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about items..."
              className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-orange-600 hover:bg-orange-500 rounded-md text-white disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};