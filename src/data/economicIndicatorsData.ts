// قاعدة بيانات المؤشرات الاقتصادية الحقيقية والمترابطة

export interface EconomicIndicatorData {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  // مؤشرات PMI
  pmiManufacturing: { min: number; max: number };
  pmiServices: { min: number; max: number };
  pmiComposite: { min: number; max: number };
  // مؤشرات الثقة
  consumerConfidence: { min: number; max: number };
  businessConfidence: { min: number; max: number };
  // مؤشرات العمل
  unemploymentRate: { min: number; max: number };
  laborForceParticipation: { min: number; max: number };
  jobsCreated: { min: number; max: number };
  // مؤشرات التضخم
  cpi: { min: number; max: number };
  ppi: { min: number; max: number };
  coreInflation: { min: number; max: number };
  // مؤشرات الإنتاج
  industrialProduction: { min: number; max: number };
  capacityUtilization: { min: number; max: number };
  // مؤشرات التجارة
  retailSales: { min: number; max: number };
  exportsGrowth: { min: number; max: number };
  importsGrowth: { min: number; max: number };
  // مؤشرات العقارات
  housingStarts: { min: number; max: number };
  buildingPermits: { min: number; max: number };
  housePriceIndex: { min: number; max: number };
  // مؤشرات مالية
  m2MoneySupply: { min: number; max: number };
  creditGrowth: { min: number; max: number };
  // مؤشرات أخرى
  currentAccount: { min: number; max: number };
  fdi: { min: number; max: number };
  // تصنيف الاقتصاد
  economyType: 'developing' | 'emerging' | 'developed' | 'oil-based';
  economyStatus: 'expanding' | 'stable' | 'contracting';
}

