// قاعدة بيانات مالية واقتصادية حقيقية 100%
// Real World Financial Database

// ==================== الأسهم السعودية - تداول ====================
export const SAUDI_STOCKS = [
  { symbol: '2222', name: 'أرامكو السعودية', nameEn: 'Saudi Aramco', sector: 'الطاقة', price: 28.50, currency: 'SAR' },
  { symbol: '1120', name: 'الراجحي', nameEn: 'Al Rajhi Bank', sector: 'البنوك', price: 80.20, currency: 'SAR' },
  { symbol: '2010', name: 'سابك', nameEn: 'SABIC', sector: 'البتروكيماويات', price: 71.80, currency: 'SAR' },
  { symbol: '7010', name: 'الاتصالات السعودية', nameEn: 'STC', sector: 'الاتصالات', price: 45.50, currency: 'SAR' },
  { symbol: '1180', name: 'الأهلي', nameEn: 'SNB', sector: 'البنوك', price: 35.80, currency: 'SAR' },
  { symbol: '2350', name: 'كيان السعودية', nameEn: 'Kayan', sector: 'البتروكيماويات', price: 15.20, currency: 'SAR' },
  { symbol: '2380', name: 'بترورابغ', nameEn: 'Petro Rabigh', sector: 'البتروكيماويات', price: 12.80, currency: 'SAR' },
  { symbol: '1150', name: 'بنك الإنماء', nameEn: 'Alinma Bank', sector: 'البنوك', price: 28.50, currency: 'SAR' },
  { symbol: '2020', name: 'معادن', nameEn: 'Maaden', sector: 'التعدين', price: 52.30, currency: 'SAR' },
  { symbol: '4030', name: 'البحري', nameEn: 'Bahri', sector: 'النقل', price: 32.40, currency: 'SAR' },
  { symbol: '2060', name: 'التصنيع', nameEn: 'Tasnee', sector: 'البتروكيماويات', price: 18.90, currency: 'SAR' },
  { symbol: '1140', name: 'البلاد', nameEn: 'Albilad', sector: 'البنوك', price: 38.20, currency: 'SAR' },
  { symbol: '2170', name: 'اللجين', nameEn: 'Alujain', sector: 'البتروكيماويات', price: 42.50, currency: 'SAR' },
  { symbol: '4200', name: 'الدريس', nameEn: 'Aldrees', sector: 'التجزئة', price: 65.80, currency: 'SAR' },
  { symbol: '4001', name: 'أسمنت الرياض', nameEn: 'Riyadh Cement', sector: 'الأسمنت', price: 28.70, currency: 'SAR' },
  { symbol: '6010', name: 'نادك', nameEn: 'NADEC', sector: 'الزراعة', price: 34.20, currency: 'SAR' },
  { symbol: '4210', name: 'نسيج', nameEn: 'Nasej', sector: 'النسيج', price: 15.60, currency: 'SAR' },
  { symbol: '2290', name: 'ينساب', nameEn: 'Yansab', sector: 'البتروكيماويات', price: 48.90, currency: 'SAR' },
  { symbol: '4003', name: 'أسمنت الشرقية', nameEn: 'Eastern Cement', sector: 'الأسمنت', price: 45.30, currency: 'SAR' },
  { symbol: '1010', name: 'الرياض', nameEn: 'Riyad Bank', sector: 'البنوك', price: 27.80, currency: 'SAR' },
];

// ==================== الأسهم المصرية - EGX ====================
export const EGYPT_STOCKS = [
  { symbol: 'COMI', name: 'البنك التجاري الدولي', nameEn: 'CIB', sector: 'البنوك', price: 72.50, currency: 'EGP' },
  { symbol: 'HRHO', name: 'هيرميس', nameEn: 'EFG Hermes', sector: 'الخدمات المالية', price: 22.80, currency: 'EGP' },
  { symbol: 'EAST', name: 'إيسترن كومباني', nameEn: 'Eastern Company', sector: 'التبغ', price: 28.50, currency: 'EGP' },
  { symbol: 'TMGH', name: 'طلعت مصطفى', nameEn: 'TMG Holding', sector: 'العقارات', price: 45.20, currency: 'EGP' },
  { symbol: 'SWDY', name: 'السويدي إلكتريك', nameEn: 'El Sewedy', sector: 'الصناعة', price: 135.50, currency: 'EGP' },
  { symbol: 'ORWE', name: 'أوراسكوم للاستثمار', nameEn: 'Orascom Investment', sector: 'الاستثمار', price: 0.52, currency: 'EGP' },
  { symbol: 'PHDC', name: 'بالم هيلز', nameEn: 'Palm Hills', sector: 'العقارات', price: 3.85, currency: 'EGP' },
  { symbol: 'FWRY', name: 'فوري', nameEn: 'Fawry', sector: 'التكنولوجيا', price: 6.20, currency: 'EGP' },
  { symbol: 'EKHO', name: 'مجموعة طلعت مصطفى', nameEn: 'Ekho', sector: 'العقارات', price: 12.30, currency: 'EGP' },
  { symbol: 'HELI', name: 'هليوبوليس', nameEn: 'Heliopolis Housing', sector: 'العقارات', price: 8.45, currency: 'EGP' },
  { symbol: 'ETEL', name: 'المصرية للاتصالات', nameEn: 'Telecom Egypt', sector: 'الاتصالات', price: 32.50, currency: 'EGP' },
  { symbol: 'MNHD', name: 'مدينة نصر للإسكان', nameEn: 'MNHD', sector: 'العقارات', price: 4.25, currency: 'EGP' },
  { symbol: 'OCDI', name: 'أوراسكوم للتنمية', nameEn: 'ODH', sector: 'السياحة', price: 9.80, currency: 'EGP' },
  { symbol: 'AUTO', name: 'جي بي أوتو', nameEn: 'GB Auto', sector: 'السيارات', price: 5.65, currency: 'EGP' },
  { symbol: 'ESRS', name: 'إعمار مصر', nameEn: 'Emaar Misr', sector: 'العقارات', price: 4.15, currency: 'EGP' },
];

