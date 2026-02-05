// قاعدة بيانات اقتصادية حقيقية وواقعية للدول العربية والعالمية

export interface CountryEconomicData {
  code: string;
  nameAr: string;
  nameEn: string;
  currency: string;
  currencyCode: string;
  // GDP بالمليار دولار
  gdp: { min: number; max: number; base: number };
  // نمو GDP %
  gdpGrowth: { min: number; max: number; typical: number };
  // GDP للفرد بالدولار
  gdpPerCapita: { min: number; max: number; base: number };
  // التضخم %
  inflation: { min: number; max: number; typical: number };
  // البطالة %
  unemployment: { min: number; max: number; typical: number };
  // الدين العام % من GDP
  debtToGdp: { min: number; max: number; typical: number };
  // سعر الفائدة %
  interestRate: { min: number; max: number; typical: number };
  // الميزان التجاري بالمليار دولار
  tradeBalance: { min: number; max: number; typical: number };
  // التصنيف الائتماني
  creditRatings: string[];
  // إنتاج النفط (ألف برميل/يوم) - للدول المنتجة
  oilProduction?: { min: number; max: number; base: number };
  // إنتاج الغاز (مليار متر مكعب/سنة)
  gasProduction?: { min: number; max: number; base: number };
  // الاحتياطيات الأجنبية بالمليار دولار
  reserves: { min: number; max: number; base: number };
  // عدد السكان بالمليون
  population: { min: number; max: number; base: number };
  // القطاعات الاقتصادية الرئيسية
  sectors: {
    name: string;
    nameEn: string;
    contribution: number; // نسبة المساهمة في GDP
  }[];
}

