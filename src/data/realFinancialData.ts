// ===================================================
// قاعدة بيانات مالية واقتصادية حقيقية وشاملة
// Real Financial & Economic Database
// ===================================================

// ================== البورصات العربية ==================
export const arabStockExchanges = {
  TADAWUL: {
    name: { ar: 'تداول - السوق المالية السعودية', en: 'Tadawul - Saudi Stock Exchange' },
    country: 'SA',
    currency: 'SAR',
    indexName: 'TASI',
    indexValue: { min: 11500, max: 12800 },
    tradingHours: '10:00 - 15:00',
    stocks: [
      { symbol: '2222', name: { ar: 'أرامكو السعودية', en: 'Saudi Aramco' }, sector: 'energy', price: { min: 28, max: 35 }, marketCap: 7500000000000 },
      { symbol: '1180', name: { ar: 'الأهلي السعودي', en: 'SNB - Saudi National Bank' }, sector: 'banking', price: { min: 38, max: 48 }, marketCap: 245000000000 },
      { symbol: '2010', name: { ar: 'سابك', en: 'SABIC' }, sector: 'materials', price: { min: 85, max: 105 }, marketCap: 285000000000 },
      { symbol: '7010', name: { ar: 'STC', en: 'Saudi Telecom' }, sector: 'telecom', price: { min: 38, max: 45 }, marketCap: 195000000000 },
      { symbol: '1010', name: { ar: 'الرياض', en: 'Riyad Bank' }, sector: 'banking', price: { min: 25, max: 32 }, marketCap: 96000000000 },
      { symbol: '1120', name: { ar: 'الراجحي', en: 'Al Rajhi Bank' }, sector: 'banking', price: { min: 78, max: 95 }, marketCap: 380000000000 },
      { symbol: '2020', name: { ar: 'معادن', en: 'Maaden' }, sector: 'materials', price: { min: 48, max: 62 }, marketCap: 145000000000 },
      { symbol: '4030', name: { ar: 'البحري', en: 'Bahri' }, sector: 'transport', price: { min: 32, max: 42 }, marketCap: 25000000000 },
      { symbol: '2350', name: { ar: 'كيان السعودية', en: 'Kayan Saudi' }, sector: 'petrochemicals', price: { min: 12, max: 18 }, marketCap: 22500000000 },
      { symbol: '1150', name: { ar: 'عناية', en: 'Enaya' }, sector: 'insurance', price: { min: 18, max: 28 }, marketCap: 5400000000 },
      { symbol: '4200', name: { ar: 'الدريس', en: 'Aldrees' }, sector: 'retail', price: { min: 65, max: 85 }, marketCap: 4875000000 },
      { symbol: '2060', name: { ar: 'التصنيع', en: 'Tasnee' }, sector: 'industrial', price: { min: 12, max: 18 }, marketCap: 9000000000 },
      { symbol: '4001', name: { ar: 'أسترا الصناعية', en: 'Astra Industrial' }, sector: 'industrial', price: { min: 155, max: 195 }, marketCap: 11700000000 },
      { symbol: '1140', name: { ar: 'البلاد', en: 'Bank Albilad' }, sector: 'banking', price: { min: 38, max: 48 }, marketCap: 45600000000 },
      { symbol: '2380', name: { ar: 'بترورابغ', en: 'Petro Rabigh' }, sector: 'petrochemicals', price: { min: 8, max: 14 }, marketCap: 28350000000 },
      { symbol: '4003', name: { ar: 'إكسترا', en: 'Extra' }, sector: 'retail', price: { min: 95, max: 125 }, marketCap: 9500000000 },
      { symbol: '2250', name: { ar: 'المجموعة السعودية', en: 'Saudi Industrial Investment' }, sector: 'industrial', price: { min: 22, max: 32 }, marketCap: 16500000000 },
      { symbol: '4007', name: { ar: 'الحكير', en: 'Fawaz Alhokair' }, sector: 'retail', price: { min: 15, max: 25 }, marketCap: 4500000000 },
      { symbol: '6010', name: { ar: 'نادك', en: 'NADEC' }, sector: 'food', price: { min: 35, max: 48 }, marketCap: 3500000000 },
      { symbol: '6020', name: { ar: 'جاكو', en: 'JACO' }, sector: 'food', price: { min: 52, max: 72 }, marketCap: 1560000000 },
    ]
  },
  EGX: {
    name: { ar: 'البورصة المصرية', en: 'Egyptian Exchange' },
    country: 'EG',
    currency: 'EGP',
    indexName: 'EGX30',
    indexValue: { min: 24000, max: 28000 },
    tradingHours: '10:00 - 14:30',
    stocks: [
      { symbol: 'COMI', name: { ar: 'البنك التجاري الدولي', en: 'CIB Egypt' }, sector: 'banking', price: { min: 58, max: 78 }, marketCap: 185000000000 },
      { symbol: 'HRHO', name: { ar: 'هيرميس القابضة', en: 'EFG Hermes' }, sector: 'financial', price: { min: 18, max: 28 }, marketCap: 52000000000 },
      { symbol: 'TMGH', name: { ar: 'طلعت مصطفى', en: 'Talaat Moustafa Group' }, sector: 'real_estate', price: { min: 38, max: 55 }, marketCap: 78000000000 },
      { symbol: 'SWDY', name: { ar: 'السويدي إلكتريك', en: 'El Sewedy Electric' }, sector: 'industrial', price: { min: 85, max: 115 }, marketCap: 45000000000 },
      { symbol: 'EAST', name: { ar: 'إيسترن كومباني', en: 'Eastern Company' }, sector: 'consumer', price: { min: 22, max: 32 }, marketCap: 38500000000 },
      { symbol: 'ORWE', name: { ar: 'أوراسكوم للتنمية', en: 'Orascom Development' }, sector: 'tourism', price: { min: 8, max: 14 }, marketCap: 15000000000 },
      { symbol: 'PHDC', name: { ar: 'بالم هيلز للتعمير', en: 'Palm Hills Developments' }, sector: 'real_estate', price: { min: 3.5, max: 6 }, marketCap: 18000000000 },
      { symbol: 'MNHD', name: { ar: 'مدينة نصر للإسكان', en: 'Madinet Nasr Housing' }, sector: 'real_estate', price: { min: 4, max: 7 }, marketCap: 8000000000 },
      { symbol: 'CLHO', name: { ar: 'القلعة القابضة', en: 'Qalaa Holdings' }, sector: 'investment', price: { min: 2.5, max: 5 }, marketCap: 12000000000 },
      { symbol: 'EFIH', name: { ar: 'إي فاينانس', en: 'E-Finance' }, sector: 'fintech', price: { min: 15, max: 25 }, marketCap: 28000000000 },
      { symbol: 'FWRY', name: { ar: 'فوري', en: 'Fawry' }, sector: 'fintech', price: { min: 5, max: 9 }, marketCap: 15000000000 },
      { symbol: 'SKPC', name: { ar: 'سيدي كرير للبتروكيماويات', en: 'Sidi Kerir Petrochemicals' }, sector: 'petrochemicals', price: { min: 8, max: 14 }, marketCap: 12000000000 },
      { symbol: 'AMOC', name: { ar: 'أموك', en: 'Alexandria Mineral Oils' }, sector: 'energy', price: { min: 4, max: 7 }, marketCap: 7000000000 },
      { symbol: 'AUTO', name: { ar: 'جي بي أوتو', en: 'GB Auto' }, sector: 'automotive', price: { min: 3, max: 6 }, marketCap: 8500000000 },
      { symbol: 'JUFO', name: { ar: 'جهينة', en: 'Juhayna Food Industries' }, sector: 'food', price: { min: 8, max: 14 }, marketCap: 11000000000 },
    ]
  },
  ADX: {
    name: { ar: 'سوق أبوظبي للأوراق المالية', en: 'Abu Dhabi Securities Exchange' },
    country: 'AE',
    currency: 'AED',
    indexName: 'FADGI',
    indexValue: { min: 9500, max: 11000 },
    tradingHours: '10:00 - 14:00',
    stocks: [
      { symbol: 'FAB', name: { ar: 'بنك أبوظبي الأول', en: 'First Abu Dhabi Bank' }, sector: 'banking', price: { min: 12, max: 16 }, marketCap: 180000000000 },
      { symbol: 'ADNOCDIST', name: { ar: 'أدنوك للتوزيع', en: 'ADNOC Distribution' }, sector: 'energy', price: { min: 3.8, max: 4.8 }, marketCap: 48000000000 },
      { symbol: 'ETISALAT', name: { ar: 'اتصالات الإمارات', en: 'Etisalat UAE' }, sector: 'telecom', price: { min: 22, max: 28 }, marketCap: 240000000000 },
      { symbol: 'IHC', name: { ar: 'القابضة الدولية', en: 'International Holding Co' }, sector: 'investment', price: { min: 380, max: 480 }, marketCap: 950000000000 },
      { symbol: 'ALDAR', name: { ar: 'الدار العقارية', en: 'Aldar Properties' }, sector: 'real_estate', price: { min: 5.5, max: 7.5 }, marketCap: 58000000000 },
      { symbol: 'ADCB', name: { ar: 'بنك أبوظبي التجاري', en: 'Abu Dhabi Commercial Bank' }, sector: 'banking', price: { min: 8, max: 11 }, marketCap: 72000000000 },
      { symbol: 'TAQA', name: { ar: 'طاقة', en: 'Abu Dhabi National Energy' }, sector: 'energy', price: { min: 3.2, max: 4.2 }, marketCap: 120000000000 },
      { symbol: 'ADPORTS', name: { ar: 'موانئ أبوظبي', en: 'AD Ports Group' }, sector: 'transport', price: { min: 4.5, max: 6 }, marketCap: 28000000000 },
      { symbol: 'MULTIPLY', name: { ar: 'مالتيبلاي', en: 'Multiply Group' }, sector: 'investment', price: { min: 2.8, max: 4 }, marketCap: 35000000000 },
      { symbol: 'AGTHIA', name: { ar: 'أغذية', en: 'Agthia Group' }, sector: 'food', price: { min: 5, max: 7 }, marketCap: 8000000000 },
    ]
  },
  DFM: {
    name: { ar: 'سوق دبي المالي', en: 'Dubai Financial Market' },
    country: 'AE',
    currency: 'AED',
    indexName: 'DFMGI',
    indexValue: { min: 3800, max: 4500 },
    tradingHours: '10:00 - 14:00',
    stocks: [
      { symbol: 'EMAAR', name: { ar: 'إعمار العقارية', en: 'Emaar Properties' }, sector: 'real_estate', price: { min: 7.5, max: 10 }, marketCap: 65000000000 },
      { symbol: 'DIB', name: { ar: 'بنك دبي الإسلامي', en: 'Dubai Islamic Bank' }, sector: 'banking', price: { min: 5.5, max: 7.5 }, marketCap: 45000000000 },
      { symbol: 'DU', name: { ar: 'دو', en: 'Emirates Integrated Telecom' }, sector: 'telecom', price: { min: 5.8, max: 7.5 }, marketCap: 32000000000 },
      { symbol: 'DEWA', name: { ar: 'ديوا', en: 'Dubai Electricity & Water' }, sector: 'utilities', price: { min: 2.3, max: 3 }, marketCap: 115000000000 },
      { symbol: 'DAMAC', name: { ar: 'داماك', en: 'DAMAC Properties' }, sector: 'real_estate', price: { min: 4.5, max: 7 }, marketCap: 28000000000 },
      { symbol: 'SALIK', name: { ar: 'سالك', en: 'Salik Company' }, sector: 'transport', price: { min: 3.2, max: 4.5 }, marketCap: 24000000000 },
      { symbol: 'PARKIN', name: { ar: 'باركن', en: 'Parkin Company' }, sector: 'services', price: { min: 3.8, max: 5 }, marketCap: 18000000000 },
      { symbol: 'TECOM', name: { ar: 'تيكوم', en: 'Tecom Group' }, sector: 'real_estate', price: { min: 4.5, max: 6 }, marketCap: 22000000000 },
      { symbol: 'EMIRATESNBD', name: { ar: 'الإمارات دبي الوطني', en: 'Emirates NBD' }, sector: 'banking', price: { min: 16, max: 22 }, marketCap: 125000000000 },
      { symbol: 'SHUAA', name: { ar: 'شعاع كابيتال', en: 'Shuaa Capital' }, sector: 'financial', price: { min: 0.35, max: 0.55 }, marketCap: 2500000000 },
    ]
  },
  KSE: {
    name: { ar: 'بورصة الكويت', en: 'Boursa Kuwait' },
    country: 'KW',
    currency: 'KWD',
    indexName: 'BKMain',
    indexValue: { min: 7200, max: 8200 },
    tradingHours: '09:00 - 12:40',
    stocks: [
      { symbol: 'NBK', name: { ar: 'بنك الكويت الوطني', en: 'National Bank of Kuwait' }, sector: 'banking', price: { min: 0.95, max: 1.15 }, marketCap: 12000000000 },
      { symbol: 'ZAIN', name: { ar: 'زين', en: 'Mobile Telecommunications' }, sector: 'telecom', price: { min: 0.58, max: 0.72 }, marketCap: 7200000000 },
      { symbol: 'KFH', name: { ar: 'بيت التمويل الكويتي', en: 'Kuwait Finance House' }, sector: 'banking', price: { min: 0.82, max: 0.98 }, marketCap: 15000000000 },
      { symbol: 'MABANEE', name: { ar: 'المباني', en: 'Mabanee Company' }, sector: 'real_estate', price: { min: 0.78, max: 0.95 }, marketCap: 3800000000 },
      { symbol: 'AGILITY', name: { ar: 'أجيليتي', en: 'Agility Public Warehousing' }, sector: 'logistics', price: { min: 0.85, max: 1.05 }, marketCap: 8500000000 },
      { symbol: 'BOUBYAN', name: { ar: 'بنك بوبيان', en: 'Boubyan Bank' }, sector: 'banking', price: { min: 0.72, max: 0.88 }, marketCap: 6500000000 },
      { symbol: 'GBK', name: { ar: 'بنك الخليج', en: 'Gulf Bank' }, sector: 'banking', price: { min: 0.28, max: 0.38 }, marketCap: 2800000000 },
      { symbol: 'ALIMTIAZ', name: { ar: 'الامتياز الاستثمارية', en: 'Al Imtiaz Investment' }, sector: 'investment', price: { min: 0.12, max: 0.18 }, marketCap: 450000000 },
    ]
  },
  QSE: {
    name: { ar: 'بورصة قطر', en: 'Qatar Stock Exchange' },
    country: 'QA',
    currency: 'QAR',
    indexName: 'QE Index',
    indexValue: { min: 10200, max: 11800 },
    tradingHours: '09:30 - 13:15',
    stocks: [
      { symbol: 'QNBK', name: { ar: 'بنك قطر الوطني', en: 'QNB Group' }, sector: 'banking', price: { min: 16, max: 20 }, marketCap: 185000000000 },
      { symbol: 'IQCD', name: { ar: 'صناعات قطر', en: 'Industries Qatar' }, sector: 'industrial', price: { min: 12.5, max: 16 }, marketCap: 78000000000 },
      { symbol: 'QTEL', name: { ar: 'أوريدو', en: 'Ooredoo QPSC' }, sector: 'telecom', price: { min: 9, max: 12 }, marketCap: 28000000000 },
      { symbol: 'QGTS', name: { ar: 'ناقلات', en: 'Qatar Gas Transport' }, sector: 'transport', price: { min: 3.5, max: 4.5 }, marketCap: 22000000000 },
      { symbol: 'MARK', name: { ar: 'ماركة', en: 'Masraf Al Rayan' }, sector: 'banking', price: { min: 2.5, max: 3.5 }, marketCap: 25000000000 },
      { symbol: 'BRES', name: { ar: 'بروة العقارية', en: 'Barwa Real Estate' }, sector: 'real_estate', price: { min: 2.8, max: 3.8 }, marketCap: 12000000000 },
      { symbol: 'QIIK', name: { ar: 'بنك قطر الإسلامي', en: 'Qatar Islamic Bank' }, sector: 'banking', price: { min: 16, max: 20 }, marketCap: 48000000000 },
      { symbol: 'QEWS', name: { ar: 'الكهرباء والماء', en: 'Qatar Electricity & Water' }, sector: 'utilities', price: { min: 15, max: 18 }, marketCap: 16500000000 },
    ]
  },
  BSE: {
    name: { ar: 'بورصة البحرين', en: 'Bahrain Bourse' },
    country: 'BH',
    currency: 'BHD',
    indexName: 'BHBX',
    indexValue: { min: 1900, max: 2200 },
    tradingHours: '09:30 - 13:00',
    stocks: [
      { symbol: 'BATELCO', name: { ar: 'بتلكو', en: 'Bahrain Telecommunications' }, sector: 'telecom', price: { min: 0.38, max: 0.52 }, marketCap: 850000000 },
      { symbol: 'NBB', name: { ar: 'البنك الأهلي المتحد', en: 'National Bank of Bahrain' }, sector: 'banking', price: { min: 0.65, max: 0.85 }, marketCap: 1200000000 },
      { symbol: 'BBANK', name: { ar: 'بنك البحرين والكويت', en: 'BBK' }, sector: 'banking', price: { min: 0.42, max: 0.58 }, marketCap: 780000000 },
      { symbol: 'ALBH', name: { ar: 'مصرف السلام', en: 'Al Salam Bank' }, sector: 'banking', price: { min: 0.08, max: 0.12 }, marketCap: 320000000 },
      { symbol: 'GFH', name: { ar: 'جي إف إتش المالية', en: 'GFH Financial Group' }, sector: 'financial', price: { min: 0.28, max: 0.42 }, marketCap: 2100000000 },
    ]
  },
  MSM: {
    name: { ar: 'بورصة مسقط', en: 'Muscat Securities Market' },
    country: 'OM',
    currency: 'OMR',
    indexName: 'MSM30',
    indexValue: { min: 4600, max: 5200 },
    tradingHours: '10:00 - 14:00',
    stocks: [
      { symbol: 'BKOB', name: { ar: 'بنك ظفار', en: 'Bank Dhofar' }, sector: 'banking', price: { min: 0.12, max: 0.18 }, marketCap: 580000000 },
      { symbol: 'BKMB', name: { ar: 'بنك مسقط', en: 'Bank Muscat' }, sector: 'banking', price: { min: 0.42, max: 0.58 }, marketCap: 2800000000 },
      { symbol: 'OTEL', name: { ar: 'عمانتل', en: 'Omantel' }, sector: 'telecom', price: { min: 0.58, max: 0.75 }, marketCap: 2200000000 },
      { symbol: 'OOMQ', name: { ar: 'أوكيو', en: 'OQ SAOC' }, sector: 'energy', price: { min: 0.35, max: 0.48 }, marketCap: 1500000000 },
      { symbol: 'SQSC', name: { ar: 'صحار الدولية', en: 'Sohar International' }, sector: 'banking', price: { min: 0.09, max: 0.13 }, marketCap: 450000000 },
    ]
  }
};

