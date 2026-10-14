import React, { useState } from 'react';
import { ShieldCheck, Zap, Users, CheckCircle2, Phone, Star, ArrowRight } from 'lucide-react';

export default function PostPropertyPage({ lang, onAddProperty, onSwitchToSearch }) {
  const isTa = lang === 'ta';

  // Quick Post Form State (Matching Image 2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Chennai',
    whatsAppUpdates: true,
    propertyType: 'Residential', // Residential | Commercial | Land/Plot
    adMode: 'Rent', // Rent | Resale | PG/Hostel | Flatmates
    // Step 2 Details
    title: '',
    locality: '',
    price: '',
    areaSqFt: '',
    bedrooms: '2',
    facing: 'East Facing',
    description: ''
  });

  const [wizardStep, setWizardStep] = useState(1); // 1: Quick Lead, 2: Full Details, 3: Success
  const [submittedProperty, setSubmittedProperty] = useState(null);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setWizardStep(2);
  };

  const handleFullSubmit = (e) => {
    e.preventDefault();
    const newProp = {
      id: `prop-user-${Date.now()}`,
      title: formData.title || `${formData.adMode} ${formData.propertyType} in ${formData.locality || formData.city}`,
      titleTa: `${formData.locality || formData.city} மனை`,
      district: formData.city.toLowerCase(),
      districtName: formData.city,
      location: `${formData.locality || formData.city}, ${formData.city}`,
      locationTa: `${formData.locality || formData.city}, ${formData.city}`,
      category: formData.propertyType === 'Land/Plot' ? 'plot' : (formData.propertyType === 'Commercial' ? 'commercial' : 'villa'),
      price: Number(formData.price) || 3500000,
      priceLabel: `₹${(Number(formData.price) / 100000).toFixed(1)} Lakhs`,
      ratePerSqFt: Math.round((Number(formData.price) || 3500000) / (Number(formData.areaSqFt) || 1200)),
      areaSqFt: Number(formData.areaSqFt) || 1200,
      areaCents: ((Number(formData.areaSqFt) || 1200) / 435.6).toFixed(2),
      bedrooms: Number(formData.bedrooms) || 2,
      bathrooms: Number(formData.bedrooms) || 2,
      areaDisplay: `${formData.areaSqFt || 1200} Sq.Ft`,
      facing: formData.facing,
      roadWidth: '30 Ft Tar Road',
      approvalStatus: 'CMDA & RERA Approved',
      reraRegistered: true,
      featured: true,
      image: '/mj_hero_plot.png',
      gallery: ['/mj_hero_plot.png', '/mj_villa_house.png'],
      description: formData.description || 'Direct owner listing posted on MJ Estates. Verification status is shown transparently.',
      legalVerification: {
        pattaChecked: true,
        ecClean: true,
        ecYears: 30,
        layoutCopyVerified: true,
        fmbVerified: true,
        legalAdvocateOpinion: 'Owner Patta Documents Submission Pending Verification'
      },
      amenities: ['30 Ft Road', 'Sweet Water Table', 'Streetlights'],
      landmarkDistances: [{ name: `${formData.city} Junction`, dist: '2.0 km' }]
    };

    onAddProperty(newProp);
    setSubmittedProperty(newProp);
    setWizardStep(3);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Top Banner Bar */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>
              {isTa ? 'உங்கள் சொத்தை இலவசமாக விற்கவும் அல்லது வாடகைக்கு விடவும்' : 'Sell or Rent your Property For Free'}
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 0 0' }}>
              {isTa ? 'எந்த தரகரும் இல்லாமல் 100% நேரடி வாடிக்கையாளர்கள் தொடர்பு' : 'Zero Brokerage — Reach Millions of Verified Buyers & Tenants Directly'}
            </p>
          </div>
          <button
            onClick={onSwitchToSearch}
            style={{
              background: '#EEF2FF',
              color: '#4F46E5',
              border: '1px solid #C7D2FE',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {isTa ? 'சொத்து தேடுகிறீர்களா? இங்கே கிளிக் செய்க' : 'Looking for a property? Click Here'}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '32px auto 0 auto', padding: '0 16px' }}>
        {wizardStep === 1 && (
          <>
            {/* Main Split Grid (Matching Image 2) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
              
              {/* Left Column: Why Post Through Us */}
              <div style={{ background: '#F1F5F9', borderRadius: '16px', padding: '32px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
                  {isTa ? 'ஏன் எங்கள் மூலம் விளம்பரம் செய்ய வேண்டும்?' : 'Why Post through us?'}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                      <Zap size={24} color="#0D9488" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>Zero Brokerage</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Save 100% brokerage fees for lifetime.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                      <Users size={24} color="#3B82F6" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>Faster Tenants & Buyers</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Connect with active leads in less than 48 hours.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                      <ShieldCheck size={24} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>10 Lac+ Verified Connections</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Verified phone & identity title check.</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', marginTop: '32px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={16} color="#F59E0B" fill="#F59E0B" />
                    30 Lac+ Home Owners Trust Us
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#475569', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                    "The service I received from MJ Estates was helpful. I got clear information and fast enquiries without unnecessary middlemen."
                  </p>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', marginTop: '8px' }}>
                    Anil Kant | Chennai Owner
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Posting Form (Matching Image 2) */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
                <form onSubmit={handleQuickSubmit}>
                  {/* Name */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      {isTa ? 'பெயர்' : 'Name'}
                    </label>
                    <input
                      type="text"
                      placeholder={isTa ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      {isTa ? 'மின்னஞ்சல் முகவரி' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email like name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                      required
                    />
                  </div>

                  {/* Mobile Number & City Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        {isTa ? 'தொலைபேசி எண்' : 'Mobile Number'}
                      </label>
                      <div style={{ display: 'flex', border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
                        <span style={{ background: '#F1F5F9', padding: '10px 8px', fontSize: '0.85rem', fontWeight: '700', borderRight: '1px solid #CBD5E1' }}>+91</span>
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ width: '100%', padding: '10px', border: 'none', outline: 'none', fontSize: '0.9rem' }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        {isTa ? 'நகரம்' : 'Select City'}
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFFFFF' }}
                      >
                        <option value="Chennai">Chennai</option>
                        <option value="Thiruvallur">Thiruvallur</option>
                        <option value="Kanchipuram">Kanchipuram</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Madurai">Madurai</option>
                      </select>
                    </div>
                  </div>

                  {/* WhatsApp Toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <input
                      type="checkbox"
                      id="wa-toggle"
                      checked={formData.whatsAppUpdates}
                      onChange={(e) => setFormData({ ...formData, whatsAppUpdates: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: '#0D9488', cursor: 'pointer' }}
                    />
                    <label htmlFor="wa-toggle" style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', cursor: 'pointer' }}>
                      Get updates on <span style={{ color: '#16A34A', fontWeight: '700' }}>WhatsApp</span> 💬
                    </label>
                  </div>

                  {/* Property Type Selector */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                      {isTa ? 'சொத்து வகை' : 'Property Type'}
                    </label>
                    <div style={{ display: 'flex', border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
                      {['Residential', 'Commercial', 'Land/Plot'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type })}
                          style={{
                            flex: 1,
                            padding: '10px 4px',
                            border: 'none',
                            background: formData.propertyType === type ? '#0F172A' : '#FFFFFF',
                            color: formData.propertyType === type ? 'white' : '#475569',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Ad Type Selector */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                      {isTa ? 'விளம்பர வகை' : 'Select Property Ad Type'}
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                      {['Rent', 'Resale', 'PG/Hostel', 'Flatmates'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, adMode: mode })}
                          style={{
                            padding: '10px 4px',
                            borderRadius: '6px',
                            border: formData.adMode === mode ? '2px solid #0D9488' : '1px solid #CBD5E1',
                            background: formData.adMode === mode ? '#CCFBF1' : '#F8FAFC',
                            color: formData.adMode === mode ? '#0F766E' : '#475569',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA Submit Button (Signature Red) */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: '#FD3752',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px',
                      fontSize: '1.05rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(253, 55, 82, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    Start Posting Your Ad For FREE <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Helpline Banner (Matching Image 4) */}
            <div style={{ background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: '12px', padding: '16px 24px', marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', textStyle: 'center', flexWrap: 'wrap' }}>
              <Phone size={20} color="#D97706" />
              <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#92400E' }}>
                Give a missed call to <a href="tel:8690005267" style={{ color: '#B45309', textDecoration: 'underline' }}>869-000-5267</a> to get instant help with your property listing
              </span>
            </div>

            {/* How It Works Section (Matching Image 4) */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>How It Works</h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Simple 3-step listing process with instant lead alerts</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '24px' }}>
                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#EEF2FF', borderRadius: '50%', color: '#4F46E5', fontWeight: '800', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>1</div>
                  <h4 style={{ fontWeight: '700', color: '#0F172A' }}>Post Your Property Ad</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Add photos, pricing & basic details in less than 2 minutes.</p>
                </div>

                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#CCFBF1', borderRadius: '50%', color: '#0D9488', fontWeight: '800', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>2</div>
                  <h4 style={{ fontWeight: '700', color: '#0F172A' }}>Legal Verification Check</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Our team verifies Patta & title documents to ensure trust.</p>
                </div>

                <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF3C7', borderRadius: '50%', color: '#D97706', fontWeight: '800', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>3</div>
                  <h4 style={{ fontWeight: '700', color: '#0F172A' }}>Connect Directly</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Receive calls & WhatsApp inquiries directly from genuine buyers.</p>
                </div>
              </div>
            </div>

            {/* Comparison Feature Table (Matching Image 5) */}
            <div style={{ marginTop: '56px', background: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>
                Rent or Sell Property Online Easily With MJ Estates
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '24px', lineHeight: 1.6 }}>
                Looking to sell property online or list your property for rent? MJ Estates makes it simple to sell a house, post a rental, or list land with clear information and direct enquiries.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1' }}>
                      <th style={{ padding: '12px 16px', fontWeight: '800', color: '#0F172A', width: '25%' }}>FEATURE</th>
                      <th style={{ padding: '12px 16px', fontWeight: '800', color: '#0F172A' }}>DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0F172A' }}>Zero Brokerage</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>Buy, sell or rent your property without paying hefty commissions to agents.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0F172A' }}>Free Listing</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>Post your property advertisement for free on the MJ Estates platform and reach relevant buyers or tenants.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0F172A' }}>Easy and Quick Process</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>With MJ Estates, posting a rental advertisement or sale listing is simple and guided step by step.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0F172A' }}>Increased Property Visibility</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>Extensive online presence ensures maximum visibility, increasing the chances of finding the right tenants or buyers for your property.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0F172A' }}>Dedicated Support</td>
                      <td style={{ padding: '14px 16px', color: '#475569' }}>Imran Basha and team help you with the legal Patta verification process, ensuring that your property advertisement gets maximum reach.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Wizard Step 2: Full Property Details Submission */}
        {wizardStep === 2 && (
          <div style={{ maxWidth: '640px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
              Step 2: Property Specifications & Pricing
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '24px' }}>
              Add details for {formData.adMode} {formData.propertyType} in {formData.city}
            </p>

            <form onSubmit={handleFullSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                  Property Title / Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. MS Heights — CMDA Approved 2BHK Apartment in OMR"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Locality / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Veppampattu / Perungudi"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Total Price (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 4500000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Area Size (Sq.Ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1800"
                    value={formData.areaSqFt}
                    onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Facing Direction
                  </label>
                  <select
                    value={formData.facing}
                    onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: 'white' }}
                  >
                    <option value="East Facing">East Facing</option>
                    <option value="North Facing">North Facing</option>
                    <option value="West Facing">West Facing</option>
                    <option value="South Facing">South Facing</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                  Property Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your property amenities, road width, drinking water source..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setWizardStep(1)}
                  style={{ flex: 1, background: '#F1F5F9', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, background: '#0D9488', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
                >
                  Submit Property Listing
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Wizard Step 3: Success Confirmation */}
        {wizardStep === 3 && (
          <div style={{ maxWidth: '560px', margin: '40px auto', background: 'white', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '64px', height: '64px', background: '#DCFCE7', color: '#16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>Property Listed Successfully!</h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '8px' }}>
              Your listing <strong>"{submittedProperty?.title}"</strong> has been published to the buyer search directory.
            </p>

            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', margin: '24px 0', border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>LISTING DETAILS:</div>
              <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>{submittedProperty?.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#0D9488', fontWeight: '700', marginTop: '4px' }}>{submittedProperty?.priceLabel} • {submittedProperty?.areaDisplay}</div>
            </div>

            <button
              onClick={onSwitchToSearch}
              className="btn-navy"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', fontWeight: '800', fontSize: '0.95rem' }}
            >
              View Properties in Search Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
