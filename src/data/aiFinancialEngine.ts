// ===================================================
// محرك الذكاء الاصطناعي للبيانات المالية والاقتصادية
// AI Financial & Economic Data Engine
// ===================================================

// ==================== البورصات العربية الحقيقية ====================

export const REAL_STOCK_EXCHANGES = {
  TADAWUL: {
    name: { ar: 'السوق المالية السعودية (تداول)', en: 'Saudi Stock Exchange (Tadawul)' },
    code: 'TADAWUL',
    currency: 'SAR',
    country: 'SA',
    index: { name: 'TASI', value: 12450.32, change: 0.85 },
    tradingHours: '10:00 - 15:00',
    stocks: [
      { symbol: '2222', name: { ar: 'أرامكو السعودية', en: 'Saudi Aramco' }, sector: 'energy', price: 28.45, marketCap: 7200000000000, pe: 15.2, dividend: 4.5, volume: 15000000 },
      { symbol: '1180', name: { ar: 'الأهلي السعودي', en: 'SNB - Saudi National Bank' }, sector: 'banking', price: 45.60, marketCap: 450000000000, pe: 12.8, dividend: 3.2, volume: 8000000 },
      { symbol: '2010', name: { ar: 'سابك', en: 'SABIC' }, sector: 'materials', price: 78.90, marketCap: 280000000000, pe: 18.5, dividend: 5.0, volume: 5000000 },
      { symbol: '7010', name: { ar: 'الاتصالات السعودية', en: 'STC' }, sector: 'telecom', price: 42.30, marketCap: 210000000000, pe: 14.2, dividend: 4.8, volume: 6000000 },
      { symbol: '1010', name: { ar: 'الرياض', en: 'Riyad Bank' }, sector: 'banking', price: 28.15, marketCap: 85000000000, pe: 11.5, dividend: 3.8, volume: 4500000 },
      { symbol: '1120', name: { ar: 'الراجحي', en: 'Al Rajhi Bank' }, sector: 'banking', price: 82.50, marketCap: 320000000000, pe: 16.8, dividend: 2.9, volume: 7500000 },
      { symbol: '2310', name: { ar: 'سبكيم', en: 'SIPCHEM' }, sector: 'chemicals', price: 35.20, marketCap: 25000000000, pe: 22.1, dividend: 2.5, volume: 2000000 },
      { symbol: '4030', name: { ar: 'البحري', en: 'Bahri' }, sector: 'transport', price: 38.75, marketCap: 18000000000, pe: 19.3, dividend: 3.1, volume: 1500000 },
      { symbol: '2350', name: { ar: 'كيان السعودية', en: 'KAYAN' }, sector: 'chemicals', price: 15.80, marketCap: 22000000000, pe: 25.6, dividend: 1.8, volume: 3500000 },
      { symbol: '4200', name: { ar: 'الدريس', en: 'Aldrees' }, sector: 'retail', price: 72.40, marketCap: 8000000000, pe: 13.9, dividend: 4.2, volume: 800000 },
      { symbol: '2380', name: { ar: 'بترو رابغ', en: 'Petro Rabigh' }, sector: 'energy', price: 23.45, marketCap: 35000000000, pe: 28.4, dividend: 1.5, volume: 2800000 },
      { symbol: '4001', name: { ar: 'أسمنت الجنوب', en: 'Southern Cement' }, sector: 'cement', price: 58.30, marketCap: 12000000000, pe: 14.7, dividend: 5.5, volume: 600000 },
      { symbol: '2170', name: { ar: 'المراعي', en: 'Almarai' }, sector: 'food', price: 54.80, marketCap: 55000000000, pe: 21.3, dividend: 2.2, volume: 1200000 },
      { symbol: '4003', name: { ar: 'أسمنت المنطقة الشرقية', en: 'Eastern Cement' }, sector: 'cement', price: 42.15, marketCap: 8500000000, pe: 12.1, dividend: 6.2, volume: 450000 },
      { symbol: '1150', name: { ar: 'عناية', en: 'Enaya' }, sector: 'insurance', price: 18.90, marketCap: 1500000000, pe: 9.8, dividend: 0, volume: 250000 },
      { symbol: '2030', name: { ar: 'المصافي', en: 'SARCO' }, sector: 'energy', price: 125.60, marketCap: 15000000000, pe: 8.5, dividend: 7.8, volume: 350000 },
      { symbol: '4191', name: { ar: 'معادن', en: 'Maaden' }, sector: 'mining', price: 48.25, marketCap: 90000000000, pe: 35.2, dividend: 1.2, volume: 4200000 },
      { symbol: '3010', name: { ar: 'أسمنت العربية', en: 'Arabian Cement' }, sector: 'cement', price: 31.50, marketCap: 6500000000, pe: 11.8, dividend: 5.8, volume: 380000 },
      { symbol: '2060', name: { ar: 'التصنيع', en: 'Tasnee' }, sector: 'industrial', price: 12.45, marketCap: 8200000000, pe: 45.2, dividend: 0.8, volume: 1800000 },
      { symbol: '6010', name: { ar: 'نادك', en: 'NADEC' }, sector: 'agriculture', price: 38.90, marketCap: 4500000000, pe: 18.6, dividend: 2.8, volume: 520000 },
    ]
  },
  EGX: {
    name: { ar: 'البورصة المصرية', en: 'Egyptian Exchange' },
    code: 'EGX',
    currency: 'EGP',
    country: 'EG',
    index: { name: 'EGX30', value: 28450.18, change: -0.32 },
    tradingHours: '10:00 - 14:30',
    stocks: [
      { symbol: 'COMI', name: { ar: 'البنك التجاري الدولي', en: 'CIB - Commercial International Bank' }, sector: 'banking', price: 72.50, marketCap: 180000000000, pe: 8.2, dividend: 4.5, volume: 12000000 },
      { symbol: 'HRHO', name: { ar: 'طلعت مصطفى', en: 'Talaat Moustafa Group' }, sector: 'realestate', price: 45.30, marketCap: 95000000000, pe: 15.6, dividend: 2.1, volume: 8500000 },
      { symbol: 'ETEL', name: { ar: 'المصرية للاتصالات', en: 'Telecom Egypt' }, sector: 'telecom', price: 28.75, marketCap: 48000000000, pe: 6.8, dividend: 8.2, volume: 5000000 },
      { symbol: 'SWDY', name: { ar: 'السويدي إلكتريك', en: 'El Sewedy Electric' }, sector: 'industrial', price: 15.80, marketCap: 35000000000, pe: 11.2, dividend: 3.5, volume: 7200000 },
      { symbol: 'EFIH', name: { ar: 'إي فاينانس', en: 'E-Finance' }, sector: 'fintech', price: 18.25, marketCap: 28000000000, pe: 22.5, dividend: 1.8, volume: 4500000 },
      { symbol: 'ORWE', name: { ar: 'أوراسكوم للإنشاءات', en: 'Orascom Construction' }, sector: 'construction', price: 125.40, marketCap: 65000000000, pe: 9.5, dividend: 2.5, volume: 1500000 },
      { symbol: 'EKHO', name: { ar: 'مجموعة إيديتا', en: 'Edita Food Industries' }, sector: 'food', price: 22.60, marketCap: 18000000000, pe: 18.3, dividend: 1.2, volume: 3200000 },
      { symbol: 'PHDC', name: { ar: 'بالم هيلز', en: 'Palm Hills Developments' }, sector: 'realestate', price: 3.85, marketCap: 12000000000, pe: 8.9, dividend: 0, volume: 15000000 },
      { symbol: 'MNHD', name: { ar: 'مدينة نصر للإسكان', en: 'MNHD' }, sector: 'realestate', price: 5.42, marketCap: 9500000000, pe: 6.2, dividend: 5.5, volume: 8000000 },
      { symbol: 'CLHO', name: { ar: 'القلعة', en: 'Qalaa Holdings' }, sector: 'investment', price: 3.15, marketCap: 8000000000, pe: 12.8, dividend: 0, volume: 6500000 },
      { symbol: 'FWRY', name: { ar: 'فوري', en: 'Fawry' }, sector: 'fintech', price: 8.50, marketCap: 15000000000, pe: 45.2, dividend: 0, volume: 9000000 },
      { symbol: 'ESRS', name: { ar: 'إعمار مصر', en: 'Emaar Misr' }, sector: 'realestate', price: 4.25, marketCap: 18000000000, pe: 7.5, dividend: 3.2, volume: 7500000 },
      { symbol: 'AMOC', name: { ar: 'الإسكندرية للزيوت', en: 'Alexandria Mineral Oils' }, sector: 'oil', price: 8.90, marketCap: 5500000000, pe: 5.8, dividend: 6.5, volume: 2000000 },
      { symbol: 'OCDI', name: { ar: 'أوراسكوم للتنمية', en: 'Orascom Development' }, sector: 'tourism', price: 12.30, marketCap: 8000000000, pe: 15.2, dividend: 1.5, volume: 2500000 },
      { symbol: 'HELI', name: { ar: 'هليوبوليس', en: 'Heliopolis Housing' }, sector: 'realestate', price: 8.75, marketCap: 4200000000, pe: 4.5, dividend: 8.5, volume: 1800000 },
    ]
  },
  ADX: {
    name: { ar: 'سوق أبوظبي للأوراق المالية', en: 'Abu Dhabi Securities Exchange' },
    code: 'ADX',
    currency: 'AED',
    country: 'AE',
    index: { name: 'ADI', value: 9850.45, change: 1.25 },
    tradingHours: '10:00 - 14:00',
    stocks: [
      { symbol: 'FAB', name: { ar: 'بنك أبوظبي الأول', en: 'First Abu Dhabi Bank' }, sector: 'banking', price: 15.80, marketCap: 175000000000, pe: 9.5, dividend: 5.2, volume: 18000000 },
      { symbol: 'ADNOCDIST', name: { ar: 'أدنوك للتوزيع', en: 'ADNOC Distribution' }, sector: 'energy', price: 4.25, marketCap: 52000000000, pe: 18.2, dividend: 4.8, volume: 25000000 },
      { symbol: 'ETISALAT', name: { ar: 'اتصالات', en: 'Etisalat' }, sector: 'telecom', price: 28.50, marketCap: 245000000000, pe: 22.5, dividend: 3.5, volume: 8000000 },
      { symbol: 'ALDAR', name: { ar: 'الدار العقارية', en: 'Aldar Properties' }, sector: 'realestate', price: 6.85, marketCap: 55000000000, pe: 12.8, dividend: 3.8, volume: 35000000 },
      { symbol: 'IHC', name: { ar: 'القابضة الدولية', en: 'International Holding Company' }, sector: 'investment', price: 425.00, marketCap: 850000000000, pe: 85.5, dividend: 0.5, volume: 2500000 },
      { symbol: 'ADCB', name: { ar: 'أبوظبي التجاري', en: 'ADCB' }, sector: 'banking', price: 9.25, marketCap: 65000000000, pe: 8.2, dividend: 5.8, volume: 12000000 },
      { symbol: 'TAQA', name: { ar: 'أبوظبي الوطنية للطاقة', en: 'TAQA' }, sector: 'energy', price: 3.45, marketCap: 125000000000, pe: 15.5, dividend: 2.5, volume: 15000000 },
      { symbol: 'ADIB', name: { ar: 'أبوظبي الإسلامي', en: 'ADIB' }, sector: 'banking', price: 12.50, marketCap: 45000000000, pe: 10.2, dividend: 4.2, volume: 8000000 },
      { symbol: 'MULTIPLY', name: { ar: 'مالتبلاي', en: 'Multiply Group' }, sector: 'investment', price: 2.85, marketCap: 35000000000, pe: 25.5, dividend: 1.5, volume: 45000000 },
      { symbol: 'ADPORTS', name: { ar: 'موانئ أبوظبي', en: 'AD Ports Group' }, sector: 'logistics', price: 5.50, marketCap: 28000000000, pe: 18.8, dividend: 2.8, volume: 20000000 },
    ]
  },
  DFM: {
    name: { ar: 'سوق دبي المالي', en: 'Dubai Financial Market' },
    code: 'DFM',
    currency: 'AED',
    country: 'AE',
    index: { name: 'DFMGI', value: 4125.80, change: 0.65 },
    tradingHours: '10:00 - 14:00',
    stocks: [
      { symbol: 'EMAAR', name: { ar: 'إعمار العقارية', en: 'Emaar Properties' }, sector: 'realestate', price: 8.50, marketCap: 75000000000, pe: 8.5, dividend: 4.2, volume: 45000000 },
      { symbol: 'DIB', name: { ar: 'دبي الإسلامي', en: 'Dubai Islamic Bank' }, sector: 'banking', price: 6.25, marketCap: 48000000000, pe: 7.8, dividend: 5.5, volume: 25000000 },
      { symbol: 'DEWA', name: { ar: 'هيئة كهرباء ومياه دبي', en: 'DEWA' }, sector: 'utilities', price: 2.65, marketCap: 132000000000, pe: 18.5, dividend: 6.5, volume: 85000000 },
      { symbol: 'SALIK', name: { ar: 'سالك', en: 'Salik' }, sector: 'transport', price: 3.85, marketCap: 28000000000, pe: 22.5, dividend: 4.8, volume: 35000000 },
      { symbol: 'TECOM', name: { ar: 'تيكوم', en: 'TECOM Group' }, sector: 'realestate', price: 4.50, marketCap: 22000000000, pe: 15.2, dividend: 3.5, volume: 18000000 },
      { symbol: 'DU', name: { ar: 'الإمارات للاتصالات المتكاملة', en: 'du' }, sector: 'telecom', price: 6.80, marketCap: 31000000000, pe: 12.8, dividend: 7.2, volume: 12000000 },
      { symbol: 'DAMAC', name: { ar: 'داماك العقارية', en: 'DAMAC Properties' }, sector: 'realestate', price: 4.25, marketCap: 25000000000, pe: 6.5, dividend: 0, volume: 28000000 },
      { symbol: 'EMIRATES', name: { ar: 'طيران الإمارات', en: 'Emirates NBD' }, sector: 'banking', price: 18.50, marketCap: 115000000000, pe: 6.2, dividend: 4.5, volume: 8000000 },
      { symbol: 'ARMX', name: { ar: 'أرامكس', en: 'Aramex' }, sector: 'logistics', price: 2.95, marketCap: 4500000000, pe: 15.5, dividend: 3.2, volume: 15000000 },
      { symbol: 'PARKIN', name: { ar: 'باركن', en: 'Parkin' }, sector: 'transport', price: 3.20, marketCap: 8000000000, pe: 18.5, dividend: 5.5, volume: 22000000 },
    ]
  },
  BOURSA_KUWAIT: {
    name: { ar: 'بورصة الكويت', en: 'Boursa Kuwait' },
    code: 'BK',
    currency: 'KWD',
    country: 'KW',
    index: { name: 'All-Share', value: 7250.45, change: 0.42 },
    tradingHours: '09:00 - 12:45',
    stocks: [
      { symbol: 'NBK', name: { ar: 'بنك الكويت الوطني', en: 'National Bank of Kuwait' }, sector: 'banking', price: 1.050, marketCap: 18500000000, pe: 12.5, dividend: 3.8, volume: 8000000 },
      { symbol: 'ZAIN', name: { ar: 'زين', en: 'Zain' }, sector: 'telecom', price: 0.620, marketCap: 6800000000, pe: 15.2, dividend: 5.5, volume: 12000000 },
      { symbol: 'KFH', name: { ar: 'بيت التمويل الكويتي', en: 'Kuwait Finance House' }, sector: 'banking', price: 0.850, marketCap: 28500000000, pe: 18.5, dividend: 2.8, volume: 15000000 },
      { symbol: 'BOUBYAN', name: { ar: 'بنك بوبيان', en: 'Boubyan Bank' }, sector: 'banking', price: 0.720, marketCap: 4500000000, pe: 22.5, dividend: 1.5, volume: 5000000 },
      { symbol: 'AGILITY', name: { ar: 'أجيليتي', en: 'Agility' }, sector: 'logistics', price: 0.980, marketCap: 5200000000, pe: 8.5, dividend: 4.2, volume: 6500000 },
      { symbol: 'MABANEE', name: { ar: 'المباني', en: 'Mabanee' }, sector: 'realestate', price: 0.880, marketCap: 4200000000, pe: 14.5, dividend: 3.5, volume: 3500000 },
      { symbol: 'KIPCO', name: { ar: 'كيبكو', en: 'KIPCO' }, sector: 'investment', price: 0.195, marketCap: 1800000000, pe: 8.2, dividend: 2.5, volume: 8500000 },
      { symbol: 'HUMANSOFT', name: { ar: 'هيومن سوفت', en: 'Humansoft' }, sector: 'education', price: 3.250, marketCap: 1200000000, pe: 15.8, dividend: 6.5, volume: 500000 },
    ]
  },
  QSE: {
    name: { ar: 'بورصة قطر', en: 'Qatar Stock Exchange' },
    code: 'QSE',
    currency: 'QAR',
    country: 'QA',
    index: { name: 'QE Index', value: 10450.25, change: -0.18 },
    tradingHours: '09:30 - 13:15',
    stocks: [
      { symbol: 'QNBK', name: { ar: 'بنك قطر الوطني', en: 'QNB Group' }, sector: 'banking', price: 15.80, marketCap: 145000000000, pe: 8.5, dividend: 4.2, volume: 2500000 },
      { symbol: 'ORDS', name: { ar: 'أوريدو', en: 'Ooredoo' }, sector: 'telecom', price: 9.25, marketCap: 28000000000, pe: 12.5, dividend: 5.5, volume: 1800000 },
      { symbol: 'QIBK', name: { ar: 'مصرف قطر الإسلامي', en: 'Qatar Islamic Bank' }, sector: 'banking', price: 18.50, marketCap: 45000000000, pe: 10.2, dividend: 3.8, volume: 1200000 },
      { symbol: 'QGTS', name: { ar: 'ناقلات', en: 'Qatar Gas Transport' }, sector: 'transport', price: 4.25, marketCap: 24000000000, pe: 15.5, dividend: 4.5, volume: 3500000 },
      { symbol: 'IQCD', name: { ar: 'صناعات قطر', en: 'Industries Qatar' }, sector: 'industrial', price: 12.80, marketCap: 78000000000, pe: 6.8, dividend: 7.5, volume: 2000000 },
      { symbol: 'BRES', name: { ar: 'بروة العقارية', en: 'Barwa Real Estate' }, sector: 'realestate', price: 3.15, marketCap: 12000000000, pe: 8.5, dividend: 6.2, volume: 4500000 },
      { symbol: 'MARK', name: { ar: 'ماركة', en: 'Masraf Al Rayan' }, sector: 'banking', price: 2.65, marketCap: 20000000000, pe: 11.5, dividend: 4.8, volume: 5000000 },
      { symbol: 'QFLS', name: { ar: 'قطر للوقود', en: 'Qatar Fuel' }, sector: 'energy', price: 18.25, marketCap: 18000000000, pe: 12.2, dividend: 5.5, volume: 800000 },
    ]
  }
};

