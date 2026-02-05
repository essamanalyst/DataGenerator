// قاعدة بيانات الأسهم الحقيقية مع أسعار واقعية ومترابطة

export interface RealStock {
  symbol: string;
  nameAr: string;
  nameEn: string;
  sector: string;
  sectorEn: string;
  market: string;
  marketEn: string;
  currency: string;
  currencySymbol: string;
  currentPrice: number;
  yearHigh: number;
  yearLow: number;
  avgVolume: number;
  marketCap: number; // بالمليار
  peRatio: number;
  pbRatio: number;
  dividendYield: number;
  eps: number;
  beta: number;
  volatility: number; // التقلب اليومي %
  sharesOutstanding: number; // بالمليون
  freeFloat: number; // %
}

// أسهم السوق السعودي (تداول)
export const SAUDI_STOCKS: RealStock[] = [
  {
    symbol: '2222',
    nameAr: 'أرامكو السعودية',
    nameEn: 'Saudi Aramco',
    sector: 'الطاقة',
    sectorEn: 'Energy',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 28.50,
    yearHigh: 35.20,
    yearLow: 26.80,
    avgVolume: 45000000,
    marketCap: 6840,
    peRatio: 14.2,
    pbRatio: 2.8,
    dividendYield: 6.5,
    eps: 2.01,
    beta: 0.85,
    volatility: 1.2,
    sharesOutstanding: 240000,
    freeFloat: 1.5
  },
  {
    symbol: '1120',
    nameAr: 'مصرف الراجحي',
    nameEn: 'Al Rajhi Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 96.80,
    yearHigh: 115.00,
    yearLow: 78.50,
    avgVolume: 8500000,
    marketCap: 387,
    peRatio: 16.5,
    pbRatio: 3.2,
    dividendYield: 2.8,
    eps: 5.87,
    beta: 1.15,
    volatility: 1.8,
    sharesOutstanding: 4000,
    freeFloat: 45
  },
  {
    symbol: '2010',
    nameAr: 'سابك',
    nameEn: 'SABIC',
    sector: 'المواد الأساسية',
    sectorEn: 'Basic Materials',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 78.40,
    yearHigh: 98.00,
    yearLow: 72.50,
    avgVolume: 3200000,
    marketCap: 235,
    peRatio: 22.5,
    pbRatio: 1.8,
    dividendYield: 3.5,
    eps: 3.48,
    beta: 1.25,
    volatility: 2.2,
    sharesOutstanding: 3000,
    freeFloat: 30
  },
  {
    symbol: '7010',
    nameAr: 'الاتصالات السعودية STC',
    nameEn: 'Saudi Telecom',
    sector: 'الاتصالات',
    sectorEn: 'Telecom',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 42.50,
    yearHigh: 48.00,
    yearLow: 38.50,
    avgVolume: 2800000,
    marketCap: 212,
    peRatio: 18.2,
    pbRatio: 2.5,
    dividendYield: 4.7,
    eps: 2.34,
    beta: 0.75,
    volatility: 1.5,
    sharesOutstanding: 5000,
    freeFloat: 30
  },
  {
    symbol: '1180',
    nameAr: 'الأهلي السعودي',
    nameEn: 'SNB',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 38.75,
    yearHigh: 45.00,
    yearLow: 32.50,
    avgVolume: 5500000,
    marketCap: 194,
    peRatio: 12.8,
    pbRatio: 1.9,
    dividendYield: 3.2,
    eps: 3.03,
    beta: 1.05,
    volatility: 1.6,
    sharesOutstanding: 5000,
    freeFloat: 25
  },
  {
    symbol: '4190',
    nameAr: 'جرير',
    nameEn: 'Jarir',
    sector: 'التجزئة',
    sectorEn: 'Retail',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 152.00,
    yearHigh: 180.00,
    yearLow: 135.00,
    avgVolume: 450000,
    marketCap: 18.2,
    peRatio: 21.5,
    pbRatio: 8.5,
    dividendYield: 4.2,
    eps: 7.07,
    beta: 0.95,
    volatility: 2.0,
    sharesOutstanding: 120,
    freeFloat: 55
  },
  {
    symbol: '2280',
    nameAr: 'المراعي',
    nameEn: 'Almarai',
    sector: 'الأغذية',
    sectorEn: 'Food',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 58.50,
    yearHigh: 68.00,
    yearLow: 52.00,
    avgVolume: 1200000,
    marketCap: 58.5,
    peRatio: 24.2,
    pbRatio: 3.8,
    dividendYield: 1.8,
    eps: 2.42,
    beta: 0.65,
    volatility: 1.4,
    sharesOutstanding: 1000,
    freeFloat: 48
  },
  {
    symbol: '2350',
    nameAr: 'كيان السعودية',
    nameEn: 'Kayan',
    sector: 'البتروكيماويات',
    sectorEn: 'Petrochemicals',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 12.85,
    yearHigh: 18.50,
    yearLow: 11.20,
    avgVolume: 8500000,
    marketCap: 19.3,
    peRatio: -15.2,
    pbRatio: 0.85,
    dividendYield: 0,
    eps: -0.85,
    beta: 1.45,
    volatility: 3.2,
    sharesOutstanding: 1500,
    freeFloat: 65
  },
  {
    symbol: '4030',
    nameAr: 'البحري',
    nameEn: 'Bahri',
    sector: 'النقل',
    sectorEn: 'Transport',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 35.20,
    yearHigh: 42.00,
    yearLow: 28.50,
    avgVolume: 2100000,
    marketCap: 22.0,
    peRatio: 15.8,
    pbRatio: 1.6,
    dividendYield: 3.8,
    eps: 2.23,
    beta: 1.10,
    volatility: 2.5,
    sharesOutstanding: 625,
    freeFloat: 42
  },
  {
    symbol: '4200',
    nameAr: 'الدريس',
    nameEn: 'Aldrees',
    sector: 'الطاقة',
    sectorEn: 'Energy',
    market: 'تداول',
    marketEn: 'Tadawul',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    currentPrice: 85.50,
    yearHigh: 105.00,
    yearLow: 72.00,
    avgVolume: 380000,
    marketCap: 5.13,
    peRatio: 14.5,
    pbRatio: 2.8,
    dividendYield: 5.2,
    eps: 5.90,
    beta: 0.90,
    volatility: 2.2,
    sharesOutstanding: 60,
    freeFloat: 35
  }
];

