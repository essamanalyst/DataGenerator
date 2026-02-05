// =====================================================
// أسهم حقيقية مرتبطة بأسواقها - Real Stocks by Market
// =====================================================

export interface Stock {
  symbol: string;
  nameAr: string;
  nameEn: string;
  sector: string;
  sectorAr: string;
  currentPrice: number;
  currency: string;
}

export interface Market {
  code: string;
  nameAr: string;
  nameEn: string;
  country: string;
  countryAr: string;
  currency: string;
  currencySymbol: string;
  stocks: Stock[];
}

// =====================================================
// السوق السعودي - تداول (Tadawul)
// =====================================================
const TADAWUL_STOCKS: Stock[] = [
  // البنوك
  { symbol: '1120', nameAr: 'مصرف الراجحي', nameEn: 'Al Rajhi Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 95.50, currency: 'SAR' },
  { symbol: '1180', nameAr: 'بنك الأهلي السعودي', nameEn: 'SNB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 45.20, currency: 'SAR' },
  { symbol: '1150', nameAr: 'بنك الإنماء', nameEn: 'Alinma Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 28.75, currency: 'SAR' },
  { symbol: '1140', nameAr: 'البنك السعودي الفرنسي', nameEn: 'BSF', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 42.30, currency: 'SAR' },
  { symbol: '1050', nameAr: 'بنك ساب', nameEn: 'SABB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 38.90, currency: 'SAR' },
  { symbol: '1030', nameAr: 'بنك الرياض', nameEn: 'Riyad Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 31.25, currency: 'SAR' },
  { symbol: '1020', nameAr: 'بنك الجزيرة', nameEn: 'Bank Aljazira', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 18.50, currency: 'SAR' },
  { symbol: '1010', nameAr: 'البنك العربي الوطني', nameEn: 'ANB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 22.80, currency: 'SAR' },
  
  // الطاقة والنفط
  { symbol: '2222', nameAr: 'أرامكو السعودية', nameEn: 'Saudi Aramco', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 28.35, currency: 'SAR' },
  { symbol: '2030', nameAr: 'المصافي', nameEn: 'SARCO', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 78.50, currency: 'SAR' },
  { symbol: '2380', nameAr: 'بترو رابغ', nameEn: 'Petro Rabigh', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 8.25, currency: 'SAR' },
  
  // البتروكيماويات
  { symbol: '2010', nameAr: 'سابك', nameEn: 'SABIC', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 87.20, currency: 'SAR' },
  { symbol: '2310', nameAr: 'سبكيم', nameEn: 'SIPCHEM', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 23.45, currency: 'SAR' },
  { symbol: '2060', nameAr: 'التصنيع', nameEn: 'Tasnee', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 15.80, currency: 'SAR' },
  { symbol: '2290', nameAr: 'ينساب', nameEn: 'Yansab', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 42.10, currency: 'SAR' },
  
  // الاتصالات
  { symbol: '7010', nameAr: 'الاتصالات السعودية', nameEn: 'STC', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 42.50, currency: 'SAR' },
  { symbol: '7020', nameAr: 'اتحاد اتصالات (موبايلي)', nameEn: 'Mobily', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 52.30, currency: 'SAR' },
  { symbol: '7030', nameAr: 'زين السعودية', nameEn: 'Zain KSA', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 12.45, currency: 'SAR' },
  
  // التجزئة
  { symbol: '4190', nameAr: 'جرير', nameEn: 'Jarir', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 145.00, currency: 'SAR' },
  { symbol: '4001', nameAr: 'عبدالله العثيم', nameEn: 'Othaim Markets', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 118.50, currency: 'SAR' },
  { symbol: '4003', nameAr: 'إكسترا', nameEn: 'eXtra', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 95.80, currency: 'SAR' },
  { symbol: '4240', nameAr: 'الحكير', nameEn: 'Fawaz Alhokair', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 28.50, currency: 'SAR' },
  
  // العقارات
  { symbol: '4300', nameAr: 'دار الأركان', nameEn: 'Dar Al Arkan', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 14.20, currency: 'SAR' },
  { symbol: '4020', nameAr: 'العقارية', nameEn: 'SRECO', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 25.30, currency: 'SAR' },
  { symbol: '4220', nameAr: 'إعمار المدينة', nameEn: 'Emaar EC', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 18.65, currency: 'SAR' },
  
  // الأغذية
  { symbol: '2280', nameAr: 'المراعي', nameEn: 'Almarai', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 52.40, currency: 'SAR' },
  { symbol: '2050', nameAr: 'صافولا', nameEn: 'Savola', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 34.75, currency: 'SAR' },
  { symbol: '6001', nameAr: 'حلواني إخوان', nameEn: 'Halwani Bros', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 65.20, currency: 'SAR' },
  
  // التأمين
  { symbol: '8200', nameAr: 'الدرع العربي', nameEn: 'Arabian Shield', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 28.90, currency: 'SAR' },
  { symbol: '8010', nameAr: 'التعاونية', nameEn: 'Tawuniya', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 92.50, currency: 'SAR' },
  { symbol: '8020', nameAr: 'ملاذ للتأمين', nameEn: 'Malath Insurance', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 18.35, currency: 'SAR' },
];

// =====================================================
// البورصة المصرية - EGX
// =====================================================
const EGX_STOCKS: Stock[] = [
  // البنوك
  { symbol: 'COMI', nameAr: 'البنك التجاري الدولي', nameEn: 'CIB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 72.50, currency: 'EGP' },
  { symbol: 'QNBA', nameAr: 'بنك قطر الوطني الأهلي', nameEn: 'QNB Alahli', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 28.90, currency: 'EGP' },
  { symbol: 'HRHO', nameAr: 'البنك المصري لتنمية الصادرات', nameEn: 'EBank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 15.20, currency: 'EGP' },
  { symbol: 'FAIT', nameAr: 'بنك فيصل الإسلامي', nameEn: 'Faisal Islamic Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 35.80, currency: 'EGP' },
  { symbol: 'ADIB', nameAr: 'مصرف أبوظبي الإسلامي', nameEn: 'ADIB Egypt', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 42.30, currency: 'EGP' },
  
  // الاتصالات
  { symbol: 'ETEL', nameAr: 'المصرية للاتصالات', nameEn: 'Telecom Egypt', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 28.45, currency: 'EGP' },
  { symbol: 'ORWE', nameAr: 'أوراسكوم للتنمية', nameEn: 'Orascom Development', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 8.75, currency: 'EGP' },
  
  // العقارات
  { symbol: 'TMGH', nameAr: 'طلعت مصطفى', nameEn: 'TMG Holding', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 45.20, currency: 'EGP' },
  { symbol: 'PHDC', nameAr: 'بالم هيلز للتعمير', nameEn: 'Palm Hills', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 4.85, currency: 'EGP' },
  { symbol: 'MNHD', nameAr: 'مدينة نصر للإسكان', nameEn: 'MNHD', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 5.20, currency: 'EGP' },
  { symbol: 'OCDI', nameAr: 'أوراسكوم للتنمية', nameEn: 'ODE', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 12.30, currency: 'EGP' },
  { symbol: 'EMFD', nameAr: 'إعمار مصر', nameEn: 'Emaar Misr', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 4.15, currency: 'EGP' },
  
  // الأغذية والمشروبات
  { symbol: 'JUFO', nameAr: 'جهينة', nameEn: 'Juhayna', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 28.50, currency: 'EGP' },
  { symbol: 'EAST', nameAr: 'إيسترن كومباني', nameEn: 'Eastern Company', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 18.90, currency: 'EGP' },
  { symbol: 'EFID', nameAr: 'إديتا للصناعات الغذائية', nameEn: 'Edita', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 22.45, currency: 'EGP' },
  { symbol: 'DOMT', nameAr: 'دومتي', nameEn: 'Domty', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 8.95, currency: 'EGP' },
  
  // الصناعة
  { symbol: 'ESRS', nameAr: 'حديد عز', nameEn: 'Ezz Steel', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 38.20, currency: 'EGP' },
  { symbol: 'IRON', nameAr: 'حديد المصريين', nameEn: 'Egyptian Iron & Steel', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 12.50, currency: 'EGP' },
  { symbol: 'SWDY', nameAr: 'السويدي إليكتريك', nameEn: 'Elsewedy Electric', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 15.80, currency: 'EGP' },
  
  // الأسمدة والكيماويات
  { symbol: 'MFPC', nameAr: 'موبكو', nameEn: 'MOPCO', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 145.00, currency: 'EGP' },
  { symbol: 'ABUK', nameAr: 'أبو قير للأسمدة', nameEn: 'Abu Qir Fertilizers', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 82.30, currency: 'EGP' },
  { symbol: 'SKPC', nameAr: 'سيدي كرير', nameEn: 'Sidi Kerir', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 5.85, currency: 'EGP' },
  
  // التجارة والتوزيع
  { symbol: 'AUTO', nameAr: 'جي بي أوتو', nameEn: 'GB Auto', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 4.25, currency: 'EGP' },
  { symbol: 'AMOC', nameAr: 'أموك', nameEn: 'AMOC', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 7.85, currency: 'EGP' },
];

// =====================================================
// سوق أبوظبي للأوراق المالية - ADX
// =====================================================
const ADX_STOCKS: Stock[] = [
  // البنوك
  { symbol: 'FAB', nameAr: 'بنك أبوظبي الأول', nameEn: 'First Abu Dhabi Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 14.50, currency: 'AED' },
  { symbol: 'ADIB', nameAr: 'مصرف أبوظبي الإسلامي', nameEn: 'ADIB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 12.80, currency: 'AED' },
  { symbol: 'ADCB', nameAr: 'بنك أبوظبي التجاري', nameEn: 'ADCB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 9.25, currency: 'AED' },
  { symbol: 'UNB', nameAr: 'بنك الاتحاد الوطني', nameEn: 'Union National Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 5.45, currency: 'AED' },
  
  // الطاقة
  { symbol: 'ADNOC', nameAr: 'أدنوك للتوزيع', nameEn: 'ADNOC Distribution', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 4.35, currency: 'AED' },
  { symbol: 'ADNOCDRILL', nameAr: 'أدنوك للحفر', nameEn: 'ADNOC Drilling', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 5.20, currency: 'AED' },
  { symbol: 'ADNOCGAS', nameAr: 'أدنوك للغاز', nameEn: 'ADNOC Gas', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 3.15, currency: 'AED' },
  { symbol: 'TAQA', nameAr: 'طاقة', nameEn: 'TAQA', sector: 'Utilities', sectorAr: 'الخدمات', currentPrice: 3.85, currency: 'AED' },
  { symbol: 'MASDAR', nameAr: 'مصدر', nameEn: 'Masdar', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 2.95, currency: 'AED' },
  
  // الاتصالات
  { symbol: 'ETISALAT', nameAr: 'اتصالات الإمارات', nameEn: 'Etisalat UAE', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 24.50, currency: 'AED' },
  
  // العقارات
  { symbol: 'ALDAR', nameAr: 'الدار العقارية', nameEn: 'Aldar Properties', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 6.80, currency: 'AED' },
  { symbol: 'ESHRAQ', nameAr: 'إشراق للاستثمار', nameEn: 'Eshraq Investments', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 0.42, currency: 'AED' },
  
  // التأمين
  { symbol: 'ADNIC', nameAr: 'أبوظبي الوطنية للتأمين', nameEn: 'ADNIC', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 7.25, currency: 'AED' },
  
  // الصناعة
  { symbol: 'AGTHIA', nameAr: 'أغذية', nameEn: 'Agthia', sector: 'Food', sectorAr: 'الأغذية', currentPrice: 5.95, currency: 'AED' },
  { symbol: 'FERTIGLOBE', nameAr: 'فيرتيغلوب', nameEn: 'Fertiglobe', sector: 'Materials', sectorAr: 'المواد الأساسية', currentPrice: 2.85, currency: 'AED' },
];

// =====================================================
// سوق دبي المالي - DFM
// =====================================================
const DFM_STOCKS: Stock[] = [
  // البنوك
  { symbol: 'DIB', nameAr: 'بنك دبي الإسلامي', nameEn: 'Dubai Islamic Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 6.25, currency: 'AED' },
  { symbol: 'ENBD', nameAr: 'بنك الإمارات دبي الوطني', nameEn: 'Emirates NBD', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 18.50, currency: 'AED' },
  { symbol: 'CBD', nameAr: 'بنك دبي التجاري', nameEn: 'Commercial Bank of Dubai', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 7.80, currency: 'AED' },
  { symbol: 'MASQ', nameAr: 'بنك المشرق', nameEn: 'Mashreq Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 165.00, currency: 'AED' },
  
  // العقارات
  { symbol: 'EMAAR', nameAr: 'إعمار العقارية', nameEn: 'Emaar Properties', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 8.95, currency: 'AED' },
  { symbol: 'DAMAC', nameAr: 'داماك العقارية', nameEn: 'DAMAC Properties', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 1.85, currency: 'AED' },
  { symbol: 'DPW', nameAr: 'موانئ دبي العالمية', nameEn: 'DP World', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 15.20, currency: 'AED' },
  { symbol: 'DEYAAR', nameAr: 'ديار للتطوير', nameEn: 'Deyaar', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 0.55, currency: 'AED' },
  { symbol: 'UNION', nameAr: 'الاتحاد العقارية', nameEn: 'Union Properties', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 0.42, currency: 'AED' },
  
  // الاتصالات
  { symbol: 'DU', nameAr: 'دو', nameEn: 'du (EITC)', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 6.45, currency: 'AED' },
  
  // الخدمات
  { symbol: 'SALIK', nameAr: 'سالك', nameEn: 'Salik', sector: 'Transport', sectorAr: 'النقل', currentPrice: 4.85, currency: 'AED' },
  { symbol: 'DEWA', nameAr: 'ديوا', nameEn: 'DEWA', sector: 'Utilities', sectorAr: 'الخدمات', currentPrice: 2.75, currency: 'AED' },
  { symbol: 'TECOM', nameAr: 'تيكوم', nameEn: 'TECOM Group', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 4.95, currency: 'AED' },
  
  // التأمين
  { symbol: 'SALAMA', nameAr: 'سلامة للتأمين', nameEn: 'Salama Insurance', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 0.68, currency: 'AED' },
  
  // الترفيه
  { symbol: 'PARKIN', nameAr: 'باركن', nameEn: 'Parkin', sector: 'Services', sectorAr: 'الخدمات', currentPrice: 3.25, currency: 'AED' },
];

// =====================================================
// بورصة الكويت - Boursa Kuwait
// =====================================================
const KUWAIT_STOCKS: Stock[] = [
  // البنوك
  { symbol: 'NBK', nameAr: 'بنك الكويت الوطني', nameEn: 'National Bank of Kuwait', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 1.050, currency: 'KWD' },
  { symbol: 'KFH', nameAr: 'بيت التمويل الكويتي', nameEn: 'Kuwait Finance House', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.890, currency: 'KWD' },
  { symbol: 'BOUBYAN', nameAr: 'بنك بوبيان', nameEn: 'Boubyan Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.720, currency: 'KWD' },
  { symbol: 'GBK', nameAr: 'بنك الخليج', nameEn: 'Gulf Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.295, currency: 'KWD' },
  { symbol: 'ABK', nameAr: 'البنك الأهلي الكويتي', nameEn: 'Al Ahli Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.315, currency: 'KWD' },
  { symbol: 'BURGAN', nameAr: 'بنك برقان', nameEn: 'Burgan Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.245, currency: 'KWD' },
  
  // الاتصالات
  { symbol: 'ZAIN', nameAr: 'زين', nameEn: 'Zain', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.580, currency: 'KWD' },
  { symbol: 'OOREDOO', nameAr: 'أوريدو الكويت', nameEn: 'Ooredoo Kuwait', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.720, currency: 'KWD' },
  { symbol: 'STC', nameAr: 'الاتصالات الكويتية', nameEn: 'STC Kuwait', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.895, currency: 'KWD' },
  
  // الصناعة والخدمات
  { symbol: 'AGILITY', nameAr: 'أجيليتي', nameEn: 'Agility', sector: 'Logistics', sectorAr: 'اللوجستيات', currentPrice: 0.985, currency: 'KWD' },
  { symbol: 'MABANEE', nameAr: 'المباني', nameEn: 'Mabanee', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 0.745, currency: 'KWD' },
  { symbol: 'HUMANSOFT', nameAr: 'هيومن سوفت', nameEn: 'Humansoft', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 3.450, currency: 'KWD' },
  { symbol: 'KIPCO', nameAr: 'كيبكو', nameEn: 'KIPCO', sector: 'Investment', sectorAr: 'الاستثمار', currentPrice: 0.178, currency: 'KWD' },
];

// =====================================================
// بورصة قطر - Qatar Stock Exchange
// =====================================================
const QATAR_STOCKS: Stock[] = [
  // البنوك
  { symbol: 'QNBK', nameAr: 'بنك قطر الوطني', nameEn: 'QNB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 17.50, currency: 'QAR' },
  { symbol: 'QIBK', nameAr: 'مصرف قطر الإسلامي', nameEn: 'Qatar Islamic Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 22.80, currency: 'QAR' },
  { symbol: 'CBQK', nameAr: 'البنك التجاري القطري', nameEn: 'Commercial Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 5.85, currency: 'QAR' },
  { symbol: 'DHBK', nameAr: 'بنك الدوحة', nameEn: 'Doha Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 2.45, currency: 'QAR' },
  { symbol: 'MARK', nameAr: 'بنك مسقط', nameEn: 'Masraf Al Rayan', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 4.25, currency: 'QAR' },
  
  // الصناعة والطاقة
  { symbol: 'IQCD', nameAr: 'صناعات قطر', nameEn: 'Industries Qatar', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 14.20, currency: 'QAR' },
  { symbol: 'QGTS', nameAr: 'قطر غاز للنقل', nameEn: 'Qatar Gas Transport', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 4.85, currency: 'QAR' },
  { symbol: 'BRES', nameAr: 'بروة العقارية', nameEn: 'Barwa Real Estate', sector: 'Real Estate', sectorAr: 'العقارات', currentPrice: 3.25, currency: 'QAR' },
  { symbol: 'QEWS', nameAr: 'قطر للكهرباء والماء', nameEn: 'Qatar Electricity & Water', sector: 'Utilities', sectorAr: 'الخدمات', currentPrice: 16.50, currency: 'QAR' },
  
  // الاتصالات
  { symbol: 'ORDS', nameAr: 'أوريدو قطر', nameEn: 'Ooredoo Qatar', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 9.75, currency: 'QAR' },
  { symbol: 'VFQS', nameAr: 'فودافون قطر', nameEn: 'Vodafone Qatar', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 1.45, currency: 'QAR' },
  
  // التأمين
  { symbol: 'QATI', nameAr: 'قطر للتأمين', nameEn: 'Qatar Insurance', sector: 'Insurance', sectorAr: 'التأمين', currentPrice: 2.65, currency: 'QAR' },
];

// =====================================================
// بورصة البحرين - Bahrain Bourse
// =====================================================
const BAHRAIN_STOCKS: Stock[] = [
  { symbol: 'BATELCO', nameAr: 'بتلكو', nameEn: 'Batelco', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.520, currency: 'BHD' },
  { symbol: 'AHLI', nameAr: 'البنك الأهلي المتحد', nameEn: 'Ahli United Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.890, currency: 'BHD' },
  { symbol: 'NBB', nameAr: 'بنك البحرين الوطني', nameEn: 'NBB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.685, currency: 'BHD' },
  { symbol: 'BISB', nameAr: 'بنك البحرين الإسلامي', nameEn: 'BISB', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.125, currency: 'BHD' },
  { symbol: 'BBK', nameAr: 'بنك البحرين والكويت', nameEn: 'BBK', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.545, currency: 'BHD' },
  { symbol: 'ALBA', nameAr: 'ألمنيوم البحرين', nameEn: 'Aluminium Bahrain', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 1.250, currency: 'BHD' },
  { symbol: 'ZAINBH', nameAr: 'زين البحرين', nameEn: 'Zain Bahrain', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.145, currency: 'BHD' },
  { symbol: 'GFH', nameAr: 'مجموعة جي إف إتش', nameEn: 'GFH Financial', sector: 'Investment', sectorAr: 'الاستثمار', currentPrice: 0.325, currency: 'BHD' },
];

// =====================================================
// بورصة مسقط - Muscat Securities Market
// =====================================================
const OMAN_STOCKS: Stock[] = [
  { symbol: 'BKMB', nameAr: 'بنك مسقط', nameEn: 'Bank Muscat', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.420, currency: 'OMR' },
  { symbol: 'BKSB', nameAr: 'بنك صحار', nameEn: 'Sohar Bank', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 0.125, currency: 'OMR' },
  { symbol: 'OMAN', nameAr: 'عمانتل', nameEn: 'Omantel', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.685, currency: 'OMR' },
  { symbol: 'OQEP', nameAr: 'أوكيو للاستكشاف', nameEn: 'OQ Exploration', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 0.385, currency: 'OMR' },
  { symbol: 'OOREDOO', nameAr: 'أوريدو عمان', nameEn: 'Ooredoo Oman', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 0.475, currency: 'OMR' },
  { symbol: 'RECO', nameAr: 'صناعة الكابلات العمانية', nameEn: 'Oman Cables', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 0.895, currency: 'OMR' },
  { symbol: 'OCGS', nameAr: 'الغاز العماني', nameEn: 'Oman Gas', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 0.145, currency: 'OMR' },
];

// =====================================================
// البورصات الأمريكية - US Markets
// =====================================================
const NYSE_STOCKS: Stock[] = [
  // التقنية
  { symbol: 'AAPL', nameAr: 'آبل', nameEn: 'Apple Inc.', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 185.50, currency: 'USD' },
  { symbol: 'MSFT', nameAr: 'مايكروسوفت', nameEn: 'Microsoft', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 378.25, currency: 'USD' },
  { symbol: 'GOOGL', nameAr: 'ألفابت (جوجل)', nameEn: 'Alphabet (Google)', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 142.80, currency: 'USD' },
  { symbol: 'META', nameAr: 'ميتا (فيسبوك)', nameEn: 'Meta Platforms', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 485.30, currency: 'USD' },
  { symbol: 'AMZN', nameAr: 'أمازون', nameEn: 'Amazon', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 178.45, currency: 'USD' },
  { symbol: 'NVDA', nameAr: 'إنفيديا', nameEn: 'NVIDIA', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 875.50, currency: 'USD' },
  { symbol: 'TSLA', nameAr: 'تسلا', nameEn: 'Tesla', sector: 'Automotive', sectorAr: 'السيارات', currentPrice: 245.80, currency: 'USD' },
  
  // المالية
  { symbol: 'JPM', nameAr: 'جي بي مورجان', nameEn: 'JPMorgan Chase', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 195.20, currency: 'USD' },
  { symbol: 'BAC', nameAr: 'بنك أوف أمريكا', nameEn: 'Bank of America', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 38.45, currency: 'USD' },
  { symbol: 'WFC', nameAr: 'ويلز فارجو', nameEn: 'Wells Fargo', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 58.90, currency: 'USD' },
  { symbol: 'GS', nameAr: 'جولدمان ساكس', nameEn: 'Goldman Sachs', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 425.80, currency: 'USD' },
  { symbol: 'MS', nameAr: 'مورجان ستانلي', nameEn: 'Morgan Stanley', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 95.50, currency: 'USD' },
  { symbol: 'C', nameAr: 'سيتي جروب', nameEn: 'Citigroup', sector: 'Banks', sectorAr: 'البنوك', currentPrice: 62.30, currency: 'USD' },
  { symbol: 'V', nameAr: 'فيزا', nameEn: 'Visa', sector: 'Financial', sectorAr: 'الخدمات المالية', currentPrice: 275.40, currency: 'USD' },
  { symbol: 'MA', nameAr: 'ماستركارد', nameEn: 'Mastercard', sector: 'Financial', sectorAr: 'الخدمات المالية', currentPrice: 458.90, currency: 'USD' },
  
  // الطاقة
  { symbol: 'XOM', nameAr: 'إكسون موبيل', nameEn: 'Exxon Mobil', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 105.75, currency: 'USD' },
  { symbol: 'CVX', nameAr: 'شيفرون', nameEn: 'Chevron', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 152.30, currency: 'USD' },
  { symbol: 'COP', nameAr: 'كونوكو فيليبس', nameEn: 'ConocoPhillips', sector: 'Energy', sectorAr: 'الطاقة', currentPrice: 118.50, currency: 'USD' },
  
  // الرعاية الصحية
  { symbol: 'JNJ', nameAr: 'جونسون آند جونسون', nameEn: 'Johnson & Johnson', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 158.45, currency: 'USD' },
  { symbol: 'UNH', nameAr: 'يونايتد هيلث', nameEn: 'UnitedHealth', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 525.80, currency: 'USD' },
  { symbol: 'PFE', nameAr: 'فايزر', nameEn: 'Pfizer', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 28.90, currency: 'USD' },
  { symbol: 'MRK', nameAr: 'ميرك', nameEn: 'Merck', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 125.30, currency: 'USD' },
  { symbol: 'ABBV', nameAr: 'آبفي', nameEn: 'AbbVie', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 168.50, currency: 'USD' },
  
  // السلع الاستهلاكية
  { symbol: 'PG', nameAr: 'بروكتر آند جامبل', nameEn: 'Procter & Gamble', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 165.20, currency: 'USD' },
  { symbol: 'KO', nameAr: 'كوكاكولا', nameEn: 'Coca-Cola', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 62.45, currency: 'USD' },
  { symbol: 'PEP', nameAr: 'بيبسيكو', nameEn: 'PepsiCo', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 175.80, currency: 'USD' },
  { symbol: 'WMT', nameAr: 'وول مارت', nameEn: 'Walmart', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 165.30, currency: 'USD' },
  { symbol: 'HD', nameAr: 'هوم ديبوت', nameEn: 'Home Depot', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 365.50, currency: 'USD' },
  { symbol: 'MCD', nameAr: 'ماكدونالدز', nameEn: 'McDonald\'s', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 285.40, currency: 'USD' },
  { symbol: 'NKE', nameAr: 'نايكي', nameEn: 'Nike', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 98.75, currency: 'USD' },
  { symbol: 'DIS', nameAr: 'والت ديزني', nameEn: 'Walt Disney', sector: 'Entertainment', sectorAr: 'الترفيه', currentPrice: 112.30, currency: 'USD' },
  
  // الصناعة
  { symbol: 'BA', nameAr: 'بوينج', nameEn: 'Boeing', sector: 'Aerospace', sectorAr: 'الطيران', currentPrice: 185.60, currency: 'USD' },
  { symbol: 'CAT', nameAr: 'كاتربيلر', nameEn: 'Caterpillar', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 345.80, currency: 'USD' },
  { symbol: 'GE', nameAr: 'جنرال إلكتريك', nameEn: 'General Electric', sector: 'Industrial', sectorAr: 'الصناعة', currentPrice: 158.90, currency: 'USD' },
  
  // الاتصالات
  { symbol: 'T', nameAr: 'إيه تي آند تي', nameEn: 'AT&T', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 18.45, currency: 'USD' },
  { symbol: 'VZ', nameAr: 'فيرايزون', nameEn: 'Verizon', sector: 'Telecom', sectorAr: 'الاتصالات', currentPrice: 42.30, currency: 'USD' },
];

const NASDAQ_STOCKS: Stock[] = [
  { symbol: 'NFLX', nameAr: 'نتفليكس', nameEn: 'Netflix', sector: 'Entertainment', sectorAr: 'الترفيه', currentPrice: 625.80, currency: 'USD' },
  { symbol: 'ADBE', nameAr: 'أدوبي', nameEn: 'Adobe', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 545.20, currency: 'USD' },
  { symbol: 'CRM', nameAr: 'سيلزفورس', nameEn: 'Salesforce', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 268.90, currency: 'USD' },
  { symbol: 'INTC', nameAr: 'إنتل', nameEn: 'Intel', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 32.45, currency: 'USD' },
  { symbol: 'AMD', nameAr: 'إيه إم دي', nameEn: 'AMD', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 165.30, currency: 'USD' },
  { symbol: 'PYPL', nameAr: 'باي بال', nameEn: 'PayPal', sector: 'Financial', sectorAr: 'الخدمات المالية', currentPrice: 68.50, currency: 'USD' },
  { symbol: 'CSCO', nameAr: 'سيسكو', nameEn: 'Cisco', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 48.90, currency: 'USD' },
  { symbol: 'ORCL', nameAr: 'أوراكل', nameEn: 'Oracle', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 125.80, currency: 'USD' },
  { symbol: 'QCOM', nameAr: 'كوالكوم', nameEn: 'Qualcomm', sector: 'Technology', sectorAr: 'التقنية', currentPrice: 168.45, currency: 'USD' },
  { symbol: 'SBUX', nameAr: 'ستاربكس', nameEn: 'Starbucks', sector: 'Consumer', sectorAr: 'السلع الاستهلاكية', currentPrice: 92.30, currency: 'USD' },
  { symbol: 'GILD', nameAr: 'جيلياد', nameEn: 'Gilead Sciences', sector: 'Healthcare', sectorAr: 'الرعاية الصحية', currentPrice: 78.50, currency: 'USD' },
  { symbol: 'BKNG', nameAr: 'بوكينج', nameEn: 'Booking Holdings', sector: 'Travel', sectorAr: 'السفر', currentPrice: 3650.00, currency: 'USD' },
  { symbol: 'COST', nameAr: 'كوستكو', nameEn: 'Costco', sector: 'Retail', sectorAr: 'التجزئة', currentPrice: 785.40, currency: 'USD' },
  { symbol: 'ABNB', nameAr: 'إير بي إن بي', nameEn: 'Airbnb', sector: 'Travel', sectorAr: 'السفر', currentPrice: 152.80, currency: 'USD' },
  { symbol: 'UBER', nameAr: 'أوبر', nameEn: 'Uber', sector: 'Transport', sectorAr: 'النقل', currentPrice: 72.45, currency: 'USD' },
];

// =====================================================
// تجميع جميع الأسواق
// =====================================================
export const MARKETS: Market[] = [
  {
    code: 'TADAWUL',
    nameAr: 'تداول',
    nameEn: 'Saudi Stock Exchange (Tadawul)',
    country: 'SA',
    countryAr: 'السعودية',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    stocks: TADAWUL_STOCKS
  },
  {
    code: 'EGX',
    nameAr: 'البورصة المصرية',
    nameEn: 'Egyptian Exchange',
    country: 'EG',
    countryAr: 'مصر',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    stocks: EGX_STOCKS
  },
  {
    code: 'ADX',
    nameAr: 'سوق أبوظبي',
    nameEn: 'Abu Dhabi Securities Exchange',
    country: 'AE',
    countryAr: 'الإمارات',
    currency: 'AED',
    currencySymbol: 'د.إ',
    stocks: ADX_STOCKS
  },
  {
    code: 'DFM',
    nameAr: 'سوق دبي المالي',
    nameEn: 'Dubai Financial Market',
    country: 'AE',
    countryAr: 'الإمارات',
    currency: 'AED',
    currencySymbol: 'د.إ',
    stocks: DFM_STOCKS
  },
  {
    code: 'BOURSA',
    nameAr: 'بورصة الكويت',
    nameEn: 'Boursa Kuwait',
    country: 'KW',
    countryAr: 'الكويت',
    currency: 'KWD',
    currencySymbol: 'د.ك',
    stocks: KUWAIT_STOCKS
  },
  {
    code: 'QSE',
    nameAr: 'بورصة قطر',
    nameEn: 'Qatar Stock Exchange',
    country: 'QA',
    countryAr: 'قطر',
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    stocks: QATAR_STOCKS
  },
  {
    code: 'BHB',
    nameAr: 'بورصة البحرين',
    nameEn: 'Bahrain Bourse',
    country: 'BH',
    countryAr: 'البحرين',
    currency: 'BHD',
    currencySymbol: 'د.ب',
    stocks: BAHRAIN_STOCKS
  },
  {
    code: 'MSM',
    nameAr: 'سوق مسقط',
    nameEn: 'Muscat Securities Market',
    country: 'OM',
    countryAr: 'عمان',
    currency: 'OMR',
    currencySymbol: 'ر.ع',
    stocks: OMAN_STOCKS
  },
  {
    code: 'NYSE',
    nameAr: 'بورصة نيويورك',
    nameEn: 'New York Stock Exchange',
    country: 'US',
    countryAr: 'أمريكا',
    currency: 'USD',
    currencySymbol: '$',
    stocks: NYSE_STOCKS
  },
  {
    code: 'NASDAQ',
    nameAr: 'ناسداك',
    nameEn: 'NASDAQ',
    country: 'US',
    countryAr: 'أمريكا',
    currency: 'USD',
    currencySymbol: '$',
    stocks: NASDAQ_STOCKS
  }
];

// =====================================================
// دوال المساعدة
// =====================================================

export function getMarketByCode(code: string): Market | undefined {
  return MARKETS.find(m => m.code === code);
}

export function getMarketByCountry(countryCode: string): Market[] {
  return MARKETS.filter(m => m.country === countryCode);
}

export function getRandomMarket(): Market {
  return MARKETS[Math.floor(Math.random() * MARKETS.length)];
}

export function getRandomStock(marketCode?: string): { stock: Stock; market: Market } {
  let market: Market;
  
  if (marketCode) {
    market = getMarketByCode(marketCode) || getRandomMarket();
  } else {
    market = getRandomMarket();
  }
  
  const stock = market.stocks[Math.floor(Math.random() * market.stocks.length)];
  return { stock, market };
}

export function getRandomArabMarket(): Market {
  const arabMarkets = MARKETS.filter(m => !['US'].includes(m.country));
  return arabMarkets[Math.floor(Math.random() * arabMarkets.length)];
}

export function getRandomUSMarket(): Market {
  const usMarkets = MARKETS.filter(m => m.country === 'US');
  return usMarkets[Math.floor(Math.random() * usMarkets.length)];
}

export function getAllStocks(): Stock[] {
  return MARKETS.flatMap(m => m.stocks);
}

export function getStocksBySector(sector: string): Stock[] {
  return MARKETS.flatMap(m => m.stocks.filter(s => s.sector === sector || s.sectorAr === sector));
}

// توليد سعر واقعي مع تقلب
export function generateRealisticPrice(basePrice: number, volatility: number = 0.02): number {
  const change = basePrice * volatility * (Math.random() * 2 - 1);
  return Math.round((basePrice + change) * 100) / 100;
}

// توليد بيانات سهم كاملة
export function generateStockTradingData(stock: Stock, market: Market) {
  const currentPrice = generateRealisticPrice(stock.currentPrice);
  const previousClose = generateRealisticPrice(stock.currentPrice, 0.01);
  const change = currentPrice - previousClose;
  const changePercent = (change / previousClose) * 100;
  const open = generateRealisticPrice(previousClose, 0.005);
  const high = Math.max(open, currentPrice) * (1 + Math.random() * 0.02);
  const low = Math.min(open, currentPrice) * (1 - Math.random() * 0.02);
  const volume = Math.floor(Math.random() * 10000000) + 100000;
  
  return {
    symbol: stock.symbol,
    name: stock.nameAr,
    nameEn: stock.nameEn,
    market: market.nameAr,
    marketEn: market.nameEn,
    marketCode: market.code,
    sector: stock.sectorAr,
    sectorEn: stock.sector,
    currency: stock.currency,
    currencySymbol: market.currencySymbol,
    currentPrice: Math.round(currentPrice * 100) / 100,
    previousClose: Math.round(previousClose * 100) / 100,
    open: Math.round(open * 100) / 100,
    high: Math.round(high * 100) / 100,
    low: Math.round(low * 100) / 100,
    change: Math.round(change * 100) / 100,
    changePercent: Math.round(changePercent * 100) / 100,
    volume,
    value: Math.round(volume * currentPrice),
    time: new Date().toISOString()
  };
}