// ==================== البورصات العالمية ====================

export const GLOBAL_STOCK_EXCHANGES = {
  NYSE: {
    name: { ar: 'بورصة نيويورك', en: 'New York Stock Exchange' },
    code: 'NYSE',
    currency: 'USD',
    country: 'US',
    index: { name: 'Dow Jones', value: 38750.25, change: 0.45 },
    stocks: [
      { symbol: 'AAPL', name: { ar: 'أبل', en: 'Apple Inc.' }, sector: 'technology', price: 178.50, marketCap: 2800000000000, pe: 28.5, dividend: 0.5, volume: 55000000 },
      { symbol: 'MSFT', name: { ar: 'مايكروسوفت', en: 'Microsoft' }, sector: 'technology', price: 415.20, marketCap: 3100000000000, pe: 35.2, dividend: 0.7, volume: 22000000 },
      { symbol: 'GOOGL', name: { ar: 'ألفابت', en: 'Alphabet Inc.' }, sector: 'technology', price: 155.80, marketCap: 1950000000000, pe: 25.8, dividend: 0, volume: 25000000 },
      { symbol: 'AMZN', name: { ar: 'أمازون', en: 'Amazon' }, sector: 'ecommerce', price: 185.50, marketCap: 1920000000000, pe: 62.5, dividend: 0, volume: 42000000 },
      { symbol: 'META', name: { ar: 'ميتا', en: 'Meta Platforms' }, sector: 'technology', price: 505.25, marketCap: 1300000000000, pe: 28.5, dividend: 0, volume: 18000000 },
      { symbol: 'TSLA', name: { ar: 'تسلا', en: 'Tesla' }, sector: 'automotive', price: 175.80, marketCap: 560000000000, pe: 45.2, dividend: 0, volume: 85000000 },
      { symbol: 'JPM', name: { ar: 'جي بي مورجان', en: 'JPMorgan Chase' }, sector: 'banking', price: 198.50, marketCap: 570000000000, pe: 11.5, dividend: 2.2, volume: 8500000 },
      { symbol: 'V', name: { ar: 'فيزا', en: 'Visa Inc.' }, sector: 'fintech', price: 285.20, marketCap: 580000000000, pe: 30.5, dividend: 0.7, volume: 6500000 },
      { symbol: 'JNJ', name: { ar: 'جونسون آند جونسون', en: 'Johnson & Johnson' }, sector: 'healthcare', price: 158.75, marketCap: 385000000000, pe: 15.2, dividend: 2.8, volume: 5500000 },
      { symbol: 'WMT', name: { ar: 'وولمارت', en: 'Walmart' }, sector: 'retail', price: 165.80, marketCap: 445000000000, pe: 28.5, dividend: 1.3, volume: 7500000 },
      { symbol: 'XOM', name: { ar: 'إكسون موبيل', en: 'Exxon Mobil' }, sector: 'energy', price: 118.50, marketCap: 475000000000, pe: 12.5, dividend: 3.2, volume: 15000000 },
      { symbol: 'CVX', name: { ar: 'شيفرون', en: 'Chevron' }, sector: 'energy', price: 162.25, marketCap: 305000000000, pe: 11.8, dividend: 3.8, volume: 8000000 },
    ]
  },
  NASDAQ: {
    name: { ar: 'ناسداك', en: 'NASDAQ' },
    code: 'NASDAQ',
    currency: 'USD',
    country: 'US',
    index: { name: 'NASDAQ Composite', value: 16250.45, change: 0.85 },
    stocks: [
      { symbol: 'NVDA', name: { ar: 'إنفيديا', en: 'NVIDIA' }, sector: 'technology', price: 875.50, marketCap: 2150000000000, pe: 65.5, dividend: 0.02, volume: 45000000 },
      { symbol: 'AMD', name: { ar: 'إيه إم دي', en: 'AMD' }, sector: 'technology', price: 165.80, marketCap: 268000000000, pe: 285.5, dividend: 0, volume: 52000000 },
      { symbol: 'INTC', name: { ar: 'إنتل', en: 'Intel' }, sector: 'technology', price: 42.50, marketCap: 180000000000, pe: 35.2, dividend: 1.2, volume: 35000000 },
      { symbol: 'NFLX', name: { ar: 'نتفليكس', en: 'Netflix' }, sector: 'entertainment', price: 625.80, marketCap: 275000000000, pe: 45.5, dividend: 0, volume: 5500000 },
      { symbol: 'PYPL', name: { ar: 'باي بال', en: 'PayPal' }, sector: 'fintech', price: 62.50, marketCap: 68000000000, pe: 18.5, dividend: 0, volume: 12000000 },
      { symbol: 'ADBE', name: { ar: 'أدوبي', en: 'Adobe' }, sector: 'software', price: 485.20, marketCap: 218000000000, pe: 42.5, dividend: 0, volume: 3500000 },
      { symbol: 'CRM', name: { ar: 'سيلزفورس', en: 'Salesforce' }, sector: 'software', price: 265.80, marketCap: 258000000000, pe: 85.5, dividend: 0, volume: 5000000 },
      { symbol: 'CSCO', name: { ar: 'سيسكو', en: 'Cisco Systems' }, sector: 'technology', price: 48.25, marketCap: 195000000000, pe: 15.2, dividend: 2.8, volume: 18000000 },
    ]
  },
  LSE: {
    name: { ar: 'بورصة لندن', en: 'London Stock Exchange' },
    code: 'LSE',
    currency: 'GBP',
    country: 'GB',
    index: { name: 'FTSE 100', value: 8125.50, change: 0.32 },
    stocks: [
      { symbol: 'SHEL', name: { ar: 'شل', en: 'Shell plc' }, sector: 'energy', price: 27.85, marketCap: 185000000000, pe: 8.5, dividend: 3.8, volume: 12000000 },
      { symbol: 'BP', name: { ar: 'بي بي', en: 'BP plc' }, sector: 'energy', price: 5.25, marketCap: 95000000000, pe: 6.5, dividend: 4.2, volume: 25000000 },
      { symbol: 'HSBA', name: { ar: 'إتش إس بي سي', en: 'HSBC Holdings' }, sector: 'banking', price: 6.85, marketCap: 135000000000, pe: 7.2, dividend: 5.5, volume: 35000000 },
      { symbol: 'AZN', name: { ar: 'أسترازينيكا', en: 'AstraZeneca' }, sector: 'healthcare', price: 118.50, marketCap: 185000000000, pe: 35.5, dividend: 1.8, volume: 3500000 },
      { symbol: 'ULVR', name: { ar: 'يونيليفر', en: 'Unilever' }, sector: 'consumer', price: 42.85, marketCap: 108000000000, pe: 18.5, dividend: 3.2, volume: 5500000 },
      { symbol: 'RIO', name: { ar: 'ريو تينتو', en: 'Rio Tinto' }, sector: 'mining', price: 55.25, marketCap: 92000000000, pe: 9.5, dividend: 5.8, volume: 4500000 },
      { symbol: 'GSK', name: { ar: 'جلاكسو سميث كلاين', en: 'GSK plc' }, sector: 'healthcare', price: 15.80, marketCap: 65000000000, pe: 12.5, dividend: 4.2, volume: 8500000 },
      { symbol: 'VOD', name: { ar: 'فودافون', en: 'Vodafone Group' }, sector: 'telecom', price: 0.72, marketCap: 19500000000, pe: 8.5, dividend: 8.5, volume: 75000000 },
    ]
  }
};