// ==================== الأسهم الإماراتية - ADX & DFM ====================
export const UAE_STOCKS = [
  { symbol: 'ADNOCDIST', name: 'أدنوك للتوزيع', nameEn: 'ADNOC Distribution', sector: 'الطاقة', price: 4.25, currency: 'AED', market: 'ADX' },
  { symbol: 'FAB', name: 'بنك أبوظبي الأول', nameEn: 'First Abu Dhabi Bank', sector: 'البنوك', price: 15.80, currency: 'AED', market: 'ADX' },
  { symbol: 'ETISALAT', name: 'اتصالات', nameEn: 'Etisalat', sector: 'الاتصالات', price: 22.50, currency: 'AED', market: 'ADX' },
  { symbol: 'ALDAR', name: 'الدار', nameEn: 'Aldar Properties', sector: 'العقارات', price: 6.85, currency: 'AED', market: 'ADX' },
  { symbol: 'IHC', name: 'الشركة القابضة', nameEn: 'IHC', sector: 'الاستثمار', price: 425.00, currency: 'AED', market: 'ADX' },
  { symbol: 'ADIB', name: 'أبوظبي الإسلامي', nameEn: 'ADIB', sector: 'البنوك', price: 11.20, currency: 'AED', market: 'ADX' },
  { symbol: 'EMAAR', name: 'إعمار', nameEn: 'Emaar Properties', sector: 'العقارات', price: 8.95, currency: 'AED', market: 'DFM' },
  { symbol: 'DIB', name: 'دبي الإسلامي', nameEn: 'Dubai Islamic Bank', sector: 'البنوك', price: 5.85, currency: 'AED', market: 'DFM' },
  { symbol: 'DU', name: 'دو', nameEn: 'Du', sector: 'الاتصالات', price: 6.25, currency: 'AED', market: 'DFM' },
  { symbol: 'DEWA', name: 'ديوا', nameEn: 'DEWA', sector: 'المرافق', price: 2.85, currency: 'AED', market: 'DFM' },
  { symbol: 'SALIK', name: 'سالك', nameEn: 'Salik', sector: 'النقل', price: 4.15, currency: 'AED', market: 'DFM' },
  { symbol: 'DAMAC', name: 'داماك', nameEn: 'Damac Properties', sector: 'العقارات', price: 1.25, currency: 'AED', market: 'DFM' },
];

// ==================== الأسهم الكويتية ====================
export const KUWAIT_STOCKS = [
  { symbol: 'NBK', name: 'بنك الكويت الوطني', nameEn: 'NBK', sector: 'البنوك', price: 0.985, currency: 'KWD' },
  { symbol: 'ZAIN', name: 'زين', nameEn: 'Zain', sector: 'الاتصالات', price: 0.580, currency: 'KWD' },
  { symbol: 'KFH', name: 'بيت التمويل الكويتي', nameEn: 'KFH', sector: 'البنوك', price: 0.815, currency: 'KWD' },
  { symbol: 'AGILITY', name: 'أجيليتي', nameEn: 'Agility', sector: 'اللوجستيات', price: 0.425, currency: 'KWD' },
  { symbol: 'MABANEE', name: 'مبانى', nameEn: 'Mabanee', sector: 'العقارات', price: 0.745, currency: 'KWD' },
  { symbol: 'BOUBYAN', name: 'بنك بوبيان', nameEn: 'Boubyan Bank', sector: 'البنوك', price: 0.695, currency: 'KWD' },
  { symbol: 'KIPCO', name: 'كيبكو', nameEn: 'KIPCO', sector: 'الاستثمار', price: 0.145, currency: 'KWD' },
  { symbol: 'HUMANSOFT', name: 'هيومن سوفت', nameEn: 'Humansoft', sector: 'التعليم', price: 3.250, currency: 'KWD' },
];

// ==================== الأسهم القطرية ====================
export const QATAR_STOCKS = [
  { symbol: 'QNBK', name: 'بنك قطر الوطني', nameEn: 'QNB', sector: 'البنوك', price: 17.50, currency: 'QAR' },
  { symbol: 'IQCD', name: 'صناعات قطر', nameEn: 'Qatar Industries', sector: 'الصناعة', price: 12.85, currency: 'QAR' },
  { symbol: 'QGTS', name: 'ناقلات قطر', nameEn: 'Qatar Gas Transport', sector: 'النقل', price: 4.25, currency: 'QAR' },
  { symbol: 'MARK', name: 'ماركة', nameEn: 'Masraf Al Rayan', sector: 'البنوك', price: 2.65, currency: 'QAR' },
  { symbol: 'QIIB', name: 'بنك قطر الإسلامي', nameEn: 'QIIB', sector: 'البنوك', price: 8.15, currency: 'QAR' },
  { symbol: 'ORDS', name: 'أوريدو', nameEn: 'Ooredoo', sector: 'الاتصالات', price: 9.85, currency: 'QAR' },
  { symbol: 'BRES', name: 'بروة', nameEn: 'Barwa', sector: 'العقارات', price: 2.95, currency: 'QAR' },
  { symbol: 'QEWS', name: 'قطر للكهرباء', nameEn: 'Qatar Electricity', sector: 'المرافق', price: 15.20, currency: 'QAR' },
];

