// قاعدة بيانات الطاقة الحقيقية والمترابطة منطقياً
// Real Energy Data with Logical Relationships

// ==================== النفط الخام ====================
export interface CrudeOil {
  code: string;
  nameAr: string;
  nameEn: string;
  category: 'light' | 'medium' | 'heavy';
  apiGravity: number; // كثافة API
  sulfurContent: number; // نسبة الكبريت %
  basePrice: number; // السعر الأساسي بالدولار
  premiumToWTI: number; // العلاوة/الخصم مقارنة بـ WTI
  source: string;
  region: string;
  benchmark: boolean;
  dailyVolume: number; // متوسط حجم التداول اليومي
}

export const crudeOilTypes: CrudeOil[] = [
  // المعايير العالمية
  {
    code: 'BRENT',
    nameAr: 'خام برنت',
    nameEn: 'Brent Crude',
    category: 'light',
    apiGravity: 38.3,
    sulfurContent: 0.37,
    basePrice: 82.50,
    premiumToWTI: 4.50,
    source: 'بحر الشمال',
    region: 'أوروبا',
    benchmark: true,
    dailyVolume: 1200000
  },
  {
    code: 'WTI',
    nameAr: 'خام غرب تكساس',
    nameEn: 'WTI Crude',
    category: 'light',
    apiGravity: 39.6,
    sulfurContent: 0.24,
    basePrice: 78.00,
    premiumToWTI: 0,
    source: 'تكساس',
    region: 'أمريكا الشمالية',
    benchmark: true,
    dailyVolume: 1500000
  },
  // الخامات العربية
  {
    code: 'ARABIAN_LIGHT',
    nameAr: 'الخام العربي الخفيف',
    nameEn: 'Arabian Light',
    category: 'light',
    apiGravity: 33.0,
    sulfurContent: 1.77,
    basePrice: 80.00,
    premiumToWTI: 2.00,
    source: 'السعودية',
    region: 'الخليج العربي',
    benchmark: false,
    dailyVolume: 800000
  },
  {
    code: 'ARABIAN_HEAVY',
    nameAr: 'الخام العربي الثقيل',
    nameEn: 'Arabian Heavy',
    category: 'heavy',
    apiGravity: 27.0,
    sulfurContent: 2.80,
    basePrice: 74.00,
    premiumToWTI: -4.00,
    source: 'السعودية',
    region: 'الخليج العربي',
    benchmark: false,
    dailyVolume: 400000
  },
  {
    code: 'DUBAI',
    nameAr: 'خام دبي',
    nameEn: 'Dubai Crude',
    category: 'medium',
    apiGravity: 31.0,
    sulfurContent: 2.00,
    basePrice: 79.00,
    premiumToWTI: 1.00,
    source: 'الإمارات',
    region: 'الخليج العربي',
    benchmark: true,
    dailyVolume: 600000
  },
  {
    code: 'OMAN',
    nameAr: 'خام عمان',
    nameEn: 'Oman Crude',
    category: 'medium',
    apiGravity: 33.5,
    sulfurContent: 1.40,
    basePrice: 80.50,
    premiumToWTI: 2.50,
    source: 'عمان',
    region: 'الخليج العربي',
    benchmark: true,
    dailyVolume: 300000
  },
  {
    code: 'MURBAN',
    nameAr: 'خام مربان',
    nameEn: 'Murban Crude',
    category: 'light',
    apiGravity: 40.5,
    sulfurContent: 0.78,
    basePrice: 83.00,
    premiumToWTI: 5.00,
    source: 'أبوظبي',
    region: 'الخليج العربي',
    benchmark: true,
    dailyVolume: 400000
  },
  {
    code: 'BASRAH_LIGHT',
    nameAr: 'خام البصرة الخفيف',
    nameEn: 'Basrah Light',
    category: 'light',
    apiGravity: 33.7,
    sulfurContent: 1.95,
    basePrice: 77.00,
    premiumToWTI: -1.00,
    source: 'العراق',
    region: 'الخليج العربي',
    benchmark: false,
    dailyVolume: 500000
  },
  {
    code: 'KUWAIT_EXPORT',
    nameAr: 'خام الكويت التصديري',
    nameEn: 'Kuwait Export Crude',
    category: 'medium',
    apiGravity: 31.4,
    sulfurContent: 2.52,
    basePrice: 78.50,
    premiumToWTI: 0.50,
    source: 'الكويت',
    region: 'الخليج العربي',
    benchmark: false,
    dailyVolume: 350000
  },
  {
    code: 'QATAR_MARINE',
    nameAr: 'خام قطر البحري',
    nameEn: 'Qatar Marine',
    category: 'light',
    apiGravity: 36.0,
    sulfurContent: 1.42,
    basePrice: 81.00,
    premiumToWTI: 3.00,
    source: 'قطر',
    region: 'الخليج العربي',
    benchmark: false,
    dailyVolume: 250000
  }
];