// ==================== أسعار العملات الحقيقية ====================

export const REAL_FOREX_RATES = {
  major: [
    { pair: 'EUR/USD', bid: 1.0875, ask: 1.0878, spread: 0.0003, change: 0.15, volume: 185000000000 },
    { pair: 'GBP/USD', bid: 1.2685, ask: 1.2688, spread: 0.0003, change: -0.08, volume: 125000000000 },
    { pair: 'USD/JPY', bid: 154.25, ask: 154.28, spread: 0.03, change: 0.25, volume: 145000000000 },
    { pair: 'USD/CHF', bid: 0.8925, ask: 0.8928, spread: 0.0003, change: 0.12, volume: 65000000000 },
    { pair: 'AUD/USD', bid: 0.6545, ask: 0.6548, spread: 0.0003, change: -0.22, volume: 85000000000 },
    { pair: 'USD/CAD', bid: 1.3685, ask: 1.3688, spread: 0.0003, change: 0.08, volume: 75000000000 },
    { pair: 'NZD/USD', bid: 0.6085, ask: 0.6088, spread: 0.0003, change: -0.15, volume: 35000000000 },
  ],
  arabic: [
    { pair: 'USD/SAR', bid: 3.7500, ask: 3.7510, spread: 0.001, change: 0.00, volume: 25000000000, country: 'SA' },
    { pair: 'USD/AED', bid: 3.6725, ask: 3.6730, spread: 0.0005, change: 0.00, volume: 35000000000, country: 'AE' },
    { pair: 'USD/EGP', bid: 48.50, ask: 48.75, spread: 0.25, change: 0.85, volume: 8500000000, country: 'EG' },
    { pair: 'USD/KWD', bid: 0.3068, ask: 0.3072, spread: 0.0004, change: 0.02, volume: 5500000000, country: 'KW' },
    { pair: 'USD/BHD', bid: 0.3760, ask: 0.3765, spread: 0.0005, change: 0.00, volume: 2500000000, country: 'BH' },
    { pair: 'USD/OMR', bid: 0.3845, ask: 0.3850, spread: 0.0005, change: 0.00, volume: 3500000000, country: 'OM' },
    { pair: 'USD/QAR', bid: 3.6400, ask: 3.6410, spread: 0.001, change: 0.00, volume: 8500000000, country: 'QA' },
    { pair: 'USD/JOD', bid: 0.7090, ask: 0.7095, spread: 0.0005, change: 0.00, volume: 2500000000, country: 'JO' },
    { pair: 'USD/LBP', bid: 89500, ask: 89750, spread: 250, change: 0.25, volume: 500000000, country: 'LB' },
    { pair: 'USD/MAD', bid: 9.95, ask: 10.05, spread: 0.1, change: 0.15, volume: 3500000000, country: 'MA' },
    { pair: 'USD/TND', bid: 3.12, ask: 3.15, spread: 0.03, change: 0.08, volume: 1500000000, country: 'TN' },
    { pair: 'USD/DZD', bid: 134.50, ask: 135.00, spread: 0.5, change: 0.12, volume: 2500000000, country: 'DZ' },
    { pair: 'USD/IQD', bid: 1310, ask: 1315, spread: 5, change: 0.05, volume: 3500000000, country: 'IQ' },
  ]
};

