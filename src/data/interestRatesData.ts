// قاعدة بيانات أسعار الفائدة الحقيقية والمترابطة

export interface CentralBankRate {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  centralBank: string;
  centralBankEn: string;
  centralBankAbbr: string;
  baseRate: { min: number; max: number };
  overnightRate: { min: number; max: number };
  lendingRate: { min: number; max: number };
  depositRate: { min: number; max: number };
  interbankRate: string; // اسم معدل الفائدة بين البنوك
  interbankRateEn: string;
  reserveRequirement: { min: number; max: number };
  inflationTarget: { min: number; max: number };
  currentInflation: { min: number; max: number };
  lastChange: 'increase' | 'decrease' | 'unchanged';
  lastChangeAmount: number;
  meetingFrequency: string;
  meetingFrequencyEn: string;
}

export interface InterestRateTenor {
  tenor: string;
  tenorEn: string;
  days: number;
  spreadFromBase: { min: number; max: number };
}

// فترات أسعار الفائدة
export const interestRateTenors: InterestRateTenor[] = [
  { tenor: 'ليلة واحدة', tenorEn: 'Overnight', days: 1, spreadFromBase: { min: -0.25, max: 0.1 } },
  { tenor: 'أسبوع واحد', tenorEn: '1 Week', days: 7, spreadFromBase: { min: -0.15, max: 0.15 } },
  { tenor: 'أسبوعين', tenorEn: '2 Weeks', days: 14, spreadFromBase: { min: -0.1, max: 0.2 } },
  { tenor: 'شهر واحد', tenorEn: '1 Month', days: 30, spreadFromBase: { min: 0, max: 0.25 } },
  { tenor: 'شهرين', tenorEn: '2 Months', days: 60, spreadFromBase: { min: 0.05, max: 0.35 } },
  { tenor: 'ثلاثة أشهر', tenorEn: '3 Months', days: 90, spreadFromBase: { min: 0.1, max: 0.45 } },
  { tenor: 'ستة أشهر', tenorEn: '6 Months', days: 180, spreadFromBase: { min: 0.15, max: 0.6 } },
  { tenor: 'تسعة أشهر', tenorEn: '9 Months', days: 270, spreadFromBase: { min: 0.2, max: 0.75 } },
  { tenor: 'سنة واحدة', tenorEn: '1 Year', days: 365, spreadFromBase: { min: 0.25, max: 0.9 } },
];

// أنواع أسعار الفائدة
export const interestRateTypes = {
  ar: [
    'سعر الفائدة الأساسي',
    'سعر الإقراض',
    'سعر الإيداع',
    'سعر إعادة الشراء (الريبو)',
    'سعر إعادة الشراء العكسي',
    'سعر الفائدة بين البنوك',
    'سعر الخصم',
    'سعر الفائدة على الودائع الحكومية',
  ],
  en: [
    'Base Rate',
    'Lending Rate',
    'Deposit Rate',
    'Repo Rate',
    'Reverse Repo Rate',
    'Interbank Rate',
    'Discount Rate',
    'Government Deposit Rate',
  ]
};

// قرارات أسعار الفائدة
export const rateDecisions = {
  ar: ['رفع', 'خفض', 'تثبيت'],
  en: ['Increase', 'Decrease', 'Hold']
};