// ==================== الغاز الطبيعي ====================
export interface NaturalGas {
  code: string;
  nameAr: string;
  nameEn: string;
  type: 'spot' | 'futures' | 'lng';
  basePrice: number; // بالدولار لكل MMBtu
  unit: string;
  source: string;
  region: string;
  benchmark: boolean;
  conversionToMCF: number; // معامل التحويل
}

export const naturalGasTypes: NaturalGas[] = [
  {
    code: 'HENRY_HUB',
    nameAr: 'هنري هب',
    nameEn: 'Henry Hub',
    type: 'futures',
    basePrice: 2.85,
    unit: 'MMBtu',
    source: 'لويزيانا',
    region: 'أمريكا الشمالية',
    benchmark: true,
    conversionToMCF: 1.037
  },
  {
    code: 'TTF',
    nameAr: 'تي تي إف الهولندي',
    nameEn: 'TTF (Netherlands)',
    type: 'futures',
    basePrice: 11.50,
    unit: 'MMBtu',
    source: 'هولندا',
    region: 'أوروبا',
    benchmark: true,
    conversionToMCF: 1.037
  },
  {
    code: 'NBP',
    nameAr: 'إن بي بي البريطاني',
    nameEn: 'NBP (UK)',
    type: 'futures',
    basePrice: 10.80,
    unit: 'MMBtu',
    source: 'بريطانيا',
    region: 'أوروبا',
    benchmark: true,
    conversionToMCF: 1.037
  },
  {
    code: 'JKM',
    nameAr: 'جي كي إم الآسيوي',
    nameEn: 'JKM (Asia)',
    type: 'lng',
    basePrice: 13.20,
    unit: 'MMBtu',
    source: 'اليابان/كوريا',
    region: 'آسيا',
    benchmark: true,
    conversionToMCF: 1.037
  },
  {
    code: 'QATAR_LNG',
    nameAr: 'الغاز القطري المسال',
    nameEn: 'Qatar LNG',
    type: 'lng',
    basePrice: 12.50,
    unit: 'MMBtu',
    source: 'قطر',
    region: 'الخليج العربي',
    benchmark: false,
    conversionToMCF: 1.037
  },
  {
    code: 'UAE_LNG',
    nameAr: 'الغاز الإماراتي المسال',
    nameEn: 'UAE LNG',
    type: 'lng',
    basePrice: 12.00,
    unit: 'MMBtu',
    source: 'الإمارات',
    region: 'الخليج العربي',
    benchmark: false,
    conversionToMCF: 1.037
  },
  {
    code: 'EGYPT_LNG',
    nameAr: 'الغاز المصري المسال',
    nameEn: 'Egypt LNG',
    type: 'lng',
    basePrice: 11.00,
    unit: 'MMBtu',
    source: 'مصر',
    region: 'شمال أفريقيا',
    benchmark: false,
    conversionToMCF: 1.037
  },
  {
    code: 'ALGERIA_LNG',
    nameAr: 'الغاز الجزائري المسال',
    nameEn: 'Algeria LNG',
    type: 'lng',
    basePrice: 10.50,
    unit: 'MMBtu',
    source: 'الجزائر',
    region: 'شمال أفريقيا',
    benchmark: false,
    conversionToMCF: 1.037
  }
];