// ================== العملات الأجنبية وأسعار الصرف ==================
export const forexPairs = {
  major: [
    { pair: 'EUR/USD', name: { ar: 'يورو/دولار', en: 'Euro/US Dollar' }, bid: { min: 1.06, max: 1.12 }, spread: 0.0002 },
    { pair: 'GBP/USD', name: { ar: 'جنيه استرليني/دولار', en: 'British Pound/US Dollar' }, bid: { min: 1.24, max: 1.30 }, spread: 0.0003 },
    { pair: 'USD/JPY', name: { ar: 'دولار/ين ياباني', en: 'US Dollar/Japanese Yen' }, bid: { min: 145, max: 158 }, spread: 0.02 },
    { pair: 'USD/CHF', name: { ar: 'دولار/فرنك سويسري', en: 'US Dollar/Swiss Franc' }, bid: { min: 0.86, max: 0.92 }, spread: 0.0003 },
    { pair: 'AUD/USD', name: { ar: 'دولار أسترالي/دولار', en: 'Australian Dollar/US Dollar' }, bid: { min: 0.64, max: 0.70 }, spread: 0.0003 },
    { pair: 'USD/CAD', name: { ar: 'دولار/دولار كندي', en: 'US Dollar/Canadian Dollar' }, bid: { min: 1.34, max: 1.40 }, spread: 0.0003 },
    { pair: 'NZD/USD', name: { ar: 'دولار نيوزيلندي/دولار', en: 'New Zealand Dollar/US Dollar' }, bid: { min: 0.58, max: 0.64 }, spread: 0.0004 },
  ],
  arabCurrencies: [
    { pair: 'USD/SAR', name: { ar: 'دولار/ريال سعودي', en: 'US Dollar/Saudi Riyal' }, bid: { min: 3.74, max: 3.76 }, spread: 0.001, fixed: true },
    { pair: 'USD/AED', name: { ar: 'دولار/درهم إماراتي', en: 'US Dollar/UAE Dirham' }, bid: { min: 3.67, max: 3.68 }, spread: 0.001, fixed: true },
    { pair: 'USD/EGP', name: { ar: 'دولار/جنيه مصري', en: 'US Dollar/Egyptian Pound' }, bid: { min: 48, max: 52 }, spread: 0.05 },
    { pair: 'USD/KWD', name: { ar: 'دولار/دينار كويتي', en: 'US Dollar/Kuwaiti Dinar' }, bid: { min: 0.305, max: 0.312 }, spread: 0.001 },
    { pair: 'USD/BHD', name: { ar: 'دولار/دينار بحريني', en: 'US Dollar/Bahraini Dinar' }, bid: { min: 0.376, max: 0.378 }, spread: 0.001, fixed: true },
    { pair: 'USD/OMR', name: { ar: 'دولار/ريال عماني', en: 'US Dollar/Omani Rial' }, bid: { min: 0.384, max: 0.386 }, spread: 0.001, fixed: true },
    { pair: 'USD/QAR', name: { ar: 'دولار/ريال قطري', en: 'US Dollar/Qatari Riyal' }, bid: { min: 3.64, max: 3.66 }, spread: 0.001, fixed: true },
    { pair: 'USD/JOD', name: { ar: 'دولار/دينار أردني', en: 'US Dollar/Jordanian Dinar' }, bid: { min: 0.708, max: 0.710 }, spread: 0.001, fixed: true },
    { pair: 'USD/LBP', name: { ar: 'دولار/ليرة لبنانية', en: 'US Dollar/Lebanese Pound' }, bid: { min: 89000, max: 92000 }, spread: 500 },
    { pair: 'USD/MAD', name: { ar: 'دولار/درهم مغربي', en: 'US Dollar/Moroccan Dirham' }, bid: { min: 9.8, max: 10.4 }, spread: 0.02 },
    { pair: 'USD/TND', name: { ar: 'دولار/دينار تونسي', en: 'US Dollar/Tunisian Dinar' }, bid: { min: 3.05, max: 3.20 }, spread: 0.01 },
    { pair: 'USD/DZD', name: { ar: 'دولار/دينار جزائري', en: 'US Dollar/Algerian Dinar' }, bid: { min: 134, max: 140 }, spread: 0.5 },
    { pair: 'USD/IQD', name: { ar: 'دولار/دينار عراقي', en: 'US Dollar/Iraqi Dinar' }, bid: { min: 1300, max: 1320 }, spread: 5 },
    { pair: 'USD/SYP', name: { ar: 'دولار/ليرة سورية', en: 'US Dollar/Syrian Pound' }, bid: { min: 13000, max: 14500 }, spread: 100 },
    { pair: 'USD/YER', name: { ar: 'دولار/ريال يمني', en: 'US Dollar/Yemeni Rial' }, bid: { min: 540, max: 580 }, spread: 5 },
    { pair: 'USD/SDG', name: { ar: 'دولار/جنيه سوداني', en: 'US Dollar/Sudanese Pound' }, bid: { min: 580, max: 620 }, spread: 5 },
    { pair: 'USD/LYD', name: { ar: 'دولار/دينار ليبي', en: 'US Dollar/Libyan Dinar' }, bid: { min: 4.80, max: 4.95 }, spread: 0.02 },
  ]
};

