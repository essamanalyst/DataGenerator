// قاعدة بيانات أسعار العملات الحقيقية والمترابطة منطقياً

export interface Currency {
  code: string;
  nameAr: string;
  nameEn: string;
  symbol: string;
  country: string;
  countryEn: string;
  flag: string;
  type: 'major' | 'arab' | 'emerging' | 'crypto';
  usdRate: number; // سعر الصرف مقابل الدولار (كم وحدة من العملة = 1 دولار)
  decimals: number;
  peggedTo?: string; // العملة المربوطة بها
  spreadPercent: number; // نسبة الفارق بين البيع والشراء
}

// العملات الرئيسية والعربية مع أسعار حقيقية
export const CURRENCIES: Currency[] = [
  // العملات الرئيسية
  { code: 'USD', nameAr: 'دولار أمريكي', nameEn: 'US Dollar', symbol: '$', country: 'الولايات المتحدة', countryEn: 'United States', flag: '🇺🇸', type: 'major', usdRate: 1, decimals: 2, spreadPercent: 0.01 },
  { code: 'EUR', nameAr: 'يورو', nameEn: 'Euro', symbol: '€', country: 'منطقة اليورو', countryEn: 'Eurozone', flag: '🇪🇺', type: 'major', usdRate: 0.92, decimals: 4, spreadPercent: 0.02 },
  { code: 'GBP', nameAr: 'جنيه إسترليني', nameEn: 'British Pound', symbol: '£', country: 'المملكة المتحدة', countryEn: 'United Kingdom', flag: '🇬🇧', type: 'major', usdRate: 0.79, decimals: 4, spreadPercent: 0.02 },
  { code: 'JPY', nameAr: 'ين ياباني', nameEn: 'Japanese Yen', symbol: '¥', country: 'اليابان', countryEn: 'Japan', flag: '🇯🇵', type: 'major', usdRate: 149.50, decimals: 2, spreadPercent: 0.03 },
  { code: 'CHF', nameAr: 'فرنك سويسري', nameEn: 'Swiss Franc', symbol: 'Fr', country: 'سويسرا', countryEn: 'Switzerland', flag: '🇨🇭', type: 'major', usdRate: 0.88, decimals: 4, spreadPercent: 0.02 },
  { code: 'AUD', nameAr: 'دولار أسترالي', nameEn: 'Australian Dollar', symbol: 'A$', country: 'أستراليا', countryEn: 'Australia', flag: '🇦🇺', type: 'major', usdRate: 1.53, decimals: 4, spreadPercent: 0.03 },
  { code: 'CAD', nameAr: 'دولار كندي', nameEn: 'Canadian Dollar', symbol: 'C$', country: 'كندا', countryEn: 'Canada', flag: '🇨🇦', type: 'major', usdRate: 1.36, decimals: 4, spreadPercent: 0.03 },
  { code: 'CNY', nameAr: 'يوان صيني', nameEn: 'Chinese Yuan', symbol: '¥', country: 'الصين', countryEn: 'China', flag: '🇨🇳', type: 'major', usdRate: 7.24, decimals: 4, spreadPercent: 0.05 },
  
  // العملات العربية
  { code: 'SAR', nameAr: 'ريال سعودي', nameEn: 'Saudi Riyal', symbol: 'ر.س', country: 'السعودية', countryEn: 'Saudi Arabia', flag: '🇸🇦', type: 'arab', usdRate: 3.75, decimals: 4, peggedTo: 'USD', spreadPercent: 0.01 },
  { code: 'AED', nameAr: 'درهم إماراتي', nameEn: 'UAE Dirham', symbol: 'د.إ', country: 'الإمارات', countryEn: 'UAE', flag: '🇦🇪', type: 'arab', usdRate: 3.6725, decimals: 4, peggedTo: 'USD', spreadPercent: 0.01 },
  { code: 'KWD', nameAr: 'دينار كويتي', nameEn: 'Kuwaiti Dinar', symbol: 'د.ك', country: 'الكويت', countryEn: 'Kuwait', flag: '🇰🇼', type: 'arab', usdRate: 0.307, decimals: 4, spreadPercent: 0.02 },
  { code: 'BHD', nameAr: 'دينار بحريني', nameEn: 'Bahraini Dinar', symbol: 'د.ب', country: 'البحرين', countryEn: 'Bahrain', flag: '🇧🇭', type: 'arab', usdRate: 0.376, decimals: 4, peggedTo: 'USD', spreadPercent: 0.02 },
  { code: 'OMR', nameAr: 'ريال عماني', nameEn: 'Omani Rial', symbol: 'ر.ع', country: 'عمان', countryEn: 'Oman', flag: '🇴🇲', type: 'arab', usdRate: 0.385, decimals: 4, peggedTo: 'USD', spreadPercent: 0.02 },
  { code: 'QAR', nameAr: 'ريال قطري', nameEn: 'Qatari Riyal', symbol: 'ر.ق', country: 'قطر', countryEn: 'Qatar', flag: '🇶🇦', type: 'arab', usdRate: 3.64, decimals: 4, peggedTo: 'USD', spreadPercent: 0.01 },
  { code: 'EGP', nameAr: 'جنيه مصري', nameEn: 'Egyptian Pound', symbol: 'ج.م', country: 'مصر', countryEn: 'Egypt', flag: '🇪🇬', type: 'arab', usdRate: 48.50, decimals: 4, spreadPercent: 0.15 },
  { code: 'JOD', nameAr: 'دينار أردني', nameEn: 'Jordanian Dinar', symbol: 'د.أ', country: 'الأردن', countryEn: 'Jordan', flag: '🇯🇴', type: 'arab', usdRate: 0.709, decimals: 4, peggedTo: 'USD', spreadPercent: 0.02 },
  { code: 'LBP', nameAr: 'ليرة لبنانية', nameEn: 'Lebanese Pound', symbol: 'ل.ل', country: 'لبنان', countryEn: 'Lebanon', flag: '🇱🇧', type: 'arab', usdRate: 89500, decimals: 0, spreadPercent: 2.0 },
  { code: 'MAD', nameAr: 'درهم مغربي', nameEn: 'Moroccan Dirham', symbol: 'د.م', country: 'المغرب', countryEn: 'Morocco', flag: '🇲🇦', type: 'arab', usdRate: 9.95, decimals: 4, spreadPercent: 0.10 },
  { code: 'TND', nameAr: 'دينار تونسي', nameEn: 'Tunisian Dinar', symbol: 'د.ت', country: 'تونس', countryEn: 'Tunisia', flag: '🇹🇳', type: 'arab', usdRate: 3.12, decimals: 4, spreadPercent: 0.10 },
  { code: 'DZD', nameAr: 'دينار جزائري', nameEn: 'Algerian Dinar', symbol: 'د.ج', country: 'الجزائر', countryEn: 'Algeria', flag: '🇩🇿', type: 'arab', usdRate: 134.50, decimals: 2, spreadPercent: 0.15 },
  { code: 'IQD', nameAr: 'دينار عراقي', nameEn: 'Iraqi Dinar', symbol: 'د.ع', country: 'العراق', countryEn: 'Iraq', flag: '🇮🇶', type: 'arab', usdRate: 1310, decimals: 0, spreadPercent: 0.20 },
  { code: 'SYP', nameAr: 'ليرة سورية', nameEn: 'Syrian Pound', symbol: 'ل.س', country: 'سوريا', countryEn: 'Syria', flag: '🇸🇾', type: 'arab', usdRate: 13000, decimals: 0, spreadPercent: 3.0 },
  { code: 'YER', nameAr: 'ريال يمني', nameEn: 'Yemeni Rial', symbol: 'ر.ي', country: 'اليمن', countryEn: 'Yemen', flag: '🇾🇪', type: 'arab', usdRate: 250, decimals: 2, spreadPercent: 1.0 },
  { code: 'SDG', nameAr: 'جنيه سوداني', nameEn: 'Sudanese Pound', symbol: 'ج.س', country: 'السودان', countryEn: 'Sudan', flag: '🇸🇩', type: 'arab', usdRate: 601, decimals: 2, spreadPercent: 2.0 },
  { code: 'LYD', nameAr: 'دينار ليبي', nameEn: 'Libyan Dinar', symbol: 'د.ل', country: 'ليبيا', countryEn: 'Libya', flag: '🇱🇾', type: 'arab', usdRate: 4.85, decimals: 4, spreadPercent: 0.50 },
  
  // عملات ناشئة
  { code: 'TRY', nameAr: 'ليرة تركية', nameEn: 'Turkish Lira', symbol: '₺', country: 'تركيا', countryEn: 'Turkey', flag: '🇹🇷', type: 'emerging', usdRate: 32.50, decimals: 4, spreadPercent: 0.20 },
  { code: 'INR', nameAr: 'روبية هندية', nameEn: 'Indian Rupee', symbol: '₹', country: 'الهند', countryEn: 'India', flag: '🇮🇳', type: 'emerging', usdRate: 83.50, decimals: 4, spreadPercent: 0.10 },
  { code: 'PKR', nameAr: 'روبية باكستانية', nameEn: 'Pakistani Rupee', symbol: '₨', country: 'باكستان', countryEn: 'Pakistan', flag: '🇵🇰', type: 'emerging', usdRate: 278, decimals: 2, spreadPercent: 0.30 },
];

