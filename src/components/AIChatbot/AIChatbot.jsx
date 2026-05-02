import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your ExploreNest AI travel assistant. How can I help you plan your dream vacation today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulated AI Response since API key isn't provided
    // In a real scenario, you'd fetch from Groq API here
    setTimeout(() => {
      let aiResponse = "I'm your AI travel assistant! Unfortunately, my live connection to the Groq API is currently in simulation mode. But I can tell you that we have amazing packages available in our Explore section!";
      
      const lowerInput = userMessage.content.toLowerCase();
      if (lowerInput.includes('beach') || lowerInput.includes('ocean')) {
        aiResponse = "If you're looking for beach destinations, I highly recommend checking out our Maldives or Bali packages. They offer crystal clear waters and luxurious resorts!";
      } else if (lowerInput.includes('mountain') || lowerInput.includes('hike')) {
        aiResponse = "For mountain lovers, our Swiss Alps and Mount Fuji tours are spectacular. You can filter by 'Adventure' in the Explore page.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('cheap')) {
        aiResponse = "Our packages vary in price. You can use the price sorter on the 'Explore' page to find options that fit your budget perfectly.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-white shadow-[0_0_15px_rgba(13,148,136,0.6)] hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <FaRobot className="text-3xl" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>
        
        {/* Header */}
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRobot className="text-2xl" />
            <h3 className="font-bold tracking-wide">ExploreNest AI</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-base-200 flex flex-col gap-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'}`}>
              <div className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-primary text-white' : 'bg-base-100 text-base-content shadow-sm'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat chat-start">
              <div className="chat-bubble bg-base-100 text-base-content shadow-sm flex items-center gap-1">
                <span className="loading loading-dots loading-sm"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-base-100 border-t border-base-300 flex gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="input input-bordered flex-1 rounded-full text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="btn btn-circle btn-primary text-white">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
};

export default AIChatbot;
