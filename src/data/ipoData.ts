// قاعدة بيانات الاكتتابات العامة الحقيقية والمترابطة

export interface IPOData {
  companyNameAr: string;
  companyNameEn: string;
  symbol: string;
  sector: string;
  sectorEn: string;
  market: string;
  marketEn: string;
  currency: string;
  currencySymbol: string;
  offerPriceMin: number;
  offerPriceMax: number;
  sharesOfferedMin: number; // مليون سهم
  sharesOfferedMax: number;
  valuationMin: number; // مليار
  valuationMax: number;
  subscriptionType: 'retail' | 'institutional' | 'both';
  minSubscription: number;
  maxSubscription: number;
}

export interface IPOMarket {
  nameAr: string;
  nameEn: string;
  code: string;
  country: string;
  countryEn: string;
  currency: string;
  currencySymbol: string;
  regulator: string;
  regulatorEn: string;
  minRetailSubscription: number;
  maxRetailSubscription: number;
  institutionalPercent: [number, number];
  retailPercent: [number, number];
  lockupPeriodDays: number;
  settlementDays: number;
  typicalOversubscription: [number, number];
  sectors: Array<{
    nameAr: string;
    nameEn: string;
    avgPE: [number, number];
    avgValuation: [number, number];
  }>;
  underwriters: Array<{
    nameAr: string;
    nameEn: string;
  }>;
  recentIPOs: Array<{
    companyAr: string;
    companyEn: string;
    symbol: string;
    sector: string;
    offerPrice: number;
    firstDayClose: number;
    currentPrice: number;
  }>;
}