// أسهم البورصة المصرية (EGX)
export const EGYPTIAN_STOCKS: RealStock[] = [
  {
    symbol: 'COMI',
    nameAr: 'البنك التجاري الدولي',
    nameEn: 'Commercial International Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 78.50,
    yearHigh: 95.00,
    yearLow: 62.00,
    avgVolume: 4500000,
    marketCap: 115,
    peRatio: 8.2,
    pbRatio: 1.8,
    dividendYield: 3.5,
    eps: 9.57,
    beta: 1.15,
    volatility: 2.8,
    sharesOutstanding: 1465,
    freeFloat: 85
  },
  {
    symbol: 'HRHO',
    nameAr: 'هيرميس القابضة',
    nameEn: 'EFG Hermes',
    sector: 'الخدمات المالية',
    sectorEn: 'Financial Services',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 25.80,
    yearHigh: 32.50,
    yearLow: 18.50,
    avgVolume: 8200000,
    marketCap: 42,
    peRatio: 12.5,
    pbRatio: 2.2,
    dividendYield: 2.8,
    eps: 2.06,
    beta: 1.35,
    volatility: 3.5,
    sharesOutstanding: 1627,
    freeFloat: 72
  },
  {
    symbol: 'ETEL',
    nameAr: 'المصرية للاتصالات',
    nameEn: 'Telecom Egypt',
    sector: 'الاتصالات',
    sectorEn: 'Telecom',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 32.50,
    yearHigh: 42.00,
    yearLow: 24.50,
    avgVolume: 3800000,
    marketCap: 55,
    peRatio: 6.8,
    pbRatio: 1.5,
    dividendYield: 8.5,
    eps: 4.78,
    beta: 0.85,
    volatility: 2.2,
    sharesOutstanding: 1707,
    freeFloat: 20
  },
  {
    symbol: 'TMGH',
    nameAr: 'طلعت مصطفى القابضة',
    nameEn: 'Talaat Moustafa Group',
    sector: 'العقارات',
    sectorEn: 'Real Estate',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 52.80,
    yearHigh: 68.00,
    yearLow: 35.00,
    avgVolume: 12500000,
    marketCap: 105,
    peRatio: 18.5,
    pbRatio: 3.2,
    dividendYield: 1.2,
    eps: 2.85,
    beta: 1.45,
    volatility: 4.2,
    sharesOutstanding: 1990,
    freeFloat: 65
  },
  {
    symbol: 'SWDY',
    nameAr: 'السويدي إليكتريك',
    nameEn: 'Elsewedy Electric',
    sector: 'الصناعة',
    sectorEn: 'Industrials',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 42.20,
    yearHigh: 55.00,
    yearLow: 32.00,
    avgVolume: 5200000,
    marketCap: 48,
    peRatio: 9.5,
    pbRatio: 2.1,
    dividendYield: 4.2,
    eps: 4.44,
    beta: 1.25,
    volatility: 3.0,
    sharesOutstanding: 1138,
    freeFloat: 58
  },
  {
    symbol: 'ESRS',
    nameAr: 'حديد عز',
    nameEn: 'Ezz Steel',
    sector: 'المواد الأساسية',
    sectorEn: 'Basic Materials',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 38.50,
    yearHigh: 52.00,
    yearLow: 28.00,
    avgVolume: 3500000,
    marketCap: 22,
    peRatio: 5.8,
    pbRatio: 0.95,
    dividendYield: 0,
    eps: 6.64,
    beta: 1.55,
    volatility: 4.5,
    sharesOutstanding: 571,
    freeFloat: 45
  },
  {
    symbol: 'OCDI',
    nameAr: 'أوراسكوم للتنمية',
    nameEn: 'Orascom Development',
    sector: 'العقارات',
    sectorEn: 'Real Estate',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 12.85,
    yearHigh: 18.50,
    yearLow: 8.50,
    avgVolume: 8500000,
    marketCap: 15,
    peRatio: 25.5,
    pbRatio: 1.2,
    dividendYield: 0,
    eps: 0.50,
    beta: 1.65,
    volatility: 5.2,
    sharesOutstanding: 1168,
    freeFloat: 72
  },
  {
    symbol: 'PHDC',
    nameAr: 'بالم هيلز للتعمير',
    nameEn: 'Palm Hills Developments',
    sector: 'العقارات',
    sectorEn: 'Real Estate',
    market: 'البورصة المصرية',
    marketEn: 'EGX',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    currentPrice: 5.25,
    yearHigh: 7.50,
    yearLow: 3.80,
    avgVolume: 25000000,
    marketCap: 18,
    peRatio: 12.8,
    pbRatio: 0.85,
    dividendYield: 0,
    eps: 0.41,
    beta: 1.75,
    volatility: 5.8,
    sharesOutstanding: 3429,
    freeFloat: 68
  }
];

