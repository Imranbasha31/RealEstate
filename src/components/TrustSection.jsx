import React from 'react';
import { ShieldCheck, FileText, Ruler, DollarSign, Car, Award } from 'lucide-react';

export default function TrustSection({ lang }) {
  const isTa = lang === 'ta';

  const pillars = [
    {
      icon: <FileText size={28} color="#0D9488" />,
      title: isTa ? 'பட்டா & வில்லங்க சான்று சரிபார்ப்பு' : '100% Legal Title Checked',
      desc: isTa ? '30 வருட வில்லங்க சான்று (EC) மற்றும் தனி பட்டா ஆவணங்கள் உயர்நீதிமன்ற வழக்கறிஞரால் ஆய்வு செய்யப்பட்டது.' : 'Every property comes with a 30-year clean Encumbrance Certificate (EC) and clear Patta title report.'
    },
    {
      icon: <Ruler size={28} color="#0D9488" />,
      title: isTa ? 'நேரடி மனை எல்லை அளவீடு (FMB Audit)' : 'FMB Map & Boundary Audit',
      desc: isTa ? 'அரசு வரைபடப் படி (FMB Sketch) மனையின் நான்கு எல்லைகளும் நேரில் அளந்து உறுதி செய்யப்பட்டது.' : 'On-ground physical survey verifying exact road width, plot boundaries, and FMB sketch alignment.'
    },
    {
      icon: <DollarSign size={28} color="#0D9488" />,
      title: isTa ? 'மறைமுகக் கட்டணங்கள் இல்லை' : 'Transparent Direct Pricing',
      desc: isTa ? 'உரிமையாளர் / விளம்பரதாரர் நேரடி விலை. எந்தவித மறைமுக கமிஷனும் இல்லை.' : 'Direct owner & promoter rates. No hidden brokerage surcharges or inflated prices.'
    },
    {
      icon: <Car size={28} color="#0D9488" />,
      title: isTa ? 'இலவச இடப் பார்வை சேவை' : 'Free Site Escort Service',
      desc: isTa ? 'எங்கள் உள்ளூர் தளம் மேலாளர் உங்களை அழைத்து சென்று மனையை நேரில் காண்பிப்பார்.' : 'Our local MJ Estates manager will accompany you for a hands-on site inspection.'
    }
  ];

  return (
    <section id="trust" style={{ background: '#FFFFFF', padding: '60px 24px', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px auto' }}>
          <span className="brand-badge" style={{ marginBottom: '8px', display: 'inline-block' }}>
            {isTa ? 'எம்.ஜே நம்பிக்கை' : 'The MJ Estates Promise'}
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0F172A', lineHeight: 1.2 }}>
            {isTa ? 'எங்கள் 4 கட்ட சரிபார்ப்பு அம்சங்கள்' : 'Why Home Seekers Trust MJ Estates'}
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '10px' }}>
            {isTa ? 'தமிழ்நாட்டின் மிகச்சிறந்த ரியல் எஸ்டேட் அனுபவத்தை வழங்கும் எங்கள் நடைமுறை.' : 'We eliminate double registration risks and legal headaches with strict multi-step document audits.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '28px 24px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              className="trust-card"
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: '#CCFBF1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