// ================== أسعار النفط والغاز والطاقة ==================
export const energyPrices = {
  crude: [
    { symbol: 'BRENT', name: { ar: 'خام برنت', en: 'Brent Crude' }, unit: 'barrel', price: { min: 72, max: 88 }, currency: 'USD' },
    { symbol: 'WTI', name: { ar: 'خام غرب تكساس', en: 'WTI Crude' }, unit: 'barrel', price: { min: 68, max: 84 }, currency: 'USD' },
    { symbol: 'DUBAI', name: { ar: 'خام دبي', en: 'Dubai Crude' }, unit: 'barrel', price: { min: 70, max: 86 }, currency: 'USD' },
    { symbol: 'OMAN', name: { ar: 'خام عمان', en: 'Oman Crude' }, unit: 'barrel', price: { min: 71, max: 87 }, currency: 'USD' },
    { symbol: 'MURBAN', name: { ar: 'خام مربان', en: 'Murban Crude' }, unit: 'barrel', price: { min: 73, max: 89 }, currency: 'USD' },
    { symbol: 'ARABIAN_LIGHT', name: { ar: 'الخام العربي الخفيف', en: 'Arabian Light' }, unit: 'barrel', price: { min: 74, max: 90 }, currency: 'USD' },
    { symbol: 'BASRAH_LIGHT', name: { ar: 'بصرة الخفيف', en: 'Basrah Light' }, unit: 'barrel', price: { min: 69, max: 85 }, currency: 'USD' },
  ],
  gas: [
    { symbol: 'HENRY_HUB', name: { ar: 'هنري هب', en: 'Henry Hub Natural Gas' }, unit: 'MMBtu', price: { min: 2.2, max: 3.8 }, currency: 'USD' },
    { symbol: 'NBP', name: { ar: 'إن بي بي', en: 'UK NBP Natural Gas' }, unit: 'therm', price: { min: 0.65, max: 1.20 }, currency: 'GBP' },
    { symbol: 'TTF', name: { ar: 'تي تي إف', en: 'Dutch TTF Natural Gas' }, unit: 'MWh', price: { min: 28, max: 48 }, currency: 'EUR' },
    { symbol: 'JKM', name: { ar: 'جي كي إم', en: 'Japan Korea Marker LNG' }, unit: 'MMBtu', price: { min: 10, max: 18 }, currency: 'USD' },
    { symbol: 'QATAR_LNG', name: { ar: 'غاز قطر المسال', en: 'Qatar LNG' }, unit: 'MMBtu', price: { min: 11, max: 17 }, currency: 'USD' },
  ],
  refined: [
    { symbol: 'RBOB', name: { ar: 'بنزين آر بي أو بي', en: 'RBOB Gasoline' }, unit: 'gallon', price: { min: 2.20, max: 2.80 }, currency: 'USD' },
    { symbol: 'HEATING_OIL', name: { ar: 'زيت التدفئة', en: 'Heating Oil' }, unit: 'gallon', price: { min: 2.40, max: 3.00 }, currency: 'USD' },
    { symbol: 'DIESEL', name: { ar: 'الديزل', en: 'Ultra Low Sulfur Diesel' }, unit: 'gallon', price: { min: 2.50, max: 3.20 }, currency: 'USD' },
    { symbol: 'JET_FUEL', name: { ar: 'وقود الطائرات', en: 'Jet Fuel' }, unit: 'gallon', price: { min: 2.30, max: 2.90 }, currency: 'USD' },
  ],
  renewable: [
    { symbol: 'SOLAR_PPA', name: { ar: 'عقود الطاقة الشمسية', en: 'Solar PPA' }, unit: 'MWh', price: { min: 25, max: 45 }, currency: 'USD' },
    { symbol: 'WIND_PPA', name: { ar: 'عقود طاقة الرياح', en: 'Wind PPA' }, unit: 'MWh', price: { min: 30, max: 50 }, currency: 'USD' },
    { symbol: 'CARBON_CREDIT', name: { ar: 'رصيد الكربون', en: 'Carbon Credit EU' }, unit: 'tCO2', price: { min: 55, max: 85 }, currency: 'EUR' },
  ]
};