// أسهم سوق أبوظبي (ADX)
export const ABU_DHABI_STOCKS: RealStock[] = [
  {
    symbol: 'ADNOCDIST',
    nameAr: 'أدنوك للتوزيع',
    nameEn: 'ADNOC Distribution',
    sector: 'الطاقة',
    sectorEn: 'Energy',
    market: 'سوق أبوظبي',
    marketEn: 'ADX',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 3.85,
    yearHigh: 4.50,
    yearLow: 3.20,
    avgVolume: 15000000,
    marketCap: 48,
    peRatio: 18.5,
    pbRatio: 4.2,
    dividendYield: 5.8,
    eps: 0.21,
    beta: 0.75,
    volatility: 1.8,
    sharesOutstanding: 12500,
    freeFloat: 20
  },
  {
    symbol: 'FAB',
    nameAr: 'بنك أبوظبي الأول',
    nameEn: 'First Abu Dhabi Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'سوق أبوظبي',
    marketEn: 'ADX',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 14.25,
    yearHigh: 17.50,
    yearLow: 12.80,
    avgVolume: 8500000,
    marketCap: 158,
    peRatio: 10.2,
    pbRatio: 1.5,
    dividendYield: 4.8,
    eps: 1.40,
    beta: 1.05,
    volatility: 1.5,
    sharesOutstanding: 11100,
    freeFloat: 35
  },
  {
    symbol: 'ETISALAT',
    nameAr: 'اتصالات الإمارات',
    nameEn: 'Emirates Telecom',
    sector: 'الاتصالات',
    sectorEn: 'Telecom',
    market: 'سوق أبوظبي',
    marketEn: 'ADX',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 24.50,
    yearHigh: 28.00,
    yearLow: 21.50,
    avgVolume: 2500000,
    marketCap: 214,
    peRatio: 18.8,
    pbRatio: 5.2,
    dividendYield: 3.5,
    eps: 1.30,
    beta: 0.65,
    volatility: 1.2,
    sharesOutstanding: 8740,
    freeFloat: 40
  },
  {
    symbol: 'ADCB',
    nameAr: 'بنك أبوظبي التجاري',
    nameEn: 'Abu Dhabi Commercial Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'سوق أبوظبي',
    marketEn: 'ADX',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 9.45,
    yearHigh: 11.20,
    yearLow: 8.20,
    avgVolume: 5200000,
    marketCap: 65,
    peRatio: 8.5,
    pbRatio: 1.2,
    dividendYield: 5.5,
    eps: 1.11,
    beta: 1.15,
    volatility: 1.8,
    sharesOutstanding: 6880,
    freeFloat: 38
  },
  {
    symbol: 'ALDAR',
    nameAr: 'الدار العقارية',
    nameEn: 'Aldar Properties',
    sector: 'العقارات',
    sectorEn: 'Real Estate',
    market: 'سوق أبوظبي',
    marketEn: 'ADX',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 6.85,
    yearHigh: 8.50,
    yearLow: 5.80,
    avgVolume: 18000000,
    marketCap: 55,
    peRatio: 12.5,
    pbRatio: 1.4,
    dividendYield: 4.2,
    eps: 0.55,
    beta: 1.25,
    volatility: 2.5,
    sharesOutstanding: 8000,
    freeFloat: 45
  }
];