// ==================== المنتجات المكررة ====================
export interface RefinedProduct {
  code: string;
  nameAr: string;
  nameEn: string;
  category: 'fuel' | 'feedstock' | 'other';
  basePrice: number;
  unit: string;
  priceRatioToCrude: number; // نسبة السعر للنفط الخام
  yieldFromCrude: number; // نسبة الإنتاج من برميل النفط %
}

export const refinedProducts: RefinedProduct[] = [
  {
    code: 'RBOB',
    nameAr: 'بنزين RBOB',
    nameEn: 'RBOB Gasoline',
    category: 'fuel',
    basePrice: 2.45,
    unit: 'جالون',
    priceRatioToCrude: 1.32, // 32% أعلى من النفط/42
    yieldFromCrude: 46
  },
  {
    code: 'ULSD',
    nameAr: 'ديزل منخفض الكبريت',
    nameEn: 'ULSD Diesel',
    category: 'fuel',
    basePrice: 2.78,
    unit: 'جالون',
    priceRatioToCrude: 1.50,
    yieldFromCrude: 26
  },
  {
    code: 'HEATING_OIL',
    nameAr: 'زيت التدفئة',
    nameEn: 'Heating Oil',
    category: 'fuel',
    basePrice: 2.65,
    unit: 'جالون',
    priceRatioToCrude: 1.43,
    yieldFromCrude: 10
  },
  {
    code: 'JET_FUEL',
    nameAr: 'وقود الطائرات',
    nameEn: 'Jet Fuel',
    category: 'fuel',
    basePrice: 2.85,
    unit: 'جالون',
    priceRatioToCrude: 1.54,
    yieldFromCrude: 9
  },
  {
    code: 'NAPHTHA',
    nameAr: 'النافثا',
    nameEn: 'Naphtha',
    category: 'feedstock',
    basePrice: 680,
    unit: 'طن',
    priceRatioToCrude: 0.95,
    yieldFromCrude: 4
  },
  {
    code: 'FUEL_OIL',
    nameAr: 'زيت الوقود',
    nameEn: 'Fuel Oil',
    category: 'fuel',
    basePrice: 480,
    unit: 'طن',
    priceRatioToCrude: 0.72,
    yieldFromCrude: 4
  },
  {
    code: 'LPG',
    nameAr: 'غاز البترول المسال',
    nameEn: 'LPG',
    category: 'fuel',
    basePrice: 0.95,
    unit: 'جالون',
    priceRatioToCrude: 0.51,
    yieldFromCrude: 3
  },
  {
    code: 'ASPHALT',
    nameAr: 'الأسفلت',
    nameEn: 'Asphalt',
    category: 'other',
    basePrice: 450,
    unit: 'طن',
    priceRatioToCrude: 0.65,
    yieldFromCrude: 3
  }
];

// ==================== الكهرباء ====================
export interface ElectricityMarket {
  code: string;
  nameAr: string;
  nameEn: string;
  country: string;
  currency: string;
  peakPrice: number; // سعر الذروة
  offPeakPrice: number; // سعر خارج الذروة
  baseLoadPrice: number; // سعر الحمل الأساسي
  peakHours: string; // ساعات الذروة
  unit: string;
}