export const arabCountriesEconomicData: Record<string, CountryEconomicData> = {
  SA: {
    code: 'SA',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    currency: 'ريال سعودي',
    currencyCode: 'SAR',
    gdp: { min: 850, max: 1100, base: 1010 },
    gdpGrowth: { min: -2, max: 8, typical: 3.5 },
    gdpPerCapita: { min: 22000, max: 28000, base: 25000 },
    inflation: { min: 1.5, max: 4, typical: 2.5 },
    unemployment: { min: 10, max: 13, typical: 11 },
    debtToGdp: { min: 20, max: 35, typical: 26 },
    interestRate: { min: 4, max: 6.5, typical: 5.5 },
    tradeBalance: { min: 80, max: 200, typical: 130 },
    creditRatings: ['A', 'A+', 'A-'],
    oilProduction: { min: 9000, max: 11000, base: 10200 },
    gasProduction: { min: 100, max: 120, base: 112 },
    reserves: { min: 400, max: 550, base: 450 },
    population: { min: 34, max: 36, base: 35 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 42 },
      { name: 'الخدمات الحكومية', nameEn: 'Government Services', contribution: 18 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 13 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 10 },
      { name: 'البناء والتشييد', nameEn: 'Construction', contribution: 8 },
      { name: 'المالية', nameEn: 'Finance', contribution: 5 },
      { name: 'أخرى', nameEn: 'Others', contribution: 4 }
    ]
  },
  AE: {
    code: 'AE',
    nameAr: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    currency: 'درهم إماراتي',
    currencyCode: 'AED',
    gdp: { min: 400, max: 520, base: 470 },
    gdpGrowth: { min: 2, max: 7, typical: 4 },
    gdpPerCapita: { min: 42000, max: 50000, base: 46000 },
    inflation: { min: 1, max: 5, typical: 3 },
    unemployment: { min: 2, max: 4, typical: 3 },
    debtToGdp: { min: 35, max: 45, typical: 40 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: 40, max: 80, typical: 60 },
    creditRatings: ['AA', 'AA-', 'Aa2'],
    oilProduction: { min: 2800, max: 3500, base: 3200 },
    gasProduction: { min: 55, max: 65, base: 60 },
    reserves: { min: 100, max: 150, base: 130 },
    population: { min: 9.5, max: 10.5, base: 10 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 30 },
      { name: 'السياحة والضيافة', nameEn: 'Tourism & Hospitality', contribution: 15 },
      { name: 'العقارات', nameEn: 'Real Estate', contribution: 12 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 14 },
      { name: 'المالية', nameEn: 'Finance', contribution: 10 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 9 },
      { name: 'النقل واللوجستيات', nameEn: 'Transport & Logistics', contribution: 6 },
      { name: 'أخرى', nameEn: 'Others', contribution: 4 }
    ]
  },
  EG: {
    code: 'EG',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    currency: 'جنيه مصري',
    currencyCode: 'EGP',
    gdp: { min: 380, max: 480, base: 420 },
    gdpGrowth: { min: 2, max: 6, typical: 4 },
    gdpPerCapita: { min: 3500, max: 4500, base: 4000 },
    inflation: { min: 8, max: 35, typical: 15 },
    unemployment: { min: 7, max: 12, typical: 9 },
    debtToGdp: { min: 85, max: 100, typical: 92 },
    interestRate: { min: 10, max: 22, typical: 18 },
    tradeBalance: { min: -45, max: -30, typical: -38 },
    creditRatings: ['B', 'B-', 'B+'],
    oilProduction: { min: 550, max: 650, base: 600 },
    gasProduction: { min: 60, max: 75, base: 68 },
    reserves: { min: 30, max: 45, base: 35 },
    population: { min: 104, max: 110, base: 107 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 52 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 16 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 11 },
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 8 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 6 },
      { name: 'البناء', nameEn: 'Construction', contribution: 5 },
      { name: 'أخرى', nameEn: 'Others', contribution: 2 }
    ]
  },
  KW: {
    code: 'KW',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    currency: 'دينار كويتي',
    currencyCode: 'KWD',
    gdp: { min: 140, max: 185, base: 165 },
    gdpGrowth: { min: -1, max: 5, typical: 2.5 },
    gdpPerCapita: { min: 32000, max: 42000, base: 37000 },
    inflation: { min: 2, max: 5, typical: 3.5 },
    unemployment: { min: 2, max: 4, typical: 2.5 },
    debtToGdp: { min: 8, max: 15, typical: 10 },
    interestRate: { min: 3, max: 5, typical: 4 },
    tradeBalance: { min: 25, max: 55, typical: 40 },
    creditRatings: ['AA', 'AA-', 'Aa2'],
    oilProduction: { min: 2500, max: 3000, base: 2700 },
    gasProduction: { min: 15, max: 20, base: 18 },
    reserves: { min: 45, max: 55, base: 50 },
    population: { min: 4.2, max: 4.6, base: 4.4 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 55 },
      { name: 'الخدمات المالية', nameEn: 'Financial Services', contribution: 12 },
      { name: 'العقارات', nameEn: 'Real Estate', contribution: 8 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 10 },
      { name: 'الخدمات الحكومية', nameEn: 'Government Services', contribution: 10 },
      { name: 'أخرى', nameEn: 'Others', contribution: 5 }
    ]
  },
  QA: {
    code: 'QA',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    currency: 'ريال قطري',
    currencyCode: 'QAR',
    gdp: { min: 180, max: 230, base: 205 },
    gdpGrowth: { min: 1, max: 6, typical: 3 },
    gdpPerCapita: { min: 60000, max: 85000, base: 72000 },
    inflation: { min: 1, max: 5, typical: 2.5 },
    unemployment: { min: 0.1, max: 0.5, typical: 0.2 },
    debtToGdp: { min: 45, max: 60, typical: 52 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: 35, max: 70, typical: 50 },
    creditRatings: ['AA', 'AA-', 'Aa3'],
    oilProduction: { min: 1400, max: 1700, base: 1550 },
    gasProduction: { min: 170, max: 190, base: 180 },
    reserves: { min: 35, max: 50, base: 42 },
    population: { min: 2.8, max: 3.2, base: 3 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 48 },
      { name: 'الخدمات المالية', nameEn: 'Financial Services', contribution: 14 },
      { name: 'البناء والتشييد', nameEn: 'Construction', contribution: 12 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 8 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 8 },
      { name: 'أخرى', nameEn: 'Others', contribution: 10 }
    ]
  },
  BH: {
    code: 'BH',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    currency: 'دينار بحريني',
    currencyCode: 'BHD',
    gdp: { min: 38, max: 48, base: 44 },
    gdpGrowth: { min: 1, max: 5, typical: 3 },
    gdpPerCapita: { min: 24000, max: 30000, base: 27000 },
    inflation: { min: 0.5, max: 4, typical: 2 },
    unemployment: { min: 4, max: 7, typical: 5 },
    debtToGdp: { min: 100, max: 130, typical: 115 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: -2, max: 3, typical: 0.5 },
    creditRatings: ['B+', 'B', 'B2'],
    oilProduction: { min: 180, max: 220, base: 200 },
    gasProduction: { min: 14, max: 18, base: 16 },
    reserves: { min: 3, max: 6, base: 4.5 },
    population: { min: 1.4, max: 1.6, base: 1.5 },
    sectors: [
      { name: 'الخدمات المالية', nameEn: 'Financial Services', contribution: 32 },
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 18 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 15 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 12 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 10 },
      { name: 'أخرى', nameEn: 'Others', contribution: 13 }
    ]
  },
  OM: {
    code: 'OM',
    nameAr: 'سلطنة عمان',
    nameEn: 'Oman',
    currency: 'ريال عماني',
    currencyCode: 'OMR',
    gdp: { min: 85, max: 110, base: 95 },
    gdpGrowth: { min: 0, max: 5, typical: 2.5 },
    gdpPerCapita: { min: 18000, max: 24000, base: 21000 },
    inflation: { min: 0.5, max: 4, typical: 2 },
    unemployment: { min: 2, max: 5, typical: 3 },
    debtToGdp: { min: 55, max: 75, typical: 65 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: 5, max: 20, typical: 12 },
    creditRatings: ['BB', 'BB-', 'Ba3'],
    oilProduction: { min: 950, max: 1100, base: 1020 },
    gasProduction: { min: 35, max: 45, base: 40 },
    reserves: { min: 15, max: 25, base: 20 },
    population: { min: 4.8, max: 5.4, base: 5.1 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 35 },
      { name: 'الخدمات', nameEn: 'Services', contribution: 25 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 12 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 8 },
      { name: 'الزراعة والصيد', nameEn: 'Agriculture & Fishing', contribution: 5 },
      { name: 'أخرى', nameEn: 'Others', contribution: 15 }
    ]
  },
  JO: {
    code: 'JO',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    currency: 'دينار أردني',
    currencyCode: 'JOD',
    gdp: { min: 44, max: 55, base: 48 },
    gdpGrowth: { min: 1, max: 4, typical: 2.5 },
    gdpPerCapita: { min: 4000, max: 5000, base: 4500 },
    inflation: { min: 1, max: 5, typical: 3 },
    unemployment: { min: 18, max: 25, typical: 22 },
    debtToGdp: { min: 85, max: 110, typical: 95 },
    interestRate: { min: 5, max: 8, typical: 7 },
    tradeBalance: { min: -12, max: -8, typical: -10 },
    creditRatings: ['B+', 'B', 'B1'],
    reserves: { min: 15, max: 20, base: 17 },
    population: { min: 10.5, max: 11.5, base: 11 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 65 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 18 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 5 },
      { name: 'التعدين', nameEn: 'Mining', contribution: 5 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 5 },
      { name: 'أخرى', nameEn: 'Others', contribution: 2 }
    ]
  },
  LB: {
    code: 'LB',
    nameAr: 'الجمهورية اللبنانية',
    nameEn: 'Lebanon',
    currency: 'ليرة لبنانية',
    currencyCode: 'LBP',
    gdp: { min: 18, max: 25, base: 21 },
    gdpGrowth: { min: -25, max: 2, typical: -5 },
    gdpPerCapita: { min: 2500, max: 4000, base: 3200 },
    inflation: { min: 80, max: 250, typical: 150 },
    unemployment: { min: 25, max: 35, typical: 30 },
    debtToGdp: { min: 150, max: 200, typical: 175 },
    interestRate: { min: 15, max: 25, typical: 20 },
    tradeBalance: { min: -15, max: -10, typical: -12 },
    creditRatings: ['D', 'C', 'SD'],
    reserves: { min: 8, max: 15, base: 10 },
    population: { min: 5.5, max: 6.5, base: 6 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 70 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 12 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 6 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 8 },
      { name: 'أخرى', nameEn: 'Others', contribution: 4 }
    ]
  },
  MA: {
    code: 'MA',
    nameAr: 'المملكة المغربية',
    nameEn: 'Morocco',
    currency: 'درهم مغربي',
    currencyCode: 'MAD',
    gdp: { min: 130, max: 150, base: 140 },
    gdpGrowth: { min: 1, max: 5, typical: 3 },
    gdpPerCapita: { min: 3500, max: 4500, base: 4000 },
    inflation: { min: 1, max: 7, typical: 4 },
    unemployment: { min: 10, max: 14, typical: 12 },
    debtToGdp: { min: 70, max: 85, typical: 78 },
    interestRate: { min: 2, max: 4, typical: 3 },
    tradeBalance: { min: -25, max: -15, typical: -20 },
    creditRatings: ['BB+', 'BB', 'Ba1'],
    reserves: { min: 30, max: 40, base: 35 },
    population: { min: 36, max: 38, base: 37 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 52 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 20 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 14 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 8 },
      { name: 'التعدين', nameEn: 'Mining', contribution: 4 },
      { name: 'أخرى', nameEn: 'Others', contribution: 2 }
    ]
  },
  IQ: {
    code: 'IQ',
    nameAr: 'جمهورية العراق',
    nameEn: 'Iraq',
    currency: 'دينار عراقي',
    currencyCode: 'IQD',
    gdp: { min: 200, max: 280, base: 240 },
    gdpGrowth: { min: -5, max: 8, typical: 3 },
    gdpPerCapita: { min: 5000, max: 7000, base: 6000 },
    inflation: { min: 2, max: 8, typical: 5 },
    unemployment: { min: 12, max: 18, typical: 15 },
    debtToGdp: { min: 45, max: 65, typical: 55 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: 20, max: 60, typical: 40 },
    creditRatings: ['B-', 'B', 'Caa1'],
    oilProduction: { min: 4000, max: 4800, base: 4400 },
    gasProduction: { min: 10, max: 15, base: 12 },
    reserves: { min: 80, max: 100, base: 90 },
    population: { min: 42, max: 45, base: 43 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 60 },
      { name: 'الخدمات الحكومية', nameEn: 'Government Services', contribution: 15 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 8 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 5 },
      { name: 'التجارة', nameEn: 'Trade', contribution: 7 },
      { name: 'أخرى', nameEn: 'Others', contribution: 5 }
    ]
  },
  DZ: {
    code: 'DZ',
    nameAr: 'الجمهورية الجزائرية',
    nameEn: 'Algeria',
    currency: 'دينار جزائري',
    currencyCode: 'DZD',
    gdp: { min: 170, max: 210, base: 190 },
    gdpGrowth: { min: 1, max: 5, typical: 3 },
    gdpPerCapita: { min: 3800, max: 4800, base: 4300 },
    inflation: { min: 5, max: 12, typical: 8 },
    unemployment: { min: 11, max: 16, typical: 13 },
    debtToGdp: { min: 50, max: 70, typical: 60 },
    interestRate: { min: 3, max: 5, typical: 4 },
    tradeBalance: { min: -8, max: 5, typical: -2 },
    creditRatings: ['B', 'B-', 'B1'],
    oilProduction: { min: 900, max: 1100, base: 1000 },
    gasProduction: { min: 80, max: 100, base: 90 },
    reserves: { min: 40, max: 60, base: 50 },
    population: { min: 44, max: 47, base: 45 },
    sectors: [
      { name: 'النفط والغاز', nameEn: 'Oil & Gas', contribution: 35 },
      { name: 'الخدمات', nameEn: 'Services', contribution: 30 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 12 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 12 },
      { name: 'البناء', nameEn: 'Construction', contribution: 8 },
      { name: 'أخرى', nameEn: 'Others', contribution: 3 }
    ]
  },
  TN: {
    code: 'TN',
    nameAr: 'الجمهورية التونسية',
    nameEn: 'Tunisia',
    currency: 'دينار تونسي',
    currencyCode: 'TND',
    gdp: { min: 42, max: 52, base: 47 },
    gdpGrowth: { min: 0, max: 4, typical: 2 },
    gdpPerCapita: { min: 3500, max: 4500, base: 4000 },
    inflation: { min: 6, max: 12, typical: 9 },
    unemployment: { min: 15, max: 20, typical: 17 },
    debtToGdp: { min: 75, max: 95, typical: 85 },
    interestRate: { min: 6, max: 9, typical: 8 },
    tradeBalance: { min: -8, max: -4, typical: -6 },
    creditRatings: ['B-', 'CCC+', 'Caa2'],
    reserves: { min: 7, max: 12, base: 9 },
    population: { min: 11.8, max: 12.5, base: 12 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 62 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 18 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 10 },
      { name: 'السياحة', nameEn: 'Tourism', contribution: 7 },
      { name: 'أخرى', nameEn: 'Others', contribution: 3 }
    ]
  }
};