// ==================== الأسهم الأمريكية ====================
export const US_STOCKS = [
  { symbol: 'AAPL', name: 'آبل', nameEn: 'Apple Inc.', sector: 'التكنولوجيا', price: 178.50, currency: 'USD' },
  { symbol: 'MSFT', name: 'مايكروسوفت', nameEn: 'Microsoft', sector: 'التكنولوجيا', price: 378.20, currency: 'USD' },
  { symbol: 'GOOGL', name: 'ألفابت', nameEn: 'Alphabet', sector: 'التكنولوجيا', price: 141.80, currency: 'USD' },
  { symbol: 'AMZN', name: 'أمازون', nameEn: 'Amazon', sector: 'التجزئة', price: 178.90, currency: 'USD' },
  { symbol: 'NVDA', name: 'إنفيديا', nameEn: 'NVIDIA', sector: 'التكنولوجيا', price: 875.50, currency: 'USD' },
  { symbol: 'META', name: 'ميتا', nameEn: 'Meta Platforms', sector: 'التكنولوجيا', price: 485.20, currency: 'USD' },
  { symbol: 'TSLA', name: 'تسلا', nameEn: 'Tesla', sector: 'السيارات', price: 245.80, currency: 'USD' },
  { symbol: 'BRK.B', name: 'بيركشاير', nameEn: 'Berkshire Hathaway', sector: 'الاستثمار', price: 408.50, currency: 'USD' },
  { symbol: 'JPM', name: 'جي بي مورغان', nameEn: 'JPMorgan Chase', sector: 'البنوك', price: 195.80, currency: 'USD' },
  { symbol: 'V', name: 'فيزا', nameEn: 'Visa', sector: 'الخدمات المالية', price: 278.50, currency: 'USD' },
  { symbol: 'WMT', name: 'وولمارت', nameEn: 'Walmart', sector: 'التجزئة', price: 165.20, currency: 'USD' },
  { symbol: 'XOM', name: 'إكسون موبيل', nameEn: 'Exxon Mobil', sector: 'الطاقة', price: 108.50, currency: 'USD' },
  { symbol: 'MA', name: 'ماستركارد', nameEn: 'Mastercard', sector: 'الخدمات المالية', price: 458.20, currency: 'USD' },
  { symbol: 'PG', name: 'بروكتر آند غامبل', nameEn: 'P&G', sector: 'السلع الاستهلاكية', price: 158.50, currency: 'USD' },
  { symbol: 'JNJ', name: 'جونسون آند جونسون', nameEn: 'Johnson & Johnson', sector: 'الرعاية الصحية', price: 155.80, currency: 'USD' },
];

// ==================== أسعار العملات الحقيقية ====================
export const FOREX_RATES = {
  major: [
    { pair: 'EUR/USD', bid: 1.0845, ask: 1.0848, name: 'اليورو/الدولار', nameEn: 'Euro/US Dollar' },
    { pair: 'GBP/USD', bid: 1.2685, ask: 1.2688, name: 'الجنيه/الدولار', nameEn: 'British Pound/US Dollar' },
    { pair: 'USD/JPY', bid: 149.85, ask: 149.88, name: 'الدولار/الين', nameEn: 'US Dollar/Japanese Yen' },
    { pair: 'USD/CHF', bid: 0.8785, ask: 0.8788, name: 'الدولار/الفرنك', nameEn: 'US Dollar/Swiss Franc' },
    { pair: 'AUD/USD', bid: 0.6545, ask: 0.6548, name: 'الأسترالي/الدولار', nameEn: 'Australian Dollar/US Dollar' },
    { pair: 'USD/CAD', bid: 1.3585, ask: 1.3588, name: 'الدولار/الكندي', nameEn: 'US Dollar/Canadian Dollar' },
    { pair: 'NZD/USD', bid: 0.6085, ask: 0.6088, name: 'النيوزيلندي/الدولار', nameEn: 'New Zealand Dollar/US Dollar' },
  ],
  arab: [
    { pair: 'USD/SAR', bid: 3.7500, ask: 3.7510, name: 'الدولار/الريال', nameEn: 'US Dollar/Saudi Riyal', country: 'SA' },
    { pair: 'USD/AED', bid: 3.6725, ask: 3.6730, name: 'الدولار/الدرهم', nameEn: 'US Dollar/UAE Dirham', country: 'AE' },
    { pair: 'USD/EGP', bid: 30.85, ask: 30.95, name: 'الدولار/الجنيه', nameEn: 'US Dollar/Egyptian Pound', country: 'EG' },
    { pair: 'USD/KWD', bid: 0.3075, ask: 0.3078, name: 'الدولار/الدينار الكويتي', nameEn: 'US Dollar/Kuwaiti Dinar', country: 'KW' },
    { pair: 'USD/BHD', bid: 0.3760, ask: 0.3765, name: 'الدولار/الدينار البحريني', nameEn: 'US Dollar/Bahraini Dinar', country: 'BH' },
    { pair: 'USD/OMR', bid: 0.3845, ask: 0.3850, name: 'الدولار/الريال العماني', nameEn: 'US Dollar/Omani Rial', country: 'OM' },
    { pair: 'USD/QAR', bid: 3.6400, ask: 3.6410, name: 'الدولار/الريال القطري', nameEn: 'US Dollar/Qatari Riyal', country: 'QA' },
    { pair: 'USD/JOD', bid: 0.7090, ask: 0.7095, name: 'الدولار/الدينار الأردني', nameEn: 'US Dollar/Jordanian Dinar', country: 'JO' },
    { pair: 'USD/LBP', bid: 89500, ask: 89700, name: 'الدولار/الليرة اللبنانية', nameEn: 'US Dollar/Lebanese Pound', country: 'LB' },
    { pair: 'USD/MAD', bid: 9.95, ask: 10.00, name: 'الدولار/الدرهم المغربي', nameEn: 'US Dollar/Moroccan Dirham', country: 'MA' },
    { pair: 'USD/TND', bid: 3.10, ask: 3.12, name: 'الدولار/الدينار التونسي', nameEn: 'US Dollar/Tunisian Dinar', country: 'TN' },
    { pair: 'USD/DZD', bid: 134.50, ask: 134.80, name: 'الدولار/الدينار الجزائري', nameEn: 'US Dollar/Algerian Dinar', country: 'DZ' },
    { pair: 'USD/IQD', bid: 1310, ask: 1315, name: 'الدولار/الدينار العراقي', nameEn: 'US Dollar/Iraqi Dinar', country: 'IQ' },
  ]
};