// ================== العملات الرقمية ==================
export const cryptocurrencies = [
  { symbol: 'BTC', name: { ar: 'بيتكوين', en: 'Bitcoin' }, price: { min: 42000, max: 72000 }, marketCap: 1400000000000, volume24h: { min: 25, max: 45 } },
  { symbol: 'ETH', name: { ar: 'إيثريوم', en: 'Ethereum' }, price: { min: 2200, max: 4000 }, marketCap: 450000000000, volume24h: { min: 12, max: 22 } },
  { symbol: 'BNB', name: { ar: 'باينانس كوين', en: 'Binance Coin' }, price: { min: 280, max: 420 }, marketCap: 65000000000, volume24h: { min: 0.8, max: 2 } },
  { symbol: 'SOL', name: { ar: 'سولانا', en: 'Solana' }, price: { min: 85, max: 175 }, marketCap: 75000000000, volume24h: { min: 2, max: 5 } },
  { symbol: 'XRP', name: { ar: 'ريبل', en: 'XRP' }, price: { min: 0.48, max: 0.72 }, marketCap: 35000000000, volume24h: { min: 1, max: 3 } },
  { symbol: 'ADA', name: { ar: 'كاردانو', en: 'Cardano' }, price: { min: 0.35, max: 0.65 }, marketCap: 18000000000, volume24h: { min: 0.3, max: 0.8 } },
  { symbol: 'DOGE', name: { ar: 'دوج كوين', en: 'Dogecoin' }, price: { min: 0.06, max: 0.15 }, marketCap: 12000000000, volume24h: { min: 0.4, max: 1.2 } },
  { symbol: 'DOT', name: { ar: 'بولكادوت', en: 'Polkadot' }, price: { min: 5.5, max: 9.5 }, marketCap: 9000000000, volume24h: { min: 0.2, max: 0.5 } },
  { symbol: 'MATIC', name: { ar: 'بوليجون', en: 'Polygon' }, price: { min: 0.55, max: 1.10 }, marketCap: 8500000000, volume24h: { min: 0.3, max: 0.7 } },
  { symbol: 'AVAX', name: { ar: 'أفالانش', en: 'Avalanche' }, price: { min: 28, max: 52 }, marketCap: 15000000000, volume24h: { min: 0.4, max: 1 } },
  { symbol: 'LINK', name: { ar: 'تشين لينك', en: 'Chainlink' }, price: { min: 12, max: 22 }, marketCap: 9500000000, volume24h: { min: 0.3, max: 0.8 } },
  { symbol: 'UNI', name: { ar: 'يوني سواب', en: 'Uniswap' }, price: { min: 5.5, max: 12 }, marketCap: 6000000000, volume24h: { min: 0.15, max: 0.4 } },
  { symbol: 'ATOM', name: { ar: 'كوزموس', en: 'Cosmos' }, price: { min: 7, max: 14 }, marketCap: 4500000000, volume24h: { min: 0.15, max: 0.35 } },
  { symbol: 'LTC', name: { ar: 'لايتكوين', en: 'Litecoin' }, price: { min: 65, max: 110 }, marketCap: 6500000000, volume24h: { min: 0.3, max: 0.7 } },
  { symbol: 'NEAR', name: { ar: 'نير بروتوكول', en: 'NEAR Protocol' }, price: { min: 4.5, max: 8.5 }, marketCap: 5500000000, volume24h: { min: 0.2, max: 0.5 } },
];

