import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, LockKeyhole, Phone, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage({ onSuccess, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim().toLowerCase() === 'admin@mjestates.com' && password === 'MJ@2026') {
      setError('');
      onSuccess();
      return;
    }
    setError('Invalid admin email or password.');
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <button type="button" className="admin-login-back" onClick={onBack}>
          <ArrowLeft size={16} /> Back to website
        </button>
        <img src="/mj_logo.png" alt="MJ Estates" className="admin-login-logo" />
        <div className="admin-login-icon"><ShieldCheck size={22} /></div>
        <span className="auth-step-label">PRIVATE ADMIN ACCESS</span>
        <h1>MJ Estates Admin</h1>
        <p className="admin-login-copy">Manage listings, verification status, and customer enquiries from the private portal.</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <label>
            Admin email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@mjestates.com" required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" required />
          </label>
          {error && <div className="admin-login-error">{error}</div>}
          <button type="submit" className="auth-submit">Sign in to Admin <ArrowRight size={17} /></button>
        </form>

        <div className="admin-login-security"><LockKeyhole size={14} /> Restricted workspace for authorised staff.</div>
        <a className="admin-login-phone" href="tel:+917200358300"><Phone size={14} /> Admin support: +91 72003 58300</a>
      </section>
    </main>
  );
}