// أسهم سوق دبي (DFM)
export const DUBAI_STOCKS: RealStock[] = [
  {
    symbol: 'EMAAR',
    nameAr: 'إعمار العقارية',
    nameEn: 'Emaar Properties',
    sector: 'العقارات',
    sectorEn: 'Real Estate',
    market: 'سوق دبي',
    marketEn: 'DFM',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 9.20,
    yearHigh: 11.50,
    yearLow: 6.50,
    avgVolume: 25000000,
    marketCap: 82,
    peRatio: 8.5,
    pbRatio: 1.2,
    dividendYield: 2.8,
    eps: 1.08,
    beta: 1.35,
    volatility: 3.2,
    sharesOutstanding: 8910,
    freeFloat: 62
  },
  {
    symbol: 'DIB',
    nameAr: 'بنك دبي الإسلامي',
    nameEn: 'Dubai Islamic Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'سوق دبي',
    marketEn: 'DFM',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 6.15,
    yearHigh: 7.20,
    yearLow: 5.25,
    avgVolume: 8500000,
    marketCap: 44,
    peRatio: 9.2,
    pbRatio: 1.3,
    dividendYield: 5.2,
    eps: 0.67,
    beta: 1.10,
    volatility: 2.0,
    sharesOutstanding: 7163,
    freeFloat: 45
  },
  {
    symbol: 'DU',
    nameAr: 'شركة الإمارات للاتصالات المتكاملة (دو)',
    nameEn: 'Emirates Integrated Telecom (du)',
    sector: 'الاتصالات',
    sectorEn: 'Telecom',
    market: 'سوق دبي',
    marketEn: 'DFM',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 6.85,
    yearHigh: 7.80,
    yearLow: 5.90,
    avgVolume: 3200000,
    marketCap: 31,
    peRatio: 15.5,
    pbRatio: 2.8,
    dividendYield: 5.8,
    eps: 0.44,
    beta: 0.80,
    volatility: 1.5,
    sharesOutstanding: 4571,
    freeFloat: 20
  },
  {
    symbol: 'DEWA',
    nameAr: 'هيئة كهرباء ومياه دبي',
    nameEn: 'Dubai Electricity and Water',
    sector: 'المرافق',
    sectorEn: 'Utilities',
    market: 'سوق دبي',
    marketEn: 'DFM',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 2.65,
    yearHigh: 3.20,
    yearLow: 2.35,
    avgVolume: 35000000,
    marketCap: 133,
    peRatio: 18.5,
    pbRatio: 2.2,
    dividendYield: 4.5,
    eps: 0.14,
    beta: 0.55,
    volatility: 1.2,
    sharesOutstanding: 50000,
    freeFloat: 18
  },
  {
    symbol: 'SALIK',
    nameAr: 'سالك',
    nameEn: 'Salik',
    sector: 'النقل',
    sectorEn: 'Transport',
    market: 'سوق دبي',
    marketEn: 'DFM',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currentPrice: 4.25,
    yearHigh: 5.20,
    yearLow: 3.50,
    avgVolume: 12000000,
    marketCap: 32,
    peRatio: 22.5,
    pbRatio: 8.5,
    dividendYield: 6.5,
    eps: 0.19,
    beta: 0.70,
    volatility: 2.2,
    sharesOutstanding: 7500,
    freeFloat: 25
  }
];

// أسهم بورصة الكويت
export const KUWAIT_STOCKS: RealStock[] = [
  {
    symbol: 'NBK',
    nameAr: 'بنك الكويت الوطني',
    nameEn: 'National Bank of Kuwait',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'بورصة الكويت',
    marketEn: 'Boursa Kuwait',
    currency: 'KWD',
    currencySymbol: 'د.ك',
    currentPrice: 1.050,
    yearHigh: 1.180,
    yearLow: 0.920,
    avgVolume: 8500000,
    marketCap: 9.8,
    peRatio: 12.5,
    pbRatio: 1.8,
    dividendYield: 4.2,
    eps: 0.084,
    beta: 0.95,
    volatility: 1.2,
    sharesOutstanding: 9333,
    freeFloat: 52
  },
  {
    symbol: 'KFH',
    nameAr: 'بيت التمويل الكويتي',
    nameEn: 'Kuwait Finance House',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'بورصة الكويت',
    marketEn: 'Boursa Kuwait',
    currency: 'KWD',
    currencySymbol: 'د.ك',
    currentPrice: 0.885,
    yearHigh: 1.020,
    yearLow: 0.780,
    avgVolume: 12000000,
    marketCap: 10.5,
    peRatio: 15.2,
    pbRatio: 2.2,
    dividendYield: 3.5,
    eps: 0.058,
    beta: 1.15,
    volatility: 1.8,
    sharesOutstanding: 11864,
    freeFloat: 48
  },
  {
    symbol: 'ZAIN',
    nameAr: 'زين',
    nameEn: 'Zain',
    sector: 'الاتصالات',
    sectorEn: 'Telecom',
    market: 'بورصة الكويت',
    marketEn: 'Boursa Kuwait',
    currency: 'KWD',
    currencySymbol: 'د.ك',
    currentPrice: 0.545,
    yearHigh: 0.620,
    yearLow: 0.480,
    avgVolume: 5500000,
    marketCap: 2.4,
    peRatio: 11.8,
    pbRatio: 1.5,
    dividendYield: 5.5,
    eps: 0.046,
    beta: 0.85,
    volatility: 1.5,
    sharesOutstanding: 4329,
    freeFloat: 62
  }
];

