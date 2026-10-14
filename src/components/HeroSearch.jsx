import React from 'react';
import { Search, FileText, ArrowRight, PlusCircle, Landmark } from 'lucide-react';
import { PROPERTY_TYPES, DISTRICTS } from '../data/properties';

export default function HeroSearch({
  lang,
  activeCategory,
  setActiveCategory,
  selectedDistrict,
  setSelectedDistrict,
  budget,
  setBudget,
  facing,
  setFacing,
  searchTerm,
  setSearchTerm,
  onResetFilters,
  onNavigate
}) {
  const isTa = lang === 'ta';

  return (
    <section className="hero-gradient">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Rental Agreement Pill Banner (Matching Image 3) */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div
            onClick={() => onNavigate && onNavigate('rental-agreement')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#FEF3C7',
              color: '#92400E',
              padding: '6px 20px',
              borderRadius: '24px',
              fontSize: '0.85rem',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              border: '1px solid #FCD34D'
            }}
          >
            <FileText size={16} color="#D97706" />
            <span>Rental Agreement</span>
            <span style={{ color: '#D97706', fontWeight: '400' }}>|</span>
            <span style={{ color: '#B45309' }}>🚚 Next Day Delivery</span>
          </div>
        </div>

        {/* Main Hero Header (Matching Image 3 Header) */}
        <div className="hero-header-box" style={{ textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.5px' }}>
            {isTa ? (
              <>உலகின் மிகப்பெரிய <span style={{ color: '#CCFBF1' }}>தரகர் இல்லாத</span> சொத்து தளம்</>
            ) : (
              <>Your Future Begins With The Right Property</>
            )}
          </h1>

          <p className="hero-desc" style={{ fontSize: '1rem', opacity: 0.9 }}>
            {isTa
              ? 'நேரடி உரிமையாளர்கள் & சரிபார்க்கப்பட்ட விளம்பரதாரர்களிடமிருந்து மனைகள், வீடுகள் & வணிக இடங்கள்.'
              : 'Buy, Rent or Sell properties directly with zero brokerage commission. Verified Patta & CMDA/DTCP listings.'}
          </p>
        </div>

        {/* Search and filter card */}
        <div id="search" className="search-card">
          {/* Main Mode Tabs: Buy | Rent | Commercial */}
          <div style={{ display: 'flex', borderBottom: '2px solid #E2E8F0', marginBottom: '20px' }}>
            {[
              { id: 'all', label: 'Buy', labelTa: 'வாங்கு' },
              { id: 'rent', label: 'Rent', labelTa: 'வாடகை' },
              { id: 'commercial', label: 'Commercial', labelTa: 'வணிகம்' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id === 'rent' ? 'villa' : tab.id)}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeCategory === tab.id || (tab.id === 'rent' && activeCategory === 'villa') ? '4px solid #FD3752' : 'none',
                  color: activeCategory === tab.id || (tab.id === 'rent' && activeCategory === 'villa') ? '#FD3752' : '#64748B',
                  fontWeight: '800',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                {isTa ? tab.labelTa : tab.label}
              </button>
            ))}
          </div>

          {/* Sub Categories Tabs */}
          <div className="filter-tabs">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveCategory(type.id)}
                className={`filter-tab ${activeCategory === type.id ? 'active' : ''}`}
              >
                {isTa ? type.labelTa : type.label}
              </button>
            ))}
          </div>

          {/* Filter Controls Grid */}
          <div className="filter-grid">
            {/* District Dropdown */}
            <div className="filter-group">
              <label className="filter-label">
                {isTa ? 'மாவட்டம்' : 'District'}
              </label>
              <select
                className="filter-select"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="all">{isTa ? 'அனைத்து மாவட்டங்கள்' : 'All Districts (38)'}</option>
                {DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword / Location Search */}
            <div className="filter-group">
              <label className="filter-label">
                {isTa ? 'இடம் / தாலுகா' : 'Search upto 3 localities, societies'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="filter-input"
                  placeholder={isTa ? 'எ.கா: வெப்பம்பட்டு, OMR, காஞ்சிபுரம்...' : 'Search locality e.g., Veppampattu, OMR...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Budget Range */}
            <div className="filter-group">
              <label className="filter-label">
                {isTa ? 'பட்ஜெட்' : 'Max Budget'}
              </label>
              <select
                className="filter-select"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="all">{isTa ? 'அனைத்து பட்ஜெட்' : 'Any Budget'}</option>
                <option value="25">{isTa ? '₹25 லட்சத்திற்குள்' : 'Under ₹25 Lakhs'}</option>
                <option value="50">{isTa ? '₹50 லட்சத்திற்குள்' : 'Under ₹50 Lakhs'}</option>
                <option value="100">{isTa ? '₹1 கோடிக்குள்' : 'Under ₹1 Crore'}</option>
                <option value="100+">{isTa ? '₹1 கோடிக்கு மேல்' : 'Above ₹1 Crore'}</option>
              </select>
            </div>

            {/* Facing Direction Filter */}
            <div className="filter-group">
              <label className="filter-label">
                {isTa ? 'திசை' : 'Facing Direction'}
              </label>
              <select
                className="filter-select"
                value={facing}
                onChange={(e) => setFacing(e.target.value)}
              >
                <option value="all">{isTa ? 'எந்த திசையும்' : 'Any Facing'}</option>
                <option value="East Facing">{isTa ? 'கிழக்கு (East)' : 'East Facing'}</option>
                <option value="North Facing">{isTa ? 'வடக்கு (North)' : 'North Facing'}</option>
                <option value="North-East Facing">{isTa ? 'வடகிழக்கு (North-East)' : 'North-East Facing'}</option>
                <option value="West Facing">{isTa ? 'மேற்கு (West)' : 'West Facing'}</option>
              </select>
            </div>

            {/* Search CTA */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn-primary"
                style={{ width: '100%', background: '#D4A64A', color: '#0B1F3A', border: 'none', boxShadow: '0 4px 12px rgba(212, 166, 74, 0.3)' }}
              >
                <Search size={18} />
                <span>{isTa ? 'தேடு' : 'Search'}</span>
              </button>
              {(selectedDistrict !== 'all' || activeCategory !== 'all' || budget !== 'all' || facing !== 'all' || searchTerm) && (
                <button 
                  onClick={onResetFilters}
                  className="btn-outline"
                  title="Reset Filters"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Property Owner Callout Box (Matching Image 3) */}
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px dashed #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '600' }}>
              Are you a Property Owner?
            </div>
            <button
              onClick={() => onNavigate && onNavigate('post-property')}
              style={{
                background: '#D4A64A',
                color: '#0B1F3A',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 18px',
                fontWeight: '800',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <PlusCircle size={16} /> Post Free Property Ad
            </button>
          </div>
        </div>

        {/* Bottom Loan Eligibility Banner (Matching Image 3 Bottom Banner) */}
        <div style={{
          marginTop: '32px',
          background: '#0F172A',
          color: 'white',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          border: '1px solid #334155'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: '#1E293B', padding: '12px', borderRadius: '12px', border: '1px solid #475569' }}>
              <Landmark size={28} color="#0D9488" />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>
                Do you know how much loan you can get? Get maximum with MJ Estates!
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '2px' }}>
                Pre-approved Home Loans from SBI, HDFC & ICICI Bank starting at 8.4% p.a.
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('home-loans')}
            style={{
              background: '#FFFFFF',
              color: '#0F172A',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              fontWeight: '800',
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Check Eligibility <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
