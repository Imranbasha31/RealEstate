import React, { useState } from 'react';
import { Building2, Phone, Globe, Heart, ShieldCheck, User, Lock, PlusCircle, CreditCard, FileText, Landmark, Menu, X, Search, Home } from 'lucide-react';

export default function Header({
  lang,
  setLang,
  savedCount,
  onOpenSaved,
  currentView,
  setCurrentView,
  onOpenAuthModal,
  user
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTa = lang === 'ta';

  const handleNavClick = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-sticky">
      {/* Top Dark Bar */}
      <div className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          <span className="brand-badge">
            {isTa ? '100% சரிபார்க்கப்பட்டது' : 'Founder Imran Basha'}
          </span>
          <span className="top-bar-subtext" style={{ opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <ShieldCheck size={14} color="#F59E0B" />
            {isTa ? 'DTCP & CMDA அங்கீகரிக்கப்பட்ட மனைகள்' : 'Verified Listings: Chennai, Thiruvallur, Kanchipuram & TN'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a href="tel:+917200358300" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', fontSize: '0.78rem' }}>
            <Phone size={13} /> <span className="top-phone-text">+91 72003 58300</span>
          </a>

          {/* Admin quick access badge on top bar */}
          <button
            onClick={() => handleNavClick('admin')}
            style={{
              background: currentView === 'admin' ? '#0D9488' : 'rgba(255,255,255,0.12)',
              border: 'none',
              borderRadius: '4px',
              padding: '2px 8px',
              color: 'white',
              fontSize: '0.72rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Lock size={11} /> Admin
          </button>

          <button 
            onClick={() => setLang(isTa ? 'en' : 'ta')}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              borderRadius: '4px',
              padding: '2px 8px',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Globe size={13} /> {isTa ? 'English' : 'தமிழ்'}
          </button>
        </div>
      </div>

      {/* Main Unified Navbar */}
      <div className="nav-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '16px' }}>
          
          {/* Official Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }} onClick={() => handleNavClick('buyer')}>
            <img
              src="/ms_logo.png"
              alt="MS ESTATES - Verified Properties"
              className="header-brand-logo"
            />
          </div>

          {/* Desktop Center Page Navigation Group (Single Unified Row!) */}
          <div className="desktop-nav-group">
            <button
              onClick={() => handleNavClick('buyer')}
              className={`nav-link-btn ${currentView === 'buyer' ? 'active' : ''}`}
            >
              <Home size={14} /> {isTa ? 'தேடல்' : 'Buyer Search'}
            </button>

            <button
              onClick={() => handleNavClick('post-property')}
              className={`nav-link-btn ${currentView === 'post-property' ? 'active' : ''}`}
            >
              📢 {isTa ? 'விற்பனை' : 'Sell / Rent'}
            </button>

            <button
              onClick={() => handleNavClick('pay-rent')}
              className={`nav-link-btn ${currentView === 'pay-rent' ? 'active' : ''}`}
            >
              <CreditCard size={14} color="#4F46E5" /> {isTa ? 'வாடகை கட்டணம்' : 'Pay Rent'}
            </button>

            <button
              onClick={() => handleNavClick('rental-agreement')}
              className={`nav-link-btn ${currentView === 'rental-agreement' ? 'active' : ''}`}
            >
              <FileText size={14} color="#D97706" /> {isTa ? 'ஒப்பந்தம்' : 'Agreement'}
            </button>

            <button
              onClick={() => handleNavClick('home-loans')}
              className={`nav-link-btn ${currentView === 'home-loans' ? 'active' : ''}`}
            >
              <Landmark size={14} color="#0D9488" /> {isTa ? 'கடன்' : 'Home Loans'}
            </button>

            <button
              onClick={() => handleNavClick('user')}
              className={`nav-link-btn ${currentView === 'user' ? 'active' : ''}`}
            >
              <User size={14} /> {isTa ? 'என் கணக்கு' : 'My Account'}
            </button>
          </div>

          {/* Right Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            
            {/* Desktop + Mobile Quick Post Ad Button */}
            <button
              onClick={() => handleNavClick('post-property')}
              className="post-ad-header-btn"
            >
              <PlusCircle size={15} />
              <span className="post-ad-text">{isTa ? 'இலவச விளம்பரம்' : 'Post Free Ad'}</span>
            </button>

            {/* Saved Properties Heart Icon */}
            <button 
              onClick={onOpenSaved} 
              className="btn-outline" 
              style={{ position: 'relative', padding: '6px 10px', height: '36px' }}
              title="Saved Properties"
            >
              <Heart size={16} color="#D97706" />
              {savedCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#D97706',
                  color: 'white',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {savedCount}
                </span>
              )}
            </button>

            {/* Desktop Auth Buttons */}
            <div className="desktop-auth-buttons">
              {!user ? (
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={onOpenAuthModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      color: '#0F172A',
                      cursor: 'pointer',
                      padding: '6px 8px'
                    }}
                  >
                    Log in
                  </button>
                  <button
                    onClick={onOpenAuthModal}
                    style={{
                      background: '#FD3752',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: '6px 12px'
                    }}
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0D9488' }}>
                  👤 {user.phone}
                </span>
              )}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              style={{
                background: '#F1F5F9',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '6px',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={20} color="#0F172A" /> : <Menu size={20} color="#0F172A" />}
            </button>
          </div>
        </div>

        {/* Mobile Collapsible Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer" style={{
            width: '100%',
            background: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '16px',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase' }}>
              Navigation Pages
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => handleNavClick('buyer')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'buyer' ? '2px solid #0F172A' : '1px solid #CBD5E1',
                  background: currentView === 'buyer' ? '#0F172A' : '#F8FAFC',
                  color: currentView === 'buyer' ? 'white' : '#334155',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                🏡 Buyer Search
              </button>

              <button
                onClick={() => handleNavClick('post-property')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'post-property' ? '2px solid #0D9488' : '1px solid #CBD5E1',
                  background: currentView === 'post-property' ? '#0D9488' : '#CCFBF1',
                  color: currentView === 'post-property' ? 'white' : '#0F766E',
                  fontWeight: '800',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                📢 Post Free Ad
              </button>

              <button
                onClick={() => handleNavClick('pay-rent')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'pay-rent' ? '2px solid #4F46E5' : '1px solid #CBD5E1',
                  background: currentView === 'pay-rent' ? '#4F46E5' : '#EEF2FF',
                  color: currentView === 'pay-rent' ? 'white' : '#3730A3',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                💳 Pay Rent
              </button>

              <button
                onClick={() => handleNavClick('rental-agreement')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'rental-agreement' ? '2px solid #D97706' : '1px solid #CBD5E1',
                  background: currentView === 'rental-agreement' ? '#D97706' : '#FEF3C7',
                  color: currentView === 'rental-agreement' ? 'white' : '#92400E',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                📑 Agreement
              </button>

              <button
                onClick={() => handleNavClick('home-loans')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'home-loans' ? '2px solid #0D9488' : '1px solid #CBD5E1',
                  background: currentView === 'home-loans' ? '#0D9488' : '#CCFBF1',
                  color: currentView === 'home-loans' ? 'white' : '#0F766E',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                🏦 Home Loans
              </button>

              <button
                onClick={() => handleNavClick('user')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: currentView === 'user' ? '2px solid #0F172A' : '1px solid #CBD5E1',
                  background: currentView === 'user' ? '#0F172A' : '#F8FAFC',
                  color: currentView === 'user' ? 'white' : '#334155',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textAlign: 'left'
                }}
              >
                👤 My Account
              </button>
            </div>

            <button
              onClick={() => handleNavClick('admin')}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                background: '#0D9488',
                color: 'white',
                fontWeight: '800',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Lock size={14} /> Admin Portal (Imran Basha)
            </button>

            {!user ? (
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <button
                  onClick={() => { onOpenAuthModal(); setMobileMenuOpen(false); }}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', background: 'white', fontWeight: '700', color: '#0F172A' }}
                >
                  Log in
                </button>
                <button
                  onClick={() => { onOpenAuthModal(); setMobileMenuOpen(false); }}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: '#FD3752', color: 'white', fontWeight: '700' }}
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div style={{ padding: '8px', background: '#F1F5F9', borderRadius: '6px', textAlign: 'center', fontWeight: '700', color: '#0D9488', fontSize: '0.85rem' }}>
                Signed in as {user.phone}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
