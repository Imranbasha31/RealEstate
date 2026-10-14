export const PROPERTY_TYPES = [
  { id: 'all', label: 'All Properties', labelTa: 'அனைத்து மனைகள்' },
  { id: 'plot', label: 'Plots / Land', labelTa: 'வீட்டு மனைகள்' },
  { id: 'villa', label: 'Houses & Villas', labelTa: 'வீடுகள் & வில்லாக்கள்' },
  { id: 'farmland', label: 'Agricultural & Farmland', labelTa: 'விவசாய நிலம்' },
  { id: 'commercial', label: 'Commercial Space', labelTa: 'வணிக இடம்' }
];

export const DISTRICTS = [
  { id: 'chennai', name: 'Chennai', count: 215, img: '/ms_hero_plot.png', trend: '₹3,200 - ₹8,500/sq.ft' },
  { id: 'thiruvallur', name: 'Thiruvallur', count: 180, img: '/ms_villa_house.png', trend: '₹1,200 - ₹2,800/sq.ft' },
  { id: 'kanchipuram', name: 'Kanchipuram', count: 145, img: '/ms_farmland.png', trend: '₹1,100 - ₹2,600/sq.ft' },
  { id: 'chengalpattu', name: 'Chengalpattu', count: 160, img: '/ms_hero_plot.png', trend: '₹1,500 - ₹3,600/sq.ft' },
  { id: 'coimbatore', name: 'Coimbatore', count: 142, img: '/ms_villa_house.png', trend: '₹1,800 - ₹3,500/sq.ft' },
  { id: 'madurai', name: 'Madurai', count: 88, img: '/ms_farmland.png', trend: '₹1,200 - ₹2,400/sq.ft' }
];