// بيانات البنوك المركزية وأسعار الفائدة
export const centralBankRates: Record<string, CentralBankRate> = {
  SA: {
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    countryCode: 'SA',
    currency: 'ريال سعودي',
    currencyCode: 'SAR',
    centralBank: 'البنك المركزي السعودي',
    centralBankEn: 'Saudi Central Bank',
    centralBankAbbr: 'SAMA',
    baseRate: { min: 5.5, max: 6.0 },
    overnightRate: { min: 5.25, max: 5.75 },
    lendingRate: { min: 6.5, max: 7.5 },
    depositRate: { min: 5.0, max: 5.5 },
    interbankRate: 'سايبور',
    interbankRateEn: 'SAIBOR',
    reserveRequirement: { min: 7, max: 10 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 1.5, max: 3.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'حسب الحاجة',
    meetingFrequencyEn: 'As needed',
  },
  AE: {
    country: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryCode: 'AE',
    currency: 'درهم إماراتي',
    currencyCode: 'AED',
    centralBank: 'مصرف الإمارات المركزي',
    centralBankEn: 'Central Bank of UAE',
    centralBankAbbr: 'CBUAE',
    baseRate: { min: 5.15, max: 5.65 },
    overnightRate: { min: 5.0, max: 5.5 },
    lendingRate: { min: 6.0, max: 7.0 },
    depositRate: { min: 4.75, max: 5.25 },
    interbankRate: 'إيبور',
    interbankRateEn: 'EIBOR',
    reserveRequirement: { min: 10, max: 14 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 2.0, max: 4.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'شهرياً',
    meetingFrequencyEn: 'Monthly',
  },
  EG: {
    country: 'جمهورية مصر العربية',
    countryEn: 'Egypt',
    countryCode: 'EG',
    currency: 'جنيه مصري',
    currencyCode: 'EGP',
    centralBank: 'البنك المركزي المصري',
    centralBankEn: 'Central Bank of Egypt',
    centralBankAbbr: 'CBE',
    baseRate: { min: 27.25, max: 28.25 },
    overnightRate: { min: 27.0, max: 28.0 },
    lendingRate: { min: 28.25, max: 29.25 },
    depositRate: { min: 26.25, max: 27.25 },
    interbankRate: 'كايرو',
    interbankRateEn: 'CAIR',
    reserveRequirement: { min: 14, max: 18 },
    inflationTarget: { min: 5, max: 9 },
    currentInflation: { min: 25, max: 35 },
    lastChange: 'increase',
    lastChangeAmount: 2.0,
    meetingFrequency: 'كل 6 أسابيع',
    meetingFrequencyEn: 'Every 6 weeks',
  },
  KW: {
    country: 'دولة الكويت',
    countryEn: 'Kuwait',
    countryCode: 'KW',
    currency: 'دينار كويتي',
    currencyCode: 'KWD',
    centralBank: 'بنك الكويت المركزي',
    centralBankEn: 'Central Bank of Kuwait',
    centralBankAbbr: 'CBK',
    baseRate: { min: 4.0, max: 4.5 },
    overnightRate: { min: 3.75, max: 4.25 },
    lendingRate: { min: 5.0, max: 6.0 },
    depositRate: { min: 3.5, max: 4.0 },
    interbankRate: 'كيبور',
    interbankRateEn: 'KIBOR',
    reserveRequirement: { min: 15, max: 20 },
    inflationTarget: { min: 2, max: 4 },
    currentInflation: { min: 3.0, max: 4.5 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'حسب الحاجة',
    meetingFrequencyEn: 'As needed',
  },
  QA: {
    country: 'دولة قطر',
    countryEn: 'Qatar',
    countryCode: 'QA',
    currency: 'ريال قطري',
    currencyCode: 'QAR',
    centralBank: 'مصرف قطر المركزي',
    centralBankEn: 'Qatar Central Bank',
    centralBankAbbr: 'QCB',
    baseRate: { min: 5.5, max: 6.0 },
    overnightRate: { min: 5.25, max: 5.75 },
    lendingRate: { min: 6.5, max: 7.5 },
    depositRate: { min: 5.0, max: 5.5 },
    interbankRate: 'قيبور',
    interbankRateEn: 'QIBOR',
    reserveRequirement: { min: 4.5, max: 5.5 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 2.0, max: 4.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'حسب الحاجة',
    meetingFrequencyEn: 'As needed',
  },
  BH: {
    country: 'مملكة البحرين',
    countryEn: 'Bahrain',
    countryCode: 'BH',
    currency: 'دينار بحريني',
    currencyCode: 'BHD',
    centralBank: 'مصرف البحرين المركزي',
    centralBankEn: 'Central Bank of Bahrain',
    centralBankAbbr: 'CBB',
    baseRate: { min: 5.5, max: 6.0 },
    overnightRate: { min: 5.25, max: 5.75 },
    lendingRate: { min: 6.5, max: 7.5 },
    depositRate: { min: 5.0, max: 5.5 },
    interbankRate: 'بيبور',
    interbankRateEn: 'BIBOR',
    reserveRequirement: { min: 5, max: 5 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 1.5, max: 3.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'حسب الحاجة',
    meetingFrequencyEn: 'As needed',
  },
  OM: {
    country: 'سلطنة عمان',
    countryEn: 'Oman',
    countryCode: 'OM',
    currency: 'ريال عماني',
    currencyCode: 'OMR',
    centralBank: 'البنك المركزي العماني',
    centralBankEn: 'Central Bank of Oman',
    centralBankAbbr: 'CBO',
    baseRate: { min: 5.5, max: 6.0 },
    overnightRate: { min: 5.25, max: 5.75 },
    lendingRate: { min: 6.5, max: 7.5 },
    depositRate: { min: 5.0, max: 5.5 },
    interbankRate: 'أويبور',
    interbankRateEn: 'OMIBOR',
    reserveRequirement: { min: 5, max: 8 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 1.0, max: 2.5 },
    lastChange: 'increase',
    lastChangeAmount: 0.25,
    meetingFrequency: 'حسب الحاجة',
    meetingFrequencyEn: 'As needed',
  },
  JO: {
    country: 'المملكة الأردنية الهاشمية',
    countryEn: 'Jordan',
    countryCode: 'JO',
    currency: 'دينار أردني',
    currencyCode: 'JOD',
    centralBank: 'البنك المركزي الأردني',
    centralBankEn: 'Central Bank of Jordan',
    centralBankAbbr: 'CBJ',
    baseRate: { min: 7.0, max: 7.5 },
    overnightRate: { min: 6.75, max: 7.25 },
    lendingRate: { min: 8.5, max: 9.5 },
    depositRate: { min: 6.0, max: 6.5 },
    interbankRate: 'جيبور',
    interbankRateEn: 'JIBOR',
    reserveRequirement: { min: 5, max: 7 },
    inflationTarget: { min: 2, max: 4 },
    currentInflation: { min: 2.0, max: 4.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.5,
    meetingFrequency: 'شهرياً',
    meetingFrequencyEn: 'Monthly',
  },
  MA: {
    country: 'المملكة المغربية',
    countryEn: 'Morocco',
    countryCode: 'MA',
    currency: 'درهم مغربي',
    currencyCode: 'MAD',
    centralBank: 'بنك المغرب',
    centralBankEn: 'Bank Al-Maghrib',
    centralBankAbbr: 'BAM',
    baseRate: { min: 3.0, max: 3.5 },
    overnightRate: { min: 2.75, max: 3.25 },
    lendingRate: { min: 4.5, max: 5.5 },
    depositRate: { min: 2.5, max: 3.0 },
    interbankRate: 'مونيا',
    interbankRateEn: 'MONIA',
    reserveRequirement: { min: 0, max: 2 },
    inflationTarget: { min: 2, max: 3 },
    currentInflation: { min: 3.0, max: 6.0 },
    lastChange: 'increase',
    lastChangeAmount: 0.5,
    meetingFrequency: 'ربع سنوي',
    meetingFrequencyEn: 'Quarterly',
  },
  US: {
    country: 'الولايات المتحدة الأمريكية',
    countryEn: 'United States',
    countryCode: 'US',
    currency: 'دولار أمريكي',
    currencyCode: 'USD',
    centralBank: 'الاحتياطي الفيدرالي الأمريكي',
    centralBankEn: 'Federal Reserve',
    centralBankAbbr: 'FED',
    baseRate: { min: 5.25, max: 5.5 },
    overnightRate: { min: 5.25, max: 5.5 },
    lendingRate: { min: 8.0, max: 8.5 },
    depositRate: { min: 5.0, max: 5.25 },
    interbankRate: 'سوفر',
    interbankRateEn: 'SOFR',
    reserveRequirement: { min: 0, max: 0 },
    inflationTarget: { min: 2, max: 2 },
    currentInflation: { min: 3.0, max: 4.0 },
    lastChange: 'unchanged',
    lastChangeAmount: 0,
    meetingFrequency: 'كل 6 أسابيع',
    meetingFrequencyEn: 'Every 6 weeks',
  },
  GB: {
    country: 'المملكة المتحدة',
    countryEn: 'United Kingdom',
    countryCode: 'GB',
    currency: 'جنيه إسترليني',
    currencyCode: 'GBP',
    centralBank: 'بنك إنجلترا',
    centralBankEn: 'Bank of England',
    centralBankAbbr: 'BOE',
    baseRate: { min: 5.0, max: 5.25 },
    overnightRate: { min: 4.9, max: 5.15 },
    lendingRate: { min: 6.5, max: 7.5 },
    depositRate: { min: 4.75, max: 5.0 },
    interbankRate: 'سونيا',
    interbankRateEn: 'SONIA',
    reserveRequirement: { min: 0, max: 0 },
    inflationTarget: { min: 2, max: 2 },
    currentInflation: { min: 4.0, max: 6.0 },
    lastChange: 'unchanged',
    lastChangeAmount: 0,
    meetingFrequency: 'شهرياً',
    meetingFrequencyEn: 'Monthly',
  },
  EU: {
    country: 'منطقة اليورو',
    countryEn: 'Eurozone',
    countryCode: 'EU',
    currency: 'يورو',
    currencyCode: 'EUR',
    centralBank: 'البنك المركزي الأوروبي',
    centralBankEn: 'European Central Bank',
    centralBankAbbr: 'ECB',
    baseRate: { min: 4.0, max: 4.5 },
    overnightRate: { min: 3.75, max: 4.0 },
    lendingRate: { min: 4.75, max: 5.0 },
    depositRate: { min: 3.5, max: 4.0 },
    interbankRate: 'يوريبور',
    interbankRateEn: 'EURIBOR',
    reserveRequirement: { min: 1, max: 1 },
    inflationTarget: { min: 2, max: 2 },
    currentInflation: { min: 2.5, max: 4.0 },
    lastChange: 'unchanged',
    lastChangeAmount: 0,
    meetingFrequency: 'كل 6 أسابيع',
    meetingFrequencyEn: 'Every 6 weeks',
  },
};

// سياق أسعار الفائدة
export interface InterestRateContext {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  centralBank: string;
  centralBankEn: string;
  centralBankAbbr: string;
  year: number;
  month: string;
  monthEn: string;
  meetingDate: string;
  baseRate: number;
  previousRate: number;
  rateChange: number;
  rateChangePercent: number;
  decision: string;
  decisionEn: string;
  overnightRate: number;
  lendingRate: number;
  depositRate: number;
  interbankRate: string;
  interbankRateEn: string;
  interbankRateValue: number;
  tenor: string;
  tenorEn: string;
  tenorDays: number;
  reserveRequirement: number;
  inflationTarget: number;
  currentInflation: number;
  realInterestRate: number;
  spreadToUS: number;
}

const months = {
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// دالة توليد سياق أسعار الفائدة
export function generateInterestRateContext(countryCode?: string, _language: 'ar' | 'en' = 'ar'): InterestRateContext {
  // اختيار الدولة
  const countryCodes = Object.keys(centralBankRates);
  const selectedCode = countryCode && centralBankRates[countryCode] 
    ? countryCode 
    : countryCodes[Math.floor(Math.random() * countryCodes.length)];
  
  const rateData = centralBankRates[selectedCode];
  
  // توليد السنة والشهر
  const year = 2023 + Math.floor(Math.random() * 2);
  const monthIndex = Math.floor(Math.random() * 12);
  const month = months.ar[monthIndex];
  const monthEn = months.en[monthIndex];
  
  // توليد تاريخ الاجتماع
  const day = Math.floor(Math.random() * 20) + 5;
  const meetingDate = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  
  // توليد سعر الفائدة الأساسي
  const baseRate = Number((rateData.baseRate.min + Math.random() * (rateData.baseRate.max - rateData.baseRate.min)).toFixed(2));
  
  // توليد السعر السابق والتغيير
  const changeOptions = [-0.5, -0.25, 0, 0.25, 0.5];
  const rateChange = changeOptions[Math.floor(Math.random() * changeOptions.length)];
  const previousRate = Number((baseRate - rateChange).toFixed(2));
  const rateChangePercent = previousRate > 0 ? Number(((rateChange / previousRate) * 100).toFixed(2)) : 0;
  
  // تحديد القرار
  let decision: string, decisionEn: string;
  if (rateChange > 0) {
    decision = 'رفع';
    decisionEn = 'Increase';
  } else if (rateChange < 0) {
    decision = 'خفض';
    decisionEn = 'Decrease';
  } else {
    decision = 'تثبيت';
    decisionEn = 'Hold';
  }
  
  // توليد الأسعار الأخرى بعلاقات منطقية
  const overnightRate = Number((baseRate - 0.25 + Math.random() * 0.25).toFixed(2));
  const lendingRate = Number((baseRate + 1 + Math.random() * 1.5).toFixed(2));
  const depositRate = Number((baseRate - 0.5 - Math.random() * 0.5).toFixed(2));
  
  // اختيار فترة سعر الفائدة بين البنوك
  const selectedTenor = interestRateTenors[Math.floor(Math.random() * interestRateTenors.length)];
  const spreadFromBase = selectedTenor.spreadFromBase.min + Math.random() * (selectedTenor.spreadFromBase.max - selectedTenor.spreadFromBase.min);
  const interbankRateValue = Number((baseRate + spreadFromBase).toFixed(3));
  
  // توليد المؤشرات الأخرى
  const reserveRequirement = rateData.reserveRequirement.min + Math.random() * (rateData.reserveRequirement.max - rateData.reserveRequirement.min);
  const inflationTarget = rateData.inflationTarget.min + Math.random() * (rateData.inflationTarget.max - rateData.inflationTarget.min);
  const currentInflation = rateData.currentInflation.min + Math.random() * (rateData.currentInflation.max - rateData.currentInflation.min);
  
  // حساب سعر الفائدة الحقيقي
  const realInterestRate = Number((baseRate - currentInflation).toFixed(2));
  
  // حساب الفرق عن سعر الفائدة الأمريكي
  const usBaseRate = (centralBankRates.US.baseRate.min + centralBankRates.US.baseRate.max) / 2;
  const spreadToUS = Number((baseRate - usBaseRate).toFixed(2));
  
  return {
    country: rateData.country,
    countryEn: rateData.countryEn,
    countryCode: selectedCode,
    currency: rateData.currency,
    currencyCode: rateData.currencyCode,
    centralBank: rateData.centralBank,
    centralBankEn: rateData.centralBankEn,
    centralBankAbbr: rateData.centralBankAbbr,
    year,
    month,
    monthEn,
    meetingDate,
    baseRate,
    previousRate,
    rateChange,
    rateChangePercent,
    decision,
    decisionEn,
    overnightRate,
    lendingRate,
    depositRate,
    interbankRate: rateData.interbankRate,
    interbankRateEn: rateData.interbankRateEn,
    interbankRateValue,
    tenor: selectedTenor.tenor,
    tenorEn: selectedTenor.tenorEn,
    tenorDays: selectedTenor.days,
    reserveRequirement: Number(reserveRequirement.toFixed(1)),
    inflationTarget: Number(inflationTarget.toFixed(1)),
    currentInflation: Number(currentInflation.toFixed(1)),
    realInterestRate,
    spreadToUS,
  };
}

export default { centralBankRates, interestRateTenors, interestRateTypes, generateInterestRateContext };