// ================== المؤشرات الاقتصادية للدول العربية ==================
export const arabEconomicIndicators = {
  SA: {
    country: { ar: 'السعودية', en: 'Saudi Arabia' },
    gdp: { value: 1108, growth: { min: 1.5, max: 4.5 } },
    inflation: { min: 1.5, max: 3.5 },
    unemployment: { min: 4.5, max: 6.5 },
    interestRate: { min: 5.0, max: 6.5 },
    debtToGDP: { min: 22, max: 28 },
    currentAccount: { min: 4, max: 12 },
    creditRating: { sp: 'A', moodys: 'A1', fitch: 'A+' },
    oilProduction: { min: 9.0, max: 10.5 },
  },
  AE: {
    country: { ar: 'الإمارات', en: 'UAE' },
    gdp: { value: 507, growth: { min: 3.0, max: 5.5 } },
    inflation: { min: 2.0, max: 4.5 },
    unemployment: { min: 2.5, max: 4.0 },
    interestRate: { min: 5.0, max: 6.5 },
    debtToGDP: { min: 18, max: 25 },
    currentAccount: { min: 8, max: 15 },
    creditRating: { sp: 'AA', moodys: 'Aa2', fitch: 'AA-' },
    oilProduction: { min: 3.2, max: 4.0 },
  },
  EG: {
    country: { ar: 'مصر', en: 'Egypt' },
    gdp: { value: 476, growth: { min: 3.5, max: 5.5 } },
    inflation: { min: 25, max: 38 },
    unemployment: { min: 6.5, max: 8.5 },
    interestRate: { min: 18, max: 28 },
    debtToGDP: { min: 85, max: 98 },
    currentAccount: { min: -4, max: -1 },
    creditRating: { sp: 'B-', moodys: 'Caa1', fitch: 'B-' },
    oilProduction: { min: 0.55, max: 0.65 },
  },
  QA: {
    country: { ar: 'قطر', en: 'Qatar' },
    gdp: { value: 236, growth: { min: 2.0, max: 4.5 } },
    inflation: { min: 2.0, max: 4.0 },
    unemployment: { min: 0.1, max: 0.3 },
    interestRate: { min: 5.0, max: 6.5 },
    debtToGDP: { min: 42, max: 52 },
    currentAccount: { min: 15, max: 28 },
    creditRating: { sp: 'AA', moodys: 'Aa3', fitch: 'AA-' },
    gasProduction: { min: 170, max: 185 },
  },
  KW: {
    country: { ar: 'الكويت', en: 'Kuwait' },
    gdp: { value: 175, growth: { min: 0.5, max: 3.5 } },
    inflation: { min: 2.5, max: 4.5 },
    unemployment: { min: 2.0, max: 3.5 },
    interestRate: { min: 4.0, max: 5.5 },
    debtToGDP: { min: 5, max: 12 },
    currentAccount: { min: 20, max: 35 },
    creditRating: { sp: 'A+', moodys: 'A1', fitch: 'AA-' },
    oilProduction: { min: 2.5, max: 2.9 },
  },
  OM: {
    country: { ar: 'عمان', en: 'Oman' },
    gdp: { value: 108, growth: { min: 1.5, max: 4.0 } },
    inflation: { min: 0.5, max: 2.5 },
    unemployment: { min: 2.5, max: 4.5 },
    interestRate: { min: 5.0, max: 6.5 },
    debtToGDP: { min: 38, max: 48 },
    currentAccount: { min: 2, max: 8 },
    creditRating: { sp: 'BB', moodys: 'Ba3', fitch: 'BB' },
    oilProduction: { min: 0.9, max: 1.1 },
  },
  BH: {
    country: { ar: 'البحرين', en: 'Bahrain' },
    gdp: { value: 44, growth: { min: 2.0, max: 4.5 } },
    inflation: { min: 0.5, max: 2.5 },
    unemployment: { min: 4.5, max: 6.5 },
    interestRate: { min: 5.0, max: 6.5 },
    debtToGDP: { min: 115, max: 130 },
    currentAccount: { min: -2, max: 4 },
    creditRating: { sp: 'B+', moodys: 'B2', fitch: 'B+' },
    oilProduction: { min: 0.18, max: 0.22 },
  },
  JO: {
    country: { ar: 'الأردن', en: 'Jordan' },
    gdp: { value: 50, growth: { min: 2.0, max: 3.5 } },
    inflation: { min: 2.0, max: 5.0 },
    unemployment: { min: 18, max: 24 },
    interestRate: { min: 6.5, max: 8.5 },
    debtToGDP: { min: 85, max: 95 },
    currentAccount: { min: -6, max: -2 },
    creditRating: { sp: 'B+', moodys: 'B1', fitch: 'BB-' },
  },
  MA: {
    country: { ar: 'المغرب', en: 'Morocco' },
    gdp: { value: 143, growth: { min: 2.5, max: 4.5 } },
    inflation: { min: 2.0, max: 6.5 },
    unemployment: { min: 10, max: 13 },
    interestRate: { min: 2.5, max: 4.0 },
    debtToGDP: { min: 68, max: 78 },
    currentAccount: { min: -4, max: 0 },
    creditRating: { sp: 'BB+', moodys: 'Ba1', fitch: 'BB+' },
  },
};

