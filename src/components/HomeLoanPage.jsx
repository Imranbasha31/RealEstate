import React, { useState } from 'react';
import { Landmark, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HomeLoanPage({ lang }) {
  const isTa = lang === 'ta';

  // Calculator State
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantIncome, setApplicantIncome] = useState('75000');
  const [isApplied, setIsApplied] = useState(false);

  // EMI Math Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayable = emi * totalMonths;
  const totalInterest = totalPayable - loanAmount;

  const handleApplyLoan = (e) => {
    e.preventDefault();
    setIsApplied(true);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '32px 16px 60px 16px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header Hero Banner (Matching Image 3 Banner) */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0D9488 100%)', color: 'white', padding: '40px 32px', borderRadius: '20px', textAlign: 'center', marginBottom: '32px', boxShadow: '0 10px 25px rgba(13,148,136,0.25)' }}>
          <span style={{ background: '#F59E0B', color: '#0F172A', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800' }}>
            LOWEST INTEREST RATE FROM 8.4%
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '12px', marginBottom: '8px' }}>
            {isTa ? 'உங்களுக்கு எவ்வளவு கடன் கிடைக்கும் என்று தெரியுமா?' : 'Do you know how much home loan you can get?'}
          </h1>
          <p style={{ color: '#CCFBF1', fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
            Get maximum loan eligibility with instant pre-approval from top banking partners with zero processing fees.
          </p>
        </div>

        {/* Bank Partner Logos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {[
            { name: 'SBI Home Loan', rate: '8.40% p.a.', perk: 'Lowest Interest' },
            { name: 'HDFC Bank', rate: '8.50% p.a.', perk: 'Instant Sanction' },
            { name: 'ICICI Bank', rate: '8.55% p.a.', perk: 'Zero Processing Fee' },
            { name: 'Axis Bank', rate: '8.60% p.a.', perk: 'Pre-approved Loan' },
            { name: 'Bank of Baroda', rate: '8.45% p.a.', perk: 'Fast Track Payout' }
          ].map((bank, i) => (
            <div key={i} style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <Landmark size={24} color="#0D9488" style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>{bank.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#0D9488', fontWeight: '700', marginTop: '2px' }}>{bank.rate}</div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>{bank.perk}</div>
            </div>
          ))}
        </div>

        {/* Interactive EMI Calculator & Application Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

          {/* Calculator Controls */}
          <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator size={22} color="#0D9488" /> Home Loan EMI Calculator
            </h3>

            {/* Loan Amount Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>
                <span>Loan Amount</span>
                <span style={{ color: '#0D9488', fontWeight: '800' }}>₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
              </div>
              <input
                type="range"
                min={500000}
                max={30000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0D9488', cursor: 'pointer' }}
              />
            </div>

            {/* Interest Rate Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>
                <span>Interest Rate (% p.a.)</span>
                <span style={{ color: '#0D9488', fontWeight: '800' }}>{interestRate}%</span>
              </div>
              <input
                type="range"
                min={7.5}
                max={14.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0D9488', cursor: 'pointer' }}
              />
            </div>

            {/* Loan Tenure Slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>
                <span>Loan Tenure (Years)</span>
                <span style={{ color: '#0D9488', fontWeight: '800' }}>{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0D9488', cursor: 'pointer' }}
              />
            </div>

            {/* EMI Display Box */}
            <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
              <div style={{ fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Monthly Payable EMI</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0F172A', marginTop: '4px' }}>
                ₹{emi.toLocaleString('en-IN')} <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '500' }}>/ month</span>
              </div>
              <div style={{ borderTop: '1px solid #E2E8F0', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#475569' }}>
                <span>Principal: ₹{(loanAmount / 100000).toFixed(1)} L</span>
                <span>Interest: ₹{(totalInterest / 100000).toFixed(1)} L</span>
              </div>
            </div>
          </div>

          {/* Pre-Approval Lead Form */}
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            {!isApplied ? (
              <form onSubmit={handleApplyLoan}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                  Check Eligibility & Instant Pre-Approval
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
                  Get instant loan offer callback within 30 minutes.
                </p>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 10-digit number"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Monthly In-Hand Net Salary (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 75000"
                    value={applicantIncome}
                    onChange={(e) => setApplicantIncome(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#FD3752',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(253, 55, 82, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  Check Eligibility Now <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={56} color="#16A34A" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A' }}>Loan Pre-Approval Submitted!</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '8px' }}>
                  Based on your ₹{Number(applicantIncome).toLocaleString('en-IN')}/mo salary, you are eligible for up to <strong>₹{((Number(applicantIncome) * 60) / 100000).toFixed(1)} Lakhs</strong> Home Loan!
                </p>

                <div style={{ background: '#CCFBF1', color: '#0F766E', padding: '14px', borderRadius: '10px', marginTop: '20px', fontWeight: '700', fontSize: '0.85rem' }}>
                  📞 Bank Relationship Manager will call you at {applicantPhone || 'your mobile number'} shortly.
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