// أسواق الاكتتابات العربية والعالمية
export const IPO_MARKETS: Record<string, IPOMarket> = {
  'TADAWUL': {
    nameAr: 'السوق المالية السعودية (تداول)',
    nameEn: 'Saudi Stock Exchange (Tadawul)',
    code: 'TADAWUL',
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    regulator: 'هيئة السوق المالية',
    regulatorEn: 'Capital Market Authority (CMA)',
    minRetailSubscription: 10,
    maxRetailSubscription: 250000,
    institutionalPercent: [70, 90],
    retailPercent: [10, 30],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [5, 50],
    sectors: [
      { nameAr: 'الطاقة', nameEn: 'Energy', avgPE: [15, 25], avgValuation: [5, 100] },
      { nameAr: 'البنوك', nameEn: 'Banks', avgPE: [12, 18], avgValuation: [10, 50] },
      { nameAr: 'البتروكيماويات', nameEn: 'Petrochemicals', avgPE: [14, 22], avgValuation: [3, 30] },
      { nameAr: 'التجزئة', nameEn: 'Retail', avgPE: [18, 28], avgValuation: [1, 15] },
      { nameAr: 'الاتصالات', nameEn: 'Telecom', avgPE: [15, 22], avgValuation: [5, 40] },
      { nameAr: 'الأغذية', nameEn: 'Food & Beverages', avgPE: [16, 24], avgValuation: [0.5, 10] },
      { nameAr: 'العقارات', nameEn: 'Real Estate', avgPE: [12, 20], avgValuation: [2, 25] },
      { nameAr: 'التأمين', nameEn: 'Insurance', avgPE: [10, 18], avgValuation: [0.3, 5] },
      { nameAr: 'الرعاية الصحية', nameEn: 'Healthcare', avgPE: [20, 35], avgValuation: [1, 20] },
      { nameAr: 'التقنية', nameEn: 'Technology', avgPE: [25, 45], avgValuation: [0.5, 15] }
    ],
    underwriters: [
      { nameAr: 'الراجحي المالية', nameEn: 'Al Rajhi Capital' },
      { nameAr: 'الأهلي المالية', nameEn: 'SNB Capital' },
      { nameAr: 'السعودي الفرنسي كابيتال', nameEn: 'Saudi Fransi Capital' },
      { nameAr: 'الجزيرة كابيتال', nameEn: 'Aljazira Capital' },
      { nameAr: 'الرياض المالية', nameEn: 'Riyad Capital' },
      { nameAr: 'HSBC العربية السعودية', nameEn: 'HSBC Saudi Arabia' },
      { nameAr: 'جولدمان ساكس العربية السعودية', nameEn: 'Goldman Sachs Saudi Arabia' }
    ],
    recentIPOs: [
      { companyAr: 'أرامكو السعودية', companyEn: 'Saudi Aramco', symbol: '2222', sector: 'الطاقة', offerPrice: 32, firstDayClose: 35.2, currentPrice: 28.5 },
      { companyAr: 'علم', companyEn: 'Elm', symbol: '7203', sector: 'التقنية', offerPrice: 128, firstDayClose: 179.2, currentPrice: 145 },
      { companyAr: 'أكوا باور', companyEn: 'ACWA Power', symbol: '2082', sector: 'الطاقة', offerPrice: 56, firstDayClose: 84, currentPrice: 78 },
      { companyAr: 'الدواء', companyEn: 'Aldawaa', symbol: '4163', sector: 'الرعاية الصحية', offerPrice: 76, firstDayClose: 114, currentPrice: 95 },
      { companyAr: 'لومي', companyEn: 'Lumi', symbol: '4262', sector: 'التقنية', offerPrice: 45, firstDayClose: 67.5, currentPrice: 52 }
    ]
  },
  'EGX': {
    nameAr: 'البورصة المصرية',
    nameEn: 'Egyptian Exchange',
    code: 'EGX',
    country: 'مصر',
    countryEn: 'Egypt',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    regulator: 'الهيئة العامة للرقابة المالية',
    regulatorEn: 'Financial Regulatory Authority (FRA)',
    minRetailSubscription: 1000,
    maxRetailSubscription: 500000,
    institutionalPercent: [60, 80],
    retailPercent: [20, 40],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [3, 30],
    sectors: [
      { nameAr: 'البنوك', nameEn: 'Banks', avgPE: [5, 10], avgValuation: [5, 50] },
      { nameAr: 'العقارات', nameEn: 'Real Estate', avgPE: [8, 15], avgValuation: [2, 30] },
      { nameAr: 'الأغذية', nameEn: 'Food & Beverages', avgPE: [10, 18], avgValuation: [1, 15] },
      { nameAr: 'الأدوية', nameEn: 'Pharmaceuticals', avgPE: [12, 22], avgValuation: [0.5, 10] },
      { nameAr: 'الاتصالات', nameEn: 'Telecom', avgPE: [8, 14], avgValuation: [10, 100] },
      { nameAr: 'الصناعات', nameEn: 'Industrials', avgPE: [6, 12], avgValuation: [0.5, 20] }
    ],
    underwriters: [
      { nameAr: 'هيرميس', nameEn: 'EFG Hermes' },
      { nameAr: 'سي آي كابيتال', nameEn: 'CI Capital' },
      { nameAr: 'بلتون المالية', nameEn: 'Beltone Financial' },
      { nameAr: 'النعيم المالية', nameEn: 'Naeem Financial' },
      { nameAr: 'فاروس القابضة', nameEn: 'Pharos Holding' }
    ],
    recentIPOs: [
      { companyAr: 'إي فاينانس', companyEn: 'E-Finance', symbol: 'EFIH', sector: 'التقنية', offerPrice: 13.98, firstDayClose: 21, currentPrice: 18 },
      { companyAr: 'فوري', companyEn: 'Fawry', symbol: 'FWRY', sector: 'التقنية', offerPrice: 6.46, firstDayClose: 9.7, currentPrice: 5.2 },
      { companyAr: 'ماكرو جروب', companyEn: 'Macro Group', symbol: 'MCRO', sector: 'الرعاية الصحية', offerPrice: 5.74, firstDayClose: 8.6, currentPrice: 6.8 }
    ]
  },
  'ADX': {
    nameAr: 'سوق أبوظبي للأوراق المالية',
    nameEn: 'Abu Dhabi Securities Exchange',
    code: 'ADX',
    country: 'الإمارات',
    countryEn: 'UAE',
    currency: 'AED',
    currencySymbol: 'د.إ',
    regulator: 'هيئة الأوراق المالية والسلع',
    regulatorEn: 'Securities and Commodities Authority (SCA)',
    minRetailSubscription: 5000,
    maxRetailSubscription: 500000,
    institutionalPercent: [75, 90],
    retailPercent: [10, 25],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [10, 80],
    sectors: [
      { nameAr: 'الطاقة', nameEn: 'Energy', avgPE: [15, 25], avgValuation: [10, 200] },
      { nameAr: 'البنوك', nameEn: 'Banks', avgPE: [10, 16], avgValuation: [20, 100] },
      { nameAr: 'الاتصالات', nameEn: 'Telecom', avgPE: [15, 22], avgValuation: [10, 80] },
      { nameAr: 'الخدمات', nameEn: 'Services', avgPE: [18, 28], avgValuation: [5, 50] },
      { nameAr: 'التقنية', nameEn: 'Technology', avgPE: [25, 45], avgValuation: [2, 30] }
    ],
    underwriters: [
      { nameAr: 'بنك أبوظبي الأول', nameEn: 'First Abu Dhabi Bank' },
      { nameAr: 'بنك الإمارات دبي الوطني', nameEn: 'Emirates NBD' },
      { nameAr: 'المشرق كابيتال', nameEn: 'Mashreq Capital' },
      { nameAr: 'أبوظبي التجاري', nameEn: 'ADCB' }
    ],
    recentIPOs: [
      { companyAr: 'أدنوك للغاز', companyEn: 'ADNOC Gas', symbol: 'ADNOCGAS', sector: 'الطاقة', offerPrice: 2.37, firstDayClose: 2.95, currentPrice: 3.2 },
      { companyAr: 'أدنوك للحفر', companyEn: 'ADNOC Drilling', symbol: 'ADNOCDRILL', sector: 'الطاقة', offerPrice: 2.3, firstDayClose: 3.1, currentPrice: 4.5 },
      { companyAr: 'ديوا', companyEn: 'DEWA', symbol: 'DEWA', sector: 'الخدمات', offerPrice: 2.48, firstDayClose: 2.85, currentPrice: 2.6 },
      { companyAr: 'بريسايت', companyEn: 'Presight AI', symbol: 'PRESIGHT', sector: 'التقنية', offerPrice: 1.8, firstDayClose: 2.7, currentPrice: 3.1 }
    ]
  },
  'DFM': {
    nameAr: 'سوق دبي المالي',
    nameEn: 'Dubai Financial Market',
    code: 'DFM',
    country: 'الإمارات',
    countryEn: 'UAE',
    currency: 'AED',
    currencySymbol: 'د.إ',
    regulator: 'هيئة الأوراق المالية والسلع',
    regulatorEn: 'Securities and Commodities Authority (SCA)',
    minRetailSubscription: 5000,
    maxRetailSubscription: 500000,
    institutionalPercent: [70, 85],
    retailPercent: [15, 30],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [8, 60],
    sectors: [
      { nameAr: 'العقارات', nameEn: 'Real Estate', avgPE: [10, 18], avgValuation: [5, 50] },
      { nameAr: 'البنوك', nameEn: 'Banks', avgPE: [8, 14], avgValuation: [10, 80] },
      { nameAr: 'التجزئة', nameEn: 'Retail', avgPE: [15, 25], avgValuation: [2, 30] },
      { nameAr: 'النقل', nameEn: 'Transportation', avgPE: [12, 20], avgValuation: [5, 40] }
    ],
    underwriters: [
      { nameAr: 'الإمارات دبي الوطني كابيتال', nameEn: 'Emirates NBD Capital' },
      { nameAr: 'شعاع كابيتال', nameEn: 'Shuaa Capital' },
      { nameAr: 'بنك دبي الإسلامي', nameEn: 'Dubai Islamic Bank' }
    ],
    recentIPOs: [
      { companyAr: 'سالك', companyEn: 'Salik', symbol: 'SALIK', sector: 'النقل', offerPrice: 2, firstDayClose: 2.5, currentPrice: 3.8 },
      { companyAr: 'ديوا', companyEn: 'DEWA', symbol: 'DEWA', sector: 'الخدمات', offerPrice: 2.48, firstDayClose: 2.85, currentPrice: 2.6 },
      { companyAr: 'تيكوم', companyEn: 'TECOM', symbol: 'TECOM', sector: 'العقارات', offerPrice: 2.67, firstDayClose: 3.2, currentPrice: 4.1 }
    ]
  },
  'QSE': {
    nameAr: 'بورصة قطر',
    nameEn: 'Qatar Stock Exchange',
    code: 'QSE',
    country: 'قطر',
    countryEn: 'Qatar',
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    regulator: 'هيئة قطر للأسواق المالية',
    regulatorEn: 'Qatar Financial Markets Authority (QFMA)',
    minRetailSubscription: 10000,
    maxRetailSubscription: 1000000,
    institutionalPercent: [75, 90],
    retailPercent: [10, 25],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [5, 40],
    sectors: [
      { nameAr: 'الطاقة', nameEn: 'Energy', avgPE: [12, 20], avgValuation: [10, 100] },
      { nameAr: 'البنوك', nameEn: 'Banks', avgPE: [10, 16], avgValuation: [15, 80] },
      { nameAr: 'الصناعات', nameEn: 'Industrials', avgPE: [12, 20], avgValuation: [5, 40] }
    ],
    underwriters: [
      { nameAr: 'QNB كابيتال', nameEn: 'QNB Capital' },
      { nameAr: 'قطر للتأمين', nameEn: 'Qatar Insurance' },
      { nameAr: 'الدوحة للأوراق المالية', nameEn: 'Doha Securities' }
    ],
    recentIPOs: [
      { companyAr: 'بنك الدوحة', companyEn: 'Doha Bank', symbol: 'DHBK', sector: 'البنوك', offerPrice: 18.5, firstDayClose: 22, currentPrice: 19.5 }
    ]
  },
  'NASDAQ': {
    nameAr: 'ناسداك',
    nameEn: 'NASDAQ',
    code: 'NASDAQ',
    country: 'الولايات المتحدة',
    countryEn: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    regulator: 'هيئة الأوراق المالية والبورصات',
    regulatorEn: 'Securities and Exchange Commission (SEC)',
    minRetailSubscription: 100,
    maxRetailSubscription: 10000000,
    institutionalPercent: [80, 95],
    retailPercent: [5, 20],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [2, 20],
    sectors: [
      { nameAr: 'التقنية', nameEn: 'Technology', avgPE: [30, 80], avgValuation: [1, 500] },
      { nameAr: 'التقنية الحيوية', nameEn: 'Biotechnology', avgPE: [0, 100], avgValuation: [0.5, 50] },
      { nameAr: 'البرمجيات', nameEn: 'Software', avgPE: [25, 60], avgValuation: [0.5, 100] },
      { nameAr: 'التجارة الإلكترونية', nameEn: 'E-Commerce', avgPE: [20, 50], avgValuation: [1, 200] }
    ],
    underwriters: [
      { nameAr: 'جولدمان ساكس', nameEn: 'Goldman Sachs' },
      { nameAr: 'مورغان ستانلي', nameEn: 'Morgan Stanley' },
      { nameAr: 'جي بي مورغان', nameEn: 'JP Morgan' },
      { nameAr: 'بنك أوف أمريكا', nameEn: 'Bank of America' },
      { nameAr: 'سيتي جروب', nameEn: 'Citigroup' }
    ],
    recentIPOs: [
      { companyAr: 'آرم هولدينغز', companyEn: 'Arm Holdings', symbol: 'ARM', sector: 'التقنية', offerPrice: 51, firstDayClose: 63.59, currentPrice: 140 },
      { companyAr: 'إنستاكارت', companyEn: 'Instacart', symbol: 'CART', sector: 'التقنية', offerPrice: 30, firstDayClose: 33.7, currentPrice: 28 },
      { companyAr: 'كلافيو', companyEn: 'Klaviyo', symbol: 'KVYO', sector: 'البرمجيات', offerPrice: 30, firstDayClose: 32.76, currentPrice: 25 }
    ]
  },
  'NYSE': {
    nameAr: 'بورصة نيويورك',
    nameEn: 'New York Stock Exchange',
    code: 'NYSE',
    country: 'الولايات المتحدة',
    countryEn: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    regulator: 'هيئة الأوراق المالية والبورصات',
    regulatorEn: 'Securities and Exchange Commission (SEC)',
    minRetailSubscription: 100,
    maxRetailSubscription: 10000000,
    institutionalPercent: [80, 95],
    retailPercent: [5, 20],
    lockupPeriodDays: 180,
    settlementDays: 2,
    typicalOversubscription: [2, 15],
    sectors: [
      { nameAr: 'المالية', nameEn: 'Financials', avgPE: [10, 20], avgValuation: [5, 200] },
      { nameAr: 'الصناعات', nameEn: 'Industrials', avgPE: [15, 25], avgValuation: [2, 100] },
      { nameAr: 'الطاقة', nameEn: 'Energy', avgPE: [12, 22], avgValuation: [5, 150] },
      { nameAr: 'الرعاية الصحية', nameEn: 'Healthcare', avgPE: [18, 35], avgValuation: [1, 80] }
    ],
    underwriters: [
      { nameAr: 'جولدمان ساكس', nameEn: 'Goldman Sachs' },
      { nameAr: 'مورغان ستانلي', nameEn: 'Morgan Stanley' },
      { nameAr: 'جي بي مورغان', nameEn: 'JP Morgan' },
      { nameAr: 'باركليز', nameEn: 'Barclays' }
    ],
    recentIPOs: [
      { companyAr: 'بيركينستوك', companyEn: 'Birkenstock', symbol: 'BIRK', sector: 'التجزئة', offerPrice: 46, firstDayClose: 41, currentPrice: 52 },
      { companyAr: 'كيندريل', companyEn: 'Kyndryl', symbol: 'KD', sector: 'التقنية', offerPrice: 28, firstDayClose: 26.5, currentPrice: 24 }
    ]
  }
};