// ================== شركات الوساطة والاستثمار ==================
export const brokerageCompanies = {
  SA: [
    { name: { ar: 'الراجحي المالية', en: 'Al Rajhi Capital' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'الجزيرة كابيتال', en: 'Aljazira Capital' }, type: 'full_service', minDeposit: 10000 },
    { name: { ar: 'الأهلي المالية', en: 'SNB Capital' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'الرياض المالية', en: 'Riyad Capital' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'دراية المالية', en: 'Derayah Financial' }, type: 'discount', minDeposit: 2500 },
    { name: { ar: 'البلاد المالية', en: 'Albilad Capital' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'الاستثمار كابيتال', en: 'Investment Capital' }, type: 'full_service', minDeposit: 10000 },
  ],
  AE: [
    { name: { ar: 'الإمارات دبي الوطني للأوراق المالية', en: 'Emirates NBD Securities' }, type: 'full_service', minDeposit: 10000 },
    { name: { ar: 'أبوظبي الأول للأوراق المالية', en: 'FAB Securities' }, type: 'full_service', minDeposit: 10000 },
    { name: { ar: 'شعاع للأوراق المالية', en: 'Shuaa Securities' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'المشرق للأوراق المالية', en: 'Mashreq Securities' }, type: 'full_service', minDeposit: 10000 },
    { name: { ar: 'الإمارات للاستثمار', en: 'Emirates Investment' }, type: 'full_service', minDeposit: 25000 },
  ],
  EG: [
    { name: { ar: 'هيرميس للوساطة', en: 'EFG Hermes' }, type: 'full_service', minDeposit: 10000 },
    { name: { ar: 'سي آي كابيتال', en: 'CI Capital' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'بلتون المالية', en: 'Beltone Financial' }, type: 'full_service', minDeposit: 5000 },
    { name: { ar: 'أرابيا أون لاين', en: 'Arabia Online' }, type: 'discount', minDeposit: 2000 },
    { name: { ar: 'مباشر مصر', en: 'Mubasher Egypt' }, type: 'discount', minDeposit: 1000 },
    { name: { ar: 'النعيم للوساطة', en: 'Naeem Brokerage' }, type: 'full_service', minDeposit: 5000 },
  ],
};

