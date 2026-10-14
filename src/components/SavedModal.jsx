import React from 'react';
import { X, Heart, Trash2, Phone, MessageSquare } from 'lucide-react';

export default function SavedModal({ savedList, lang, onClose, onOpenDetail, onRemoveSaved }) {
  const isTa = lang === 'ta';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0F172A',
          color: 'white',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={20} color="#D97706" fill="#D97706" />
            <span style={{ fontWeight: '700', fontSize: '1rem' }}>
              {isTa ? 'சேமிக்கப்பட்ட மனைகள்' : 'Your Saved Properties'} ({savedList.length})
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
          {savedList.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748B' }}>
              <Heart size={48} color="#CBD5E1" style={{ margin: '0 auto 12px auto' }} />
              <p style={{ fontWeight: '600', fontSize: '1rem' }}>
                {isTa ? 'சேமிக்கப்பட்ட மனைகள் எதுவும் இல்லை.' : 'You have not saved any properties yet.'}
              </p>
              <p style={{ fontSize: '0.85rem' }}>
                {isTa ? 'மனைகளுடன் உள்ள இதயக் குறியீட்டை அழுத்தவும்.' : 'Click the heart icon on any property card to save it for quick reference.'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {savedList.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '12px',
                    background: '#F8FAFC'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} 
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0D9488' }}>
                      {item.priceLabel} ({item.areaDisplay})
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0F172A', cursor: 'pointer' }} onClick={() => { onClose(); onOpenDetail(item); }}>
                      {isTa ? item.titleTa : item.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                      {item.location}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      <button 
                        onClick={() => { onClose(); onOpenDetail(item); }}
                        className="btn-navy" 
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                      >
                        {isTa ? 'பார்க்க' : 'View'}
                      </button>
                      <a 
                        href={`https://wa.me/919876543210?text=Hi%20MS%20Estates,%20interested%20in%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                      >
                        <MessageSquare size={12} />
                        WhatsApp
                      </a>
                      <button 
                        onClick={() => onRemoveSaved(item.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#EF4444',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.75rem'
                        }}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
