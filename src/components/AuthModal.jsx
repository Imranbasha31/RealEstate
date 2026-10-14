import React, { useState } from 'react';
import { X, Check, Building2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess, lang }) {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const isTa = lang === 'ta';

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.trim().length < 10) {
      alert(isTa ? 'தயவுசெய்து சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்' : 'Please enter a valid 10-digit mobile number');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
    }, 600);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess({
        name: 'Imran User',
        phone: `+91 ${phone}`,
        isLoggedIn: true
      });
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '16px'
    }}>
      <div className="auth-modal-card" style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '720px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        minHeight: '400px'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} color="#475569" />
        </button>

        {/* Left Branding Column */}
        <div className="auth-modal-left" style={{
          width: '45%',
          background: '#F8FAFC',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid #E2E8F0'
        }}>
          <img
            src="/mj_logo.png"
            alt="MJ Estates Logo"
            style={{
              height: '56px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '20px',
              display: 'block'
            }}
          />

          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>
            {isTa ? 'உள்நுழைவு / பதிவு' : 'Login / Sign up'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
              <Check size={16} color="#0D9488" strokeWidth={3} />
              <span>{isTa ? 'பூஜ்ஜிய தரகர் கட்டணம்.' : 'Zero Brokerage.'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
              <Check size={16} color="#0D9488" strokeWidth={3} />
              <span>{isTa ? 'தினமும் புதிய மனைகள்.' : 'Thousands of new listings.'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
              <Check size={16} color="#0D9488" strokeWidth={3} />
              <span>{isTa ? '₹100+ கோடி தரகர் சேமிப்பு.' : '100 Cr+ Brokerage saved.'}</span>
            </div>
          </div>
        </div>

        {/* Right Phone Input Form Column */}
        <div className="auth-modal-right" style={{
          width: '55%',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {step === 'phone' ? (
            <form onSubmit={handleSendOtp}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0F172A', marginBottom: '20px' }}>
                {isTa ? 'தொடர தொலைபேசி எண்ணை உள்ளிடவும்' : 'Enter phone to continue'}
              </h4>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1.5px solid #CBD5E1',
                borderRadius: '8px',
                padding: '4px 12px',
                marginBottom: '20px',
                background: '#FFFFFF',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  paddingRight: '12px',
                  borderRight: '1px solid #CBD5E1',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  color: '#1E293B'
                }}>
                  <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  placeholder={isTa ? 'மொபைல் எண்ணை உள்ளிடவும்' : 'Enter Mobile Number'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  maxLength={10}
                  style={{
                    border: 'none',
                    outline: 'none',
                    padding: '10px 12px',
                    width: '100%',
                    fontSize: '0.95rem',
                    fontWeight: '600'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: '#FD3752',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(253, 55, 82, 0.3)'
                }}
              >
                {isSubmitting ? (isTa ? 'அனுப்பப்படுகிறது...' : 'Sending OTP...') : (isTa ? 'தொடர்க' : 'Continue')}
              </button>

              <p style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center', marginTop: '20px', lineHeight: 1.4 }}>
                {isTa ? 'தொடர்வதன் மூலம், எங்கள் ' : 'By continuing, you agree to our '}
                <a href="#terms" style={{ color: '#0F172A', fontWeight: '700', textDecoration: 'underline' }}>
                  {isTa ? 'விதிகள் & நிபந்தனைகளை' : 'Terms & Conditions'}
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                {isTa ? 'OTP ஐ சரிபார்க்கவும்' : 'Enter 4-Digit OTP'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
                {isTa ? `+91 ${phone} எண்ணிற்கு அனுப்பப்பட்டது` : `Sent to +91 ${phone}`}
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  style={{ background: 'none', border: 'none', color: '#0D9488', fontWeight: '700', cursor: 'pointer', marginLeft: '6px' }}
                >
                  {isTa ? 'மாற்று' : 'Edit'}
                </button>
              </p>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    style={{
                      width: '44px',
                      height: '44px',
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      textAlign: 'center',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      outline: 'none'
                    }}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: '#0D9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
                }}
              >
                {isSubmitting ? (isTa ? 'சரிபார்க்கிறது...' : 'Verifying...') : (isTa ? 'உள்நுழைக' : 'Verify & Login')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