// ================== صناديق الاستثمار ==================
export const investmentFunds = {
  SA: [
    { name: { ar: 'صندوق الراجحي للأسهم السعودية', en: 'Al Rajhi Saudi Equity Fund' }, type: 'equity', nav: { min: 18, max: 25 }, aum: 8500000000 },
    { name: { ar: 'صندوق الأهلي للتداول', en: 'SNB Equity Trading Fund' }, type: 'etf', nav: { min: 38, max: 48 }, aum: 2200000000 },
    { name: { ar: 'صندوق الرياض ريت', en: 'Riyad REIT' }, type: 'reit', nav: { min: 9, max: 12 }, aum: 4500000000 },
    { name: { ar: 'صندوق جدوى للأسهم السعودية', en: 'Jadwa Saudi Equity Fund' }, type: 'equity', nav: { min: 285, max: 340 }, aum: 6800000000 },
    { name: { ar: 'صندوق فالكم متعدد الأصول', en: 'Falcom Multi-Asset Fund' }, type: 'balanced', nav: { min: 12, max: 16 }, aum: 1500000000 },
    { name: { ar: 'صندوق الجزيرة للصكوك', en: 'Aljazira Sukuk Fund' }, type: 'sukuk', nav: { min: 10.5, max: 11.5 }, aum: 2800000000 },
    { name: { ar: 'صندوق مشاركة ريت', en: 'Musharaka REIT' }, type: 'reit', nav: { min: 8.5, max: 10.5 }, aum: 1900000000 },
  ],
  AE: [
    { name: { ar: 'صندوق الإمارات للأسهم', en: 'Emirates Equity Fund' }, type: 'equity', nav: { min: 120, max: 155 }, aum: 1200000000 },
    { name: { ar: 'صندوق شيملاء للأسهم', en: 'Chimera S&P UAE Fund' }, type: 'etf', nav: { min: 18, max: 24 }, aum: 450000000 },
    { name: { ar: 'صندوق الإمارات ريت', en: 'Emirates REIT' }, type: 'reit', nav: { min: 0.35, max: 0.48 }, aum: 680000000 },
  ],
};

// ================== السلع والمعادن ==================
export const commodities = {
  preciousMetals: [
    { symbol: 'XAU', name: { ar: 'الذهب', en: 'Gold' }, unit: 'oz', price: { min: 1920, max: 2150 }, currency: 'USD' },
    { symbol: 'XAG', name: { ar: 'الفضة', en: 'Silver' }, unit: 'oz', price: { min: 22, max: 28 }, currency: 'USD' },
    { symbol: 'XPT', name: { ar: 'البلاتين', en: 'Platinum' }, unit: 'oz', price: { min: 880, max: 1050 }, currency: 'USD' },
    { symbol: 'XPD', name: { ar: 'البلاديوم', en: 'Palladium' }, unit: 'oz', price: { min: 950, max: 1150 }, currency: 'USD' },
  ],
  baseMetals: [
    { symbol: 'HG', name: { ar: 'النحاس', en: 'Copper' }, unit: 'lb', price: { min: 3.60, max: 4.40 }, currency: 'USD' },
    { symbol: 'AL', name: { ar: 'الألمنيوم', en: 'Aluminum' }, unit: 'mt', price: { min: 2200, max: 2650 }, currency: 'USD' },
    { symbol: 'ZN', name: { ar: 'الزنك', en: 'Zinc' }, unit: 'mt', price: { min: 2400, max: 2900 }, currency: 'USD' },
    { symbol: 'NI', name: { ar: 'النيكل', en: 'Nickel' }, unit: 'mt', price: { min: 16000, max: 21000 }, currency: 'USD' },
  ],
  agricultural: [
    { symbol: 'ZW', name: { ar: 'القمح', en: 'Wheat' }, unit: 'bushel', price: { min: 5.50, max: 7.50 }, currency: 'USD' },
    { symbol: 'ZC', name: { ar: 'الذرة', en: 'Corn' }, unit: 'bushel', price: { min: 4.20, max: 5.80 }, currency: 'USD' },
    { symbol: 'ZS', name: { ar: 'فول الصويا', en: 'Soybeans' }, unit: 'bushel', price: { min: 11.50, max: 14.50 }, currency: 'USD' },
    { symbol: 'KC', name: { ar: 'البن', en: 'Coffee' }, unit: 'lb', price: { min: 1.45, max: 2.20 }, currency: 'USD' },
    { symbol: 'SB', name: { ar: 'السكر', en: 'Sugar' }, unit: 'lb', price: { min: 0.18, max: 0.28 }, currency: 'USD' },
    { symbol: 'CT', name: { ar: 'القطن', en: 'Cotton' }, unit: 'lb', price: { min: 0.75, max: 0.95 }, currency: 'USD' },
    { symbol: 'CC', name: { ar: 'الكاكاو', en: 'Cocoa' }, unit: 'mt', price: { min: 3200, max: 4800 }, currency: 'USD' },
  ],
};

// ================== شركات التحويل المالي ==================
export const moneyTransferCompanies = [
  { name: { ar: 'ويسترن يونيون', en: 'Western Union' }, fee: { min: 5, max: 25 }, speed: 'instant' },
  { name: { ar: 'موني جرام', en: 'MoneyGram' }, fee: { min: 4, max: 20 }, speed: 'instant' },
  { name: { ar: 'الأنصاري للصرافة', en: 'Al Ansari Exchange' }, fee: { min: 10, max: 35 }, speed: 'same_day' },
  { name: { ar: 'الفردان للصرافة', en: 'Al Fardan Exchange' }, fee: { min: 15, max: 40 }, speed: 'same_day' },
  { name: { ar: 'الإمارات العربية للصرافة', en: 'UAE Exchange' }, fee: { min: 8, max: 30 }, speed: 'same_day' },
  { name: { ar: 'ترانسفير وايز (وايز)', en: 'Wise (TransferWise)' }, fee: { min: 3, max: 15 }, speed: '1-2_days' },
  { name: { ar: 'باي بال', en: 'PayPal' }, fee: { min: 2.9, max: 4.9 }, speed: 'instant' },
  { name: { ar: 'سويفت', en: 'SWIFT Transfer' }, fee: { min: 20, max: 50 }, speed: '3-5_days' },
];

// ================== دوال التوليد الذكية ==================
export function generateRealisticPrice(min: number, max: number, volatility: number = 0.02): number {
  const mid = (min + max) / 2;
  const range = max - min;
  const normalRandom = () => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  };
  const price = mid + normalRandom() * range * volatility * 5;
  return Math.max(min, Math.min(max, price));
}

export function generatePriceChange(): { change: number; changePercent: number; direction: 'up' | 'down' | 'neutral' } {
  const changePercent = (Math.random() - 0.5) * 6; // -3% to +3%
  const direction = changePercent > 0.1 ? 'up' : changePercent < -0.1 ? 'down' : 'neutral';
  return { change: 0, changePercent: Math.round(changePercent * 100) / 100, direction };
}