// أزواج العملات الرئيسية
export interface CurrencyPair {
  pair: string;
  base: string;
  quote: string;
  nameAr: string;
  nameEn: string;
  category: 'major' | 'minor' | 'exotic' | 'arab';
  volatility: number; // متوسط التقلب اليومي %
  typicalSpread: number; // الفارق النموذجي بالنقاط
}

export const CURRENCY_PAIRS: CurrencyPair[] = [
  // الأزواج الرئيسية
  { pair: 'EUR/USD', base: 'EUR', quote: 'USD', nameAr: 'يورو/دولار', nameEn: 'Euro/Dollar', category: 'major', volatility: 0.5, typicalSpread: 1 },
  { pair: 'GBP/USD', base: 'GBP', quote: 'USD', nameAr: 'إسترليني/دولار', nameEn: 'Pound/Dollar', category: 'major', volatility: 0.7, typicalSpread: 2 },
  { pair: 'USD/JPY', base: 'USD', quote: 'JPY', nameAr: 'دولار/ين', nameEn: 'Dollar/Yen', category: 'major', volatility: 0.6, typicalSpread: 1 },
  { pair: 'USD/CHF', base: 'USD', quote: 'CHF', nameAr: 'دولار/فرنك سويسري', nameEn: 'Dollar/Swiss Franc', category: 'major', volatility: 0.5, typicalSpread: 2 },
  { pair: 'AUD/USD', base: 'AUD', quote: 'USD', nameAr: 'أسترالي/دولار', nameEn: 'Aussie/Dollar', category: 'major', volatility: 0.7, typicalSpread: 2 },
  { pair: 'USD/CAD', base: 'USD', quote: 'CAD', nameAr: 'دولار/كندي', nameEn: 'Dollar/Loonie', category: 'major', volatility: 0.5, typicalSpread: 2 },
  { pair: 'NZD/USD', base: 'NZD', quote: 'USD', nameAr: 'نيوزيلندي/دولار', nameEn: 'Kiwi/Dollar', category: 'major', volatility: 0.7, typicalSpread: 3 },
  
  // أزواج الين (الكروس)
  { pair: 'EUR/JPY', base: 'EUR', quote: 'JPY', nameAr: 'يورو/ين', nameEn: 'Euro/Yen', category: 'minor', volatility: 0.8, typicalSpread: 2 },
  { pair: 'GBP/JPY', base: 'GBP', quote: 'JPY', nameAr: 'إسترليني/ين', nameEn: 'Pound/Yen', category: 'minor', volatility: 1.0, typicalSpread: 3 },
  { pair: 'AUD/JPY', base: 'AUD', quote: 'JPY', nameAr: 'أسترالي/ين', nameEn: 'Aussie/Yen', category: 'minor', volatility: 0.9, typicalSpread: 3 },
  
  // أزواج اليورو (الكروس)
  { pair: 'EUR/GBP', base: 'EUR', quote: 'GBP', nameAr: 'يورو/إسترليني', nameEn: 'Euro/Pound', category: 'minor', volatility: 0.4, typicalSpread: 2 },
  { pair: 'EUR/CHF', base: 'EUR', quote: 'CHF', nameAr: 'يورو/فرنك سويسري', nameEn: 'Euro/Swiss', category: 'minor', volatility: 0.4, typicalSpread: 2 },
  { pair: 'EUR/AUD', base: 'EUR', quote: 'AUD', nameAr: 'يورو/أسترالي', nameEn: 'Euro/Aussie', category: 'minor', volatility: 0.6, typicalSpread: 3 },
  
  // أزواج العملات العربية
  { pair: 'USD/SAR', base: 'USD', quote: 'SAR', nameAr: 'دولار/ريال سعودي', nameEn: 'Dollar/Saudi Riyal', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/AED', base: 'USD', quote: 'AED', nameAr: 'دولار/درهم إماراتي', nameEn: 'Dollar/UAE Dirham', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/EGP', base: 'USD', quote: 'EGP', nameAr: 'دولار/جنيه مصري', nameEn: 'Dollar/Egyptian Pound', category: 'arab', volatility: 1.5, typicalSpread: 50 },
  { pair: 'USD/KWD', base: 'USD', quote: 'KWD', nameAr: 'دولار/دينار كويتي', nameEn: 'Dollar/Kuwaiti Dinar', category: 'arab', volatility: 0.1, typicalSpread: 10 },
  { pair: 'USD/QAR', base: 'USD', quote: 'QAR', nameAr: 'دولار/ريال قطري', nameEn: 'Dollar/Qatari Riyal', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/BHD', base: 'USD', quote: 'BHD', nameAr: 'دولار/دينار بحريني', nameEn: 'Dollar/Bahraini Dinar', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/OMR', base: 'USD', quote: 'OMR', nameAr: 'دولار/ريال عماني', nameEn: 'Dollar/Omani Rial', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/JOD', base: 'USD', quote: 'JOD', nameAr: 'دولار/دينار أردني', nameEn: 'Dollar/Jordanian Dinar', category: 'arab', volatility: 0.01, typicalSpread: 5 },
  { pair: 'USD/MAD', base: 'USD', quote: 'MAD', nameAr: 'دولار/درهم مغربي', nameEn: 'Dollar/Moroccan Dirham', category: 'arab', volatility: 0.3, typicalSpread: 20 },
  { pair: 'USD/TND', base: 'USD', quote: 'TND', nameAr: 'دولار/دينار تونسي', nameEn: 'Dollar/Tunisian Dinar', category: 'arab', volatility: 0.4, typicalSpread: 25 },
  { pair: 'USD/LBP', base: 'USD', quote: 'LBP', nameAr: 'دولار/ليرة لبنانية', nameEn: 'Dollar/Lebanese Pound', category: 'arab', volatility: 5.0, typicalSpread: 500 },
  { pair: 'USD/IQD', base: 'USD', quote: 'IQD', nameAr: 'دولار/دينار عراقي', nameEn: 'Dollar/Iraqi Dinar', category: 'arab', volatility: 0.5, typicalSpread: 100 },
  
  // أزواج كروس عربية
  { pair: 'EUR/SAR', base: 'EUR', quote: 'SAR', nameAr: 'يورو/ريال سعودي', nameEn: 'Euro/Saudi Riyal', category: 'arab', volatility: 0.5, typicalSpread: 15 },
  { pair: 'GBP/SAR', base: 'GBP', quote: 'SAR', nameAr: 'إسترليني/ريال سعودي', nameEn: 'Pound/Saudi Riyal', category: 'arab', volatility: 0.7, typicalSpread: 20 },
  { pair: 'EUR/AED', base: 'EUR', quote: 'AED', nameAr: 'يورو/درهم إماراتي', nameEn: 'Euro/UAE Dirham', category: 'arab', volatility: 0.5, typicalSpread: 15 },
  { pair: 'EUR/EGP', base: 'EUR', quote: 'EGP', nameAr: 'يورو/جنيه مصري', nameEn: 'Euro/Egyptian Pound', category: 'arab', volatility: 1.8, typicalSpread: 80 },
  { pair: 'SAR/EGP', base: 'SAR', quote: 'EGP', nameAr: 'ريال سعودي/جنيه مصري', nameEn: 'Saudi Riyal/Egyptian Pound', category: 'arab', volatility: 1.5, typicalSpread: 30 },
  { pair: 'AED/EGP', base: 'AED', quote: 'EGP', nameAr: 'درهم إماراتي/جنيه مصري', nameEn: 'UAE Dirham/Egyptian Pound', category: 'arab', volatility: 1.5, typicalSpread: 30 },
  { pair: 'KWD/SAR', base: 'KWD', quote: 'SAR', nameAr: 'دينار كويتي/ريال سعودي', nameEn: 'Kuwaiti Dinar/Saudi Riyal', category: 'arab', volatility: 0.1, typicalSpread: 15 },
];

// شركات الصرافة
export interface ExchangeCompany {
  nameAr: string;
  nameEn: string;
  country: string;
  type: 'bank' | 'exchange' | 'online';
}

export const EXCHANGE_COMPANIES: ExchangeCompany[] = [
  // السعودية
  { nameAr: 'الراجحي للصرافة', nameEn: 'Al Rajhi Exchange', country: 'SA', type: 'bank' },
  { nameAr: 'الأهلي للصرافة', nameEn: 'Al Ahli Exchange', country: 'SA', type: 'bank' },
  { nameAr: 'الإنماء للصرافة', nameEn: 'Alinma Exchange', country: 'SA', type: 'bank' },
  { nameAr: 'تحويل العربي', nameEn: 'Arab National Exchange', country: 'SA', type: 'bank' },
  // الإمارات
  { nameAr: 'الأنصاري للصرافة', nameEn: 'Al Ansari Exchange', country: 'AE', type: 'exchange' },
  { nameAr: 'الفردان للصرافة', nameEn: 'Al Fardan Exchange', country: 'AE', type: 'exchange' },
  { nameAr: 'الإمارات للصرافة', nameEn: 'UAE Exchange', country: 'AE', type: 'exchange' },
  { nameAr: 'لولو للصرافة', nameEn: 'Lulu Exchange', country: 'AE', type: 'exchange' },
  // مصر
  { nameAr: 'الأهلي للصرافة', nameEn: 'NBE Exchange', country: 'EG', type: 'bank' },
  { nameAr: 'مصرف أبو ظبي الإسلامي', nameEn: 'ADIB Egypt', country: 'EG', type: 'bank' },
  // دولية
  { nameAr: 'ويسترن يونيون', nameEn: 'Western Union', country: 'INTL', type: 'online' },
  { nameAr: 'موني جرام', nameEn: 'MoneyGram', country: 'INTL', type: 'online' },
  { nameAr: 'وايز', nameEn: 'Wise', country: 'INTL', type: 'online' },
  { nameAr: 'ريفولوت', nameEn: 'Revolut', country: 'INTL', type: 'online' },
];

// دالة حساب سعر الصرف بين عملتين
// الشرح: إذا كان USD/SAR = 3.75 يعني 1 دولار = 3.75 ريال
// إذا كان EUR/USD = 1.0875 يعني 1 يورو = 1.0875 دولار
// لحساب EUR/SAR = (1 / 0.92) * 3.75 = 1.0875 * 3.75 = 4.078
export function calculateCrossRate(baseCurrency: Currency, quoteCurrency: Currency): number {
  // إذا كانت عملة الأساس هي الدولار
  if (baseCurrency.code === 'USD') {
    // USD/XXX = سعر صرف العملة الأخرى مقابل الدولار
    return quoteCurrency.usdRate;
  }
  
  // إذا كانت عملة التسعير هي الدولار
  if (quoteCurrency.code === 'USD') {
    // XXX/USD = 1 / سعر صرف العملة الأخرى مقابل الدولار
    return 1 / baseCurrency.usdRate;
  }
  
  // Cross Rate للعملات الأخرى
  // مثال: EUR/SAR = (1/EUR_USD_Rate) * SAR_USD_Rate
  // EUR/SAR = (1/0.92) * 3.75 = 4.076
  const baseToUsd = 1 / baseCurrency.usdRate; // كم دولار = 1 وحدة من عملة الأساس
  const usdToQuote = quoteCurrency.usdRate;   // كم وحدة من عملة التسعير = 1 دولار
  return baseToUsd * usdToQuote;
}

// دالة توليد سعر صرف واقعي مع تباين صغير جداً
export function generateRealisticRate(baseRate: number, volatilityPercent: number): number {
  // التباين اليومي الطبيعي في أسعار العملات صغير جداً (عادة 0.1% - 0.5%)
  const actualVolatility = Math.min(volatilityPercent, 1); // الحد الأقصى 1%
  const variation = (Math.random() - 0.5) * 2 * (actualVolatility / 100) * baseRate;
  return baseRate + variation;
}

// دالة توليد بيانات OHLC منطقية لسعر الصرف
export function generateForexOHLC(rate: number, volatility: number): {
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
} {
  // تحديد عدد الخانات العشرية بناءً على قيمة السعر
  let decimals: number;
  if (rate < 0.01) {
    decimals = 6;
  } else if (rate < 1) {
    decimals = 5;
  } else if (rate < 10) {
    decimals = 4;
  } else if (rate < 1000) {
    decimals = 2;
  } else {
    decimals = 0;
  }
  
  // التقلب اليومي الواقعي (عادة 0.1% - 0.5% للعملات الرئيسية)
  const actualVolatility = Math.min(volatility, 1.5); // الحد الأقصى 1.5%
  
  // السعر السابق (مع تباين صغير عن السعر الحالي)
  const previousVariation = (Math.random() - 0.5) * 0.5; // ±0.25%
  const previousClose = parseFloat((rate * (1 + previousVariation / 100)).toFixed(decimals));
  
  // الافتتاح قريب جداً من الإغلاق السابق (فجوة صغيرة جداً)
  const gapPercent = (Math.random() - 0.5) * 0.1; // فجوة ±0.05%
  const open = parseFloat((previousClose * (1 + gapPercent / 100)).toFixed(decimals));
  
  // التغيير اليومي الواقعي
  const dailyChange = (Math.random() - 0.5) * 2 * actualVolatility;
  const close = parseFloat((previousClose * (1 + dailyChange / 100)).toFixed(decimals));
  
  // حساب أعلى وأدنى سعر بشكل منطقي
  // أعلى سعر يجب أن يكون >= أقصى (الافتتاح، الإغلاق)
  // أدنى سعر يجب أن يكون <= أدنى (الافتتاح، الإغلاق)
  const maxPrice = Math.max(open, close);
  const minPrice = Math.min(open, close);
  
  // إضافة نطاق إضافي صغير
  const extraRange = Math.abs(close - open) * 0.3 + (rate * 0.001); // 0.1% من السعر كحد أدنى
  
  const high = parseFloat((maxPrice + Math.random() * extraRange).toFixed(decimals));
  const low = parseFloat((minPrice - Math.random() * extraRange).toFixed(decimals));
  
  // حساب التغيير
  const change = parseFloat((close - previousClose).toFixed(decimals));
  const changePercent = parseFloat(((change / previousClose) * 100).toFixed(4));
  
  return { open, high, low, close, previousClose, change, changePercent };
}

// دالة توليد أسعار البيع والشراء
export function generateBidAsk(rate: number, spreadPercent: number): {
  bid: number;
  ask: number;
  mid: number;
  spread: number;
  spreadPips: number;
} {
  // تحديد عدد الخانات العشرية
  let decimals: number;
  let pipMultiplier: number;
  
  if (rate < 0.01) {
    decimals = 6;
    pipMultiplier = 100000;
  } else if (rate < 1) {
    decimals = 5;
    pipMultiplier = 10000;
  } else if (rate < 10) {
    decimals = 4;
    pipMultiplier = 10000;
  } else if (rate < 1000) {
    decimals = 2;
    pipMultiplier = 100;
  } else {
    decimals = 0;
    pipMultiplier = 1;
  }
  
  // Spread الواقعي صغير جداً (0.01% - 0.1% للعملات الرئيسية)
  const actualSpreadPercent = Math.max(0.01, Math.min(spreadPercent, 0.5));
  const halfSpread = (rate * actualSpreadPercent / 100) / 2;
  
  const mid = rate;
  const bid = parseFloat((mid - halfSpread).toFixed(decimals));
  const ask = parseFloat((mid + halfSpread).toFixed(decimals));
  const spread = parseFloat((ask - bid).toFixed(decimals + 1));
  const spreadPips = Math.max(1, Math.round(spread * pipMultiplier));
  
  return { bid, ask, mid: parseFloat(mid.toFixed(decimals)), spread, spreadPips };
}

// سياق سعر الصرف المترابط
export interface ForexContext {
  pair: CurrencyPair;
  baseCurrency: Currency;
  quoteCurrency: Currency;
  rate: number;
  bid: number;
  ask: number;
  mid: number;
  spread: number;
  spreadPips: number;
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
  timestamp: string;
  date: string;
  time: string;
  session: string;
  trend: string;
  exchangeCompany: ExchangeCompany;
}

// دالة توليد سياق سعر صرف كامل ومترابط
export function generateForexContext(language: 'ar' | 'en' = 'ar'): ForexContext {
  // اختيار زوج عملات عشوائي
  const pair = CURRENCY_PAIRS[Math.floor(Math.random() * CURRENCY_PAIRS.length)];
  
  // الحصول على معلومات العملات
  const baseCurrency = CURRENCIES.find(c => c.code === pair.base) || CURRENCIES[0];
  const quoteCurrency = CURRENCIES.find(c => c.code === pair.quote) || CURRENCIES[1];
  
  // حساب سعر الصرف الأساسي
  const baseRate = calculateCrossRate(baseCurrency, quoteCurrency);
  
  // توليد سعر واقعي مع تباين
  const currentRate = generateRealisticRate(baseRate, pair.volatility);
  
  // توليد OHLC منطقية
  const ohlc = generateForexOHLC(currentRate, pair.volatility);
  
  // توليد أسعار البيع والشراء
  const bidAsk = generateBidAsk(ohlc.close, (pair.typicalSpread / 10000) * 100 / ohlc.close * 100);
  
  // حجم التداول
  const volume = Math.floor(Math.random() * 500000000) + 50000000;
  
  // التاريخ والوقت
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0];
  const timestamp = now.toISOString();
  
  // جلسة التداول
  const hour = now.getHours();
  let session: string;
  if (hour >= 0 && hour < 8) {
    session = language === 'ar' ? 'الجلسة الآسيوية' : 'Asian Session';
  } else if (hour >= 8 && hour < 16) {
    session = language === 'ar' ? 'الجلسة الأوروبية' : 'European Session';
  } else {
    session = language === 'ar' ? 'الجلسة الأمريكية' : 'American Session';
  }
  
  // الاتجاه
  let trend: string;
  if (ohlc.changePercent > 0.3) {
    trend = language === 'ar' ? 'صاعد قوي' : 'Strong Uptrend';
  } else if (ohlc.changePercent > 0) {
    trend = language === 'ar' ? 'صاعد' : 'Uptrend';
  } else if (ohlc.changePercent < -0.3) {
    trend = language === 'ar' ? 'هابط قوي' : 'Strong Downtrend';
  } else if (ohlc.changePercent < 0) {
    trend = language === 'ar' ? 'هابط' : 'Downtrend';
  } else {
    trend = language === 'ar' ? 'عرضي' : 'Sideways';
  }
  
  // شركة الصرافة
  const exchangeCompany = EXCHANGE_COMPANIES[Math.floor(Math.random() * EXCHANGE_COMPANIES.length)];
  
  return {
    pair,
    baseCurrency,
    quoteCurrency,
    rate: ohlc.close,
    bid: bidAsk.bid,
    ask: bidAsk.ask,
    mid: bidAsk.mid,
    spread: bidAsk.spread,
    spreadPips: bidAsk.spreadPips,
    open: ohlc.open,
    high: ohlc.high,
    low: ohlc.low,
    close: ohlc.close,
    previousClose: ohlc.previousClose,
    change: ohlc.change,
    changePercent: ohlc.changePercent,
    volume,
    timestamp,
    date,
    time,
    session,
    trend,
    exchangeCompany
  };
}

