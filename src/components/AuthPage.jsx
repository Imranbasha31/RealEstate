import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronLeft, LockKeyhole, Phone, ShieldCheck } from 'lucide-react';

export default function AuthPage({ mode = 'login', onSuccess, onBack }) {
  const [step, setStep] = useState('details');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSignUp = mode === 'signup';

  const handleContinue = (event) => {
    event.preventDefault();
    if (phone.length < 10 || (isSignUp && !name.trim())) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
    }, 500);
  };

  const handleOtpChange = (index, value) => {
    const nextValue = value.replace(/\D/g, '').slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = nextValue;
    setOtp(nextOtp);
    if (nextValue && index < 3) document.getElementById(`auth-otp-${index + 1}`)?.focus();
  };

  const handleVerify = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      onSuccess({
        name: name || 'MJ Estates User',
        email,
        phone: `+91 ${phone}`,
        isLoggedIn: true
      });
    }, 500);
  };

  return (
    <main className="auth-page">
      <div className="auth-page-shell">
        <section className="auth-page-brand">
          <button type="button" className="auth-back-link" onClick={onBack}>
            <ChevronLeft size={17} /> Back to MJ Estates
          </button>
          <img src="/mj_logo.png" alt="MJ Estates" className="auth-page-logo" />
          <span className="auth-kicker">MJ ESTATES · VERIFIED PROPERTIES</span>
          <h1>{isSignUp ? 'Start your property journey.' : 'Welcome back to better property decisions.'}</h1>
          <p>Discover verified plots, premium homes, and investment opportunities across Tamil Nadu.</p>
          <div className="auth-benefits">
            <span><Check size={16} /> Clear listing information</span>
            <span><Check size={16} /> Direct site-visit support</span>
            <span><Check size={16} /> Saved properties in one place</span>
          </div>
        </section>

        <section className="auth-page-card">
          <div className="auth-page-card-heading">
            <div className="auth-icon"><ShieldCheck size={22} /></div>
            <div>
              <span className="auth-step-label">{step === 'otp' ? 'STEP 2 OF 2' : 'SECURE ACCESS'}</span>
              <h2>{step === 'otp' ? 'Verify your mobile' : isSignUp ? 'Create your account' : 'Log in to your account'}</h2>
            </div>
          </div>

          {step === 'details' ? (
            <form onSubmit={handleContinue} className="auth-form">
              {isSignUp && (
                <label>
                  Full name
                  <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your full name" required />
                </label>
              )}
              {isSignUp && (
                <label>
                  Email address <span className="optional">Optional</span>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
                </label>
              )}
              <label>
                Mobile number
                <div className="phone-field">
                  <span><Phone size={16} /> +91</span>
                  <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit mobile number" maxLength={10} required />
                </div>
              </label>
              <button type="submit" className="auth-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending OTP…' : 'Continue with OTP'} <ArrowRight size={17} />
              </button>
              <p className="auth-terms">By continuing, you agree to MJ Estates’ Terms and Privacy Policy.</p>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="auth-form">
              <p className="auth-muted">We sent a 4-digit verification code to <strong>+91 {phone}</strong>.</p>
              <div className="otp-row">
                {otp.map((digit, index) => (
                  <input key={index} id={`auth-otp-${index}`} value={digit} onChange={(event) => handleOtpChange(index, event.target.value)} inputMode="numeric" maxLength={1} aria-label={`OTP digit ${index + 1}`} />
                ))}
              </div>
              <button type="submit" className="auth-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Verifying…' : 'Verify and continue'} <ArrowRight size={17} />
              </button>
              <button type="button" className="auth-edit-button" onClick={() => setStep('details')}><ArrowLeft size={15} /> Change mobile number</button>
            </form>
          )}

          {step === 'details' && (
            <div className="auth-switch">
              {isSignUp ? 'Already have an account?' : 'New to MJ Estates?'}{' '}
              <button type="button" onClick={() => onBack(isSignUp ? 'login' : 'signup')}>
                {isSignUp ? 'Log in' : 'Create an account'}
              </button>
            </div>
          )}
          <div className="auth-security-note"><LockKeyhole size={14} /> Your mobile number is used only for secure sign-in.</div>
          <div className="auth-admin-link">Are you an administrator? <a href="#admin">Admin Login</a></div>
        </section>
      </div>
    </main>
  );
}