// حالات الاكتتاب
export const IPO_STATUSES = {
  ar: ['قادم', 'مفتوح للاكتتاب', 'مغلق - في انتظار التخصيص', 'تم التخصيص', 'تم الإدراج', 'ملغي', 'مؤجل'],
  en: ['Upcoming', 'Open for Subscription', 'Closed - Pending Allocation', 'Allocated', 'Listed', 'Cancelled', 'Postponed']
};

// نتائج أول يوم تداول
export const FIRST_DAY_RESULTS = {
  ar: ['ارتفاع قوي', 'ارتفاع معتدل', 'ارتفاع طفيف', 'مستقر', 'انخفاض طفيف', 'انخفاض معتدل'],
  en: ['Strong Gain', 'Moderate Gain', 'Slight Gain', 'Stable', 'Slight Decline', 'Moderate Decline']
};

// توليد بيانات اكتتاب واقعية ومترابطة
export interface IPOContext {
  // معلومات الشركة
  companyName: string;
  companyNameEn: string;
  symbol: string;
  sector: string;
  sectorEn: string;
  
  // معلومات السوق
  market: string;
  marketEn: string;
  marketCode: string;
  country: string;
  countryEn: string;
  currency: string;
  currencySymbol: string;
  regulator: string;
  regulatorEn: string;
  
