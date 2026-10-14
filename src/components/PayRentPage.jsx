import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Zap, Award, FileText, CheckCircle2, DollarSign } from 'lucide-react';

export default function PayRentPage({ lang }) {
  const isTa = lang === 'ta';

  const [paymentType, setPaymentType] = useState('house-rent'); // 'house-rent' | 'tuition' | 'deposit' | 'commercial'
  const [amount, setAmount] = useState('25000');
  const [landlordName, setLandlordName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const numAmount = Number(amount) || 0;
  const rewardPoints = Math.floor(numAmount * 0.02); // 2% cashback points
  const convenFee = Math.round(numAmount * 0.01); // 1% convenience fee

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '32px 16px 60px 16px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Page Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ background: '#EEF2FF', color: '#4F46E5', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800' }}>
            MJ ESTATES PAYMENTS
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '8px' }}>
            {isTa ? 'கிரெடிட் கார்டு மூலம் வாடகை & பள்ளி கட்டணம் செலுத்துங்கள்' : 'Pay House Rent & Tuition Fee with Credit Card'}
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
            Earn Reward Points • Enjoy 45 Days Interest-Free Credit • Instant Digital HRA Tax Receipt
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#FEF3C7', padding: '10px', borderRadius: '10px' }}><Award color="#D97706" size={24} /></div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>Earn Cashback Points</div>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Get up to 2% back in credit card rewards.</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#CCFBF1', padding: '10px', borderRadius: '10px' }}><CreditCard color="#0D9488" size={24} /></div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>45 Days Free Credit</div>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Maintain healthy cash flow until billing date.</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#EEF2FF', padding: '10px', borderRadius: '10px' }}><FileText color="#4F46E5" size={24} /></div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>Instant HRA Receipts</div>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Automated rent receipts for IT tax exemption.</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#DCFCE7', padding: '10px', borderRadius: '10px' }}><ShieldCheck color="#16A34A" size={24} /></div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>100% Bank Encryption</div>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Direct transfer into landlord bank account.</div>
            </div>
          </div>
        </div>

        {/* Payment Form Container */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Form */}
          <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            {!isSuccess ? (
              <form onSubmit={handleSubmit}>
                {/* Select Type */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                    Select Payment Category
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {[
                      { id: 'house-rent', label: '🏠 House Rent' },
                      { id: 'tuition', label: '🎓 School / Tuition Fee' },
                      { id: 'deposit', label: '🔑 Security Deposit' },
                      { id: 'commercial', label: '🏢 Office Rent' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setPaymentType(cat.id)}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: paymentType === cat.id ? '2px solid #0D9488' : '1px solid #CBD5E1',
                          background: paymentType === cat.id ? '#CCFBF1' : '#F8FAFC',
                          color: paymentType === cat.id ? '#0F766E' : '#475569',
                          fontWeight: '700',
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Transfer Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1.1rem', fontWeight: '700' }}
                    required
                  />
                </div>

                {/* Landlord Name */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Landlord / Institution Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar / Velammal School"
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                {/* Landlord UPI ID / Account Number */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Landlord UPI ID / Bank Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. landlord@upi or 9182374912"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#0D9488',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
                  }}
                >
                  Pay ₹{numAmount.toLocaleString('en-IN')} Now
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={56} color="#16A34A" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A' }}>Payment Successful!</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Transaction ID: TXN-{Date.now().toString().slice(-8)}</p>

                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '20px', margin: '24px 0', border: '1px solid #E2E8F0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Recipient:</span>
                    <span style={{ fontWeight: '700', color: '#0F172A' }}>{landlordName || 'Landlord Account'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Amount Paid:</span>
                    <span style={{ fontWeight: '800', color: '#0D9488' }}>₹{numAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Reward Points Earned:</span>
                    <span style={{ fontWeight: '700', color: '#D97706' }}>+{rewardPoints} Points 🌟</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  style={{ background: '#0F172A', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
                >
                  Make Another Payment
                </button>
              </div>
            )}
          </div>

          {/* Breakdown & Rewards Summary Card */}
          <div style={{ background: '#1E293B', color: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px', color: '#F8FAFC' }}>
              Payment Breakdown
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <span>Transfer Amount</span>
                <span>₹{numAmount.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <span>Platform Convenience Fee (1%)</span>
                <span>₹{convenFee.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#4ADE80', fontWeight: '700' }}>
                <span>Estimated Card Cashback</span>
                <span>+ ₹{rewardPoints.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ borderTop: '1px solid #334155', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800' }}>
                <span>Total Payable</span>
                <span style={{ color: '#38BDF8' }}>₹{(numAmount + convenFee).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '16px', borderRadius: '10px', fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.5 }}>
              💡 <strong>HRA Tax Benefit Tip:</strong> Your digital rent receipt will be automatically generated and sent to your email with landlord PAN verification for easy IT filing.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