export const economicIndicatorsDatabase: Record<string, EconomicIndicatorData> = {
  SA: {
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    countryCode: 'SA',
    currency: 'ريال سعودي',
    currencyCode: 'SAR',
    pmiManufacturing: { min: 54, max: 58 },
    pmiServices: { min: 55, max: 60 },
    pmiComposite: { min: 54, max: 59 },
    consumerConfidence: { min: 105, max: 120 },
    businessConfidence: { min: 52, max: 58 },
    unemploymentRate: { min: 10.5, max: 12.5 },
    laborForceParticipation: { min: 51, max: 55 },
    jobsCreated: { min: 15000, max: 45000 },
    cpi: { min: 1.8, max: 3.2 },
    ppi: { min: 2.5, max: 5.5 },
    coreInflation: { min: 1.5, max: 2.8 },
    industrialProduction: { min: 2, max: 6 },
    capacityUtilization: { min: 72, max: 82 },
    retailSales: { min: 3, max: 8 },
    exportsGrowth: { min: -5, max: 15 },
    importsGrowth: { min: 2, max: 12 },
    housingStarts: { min: 8000, max: 15000 },
    buildingPermits: { min: 12000, max: 22000 },
    housePriceIndex: { min: 0.5, max: 4 },
    m2MoneySupply: { min: 5, max: 10 },
    creditGrowth: { min: 8, max: 14 },
    currentAccount: { min: 5, max: 12 },
    fdi: { min: 3, max: 8 },
    economyType: 'oil-based',
    economyStatus: 'expanding'
  },
  AE: {
    country: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryCode: 'AE',
    currency: 'درهم إماراتي',
    currencyCode: 'AED',
    pmiManufacturing: { min: 55, max: 59 },
    pmiServices: { min: 56, max: 62 },
    pmiComposite: { min: 55, max: 60 },
    consumerConfidence: { min: 110, max: 130 },
    businessConfidence: { min: 55, max: 62 },
    unemploymentRate: { min: 2.5, max: 4 },
    laborForceParticipation: { min: 78, max: 83 },
    jobsCreated: { min: 8000, max: 20000 },
    cpi: { min: 2, max: 4 },
    ppi: { min: 3, max: 6 },
    coreInflation: { min: 1.8, max: 3.5 },
    industrialProduction: { min: 3, max: 8 },
    capacityUtilization: { min: 75, max: 85 },
    retailSales: { min: 4, max: 10 },
    exportsGrowth: { min: 2, max: 18 },
    importsGrowth: { min: 3, max: 15 },
    housingStarts: { min: 5000, max: 12000 },
    buildingPermits: { min: 8000, max: 18000 },
    housePriceIndex: { min: -2, max: 8 },
    m2MoneySupply: { min: 6, max: 12 },
    creditGrowth: { min: 5, max: 12 },
    currentAccount: { min: 8, max: 15 },
    fdi: { min: 10, max: 20 },
    economyType: 'oil-based',
    economyStatus: 'expanding'
  },
  EG: {
    country: 'جمهورية مصر العربية',
    countryEn: 'Egypt',
    countryCode: 'EG',
    currency: 'جنيه مصري',
    currencyCode: 'EGP',
    pmiManufacturing: { min: 47, max: 52 },
    pmiServices: { min: 48, max: 53 },
    pmiComposite: { min: 47, max: 52 },
    consumerConfidence: { min: 75, max: 95 },
    businessConfidence: { min: 45, max: 52 },
    unemploymentRate: { min: 7, max: 10 },
    laborForceParticipation: { min: 42, max: 48 },
    jobsCreated: { min: 50000, max: 150000 },
    cpi: { min: 25, max: 38 },
    ppi: { min: 20, max: 35 },
    coreInflation: { min: 22, max: 35 },
    industrialProduction: { min: -2, max: 5 },
    capacityUtilization: { min: 58, max: 72 },
    retailSales: { min: -5, max: 8 },
    exportsGrowth: { min: -8, max: 12 },
    importsGrowth: { min: -15, max: 5 },
    housingStarts: { min: 25000, max: 50000 },
    buildingPermits: { min: 35000, max: 65000 },
    housePriceIndex: { min: 15, max: 35 },
    m2MoneySupply: { min: 18, max: 28 },
    creditGrowth: { min: 15, max: 25 },
    currentAccount: { min: -4, max: -1 },
    fdi: { min: 2, max: 6 },
    economyType: 'emerging',
    economyStatus: 'stable'
  },
  KW: {
    country: 'دولة الكويت',
    countryEn: 'Kuwait',
    countryCode: 'KW',
    currency: 'دينار كويتي',
    currencyCode: 'KWD',
    pmiManufacturing: { min: 51, max: 55 },
    pmiServices: { min: 52, max: 56 },
    pmiComposite: { min: 51, max: 55 },
    consumerConfidence: { min: 100, max: 115 },
    businessConfidence: { min: 50, max: 55 },
    unemploymentRate: { min: 2, max: 3.5 },
    laborForceParticipation: { min: 68, max: 74 },
    jobsCreated: { min: 2000, max: 6000 },
    cpi: { min: 2.5, max: 4.5 },
    ppi: { min: 3, max: 6 },
    coreInflation: { min: 2, max: 4 },
    industrialProduction: { min: 1, max: 5 },
    capacityUtilization: { min: 68, max: 78 },
    retailSales: { min: 2, max: 7 },
    exportsGrowth: { min: -10, max: 20 },
    importsGrowth: { min: 2, max: 10 },
    housingStarts: { min: 1500, max: 4000 },
    buildingPermits: { min: 2500, max: 6000 },
    housePriceIndex: { min: -1, max: 5 },
    m2MoneySupply: { min: 3, max: 8 },
    creditGrowth: { min: 4, max: 10 },
    currentAccount: { min: 15, max: 30 },
    fdi: { min: 0.5, max: 3 },
    economyType: 'oil-based',
    economyStatus: 'stable'
  },
  QA: {
    country: 'دولة قطر',
    countryEn: 'Qatar',
    countryCode: 'QA',
    currency: 'ريال قطري',
    currencyCode: 'QAR',
    pmiManufacturing: { min: 52, max: 57 },
    pmiServices: { min: 54, max: 59 },
    pmiComposite: { min: 53, max: 58 },
    consumerConfidence: { min: 108, max: 125 },
    businessConfidence: { min: 53, max: 60 },
    unemploymentRate: { min: 0.1, max: 0.5 },
    laborForceParticipation: { min: 85, max: 90 },
    jobsCreated: { min: 3000, max: 8000 },
    cpi: { min: 2, max: 4 },
    ppi: { min: 2.5, max: 5 },
    coreInflation: { min: 1.5, max: 3.5 },
    industrialProduction: { min: 2, max: 7 },
    capacityUtilization: { min: 75, max: 85 },
    retailSales: { min: 3, max: 9 },
    exportsGrowth: { min: -5, max: 25 },
    importsGrowth: { min: 2, max: 12 },
    housingStarts: { min: 2000, max: 5000 },
    buildingPermits: { min: 3500, max: 8000 },
    housePriceIndex: { min: -3, max: 6 },
    m2MoneySupply: { min: 4, max: 10 },
    creditGrowth: { min: 5, max: 12 },
    currentAccount: { min: 10, max: 25 },
    fdi: { min: 1, max: 5 },
    economyType: 'oil-based',
    economyStatus: 'expanding'
  },
  BH: {
    country: 'مملكة البحرين',
    countryEn: 'Bahrain',
    countryCode: 'BH',
    currency: 'دينار بحريني',
    currencyCode: 'BHD',
    pmiManufacturing: { min: 50, max: 54 },
    pmiServices: { min: 51, max: 55 },
    pmiComposite: { min: 50, max: 54 },
    consumerConfidence: { min: 95, max: 110 },
    businessConfidence: { min: 48, max: 54 },
    unemploymentRate: { min: 4, max: 6 },
    laborForceParticipation: { min: 68, max: 74 },
    jobsCreated: { min: 1000, max: 3000 },
    cpi: { min: 1, max: 3 },
    ppi: { min: 1.5, max: 4 },
    coreInflation: { min: 0.8, max: 2.5 },
    industrialProduction: { min: 0, max: 4 },
    capacityUtilization: { min: 65, max: 75 },
    retailSales: { min: 1, max: 5 },
    exportsGrowth: { min: -8, max: 15 },
    importsGrowth: { min: 1, max: 8 },
    housingStarts: { min: 800, max: 2000 },
    buildingPermits: { min: 1200, max: 3000 },
    housePriceIndex: { min: -2, max: 4 },
    m2MoneySupply: { min: 3, max: 7 },
    creditGrowth: { min: 3, max: 8 },
    currentAccount: { min: -2, max: 5 },
    fdi: { min: 1, max: 4 },
    economyType: 'oil-based',
    economyStatus: 'stable'
  },
  OM: {
    country: 'سلطنة عمان',
    countryEn: 'Oman',
    countryCode: 'OM',
    currency: 'ريال عماني',
    currencyCode: 'OMR',
    pmiManufacturing: { min: 50, max: 54 },
    pmiServices: { min: 51, max: 55 },
    pmiComposite: { min: 50, max: 54 },
    consumerConfidence: { min: 92, max: 108 },
    businessConfidence: { min: 48, max: 53 },
    unemploymentRate: { min: 2, max: 4 },
    laborForceParticipation: { min: 62, max: 68 },
    jobsCreated: { min: 2000, max: 5000 },
    cpi: { min: 0.5, max: 2.5 },
    ppi: { min: 1, max: 4 },
    coreInflation: { min: 0.3, max: 2 },
    industrialProduction: { min: 0, max: 4 },
    capacityUtilization: { min: 62, max: 72 },
    retailSales: { min: 1, max: 5 },
    exportsGrowth: { min: -10, max: 18 },
    importsGrowth: { min: 0, max: 8 },
    housingStarts: { min: 1500, max: 3500 },
    buildingPermits: { min: 2200, max: 5000 },
    housePriceIndex: { min: -3, max: 3 },
    m2MoneySupply: { min: 2, max: 6 },
    creditGrowth: { min: 2, max: 7 },
    currentAccount: { min: -5, max: 5 },
    fdi: { min: 1, max: 4 },
    economyType: 'oil-based',
    economyStatus: 'stable'
  },
  JO: {
    country: 'المملكة الأردنية الهاشمية',
    countryEn: 'Jordan',
    countryCode: 'JO',
    currency: 'دينار أردني',
    currencyCode: 'JOD',
    pmiManufacturing: { min: 48, max: 52 },
    pmiServices: { min: 49, max: 53 },
    pmiComposite: { min: 48, max: 52 },
    consumerConfidence: { min: 70, max: 88 },
    businessConfidence: { min: 45, max: 52 },
    unemploymentRate: { min: 21, max: 25 },
    laborForceParticipation: { min: 33, max: 38 },
    jobsCreated: { min: 5000, max: 15000 },
    cpi: { min: 2, max: 5 },
    ppi: { min: 2.5, max: 6 },
    coreInflation: { min: 1.8, max: 4.5 },
    industrialProduction: { min: -2, max: 4 },
    capacityUtilization: { min: 55, max: 68 },
    retailSales: { min: -2, max: 5 },
    exportsGrowth: { min: -5, max: 10 },
    importsGrowth: { min: -3, max: 8 },
    housingStarts: { min: 3000, max: 7000 },
    buildingPermits: { min: 5000, max: 10000 },
    housePriceIndex: { min: -1, max: 5 },
    m2MoneySupply: { min: 3, max: 8 },
    creditGrowth: { min: 4, max: 10 },
    currentAccount: { min: -8, max: -3 },
    fdi: { min: 1, max: 4 },
    economyType: 'emerging',
    economyStatus: 'stable'
  },
  MA: {
    country: 'المملكة المغربية',
    countryEn: 'Morocco',
    countryCode: 'MA',
    currency: 'درهم مغربي',
    currencyCode: 'MAD',
    pmiManufacturing: { min: 49, max: 53 },
    pmiServices: { min: 50, max: 54 },
    pmiComposite: { min: 49, max: 53 },
    consumerConfidence: { min: 72, max: 90 },
    businessConfidence: { min: 46, max: 53 },
    unemploymentRate: { min: 10, max: 14 },
    laborForceParticipation: { min: 44, max: 50 },
    jobsCreated: { min: 20000, max: 60000 },
    cpi: { min: 3, max: 7 },
    ppi: { min: 4, max: 8 },
    coreInflation: { min: 2.5, max: 6 },
    industrialProduction: { min: 0, max: 5 },
    capacityUtilization: { min: 62, max: 74 },
    retailSales: { min: 1, max: 6 },
    exportsGrowth: { min: -3, max: 12 },
    importsGrowth: { min: 0, max: 10 },
    housingStarts: { min: 8000, max: 18000 },
    buildingPermits: { min: 12000, max: 25000 },
    housePriceIndex: { min: 0, max: 5 },
    m2MoneySupply: { min: 4, max: 9 },
    creditGrowth: { min: 3, max: 8 },
    currentAccount: { min: -5, max: -1 },
    fdi: { min: 2, max: 5 },
    economyType: 'emerging',
    economyStatus: 'stable'
  },
  US: {
    country: 'الولايات المتحدة الأمريكية',
    countryEn: 'United States',
    countryCode: 'US',
    currency: 'دولار أمريكي',
    currencyCode: 'USD',
    pmiManufacturing: { min: 48, max: 54 },
    pmiServices: { min: 50, max: 56 },
    pmiComposite: { min: 49, max: 55 },
    consumerConfidence: { min: 95, max: 115 },
    businessConfidence: { min: 48, max: 55 },
    unemploymentRate: { min: 3.5, max: 5 },
    laborForceParticipation: { min: 62, max: 64 },
    jobsCreated: { min: 150000, max: 350000 },
    cpi: { min: 2.5, max: 5 },
    ppi: { min: 2, max: 6 },
    coreInflation: { min: 2.8, max: 4.5 },
    industrialProduction: { min: -1, max: 4 },
    capacityUtilization: { min: 76, max: 82 },
    retailSales: { min: 2, max: 7 },
    exportsGrowth: { min: -2, max: 8 },
    importsGrowth: { min: 0, max: 10 },
    housingStarts: { min: 1200000, max: 1700000 },
    buildingPermits: { min: 1300000, max: 1800000 },
    housePriceIndex: { min: 2, max: 8 },
    m2MoneySupply: { min: 3, max: 8 },
    creditGrowth: { min: 4, max: 10 },
    currentAccount: { min: -4, max: -2 },
    fdi: { min: 2, max: 5 },
    economyType: 'developed',
    economyStatus: 'expanding'
  },
  GB: {
    country: 'المملكة المتحدة',
    countryEn: 'United Kingdom',
    countryCode: 'GB',
    currency: 'جنيه إسترليني',
    currencyCode: 'GBP',
    pmiManufacturing: { min: 45, max: 52 },
    pmiServices: { min: 48, max: 55 },
    pmiComposite: { min: 47, max: 54 },
    consumerConfidence: { min: -25, max: -5 },
    businessConfidence: { min: 42, max: 52 },
    unemploymentRate: { min: 3.8, max: 5 },
    laborForceParticipation: { min: 78, max: 82 },
    jobsCreated: { min: 50000, max: 150000 },
    cpi: { min: 3.5, max: 7 },
    ppi: { min: 3, max: 8 },
    coreInflation: { min: 3, max: 6.5 },
    industrialProduction: { min: -2, max: 3 },
    capacityUtilization: { min: 74, max: 82 },
    retailSales: { min: -1, max: 5 },
    exportsGrowth: { min: -3, max: 6 },
    importsGrowth: { min: -2, max: 7 },
    housingStarts: { min: 150000, max: 250000 },
    buildingPermits: { min: 180000, max: 280000 },
    housePriceIndex: { min: -2, max: 6 },
    m2MoneySupply: { min: 2, max: 6 },
    creditGrowth: { min: 2, max: 7 },
    currentAccount: { min: -5, max: -2 },
    fdi: { min: 3, max: 8 },
    economyType: 'developed',
    economyStatus: 'stable'
  },
  CN: {
    country: 'جمهورية الصين الشعبية',
    countryEn: 'China',
    countryCode: 'CN',
    currency: 'يوان صيني',
    currencyCode: 'CNY',
    pmiManufacturing: { min: 49, max: 53 },
    pmiServices: { min: 51, max: 56 },
    pmiComposite: { min: 50, max: 54 },
    consumerConfidence: { min: 85, max: 105 },
    businessConfidence: { min: 48, max: 54 },
    unemploymentRate: { min: 5, max: 6 },
    laborForceParticipation: { min: 75, max: 78 },
    jobsCreated: { min: 800000, max: 1500000 },
    cpi: { min: 0.5, max: 3 },
    ppi: { min: -2, max: 4 },
    coreInflation: { min: 0.3, max: 2 },
    industrialProduction: { min: 3, max: 8 },
    capacityUtilization: { min: 74, max: 80 },
    retailSales: { min: 3, max: 10 },
    exportsGrowth: { min: -5, max: 15 },
    importsGrowth: { min: -3, max: 12 },
    housingStarts: { min: 80000000, max: 120000000 },
    buildingPermits: { min: 90000000, max: 130000000 },
    housePriceIndex: { min: -3, max: 5 },
    m2MoneySupply: { min: 8, max: 12 },
    creditGrowth: { min: 10, max: 15 },
    currentAccount: { min: 1, max: 3 },
    fdi: { min: 3, max: 6 },
    economyType: 'emerging',
    economyStatus: 'expanding'
  }
};