// ==================== أسعار النفط والطاقة الحقيقية ====================

export const REAL_ENERGY_PRICES = {
  crudeOil: [
    { name: { ar: 'خام برنت', en: 'Brent Crude' }, symbol: 'BRENT', price: 82.45, change: -0.85, unit: 'USD/barrel', volume: 850000, exchange: 'ICE' },
    { name: { ar: 'خام غرب تكساس', en: 'WTI Crude' }, symbol: 'WTI', price: 78.25, change: -0.65, unit: 'USD/barrel', volume: 1250000, exchange: 'NYMEX' },
    { name: { ar: 'خام دبي', en: 'Dubai Crude' }, symbol: 'DUBAI', price: 81.50, change: -0.45, unit: 'USD/barrel', volume: 450000, exchange: 'DME' },
    { name: { ar: 'خام عمان', en: 'Oman Crude' }, symbol: 'OMAN', price: 82.15, change: -0.55, unit: 'USD/barrel', volume: 350000, exchange: 'DME' },
    { name: { ar: 'خام مربان', en: 'Murban Crude' }, symbol: 'MURBAN', price: 83.25, change: -0.35, unit: 'USD/barrel', volume: 250000, exchange: 'ICE Futures Abu Dhabi' },
    { name: { ar: 'الخام العربي الخفيف', en: 'Arab Light' }, symbol: 'ARAB_LIGHT', price: 84.50, change: -0.25, unit: 'USD/barrel', volume: 650000, exchange: 'Saudi Aramco OSP' },
    { name: { ar: 'خام البصرة الخفيف', en: 'Basrah Light' }, symbol: 'BASRAH', price: 80.75, change: -0.75, unit: 'USD/barrel', volume: 450000, exchange: 'SOMO' },
  ],
  naturalGas: [
    { name: { ar: 'هنري هب', en: 'Henry Hub' }, symbol: 'NG', price: 2.85, change: 0.12, unit: 'USD/MMBtu', volume: 285000, exchange: 'NYMEX' },
    { name: { ar: 'TTF هولندا', en: 'TTF Netherlands' }, symbol: 'TTF', price: 28.50, change: -0.85, unit: 'EUR/MWh', volume: 125000, exchange: 'ICE' },
    { name: { ar: 'NBP بريطانيا', en: 'NBP UK' }, symbol: 'NBP', price: 75.25, change: -1.25, unit: 'GBp/therm', volume: 85000, exchange: 'ICE' },
    { name: { ar: 'غاز قطر المسال', en: 'Qatar LNG' }, symbol: 'QLNG', price: 12.50, change: 0.15, unit: 'USD/MMBtu', volume: 45000, exchange: 'Qatar Energy' },
    { name: { ar: 'JKM آسيا', en: 'JKM Asia' }, symbol: 'JKM', price: 11.85, change: 0.08, unit: 'USD/MMBtu', volume: 65000, exchange: 'Platts' },
  ],
  refinedProducts: [
    { name: { ar: 'البنزين RBOB', en: 'RBOB Gasoline' }, symbol: 'RB', price: 2.65, change: 0.05, unit: 'USD/gallon', volume: 125000, exchange: 'NYMEX' },
    { name: { ar: 'زيت التدفئة', en: 'Heating Oil' }, symbol: 'HO', price: 2.85, change: -0.03, unit: 'USD/gallon', volume: 85000, exchange: 'NYMEX' },
    { name: { ar: 'الديزل', en: 'ULSD Diesel' }, symbol: 'ULSD', price: 2.75, change: -0.02, unit: 'USD/gallon', volume: 95000, exchange: 'NYMEX' },
    { name: { ar: 'وقود الطائرات', en: 'Jet Fuel' }, symbol: 'JET', price: 2.45, change: 0.08, unit: 'USD/gallon', volume: 45000, exchange: 'Platts' },
  ],
  electricity: [
    { name: { ar: 'كهرباء أوروبا', en: 'EU Power' }, symbol: 'EUPWR', price: 85.50, change: -2.25, unit: 'EUR/MWh', exchange: 'EEX' },
    { name: { ar: 'كهرباء ألمانيا', en: 'Germany Power' }, symbol: 'DEPWR', price: 78.25, change: -1.85, unit: 'EUR/MWh', exchange: 'EEX' },
    { name: { ar: 'كهرباء بريطانيا', en: 'UK Power' }, symbol: 'UKPWR', price: 72.50, change: -0.95, unit: 'GBP/MWh', exchange: 'ICE' },
  ]
};