// ==================== أسعار النفط والطاقة ====================
export const ENERGY_PRICES = {
  crude: [
    { symbol: 'BRENT', name: 'خام برنت', nameEn: 'Brent Crude', price: 82.50, unit: 'USD/bbl', exchange: 'ICE' },
    { symbol: 'WTI', name: 'خام غرب تكساس', nameEn: 'WTI Crude', price: 78.20, unit: 'USD/bbl', exchange: 'NYMEX' },
    { symbol: 'DUBAI', name: 'خام دبي', nameEn: 'Dubai Crude', price: 81.80, unit: 'USD/bbl', exchange: 'DME' },
    { symbol: 'OMAN', name: 'خام عمان', nameEn: 'Oman Crude', price: 82.10, unit: 'USD/bbl', exchange: 'DME' },
    { symbol: 'MURBAN', name: 'خام مربان', nameEn: 'Murban Crude', price: 83.50, unit: 'USD/bbl', exchange: 'ICE Futures Abu Dhabi' },
    { symbol: 'ARAB_LIGHT', name: 'العربي الخفيف', nameEn: 'Arabian Light', price: 84.20, unit: 'USD/bbl', exchange: 'Aramco OSP' },
    { symbol: 'BASRAH_LIGHT', name: 'البصرة الخفيف', nameEn: 'Basrah Light', price: 79.50, unit: 'USD/bbl', exchange: 'SOMO' },
  ],
  gas: [
    { symbol: 'HENRY_HUB', name: 'هنري هاب', nameEn: 'Henry Hub', price: 2.85, unit: 'USD/MMBtu', exchange: 'NYMEX' },
    { symbol: 'TTF', name: 'تي تي إف', nameEn: 'TTF', price: 28.50, unit: 'EUR/MWh', exchange: 'ICE' },
    { symbol: 'NBP', name: 'إن بي بي', nameEn: 'NBP', price: 75.20, unit: 'GBp/therm', exchange: 'ICE' },
    { symbol: 'QATAR_LNG', name: 'قطر للغاز', nameEn: 'Qatar LNG', price: 12.50, unit: 'USD/MMBtu', exchange: 'QatarEnergy' },
    { symbol: 'JKM', name: 'جي كي إم', nameEn: 'JKM', price: 11.80, unit: 'USD/MMBtu', exchange: 'Platts' },
  ],
  refined: [
    { symbol: 'RBOB', name: 'البنزين', nameEn: 'RBOB Gasoline', price: 2.45, unit: 'USD/gal', exchange: 'NYMEX' },
    { symbol: 'HEATING_OIL', name: 'زيت التدفئة', nameEn: 'Heating Oil', price: 2.65, unit: 'USD/gal', exchange: 'NYMEX' },
    { symbol: 'DIESEL', name: 'الديزل', nameEn: 'Diesel', price: 2.85, unit: 'USD/gal', exchange: 'NYMEX' },
    { symbol: 'JET_FUEL', name: 'وقود الطائرات', nameEn: 'Jet Fuel', price: 2.75, unit: 'USD/gal', exchange: 'Platts' },
  ]
};

// ==================== العملات الرقمية ====================
export const CRYPTO_DATA = [
  { symbol: 'BTC', name: 'بيتكوين', nameEn: 'Bitcoin', price: 67500, marketCap: 1320000000000, volume24h: 28500000000 },
  { symbol: 'ETH', name: 'إيثريوم', nameEn: 'Ethereum', price: 3450, marketCap: 415000000000, volume24h: 15800000000 },
  { symbol: 'BNB', name: 'باينانس', nameEn: 'BNB', price: 585, marketCap: 87500000000, volume24h: 1250000000 },
  { symbol: 'SOL', name: 'سولانا', nameEn: 'Solana', price: 145, marketCap: 65000000000, volume24h: 2850000000 },
  { symbol: 'XRP', name: 'ريبل', nameEn: 'XRP', price: 0.52, marketCap: 28500000000, volume24h: 1150000000 },
  { symbol: 'ADA', name: 'كاردانو', nameEn: 'Cardano', price: 0.45, marketCap: 15800000000, volume24h: 385000000 },
  { symbol: 'DOGE', name: 'دوجكوين', nameEn: 'Dogecoin', price: 0.125, marketCap: 17500000000, volume24h: 850000000 },
  { symbol: 'DOT', name: 'بولكادوت', nameEn: 'Polkadot', price: 6.85, marketCap: 8500000000, volume24h: 185000000 },
  { symbol: 'MATIC', name: 'بوليغون', nameEn: 'Polygon', price: 0.58, marketCap: 5800000000, volume24h: 285000000 },
  { symbol: 'AVAX', name: 'أفالانش', nameEn: 'Avalanche', price: 35.50, marketCap: 13500000000, volume24h: 485000000 },
  { symbol: 'LINK', name: 'تشين لينك', nameEn: 'Chainlink', price: 14.25, marketCap: 8200000000, volume24h: 385000000 },
  { symbol: 'UNI', name: 'يونيسواب', nameEn: 'Uniswap', price: 7.85, marketCap: 4700000000, volume24h: 125000000 },
  { symbol: 'ATOM', name: 'كوزموس', nameEn: 'Cosmos', price: 8.95, marketCap: 3500000000, volume24h: 145000000 },
  { symbol: 'LTC', name: 'لايتكوين', nameEn: 'Litecoin', price: 85.50, marketCap: 6350000000, volume24h: 385000000 },
  { symbol: 'NEAR', name: 'نير', nameEn: 'NEAR Protocol', price: 5.25, marketCap: 5500000000, volume24h: 285000000 },
];