export const electricityMarkets: ElectricityMarket[] = [
  {
    code: 'PJM',
    nameAr: 'بي جي إم (شرق أمريكا)',
    nameEn: 'PJM Interconnection',
    country: 'أمريكا',
    currency: 'USD',
    peakPrice: 65,
    offPeakPrice: 38,
    baseLoadPrice: 48,
    peakHours: '07:00-23:00',
    unit: 'MWh'
  },
  {
    code: 'ERCOT',
    nameAr: 'إركوت (تكساس)',
    nameEn: 'ERCOT (Texas)',
    country: 'أمريكا',
    currency: 'USD',
    peakPrice: 58,
    offPeakPrice: 32,
    baseLoadPrice: 42,
    peakHours: '06:00-22:00',
    unit: 'MWh'
  },
  {
    code: 'EPEX_DE',
    nameAr: 'إيبكس (ألمانيا)',
    nameEn: 'EPEX Germany',
    country: 'ألمانيا',
    currency: 'EUR',
    peakPrice: 95,
    offPeakPrice: 55,
    baseLoadPrice: 72,
    peakHours: '08:00-20:00',
    unit: 'MWh'
  },
  {
    code: 'APX_UK',
    nameAr: 'أيه بي إكس (بريطانيا)',
    nameEn: 'APX UK',
    country: 'بريطانيا',
    currency: 'GBP',
    peakPrice: 85,
    offPeakPrice: 48,
    baseLoadPrice: 62,
    peakHours: '07:00-19:00',
    unit: 'MWh'
  },
  {
    code: 'ECRA_SA',
    nameAr: 'هيئة الكهرباء (السعودية)',
    nameEn: 'ECRA Saudi Arabia',
    country: 'السعودية',
    currency: 'SAR',
    peakPrice: 0.32, // ريال/كيلوواط
    offPeakPrice: 0.18,
    baseLoadPrice: 0.24,
    peakHours: '12:00-17:00',
    unit: 'kWh'
  },
  {
    code: 'FEWA_UAE',
    nameAr: 'فيوا (الإمارات)',
    nameEn: 'FEWA UAE',
    country: 'الإمارات',
    currency: 'AED',
    peakPrice: 0.42,
    offPeakPrice: 0.25,
    baseLoadPrice: 0.32,
    peakHours: '12:00-18:00',
    unit: 'kWh'
  },
  {
    code: 'EEHC_EG',
    nameAr: 'الشركة القابضة (مصر)',
    nameEn: 'EEHC Egypt',
    country: 'مصر',
    currency: 'EGP',
    peakPrice: 1.80,
    offPeakPrice: 0.95,
    baseLoadPrice: 1.30,
    peakHours: '18:00-23:00',
    unit: 'kWh'
  }
];

// ==================== الطاقة المتجددة ====================
export interface RenewableEnergy {
  code: string;
  nameAr: string;
  nameEn: string;
  type: 'solar' | 'wind' | 'hydro' | 'nuclear' | 'carbon';
  basePrice: number;
  unit: string;
  capacityFactor: number; // معامل القدرة %
  co2Avoided: number; // كجم CO2 لكل MWh
}

export const renewableEnergy: RenewableEnergy[] = [
  {
    code: 'SOLAR_PPA',
    nameAr: 'اتفاقية شراء طاقة شمسية',
    nameEn: 'Solar PPA',
    type: 'solar',
    basePrice: 28,
    unit: 'MWh',
    capacityFactor: 25,
    co2Avoided: 450
  },
  {
    code: 'WIND_PPA',
    nameAr: 'اتفاقية شراء طاقة رياح',
    nameEn: 'Wind PPA',
    type: 'wind',
    basePrice: 35,
    unit: 'MWh',
    capacityFactor: 35,
    co2Avoided: 420
  },
  {
    code: 'HYDRO_PPA',
    nameAr: 'اتفاقية شراء طاقة مائية',
    nameEn: 'Hydro PPA',
    type: 'hydro',
    basePrice: 42,
    unit: 'MWh',
    capacityFactor: 45,
    co2Avoided: 400
  },
  {
    code: 'NUCLEAR',
    nameAr: 'الطاقة النووية',
    nameEn: 'Nuclear Power',
    type: 'nuclear',
    basePrice: 55,
    unit: 'MWh',
    capacityFactor: 92,
    co2Avoided: 480
  },
  {
    code: 'EU_CARBON',
    nameAr: 'رخصة الكربون الأوروبية',
    nameEn: 'EU Carbon Credit',
    type: 'carbon',
    basePrice: 72,
    unit: 'طن CO2',
    capacityFactor: 100,
    co2Avoided: 1000
  },
  {
    code: 'VCS_CARBON',
    nameAr: 'رخصة الكربون الطوعية',
    nameEn: 'VCS Carbon Credit',
    type: 'carbon',
    basePrice: 15,
    unit: 'طن CO2',
    capacityFactor: 100,
    co2Avoided: 1000
  }
];