// بيانات اقتصادية للدول العالمية الكبرى للمقارنة
export const worldCountriesEconomicData: Record<string, CountryEconomicData> = {
  US: {
    code: 'US',
    nameAr: 'الولايات المتحدة الأمريكية',
    nameEn: 'United States',
    currency: 'دولار أمريكي',
    currencyCode: 'USD',
    gdp: { min: 25000, max: 28000, base: 26500 },
    gdpGrowth: { min: 1, max: 4, typical: 2.5 },
    gdpPerCapita: { min: 75000, max: 85000, base: 80000 },
    inflation: { min: 2, max: 8, typical: 4 },
    unemployment: { min: 3.5, max: 6, typical: 4 },
    debtToGdp: { min: 120, max: 135, typical: 128 },
    interestRate: { min: 4, max: 6, typical: 5.25 },
    tradeBalance: { min: -900, max: -700, typical: -800 },
    creditRatings: ['AA+', 'AAA', 'Aaa'],
    oilProduction: { min: 11000, max: 13000, base: 12000 },
    gasProduction: { min: 900, max: 1000, base: 950 },
    reserves: { min: 35, max: 50, base: 42 },
    population: { min: 330, max: 340, base: 335 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 78 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 11 },
      { name: 'التكنولوجيا', nameEn: 'Technology', contribution: 8 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 1 },
      { name: 'أخرى', nameEn: 'Others', contribution: 2 }
    ]
  },
  CN: {
    code: 'CN',
    nameAr: 'جمهورية الصين الشعبية',
    nameEn: 'China',
    currency: 'يوان صيني',
    currencyCode: 'CNY',
    gdp: { min: 17000, max: 20000, base: 18500 },
    gdpGrowth: { min: 4, max: 8, typical: 5.5 },
    gdpPerCapita: { min: 12000, max: 15000, base: 13000 },
    inflation: { min: 0, max: 3, typical: 1.5 },
    unemployment: { min: 4, max: 6, typical: 5 },
    debtToGdp: { min: 70, max: 85, typical: 77 },
    interestRate: { min: 3, max: 5, typical: 4 },
    tradeBalance: { min: 600, max: 900, typical: 750 },
    creditRatings: ['A+', 'A1', 'A+'],
    oilProduction: { min: 4000, max: 4500, base: 4200 },
    gasProduction: { min: 200, max: 250, base: 220 },
    reserves: { min: 3000, max: 3500, base: 3200 },
    population: { min: 1400, max: 1420, base: 1410 },
    sectors: [
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 39 },
      { name: 'الخدمات', nameEn: 'Services', contribution: 54 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 7 }
    ]
  },
  DE: {
    code: 'DE',
    nameAr: 'جمهورية ألمانيا الاتحادية',
    nameEn: 'Germany',
    currency: 'يورو',
    currencyCode: 'EUR',
    gdp: { min: 4200, max: 4600, base: 4400 },
    gdpGrowth: { min: -1, max: 3, typical: 1.5 },
    gdpPerCapita: { min: 50000, max: 56000, base: 53000 },
    inflation: { min: 2, max: 8, typical: 4 },
    unemployment: { min: 3, max: 6, typical: 4 },
    debtToGdp: { min: 65, max: 75, typical: 70 },
    interestRate: { min: 3, max: 5, typical: 4 },
    tradeBalance: { min: 180, max: 280, typical: 230 },
    creditRatings: ['AAA', 'Aaa', 'AAA'],
    reserves: { min: 200, max: 250, base: 225 },
    population: { min: 83, max: 85, base: 84 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 69 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 27 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 1 },
      { name: 'أخرى', nameEn: 'Others', contribution: 3 }
    ]
  },
  JP: {
    code: 'JP',
    nameAr: 'اليابان',
    nameEn: 'Japan',
    currency: 'ين ياباني',
    currencyCode: 'JPY',
    gdp: { min: 4200, max: 5000, base: 4500 },
    gdpGrowth: { min: -1, max: 3, typical: 1 },
    gdpPerCapita: { min: 35000, max: 42000, base: 38000 },
    inflation: { min: 0, max: 4, typical: 2 },
    unemployment: { min: 2, max: 4, typical: 2.5 },
    debtToGdp: { min: 250, max: 270, typical: 260 },
    interestRate: { min: -0.1, max: 0.5, typical: 0.1 },
    tradeBalance: { min: -60, max: 20, typical: -20 },
    creditRatings: ['A+', 'A1', 'A'],
    reserves: { min: 1200, max: 1400, base: 1300 },
    population: { min: 124, max: 126, base: 125 },
    sectors: [
      { name: 'الخدمات', nameEn: 'Services', contribution: 72 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 26 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 1 },
      { name: 'أخرى', nameEn: 'Others', contribution: 1 }
    ]
  },
  GB: {
    code: 'GB',
    nameAr: 'المملكة المتحدة',
    nameEn: 'United Kingdom',
    currency: 'جنيه استرليني',
    currencyCode: 'GBP',
    gdp: { min: 3100, max: 3500, base: 3300 },
    gdpGrowth: { min: 0, max: 3, typical: 1.5 },
    gdpPerCapita: { min: 45000, max: 52000, base: 48000 },
    inflation: { min: 2, max: 10, typical: 5 },
    unemployment: { min: 3.5, max: 5, typical: 4 },
    debtToGdp: { min: 95, max: 110, typical: 102 },
    interestRate: { min: 4, max: 6, typical: 5 },
    tradeBalance: { min: -200, max: -150, typical: -180 },
    creditRatings: ['AA', 'Aa3', 'AA-'],
    oilProduction: { min: 800, max: 1000, base: 900 },
    gasProduction: { min: 35, max: 45, base: 40 },
    reserves: { min: 150, max: 200, base: 175 },
    population: { min: 67, max: 69, base: 68 },
    sectors: [
      { name: 'الخدمات المالية', nameEn: 'Financial Services', contribution: 75 },
      { name: 'الصناعة', nameEn: 'Manufacturing', contribution: 18 },
      { name: 'الزراعة', nameEn: 'Agriculture', contribution: 1 },
      { name: 'أخرى', nameEn: 'Others', contribution: 6 }
    ]
  }
};