  // معلومات الطرح
  offerPrice: number;
  priceRangeLow: number;
  priceRangeHigh: number;
  sharesOffered: number; // مليون
  sharesOfferedPercent: number;
  totalShares: number; // مليون
  
  // التقييم
  valuation: number; // مليار
  marketCapAtOffer: number; // مليار
  peRatio: number;
  pbRatio: number;
  
  // التوزيع
  institutionalPercent: number;
  retailPercent: number;
  
  // الاكتتاب
  minSubscription: number;
  maxSubscription: number;
  subscriptionMultiple: number;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  allocationDate: string;
  listingDate: string;
  refundDate: string;
  
  // نتائج الاكتتاب
  oversubscriptionRetail: number;
  oversubscriptionInstitutional: number;
  totalOversubscription: number;
  subscribersCount: number;
  amountRaised: number; // مليار
  
  // أداء أول يوم
  firstDayOpen: number;
  firstDayHigh: number;
  firstDayLow: number;
  firstDayClose: number;
  firstDayChange: number;
  firstDayChangePercent: number;
  firstDayVolume: number; // مليون
  firstDayResult: string;
  firstDayResultEn: string;
  
  // الأداء الحالي
  currentPrice: number;
  changeFromOffer: number;
  changeFromOfferPercent: number;
  
