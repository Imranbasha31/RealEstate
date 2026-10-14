import React from 'react';
import { MapPin, ShieldCheck, Phone, MessageSquare, Heart, Compass, Road, FileText, CheckCircle2 } from 'lucide-react';

export default function PropertyCard({ property, lang, isSaved, onToggleSave, onOpenDetail }) {
  const isTa = lang === 'ta';

  return (
    <div className="property-card">
      {/* Cover Image & Badges */}
      <div className="card-image-wrapper">
        <img src={property.image} alt={property.title} />
        {property.featured && (
          <span className="badge-featured">
            {isTa ? 'முக்கிய மனை' : 'Featured Layout'}
          </span>
        )}
        <span className="badge-approval">
          <ShieldCheck size={13} color="#F59E0B" />
          {property.approvalStatus}
        </span>
        <span style={{ position: 'absolute', left: '10px', bottom: '10px', background: property.status === 'Sold' ? '#991B1B' : '#0F766E', color: 'white', fontSize: '0.68rem', fontWeight: '800', padding: '3px 8px', borderRadius: '4px' }}>
          {property.status || 'Available'}
        </span>

        {/* Save Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(property.id);
          }}
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}
        >
          <Heart size={18} fill={isSaved ? '#D97706' : 'none'} color={isSaved ? '#D97706' : '#64748B'} />
        </button>
      </div>

      {/* Card Content Body */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Price & Unit Rate Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div className="price-pill">
            {property.priceLabel}
            <span className="unit-rate">
              (₹{property.ratePerSqFt}/sq.ft)
            </span>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0F766E', background: '#CCFBF1', padding: '3px 8px', borderRadius: '4px' }}>
            {property.areaDisplay}
          </span>
        </div>

        {/* Title & Micro-Location */}
        <h3 
          onClick={() => onOpenDetail(property)}
          style={{
            fontSize: '1.15rem',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '6px',
            lineHeight: 1.3,
            cursor: 'pointer'
          }}
        >
          {isTa ? property.titleTa : property.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B', fontSize: '0.85rem', marginBottom: '14px' }}>
          <MapPin size={15} color="#0D9488" />
          <span>{isTa ? property.locationTa : property.location}</span>
        </div>

        {/* Attributes Pill Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.78rem', background: '#F1F5F9', color: '#334155', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <Compass size={13} color="#0D9488" /> {property.facing}
          </span>
          <span style={{ fontSize: '0.78rem', background: '#F1F5F9', color: '#334155', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <Road size={13} color="#0D9488" /> {property.roadWidth}
          </span>
          {property.bedrooms && (
            <span style={{ fontSize: '0.78rem', background: '#F1F5F9', color: '#334155', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
              🛏️ {property.bedrooms} BHK
            </span>
          )}
        </div>

        {/* Legal Title Verification Box */}
        <div className="verification-box">
          <div className="verification-tag">
            <CheckCircle2 size={15} color="#0D9488" />
            <span>{isTa ? 'பட்டா & 30 வருட EC சரிபார்க்கப்பட்டது' : 'Patta & 30-Yr EC Checked'}</span>
          </div>
          <button 
            onClick={() => onOpenDetail(property)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0F766E',
              fontWeight: '700',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isTa ? 'ஆவணங்கள்' : 'View Docs'}
          </button>
        </div>
        <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '-6px', marginBottom: '8px' }}>
          Verification scope: {property.verificationStatus || 'Documents received — review recorded'} · Last checked: {property.lastConfirmed || '08 Sep 2026'}
        </div>

        {/* Action Buttons Row */}
        <div style={{ marginTop: 'auto', paddingTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          <a
            href="tel:+917200358300"
            className="btn-outline"
            style={{ padding: '8px', fontSize: '0.8rem' }}
          >
            <Phone size={14} />
            <span>{isTa ? 'அழைக்க' : 'Call'}</span>
          </a>

          <a
            href={`https://wa.me/917200358300?text=Hi%20Imran%20Basha%20(MS%20Estates),%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20(${property.priceLabel}).`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '8px', fontSize: '0.8rem' }}
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenDetail(property)}
            className="btn-navy"
            style={{ padding: '8px', fontSize: '0.8rem' }}
          >
            <FileText size={14} />
            <span>{isTa ? 'விபரம்' : 'Details'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