// ==================== العملات الرقمية الحقيقية ====================

export const REAL_CRYPTO_DATA = {
  coins: [
    { symbol: 'BTC', name: { ar: 'بيتكوين', en: 'Bitcoin' }, price: 67250.45, change24h: 2.85, marketCap: 1320000000000, volume24h: 32500000000, supply: 19650000, maxSupply: 21000000 },
    { symbol: 'ETH', name: { ar: 'إيثريوم', en: 'Ethereum' }, price: 3485.25, change24h: 3.15, marketCap: 418000000000, volume24h: 18500000000, supply: 120250000, maxSupply: null },
    { symbol: 'BNB', name: { ar: 'بينانس كوين', en: 'BNB' }, price: 585.50, change24h: 1.25, marketCap: 87500000000, volume24h: 1850000000, supply: 149500000, maxSupply: 200000000 },
    { symbol: 'SOL', name: { ar: 'سولانا', en: 'Solana' }, price: 145.25, change24h: 5.85, marketCap: 64500000000, volume24h: 3250000000, supply: 445000000, maxSupply: null },
    { symbol: 'XRP', name: { ar: 'ريبل', en: 'XRP' }, price: 0.5250, change24h: -1.25, marketCap: 28500000000, volume24h: 1250000000, supply: 54500000000, maxSupply: 100000000000 },
    { symbol: 'ADA', name: { ar: 'كاردانو', en: 'Cardano' }, price: 0.4850, change24h: 2.45, marketCap: 17000000000, volume24h: 485000000, supply: 35000000000, maxSupply: 45000000000 },
    { symbol: 'DOGE', name: { ar: 'دوجكوين', en: 'Dogecoin' }, price: 0.1585, change24h: 8.50, marketCap: 22500000000, volume24h: 2850000000, supply: 142500000000, maxSupply: null },
    { symbol: 'DOT', name: { ar: 'بولكادوت', en: 'Polkadot' }, price: 7.25, change24h: 1.85, marketCap: 9500000000, volume24h: 285000000, supply: 1300000000, maxSupply: null },
    { symbol: 'MATIC', name: { ar: 'بوليجون', en: 'Polygon' }, price: 0.7250, change24h: 3.25, marketCap: 7200000000, volume24h: 485000000, supply: 9900000000, maxSupply: 10000000000 },
    { symbol: 'AVAX', name: { ar: 'أفالانش', en: 'Avalanche' }, price: 38.50, change24h: 4.15, marketCap: 14500000000, volume24h: 585000000, supply: 375000000, maxSupply: 720000000 },
    { symbol: 'LINK', name: { ar: 'تشين لينك', en: 'Chainlink' }, price: 14.85, change24h: 2.85, marketCap: 8750000000, volume24h: 485000000, supply: 590000000, maxSupply: 1000000000 },
    { symbol: 'UNI', name: { ar: 'يونيسواب', en: 'Uniswap' }, price: 7.85, change24h: 1.55, marketCap: 5850000000, volume24h: 185000000, supply: 750000000, maxSupply: 1000000000 },
    { symbol: 'ATOM', name: { ar: 'كوزموس', en: 'Cosmos' }, price: 9.25, change24h: 2.15, marketCap: 3500000000, volume24h: 185000000, supply: 380000000, maxSupply: null },
    { symbol: 'LTC', name: { ar: 'لايتكوين', en: 'Litecoin' }, price: 85.50, change24h: 1.85, marketCap: 6350000000, volume24h: 485000000, supply: 74250000, maxSupply: 84000000 },
    { symbol: 'NEAR', name: { ar: 'نير', en: 'NEAR Protocol' }, price: 7.15, change24h: 5.25, marketCap: 7500000000, volume24h: 585000000, supply: 1050000000, maxSupply: null },
  ],
  exchanges: [
    { name: { ar: 'بينانس', en: 'Binance' }, volume24h: 25000000000, pairs: 1850, country: 'Global' },
    { name: { ar: 'كوينبيس', en: 'Coinbase' }, volume24h: 3500000000, pairs: 450, country: 'US' },
    { name: { ar: 'كراكن', en: 'Kraken' }, volume24h: 1250000000, pairs: 350, country: 'US' },
    { name: { ar: 'بايبت', en: 'Bybit' }, volume24h: 8500000000, pairs: 850, country: 'UAE' },
    { name: { ar: 'كوكوين', en: 'KuCoin' }, volume24h: 1850000000, pairs: 750, country: 'Seychelles' },
    { name: { ar: 'رين', en: 'Rain' }, volume24h: 85000000, pairs: 85, country: 'Bahrain' },
    { name: { ar: 'بتأويسس', en: 'BitOasis' }, volume24h: 45000000, pairs: 45, country: 'UAE' },
  ]
};

// ==================== المؤشرات الاقتصادية الحقيقية ====================

export const REAL_ECONOMIC_INDICATORS = {
  SA: { country: { ar: 'السعودية', en: 'Saudi Arabia' }, gdp: 1108, gdpGrowth: 4.5, inflation: 2.3, unemployment: 4.8, interestRate: 6.0, debtToGdp: 24.5, creditRating: 'A+', oilProduction: 9.5, reserves: 435 },
  AE: { country: { ar: 'الإمارات', en: 'UAE' }, gdp: 507, gdpGrowth: 5.8, inflation: 2.1, unemployment: 2.9, interestRate: 5.4, debtToGdp: 18.5, creditRating: 'AA', oilProduction: 3.2, reserves: 185 },
  EG: { country: { ar: 'مصر', en: 'Egypt' }, gdp: 476, gdpGrowth: 3.8, inflation: 28.5, unemployment: 7.2, interestRate: 27.25, debtToGdp: 92.5, creditRating: 'B-', oilProduction: 0.6, reserves: 35 },
  QA: { country: { ar: 'قطر', en: 'Qatar' }, gdp: 235, gdpGrowth: 4.2, inflation: 2.8, unemployment: 0.1, interestRate: 6.0, debtToGdp: 42.5, creditRating: 'AA-', gasProduction: 178, reserves: 45 },
  KW: { country: { ar: 'الكويت', en: 'Kuwait' }, gdp: 165, gdpGrowth: 3.5, inflation: 3.5, unemployment: 2.1, interestRate: 4.25, debtToGdp: 8.5, creditRating: 'A+', oilProduction: 2.7, reserves: 48 },
  OM: { country: { ar: 'عمان', en: 'Oman' }, gdp: 108, gdpGrowth: 4.8, inflation: 1.8, unemployment: 3.2, interestRate: 5.5, debtToGdp: 45.5, creditRating: 'BB+', oilProduction: 1.1, reserves: 18 },
  BH: { country: { ar: 'البحرين', en: 'Bahrain' }, gdp: 44, gdpGrowth: 3.2, inflation: 1.5, unemployment: 4.5, interestRate: 6.25, debtToGdp: 118.5, creditRating: 'B+', oilProduction: 0.2, reserves: 5 },
  JO: { country: { ar: 'الأردن', en: 'Jordan' }, gdp: 48, gdpGrowth: 2.5, inflation: 3.2, unemployment: 22.5, interestRate: 7.5, debtToGdp: 88.5, creditRating: 'B+', reserves: 18 },
  MA: { country: { ar: 'المغرب', en: 'Morocco' }, gdp: 142, gdpGrowth: 3.2, inflation: 4.5, unemployment: 11.5, interestRate: 3.0, debtToGdp: 72.5, creditRating: 'BB+', reserves: 35 },
  TN: { country: { ar: 'تونس', en: 'Tunisia' }, gdp: 48, gdpGrowth: 1.8, inflation: 8.5, unemployment: 15.5, interestRate: 8.0, debtToGdp: 82.5, creditRating: 'CCC', reserves: 8 },
  DZ: { country: { ar: 'الجزائر', en: 'Algeria' }, gdp: 195, gdpGrowth: 3.8, inflation: 5.5, unemployment: 12.5, interestRate: 3.0, debtToGdp: 55.5, creditRating: 'B', oilProduction: 1.0, reserves: 55 },
  IQ: { country: { ar: 'العراق', en: 'Iraq' }, gdp: 268, gdpGrowth: 5.5, inflation: 4.5, unemployment: 14.5, interestRate: 4.0, debtToGdp: 48.5, creditRating: 'B-', oilProduction: 4.5, reserves: 85 },
};

