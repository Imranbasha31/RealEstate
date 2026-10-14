import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { DISTRICTS } from '../data/properties';

export default function DistrictGrid({ lang, selectedDistrict, setSelectedDistrict }) {
  const isTa = lang === 'ta';

  return (
    <section id="districts" style={{ padding: '60px 24px', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', gap: '16px' }}>
          <div>
            <div style={{ color: '#0D9488', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              {isTa ? 'மாவட்ட வாரியாக தேடுக' : 'Explore by District'}
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A' }}>
              {isTa ? 'தமிழ்நாட்டின் முக்கிய நகரங்களில் மனைகள்' : 'Prime Locations Across Tamil Nadu'}
            </h2>
          </div>
          <button
            onClick={() => setSelectedDistrict('all')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0D9488',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>{isTa ? 'அனைத்து மாவட்டங்களையும் காண்க' : 'View All Districts'}</span>
            <ChevronRight size={18} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {DISTRICTS.map((dist) => (
            <div
              key={dist.id}
              className="district-card"
              style={{ backgroundImage: `url(${dist.img})` }}
              onClick={() => setSelectedDistrict(dist.id)}
            >
              <div className="district-card-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#CCFBF1', fontWeight: '700', marginBottom: '2px' }}>
                  <MapPin size={14} />
                  <span>{dist.count} Verified Plots</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '2px 0 4px 0' }}>
                  {dist.name}
                </h3>
                <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>
                  Avg Rate: {dist.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