// دالة توليد سياق تحويل عملات
export interface CurrencyConversionContext {
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  rate: number;
  convertedAmount: number;
  fee: number;
  feePercent: number;
  totalCost: number;
  netAmount: number;
  exchangeCompany: ExchangeCompany;
  transferTime: string;
  date: string;
  referenceNumber: string;
}

export function generateConversionContext(language: 'ar' | 'en' = 'ar'): CurrencyConversionContext {
  // اختيار عملتين مختلفتين
  const shuffled = [...CURRENCIES].sort(() => Math.random() - 0.5);
  const fromCurrency = shuffled[0];
  let toCurrency = shuffled[1];
  
  // التأكد من أن العملتين مختلفتين
  while (toCurrency.code === fromCurrency.code) {
    toCurrency = shuffled[Math.floor(Math.random() * shuffled.length)];
  }
  
  // المبلغ
  const amount = Math.round((Math.random() * 9000 + 1000) * 100) / 100;
  
  // سعر الصرف
  const baseRate = calculateCrossRate(fromCurrency, toCurrency);
  const rate = generateRealisticRate(baseRate, 0.5);
  
  // المبلغ المحول
  const convertedAmount = parseFloat((amount * rate).toFixed(2));
  
  // الرسوم
  const feePercent = Math.random() * 2 + 0.5; // 0.5% - 2.5%
  const fee = parseFloat((amount * feePercent / 100).toFixed(2));
  
  // التكلفة الإجمالية
  const totalCost = parseFloat((amount + fee).toFixed(2));
  
  // المبلغ الصافي بعد الرسوم
  const netAmount = parseFloat((convertedAmount * (1 - feePercent / 100)).toFixed(2));
  
  // شركة الصرافة
  const exchangeCompany = EXCHANGE_COMPANIES[Math.floor(Math.random() * EXCHANGE_COMPANIES.length)];
  
  // وقت التحويل
  const transferTimes = language === 'ar' 
    ? ['فوري', 'خلال ساعة', 'خلال ساعتين', '1-2 يوم عمل', '3-5 أيام عمل']
    : ['Instant', 'Within 1 hour', 'Within 2 hours', '1-2 business days', '3-5 business days'];
  const transferTime = transferTimes[Math.floor(Math.random() * transferTimes.length)];
  
  // التاريخ
  const date = new Date().toISOString().split('T')[0];
  
  // رقم المرجع
  const referenceNumber = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;
  
  return {
    fromCurrency,
    toCurrency,
    amount,
    rate: parseFloat(rate.toFixed(6)),
    convertedAmount,
    fee,
    feePercent: parseFloat(feePercent.toFixed(2)),
    totalCost,
    netAmount,
    exchangeCompany,
    transferTime,
    date,
    referenceNumber
  };
}