// ==================== السلع والمعادن ====================

export const REAL_COMMODITIES = {
  preciousMetals: [
    { name: { ar: 'الذهب', en: 'Gold' }, symbol: 'XAU', price: 2325.50, change: 0.85, unit: 'USD/oz', exchange: 'COMEX' },
    { name: { ar: 'الفضة', en: 'Silver' }, symbol: 'XAG', price: 27.85, change: 1.25, unit: 'USD/oz', exchange: 'COMEX' },
    { name: { ar: 'البلاتين', en: 'Platinum' }, symbol: 'XPT', price: 985.50, change: -0.45, unit: 'USD/oz', exchange: 'NYMEX' },
    { name: { ar: 'البلاديوم', en: 'Palladium' }, symbol: 'XPD', price: 1025.25, change: -1.25, unit: 'USD/oz', exchange: 'NYMEX' },
  ],
  industrialMetals: [
    { name: { ar: 'النحاس', en: 'Copper' }, symbol: 'HG', price: 4.55, change: 0.85, unit: 'USD/lb', exchange: 'COMEX' },
    { name: { ar: 'الألمنيوم', en: 'Aluminum' }, symbol: 'AL', price: 2485.50, change: 0.55, unit: 'USD/ton', exchange: 'LME' },
    { name: { ar: 'الزنك', en: 'Zinc' }, symbol: 'ZN', price: 2850.25, change: -0.35, unit: 'USD/ton', exchange: 'LME' },
    { name: { ar: 'النيكل', en: 'Nickel' }, symbol: 'NI', price: 18250.50, change: 1.15, unit: 'USD/ton', exchange: 'LME' },
    { name: { ar: 'الحديد', en: 'Iron Ore' }, symbol: 'FE', price: 118.50, change: -0.85, unit: 'USD/ton', exchange: 'SGX' },
  ],
  agricultural: [
    { name: { ar: 'القمح', en: 'Wheat' }, symbol: 'ZW', price: 585.25, change: 0.45, unit: 'USc/bushel', exchange: 'CBOT' },
    { name: { ar: 'الذرة', en: 'Corn' }, symbol: 'ZC', price: 445.50, change: -0.25, unit: 'USc/bushel', exchange: 'CBOT' },
    { name: { ar: 'فول الصويا', en: 'Soybeans' }, symbol: 'ZS', price: 1185.25, change: 0.85, unit: 'USc/bushel', exchange: 'CBOT' },
    { name: { ar: 'البن', en: 'Coffee' }, symbol: 'KC', price: 225.50, change: 2.15, unit: 'USc/lb', exchange: 'ICE' },
    { name: { ar: 'السكر', en: 'Sugar' }, symbol: 'SB', price: 22.85, change: -0.55, unit: 'USc/lb', exchange: 'ICE' },
    { name: { ar: 'القطن', en: 'Cotton' }, symbol: 'CT', price: 85.25, change: 0.35, unit: 'USc/lb', exchange: 'ICE' },
    { name: { ar: 'الكاكاو', en: 'Cocoa' }, symbol: 'CC', price: 8250.50, change: 3.25, unit: 'USD/ton', exchange: 'ICE' },
    { name: { ar: 'زيت النخيل', en: 'Palm Oil' }, symbol: 'FCPO', price: 3850.25, change: 0.75, unit: 'MYR/ton', exchange: 'Bursa Malaysia' },
  ]
};

// ==================== شركات الوساطة والاستثمار ====================

export const REAL_BROKERS = {
  SA: [
    { name: { ar: 'الراجحي المالية', en: 'Al Rajhi Capital' }, type: 'Full Service', assets: 85000000000, clients: 450000 },
    { name: { ar: 'الجزيرة كابيتال', en: 'Aljazira Capital' }, type: 'Full Service', assets: 25000000000, clients: 180000 },
    { name: { ar: 'السعودي الفرنسي كابيتال', en: 'Saudi Fransi Capital' }, type: 'Full Service', assets: 45000000000, clients: 120000 },
    { name: { ar: 'الأهلي كابيتال', en: 'SNB Capital' }, type: 'Full Service', assets: 125000000000, clients: 350000 },
    { name: { ar: 'الرياض كابيتال', en: 'Riyad Capital' }, type: 'Full Service', assets: 65000000000, clients: 280000 },
    { name: { ar: 'دراية المالية', en: 'Derayah Financial' }, type: 'Discount', assets: 15000000000, clients: 250000 },
    { name: { ar: 'الاستثمار كابيتال', en: 'SAIB Capital' }, type: 'Full Service', assets: 18000000000, clients: 85000 },
  ],
  AE: [
    { name: { ar: 'الإمارات دبي الوطني كابيتال', en: 'Emirates NBD Capital' }, type: 'Full Service', assets: 35000000000, clients: 125000 },
    { name: { ar: 'أبوظبي الأول للأوراق المالية', en: 'FAB Securities' }, type: 'Full Service', assets: 28000000000, clients: 95000 },
    { name: { ar: 'شعاع كابيتال', en: 'Shuaa Capital' }, type: 'Investment Bank', assets: 8500000000, clients: 45000 },
    { name: { ar: 'المشرق كابيتال', en: 'Mashreq Capital' }, type: 'Full Service', assets: 12000000000, clients: 65000 },
    { name: { ar: 'أرقام كابيتال', en: 'Arqaam Capital' }, type: 'Investment Bank', assets: 5500000000, clients: 25000 },
  ],
  EG: [
    { name: { ar: 'هيرميس', en: 'EFG Hermes' }, type: 'Investment Bank', assets: 45000000000, clients: 185000 },
    { name: { ar: 'سي آي كابيتال', en: 'CI Capital' }, type: 'Full Service', assets: 18000000000, clients: 125000 },
    { name: { ar: 'بلتون المالية', en: 'Beltone Financial' }, type: 'Full Service', assets: 8500000000, clients: 85000 },
    { name: { ar: 'النعيم القابضة', en: 'Naeem Holding' }, type: 'Full Service', assets: 5500000000, clients: 55000 },
    { name: { ar: 'العربي الأفريقي للاستثمار', en: 'Arab African International Securities' }, type: 'Full Service', assets: 3500000000, clients: 45000 },
    { name: { ar: 'برايم للأوراق المالية', en: 'Prime Securities' }, type: 'Discount', assets: 2500000000, clients: 65000 },
  ]
};

// ==================== صناديق الاستثمار ====================