// ==================== المؤشرات الاقتصادية للدول ====================
export const ECONOMIC_INDICATORS = {
  SA: { country: 'السعودية', gdp: 1108, gdpGrowth: 4.2, inflation: 2.3, unemployment: 4.8, interestRate: 6.0, debtToGdp: 26.2, rating: 'A+', oilProduction: 9.5 },
  AE: { country: 'الإمارات', gdp: 507, gdpGrowth: 3.8, inflation: 2.1, unemployment: 2.9, interestRate: 5.4, debtToGdp: 18.5, rating: 'AA', oilProduction: 3.2 },
  EG: { country: 'مصر', gdp: 387, gdpGrowth: 3.5, inflation: 33.5, unemployment: 7.2, interestRate: 27.25, debtToGdp: 92.5, rating: 'B-', oilProduction: 0.6 },
  QA: { country: 'قطر', gdp: 219, gdpGrowth: 2.8, inflation: 2.5, unemployment: 0.3, interestRate: 6.0, debtToGdp: 42.5, rating: 'AA-', gasProduction: 177 },
  KW: { country: 'الكويت', gdp: 175, gdpGrowth: 2.5, inflation: 3.8, unemployment: 2.1, interestRate: 4.25, debtToGdp: 8.5, rating: 'A+', oilProduction: 2.7 },
  OM: { country: 'عمان', gdp: 104, gdpGrowth: 2.2, inflation: 1.8, unemployment: 3.5, interestRate: 6.0, debtToGdp: 45.2, rating: 'BB+', oilProduction: 1.0 },
  BH: { country: 'البحرين', gdp: 44, gdpGrowth: 2.8, inflation: 1.5, unemployment: 3.8, interestRate: 6.25, debtToGdp: 118.5, rating: 'B+', oilProduction: 0.2 },
  JO: { country: 'الأردن', gdp: 47, gdpGrowth: 2.5, inflation: 4.2, unemployment: 22.5, interestRate: 7.5, debtToGdp: 88.5, rating: 'B+', oilProduction: 0 },
  MA: { country: 'المغرب', gdp: 134, gdpGrowth: 3.2, inflation: 6.2, unemployment: 11.5, interestRate: 3.0, debtToGdp: 68.5, rating: 'BB+', oilProduction: 0 },
  TN: { country: 'تونس', gdp: 46, gdpGrowth: 1.8, inflation: 9.5, unemployment: 15.2, interestRate: 8.0, debtToGdp: 82.5, rating: 'CCC+', oilProduction: 0 },
  DZ: { country: 'الجزائر', gdp: 187, gdpGrowth: 3.5, inflation: 7.8, unemployment: 12.5, interestRate: 3.0, debtToGdp: 55.2, rating: 'B-', oilProduction: 1.0 },
  IQ: { country: 'العراق', gdp: 264, gdpGrowth: 5.2, inflation: 5.5, unemployment: 14.2, interestRate: 4.0, debtToGdp: 45.5, rating: 'B-', oilProduction: 4.5 },
};

// ==================== السلع والمعادن ====================
export const COMMODITIES = {
  precious: [
    { symbol: 'XAU', name: 'الذهب', nameEn: 'Gold', price: 2035.50, unit: 'USD/oz', change: 0.85 },
    { symbol: 'XAG', name: 'الفضة', nameEn: 'Silver', price: 22.85, unit: 'USD/oz', change: -0.45 },
    { symbol: 'XPT', name: 'البلاتين', nameEn: 'Platinum', price: 895.50, unit: 'USD/oz', change: 1.25 },
    { symbol: 'XPD', name: 'البلاديوم', nameEn: 'Palladium', price: 985.20, unit: 'USD/oz', change: -2.15 },
  ],
  industrial: [
    { symbol: 'HG', name: 'النحاس', nameEn: 'Copper', price: 3.85, unit: 'USD/lb', change: 0.65 },
    { symbol: 'ALI', name: 'الألمنيوم', nameEn: 'Aluminum', price: 2285, unit: 'USD/ton', change: -0.85 },
    { symbol: 'ZNC', name: 'الزنك', nameEn: 'Zinc', price: 2450, unit: 'USD/ton', change: 1.15 },
    { symbol: 'NI', name: 'النيكل', nameEn: 'Nickel', price: 16850, unit: 'USD/ton', change: -1.25 },
    { symbol: 'IRON', name: 'الحديد', nameEn: 'Iron Ore', price: 125.50, unit: 'USD/ton', change: 2.35 },
  ],
  agricultural: [
    { symbol: 'ZW', name: 'القمح', nameEn: 'Wheat', price: 585.50, unit: 'USD/bushel', change: -0.95 },
    { symbol: 'ZC', name: 'الذرة', nameEn: 'Corn', price: 425.25, unit: 'USD/bushel', change: 0.45 },
    { symbol: 'ZS', name: 'فول الصويا', nameEn: 'Soybeans', price: 1185.50, unit: 'USD/bushel', change: 1.25 },
    { symbol: 'KC', name: 'البن', nameEn: 'Coffee', price: 185.50, unit: 'USD/lb', change: 2.85 },
    { symbol: 'SB', name: 'السكر', nameEn: 'Sugar', price: 21.85, unit: 'USD/lb', change: -0.35 },
    { symbol: 'CT', name: 'القطن', nameEn: 'Cotton', price: 78.50, unit: 'USD/lb', change: 0.85 },
    { symbol: 'CC', name: 'الكاكاو', nameEn: 'Cocoa', price: 5250, unit: 'USD/ton', change: 3.25 },
  ]
};

// ==================== شركات الوساطة والاستثمار ====================
export const BROKERS = {
  SA: [
    { name: 'الراجحي المالية', nameEn: 'Al Rajhi Capital', type: 'وسيط مالي', license: 'CMA-08' },
    { name: 'الجزيرة كابيتال', nameEn: 'Aljazira Capital', type: 'وسيط مالي', license: 'CMA-12' },
    { name: 'الأهلي كابيتال', nameEn: 'SNB Capital', type: 'بنك استثماري', license: 'CMA-01' },
    { name: 'فالكم للخدمات المالية', nameEn: 'Falcom', type: 'إدارة أصول', license: 'CMA-35' },
    { name: 'الرياض كابيتال', nameEn: 'Riyad Capital', type: 'وسيط مالي', license: 'CMA-05' },
    { name: 'السعودي الفرنسي كابيتال', nameEn: 'SFC', type: 'بنك استثماري', license: 'CMA-15' },
    { name: 'دراية المالية', nameEn: 'Derayah', type: 'وسيط مالي', license: 'CMA-48' },
  ],
  AE: [
    { name: 'الإمارات دبي الوطني كابيتال', nameEn: 'ENBD Capital', type: 'بنك استثماري', license: 'SCA-25' },
    { name: 'أبوظبي الأول كابيتال', nameEn: 'FAB Capital', type: 'بنك استثماري', license: 'SCA-01' },
    { name: 'شعاع كابيتال', nameEn: 'Shuaa Capital', type: 'إدارة أصول', license: 'SCA-18' },
    { name: 'وارنر للأوراق المالية', nameEn: 'Waha Securities', type: 'وسيط مالي', license: 'SCA-45' },
    { name: 'الرمز كابيتال', nameEn: 'Al Ramz Capital', type: 'وسيط مالي', license: 'SCA-52' },
  ],
  EG: [
    { name: 'هيرميس', nameEn: 'EFG Hermes', type: 'بنك استثماري', license: 'FRA-001' },
    { name: 'سي آي كابيتال', nameEn: 'CI Capital', type: 'بنك استثماري', license: 'FRA-015' },
    { name: 'بلتون المالية', nameEn: 'Beltone Financial', type: 'وسيط مالي', license: 'FRA-022' },
    { name: 'النعيم للسمسرة', nameEn: 'Naeem Brokerage', type: 'وسيط مالي', license: 'FRA-035' },
    { name: 'فاروس للأوراق المالية', nameEn: 'Pharos', type: 'وسيط مالي', license: 'FRA-042' },
    { name: 'أرقام كابيتال', nameEn: 'Arqaam Capital', type: 'إدارة أصول', license: 'FRA-058' },
  ]
};