// ==================== الفحم ====================
export interface Coal {
  code: string;
  nameAr: string;
  nameEn: string;
  type: 'thermal' | 'coking';
  basePrice: number;
  unit: string;
  calorificValue: number; // القيمة الحرارية kcal/kg
  source: string;
}

export const coalTypes: Coal[] = [
  {
    code: 'NEWCASTLE',
    nameAr: 'فحم نيوكاسل',
    nameEn: 'Newcastle Coal',
    type: 'thermal',
    basePrice: 145,
    unit: 'طن',
    calorificValue: 6000,
    source: 'أستراليا'
  },
  {
    code: 'API2',
    nameAr: 'فحم أي بي آي 2',
    nameEn: 'API2 Coal',
    type: 'thermal',
    basePrice: 125,
    unit: 'طن',
    calorificValue: 6000,
    source: 'شمال غرب أوروبا'
  },
  {
    code: 'API4',
    nameAr: 'فحم أي بي آي 4',
    nameEn: 'API4 Coal',
    type: 'thermal',
    basePrice: 110,
    unit: 'طن',
    calorificValue: 6000,
    source: 'جنوب أفريقيا'
  },
  {
    code: 'COKING',
    nameAr: 'فحم الكوك',
    nameEn: 'Coking Coal',
    type: 'coking',
    basePrice: 280,
    unit: 'طن',
    calorificValue: 7500,
    source: 'أستراليا'
  }
];

// ==================== دوال التوليد ====================

// توليد سعر واقعي مع تباين
function generateRealisticPrice(basePrice: number, volatility: number = 0.02): number {
  const change = (Math.random() - 0.5) * 2 * volatility;
  return basePrice * (1 + change);
}

// توليد بيانات OHLC منطقية
function generateOHLC(basePrice: number, volatility: number = 0.015): {
  previousClose: number;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  changePercent: number;
} {
  // السعر السابق
  const previousClose = generateRealisticPrice(basePrice, volatility);
  
  // فجوة صغيرة عند الافتتاح (±0.3%)
  const gapPercent = (Math.random() - 0.5) * 0.006;
  const open = previousClose * (1 + gapPercent);
  
  // تقلب اليوم
  const dayVolatility = volatility * (0.5 + Math.random());
  const direction = Math.random() > 0.5 ? 1 : -1;
  
  // الإغلاق
  const closeChange = direction * Math.random() * dayVolatility;
  const close = open * (1 + closeChange);
  
  // الأعلى والأدنى
  const highExtra = Math.random() * dayVolatility * 0.5;
  const lowExtra = Math.random() * dayVolatility * 0.5;
  
  const high = Math.max(open, close) * (1 + highExtra);
  const low = Math.min(open, close) * (1 - lowExtra);
  
  // التغيير
  const change = close - previousClose;
  const changePercent = (change / previousClose) * 100;
  
  return {
    previousClose: Number(previousClose.toFixed(2)),
    open: Number(open.toFixed(2)),
    high: Number(high.toFixed(2)),
    low: Number(low.toFixed(2)),
    close: Number(close.toFixed(2)),
    change: Number(change.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2))
  };
}

// توليد حجم تداول واقعي
function generateVolume(baseVolume: number): number {
  const variation = 0.3 + Math.random() * 0.4; // 30%-70% من المتوسط
  return Math.round(baseVolume * variation);
}

// ==================== سياق الطاقة ====================
export interface EnergyContext {
  // النفط
  oilType: CrudeOil;
  oilOHLC: ReturnType<typeof generateOHLC>;
  oilVolume: number;
  oilValue: number;
  