export function generateVolume(avgVolume: number): number {
  const multiplier = 0.5 + Math.random() * 1.5;
  return Math.round(avgVolume * multiplier);
}

export function generateStockData(exchange: keyof typeof arabStockExchanges, language: 'ar' | 'en') {
  const exchangeData = arabStockExchanges[exchange];
  const stock = exchangeData.stocks[Math.floor(Math.random() * exchangeData.stocks.length)];
  const price = generateRealisticPrice(stock.price.min, stock.price.max);
  const { changePercent, direction } = generatePriceChange();
  const change = price * changePercent / 100;
  const open = price - change * (Math.random() * 0.5);
  const high = Math.max(price, open) * (1 + Math.random() * 0.015);
  const low = Math.min(price, open) * (1 - Math.random() * 0.015);
  
  return {
    symbol: stock.symbol,
    name: stock.name[language],
    exchange: exchangeData.name[language],
    currency: exchangeData.currency,
    price: Math.round(price * 100) / 100,
    open: Math.round(open * 100) / 100,
    high: Math.round(high * 100) / 100,
    low: Math.round(low * 100) / 100,
    change: Math.round(change * 100) / 100,
    changePercent,
    direction,
    volume: generateVolume(1000000),
    marketCap: stock.marketCap,
    sector: stock.sector,
  };
}

export function generateForexData(language: 'ar' | 'en', type: 'major' | 'arab' = 'arab') {
  const pairs = type === 'major' ? forexPairs.major : forexPairs.arabCurrencies;
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const bid = generateRealisticPrice(pair.bid.min, pair.bid.max, 0.001);
  const ask = bid + pair.spread;
  const { changePercent } = generatePriceChange();
  
  return {
    pair: pair.pair,
    name: pair.name[language],
    bid: Math.round(bid * 10000) / 10000,
    ask: Math.round(ask * 10000) / 10000,
    spread: pair.spread,
    change: changePercent,
    high24h: Math.round(bid * 1.005 * 10000) / 10000,
    low24h: Math.round(bid * 0.995 * 10000) / 10000,
    timestamp: new Date().toISOString(),
  };
}

export function generateEnergyData(language: 'ar' | 'en', type: 'crude' | 'gas' | 'refined' = 'crude') {
  const products = energyPrices[type];
  const product = products[Math.floor(Math.random() * products.length)];
  const price = generateRealisticPrice(product.price.min, product.price.max);
  const { changePercent, direction } = generatePriceChange();
  
  return {
    symbol: product.symbol,
    name: product.name[language],
    price: Math.round(price * 100) / 100,
    unit: product.unit,
    currency: product.currency,
    change: changePercent,
    direction,
    high52w: Math.round(product.price.max * 1.1 * 100) / 100,
    low52w: Math.round(product.price.min * 0.9 * 100) / 100,
    timestamp: new Date().toISOString(),
  };
}

export function generateCryptoData(language: 'ar' | 'en') {
  const crypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];
  const price = generateRealisticPrice(crypto.price.min, crypto.price.max, 0.05);
  const { changePercent, direction } = generatePriceChange();
  const volume = generateRealisticPrice(crypto.volume24h.min, crypto.volume24h.max) * 1000000000;
  
  return {
    symbol: crypto.symbol,
    name: crypto.name[language],
    price: Math.round(price * 100) / 100,
    marketCap: crypto.marketCap,
    volume24h: Math.round(volume),
    change24h: changePercent,
    direction,
    high24h: Math.round(price * 1.03 * 100) / 100,
    low24h: Math.round(price * 0.97 * 100) / 100,
    circulatingSupply: Math.round(crypto.marketCap / price),
  };
}

export function generateEconomicIndicator(country: keyof typeof arabEconomicIndicators, language: 'ar' | 'en') {
  const data = arabEconomicIndicators[country];
  
  return {
    country: data.country[language],
    gdpBillionUSD: data.gdp.value,
    gdpGrowth: generateRealisticPrice(data.gdp.growth.min, data.gdp.growth.max),
    inflation: generateRealisticPrice(data.inflation.min, data.inflation.max),
    unemployment: generateRealisticPrice(data.unemployment.min, data.unemployment.max),
    interestRate: generateRealisticPrice(data.interestRate.min, data.interestRate.max),
    debtToGDP: generateRealisticPrice(data.debtToGDP.min, data.debtToGDP.max),
    currentAccount: generateRealisticPrice(data.currentAccount.min, data.currentAccount.max),
    creditRatingSP: data.creditRating.sp,
    creditRatingMoodys: data.creditRating.moodys,
    creditRatingFitch: data.creditRating.fitch,
    oilProduction: 'oilProduction' in data && data.oilProduction ? generateRealisticPrice((data as any).oilProduction.min, (data as any).oilProduction.max) : ('gasProduction' in data ? generateRealisticPrice((data as any).gasProduction.min, (data as any).gasProduction.max) : null),
  };
}

export function generatePortfolioHolding(exchange: keyof typeof arabStockExchanges, language: 'ar' | 'en') {
  const stockData = generateStockData(exchange, language);
  const quantity = Math.floor(Math.random() * 1000) * 10 + 100;
  const buyPrice = stockData.price * (0.85 + Math.random() * 0.3);
  const currentValue = quantity * stockData.price;
  const costBasis = quantity * buyPrice;
  const profitLoss = currentValue - costBasis;
  const profitLossPercent = (profitLoss / costBasis) * 100;
  
  return {
    ...stockData,
    quantity,
    buyPrice: Math.round(buyPrice * 100) / 100,
    currentValue: Math.round(currentValue * 100) / 100,
    costBasis: Math.round(costBasis * 100) / 100,
    profitLoss: Math.round(profitLoss * 100) / 100,
    profitLossPercent: Math.round(profitLossPercent * 100) / 100,
    weight: Math.round(Math.random() * 25 * 100) / 100,
  };
}

export function generateCommodityData(language: 'ar' | 'en', type: 'precious' | 'base' | 'agricultural' = 'precious') {
  const category = type === 'precious' ? commodities.preciousMetals : 
                   type === 'base' ? commodities.baseMetals : commodities.agricultural;
  const commodity = category[Math.floor(Math.random() * category.length)];
  const price = generateRealisticPrice(commodity.price.min, commodity.price.max);
  const { changePercent, direction } = generatePriceChange();
  
  return {
    symbol: commodity.symbol,
    name: commodity.name[language],
    price: Math.round(price * 100) / 100,
    unit: commodity.unit,
    currency: commodity.currency,
    change: changePercent,
    direction,
    timestamp: new Date().toISOString(),
  };
}