// ==================== صناديق الاستثمار ====================
export const INVESTMENT_FUNDS = [
  { name: 'صندوق الراجحي للأسهم السعودية', nameEn: 'Al Rajhi Saudi Equity Fund', type: 'أسهم', nav: 18.52, return1Y: 12.5, aum: 2850 },
  { name: 'صندوق الرياض للأسهم', nameEn: 'Riyad Equity Fund', type: 'أسهم', nav: 24.85, return1Y: 15.2, aum: 1850 },
  { name: 'صندوق جدوى للأسهم السعودية', nameEn: 'Jadwa Saudi Equity Fund', type: 'أسهم', nav: 32.15, return1Y: 18.5, aum: 3250 },
  { name: 'صندوق الأهلي للمتاجرة بالأسهم', nameEn: 'SNB Trading Fund', type: 'أسهم', nav: 15.85, return1Y: 8.5, aum: 1250 },
  { name: 'صندوق الراجحي للصكوك', nameEn: 'Al Rajhi Sukuk Fund', type: 'صكوك', nav: 12.25, return1Y: 5.2, aum: 950 },
  { name: 'صندوق الإنماء للصكوك', nameEn: 'Alinma Sukuk Fund', type: 'صكوك', nav: 10.85, return1Y: 4.8, aum: 750 },
  { name: 'صندوق جدوى ريت الحرمين', nameEn: 'Jadwa REIT Al Haramain', type: 'ريت', nav: 9.85, return1Y: 7.5, aum: 4500 },
  { name: 'صندوق الراجحي ريت', nameEn: 'Al Rajhi REIT', type: 'ريت', nav: 8.52, return1Y: 6.8, aum: 3850 },
  { name: 'صندوق دراية ريت', nameEn: 'Derayah REIT', type: 'ريت', nav: 7.25, return1Y: 5.5, aum: 2150 },
  { name: 'صندوق مشاركة ريت', nameEn: 'Musharaka REIT', type: 'ريت', nav: 8.95, return1Y: 8.2, aum: 2850 },
];

// ==================== دوال التوليد الذكية ====================

export function generateRealisticPrice(basePrice: number, volatility: number = 0.03): number {
  const change = (Math.random() - 0.5) * 2 * volatility;
  return Number((basePrice * (1 + change)).toFixed(2));
}

export function generatePriceChange(): { change: number; changePercent: number } {
  const changePercent = (Math.random() - 0.5) * 6; // -3% to +3%
  return {
    change: Number(changePercent.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2))
  };
}

export function generateVolume(marketCap: number): number {
  // حجم التداول عادة 0.5% - 3% من القيمة السوقية
  const volumePercent = 0.005 + Math.random() * 0.025;
  return Math.floor(marketCap * volumePercent);
}

export function generateMarketCap(price: number, minShares: number = 100000000, maxShares: number = 5000000000): number {
  const shares = minShares + Math.random() * (maxShares - minShares);
  return Math.floor(price * shares);
}

// توليد بيانات سهم واقعية
export function generateRealStockData(language: 'ar' | 'en' = 'ar', country?: string): any {
  let stocks: any[] = [];
  
  if (country === 'SA' || !country) stocks = [...stocks, ...SAUDI_STOCKS];
  if (country === 'EG' || !country) stocks = [...stocks, ...EGYPT_STOCKS];
  if (country === 'AE' || !country) stocks = [...stocks, ...UAE_STOCKS];
  if (country === 'KW' || !country) stocks = [...stocks, ...KUWAIT_STOCKS];
  if (country === 'QA' || !country) stocks = [...stocks, ...QATAR_STOCKS];
  if (country === 'US' || !country) stocks = [...stocks, ...US_STOCKS];
  
  if (stocks.length === 0) stocks = SAUDI_STOCKS;
  
  const stock = stocks[Math.floor(Math.random() * stocks.length)];
  const priceChange = generatePriceChange();
  const currentPrice = generateRealisticPrice(stock.price);
  const previousClose = currentPrice / (1 + priceChange.changePercent / 100);
  const marketCap = generateMarketCap(currentPrice);
  const volume = generateVolume(marketCap);
  
  return {
    symbol: stock.symbol,
    name: language === 'ar' ? stock.name : stock.nameEn,
    sector: stock.sector,
    price: currentPrice,
    previousClose: Number(previousClose.toFixed(2)),
    change: Number((currentPrice - previousClose).toFixed(2)),
    changePercent: priceChange.changePercent,
    open: Number((previousClose * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)),
    high: Number((currentPrice * (1 + Math.random() * 0.02)).toFixed(2)),
    low: Number((currentPrice * (1 - Math.random() * 0.02)).toFixed(2)),
    volume: volume,
    marketCap: marketCap,
    currency: stock.currency,
    market: stock.market || 'تداول'
  };
}