  // جهات الطرح
  leadUnderwriter: string;
  leadUnderwriterEn: string;
  financialAdvisor: string;
  financialAdvisorEn: string;
  legalAdvisor: string;
  
  // معلومات إضافية
  lockupPeriod: number; // أيام
  lockupEndDate: string;
  status: string;
  statusEn: string;
  ipoYear: number;
  ipoQuarter: string;
}

export function generateIPOContext(language: 'ar' | 'en' = 'ar', selectedCountry?: string): IPOContext {
  // اختيار السوق
  const marketCodes = Object.keys(IPO_MARKETS);
  let marketCode: string;
  
  if (selectedCountry && selectedCountry !== 'ALL') {
    const countryToMarket: Record<string, string> = {
      'SA': 'TADAWUL',
      'EG': 'EGX',
      'AE': Math.random() > 0.5 ? 'ADX' : 'DFM',
      'QA': 'QSE',
      'KW': 'TADAWUL', // fallback
      'US': Math.random() > 0.5 ? 'NASDAQ' : 'NYSE'
    };
    marketCode = countryToMarket[selectedCountry] || marketCodes[Math.floor(Math.random() * marketCodes.length)];
  } else {
    marketCode = marketCodes[Math.floor(Math.random() * marketCodes.length)];
  }
  
  const market = IPO_MARKETS[marketCode];
  
  // اختيار القطاع
  const sector = market.sectors[Math.floor(Math.random() * market.sectors.length)];
  
  // توليد اسم الشركة
  const companyPrefixes = {
    ar: ['مجموعة', 'شركة', '', 'مؤسسة', ''],
    en: ['Group', 'Company', '', 'Corporation', 'Holdings']
  };
  const companyNames = {
    ar: ['الفلاح', 'النور', 'المستقبل', 'التقدم', 'الابتكار', 'الريادة', 'الأمان', 'السلام', 'الوفاء', 'الإخلاص', 'النجاح', 'التميز', 'الإبداع', 'الجودة', 'الثقة'],
    en: ['Falcon', 'Summit', 'Horizon', 'Pinnacle', 'Vertex', 'Apex', 'Prime', 'Elite', 'Nova', 'Zenith', 'Atlas', 'Phoenix', 'Titan', 'Aurora', 'Nexus']
  };
  const companySuffixes = {
    ar: ['للتقنية', 'للخدمات', 'للتجارة', 'للاستثمار', 'القابضة', 'للتطوير', 'للحلول', 'للأعمال'],
    en: ['Tech', 'Services', 'Trading', 'Investment', 'Holdings', 'Development', 'Solutions', 'Industries']
  };
  
  const prefix = companyPrefixes.ar[Math.floor(Math.random() * companyPrefixes.ar.length)];
  const name = companyNames.ar[Math.floor(Math.random() * companyNames.ar.length)];
  const suffix = companySuffixes.ar[Math.floor(Math.random() * companySuffixes.ar.length)];
  const companyName = `${prefix} ${name} ${suffix}`.trim();
  
  const prefixEn = companyPrefixes.en[Math.floor(Math.random() * companyPrefixes.en.length)];
  const nameEn = companyNames.en[Math.floor(Math.random() * companyNames.en.length)];
  const suffixEn = companySuffixes.en[Math.floor(Math.random() * companySuffixes.en.length)];
  const companyNameEn = `${nameEn} ${suffixEn} ${prefixEn}`.trim();
  
  // رمز السهم
  const symbol = nameEn.substring(0, 4).toUpperCase();
  
  // التقييم والأسعار
  const valuation = sector.avgValuation[0] + Math.random() * (sector.avgValuation[1] - sector.avgValuation[0]);
  const peRatio = sector.avgPE[0] + Math.random() * (sector.avgPE[1] - sector.avgPE[0]);
  
  // نسبة الطرح (10-35%)
  const offerPercent = 10 + Math.random() * 25;
  const sharesOfferedPercent = Math.round(offerPercent * 10) / 10;
  
  // إجمالي الأسهم والأسهم المطروحة
  const totalShares = valuation * 1000 / (10 + Math.random() * 90); // مليون سهم
  const sharesOffered = totalShares * sharesOfferedPercent / 100;
  
  // سعر الطرح
  const offerPrice = (valuation * 1000 / totalShares);
  const priceVariation = offerPrice * 0.1;
  const priceRangeLow = Math.round((offerPrice - priceVariation) * 100) / 100;
  const priceRangeHigh = Math.round((offerPrice + priceVariation) * 100) / 100;
  const finalOfferPrice = Math.round(offerPrice * 100) / 100;
  
  // القيمة السوقية عند الطرح
  const marketCapAtOffer = valuation;
  
  // التوزيع
  const institutionalPercent = market.institutionalPercent[0] + Math.random() * (market.institutionalPercent[1] - market.institutionalPercent[0]);
  const retailPercent = 100 - institutionalPercent;
  
  // مبالغ الاكتتاب
  const minSubscription = market.minRetailSubscription;
  const maxSubscription = market.maxRetailSubscription;
  const subscriptionMultiple = Math.round(minSubscription / finalOfferPrice);
  
  // التواريخ
  const now = new Date();
  const year = now.getFullYear();
  const quarter = `Q${Math.ceil((now.getMonth() + 1) / 3)}`;
  
  const startDate = new Date(year, Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 20));
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 5 + Math.floor(Math.random() * 10));
  const allocationDate = new Date(endDate);
  allocationDate.setDate(allocationDate.getDate() + 3 + Math.floor(Math.random() * 5));
  const listingDate = new Date(allocationDate);
  listingDate.setDate(listingDate.getDate() + 2 + Math.floor(Math.random() * 5));
  const refundDate = new Date(allocationDate);
  refundDate.setDate(refundDate.getDate() + 1);
  const lockupEndDate = new Date(listingDate);
  lockupEndDate.setDate(lockupEndDate.getDate() + market.lockupPeriodDays);
  
  const formatDate = (d: Date) => d.toISOString().split('T')[0];
  
  // نتائج الاكتتاب
  const oversubRetail = market.typicalOversubscription[0] + Math.random() * (market.typicalOversubscription[1] - market.typicalOversubscription[0]);
  const oversubInst = (oversubRetail * 0.3) + Math.random() * (oversubRetail * 0.5);
  const totalOversub = (oversubRetail * retailPercent / 100) + (oversubInst * institutionalPercent / 100);
  const subscribersCount = Math.round(50000 + Math.random() * 450000);
  const amountRaised = sharesOffered * finalOfferPrice / 1000; // مليار
  
  // أداء أول يوم
  const firstDayChangePercent = -10 + Math.random() * 60; // من -10% إلى +50%
  const firstDayOpen = finalOfferPrice * (1 + (firstDayChangePercent * 0.8) / 100);
  const firstDayClose = finalOfferPrice * (1 + firstDayChangePercent / 100);
  const firstDayHigh = Math.max(firstDayOpen, firstDayClose) * (1 + Math.random() * 0.05);
  const firstDayLow = Math.min(firstDayOpen, firstDayClose) * (1 - Math.random() * 0.03);
  const firstDayChange = firstDayClose - finalOfferPrice;
  const firstDayVolume = sharesOffered * (0.3 + Math.random() * 0.5);
  
  let firstDayResultIndex: number;
  if (firstDayChangePercent > 20) firstDayResultIndex = 0;
  else if (firstDayChangePercent > 10) firstDayResultIndex = 1;
  else if (firstDayChangePercent > 2) firstDayResultIndex = 2;
  else if (firstDayChangePercent > -2) firstDayResultIndex = 3;
  else if (firstDayChangePercent > -10) firstDayResultIndex = 4;
  else firstDayResultIndex = 5;
  
  // الأداء الحالي
  const currentChangePercent = firstDayChangePercent + (-20 + Math.random() * 40);
  const currentPrice = finalOfferPrice * (1 + currentChangePercent / 100);
  const changeFromOffer = currentPrice - finalOfferPrice;
  const changeFromOfferPercent = (changeFromOffer / finalOfferPrice) * 100;
  
  // جهات الطرح
  const underwriter = market.underwriters[Math.floor(Math.random() * market.underwriters.length)];
  const advisor = market.underwriters[Math.floor(Math.random() * market.underwriters.length)];
  
  // الحالة
  const statusIndex = Math.floor(Math.random() * IPO_STATUSES.ar.length);
  
  return {
    companyName,
    companyNameEn,
    symbol,
    sector: sector.nameAr,
    sectorEn: sector.nameEn,
    
    market: market.nameAr,
    marketEn: market.nameEn,
    marketCode,
    country: market.country,
    countryEn: market.countryEn,
    currency: market.currency,
    currencySymbol: market.currencySymbol,
    regulator: market.regulator,
    regulatorEn: market.regulatorEn,
    
    offerPrice: Math.round(finalOfferPrice * 100) / 100,
    priceRangeLow,
    priceRangeHigh,
    sharesOffered: Math.round(sharesOffered * 100) / 100,
    sharesOfferedPercent,
    totalShares: Math.round(totalShares * 100) / 100,
    
    valuation: Math.round(valuation * 100) / 100,
    marketCapAtOffer: Math.round(marketCapAtOffer * 100) / 100,
    peRatio: Math.round(peRatio * 10) / 10,
    pbRatio: Math.round((1 + Math.random() * 4) * 10) / 10,
    
    institutionalPercent: Math.round(institutionalPercent),
    retailPercent: Math.round(retailPercent),
    
    minSubscription,
    maxSubscription,
    subscriptionMultiple,
    subscriptionStartDate: formatDate(startDate),
    subscriptionEndDate: formatDate(endDate),
    allocationDate: formatDate(allocationDate),
    listingDate: formatDate(listingDate),
    refundDate: formatDate(refundDate),
    
    oversubscriptionRetail: Math.round(oversubRetail * 10) / 10,
    oversubscriptionInstitutional: Math.round(oversubInst * 10) / 10,
    totalOversubscription: Math.round(totalOversub * 10) / 10,
    subscribersCount,
    amountRaised: Math.round(amountRaised * 100) / 100,
    
    firstDayOpen: Math.round(firstDayOpen * 100) / 100,
    firstDayHigh: Math.round(firstDayHigh * 100) / 100,
    firstDayLow: Math.round(firstDayLow * 100) / 100,
    firstDayClose: Math.round(firstDayClose * 100) / 100,
    firstDayChange: Math.round(firstDayChange * 100) / 100,
    firstDayChangePercent: Math.round(firstDayChangePercent * 100) / 100,
    firstDayVolume: Math.round(firstDayVolume * 100) / 100,
    firstDayResult: FIRST_DAY_RESULTS.ar[firstDayResultIndex],
    firstDayResultEn: FIRST_DAY_RESULTS.en[firstDayResultIndex],
    
    currentPrice: Math.round(currentPrice * 100) / 100,
    changeFromOffer: Math.round(changeFromOffer * 100) / 100,
    changeFromOfferPercent: Math.round(changeFromOfferPercent * 100) / 100,
    
    leadUnderwriter: underwriter.nameAr,
    leadUnderwriterEn: underwriter.nameEn,
    financialAdvisor: advisor.nameAr,
    financialAdvisorEn: advisor.nameEn,
    legalAdvisor: language === 'ar' ? 'مكتب المحامي القانوني' : 'Legal Counsel LLP',
    
    lockupPeriod: market.lockupPeriodDays,
    lockupEndDate: formatDate(lockupEndDate),
    status: IPO_STATUSES.ar[statusIndex],
    statusEn: IPO_STATUSES.en[statusIndex],
    ipoYear: year,
    ipoQuarter: quarter
  };
}
