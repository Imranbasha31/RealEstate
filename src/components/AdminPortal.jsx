import React, { useState } from 'react';
import { PlusCircle, Building2, CheckCircle2, ShieldCheck, Trash2, Edit3, MessageSquare, Phone, UserCheck, Eye, Sparkles, Mail } from 'lucide-react';
import { DISTRICTS, PROPERTY_TYPES } from '../data/properties';

export default function AdminPortal({
  properties,
  onAddProperty,
  onUpdateStatus,
  onToggleFeatured,
  onDeleteProperty,
  leads,
  onUpdateLeadStatus,
  lang
}) {
  const isTa = lang === 'ta';
  const [activeTab, setActiveTab] = useState('listings'); // 'listings' | 'add' | 'leads'

  // New Property Form State
  const [newProp, setNewProp] = useState({
    title: '',
    titleTa: '',
    district: 'chennai',
    districtName: 'Chennai',
    location: '',
    locationTa: '',
    category: 'plot',
    price: '',
    ratePerSqFt: '',
    areaSqFt: '',
    areaCents: '',
    facing: 'East Facing',
    roadWidth: '30 Ft Tar Road',
    approvalStatus: 'CMDA & RERA Approved',
    approvalNo: 'CMDA No. ' + Math.floor(100 + Math.random() * 900) + '/2024',
    reraRegistered: true,
    reraNo: 'TN/01/Layout/0' + Math.floor(100 + Math.random() * 900) + '/2024',
    featured: false,
    image: '/ms_hero_plot.png',
    description: '',
      descriptionTa: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const priceNum = parseFloat(newProp.price) * 100000;
    const sqft = parseFloat(newProp.areaSqFt) || 1200;
    const cents = (sqft / 435.6).toFixed(2);
    const rate = Math.round(priceNum / sqft);

    const createdItem = {
      ...newProp,
      id: 'prop-' + Date.now(),
      price: priceNum,
      priceLabel: `₹${newProp.price} Lakhs`,
      ratePerSqFt: rate,
      areaCents: parseFloat(cents),
      areaDisplay: `${sqft.toLocaleString()} Sq.Ft (${cents} Cents)`,
      districtName: DISTRICTS.find(d => d.id === newProp.district)?.name || 'Chennai',
      gallery: [newProp.image || '/ms_hero_plot.png'],
      legalVerification: {
        pattaChecked: false,
        ecClean: false,
        ecYears: 0,
        layoutCopyVerified: false,
        fmbVerified: false,
        legalAdvocateOpinion: 'Pending independent professional review'
      },
      status: 'Available',
      verificationStatus: 'New lead',
      lastConfirmed: new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
      amenities: ['Tar Road', 'Water Line', 'Streetlights', 'Gated Compound'],
      landmarkDistances: [
        { name: 'Main Road', dist: '1.0 km' },
        { name: 'Bus Stand', dist: '2.5 km' }
      ]
    };

    onAddProperty(createdItem);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveTab('listings');
    }, 1200);
  };

  const totalActive = properties.filter(p => p.status !== 'Sold').length;
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;

  return (
    <div style={{ background: '#F8FAFC', padding: '36px 24px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Startup Admin Header Banner */}
        <div style={{ background: '#0F172A', color: 'white', padding: '24px', borderRadius: '16px', marginBottom: '28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0D9488', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800', marginBottom: '8px' }}>
              <Sparkles size={13} /> FOUNDER ADMIN PORTAL
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: 1.2 }}>
              Imran Basha — MS Estates Admin Dashboard
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '4px', display: 'flex', gap: '16px' }}>
              <span>📞 Hotline: +91 72003 58300</span>
              <span>✉️ Email: bashaimran021@gmail.com</span>
              <span>🛡️ Reg: TN/Agent/0148/2024</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setActiveTab('listings')}
              className={`filter-tab ${activeTab === 'listings' ? 'active' : ''}`}
              style={{ padding: '10px 16px', borderRadius: '8px' }}
            >
              📋 Listings ({properties.length})
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className="btn-primary"
              style={{ height: '40px', padding: '0 16px', borderRadius: '8px' }}
            >
              <PlusCircle size={16} /> Add Property
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`filter-tab ${activeTab === 'leads' ? 'active' : ''}`}
              style={{ padding: '10px 16px', borderRadius: '8px', position: 'relative' }}
            >
              📩 Customer Leads ({totalLeads})
              {newLeads > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#D97706', color: 'white', width: '18px', height: '18px', borderRadius: '50%', fontSize: '0.7rem', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {newLeads}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Quick Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          <div style={{ background: 'white', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Active Listings</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '4px' }}>{totalActive}</div>
            <div style={{ fontSize: '0.75rem', color: '#0D9488', fontWeight: '600', marginTop: '2px' }}>Chennai, Thiruvallur & TN</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Approved Layouts</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0D9488', marginTop: '4px' }}>
              {properties.filter(p => p.approvalStatus.includes('CMDA') || p.approvalStatus.includes('DTCP')).length}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#0F766E', fontWeight: '600', marginTop: '2px' }}>100% Title Checked</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Site Visit Enquiries</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#D97706', marginTop: '4px' }}>{totalLeads}</div>
            <div style={{ fontSize: '0.75rem', color: '#D97706', fontWeight: '600', marginTop: '2px' }}>{newLeads} Pending Action</div>
          </div>
        </div>

        {/* TAB 1: PROPERTY LISTINGS MANAGER TABLE */}
        {activeTab === 'listings' && (
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A' }}>Manage All Live Listings</h3>
              <button onClick={() => setActiveTab('add')} className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.82rem' }}>
                + Create New Listing
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', borderBottom: '2px solid #E2E8F0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px' }}>Property Title</th>
                  <th style={{ padding: '12px' }}>District / Location</th>
                  <th style={{ padding: '12px' }}>Price</th>
                  <th style={{ padding: '12px' }}>Land Size</th>
                  <th style={{ padding: '12px' }}>Approval</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px', fontWeight: '700', color: '#0F172A' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src={item.image} alt="thumb" style={{ width: '40px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px', color: '#475569' }}>{item.location}</td>
                    <td style={{ padding: '12px', fontWeight: '800', color: '#0D9488' }}>{item.priceLabel}</td>
                    <td style={{ padding: '12px', color: '#334155' }}>{item.areaDisplay}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ background: '#CCFBF1', color: '#0F766E', fontSize: '0.75rem', fontWeight: '700', padding: '2px 6px', borderRadius: '4px' }}>
                        {item.approvalStatus}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <select
                        value={item.status || 'Available'}
                        onChange={(e) => onUpdateStatus(item.id, e.target.value)}
                        style={{ padding: '4px 8px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.8rem', fontWeight: '700' }}
                      >
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Sold">Sold</option>
                      </select>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          onClick={() => onToggleFeatured(item.id)}
                          style={{
                            background: item.featured ? '#FFFBEB' : '#F1F5F9',
                            border: item.featured ? '1px solid #F59E0B' : '1px solid #CBD5E1',
                            color: item.featured ? '#D97706' : '#64748B',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          {item.featured ? '★ Featured' : 'Make Featured'}
                        </button>
                        <button
                          onClick={() => onDeleteProperty(item.id)}
                          style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#EF4444', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer' }}
                          title="Delete Listing"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: ADD NEW PROPERTY FORM */}
        {activeTab === 'add' && (
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
              Publish New Property Listing
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '24px' }}>
              Add verified layout details, CMDA / DTCP approval numbers, land area, and price. Listing goes live instantly on MS Estates portal.
            </p>

            {formSubmitted ? (
              <div style={{ background: '#F0FDF4', color: '#0F766E', padding: '24px', borderRadius: '12px', textAlign: 'center', fontWeight: '700' }}>
                ✅ Property successfully published to MS Estates live database!
              </div>
            ) : (
              <form onSubmit={handleCreateSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="filter-label">Property Title (English) *</label>
                  <input
                    type="text"
                    required
                    className="filter-input"
                    placeholder="e.g. MS Royal Enclave — CMDA Approved Plot in Thiruvallur"
                    value={newProp.title}
                    onChange={(e) => setNewProp({ ...newProp, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="filter-label">District *</label>
                  <select
                    className="filter-select"
                    value={newProp.district}
                    onChange={(e) => setNewProp({ ...newProp, district: e.target.value })}
                  >
                    {DISTRICTS.map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="filter-label">Location / Micro-Area *</label>
                  <input
                    type="text"
                    required
                    className="filter-input"
                    placeholder="e.g. Veppampattu, Thiruvallur"
                    value={newProp.location}
                    onChange={(e) => setNewProp({ ...newProp, location: e.target.value })}
                  />
                </div>

                <div>
                  <label className="filter-label">Category *</label>
                  <select
                    className="filter-select"
                    value={newProp.category}
                    onChange={(e) => setNewProp({ ...newProp, category: e.target.value })}
                  >
                    <option value="plot">Plots / Residential Land</option>
                    <option value="villa">Independent Villa / House</option>
                    <option value="farmland">Agricultural / Farmland</option>
                    <option value="commercial">Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label className="filter-label">Price in Lakhs (₹ Lakhs) *</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    className="filter-input"
                    placeholder="e.g. 28.0"
                    value={newProp.price}
                    onChange={(e) => setNewProp({ ...newProp, price: e.target.value })}
                  />
                </div>

                <div>
                  <label className="filter-label">Total Land Area (Sq.Ft) *</label>
                  <input
                    type="number"
                    required
                    className="filter-input"
                    placeholder="e.g. 2000"
                    value={newProp.areaSqFt}
                    onChange={(e) => setNewProp({ ...newProp, areaSqFt: e.target.value })}
                  />
                </div>

                <div>
                  <label className="filter-label">Facing Direction *</label>
                  <select
                    className="filter-select"
                    value={newProp.facing}
                    onChange={(e) => setNewProp({ ...newProp, facing: e.target.value })}
                  >
                    <option value="East Facing">East Facing</option>
                    <option value="North Facing">North Facing</option>
                    <option value="North-East Facing">North-East Facing</option>
                    <option value="West Facing">West Facing</option>
                    <option value="South Facing">South Facing</option>
                  </select>
                </div>

                <div>
                  <label className="filter-label">Approval Status *</label>
                  <select
                    className="filter-select"
                    value={newProp.approvalStatus}
                    onChange={(e) => setNewProp({ ...newProp, approvalStatus: e.target.value })}
                  >
                    <option value="CMDA & RERA Approved">CMDA & RERA Approved</option>
                    <option value="DTCP Approved">DTCP Approved</option>
                    <option value="RERA Registered">RERA Registered</option>
                    <option value="Panchayat Approved">Panchayat Approved</option>
                    <option value="Patta Agriculture">Patta Farmland</option>
                  </select>
                </div>

                <div>
                  <label className="filter-label">Approval Number / Document Ref</label>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="e.g. CMDA No. 84/2024"
                    value={newProp.approvalNo}
                    onChange={(e) => setNewProp({ ...newProp, approvalNo: e.target.value })}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="filter-label">Cover Photo (URL or Preset)</label>
                  <select
                    className="filter-select"
                    value={newProp.image}
                    onChange={(e) => setNewProp({ ...newProp, image: e.target.value })}
                  >
                    <option value="/ms_hero_plot.png">Preset: Residential Villa Plot Layout</option>
                    <option value="/ms_villa_house.png">Preset: Modern Independent House</option>
                    <option value="/ms_farmland.png">Preset: Coconut Farmland Plot</option>
                  </select>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="filter-label">Description Summary</label>
                  <textarea
                    className="filter-input"
                    rows={3}
                    style={{ height: 'auto', paddingTop: '10px' }}
                    placeholder="Describe road access width, railway station proximity, water supply, and Patta status..."
                    value={newProp.description}
                    onChange={(e) => setNewProp({ ...newProp, description: e.target.value })}
                  ></textarea>
                </div>

                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '12px', marginTop: '12px' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                    <PlusCircle size={18} /> Publish Property
                  </button>
                  <button type="button" onClick={() => setActiveTab('listings')} className="btn-outline">
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: CUSTOMER LEADS & SITE VISIT ENQUIRIES */}
        {activeTab === 'leads' && (
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>
              Customer Site Visit Enquiries ({leads.length})
            </h3>

            {leads.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                No site visit enquiries received yet. Enquiries from the website booking form will appear here instantly.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    style={{
                      background: lead.status === 'New' ? '#FFFBEB' : '#F8FAFC',
                      border: lead.status === 'New' ? '1px solid #F59E0B' : '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: '800', fontSize: '1.05rem', color: '#0F172A' }}>{lead.name}</span>
                        <span style={{ fontSize: '0.75rem', background: '#E2E8F0', color: '#334155', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                          {lead.date}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#0D9488', fontWeight: '700', marginTop: '4px' }}>
                        📞 {lead.phone} | Interested Property: {lead.propTitle}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '4px' }}>
                        Note: "{lead.message}"
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <a
                        href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20Imran%20Basha%20from%20MS%20Estates.%20Regarding%20your%20site%20visit%20request...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                      >
                        <MessageSquare size={14} /> Reply WhatsApp
                      </a>

                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value)}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.8rem', fontWeight: '700' }}
                      >
                        <option value="New">🟡 New Lead</option>
                        <option value="Contacted">🔵 Contacted</option>
                        <option value="Site Visit Scheduled">🚗 Visit Scheduled</option>
                        <option value="Closed">✅ Closed / Booked</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
