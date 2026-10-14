import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileDock({ lang }) {
  const isTa = lang === 'ta';

  return (
    <div className="mobile-bottom-dock">
      <a
        href="tel:+917200358300"
        className="btn-navy"
        style={{ flex: 1, textDecoration: 'none', padding: '12px', fontSize: '0.9rem' }}
      >
        <Phone size={18} />
        <span>{isTa ? 'அழைக்க' : 'Call Founder'}</span>
      </a>

      <a
        href="https://wa.me/917200358300?text=Hi%20Imran%20Basha%20(MS%20Estates),%20I%20am%20looking%20for%20verified%20properties%20in%20Chennai%20/%20Thiruvallur."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        style={{ flex: 1, textDecoration: 'none', padding: '12px', fontSize: '0.9rem' }}
      >
        <MessageSquare size={18} />
        <span>{isTa ? 'வாட்ஸ்அப்' : 'WhatsApp Us'}</span>
      </a>
    </div>
  );
}
