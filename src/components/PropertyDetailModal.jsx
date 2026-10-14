import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, MapPin, Phone, MessageSquare, Compass, Road, Award, Send, Building, FileCheck } from 'lucide-react';

export default function PropertyDetailModal({ property, lang, onClose, onCreateLead }) {
  const isTa = lang === 'ta';
  const [activeImg, setActiveImg] = useState(property.image);
  const [formData, setFormData] = useState({ name: '', phone: '', message: 'I want to schedule a site visit for this property.' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCreateLead?.({
      name: formData.name,
      phone: formData.phone,
      propTitle: property.title,
      propertyId: property.id,
      message: formData.message
    });
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/917200358300?text=${encodeURIComponent(
    `Hello Founder Imran Basha (MJ Estates),\nMy Name: ${formData.name || 'Interested Buyer'}\nPhone: ${formData.phone}\nInterested Property: ${property.title} (${property.priceLabel})\nLocation: ${property.location}`
  )}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Header Bar */}
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
            <ShieldCheck size={20} color="#F59E0B" />
            <span style={{ fontWeight: '700', fontSize: '1rem' }}>
              {isTa ? 'ஆவணங்கள் சரிபார்க்கப்பட்ட மனை' : 'MJ Verified Legal Document Scorecard'}
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

        <div style={{ padding: '24px' }}>
          {/* Main Title & Price Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span style={{ background: '#F59E0B', color: 'white', fontWeight: '800', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px' }}>
                  {property.approvalStatus}
                </span>
                <span style={{ background: '#CCFBF1', color: '#0F766E', fontWeight: '700', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px' }}>
                  {property.areaDisplay}
                </span>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0F172A', lineHeight: 1.2 }}>
                {isTa ? property.titleTa : property.title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', marginTop: '6px' }}>
                <MapPin size={16} color="#0D9488" />
                <span>{isTa ? property.locationTa : property.location}</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0D9488', lineHeight: 1 }}>
                {property.priceLabel}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', textAlign: 'right', marginTop: '4px' }}>
                ₹{property.ratePerSqFt} per sq.ft
              </div>
            </div>
          </div>

          {/* Photo Gallery & Thumbnail Row */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', marginBottom: '12px', background: '#E2E8F0' }}>
              <img src={activeImg} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
              {property.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  style={{
                    width: '90px',
                    height: '65px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImg === img ? '3px solid #0D9488' : '2px solid transparent'
                  }}
                >
                  <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Dual Column: Specs & Legal Checklist vs Lead Contact Form */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Left Column: Legal Verification & Property Details */}
            <div>
              {/* Legal Checklist Box */}
              <div style={{ background: '#F0FDF4', border: '1px solid #CCFBF1', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F766E', fontWeight: '800', fontSize: '1.05rem', marginBottom: '12px' }}>
                  <FileCheck size={20} />
                  <span>{isTa ? 'சட்ட ரீதியான சரிபார்ப்பு அறிக்கை' : 'Legal Title Audit Scorecard'}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
                    <CheckCircle2 size={16} color="#0D9488" />
                    <span><strong>Review status:</strong> {property.verificationStatus || 'Documents received — review recorded'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
                    <CheckCircle2 size={16} color="#0D9488" />
                    <span><strong>Last confirmed:</strong> {property.lastConfirmed || 'Not recorded'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
                    <CheckCircle2 size={16} color="#0D9488" />
                    <span><strong>Layout Approval:</strong> {property.approvalNo}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
                    <CheckCircle2 size={16} color="#0D9488" />
                    <span><strong>Professional review:</strong> {property.legalVerification?.legalAdvocateOpinion || 'Independent review recommended before purchase'}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: '#0F172A' }}>
                {isTa ? 'இடத்தின் விளக்கம்' : 'Property Overview'}
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {isTa ? property.descriptionTa : property.description}
              </p>

              {/* Amenities List */}
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px', color: '#0F172A' }}>
                {isTa ? 'வசதிகள் (Amenities)' : 'Layout Amenities'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
                {property.amenities.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#0D9488" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Instant WhatsApp Lead & Site Visit Booking */}
            <div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px', position: 'sticky', top: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '6px' }}>
                  {isTa ? 'நேரடி இடப் பார்வை முன்பதிவு' : 'Schedule Free Site Visit'}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '16px' }}>
                  Founder Imran Basha and the MJ Estates field team will escort you directly to inspect the property.
                </p>

                {/* Instant WhatsApp Quick Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginBottom: '16px' }}
                >
                  <MessageSquare size={18} />
                  <span>{isTa ? 'வாட்ஸ்அப்பில் தொடர்புகொள்ள' : 'Connect via WhatsApp'}</span>
                </a>

                <div style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.8rem', margin: '10px 0' }}>
                  — {isTa ? 'அல்லது படிவத்தை நிரப்பவும்' : 'OR Submit Callback Request'} —
                </div>

                {submitted ? (
                  <div style={{ background: '#F0FDF4', color: '#0F766E', padding: '16px', borderRadius: '10px', textAlign: 'center', fontWeight: '700' }}>
                    ✅ {isTa ? 'நன்றி! இம்ரான் பாஷா உங்கள் கோரிக்கையை பெற்றுக்கொண்டார்.' : 'Thank you! Imran Basha & MJ Estates team will call you shortly.'}
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label className="filter-label">{isTa ? 'உங்கள் பெயர்' : 'Your Name'}</label>
                      <input
                        type="text"
                        required
                        className="filter-input"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="filter-label">{isTa ? 'தொலைபேசி எண்' : 'Mobile Number'}</label>
                      <input
                        type="tel"
                        required
                        className="filter-input"
                        placeholder="+91 72003 58300"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="filter-label">{isTa ? 'செய்தி' : 'Preferred Visit Date / Note'}</label>
                      <textarea
                        className="filter-input"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-navy" style={{ padding: '12px', marginTop: '6px' }}>
                      <Send size={16} />
                      <span>{isTa ? 'விவரங்களை அனுப்பவும்' : 'Request Free Site Visit'}</span>
                    </button>
                  </form>
                )}

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={14} color="#0D9488" />
                  <span>Call Founder Hotline: <a href="tel:+917200358300" style={{ color: '#0F766E', fontWeight: '800', textDecoration: 'none' }}>+91 72003 58300</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