export const REAL_INVESTMENT_FUNDS = {
  equity: [
    { name: { ar: 'صندوق الراجحي للأسهم السعودية', en: 'Al Rajhi Saudi Equity Fund' }, type: 'Equity', nav: 28.50, return1y: 12.5, aum: 8500000000 },
    { name: { ar: 'صندوق الأهلي للأسهم السعودية', en: 'SNB Saudi Equity Fund' }, type: 'Equity', nav: 45.25, return1y: 15.2, aum: 12500000000 },
    { name: { ar: 'صندوق الرياض للأسهم', en: 'Riyad Equity Fund' }, type: 'Equity', nav: 32.80, return1y: 10.8, aum: 6500000000 },
    { name: { ar: 'صندوق جدوى للأسهم السعودية', en: 'Jadwa Saudi Equity Fund' }, type: 'Equity', nav: 185.50, return1y: 18.5, aum: 4500000000 },
  ],
  fixedIncome: [
    { name: { ar: 'صندوق الراجحي للصكوك', en: 'Al Rajhi Sukuk Fund' }, type: 'Sukuk', nav: 12.25, return1y: 5.8, aum: 5500000000 },
    { name: { ar: 'صندوق الأهلي للصكوك', en: 'SNB Sukuk Fund' }, type: 'Sukuk', nav: 15.80, return1y: 6.2, aum: 8500000000 },
    { name: { ar: 'صندوق سامبا للسندات', en: 'Samba Bond Fund' }, type: 'Bond', nav: 11.50, return1y: 4.5, aum: 3500000000 },
  ],
  reit: [
    { name: { ar: 'صندوق الراجحي ريت', en: 'Al Rajhi REIT' }, symbol: '4330', type: 'REIT', price: 8.50, dividend: 6.5, aum: 2500000000 },
    { name: { ar: 'صندوق جدوى ريت السعودية', en: 'Jadwa REIT Saudi' }, symbol: '4331', type: 'REIT', price: 9.25, dividend: 7.2, aum: 3500000000 },
    { name: { ar: 'صندوق الجزيرة ريت', en: 'Aljazira REIT' }, symbol: '4332', type: 'REIT', price: 12.50, dividend: 5.8, aum: 1800000000 },
    { name: { ar: 'صندوق دراية ريت', en: 'Derayah REIT' }, symbol: '4333', type: 'REIT', price: 7.85, dividend: 8.5, aum: 1200000000 },
  ],
  etf: [
    { name: { ar: 'صندوق فالكم 30', en: 'Falcom 30 ETF' }, symbol: '4080', type: 'ETF', price: 42.50, return1y: 14.5, aum: 850000000 },
    { name: { ar: 'صندوق الراجحي إم تي 30', en: 'Al Rajhi MT30 ETF' }, symbol: '4081', type: 'ETF', price: 85.25, return1y: 16.2, aum: 1500000000 },
    { name: { ar: 'صندوق أرباح للأسهم السعودية', en: 'Arbah Saudi Equity ETF' }, symbol: '4082', type: 'ETF', price: 12.80, return1y: 11.5, aum: 450000000 },
  ]
};

// ==================== دوال التوليد الذكية ====================

export class AIFinancialEngine {
  private language: 'ar' | 'en';
  private country: string;

  constructor(language: 'ar' | 'en' = 'ar', country: string = 'SA') {
    this.language = language;
    this.country = country;
  }

  // توليد سعر واقعي مع تقلبات
  generateRealisticPrice(basePrice: number, volatility: number = 0.02): number {
    const change = (Math.random() - 0.5) * 2 * volatility * basePrice;
    return Math.round((basePrice + change) * 100) / 100;
  }

  // توليد تغيير سعر
  generatePriceChange(volatility: number = 3): number {
    return Math.round((Math.random() - 0.5) * 2 * volatility * 100) / 100;
  }

  // توليد حجم تداول
  generateVolume(baseVolume: number): number {
    const multiplier = 0.5 + Math.random();
    return Math.round(baseVolume * multiplier);
  }

  // الحصول على بورصة حسب الدولة
  getExchangeByCountry(countryCode: string): any {
    const exchanges: Record<string, any> = {
      'SA': REAL_STOCK_EXCHANGES.TADAWUL,
      'EG': REAL_STOCK_EXCHANGES.EGX,
      'AE': Math.random() > 0.5 ? REAL_STOCK_EXCHANGES.ADX : REAL_STOCK_EXCHANGES.DFM,
      'KW': REAL_STOCK_EXCHANGES.BOURSA_KUWAIT,
      'QA': REAL_STOCK_EXCHANGES.QSE,
    };
    return exchanges[countryCode] || REAL_STOCK_EXCHANGES.TADAWUL;
  }

  // توليد بيانات سهم كاملة
  generateStockData(): any {
    const exchange = this.getExchangeByCountry(this.country);
    const stock = exchange.stocks[Math.floor(Math.random() * exchange.stocks.length)];
    const price = this.generateRealisticPrice(stock.price);
    const change = this.generatePriceChange();
    const changePercent = Math.round((change / stock.price) * 10000) / 100;
    
    const open = this.generateRealisticPrice(price, 0.01);
    const high = Math.max(price, open) * (1 + Math.random() * 0.02);
    const low = Math.min(price, open) * (1 - Math.random() * 0.02);

    return {
      symbol: stock.symbol,
      name: stock.name[this.language],
      exchange: exchange.name[this.language],
      exchangeCode: exchange.code,
      currency: exchange.currency,
      sector: stock.sector,
      price: price,
      change: change,
      changePercent: changePercent,
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      volume: this.generateVolume(stock.volume),
      marketCap: stock.marketCap,
      pe: stock.pe,
      dividend: stock.dividend,
      week52High: Math.round(price * 1.25 * 100) / 100,
      week52Low: Math.round(price * 0.75 * 100) / 100,
    };
  }

  // توليد بيانات عملات
  generateForexData(): any {
    const isArabic = Math.random() > 0.5;
    const rates = isArabic ? REAL_FOREX_RATES.arabic : REAL_FOREX_RATES.major;
    const rate = rates[Math.floor(Math.random() * rates.length)];
    
    const bid = this.generateRealisticPrice(rate.bid, 0.001);
    const ask = bid + rate.spread;
    const change = this.generatePriceChange(0.5);

    return {
      pair: rate.pair,
      bid: Math.round(bid * 10000) / 10000,
      ask: Math.round(ask * 10000) / 10000,
      spread: rate.spread,
      change: change,
      changePercent: Math.round((change / rate.bid) * 10000) / 100,
      volume: this.generateVolume(rate.volume),
      high: Math.round(bid * 1.005 * 10000) / 10000,
      low: Math.round(bid * 0.995 * 10000) / 10000,
      timestamp: new Date().toISOString(),
    };
  }

  // توليد بيانات النفط والطاقة
  generateEnergyData(type: 'oil' | 'gas' | 'refined' = 'oil'): any {
    let products: any[];
    switch(type) {
      case 'gas': products = REAL_ENERGY_PRICES.naturalGas; break;
      case 'refined': products = REAL_ENERGY_PRICES.refinedProducts; break;
      default: products = REAL_ENERGY_PRICES.crudeOil;
    }

    const product = products[Math.floor(Math.random() * products.length)];
    const price = this.generateRealisticPrice(product.price, 0.03);
    const change = this.generatePriceChange(2);

    return {
      name: product.name[this.language],
      symbol: product.symbol,
      price: price,
      change: change,
      changePercent: Math.round((change / product.price) * 10000) / 100,
      unit: product.unit,
      volume: this.generateVolume(product.volume || 100000),
      exchange: product.exchange,
      open: this.generateRealisticPrice(price, 0.01),
      high: Math.round(price * 1.02 * 100) / 100,
      low: Math.round(price * 0.98 * 100) / 100,
      timestamp: new Date().toISOString(),
    };
  }

  // توليد بيانات العملات الرقمية
  generateCryptoData(): any {
    const coin = REAL_CRYPTO_DATA.coins[Math.floor(Math.random() * REAL_CRYPTO_DATA.coins.length)];
    const price = this.generateRealisticPrice(coin.price, 0.05);
    const change24h = this.generatePriceChange(8);

    return {
      symbol: coin.symbol,
      name: coin.name[this.language],
      price: price,
      change24h: change24h,
      marketCap: Math.round(coin.marketCap * (0.95 + Math.random() * 0.1)),
      volume24h: this.generateVolume(coin.volume24h),
      supply: coin.supply,
      maxSupply: coin.maxSupply,
      rank: REAL_CRYPTO_DATA.coins.indexOf(coin) + 1,
      ath: Math.round(price * (1.5 + Math.random()) * 100) / 100,
      atl: Math.round(price * (0.1 + Math.random() * 0.3) * 100) / 100,
    };
  }

