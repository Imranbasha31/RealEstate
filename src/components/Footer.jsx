import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, MessageSquare, Globe, Sparkles } from 'lucide-react';

export default function Footer({ lang }) {
  const isTa = lang === 'ta';

  return (
    <footer style={{ background: '#0F172A', color: 'white', paddingTop: '60px', paddingBottom: '30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Col 1: Founder & Brand Info */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                background: '#FFFFFF',
                padding: '8px 14px',
                borderRadius: '10px',
                display: 'inline-block',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}>
                <img
                  src="/ms_logo.png"
                  alt="MS Estates Logo"
                  style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {isTa
                ? 'நிறுவனர் இம்ரான் பாஷா வழிகாட்டலில் இயங்கும் தமிழ்நாட்டின் ரியல் எஸ்டேட் ஸ்டார்ட்அப் நிறுவனம்.'
                : 'Founded by Imran Basha. Tech-enabled real estate startup connecting property buyers directly to verified plots with 100% legal title assurance.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#F59E0B', fontWeight: '700' }}>
              <ShieldCheck size={16} />
              <span>TN RERA Reg: TN/Agent/0148/2024</span>
            </div>
          </div>

          {/* Col 2: Founder Contact & Hotline */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '16px', borderBottom: '2px solid #0D9488', paddingBottom: '6px', display: 'inline-block' }}>
              {isTa ? 'நிறுவனர் தொடர்பு' : 'Founder & Direct Hotline'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '8px', color: '#FFFFFF', fontWeight: '700' }}>
                <Building2 size={16} color="#0D9488" style={{ flexShrink: 0 }} />
                <span>Founder: Imran Basha</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={16} color="#0D9488" style={{ flexShrink: 0 }} />
                <a href="tel:+917200358300" style={{ color: '#CCFBF1', textDecoration: 'none', fontWeight: '700' }}>+91 72003 58300</a>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MessageSquare size={16} color="#25D366" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/917200358300" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '700' }}>WhatsApp: +91 72003 58300</a>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Mail size={16} color="#0D9488" style={{ flexShrink: 0 }} />
                <a href="mailto:bashaimran021@gmail.com" style={{ color: '#94A3B8', textDecoration: 'none' }}>bashaimran021@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 3: Key Focus Hubs */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '16px', borderBottom: '2px solid #0D9488', paddingBottom: '6px', display: 'inline-block' }}>
              {isTa ? 'முதன்மை மாவட்டங்கள்' : 'Key Focus Hubs'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94A3B8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>• Chennai (OMR, ECR, Porur, Poonamallee)</li>
              <li>• Thiruvallur (Veppampattu, Avadi, Tiruttani)</li>
              <li>• Kanchipuram & Sriperumbudur Corridor</li>
              <li>• Chengalpattu (GST Road Corridor)</li>
              <li>• Coimbatore & Regional Hubs</li>
            </ul>
          </div>

          {/* Col 4: Remote-First Promise */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '16px', borderBottom: '2px solid #0D9488', paddingBottom: '6px', display: 'inline-block' }}>
              {isTa ? 'நேரடி இடப் பார்வை' : 'On-Ground Site Escort'}
            </h4>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Our startup field managers escort you directly to property locations across Chennai, Thiruvallur, and surrounding districts. Zero broker commissions.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{ borderTop: '1px solid #334155', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '0.8rem', color: '#64748B' }}>
          <div>
            © {new Date().getFullYear()} MS Estates Startup — Founded by Imran Basha. All Rights Reserved.
          </div>
          <div>
            100% CMDA, DTCP & RERA Compliant Legal Title Verification Portal.
          </div>
        </div>
      </div>
    </footer>
  );
}