// أنواع المؤشرات الاقتصادية
export interface IndicatorInfo {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  unit: string;
  unitEn: string;
  description: string;
  descriptionEn: string;
  frequency: string;
  frequencyEn: string;
  source: string;
  sourceEn: string;
  interpretation: {
    positive: string;
    negative: string;
  };
}

export const indicatorsInfo: IndicatorInfo[] = [
  {
    id: 'pmi_manufacturing',
    name: 'مؤشر مديري المشتريات الصناعي',
    nameEn: 'Manufacturing PMI',
    category: 'الإنتاج والصناعة',
    categoryEn: 'Production & Industry',
    unit: 'نقطة',
    unitEn: 'points',
    description: 'يقيس النشاط الاقتصادي في قطاع الصناعة التحويلية',
    descriptionEn: 'Measures economic activity in the manufacturing sector',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'IHS Markit / S&P Global',
    sourceEn: 'IHS Markit / S&P Global',
    interpretation: { positive: 'فوق 50 = توسع', negative: 'تحت 50 = انكماش' }
  },
  {
    id: 'pmi_services',
    name: 'مؤشر مديري المشتريات الخدمي',
    nameEn: 'Services PMI',
    category: 'الإنتاج والصناعة',
    categoryEn: 'Production & Industry',
    unit: 'نقطة',
    unitEn: 'points',
    description: 'يقيس النشاط الاقتصادي في قطاع الخدمات',
    descriptionEn: 'Measures economic activity in the services sector',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'IHS Markit / S&P Global',
    sourceEn: 'IHS Markit / S&P Global',
    interpretation: { positive: 'فوق 50 = توسع', negative: 'تحت 50 = انكماش' }
  },
  {
    id: 'consumer_confidence',
    name: 'مؤشر ثقة المستهلك',
    nameEn: 'Consumer Confidence Index',
    category: 'الثقة والتوقعات',
    categoryEn: 'Confidence & Expectations',
    unit: 'نقطة',
    unitEn: 'points',
    description: 'يقيس درجة تفاؤل المستهلكين تجاه الاقتصاد',
    descriptionEn: 'Measures consumer optimism about the economy',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'البنك المركزي / مؤسسات الإحصاء',
    sourceEn: 'Central Bank / Statistics Authority',
    interpretation: { positive: 'فوق 100 = تفاؤل', negative: 'تحت 100 = تشاؤم' }
  },
  {
    id: 'unemployment_rate',
    name: 'معدل البطالة',
    nameEn: 'Unemployment Rate',
    category: 'سوق العمل',
    categoryEn: 'Labor Market',
    unit: '%',
    unitEn: '%',
    description: 'نسبة العاطلين عن العمل من القوى العاملة',
    descriptionEn: 'Percentage of unemployed in the labor force',
    frequency: 'ربع سنوي',
    frequencyEn: 'Quarterly',
    source: 'وزارة العمل / هيئة الإحصاء',
    sourceEn: 'Ministry of Labor / Statistics Authority',
    interpretation: { positive: 'انخفاض = تحسن', negative: 'ارتفاع = تراجع' }
  },
  {
    id: 'cpi',
    name: 'مؤشر أسعار المستهلك',
    nameEn: 'Consumer Price Index (CPI)',
    category: 'التضخم والأسعار',
    categoryEn: 'Inflation & Prices',
    unit: '%',
    unitEn: '%',
    description: 'يقيس التغير في أسعار سلة السلع والخدمات',
    descriptionEn: 'Measures change in prices of goods and services basket',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'هيئة الإحصاء العامة',
    sourceEn: 'General Statistics Authority',
    interpretation: { positive: 'استقرار 2-3%', negative: 'ارتفاع كبير أو انكماش' }
  },
  {
    id: 'industrial_production',
    name: 'الإنتاج الصناعي',
    nameEn: 'Industrial Production',
    category: 'الإنتاج والصناعة',
    categoryEn: 'Production & Industry',
    unit: '%',
    unitEn: '%',
    description: 'التغير السنوي في حجم الإنتاج الصناعي',
    descriptionEn: 'Year-over-year change in industrial output',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'وزارة الصناعة / هيئة الإحصاء',
    sourceEn: 'Ministry of Industry / Statistics Authority',
    interpretation: { positive: 'نمو موجب', negative: 'نمو سالب' }
  },
  {
    id: 'retail_sales',
    name: 'مبيعات التجزئة',
    nameEn: 'Retail Sales',
    category: 'الاستهلاك والتجارة',
    categoryEn: 'Consumption & Trade',
    unit: '%',
    unitEn: '%',
    description: 'التغير في قيمة مبيعات التجزئة',
    descriptionEn: 'Change in retail sales value',
    frequency: 'شهري',
    frequencyEn: 'Monthly',
    source: 'هيئة الإحصاء / البنك المركزي',
    sourceEn: 'Statistics Authority / Central Bank',
    interpretation: { positive: 'نمو = إنفاق قوي', negative: 'تراجع = ضعف الاستهلاك' }
  },
  {
    id: 'current_account',
    name: 'الحساب الجاري',
    nameEn: 'Current Account Balance',
    category: 'الميزان الخارجي',
    categoryEn: 'External Balance',
    unit: '% من GDP',
    unitEn: '% of GDP',
    description: 'رصيد المعاملات الجارية مع العالم الخارجي',
    descriptionEn: 'Balance of current transactions with the world',
    frequency: 'ربع سنوي',
    frequencyEn: 'Quarterly',
    source: 'البنك المركزي',
    sourceEn: 'Central Bank',
    interpretation: { positive: 'فائض = قوة', negative: 'عجز = ضعف' }
  }
];