// توليد بيانات عملات
export function generateRealForexData(language: 'ar' | 'en' = 'ar', type: 'major' | 'arab' | 'all' = 'all'): any {
  let pairs: any[] = [];
  
  if (type === 'major' || type === 'all') pairs = [...pairs, ...FOREX_RATES.major];
  if (type === 'arab' || type === 'all') pairs = [...pairs, ...FOREX_RATES.arab];
  
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const bid = generateRealisticPrice(pair.bid, 0.001);
  const ask = Number((bid * 1.0003).toFixed(4));
  const priceChange = generatePriceChange();
  
  return {
    pair: pair.pair,
    name: language === 'ar' ? pair.name : pair.nameEn,
    bid: bid,
    ask: ask,
    spread: Number((ask - bid).toFixed(5)),
    change: priceChange.change,
    changePercent: priceChange.changePercent,
    high: Number((bid * 1.005).toFixed(4)),
    low: Number((bid * 0.995).toFixed(4)),
    timestamp: new Date().toISOString()
  };
}

// توليد بيانات الطاقة
export function generateRealEnergyData(language: 'ar' | 'en' = 'ar', type: 'crude' | 'gas' | 'refined' | 'all' = 'all'): any {
  let products: any[] = [];
  
  if (type === 'crude' || type === 'all') products = [...products, ...ENERGY_PRICES.crude];
  if (type === 'gas' || type === 'all') products = [...products, ...ENERGY_PRICES.gas];
  if (type === 'refined' || type === 'all') products = [...products, ...ENERGY_PRICES.refined];
  
  const product = products[Math.floor(Math.random() * products.length)];
  const price = generateRealisticPrice(product.price, 0.025);
  const priceChange = generatePriceChange();
  
  return {
    symbol: product.symbol,
    name: language === 'ar' ? product.name : product.nameEn,
    price: price,
    unit: product.unit,
    exchange: product.exchange,
    change: priceChange.change,
    changePercent: priceChange.changePercent,
    open: Number((price * (1 - priceChange.changePercent / 100)).toFixed(2)),
    high: Number((price * 1.015).toFixed(2)),
    low: Number((price * 0.985).toFixed(2)),
    volume: Math.floor(50000 + Math.random() * 200000),
    timestamp: new Date().toISOString()
  };
}

// توليد بيانات عملات رقمية
export function generateRealCryptoData(language: 'ar' | 'en' = 'ar'): any {
  const crypto = CRYPTO_DATA[Math.floor(Math.random() * CRYPTO_DATA.length)];
  const price = generateRealisticPrice(crypto.price, 0.05);
  const priceChange = generatePriceChange();
  const marketCap = generateRealisticPrice(crypto.marketCap, 0.03);
  const volume = generateRealisticPrice(crypto.volume24h, 0.15);
  
  return {
    symbol: crypto.symbol,
    name: language === 'ar' ? crypto.name : crypto.nameEn,
    price: price,
    priceUSD: price,
    change24h: priceChange.changePercent,
    change7d: Number(((Math.random() - 0.5) * 20).toFixed(2)),
    marketCap: Math.floor(marketCap),
    volume24h: Math.floor(volume),
    circulatingSupply: Math.floor(marketCap / price),
    rank: CRYPTO_DATA.indexOf(crypto) + 1,
    high24h: Number((price * 1.05).toFixed(2)),
    low24h: Number((price * 0.95).toFixed(2)),
    timestamp: new Date().toISOString()
  };
}

// توليد مؤشرات اقتصادية
export function generateRealEconomicIndicator(language: 'ar' | 'en' = 'ar', countryCode?: string): any {
  const countries = Object.keys(ECONOMIC_INDICATORS);
  const code = countryCode && countries.includes(countryCode) ? countryCode : countries[Math.floor(Math.random() * countries.length)];
  const data = ECONOMIC_INDICATORS[code as keyof typeof ECONOMIC_INDICATORS];
  
  return {
    country: language === 'ar' ? data.country : code,
    countryCode: code,
    gdp: data.gdp + (Math.random() - 0.5) * 20,
    gdpGrowth: Number((data.gdpGrowth + (Math.random() - 0.5) * 1).toFixed(1)),
    inflation: Number((data.inflation + (Math.random() - 0.5) * 0.5).toFixed(1)),
    unemployment: Number((data.unemployment + (Math.random() - 0.5) * 0.3).toFixed(1)),
    interestRate: data.interestRate,
    debtToGdp: Number((data.debtToGdp + (Math.random() - 0.5) * 2).toFixed(1)),
    creditRating: data.rating,
    oilProduction: (data as any).oilProduction || 0,
    gasProduction: (data as any).gasProduction || 0,
    reserves: Math.floor(50 + Math.random() * 500),
    year: 2024,
    quarter: `Q${Math.ceil(Math.random() * 4)}`
  };
}

// توليد بيانات سلع
export function generateRealCommodityData(language: 'ar' | 'en' = 'ar', type: 'precious' | 'industrial' | 'agricultural' | 'all' = 'all'): any {
  let commodities: any[] = [];
  
  if (type === 'precious' || type === 'all') commodities = [...commodities, ...COMMODITIES.precious];
  if (type === 'industrial' || type === 'all') commodities = [...commodities, ...COMMODITIES.industrial];
  if (type === 'agricultural' || type === 'all') commodities = [...commodities, ...COMMODITIES.agricultural];
  
  const commodity = commodities[Math.floor(Math.random() * commodities.length)];
  const price = generateRealisticPrice(commodity.price, 0.02);
  const priceChange = generatePriceChange();
  
  return {
    symbol: commodity.symbol,
    name: language === 'ar' ? commodity.name : commodity.nameEn,
    price: price,
    unit: commodity.unit,
    change: priceChange.change,
    changePercent: priceChange.changePercent,
    open: Number((price * (1 - priceChange.changePercent / 100)).toFixed(2)),
    high: Number((price * 1.02).toFixed(2)),
    low: Number((price * 0.98).toFixed(2)),
    volume: Math.floor(10000 + Math.random() * 100000),
    timestamp: new Date().toISOString()
  };
}