// دمج جميع البيانات
export const allCountriesEconomicData: Record<string, CountryEconomicData> = {
  ...arabCountriesEconomicData,
  ...worldCountriesEconomicData
};

// سياق البيانات الاقتصادية
export interface EconomicContext {
  countryCode: string;
  countryNameAr: string;
  countryNameEn: string;
  year: number;
  quarter: number;
  gdp: number;
  gdpGrowth: number;
  gdpPerCapita: number;
  inflation: number;
  unemployment: number;
  debtToGdp: number;
  interestRate: number;
  tradeBalance: number;
  creditRating: string;
  oilProduction?: number;
  gasProduction?: number;
  reserves: number;
  population: number;
  currency: string;
  currencyCode: string;
  sectors: { name: string; nameEn: string; contribution: number; value: number }[];
}

// دالة لتوليد رقم عشوائي ضمن نطاق مع انحراف طبيعي
function generateWithVariation(base: number, minVal: number, maxVal: number, variation: number = 0.1): number {
  const randomFactor = 1 + (Math.random() - 0.5) * variation * 2;
  let result = base * randomFactor;
  result = Math.max(minVal, Math.min(maxVal, result));
  return result;
}

// دالة لتوليد سياق اقتصادي كامل لدولة
export function generateEconomicContext(countryCode?: string, _language: 'ar' | 'en' = 'ar'): EconomicContext {
  // اختيار دولة عشوائية إذا لم تحدد
  const countries = Object.keys(allCountriesEconomicData);
  const selectedCode = countryCode && allCountriesEconomicData[countryCode] 
    ? countryCode 
    : countries[Math.floor(Math.random() * countries.length)];
  
  const data = allCountriesEconomicData[selectedCode];
  
  // توليد السنة والربع
  const currentYear = new Date().getFullYear();
  const year = currentYear - Math.floor(Math.random() * 5); // آخر 5 سنوات
  const quarter = Math.floor(Math.random() * 4) + 1;
  
  // توليد GDP مع تباين طبيعي
  const gdp = Math.round(generateWithVariation(data.gdp.base, data.gdp.min, data.gdp.max, 0.08) * 10) / 10;
  
  // توليد نمو GDP
  const gdpGrowth = Math.round(generateWithVariation(data.gdpGrowth.typical, data.gdpGrowth.min, data.gdpGrowth.max, 0.3) * 10) / 10;
  
  // GDP للفرد
  const gdpPerCapita = Math.round(generateWithVariation(data.gdpPerCapita.base, data.gdpPerCapita.min, data.gdpPerCapita.max, 0.05));
  
  // التضخم
  const inflation = Math.round(generateWithVariation(data.inflation.typical, data.inflation.min, data.inflation.max, 0.25) * 10) / 10;
  
  // البطالة
  const unemployment = Math.round(generateWithVariation(data.unemployment.typical, data.unemployment.min, data.unemployment.max, 0.15) * 10) / 10;
  
  // الدين العام
  const debtToGdp = Math.round(generateWithVariation(data.debtToGdp.typical, data.debtToGdp.min, data.debtToGdp.max, 0.1) * 10) / 10;
  
  // سعر الفائدة
  const interestRate = Math.round(generateWithVariation(data.interestRate.typical, data.interestRate.min, data.interestRate.max, 0.2) * 100) / 100;
  
  // الميزان التجاري
  const tradeBalance = Math.round(generateWithVariation(data.tradeBalance.typical, data.tradeBalance.min, data.tradeBalance.max, 0.2) * 10) / 10;
  
  // التصنيف الائتماني
  const creditRating = data.creditRatings[Math.floor(Math.random() * data.creditRatings.length)];
  
  // إنتاج النفط (إن وجد)
  const oilProduction = data.oilProduction 
    ? Math.round(generateWithVariation(data.oilProduction.base, data.oilProduction.min, data.oilProduction.max, 0.05))
    : undefined;
  
  // إنتاج الغاز (إن وجد)
  const gasProduction = data.gasProduction
    ? Math.round(generateWithVariation(data.gasProduction.base, data.gasProduction.min, data.gasProduction.max, 0.05) * 10) / 10
    : undefined;
  
  // الاحتياطيات
  const reserves = Math.round(generateWithVariation(data.reserves.base, data.reserves.min, data.reserves.max, 0.1) * 10) / 10;
  
  // السكان
  const population = Math.round(generateWithVariation(data.population.base, data.population.min, data.population.max, 0.02) * 10) / 10;
  
  // القطاعات مع حساب القيمة
  const sectors = data.sectors.map(sector => ({
    ...sector,
    value: Math.round(gdp * sector.contribution / 100 * 10) / 10
  }));
  
  return {
    countryCode: selectedCode,
    countryNameAr: data.nameAr,
    countryNameEn: data.nameEn,
    year,
    quarter,
    gdp,
    gdpGrowth,
    gdpPerCapita,
    inflation,
    unemployment,
    debtToGdp,
    interestRate,
    tradeBalance,
    creditRating,
    oilProduction,
    gasProduction,
    reserves,
    population,
    currency: data.currency,
    currencyCode: data.currencyCode,
    sectors
  };
}