export const PROPERTIES = [
  {
    id: 'prop-1',
    title: 'MS Layout — CMDA & RERA Approved Plot in Thiruvallur',
    titleTa: 'எம்.எஸ் லேஅவுட் - திருவள்ளூர் CMDA அங்கீகரிக்கப்பட்ட மனை',
    district: 'thiruvallur',
    districtName: 'Thiruvallur',
    location: 'Veppampattu, Thiruvallur District',
    locationTa: 'வெப்பம்பட்டு, திருவள்ளூர் மாவட்டம்',
    category: 'plot',
    price: 2800000, // ₹28 Lakhs
    priceLabel: '₹28.0 Lakhs',
    ratePerSqFt: 1400,
    areaSqFt: 2000,
    areaCents: 4.59,
    areaDisplay: '2,000 Sq.Ft (4.59 Cents)',
    facing: 'East Facing',
    roadWidth: '30 Ft Tar Road',
    approvalStatus: 'CMDA & RERA Approved',
    approvalNo: 'CMDA No. 84/2024',
    reraRegistered: true,
    reraNo: 'TN/02/Layout/0312/2024',
    featured: true,
    status: 'Available',
    verificationStatus: 'Professionally reviewed',
    lastConfirmed: '08 Sep 2026',
    image: '/ms_hero_plot.png',
    gallery: [
      '/ms_hero_plot.png',
      '/ms_villa_house.png',
      '/ms_farmland.png'
    ],
    description: 'CMDA & RERA approved residential plot near Veppampattu Railway Station, Thiruvallur corridor. 30ft blacktop tar road, streetlights, sweet drinking water table, and seller-provided Patta transfer information subject to independent review.',
    descriptionTa: 'வெப்பம்பட்டு ரயில் நிலையம் அருகில் CMDA அங்கீகரிக்கப்பட்ட வீட்டு மனை. உடனடி பட்டா மாற்றம் மற்றும் தார் சாலை வசதி.',
    legalVerification: {
      pattaChecked: true,
      ecClean: true,
      ecYears: 30,
      layoutCopyVerified: true,
      fmbVerified: true,
      legalAdvocateOpinion: 'Verified by High Court Legal Advocate Team (Imran Basha Legal Clearance)'
    },
    amenities: [
      '30 Ft Broad Tar Road',
      'Underground Drainage',
      'Streetlights & Gated Compound',
      'Sweet Groundwater Table',
      'Near Railway Station'
    ],
    landmarkDistances: [
      { name: 'Veppampattu Railway Station', dist: '1.2 km' },
      { name: 'Poonamallee High Road', dist: '4.5 km' },
      { name: 'Chennai Central Station', dist: '32 km' }
    ]
  },
  {
    id: 'prop-2',
    title: 'MS Prime City — Luxury 3BHK Villa in Chennai OMR',
    titleTa: 'எம்.எஸ் ப்ரைம் சிட்டி - சென்னை OMR 3BHK வில்லா',
    district: 'chennai',
    districtName: 'Chennai',
    location: 'Perungudi / OMR, Chennai',
    locationTa: 'பெருங்குடி / OMR, சென்னை',
    category: 'villa',
    price: 9200000, // ₹92 Lakhs
    priceLabel: '₹92.0 Lakhs',
    ratePerSqFt: 4181,
    areaSqFt: 2200,
    areaCents: 3.5,
    bedrooms: 3,
    bathrooms: 3,
    areaDisplay: '2,200 Sq.Ft Built-up (3.5 Cents Land)',
    facing: 'North-East Facing',
    roadWidth: '33 Ft Tar Road',
    approvalStatus: 'CMDA & RERA Approved',
    approvalNo: 'CMDA Bldg Plan 112/2023',
    reraRegistered: true,
    reraNo: 'TN/01/Building/0241/2023',
    featured: true,
    status: 'Available',
    verificationStatus: 'Professionally reviewed',
    lastConfirmed: '07 Sep 2026',
    image: '/ms_villa_house.png',
    gallery: [
      '/ms_villa_house.png',
      '/ms_hero_plot.png'
    ],
    description: 'Contemporary 3BHK independent villa along Old Mahabalipuram Road (OMR) IT Expressway. Teak wood fittings, modular kitchen, Metro water connection, CCTV surveillance, and covered car parking.',
    descriptionTa: 'சென்னை OMR சாலையில் அமைந்த புதிய 3BHK சுதந்திரமான வில்லா. தேக்கு மர கதவுகள் மற்றும் மெட்ரோ குடிநீர் வசதி.',
    legalVerification: {
      pattaChecked: true,
      ecClean: true,
      ecYears: 30,
      layoutCopyVerified: true,
      fmbVerified: true,
      legalAdvocateOpinion: 'Senior Advocate Title Verification Report'
    },
    amenities: [
      'Modular Kitchen',
      'Metro Water + Borewell',
      'Covered Car Parking',
      'CCTV Camera Security'
    ],
    landmarkDistances: [
      { name: 'Taramani RMZ Millenia IT Park', dist: '2.5 km' },
      { name: 'Apollo Speciality Hospital', dist: '3.0 km' }
    ]
  },
  {
    id: 'prop-3',
    title: 'MS Agri Paradise — Coconut Farmland near Kanchipuram',
    titleTa: 'எம்.எஸ் அக்ரி பாரடைஸ் - காஞ்சிபுரம் தென்னை நிலம்',
    district: 'kanchipuram',
    districtName: 'Kanchipuram',
    location: 'Uthiramerur, Kanchipuram District',
    locationTa: 'உத்திரமேரூர், காஞ்சிபுரம் மாவட்டம்',
    category: 'farmland',
    price: 3500000, // ₹35 Lakhs
    priceLabel: '₹35.0 Lakhs',
    ratePerSqFt: 160,
    areaSqFt: 21780, // 50 Cents
    areaCents: 50.0,
    areaDisplay: '50 Cents (0.50 Acre / 21,780 Sq.Ft)',
    facing: 'North Facing',
    roadWidth: '20 Ft Panchayat Tar Road',
    approvalStatus: 'Clear Patta Agriculture Land',
    approvalNo: 'Patta No. 2210',
    reraRegistered: false,
    featured: true,
    status: 'Available',
    verificationStatus: 'Documents collected',
    lastConfirmed: '06 Sep 2026',
    image: '/ms_farmland.png',
    gallery: [
      '/ms_farmland.png',
      '/ms_hero_plot.png'
    ],
    description: 'Fertile 50 cents agricultural coconut grove in Uthiramerur, Kanchipuram district. 40 yielding coconut trees, free agri EB connection, sweet groundwater, clear single-owner Patta verified by Imran Basha & team.',
    descriptionTa: 'காஞ்சிபுரம் மாவட்டத்தில் 50 சென்ட் விவசாய தென்னை தோப்பு நிலம். 40 காய்க்கும் மரங்கள் மற்றும் இலவச மின்சாரம்.',
    legalVerification: {
      pattaChecked: true,
      ecClean: true,
      ecYears: 30,
      layoutCopyVerified: true,
      fmbVerified: true,
      legalAdvocateOpinion: 'Single Owner Clear Patta Document'
    },
    amenities: [
      '40 Yielding Coconut Trees',
      'Free Agri EB Power Connection',
      'Fenced Boundary Gate'
    ],
    landmarkDistances: [
      { name: 'Kanchipuram Town', dist: '18 km' },
      { name: 'GST Highway Chengalpattu', dist: '22 km' }
    ]
  },
  {
    id: 'prop-4',
    title: 'MS Green Valley — DTCP Approved Plot in Coimbatore',
    titleTa: 'எம்.எஸ் கிரீன் வேலி - கோயம்புத்தூர் DTCP மனை',
    district: 'coimbatore',
    districtName: 'Coimbatore',
    location: 'Vadavalli, Coimbatore',
    locationTa: 'வடவள்ளி, கோயம்புத்தூர்',
    category: 'plot',
    price: 3600000,
    priceLabel: '₹36.0 Lakhs',
    ratePerSqFt: 1800,
    areaSqFt: 2000,
    areaCents: 4.59,
    areaDisplay: '2,000 Sq.Ft (4.59 Cents)',
    facing: 'East Facing',
    roadWidth: '30 Ft Tar Road',
    approvalStatus: 'DTCP Approved',
    approvalNo: 'DTCP No. 124/2024',
    reraRegistered: true,
    reraNo: 'TN/11/Layout/0284/2024',
    featured: false,
    status: 'Available',
    verificationStatus: 'Owner confirmed',
    lastConfirmed: '05 Sep 2026',
    image: '/ms_hero_plot.png',
    gallery: ['/ms_hero_plot.png'],
    description: 'DTCP approved villa plot in Vadavalli, Coimbatore. Ready for immediate construction.',
    descriptionTa: 'கோயம்புத்தூர் வடவள்ளியில் DTCP அங்கீகரிக்கப்பட்ட வீட்டு மனை.',
    legalVerification: {
      pattaChecked: true,
      ecClean: true,
      ecYears: 30,
      layoutCopyVerified: true,
      fmbVerified: true,
      legalAdvocateOpinion: 'Clear Title Verified'
    },
    amenities: ['30 Ft Tar Road', 'Gated Community', 'Streetlights'],
    landmarkDistances: [
      { name: 'Bharathiar University', dist: '3.5 km' }
    ]
  }
];