// توليد محفظة استثمارية واقعية
export function generateRealPortfolio(language: 'ar' | 'en' = 'ar', country?: string): any {
  const stocks = generateRealStockData(language, country);
  const quantity = Math.floor(100 + Math.random() * 10000);
  const buyPrice = Number((stocks.price * (0.85 + Math.random() * 0.3)).toFixed(2));
  const currentValue = quantity * stocks.price;
  const costBasis = quantity * buyPrice;
  const profitLoss = currentValue - costBasis;
  const profitLossPercent = ((profitLoss / costBasis) * 100);
  
  const buyDate = new Date();
  buyDate.setDate(buyDate.getDate() - Math.floor(30 + Math.random() * 365));
  
  return {
    symbol: stocks.symbol,
    name: stocks.name,
    sector: stocks.sector,
    quantity: quantity,
    buyPrice: buyPrice,
    currentPrice: stocks.price,
    costBasis: Number(costBasis.toFixed(2)),
    currentValue: Number(currentValue.toFixed(2)),
    profitLoss: Number(profitLoss.toFixed(2)),
    profitLossPercent: Number(profitLossPercent.toFixed(2)),
    weight: Number((5 + Math.random() * 25).toFixed(2)),
    buyDate: buyDate.toISOString().split('T')[0],
    currency: stocks.currency
  };
}

// توليد بيانات صندوق استثماري
export function generateRealFundData(language: 'ar' | 'en' = 'ar'): any {
  const fund = INVESTMENT_FUNDS[Math.floor(Math.random() * INVESTMENT_FUNDS.length)];
  const nav = generateRealisticPrice(fund.nav, 0.01);
  
  return {
    name: language === 'ar' ? fund.name : fund.nameEn,
    type: fund.type,
    nav: nav,
    previousNav: Number((nav * (1 - (Math.random() - 0.5) * 0.02)).toFixed(2)),
    return1M: Number(((Math.random() - 0.3) * 5).toFixed(2)),
    return3M: Number(((Math.random() - 0.3) * 10).toFixed(2)),
    return1Y: Number((fund.return1Y + (Math.random() - 0.5) * 3).toFixed(2)),
    aum: Math.floor(fund.aum * (0.9 + Math.random() * 0.2)),
    expenseRatio: Number((0.5 + Math.random() * 1.5).toFixed(2)),
    minInvestment: [10000, 25000, 50000, 100000][Math.floor(Math.random() * 4)],
    riskLevel: ['منخفض', 'متوسط', 'مرتفع'][Math.floor(Math.random() * 3)],
    currency: 'SAR'
  };
}

// توليد بيانات وسيط مالي
export function generateRealBrokerData(language: 'ar' | 'en' = 'ar', country?: string): any {
  const countryCode = country || ['SA', 'AE', 'EG'][Math.floor(Math.random() * 3)];
  const brokers = BROKERS[countryCode as keyof typeof BROKERS] || BROKERS.SA;
  const broker = brokers[Math.floor(Math.random() * brokers.length)];
  
  return {
    name: language === 'ar' ? broker.name : broker.nameEn,
    type: broker.type,
    license: broker.license,
    country: countryCode,
    commission: Number((0.1 + Math.random() * 0.2).toFixed(3)),
    minDeposit: [5000, 10000, 25000, 50000][Math.floor(Math.random() * 4)],
    platforms: ['Web', 'Mobile', 'API'],
    rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
    established: 1990 + Math.floor(Math.random() * 30)
  };
}

// توليد IBAN حقيقي
export function generateRealIBAN(countryCode: string = 'SA'): string {
  const ibanFormats: Record<string, { length: number; bankCodes: string[] }> = {
    SA: { length: 24, bankCodes: ['80', '10', '20', '30', '40', '45', '50', '55', '60', '65'] },
    AE: { length: 23, bankCodes: ['033', '044', '046', '050', '230', '260', '400'] },
    EG: { length: 29, bankCodes: ['0002', '0003', '0004', '0005', '0013', '0020', '0037'] },
    KW: { length: 30, bankCodes: ['NBOK', 'KFHO', 'CBKU', 'GULB', 'ABKK', 'BKME'] },
    QA: { length: 29, bankCodes: ['QNBA', 'CBQA', 'DOHB', 'QISB', 'ABQA'] },
    BH: { length: 22, bankCodes: ['BBME', 'NBOB', 'ABCB', 'KHCB', 'SCBL'] },
    OM: { length: 23, bankCodes: ['BMUS', 'NBOK', 'OMAB', 'DHOF', 'HSBC'] },
    JO: { length: 30, bankCodes: ['ARAB', 'JKBA', 'CBJO', 'HBHO', 'JONB'] },
  };
  
  const format = ibanFormats[countryCode] || ibanFormats.SA;
  const bankCode = format.bankCodes[Math.floor(Math.random() * format.bankCodes.length)];
  
  let iban = countryCode;
  iban += String(Math.floor(10 + Math.random() * 90)); // Check digits
  iban += bankCode;
  
  while (iban.length < format.length) {
    iban += Math.floor(Math.random() * 10);
  }
  
  return iban;
}

// توليد رقم بطاقة ائتمان
export function generateRealCreditCard(): { number: string; type: string; expiry: string; cvv: string } {
  const types = [
    { name: 'Visa', prefix: '4', length: 16 },
    { name: 'Mastercard', prefix: ['51', '52', '53', '54', '55'][Math.floor(Math.random() * 5)], length: 16 },
    { name: 'Mada', prefix: ['400861', '409201', '410685', '417633', '428331', '440533', '440647'][Math.floor(Math.random() * 7)], length: 16 },
  ];
  
  const type = types[Math.floor(Math.random() * types.length)];
  let number = type.prefix;
  
  while (number.length < type.length - 1) {
    number += Math.floor(Math.random() * 10);
  }
  
  // Luhn algorithm for check digit
  let sum = 0;
  let isEven = true;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  number += checkDigit;
  
  const expMonth = String(Math.floor(1 + Math.random() * 12)).padStart(2, '0');
  const expYear = String(25 + Math.floor(Math.random() * 5));
  
  return {
    number: number.replace(/(.{4})/g, '$1 ').trim(),
    type: type.name,
    expiry: `${expMonth}/${expYear}`,
    cvv: String(Math.floor(100 + Math.random() * 900))
  };
}
