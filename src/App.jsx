import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import PropertyCard from './components/PropertyCard';
import PropertyDetailModal from './components/PropertyDetailModal';
import SavedModal from './components/SavedModal';
import TrustSection from './components/TrustSection';
import DistrictGrid from './components/DistrictGrid';
import Footer from './components/Footer';
import MobileDock from './components/MobileDock';
import AdminPortal from './components/AdminPortal';
import UserDashboard from './components/UserDashboard';
import AuthPage from './components/AuthPage';
import AdminLoginPage from './components/AdminLoginPage';
import PostPropertyPage from './components/PostPropertyPage';
import PayRentPage from './components/PayRentPage';
import RentalAgreementPage from './components/RentalAgreementPage';
import HomeLoanPage from './components/HomeLoanPage';
import LiveChatWidget from './components/LiveChatWidget';

import { PROPERTIES as INITIAL_PROPERTIES } from './data/properties';
import { Grid, MapPin, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  // Pages: 'buyer' | 'post-property' | 'pay-rent' | 'rental-agreement' | 'home-loans' | 'admin' | 'user'
  const [currentView, setCurrentView] = useState(() => (
    typeof window !== 'undefined' && window.location.hash === '#admin' ? 'admin-login' : 'buyer'
  ));

  // Auth User State & Modal
  const [user, setUser] = useState(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') setCurrentView('admin-login');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [pendingAction, setPendingAction] = useState(null);

  // Dynamic Properties State
  const [propertiesList, setPropertiesList] = useState(INITIAL_PROPERTIES);

  // Dynamic Leads / Enquiries State
  const [leadsList, setLeadsList] = useState([
    {
      id: 'lead-1',
      name: 'Karthik Raja',
      phone: '+91 94433 12345',
      propTitle: 'MJ Layout — CMDA & RERA Approved Plot in Thiruvallur',
      message: 'Looking for a 4.5 cent plot for villa construction. Available this Sunday.',
      status: 'New',
      date: '08 Sep 2026'
    },
    {
      id: 'lead-2',
      name: 'Priya Sundaram',
      phone: '+91 98421 67890',
      propTitle: 'MJ Prime City — Luxury 3BHK Villa in Chennai OMR',
      message: 'Need bank loan assistance for OMR villa.',
      status: 'Contacted',
      date: '07 Sep 2026'
    }
  ]);

  // Filters State
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [budget, setBudget] = useState('all');
  const [facing, setFacing] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const [savedIds, setSavedIds] = useState(['prop-1']);
  const [activeModalProp, setActiveModalProp] = useState(null);
  const [showSavedModal, setShowSavedModal] = useState(false);

  const isTa = lang === 'ta';

  const requireAuth = (action) => {
    if (user) {
      action();
      return;
    }
    setPendingAction(() => action);
    setCurrentView('login');
  };

  const handleOpenDetail = (property) => {
    requireAuth(() => {
      setActiveModalProp(property);
      setCurrentView('buyer');
    });
  };

  const handleNavigate = (view) => {
    const protectedViews = ['post-property', 'pay-rent', 'rental-agreement', 'home-loans', 'user'];
    if (protectedViews.includes(view) && !user) {
      setCurrentView('login');
      return;
    }
    setCurrentView(view);
  };

  // Toggle Save Property
  const handleToggleSave = (propId) => {
    requireAuth(() => {
      setSavedIds((prev) =>
        prev.includes(propId) ? prev.filter((id) => id !== propId) : [...prev, propId]
      );
    });
  };

  // Reset Filters
  const handleResetFilters = () => {
    setActiveCategory('all');
    setSelectedDistrict('all');
    setBudget('all');
    setFacing('all');
    setSearchTerm('');
  };

  // Property Handlers
  const handleAddProperty = (newProp) => {
    setPropertiesList([newProp, ...propertiesList]);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setPropertiesList(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const handleToggleFeatured = (id) => {
    setPropertiesList(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  };

  const handleDeleteProperty = (id) => {
    setPropertiesList(prev => prev.filter(p => p.id !== id));
  };

  const handleUpdateLeadStatus = (leadId, newStatus) => {
    setLeadsList(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const handleCreateLead = (lead) => {
    setLeadsList(prev => [
      {
        ...lead,
        id: `lead-${Date.now()}`,
        status: 'New',
        date: new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date())
      },
      ...prev
    ]);
  };

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return propertiesList.filter((item) => {
      if (item.status === 'Sold' || item.status === 'Unavailable') return false;
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (selectedDistrict !== 'all' && item.district !== selectedDistrict) return false;
      if (facing !== 'all' && item.facing !== facing) return false;

      if (budget === '25' && item.price > 2500000) return false;
      if (budget === '50' && item.price > 5000000) return false;
      if (budget === '100' && item.price > 10000000) return false;
      if (budget === '100+' && item.price <= 10000000) return false;

      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchLoc = item.location.toLowerCase().includes(query);
        const matchDist = item.districtName.toLowerCase().includes(query);
        if (!matchTitle && !matchLoc && !matchDist) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'area') return b.areaSqFt - a.areaSqFt;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [propertiesList, activeCategory, selectedDistrict, budget, facing, searchTerm, sortBy]);

  const savedList = useMemo(() => {
    return propertiesList.filter((p) => savedIds.includes(p.id));
  }, [propertiesList, savedIds]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        savedCount={savedIds.length}
        onOpenSaved={() => requireAuth(() => setShowSavedModal(true))}
        onOpenAuthModal={() => setCurrentView('login')}
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
      />

      {(currentView === 'login' || currentView === 'signup') && (
        <AuthPage
          mode={currentView}
          lang={lang}
          onBack={(nextView) => setCurrentView(nextView || 'buyer')}
          onSuccess={(userInfo) => {
            setUser(userInfo);
            if (pendingAction) {
              const action = pendingAction;
              setPendingAction(null);
              action();
            } else {
              setCurrentView('user');
            }
          }}
        />
      )}

      {currentView === 'admin-login' && (
        <AdminLoginPage
          onBack={() => setCurrentView('buyer')}
          onSuccess={() => {
            setAdminLoggedIn(true);
            setCurrentView('admin');
          }}
        />
      )}

      {/* PAGE 1: POST PROPERTY (LANDING & WIZARD) */}
      {currentView === 'post-property' && (
        <PostPropertyPage
          lang={lang}
          onAddProperty={handleAddProperty}
          onSwitchToSearch={() => setCurrentView('buyer')}
        />
      )}

      {/* PAGE 2: PAY RENT & TUITION */}
      {currentView === 'pay-rent' && (
        <PayRentPage lang={lang} />
      )}

      {/* PAGE 3: RENTAL AGREEMENT & LEGAL */}
      {currentView === 'rental-agreement' && (
        <RentalAgreementPage lang={lang} />
      )}

      {/* PAGE 4: HOME LOANS & EMI CALCULATOR */}
      {currentView === 'home-loans' && (
        <HomeLoanPage lang={lang} />
      )}

      {/* PAGE 5: ADMIN PORTAL */}
      {currentView === 'admin' && adminLoggedIn && (
        <AdminPortal
          properties={propertiesList}
          onAddProperty={handleAddProperty}
          onUpdateStatus={handleUpdateStatus}
          onToggleFeatured={handleToggleFeatured}
          onDeleteProperty={handleDeleteProperty}
          leads={leadsList}
          onUpdateLeadStatus={handleUpdateLeadStatus}
          lang={lang}
        />
      )}

      {/* PAGE 6: USER DASHBOARD */}
      {currentView === 'user' && (
        <UserDashboard
          savedList={savedList}
          userLeads={leadsList}
          onOpenDetail={handleOpenDetail}
          onRemoveSaved={(id) => setSavedIds((prev) => prev.filter((i) => i !== id))}
          lang={lang}
        />
      )}

      {/* PAGE 7: BUYER SEARCH & LISTINGS (HOME PAGE) */}
      {currentView === 'buyer' && (
        <>
          {/* Hero Banner & Search Filter */}
          <HeroSearch
            lang={lang}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            budget={budget}
            setBudget={setBudget}
            facing={facing}
            setFacing={setFacing}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onResetFilters={handleResetFilters}
            onNavigate={handleNavigate}
          />

          {/* Main Content Area */}
          <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '32px 16px', flex: 1 }}>
            {/* Results Bar & View Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', lineHeight: 1.2 }}>
                  {isTa ? (
                    <>சரிபார்க்கப்பட்ட மனைகள் ({filteredProperties.length} முடிவுகள்)</>
                  ) : (
                    <>Verified Properties ({filteredProperties.length} Results)</>
                  )}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  {isTa ? 'அனைத்து மனைகளும் பட்டா மற்றும் DTCP சரிபார்க்கப்பட்டது.' : 'Direct listings from verified Tamil Nadu promoters & title owners.'}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', background: '#E2E8F0', padding: '3px', borderRadius: '8px' }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    style={{
                      background: viewMode === 'grid' ? '#0F172A' : 'transparent',
                      color: viewMode === 'grid' ? 'white' : '#475569',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Grid size={15} /> Grid
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    style={{
                      background: viewMode === 'map' ? '#0F172A' : 'transparent',
                      color: viewMode === 'map' ? 'white' : '#475569',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <MapPin size={15} color={viewMode === 'map' ? '#F59E0B' : '#475569'} /> Map View
                  </button>
                </div>

                <select
                  className="filter-select"
                  style={{ width: 'auto', padding: '8px 12px', fontSize: '0.82rem', height: '36px' }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">{isTa ? 'சிறப்பு வரிசை' : 'Featured First'}</option>
                  <option value="price-low">{isTa ? 'விலை: குறைந்ததிலிருந்து' : 'Price: Low to High'}</option>
                  <option value="price-high">{isTa ? 'விலை: அதிகத்திலிருந்து' : 'Price: High to Low'}</option>
                  <option value="area">{isTa ? 'பரப்பளவு: பெரியது' : 'Land Size: Largest'}</option>
                </select>
              </div>
            </div>

            {/* Map View Split Mode */}
            {viewMode === 'map' && (
              <div style={{ background: '#0F172A', color: 'white', borderRadius: '16px', padding: '20px', marginBottom: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'center' }}>
                <div>
                  <span style={{ background: '#0D9488', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800' }}>
                    SPATIAL MAP VIEW
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '8px' }}>
                    {isTa ? 'வரைபடத்தில் மனைகளின் இருப்பிடம்' : 'Geographic Map Distribution'}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px' }}>
                    Interactive GPS coordinates for Veppampattu Thiruvallur, OMR Chennai & Kanchipuram.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                    {filteredProperties.map((p) => (
                      <div 
                        key={p.id} 
                        onClick={() => setActiveModalProp(p)}
                        style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#CCFBF1' }}>📍 {p.location}</div>
                          <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>{p.title}</div>
                        </div>
                        <span style={{ color: '#F59E0B', fontWeight: '800', fontSize: '0.85rem' }}>{p.priceLabel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#1E293B', borderRadius: '12px', height: '260px', position: 'relative', overflow: 'hidden', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/mj_hero_plot.png" alt="map preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                  <div style={{ position: 'absolute', background: 'rgba(15,23,42,0.85)', padding: '16px 20px', borderRadius: '12px', textAlign: 'center', backdropFilter: 'blur(6px)' }}>
                    <MapPin size={32} color="#0D9488" style={{ margin: '0 auto 8px auto' }} />
                    <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Interactive Map Pins Layer</div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>GPS Pins Loaded for {filteredProperties.length} Properties</div>
                  </div>
                </div>
              </div>
            )}

            {/* Property Grid (Fluid Responsive CSS Class) */}
            {filteredProperties.length === 0 ? (
              <div style={{ background: 'white', borderRadius: '16px', padding: '60px 20px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <SlidersHorizontal size={48} color="#CBD5E1" style={{ margin: '0 auto 12px auto' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A' }}>
                  {isTa ? 'மனைகள் எதுவும் கிடைக்கவில்லை' : 'No Properties Matched Your Filters'}
                </h3>
                <button onClick={handleResetFilters} className="btn-primary" style={{ marginTop: '16px' }}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="properties-grid">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    lang={lang}
                    isAuthenticated={Boolean(user)}
                    onRequireAuth={() => requireAuth(() => setCurrentView('buyer'))}
                    isSaved={savedIds.includes(property.id)}
                    onToggleSave={handleToggleSave}
                    onOpenDetail={handleOpenDetail}
                  />
                ))}
              </div>
            )}
          </main>

          {/* District Exploration Section */}
          <DistrictGrid
            lang={lang}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
          />

          {/* Trust Guarantee Section */}
          <TrustSection lang={lang} />
        </>
      )}

      {/* Footer */}
      <Footer lang={lang} />

      {/* Mobile Sticky Bottom Action Dock */}
      <MobileDock lang={lang} />

      {/* Live AI Assistant Floating Widget */}
      <LiveChatWidget lang={lang} onNavigate={handleNavigate} />

      {/* Property Detail Modal */}
      {activeModalProp && (
        <PropertyDetailModal
          property={activeModalProp}
          lang={lang}
          onClose={() => setActiveModalProp(null)}
          onCreateLead={handleCreateLead}
        />
      )}

      {/* Saved Properties Modal */}
      {showSavedModal && (
        <SavedModal
          savedList={savedList}
          lang={lang}
          onClose={() => setShowSavedModal(false)}
          onOpenDetail={handleOpenDetail}
          onRemoveSaved={(id) => setSavedIds((prev) => prev.filter((i) => i !== id))}
        />
      )}
    </div>
  );
}