// دالة لتوليد بيانات ربع سنوية متسلسلة
export function generateQuarterlyEconomicData(countryCode: string, quarters: number = 8): EconomicContext[] {
  const data: EconomicContext[] = [];
  const currentYear = new Date().getFullYear();
  const currentQuarter = Math.ceil((new Date().getMonth() + 1) / 3);
  
  // البدء من الربع الحالي والرجوع للخلف
  let year = currentYear;
  let quarter = currentQuarter;
  
  // توليد أول سياق
  let prevContext = generateEconomicContext(countryCode);
  prevContext.year = year;
  prevContext.quarter = quarter;
  data.push(prevContext);
  
  // توليد الأرباع التالية مع تغييرات منطقية
  for (let i = 1; i < quarters; i++) {
    quarter--;
    if (quarter === 0) {
      quarter = 4;
      year--;
    }
    
    // تغيير GDP بشكل تدريجي (±2%)
    const gdpChange = 1 + (Math.random() - 0.5) * 0.04;
    const newGdp = Math.round(prevContext.gdp * gdpChange * 10) / 10;
    
    // تغيير المؤشرات الأخرى بشكل منطقي
    const context: EconomicContext = {
      ...prevContext,
      year,
      quarter,
      gdp: newGdp,
      gdpGrowth: Math.round((Math.random() - 0.3) * 8 * 10) / 10,
      inflation: Math.max(0, prevContext.inflation + (Math.random() - 0.5) * 2),
      unemployment: Math.max(0, prevContext.unemployment + (Math.random() - 0.5) * 1),
      interestRate: Math.max(0, prevContext.interestRate + (Math.random() - 0.5) * 0.5),
      reserves: Math.round((prevContext.reserves + (Math.random() - 0.5) * 5) * 10) / 10
    };
    
    data.push(context);
    prevContext = context;
  }
  
  return data.reverse(); // ترتيب من الأقدم للأحدث
}

// تصدير أسماء الدول للاختيار
export const getArabCountriesList = (): { code: string; nameAr: string; nameEn: string }[] => {
  return Object.values(arabCountriesEconomicData).map(c => ({
    code: c.code,
    nameAr: c.nameAr,
    nameEn: c.nameEn
  }));
};

export const getWorldCountriesList = (): { code: string; nameAr: string; nameEn: string }[] => {
  return Object.values(worldCountriesEconomicData).map(c => ({
    code: c.code,
    nameAr: c.nameAr,
    nameEn: c.nameEn
  }));
};
