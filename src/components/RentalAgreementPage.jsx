import React, { useState } from 'react';
import { FileCheck, Truck, Clock, CheckCircle2, Download } from 'lucide-react';

export default function RentalAgreementPage({ lang }) {
  const isTa = lang === 'ta';

  const [agreeType, setAgreeType] = useState('residential'); // 'residential' | 'commercial' | 'flatmate'
  const [stampDuty, setStampDuty] = useState('100'); // '20' | '50' | '100'
  const [deliveryMode] = useState('express'); // 'express' | 'digital'

  const [tenantName, setTenantName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rentAmount, setRentAmount] = useState('15000');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const stampFee = Number(stampDuty);
  const deliveryFee = deliveryMode === 'express' ? 199 : 0;
  const serviceFee = 299;
  const totalCost = stampFee + deliveryFee + serviceFee;

  const handleGenerateDraft = (e) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '32px 16px 60px 16px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ background: '#FEF3C7', color: '#D97706', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800' }}>
            ⚡ NEXT DAY DOORSTEP DELIVERY
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '8px' }}>
            {isTa ? 'வாடகை ஒப்பந்தம் & மின்-முத்திரை தாள் சேவை' : 'Online Rental Agreement & E-Stamping'}
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
            Government Verified E-Stamp Paper • Customized Legal Draft • Delivered to your Doorstep in 24 Hours
          </p>
        </div>

        {/* Features Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <Truck size={32} color="#0D9488" style={{ margin: '0 auto 8px auto' }} />
            <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>24 Hours Delivery</div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Physical hardcopy delivered via courier.</div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <FileCheck size={32} color="#4F46E5" style={{ margin: '0 auto 8px auto' }} />
            <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>Govt Approved E-Stamp</div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Official Tamil Nadu Stamp Paper.</div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <Clock size={32} color="#D97706" style={{ margin: '0 auto 8px auto' }} />
            <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0F172A' }}>Create in 5 Minutes</div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>100% online legal customization.</div>
          </div>
        </div>

        {/* Form & Cost Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

          {/* Form */}
          <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            {!isGenerated ? (
              <form onSubmit={handleGenerateDraft}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
                  Fill Agreement Details
                </h3>

                {/* Agreement Type */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Agreement Type
                  </label>
                  <select
                    value={agreeType}
                    onChange={(e) => setAgreeType(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: 'white' }}
                  >
                    <option value="residential">Residential Rental Agreement (11 Months)</option>
                    <option value="commercial">Commercial Space Lease Agreement</option>
                    <option value="flatmate">PG / Flatmate Sharing Agreement</option>
                  </select>
                </div>

                {/* Landlord & Tenant Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Landlord (Owner) Name
                    </label>
                    <input
                      type="text"
                      placeholder="Owner Name"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Tenant Name
                    </label>
                    <input
                      type="text"
                      placeholder="Tenant Name"
                      value={tenantName}
                      onChange={(e) => setTenantName(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                      required
                    />
                  </div>
                </div>

                {/* Monthly Rent & Address */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Monthly Rent Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={rentAmount}
                    onChange={(e) => setRentAmount(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Rented Rented Property Address
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Full street address in Chennai / Tamil Nadu"
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                {/* Stamp Paper Denomination */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                    E-Stamp Paper Denomination
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {['20', '50', '100'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setStampDuty(val)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '8px',
                          border: stampDuty === val ? '2px solid #0D9488' : '1px solid #CBD5E1',
                          background: stampDuty === val ? '#CCFBF1' : '#F8FAFC',
                          color: stampDuty === val ? '#0F766E' : '#475569',
                          fontWeight: '800'
                        }}
                      >
                        ₹{val} Stamp
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#0F172A',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: '800',
                    cursor: 'pointer'
                  }}
                >
                  Generate Agreement & Order E-Stamp
                </button>
              </form>
            ) : (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#DCFCE7', padding: '14px', borderRadius: '10px', marginBottom: '20px' }}>
                  <CheckCircle2 size={24} color="#16A34A" />
                  <span style={{ fontWeight: '800', color: '#166534', fontSize: '0.95rem' }}>Draft Generated & Order Placed!</span>
                </div>

                <h4 style={{ fontWeight: '800', fontSize: '1rem', color: '#0F172A', marginBottom: '12px' }}>Agreement Preview Summary:</h4>
                <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  <div><strong>Landlord:</strong> {ownerName}</div>
                  <div><strong>Tenant:</strong> {tenantName}</div>
                  <div><strong>Rent:</strong> ₹{Number(rentAmount).toLocaleString('en-IN')}/month</div>
                  <div><strong>Address:</strong> {propertyAddress}</div>
                  <div><strong>E-Stamp Paper:</strong> ₹{stampDuty} TN Govt E-Stamp</div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                  <button
                    onClick={() => alert('Downloading official PDF draft preview...')}
                    style={{ flex: 1, background: '#0D9488', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <Download size={16} /> Download PDF Draft
                  </button>
                  <button
                    onClick={() => setIsGenerated(false)}
                    style={{ background: '#F1F5F9', border: 'none', padding: '12px 16px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Box */}
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
              Price Summary
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#475569' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Govt Stamp Duty</span>
                <span style={{ fontWeight: '700', color: '#0F172A' }}>₹{stampFee}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Legal Draft Customization</span>
                <span style={{ fontWeight: '700', color: '#0F172A' }}>₹{serviceFee}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>24H Doorstep Express Delivery</span>
                <span style={{ fontWeight: '700', color: '#0F172A' }}>₹{deliveryFee}</span>
              </div>
              <div style={{ borderTop: '2px dashed #E2E8F0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800', color: '#0F172A' }}>
                <span>Total Amount</span>
                <span style={{ color: '#0D9488' }}>₹{totalCost}</span>
              </div>
            </div>

            <div style={{ background: '#EEF2FF', padding: '14px', borderRadius: '10px', marginTop: '24px', fontSize: '0.8rem', color: '#3730A3', lineHeight: 1.5 }}>
              🛡️ All drafts are legally vetted by Senior Advocates in Chennai High Court & compliant with TN Rent Control Act.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