// أسهم بورصة قطر
export const QATAR_STOCKS: RealStock[] = [
  {
    symbol: 'QNBK',
    nameAr: 'بنك قطر الوطني',
    nameEn: 'Qatar National Bank',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'بورصة قطر',
    marketEn: 'QSE',
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    currentPrice: 18.50,
    yearHigh: 21.00,
    yearLow: 16.20,
    avgVolume: 2500000,
    marketCap: 185,
    peRatio: 10.5,
    pbRatio: 1.8,
    dividendYield: 4.2,
    eps: 1.76,
    beta: 1.05,
    volatility: 1.5,
    sharesOutstanding: 10000,
    freeFloat: 50
  },
  {
    symbol: 'IQCD',
    nameAr: 'صناعات قطر',
    nameEn: 'Industries Qatar',
    sector: 'البتروكيماويات',
    sectorEn: 'Petrochemicals',
    market: 'بورصة قطر',
    marketEn: 'QSE',
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    currentPrice: 12.85,
    yearHigh: 15.50,
    yearLow: 11.20,
    avgVolume: 1800000,
    marketCap: 77,
    peRatio: 8.5,
    pbRatio: 1.2,
    dividendYield: 6.5,
    eps: 1.51,
    beta: 1.25,
    volatility: 2.2,
    sharesOutstanding: 6039,
    freeFloat: 45
  },
  {
    symbol: 'QGTS',
    nameAr: 'ناقلات قطر',
    nameEn: 'Qatar Gas Transport',
    sector: 'النقل',
    sectorEn: 'Transport',
    market: 'بورصة قطر',
    marketEn: 'QSE',
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    currentPrice: 4.25,
    yearHigh: 5.00,
    yearLow: 3.80,
    avgVolume: 3500000,
    marketCap: 24,
    peRatio: 12.5,
    pbRatio: 1.4,
    dividendYield: 5.8,
    eps: 0.34,
    beta: 0.90,
    volatility: 1.8,
    sharesOutstanding: 5550,
    freeFloat: 40
  }
];

// أسهم ناسداك وNYSE
export const US_STOCKS: RealStock[] = [
  {
    symbol: 'AAPL',
    nameAr: 'آبل',
    nameEn: 'Apple Inc.',
    sector: 'التكنولوجيا',
    sectorEn: 'Technology',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 185.50,
    yearHigh: 198.50,
    yearLow: 164.00,
    avgVolume: 55000000,
    marketCap: 2850,
    peRatio: 28.5,
    pbRatio: 45.2,
    dividendYield: 0.5,
    eps: 6.51,
    beta: 1.25,
    volatility: 1.8,
    sharesOutstanding: 15360,
    freeFloat: 99
  },
  {
    symbol: 'MSFT',
    nameAr: 'مايكروسوفت',
    nameEn: 'Microsoft Corp.',
    sector: 'التكنولوجيا',
    sectorEn: 'Technology',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 425.80,
    yearHigh: 468.00,
    yearLow: 310.00,
    avgVolume: 22000000,
    marketCap: 3165,
    peRatio: 35.2,
    pbRatio: 12.5,
    dividendYield: 0.7,
    eps: 12.10,
    beta: 0.95,
    volatility: 1.5,
    sharesOutstanding: 7432,
    freeFloat: 98
  },
  {
    symbol: 'GOOGL',
    nameAr: 'ألفابت (جوجل)',
    nameEn: 'Alphabet Inc.',
    sector: 'التكنولوجيا',
    sectorEn: 'Technology',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 175.25,
    yearHigh: 192.00,
    yearLow: 120.00,
    avgVolume: 25000000,
    marketCap: 2180,
    peRatio: 24.5,
    pbRatio: 6.8,
    dividendYield: 0,
    eps: 7.15,
    beta: 1.10,
    volatility: 2.0,
    sharesOutstanding: 12440,
    freeFloat: 97
  },
  {
    symbol: 'AMZN',
    nameAr: 'أمازون',
    nameEn: 'Amazon.com Inc.',
    sector: 'التجزئة',
    sectorEn: 'Retail',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 185.50,
    yearHigh: 201.00,
    yearLow: 118.00,
    avgVolume: 45000000,
    marketCap: 1925,
    peRatio: 62.5,
    pbRatio: 8.5,
    dividendYield: 0,
    eps: 2.97,
    beta: 1.25,
    volatility: 2.5,
    sharesOutstanding: 10380,
    freeFloat: 95
  },
  {
    symbol: 'NVDA',
    nameAr: 'إنفيديا',
    nameEn: 'NVIDIA Corp.',
    sector: 'أشباه الموصلات',
    sectorEn: 'Semiconductors',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 875.40,
    yearHigh: 974.00,
    yearLow: 392.00,
    avgVolume: 42000000,
    marketCap: 2160,
    peRatio: 65.5,
    pbRatio: 52.0,
    dividendYield: 0.02,
    eps: 13.37,
    beta: 1.65,
    volatility: 3.5,
    sharesOutstanding: 2470,
    freeFloat: 96
  },
  {
    symbol: 'TSLA',
    nameAr: 'تسلا',
    nameEn: 'Tesla Inc.',
    sector: 'السيارات',
    sectorEn: 'Automotive',
    market: 'ناسداك',
    marketEn: 'NASDAQ',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 248.50,
    yearHigh: 299.00,
    yearLow: 152.00,
    avgVolume: 95000000,
    marketCap: 790,
    peRatio: 72.5,
    pbRatio: 12.5,
    dividendYield: 0,
    eps: 3.43,
    beta: 2.05,
    volatility: 4.5,
    sharesOutstanding: 3180,
    freeFloat: 78
  },
  {
    symbol: 'JPM',
    nameAr: 'جي بي مورغان',
    nameEn: 'JPMorgan Chase',
    sector: 'البنوك',
    sectorEn: 'Banks',
    market: 'بورصة نيويورك',
    marketEn: 'NYSE',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 198.50,
    yearHigh: 215.00,
    yearLow: 135.00,
    avgVolume: 9500000,
    marketCap: 572,
    peRatio: 11.5,
    pbRatio: 1.8,
    dividendYield: 2.4,
    eps: 17.26,
    beta: 1.15,
    volatility: 1.8,
    sharesOutstanding: 2880,
    freeFloat: 88
  },
  {
    symbol: 'V',
    nameAr: 'فيزا',
    nameEn: 'Visa Inc.',
    sector: 'الخدمات المالية',
    sectorEn: 'Financial Services',
    market: 'بورصة نيويورك',
    marketEn: 'NYSE',
    currency: 'USD',
    currencySymbol: '$',
    currentPrice: 285.50,
    yearHigh: 295.00,
    yearLow: 228.00,
    avgVolume: 6500000,
    marketCap: 575,
    peRatio: 30.5,
    pbRatio: 14.2,
    dividendYield: 0.8,
    eps: 9.36,
    beta: 0.95,
    volatility: 1.2,
    sharesOutstanding: 2015,
    freeFloat: 95
  }
];