// توليد سياق المؤشرات الاقتصادية المترابط
export function generateEconomicIndicatorContext(countryCode?: string, language: 'ar' | 'en' = 'ar'): Record<string, any> {
  const countries = Object.keys(economicIndicatorsDatabase);
  const selectedCountryCode = countryCode && economicIndicatorsDatabase[countryCode] 
    ? countryCode 
    : countries[Math.floor(Math.random() * countries.length)];
  
  const countryData = economicIndicatorsDatabase[selectedCountryCode];
  const indicator = indicatorsInfo[Math.floor(Math.random() * indicatorsInfo.length)];
  
  // توليد قيم مترابطة ومنطقية
  const generateValue = (range: { min: number; max: number }) => {
    return +(range.min + Math.random() * (range.max - range.min)).toFixed(2);
  };
  
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const quarter = Math.ceil(currentMonth / 3);
  
  // PMI values - مترابطة منطقياً
  const pmiManufacturing = generateValue(countryData.pmiManufacturing);
  const pmiServices = generateValue(countryData.pmiServices);
  const pmiComposite = +((pmiManufacturing * 0.4 + pmiServices * 0.6)).toFixed(1);
  
  // تحديد حالة الاقتصاد بناءً على PMI
  let economyCondition: string;
  let economyConditionEn: string;
  if (pmiComposite >= 55) {
    economyCondition = 'توسع قوي';
    economyConditionEn = 'Strong Expansion';
  } else if (pmiComposite >= 52) {
    economyCondition = 'توسع معتدل';
    economyConditionEn = 'Moderate Expansion';
  } else if (pmiComposite >= 50) {
    economyCondition = 'توسع طفيف';
    economyConditionEn = 'Slight Expansion';
  } else if (pmiComposite >= 48) {
    economyCondition = 'انكماش طفيف';
    economyConditionEn = 'Slight Contraction';
  } else {
    economyCondition = 'انكماش';
    economyConditionEn = 'Contraction';
  }
  
  // ثقة المستهلك مرتبطة بالبطالة والتضخم
  const unemploymentRate = generateValue(countryData.unemploymentRate);
  const cpi = generateValue(countryData.cpi);
  const consumerConfidence = generateValue(countryData.consumerConfidence);
  
  // تعديل ثقة المستهلك بناءً على البطالة والتضخم
  let adjustedConfidence = consumerConfidence;
  if (unemploymentRate > 15) adjustedConfidence -= 10;
  if (cpi > 10) adjustedConfidence -= 15;
  
  // مؤشرات مالية
  const businessConfidence = generateValue(countryData.businessConfidence);
  const industrialProduction = generateValue(countryData.industrialProduction);
  const retailSales = generateValue(countryData.retailSales);
  const currentAccount = generateValue(countryData.currentAccount);
  const fdi = generateValue(countryData.fdi);
  
  // القيم السابقة (للمقارنة)
  const previousPmi = +(pmiManufacturing + (Math.random() * 4 - 2)).toFixed(1);
  const previousCpi = +(cpi + (Math.random() * 2 - 1)).toFixed(2);
  const previousUnemployment = +(unemploymentRate + (Math.random() * 1 - 0.5)).toFixed(1);
  
  // حساب التغييرات
  const pmiChange = +(pmiManufacturing - previousPmi).toFixed(1);
  const cpiChange = +(cpi - previousCpi).toFixed(2);
  const unemploymentChange = +(unemploymentRate - previousUnemployment).toFixed(1);
  
  // تحديد الاتجاه
  const getTrend = (change: number): { ar: string; en: string } => {
    if (change > 0.5) return { ar: 'ارتفاع', en: 'Rising' };
    if (change < -0.5) return { ar: 'انخفاض', en: 'Falling' };
    return { ar: 'مستقر', en: 'Stable' };
  };
  
  const pmiTrend = getTrend(pmiChange);
  const cpiTrend = getTrend(cpiChange);
  
  // الأشهر
  const months = language === 'ar' 
    ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return {
    // معلومات الدولة
    indicatorCountry: language === 'ar' ? countryData.country : countryData.countryEn,
    indicatorCountryCode: countryData.countryCode,
    indicatorCurrency: language === 'ar' ? countryData.currency : countryData.currencyCode,
    indicatorCurrencyCode: countryData.currencyCode,
    
    // الفترة الزمنية
    indicatorYear: currentYear,
    indicatorQuarter: `Q${quarter}`,
    indicatorMonth: months[currentMonth - 1],
    indicatorMonthNum: currentMonth,
    indicatorDate: `${currentYear}-${String(currentMonth).padStart(2, '0')}-01`,
    indicatorPeriod: language === 'ar' 
      ? `${months[currentMonth - 1]} ${currentYear}` 
      : `${months[currentMonth - 1]} ${currentYear}`,
    
    // معلومات المؤشر
    indicatorId: indicator.id,
    indicatorName: language === 'ar' ? indicator.name : indicator.nameEn,
    indicatorCategory: language === 'ar' ? indicator.category : indicator.categoryEn,
    indicatorUnit: language === 'ar' ? indicator.unit : indicator.unitEn,
    indicatorFrequency: language === 'ar' ? indicator.frequency : indicator.frequencyEn,
    indicatorSource: language === 'ar' ? indicator.source : indicator.sourceEn,
    indicatorDescription: language === 'ar' ? indicator.description : indicator.descriptionEn,
    
    // مؤشرات PMI
    pmiManufacturing: pmiManufacturing,
    pmiServices: pmiServices,
    pmiComposite: pmiComposite,
    previousPmi: previousPmi,
    pmiChange: pmiChange,
    pmiTrend: language === 'ar' ? pmiTrend.ar : pmiTrend.en,
    pmiStatus: pmiManufacturing >= 50 
      ? (language === 'ar' ? 'توسع' : 'Expansion') 
      : (language === 'ar' ? 'انكماش' : 'Contraction'),
    
    // حالة الاقتصاد
    economyCondition: language === 'ar' ? economyCondition : economyConditionEn,
    economyType: countryData.economyType,
    economyStatus: countryData.economyStatus,
    
    // مؤشرات الثقة
    consumerConfidence: +adjustedConfidence.toFixed(1),
    businessConfidence: businessConfidence,
    confidenceLevel: adjustedConfidence >= 100 
      ? (language === 'ar' ? 'متفائل' : 'Optimistic') 
      : (language === 'ar' ? 'متشائم' : 'Pessimistic'),
    
    // سوق العمل
    unemploymentRate: unemploymentRate,
    previousUnemployment: previousUnemployment,
    unemploymentChange: unemploymentChange,
    laborForceParticipation: generateValue(countryData.laborForceParticipation),
    jobsCreated: Math.round(generateValue(countryData.jobsCreated)),
    laborMarketStatus: unemploymentRate <= 5 
      ? (language === 'ar' ? 'قوي' : 'Strong') 
      : unemploymentRate <= 10 
        ? (language === 'ar' ? 'معتدل' : 'Moderate') 
        : (language === 'ar' ? 'ضعيف' : 'Weak'),
    
    // التضخم
    cpi: cpi,
    previousCpi: previousCpi,
    cpiChange: cpiChange,
    cpiTrend: language === 'ar' ? cpiTrend.ar : cpiTrend.en,
    ppi: generateValue(countryData.ppi),
    coreInflation: generateValue(countryData.coreInflation),
    inflationStatus: cpi <= 3 
      ? (language === 'ar' ? 'منخفض' : 'Low') 
      : cpi <= 6 
        ? (language === 'ar' ? 'معتدل' : 'Moderate') 
        : cpi <= 10 
          ? (language === 'ar' ? 'مرتفع' : 'High') 
          : (language === 'ar' ? 'مرتفع جداً' : 'Very High'),
    
    // الإنتاج والصناعة
    industrialProduction: industrialProduction,
    capacityUtilization: generateValue(countryData.capacityUtilization),
    industrialStatus: industrialProduction >= 0 
      ? (language === 'ar' ? 'نمو' : 'Growth') 
      : (language === 'ar' ? 'تراجع' : 'Decline'),
    
    // التجارة والاستهلاك
    retailSales: retailSales,
    exportsGrowth: generateValue(countryData.exportsGrowth),
    importsGrowth: generateValue(countryData.importsGrowth),
    
    // العقارات
    housingStarts: Math.round(generateValue(countryData.housingStarts)),
    buildingPermits: Math.round(generateValue(countryData.buildingPermits)),
    housePriceIndex: generateValue(countryData.housePriceIndex),
    
    // المؤشرات المالية
    m2MoneySupply: generateValue(countryData.m2MoneySupply),
    creditGrowth: generateValue(countryData.creditGrowth),
    
    // الميزان الخارجي
    currentAccount: currentAccount,
    currentAccountStatus: currentAccount >= 0 
      ? (language === 'ar' ? 'فائض' : 'Surplus') 
      : (language === 'ar' ? 'عجز' : 'Deficit'),
    fdi: fdi,
    
    // ملخص عام
    overallAssessment: pmiComposite >= 52 && unemploymentRate <= 10 && cpi <= 5
      ? (language === 'ar' ? 'إيجابي' : 'Positive')
      : pmiComposite >= 48 && unemploymentRate <= 15 && cpi <= 10
        ? (language === 'ar' ? 'محايد' : 'Neutral')
        : (language === 'ar' ? 'سلبي' : 'Negative'),
    
    // توقعات
    outlook: pmiComposite >= 52 
      ? (language === 'ar' ? 'إيجابي' : 'Positive') 
      : pmiComposite >= 48 
        ? (language === 'ar' ? 'محايد' : 'Neutral') 
        : (language === 'ar' ? 'سلبي' : 'Negative')
  };
}

// تصدير قائمة الدول
export const indicatorCountries = Object.entries(economicIndicatorsDatabase).map(([code, data]) => ({
  code,
  name: data.country,
  nameEn: data.countryEn,
  currency: data.currency,
  currencyCode: data.currencyCode,
  economyType: data.economyType
}));
