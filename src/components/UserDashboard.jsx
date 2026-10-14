import React, { useState } from 'react';
import { User, Heart, Car, ShieldCheck, MapPin, Phone, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

export default function UserDashboard({
  savedList,
  userLeads,
  onOpenDetail,
  onRemoveSaved,
  lang
}) {
  const isTa = lang === 'ta';
  const [userInfo, setUserInfo] = useState({
    name: 'Anand Kumar',
    phone: '+91 98765 43210',
    email: 'anand.k@example.com',
    targetDistrict: 'Coimbatore',
    budgetRange: '₹30 - 50 Lakhs'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ background: '#F8FAFC', padding: '36px 24px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Buyer Profile Header */}
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#CCFBF1', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.4rem' }}>
              <User size={28} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', lineHeight: 1.2 }}>
                {userInfo.name}
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', gap: '12px', marginTop: '4px' }}>
                <span>📱 {userInfo.phone}</span>
                <span>📍 Target: {userInfo.targetDistrict}</span>
                <span>💰 Budget: {userInfo.budgetRange}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-outline"
            style={{ height: '36px', padding: '0 14px', fontSize: '0.8rem' }}
          >
            {isEditing ? 'Save Profile' : 'Edit Buyer Profile'}
          </button>
        </div>

        {isEditing && (
          <div style={{ background: 'white', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '20px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div>
              <label className="filter-label">Full Name</label>
              <input
                type="text"
                className="filter-input"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              />
            </div>
            <div>
              <label className="filter-label">Mobile Number</label>
              <input
                type="text"
                className="filter-input"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="filter-label">Target District</label>
              <input
                type="text"
                className="filter-input"
                value={userInfo.targetDistrict}
                onChange={(e) => setUserInfo({ ...userInfo, targetDistrict: e.target.value })}
              />
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Column 1: Site Visit Bookings */}
          <div>
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Car size={20} color="#0D9488" />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                  My Site Visit Requests ({userLeads.length})
                </h3>
              </div>

              {userLeads.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 16px', color: '#64748B', fontSize: '0.9rem' }}>
                  No active site visit requests. Click "Details" on any property card to schedule a free site tour.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {userLeads.map((lead) => (
                    <div key={lead.id} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0F172A' }}>{lead.propTitle}</div>
                        <span style={{
                          background: lead.status === 'New' ? '#FFFBEB' : '#F0FDF4',
                          color: lead.status === 'New' ? '#D97706' : '#0F766E',
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          {lead.status === 'New' ? '🟡 Pending Call' : '✅ Scheduled'}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                        Requested on: {lead.date}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>
                        "{lead.message}"
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Saved Favorites */}
          <div>
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Heart size={20} color="#D97706" fill="#D97706" />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                  Saved Favorites ({savedList.length})
                </h3>
              </div>

              {savedList.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 16px', color: '#64748B', fontSize: '0.9rem' }}>
                  You have not saved any properties yet. Click the heart icon on any listing card to save it.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {savedList.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '12px', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px', background: '#F8FAFC' }}>
                      <img src={item.image} alt={item.title} style={{ width: '80px', height: '60px', borderRadius: '6px', objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0D9488' }}>{item.priceLabel}</div>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0F172A', cursor: 'pointer' }} onClick={() => onOpenDetail(item)}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