// دمج جميع الأسهم
export const ALL_STOCKS: { [key: string]: RealStock[] } = {
  'SA': SAUDI_STOCKS,
  'EG': EGYPTIAN_STOCKS,
  'AE_ADX': ABU_DHABI_STOCKS,
  'AE_DFM': DUBAI_STOCKS,
  'KW': KUWAIT_STOCKS,
  'QA': QATAR_STOCKS,
  'US': US_STOCKS
};

// دالة للحصول على أسهم حسب الدولة
export function getStocksByCountry(countryCode: string): RealStock[] {
  if (countryCode === 'ALL') {
    return [
      ...SAUDI_STOCKS,
      ...EGYPTIAN_STOCKS,
      ...ABU_DHABI_STOCKS,
      ...DUBAI_STOCKS,
      ...KUWAIT_STOCKS,
      ...QATAR_STOCKS,
      ...US_STOCKS
    ];
  }
  
  if (countryCode === 'AE') {
    return [...ABU_DHABI_STOCKS, ...DUBAI_STOCKS];
  }
  
  return ALL_STOCKS[countryCode] || SAUDI_STOCKS;
}

// دالة لتوليد بيانات OHLC واقعية ومترابطة
export function generateRealisticOHLC(stock: RealStock): {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
  turnover: number;
  vwap: number;
  trades: number;
} {
  const volatility = stock.volatility / 100;
  
  // توليد الإغلاق السابق (قريب من السعر الحالي)
  const previousClose = stock.currentPrice * (1 + (Math.random() - 0.5) * volatility * 2);
  
  // توليد فجوة الافتتاح (gap) - عادة صغيرة
  const gapPercent = (Math.random() - 0.5) * volatility * 0.5;
  const open = previousClose * (1 + gapPercent);
  
  // توليد التغيير اليومي
  const dailyChange = (Math.random() - 0.5) * volatility * 2;
  const close = open * (1 + dailyChange);
  
  // أعلى سعر يجب أن يكون أكبر من الافتتاح والإغلاق
  const highExtra = Math.random() * volatility;
  const high = Math.max(open, close) * (1 + highExtra);
  
  // أدنى سعر يجب أن يكون أقل من الافتتاح والإغلاق
  const lowExtra = Math.random() * volatility;
  const low = Math.min(open, close) * (1 - lowExtra);
  
  // حساب التغيير
  const change = close - previousClose;
  const changePercent = (change / previousClose) * 100;
  
  // حجم التداول (تباين ±30% من المتوسط)
  const volumeVariation = 0.7 + Math.random() * 0.6;
  const volume = Math.round(stock.avgVolume * volumeVariation);
  
  // قيمة التداول
  const vwap = (high + low + close) / 3;
  const turnover = volume * vwap;
  
  // عدد الصفقات (تقريبي)
  const avgTradeSize = 500 + Math.random() * 1500;
  const trades = Math.round(volume / avgTradeSize);
  
  // تاريخ عشوائي خلال آخر 30 يوم
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const date = new Date(today.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  
  return {
    date: date.toISOString().split('T')[0],
    open: Math.round(open * 100) / 100,
    high: Math.round(high * 100) / 100,
    low: Math.round(low * 100) / 100,
    close: Math.round(close * 100) / 100,
    previousClose: Math.round(previousClose * 100) / 100,
    change: Math.round(change * 100) / 100,
    changePercent: Math.round(changePercent * 100) / 100,
    volume,
    turnover: Math.round(turnover),
    vwap: Math.round(vwap * 100) / 100,
    trades
  };
}

// دالة لتوليد مؤشرات فنية واقعية
export function generateTechnicalIndicators(stock: RealStock, ohlc: ReturnType<typeof generateRealisticOHLC>): {
  sma20: number;
  sma50: number;
  sma200: number;
  ema12: number;
  ema26: number;
  macd: number;
  macdSignal: number;
  macdHistogram: number;
  rsi: number;
  stochK: number;
  stochD: number;
  bollingerUpper: number;
  bollingerMiddle: number;
  bollingerLower: number;
  atr: number;
  adx: number;
  obv: number;
  support1: number;
  support2: number;
  resistance1: number;
  resistance2: number;
  pivotPoint: number;
  trend: string;
  trendEn: string;
  signal: string;
  signalEn: string;
  strength: number;
} {
  const { close, high, low, previousClose } = ohlc;
  const volatility = stock.volatility / 100;
  
  // المتوسطات المتحركة
  const sma20 = close * (1 + (Math.random() - 0.5) * volatility * 2);
  const sma50 = close * (1 + (Math.random() - 0.5) * volatility * 4);
  const sma200 = close * (1 + (Math.random() - 0.5) * volatility * 8);
  
  // EMA
  const ema12 = close * (1 + (Math.random() - 0.5) * volatility * 1.5);
  const ema26 = close * (1 + (Math.random() - 0.5) * volatility * 3);
  
  // MACD
  const macd = ema12 - ema26;
  const macdSignal = macd * (0.8 + Math.random() * 0.4);
  const macdHistogram = macd - macdSignal;
  
  // RSI (14 فترة) - بين 0 و 100
  const rsi = 30 + Math.random() * 40; // معظم الوقت بين 30 و 70
  
  // Stochastic
  const stochK = 20 + Math.random() * 60;
  const stochD = stochK * (0.9 + Math.random() * 0.2);
  
  // Bollinger Bands
  const stdDev = close * volatility * 2;
  const bollingerMiddle = sma20;
  const bollingerUpper = bollingerMiddle + stdDev * 2;
  const bollingerLower = bollingerMiddle - stdDev * 2;
  
  // ATR
  const atr = (high - low) * (0.8 + Math.random() * 0.4);
  
  // ADX
  const adx = 15 + Math.random() * 35;
  
  // OBV (تقريبي)
  const obv = ohlc.volume * (close > previousClose ? 1 : -1);
  
  // نقاط الدعم والمقاومة
  const pivotPoint = (high + low + close) / 3;
  const support1 = pivotPoint * 2 - high;
  const support2 = pivotPoint - (high - low);
  const resistance1 = pivotPoint * 2 - low;
  const resistance2 = pivotPoint + (high - low);
  
  // تحديد الاتجاه
  let trend: string;
  let trendEn: string;
  if (close > sma50 && sma50 > sma200) {
    trend = 'صاعد';
    trendEn = 'Bullish';
  } else if (close < sma50 && sma50 < sma200) {
    trend = 'هابط';
    trendEn = 'Bearish';
  } else {
    trend = 'عرضي';
    trendEn = 'Sideways';
  }
  
  // إشارة التداول
  let signal: string;
  let signalEn: string;
  if (rsi < 30 && macd > macdSignal) {
    signal = 'شراء قوي';
    signalEn = 'Strong Buy';
  } else if (rsi < 40 && close > sma20) {
    signal = 'شراء';
    signalEn = 'Buy';
  } else if (rsi > 70 && macd < macdSignal) {
    signal = 'بيع قوي';
    signalEn = 'Strong Sell';
  } else if (rsi > 60 && close < sma20) {
    signal = 'بيع';
    signalEn = 'Sell';
  } else {
    signal = 'احتفاظ';
    signalEn = 'Hold';
  }
  
  // قوة الإشارة (0-100)
  const strength = Math.round(Math.abs(50 - rsi) + Math.abs(macdHistogram) * 10 + adx);
  
  return {
    sma20: Math.round(sma20 * 100) / 100,
    sma50: Math.round(sma50 * 100) / 100,
    sma200: Math.round(sma200 * 100) / 100,
    ema12: Math.round(ema12 * 100) / 100,
    ema26: Math.round(ema26 * 100) / 100,
    macd: Math.round(macd * 1000) / 1000,
    macdSignal: Math.round(macdSignal * 1000) / 1000,
    macdHistogram: Math.round(macdHistogram * 1000) / 1000,
    rsi: Math.round(rsi * 10) / 10,
    stochK: Math.round(stochK * 10) / 10,
    stochD: Math.round(stochD * 10) / 10,
    bollingerUpper: Math.round(bollingerUpper * 100) / 100,
    bollingerMiddle: Math.round(bollingerMiddle * 100) / 100,
    bollingerLower: Math.round(bollingerLower * 100) / 100,
    atr: Math.round(atr * 100) / 100,
    adx: Math.round(adx * 10) / 10,
    obv: Math.round(obv),
    support1: Math.round(support1 * 100) / 100,
    support2: Math.round(support2 * 100) / 100,
    resistance1: Math.round(resistance1 * 100) / 100,
    resistance2: Math.round(resistance2 * 100) / 100,
    pivotPoint: Math.round(pivotPoint * 100) / 100,
    trend,
    trendEn,
    signal,
    signalEn,
    strength: Math.min(100, Math.max(0, strength))
  };
}

// دالة لتوليد سياق السهم الكامل
export function generateStockContext(countryCode: string = 'ALL', language: 'ar' | 'en' = 'ar'): {
  // معلومات السهم
  symbol: string;
  stockName: string;
  stockNameEn: string;
  sector: string;
  sectorEn: string;
  market: string;
  marketEn: string;
  currency: string;
  currencySymbol: string;
  // OHLC
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
  changeDirection: string;
  changeDirectionEn: string;
  // حجم التداول
  volume: number;
  volumeFormatted: string;
  turnover: number;
  turnoverFormatted: string;
  vwap: number;
  trades: number;
  // معلومات أساسية
  marketCap: number;
  marketCapFormatted: string;
  peRatio: number;
  pbRatio: number;
  dividendYield: number;
  eps: number;
  beta: number;
  yearHigh: number;
  yearLow: number;
  // مؤشرات فنية
  sma20: number;
  sma50: number;
  sma200: number;
  rsi: number;
  macd: number;
  support1: number;
  resistance1: number;
  trend: string;
  trendEn: string;
  signal: string;
  signalEn: string;
  strength: number;
} {
  const stocks = getStocksByCountry(countryCode);
  const stock = stocks[Math.floor(Math.random() * stocks.length)];
  const ohlc = generateRealisticOHLC(stock);
  const technicals = generateTechnicalIndicators(stock, ohlc);
  
  const changeDirection = ohlc.change >= 0 ? 'ارتفاع' : 'انخفاض';
  const changeDirectionEn = ohlc.change >= 0 ? 'Up' : 'Down';
  
  // تنسيق الأرقام الكبيرة
  const formatNumber = (num: number): string => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + ' مليار';
    if (num >= 1000000) return (num / 1000000).toFixed(2) + ' مليون';
    if (num >= 1000) return (num / 1000).toFixed(2) + ' ألف';
    return num.toLocaleString();
  };
  
  return {
    // معلومات السهم
    symbol: stock.symbol,
    stockName: language === 'ar' ? stock.nameAr : stock.nameEn,
    stockNameEn: stock.nameEn,
    sector: language === 'ar' ? stock.sector : stock.sectorEn,
    sectorEn: stock.sectorEn,
    market: language === 'ar' ? stock.market : stock.marketEn,
    marketEn: stock.marketEn,
    currency: stock.currency,
    currencySymbol: stock.currencySymbol,
    // OHLC
    date: ohlc.date,
    open: ohlc.open,
    high: ohlc.high,
    low: ohlc.low,
    close: ohlc.close,
    previousClose: ohlc.previousClose,
    change: ohlc.change,
    changePercent: ohlc.changePercent,
    changeDirection: language === 'ar' ? changeDirection : changeDirectionEn,
    changeDirectionEn,
    // حجم التداول
    volume: ohlc.volume,
    volumeFormatted: formatNumber(ohlc.volume),
    turnover: ohlc.turnover,
    turnoverFormatted: formatNumber(ohlc.turnover),
    vwap: ohlc.vwap,
    trades: ohlc.trades,
    // معلومات أساسية
    marketCap: stock.marketCap,
    marketCapFormatted: formatNumber(stock.marketCap * 1000000000),
    peRatio: stock.peRatio,
    pbRatio: stock.pbRatio,
    dividendYield: stock.dividendYield,
    eps: stock.eps,
    beta: stock.beta,
    yearHigh: stock.yearHigh,
    yearLow: stock.yearLow,
    // مؤشرات فنية
    sma20: technicals.sma20,
    sma50: technicals.sma50,
    sma200: technicals.sma200,
    rsi: technicals.rsi,
    macd: technicals.macd,
    support1: technicals.support1,
    resistance1: technicals.resistance1,
    trend: language === 'ar' ? technicals.trend : technicals.trendEn,
    trendEn: technicals.trendEn,
    signal: language === 'ar' ? technicals.signal : technicals.signalEn,
    signalEn: technicals.signalEn,
    strength: technicals.strength
  };
}