  // الغاز
  gasType: NaturalGas;
  gasOHLC: ReturnType<typeof generateOHLC>;
  gasVolume: number;
  gasValue: number;
  
  // المنتجات المكررة
  refinedProduct: RefinedProduct;
  refinedOHLC: ReturnType<typeof generateOHLC>;
  refineryMargin: number;
  
  // الكهرباء
  electricityMarket: ElectricityMarket;
  isPeakHour: boolean;
  electricityPrice: number;
  demand: number;
  
  // الطاقة المتجددة
  renewable: RenewableEnergy;
  renewablePrice: number;
  capacityMW: number;
  
  // الفحم
  coal: Coal;
  coalOHLC: ReturnType<typeof generateOHLC>;
  
  // معلومات الفترة
  year: number;
  month: number;
  quarter: string;
  contract: string;
}

export function generateEnergyContext(_language: 'ar' | 'en' = 'ar'): EnergyContext {
  // اختيار المنتجات
  const oilType = crudeOilTypes[Math.floor(Math.random() * crudeOilTypes.length)];
  const gasType = naturalGasTypes[Math.floor(Math.random() * naturalGasTypes.length)];
  const refinedProduct = refinedProducts[Math.floor(Math.random() * refinedProducts.length)];
  const electricityMarket = electricityMarkets[Math.floor(Math.random() * electricityMarkets.length)];
  const renewable = renewableEnergy[Math.floor(Math.random() * renewableEnergy.length)];
  const coal = coalTypes[Math.floor(Math.random() * coalTypes.length)];
  
  // توليد OHLC
  const oilOHLC = generateOHLC(oilType.basePrice, 0.02);
  const gasOHLC = generateOHLC(gasType.basePrice, 0.03);
  const refinedOHLC = generateOHLC(refinedProduct.basePrice, 0.025);
  const coalOHLC = generateOHLC(coal.basePrice, 0.015);
  
  // حجم التداول
  const oilVolume = generateVolume(oilType.dailyVolume);
  const gasVolume = generateVolume(500000);
  
  // قيمة التداول
  const oilValue = oilVolume * oilOHLC.close;
  const gasValue = gasVolume * gasOHLC.close;
  
  // هامش التكرير (10-25%)
  const refineryMargin = 10 + Math.random() * 15;
  
  // الكهرباء
  const isPeakHour = Math.random() > 0.5;
  const electricityPrice = isPeakHour 
    ? electricityMarket.peakPrice * (0.95 + Math.random() * 0.1)
    : electricityMarket.offPeakPrice * (0.95 + Math.random() * 0.1);
  const demand = 50000 + Math.random() * 100000;
  
  // الطاقة المتجددة
  const renewablePrice = renewable.basePrice * (0.9 + Math.random() * 0.2);
  const capacityMW = 50 + Math.random() * 500;
  
  // الفترة
  const year = 2024;
  const month = 1 + Math.floor(Math.random() * 12);
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const quarter = quarters[Math.floor((month - 1) / 3)];
  const contracts = ['Front Month', 'Next Month', 'Q+1', 'Cal 25', 'Cal 26'];
  const contract = contracts[Math.floor(Math.random() * contracts.length)];
  
  return {
    oilType,
    oilOHLC,
    oilVolume,
    oilValue,
    gasType,
    gasOHLC,
    gasVolume,
    gasValue,
    refinedProduct,
    refinedOHLC,
    refineryMargin: Number(refineryMargin.toFixed(1)),
    electricityMarket,
    isPeakHour,
    electricityPrice: Number(electricityPrice.toFixed(2)),
    demand: Math.round(demand),
    renewable,
    renewablePrice: Number(renewablePrice.toFixed(2)),
    capacityMW: Math.round(capacityMW),
    coal,
    coalOHLC,
    year,
    month,
    quarter,
    contract
  };
}

// دالة للحصول على اسم الشهر
export function getMonthName(month: number, language: 'ar' | 'en' = 'ar'): string {
  const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
  return language === 'ar' ? monthsAr[month - 1] : monthsEn[month - 1];
}
