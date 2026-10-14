import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function LiveChatWidget({ lang, onNavigate }) {
  const isTa = lang === 'ta';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'bot',
      text: isTa ? 'வணக்கம்! நான் நடாஷா (MJ Estates உதவி). உங்களுக்கு என்ன உதவி வேண்டும்?' : 'Hi there! I am Natasha, your MJ Estates assistant. How can I help you today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = { id: `user-${Date.now()}`, sender: 'user', text, time: 'Just now' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Bot Response Logic
    setTimeout(() => {
      let botReply = 'I can help you buy, rent, or post properties with zero brokerage! Feel free to ask any question or call us directly at +91 72003 58300.';
      const lower = text.toLowerCase();
      if (lower.includes('post') || lower.includes('sell') || lower.includes('rent out')) {
        botReply = 'You can post your property advertisement for FREE! I will redirect you to our property posting wizard now.';
        if (onNavigate) onNavigate('post-property');
      } else if (lower.includes('agreement') || lower.includes('lease') || lower.includes('stamp')) {
        botReply = 'We offer government-stamped E-Rental Agreements with 24-hour doorstep delivery!';
        if (onNavigate) onNavigate('rental-agreement');
      } else if (lower.includes('loan') || lower.includes('emi') || lower.includes('bank')) {
        botReply = 'Check your maximum home loan eligibility from top banks like SBI, HDFC, and ICICI starting at 8.4% interest rate!';
        if (onNavigate) onNavigate('home-loans');
      } else if (lower.includes('chennai') || lower.includes('thiruvallur') || lower.includes('plot') || lower.includes('2bhk')) {
        botReply = 'We have 100% CMDA & Patta verified plots and villas in Chennai, Thiruvallur & OMR! Redirecting to search listings...';
        if (onNavigate) onNavigate('buyer');
      }

      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, sender: 'bot', text: botReply, time: 'Just now' }
      ]);
    }, 600);
  };

  return (
    <div className="live-chat-wrapper">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div style={{ position: 'relative' }}>
          {/* Natasha Online Badge Popup */}
          <div className="chat-badge-popup">
            <div style={{ fontWeight: '800', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#16A34A', borderRadius: '50%' }}></span>
              Natasha (Online)
            </div>
            <div style={{ color: '#475569', fontSize: '0.72rem', marginTop: '2px' }}>Need help? Chat with us</div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: '#D4A64A',
              color: 'white',
              border: 'none',
              borderRadius: '28px',
              padding: '12px 18px',
              fontWeight: '800',
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(253, 55, 82, 0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MessageSquare size={18} />
            <span>Start Chat</span>
          </button>
        </div>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="live-chat-box">
          {/* Chat Header */}
          <div style={{ background: '#0F172A', color: 'white', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', background: '#0D9488', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.88rem' }}>Natasha • MJ Assistant</div>
                <div style={{ fontSize: '0.68rem', color: '#4ADE80' }}>● Active Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: '#1E293B', border: 'none', borderRadius: '50%', width: '28px', height: '28px', color: '#94A3B8', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={16} color="white" />
            </button>
          </div>

          {/* Quick Action Suggestions */}
          <div style={{ background: '#F8FAFC', padding: '6px 10px', borderBottom: '1px solid #E2E8F0', display: 'flex', gap: '6px', overflowX: 'auto', flexShrink: 0 }}>
            <button onClick={() => handleSend('Post my property')} style={{ background: 'white', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              📢 Post Free Ad
            </button>
            <button onClick={() => handleSend('Rental Agreement')} style={{ background: 'white', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              📑 Rental Agreement
            </button>
            <button onClick={() => handleSend('Home Loan EMI')} style={{ background: 'white', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              🏦 Home Loans
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: m.sender === 'user' ? '#0D9488' : '#F1F5F9',
                  color: m.sender === 'user' ? 'white' : '#0F172A',
                  padding: '10px 14px',
                  borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  maxWidth: '85%',
                  fontSize: '0.82rem',
                  lineHeight: 1.4
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <div style={{ padding: '8px 10px', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '8px', flexShrink: 0, background: 'white' }}>
            <input
              type="text"
              placeholder="Ask Natasha anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.85rem' }}
            />
            <button
              onClick={() => handleSend()}
              style={{ background: '#FD3752', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