  // توليد مؤشرات اقتصادية
  generateEconomicIndicator(): any {
    const countries = Object.keys(REAL_ECONOMIC_INDICATORS);
    const countryCode = this.country !== 'ALL' ? this.country : countries[Math.floor(Math.random() * countries.length)];
    const data = REAL_ECONOMIC_INDICATORS[countryCode as keyof typeof REAL_ECONOMIC_INDICATORS] || REAL_ECONOMIC_INDICATORS.SA;

    return {
      country: data.country[this.language],
      countryCode: countryCode,
      gdp: data.gdp + (Math.random() - 0.5) * 20,
      gdpGrowth: Math.round((data.gdpGrowth + (Math.random() - 0.5)) * 10) / 10,
      inflation: Math.round((data.inflation + (Math.random() - 0.5) * 0.5) * 10) / 10,
      unemployment: Math.round((data.unemployment + (Math.random() - 0.5) * 0.5) * 10) / 10,
      interestRate: data.interestRate,
      debtToGdp: Math.round((data.debtToGdp + (Math.random() - 0.5) * 2) * 10) / 10,
      creditRating: data.creditRating,
      reserves: data.reserves,
      tradeBalance: Math.round((Math.random() - 0.3) * 50 * 10) / 10,
    };
  }

  // توليد بيانات محفظة استثمارية
  generatePortfolioHolding(): any {
    const exchange = this.getExchangeByCountry(this.country);
    const stock = exchange.stocks[Math.floor(Math.random() * exchange.stocks.length)];
    const quantity = Math.floor(Math.random() * 10000) + 100;
    const avgCost = this.generateRealisticPrice(stock.price * 0.9, 0.1);
    const currentPrice = this.generateRealisticPrice(stock.price);
    const totalCost = quantity * avgCost;
    const marketValue = quantity * currentPrice;
    const profitLoss = marketValue - totalCost;

    return {
      symbol: stock.symbol,
      name: stock.name[this.language],
      quantity: quantity,
      avgCost: Math.round(avgCost * 100) / 100,
      currentPrice: currentPrice,
      totalCost: Math.round(totalCost * 100) / 100,
      marketValue: Math.round(marketValue * 100) / 100,
      profitLoss: Math.round(profitLoss * 100) / 100,
      profitLossPercent: Math.round((profitLoss / totalCost) * 10000) / 100,
      weight: Math.round(Math.random() * 20 * 100) / 100,
      sector: stock.sector,
      currency: exchange.currency,
    };
  }

  // توليد بيانات سلعة
  generateCommodityData(type: 'precious' | 'industrial' | 'agricultural' = 'precious'): any {
    let commodities: any[];
    switch(type) {
      case 'industrial': commodities = REAL_COMMODITIES.industrialMetals; break;
      case 'agricultural': commodities = REAL_COMMODITIES.agricultural; break;
      default: commodities = REAL_COMMODITIES.preciousMetals;
    }

    const commodity = commodities[Math.floor(Math.random() * commodities.length)];
    const price = this.generateRealisticPrice(commodity.price, 0.02);
    const change = this.generatePriceChange(2);

    return {
      name: commodity.name[this.language],
      symbol: commodity.symbol,
      price: price,
      change: change,
      changePercent: Math.round((change / commodity.price) * 10000) / 100,
      unit: commodity.unit,
      exchange: commodity.exchange,
      open: this.generateRealisticPrice(price, 0.01),
      high: Math.round(price * 1.015 * 100) / 100,
      low: Math.round(price * 0.985 * 100) / 100,
    };
  }

  // توليد بيانات صندوق استثماري
  generateFundData(): any {
    const allFunds: any[] = [
      ...REAL_INVESTMENT_FUNDS.equity,
      ...REAL_INVESTMENT_FUNDS.fixedIncome,
      ...REAL_INVESTMENT_FUNDS.reit,
      ...REAL_INVESTMENT_FUNDS.etf,
    ];
    const fund = allFunds[Math.floor(Math.random() * allFunds.length)];
    const nav = this.generateRealisticPrice(fund.nav || fund.price || 10, 0.01);

    return {
      name: fund.name[this.language],
      symbol: fund.symbol || '',
      type: fund.type,
      nav: nav,
      return1y: fund.return1y ? Math.round((fund.return1y + (Math.random() - 0.5) * 2) * 10) / 10 : null,
      dividend: fund.dividend || null,
      aum: fund.aum,
      currency: 'SAR',
      manager: this.language === 'ar' ? 'شركة استثمارية سعودية' : 'Saudi Investment Company',
    };
  }

  // توليد بيانات وسيط مالي
  generateBrokerData(): any {
    const countryBrokers = REAL_BROKERS[this.country as keyof typeof REAL_BROKERS] || REAL_BROKERS.SA;
    const broker = countryBrokers[Math.floor(Math.random() * countryBrokers.length)];

    return {
      name: broker.name[this.language],
      type: broker.type,
      assets: broker.assets,
      clients: broker.clients,
      commission: Math.round((0.001 + Math.random() * 0.002) * 10000) / 100,
      minDeposit: Math.floor(Math.random() * 10) * 1000 + 1000,
      rating: Math.round((4 + Math.random()) * 10) / 10,
    };
  }

  // توليد معاملة مالية
  generateTransaction(): any {
    const types = ['buy', 'sell', 'dividend', 'deposit', 'withdrawal', 'fee'];
    const type = types[Math.floor(Math.random() * types.length)];
    const stockData = this.generateStockData();

    return {
      id: 'TXN' + Date.now() + Math.floor(Math.random() * 1000),
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      type: type,
      symbol: stockData.symbol,
      name: stockData.name,
      quantity: Math.floor(Math.random() * 1000) + 1,
      price: stockData.price,
      total: Math.round(stockData.price * (Math.floor(Math.random() * 1000) + 1) * 100) / 100,
      fee: Math.round(Math.random() * 50 * 100) / 100,
      status: Math.random() > 0.1 ? 'completed' : 'pending',
      currency: stockData.currency,
    };
  }

  // توليد رقم IBAN
  generateIBAN(): string {
    const countryIBANs: Record<string, { prefix: string, length: number }> = {
      'SA': { prefix: 'SA', length: 24 },
      'AE': { prefix: 'AE', length: 23 },
      'EG': { prefix: 'EG', length: 29 },
      'KW': { prefix: 'KW', length: 30 },
      'QA': { prefix: 'QA', length: 29 },
      'BH': { prefix: 'BH', length: 22 },
      'OM': { prefix: 'OM', length: 23 },
      'JO': { prefix: 'JO', length: 30 },
    };
    
    const format = countryIBANs[this.country] || countryIBANs['SA'];
    let iban = format.prefix;
    const remaining = format.length - 2;
    for (let i = 0; i < remaining; i++) {
      iban += Math.floor(Math.random() * 10);
    }
    return iban;
  }

  // توليد رقم حساب
  generateAccountNumber(): string {
    let account = '';
    for (let i = 0; i < 16; i++) {
      account += Math.floor(Math.random() * 10);
    }
    return account;
  }

  // توليد رقم بطاقة ائتمان
  generateCreditCard(): any {
    const types = [
      { name: 'Visa', prefix: '4', length: 16 },
      { name: 'Mastercard', prefix: '5', length: 16 },
      { name: 'Mada', prefix: '9', length: 16 },
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let number = type.prefix;
    for (let i = 1; i < type.length; i++) {
      number += Math.floor(Math.random() * 10);
    }

    const expMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const expYear = String(new Date().getFullYear() + Math.floor(Math.random() * 5) + 1).slice(-2);

    return {
      type: type.name,
      number: number.replace(/(.{4})/g, '$1 ').trim(),
      maskedNumber: '**** **** **** ' + number.slice(-4),
      expiry: `${expMonth}/${expYear}`,
      cvv: String(Math.floor(Math.random() * 900) + 100),
    };
  }
}

export default AIFinancialEngine;
