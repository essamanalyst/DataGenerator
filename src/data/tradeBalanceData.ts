// قاعدة بيانات الميزان التجاري الحقيقية والواقعية

export interface TradingPartner {
  country: string;
  countryEn: string;
  exportShare: number; // نسبة الصادرات %
  importShare: number; // نسبة الواردات %
}

export interface TradeProduct {
  name: string;
  nameEn: string;
  share: number; // نسبة من الإجمالي %
  value: { min: number; max: number }; // القيمة بالمليار دولار
}

export interface CountryTradeData {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  // إجمالي الصادرات والواردات بالمليار دولار
  totalExports: { min: number; max: number };
  totalImports: { min: number; max: number };
  // أهم الشركاء التجاريين
  topExportPartners: TradingPartner[];
  topImportPartners: TradingPartner[];
  // أهم السلع المصدرة
  topExports: TradeProduct[];
  // أهم السلع المستوردة
  topImports: TradeProduct[];
  // متوسط معدل النمو السنوي للتجارة
  tradeGrowthRate: { min: number; max: number };
}

export const tradeBalanceDatabase: CountryTradeData[] = [
  {
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    countryCode: 'SA',
    currency: 'ريال سعودي',
    currencyCode: 'SAR',
    totalExports: { min: 320, max: 380 },
    totalImports: { min: 150, max: 180 },
    topExportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 18, importShare: 22 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 12, importShare: 6 },
      { country: 'الهند', countryEn: 'India', exportShare: 11, importShare: 5 },
      { country: 'كوريا الجنوبية', countryEn: 'South Korea', exportShare: 9, importShare: 4 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 8, importShare: 15 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 5, importShare: 7 },
      { country: 'سنغافورة', countryEn: 'Singapore', exportShare: 4, importShare: 3 },
      { country: 'مصر', countryEn: 'Egypt', exportShare: 3, importShare: 2 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 18, importShare: 22 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 8, importShare: 15 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 2, importShare: 8 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 5, importShare: 7 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 12, importShare: 6 },
      { country: 'الهند', countryEn: 'India', exportShare: 11, importShare: 5 },
      { country: 'فرنسا', countryEn: 'France', exportShare: 1, importShare: 4 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 2, importShare: 3 },
    ],
    topExports: [
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 68, value: { min: 220, max: 260 } },
      { name: 'المنتجات البترولية المكررة', nameEn: 'Refined Petroleum', share: 12, value: { min: 35, max: 45 } },
      { name: 'البتروكيماويات', nameEn: 'Petrochemicals', share: 8, value: { min: 25, max: 32 } },
      { name: 'البلاستيك', nameEn: 'Plastics', share: 4, value: { min: 12, max: 16 } },
      { name: 'الألمنيوم', nameEn: 'Aluminum', share: 2, value: { min: 6, max: 8 } },
      { name: 'الأسمدة', nameEn: 'Fertilizers', share: 2, value: { min: 5, max: 7 } },
    ],
    topImports: [
      { name: 'الآلات والمعدات', nameEn: 'Machinery & Equipment', share: 22, value: { min: 32, max: 40 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 14, value: { min: 20, max: 26 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 12, value: { min: 17, max: 22 } },
      { name: 'المواد الغذائية', nameEn: 'Food Products', share: 10, value: { min: 14, max: 18 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 6, value: { min: 8, max: 11 } },
      { name: 'الحديد والصلب', nameEn: 'Iron & Steel', share: 5, value: { min: 7, max: 9 } },
      { name: 'المنسوجات والملابس', nameEn: 'Textiles & Clothing', share: 4, value: { min: 5, max: 7 } },
      { name: 'المجوهرات', nameEn: 'Jewelry', share: 3, value: { min: 4, max: 6 } },
    ],
    tradeGrowthRate: { min: 3, max: 8 },
  },
  {
    country: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryCode: 'AE',
    currency: 'درهم إماراتي',
    currencyCode: 'AED',
    totalExports: { min: 420, max: 500 },
    totalImports: { min: 280, max: 340 },
    topExportPartners: [
      { country: 'الهند', countryEn: 'India', exportShare: 14, importShare: 10 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 10, importShare: 5 },
      { country: 'سويسرا', countryEn: 'Switzerland', exportShare: 9, importShare: 6 },
      { country: 'الصين', countryEn: 'China', exportShare: 8, importShare: 16 },
      { country: 'العراق', countryEn: 'Iraq', exportShare: 6, importShare: 1 },
      { country: 'هونغ كونغ', countryEn: 'Hong Kong', exportShare: 5, importShare: 3 },
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 4, importShare: 4 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 8, importShare: 16 },
      { country: 'الهند', countryEn: 'India', exportShare: 14, importShare: 10 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 4, importShare: 8 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 2, importShare: 5 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 3, importShare: 5 },
      { country: 'المملكة المتحدة', countryEn: 'United Kingdom', exportShare: 3, importShare: 4 },
    ],
    topExports: [
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 35, value: { min: 140, max: 175 } },
      { name: 'الذهب', nameEn: 'Gold', share: 18, value: { min: 70, max: 90 } },
      { name: 'الماس', nameEn: 'Diamonds', share: 8, value: { min: 32, max: 40 } },
      { name: 'المنتجات البترولية', nameEn: 'Refined Petroleum', share: 7, value: { min: 28, max: 35 } },
      { name: 'الألمنيوم', nameEn: 'Aluminum', share: 4, value: { min: 16, max: 20 } },
      { name: 'إعادة التصدير', nameEn: 'Re-exports', share: 15, value: { min: 60, max: 75 } },
    ],
    topImports: [
      { name: 'الذهب', nameEn: 'Gold', share: 20, value: { min: 55, max: 68 } },
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 12, value: { min: 33, max: 41 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 10, value: { min: 28, max: 34 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 8, value: { min: 22, max: 27 } },
      { name: 'الماس', nameEn: 'Diamonds', share: 7, value: { min: 19, max: 24 } },
      { name: 'المجوهرات', nameEn: 'Jewelry', share: 5, value: { min: 14, max: 17 } },
    ],
    tradeGrowthRate: { min: 5, max: 12 },
  },
  {
    country: 'جمهورية مصر العربية',
    countryEn: 'Arab Republic of Egypt',
    countryCode: 'EG',
    currency: 'جنيه مصري',
    currencyCode: 'EGP',
    totalExports: { min: 35, max: 45 },
    totalImports: { min: 75, max: 95 },
    topExportPartners: [
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 8, importShare: 5 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 7, importShare: 6 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 6, importShare: 8 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 6, importShare: 7 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 5, importShare: 5 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 4, importShare: 6 },
      { country: 'الهند', countryEn: 'India', exportShare: 4, importShare: 5 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 3, importShare: 15 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 6, importShare: 8 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 6, importShare: 7 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 4, importShare: 6 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 7, importShare: 6 },
      { country: 'روسيا', countryEn: 'Russia', exportShare: 2, importShare: 6 },
    ],
    topExports: [
      { name: 'الغاز الطبيعي المسال', nameEn: 'LNG', share: 22, value: { min: 7, max: 10 } },
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 12, value: { min: 4, max: 5.5 } },
      { name: 'الأسمدة', nameEn: 'Fertilizers', share: 8, value: { min: 2.5, max: 3.5 } },
      { name: 'المنسوجات والملابس', nameEn: 'Textiles & Clothing', share: 7, value: { min: 2.2, max: 3.2 } },
      { name: 'الفواكه والخضروات', nameEn: 'Fruits & Vegetables', share: 6, value: { min: 2, max: 2.8 } },
      { name: 'البلاستيك', nameEn: 'Plastics', share: 5, value: { min: 1.5, max: 2.3 } },
      { name: 'الحديد والصلب', nameEn: 'Iron & Steel', share: 4, value: { min: 1.3, max: 1.8 } },
    ],
    topImports: [
      { name: 'القمح والحبوب', nameEn: 'Wheat & Grains', share: 12, value: { min: 8, max: 11 } },
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 10, value: { min: 7, max: 9.5 } },
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 10, value: { min: 7, max: 9.5 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 8, value: { min: 5.5, max: 7.5 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 6, value: { min: 4, max: 5.5 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 5, value: { min: 3.5, max: 4.8 } },
      { name: 'الحديد والصلب', nameEn: 'Iron & Steel', share: 5, value: { min: 3.5, max: 4.8 } },
      { name: 'اللحوم', nameEn: 'Meat', share: 4, value: { min: 2.8, max: 3.8 } },
    ],
    tradeGrowthRate: { min: -2, max: 5 },
  },
  {
    country: 'دولة الكويت',
    countryEn: 'State of Kuwait',
    countryCode: 'KW',
    currency: 'دينار كويتي',
    currencyCode: 'KWD',
    totalExports: { min: 65, max: 85 },
    totalImports: { min: 35, max: 45 },
    topExportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 22, importShare: 18 },
      { country: 'الهند', countryEn: 'India', exportShare: 15, importShare: 8 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 12, importShare: 7 },
      { country: 'كوريا الجنوبية', countryEn: 'South Korea', exportShare: 10, importShare: 6 },
      { country: 'سنغافورة', countryEn: 'Singapore', exportShare: 6, importShare: 4 },
      { country: 'تايوان', countryEn: 'Taiwan', exportShare: 5, importShare: 2 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 22, importShare: 18 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 3, importShare: 12 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 3, importShare: 10 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 12, importShare: 7 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 1, importShare: 5 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 2, importShare: 5 },
    ],
    topExports: [
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 82, value: { min: 52, max: 70 } },
      { name: 'المنتجات البترولية', nameEn: 'Refined Petroleum', share: 8, value: { min: 5, max: 7 } },
      { name: 'البتروكيماويات', nameEn: 'Petrochemicals', share: 4, value: { min: 2.5, max: 3.5 } },
      { name: 'الأسمدة', nameEn: 'Fertilizers', share: 2, value: { min: 1.2, max: 1.8 } },
    ],
    topImports: [
      { name: 'السيارات', nameEn: 'Vehicles', share: 18, value: { min: 6, max: 8 } },
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 15, value: { min: 5, max: 7 } },
      { name: 'المواد الغذائية', nameEn: 'Food Products', share: 12, value: { min: 4, max: 5.5 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 10, value: { min: 3.3, max: 4.5 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 5, value: { min: 1.6, max: 2.3 } },
      { name: 'المجوهرات', nameEn: 'Jewelry', share: 4, value: { min: 1.3, max: 1.8 } },
    ],
    tradeGrowthRate: { min: 2, max: 8 },
  },
  {
    country: 'دولة قطر',
    countryEn: 'State of Qatar',
    countryCode: 'QA',
    currency: 'ريال قطري',
    currencyCode: 'QAR',
    totalExports: { min: 85, max: 110 },
    totalImports: { min: 30, max: 40 },
    topExportPartners: [
      { country: 'اليابان', countryEn: 'Japan', exportShare: 18, importShare: 8 },
      { country: 'كوريا الجنوبية', countryEn: 'South Korea', exportShare: 15, importShare: 5 },
      { country: 'الهند', countryEn: 'India', exportShare: 14, importShare: 10 },
      { country: 'الصين', countryEn: 'China', exportShare: 12, importShare: 15 },
      { country: 'سنغافورة', countryEn: 'Singapore', exportShare: 6, importShare: 4 },
      { country: 'المملكة المتحدة', countryEn: 'United Kingdom', exportShare: 5, importShare: 6 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 12, importShare: 15 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 4, importShare: 14 },
      { country: 'الهند', countryEn: 'India', exportShare: 14, importShare: 10 },
      { country: 'اليابان', countryEn: 'Japan', exportShare: 18, importShare: 8 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 2, importShare: 7 },
      { country: 'المملكة المتحدة', countryEn: 'United Kingdom', exportShare: 5, importShare: 6 },
    ],
    topExports: [
      { name: 'الغاز الطبيعي المسال', nameEn: 'LNG', share: 65, value: { min: 55, max: 72 } },
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 15, value: { min: 12, max: 16 } },
      { name: 'البتروكيماويات', nameEn: 'Petrochemicals', share: 8, value: { min: 6.5, max: 9 } },
      { name: 'الألمنيوم', nameEn: 'Aluminum', share: 3, value: { min: 2.5, max: 3.5 } },
      { name: 'الأسمدة', nameEn: 'Fertilizers', share: 3, value: { min: 2.5, max: 3.3 } },
    ],
    topImports: [
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 20, value: { min: 6, max: 8 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 12, value: { min: 3.5, max: 4.8 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 10, value: { min: 3, max: 4 } },
      { name: 'المواد الغذائية', nameEn: 'Food Products', share: 10, value: { min: 3, max: 4 } },
      { name: 'الحديد والصلب', nameEn: 'Iron & Steel', share: 8, value: { min: 2.4, max: 3.2 } },
      { name: 'الطائرات', nameEn: 'Aircraft', share: 6, value: { min: 1.8, max: 2.4 } },
    ],
    tradeGrowthRate: { min: 4, max: 12 },
  },
  {
    country: 'المملكة المغربية',
    countryEn: 'Kingdom of Morocco',
    countryCode: 'MA',
    currency: 'درهم مغربي',
    currencyCode: 'MAD',
    totalExports: { min: 35, max: 45 },
    totalImports: { min: 55, max: 70 },
    topExportPartners: [
      { country: 'إسبانيا', countryEn: 'Spain', exportShare: 24, importShare: 16 },
      { country: 'فرنسا', countryEn: 'France', exportShare: 20, importShare: 12 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 5, importShare: 6 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 5, importShare: 5 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 4, importShare: 5 },
      { country: 'الهند', countryEn: 'India', exportShare: 4, importShare: 3 },
    ],
    topImportPartners: [
      { country: 'إسبانيا', countryEn: 'Spain', exportShare: 24, importShare: 16 },
      { country: 'فرنسا', countryEn: 'France', exportShare: 20, importShare: 12 },
      { country: 'الصين', countryEn: 'China', exportShare: 2, importShare: 12 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 5, importShare: 6 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 4, importShare: 5 },
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 2, importShare: 5 },
    ],
    topExports: [
      { name: 'السيارات وقطع الغيار', nameEn: 'Vehicles & Parts', share: 22, value: { min: 7.5, max: 10 } },
      { name: 'الفوسفات والأسمدة', nameEn: 'Phosphates & Fertilizers', share: 18, value: { min: 6, max: 8 } },
      { name: 'المنسوجات والملابس', nameEn: 'Textiles & Clothing', share: 12, value: { min: 4, max: 5.5 } },
      { name: 'الأسماك والمأكولات البحرية', nameEn: 'Fish & Seafood', share: 8, value: { min: 2.7, max: 3.6 } },
      { name: 'الفواكه والخضروات', nameEn: 'Fruits & Vegetables', share: 7, value: { min: 2.4, max: 3.2 } },
      { name: 'الأسلاك الكهربائية', nameEn: 'Electrical Wiring', share: 6, value: { min: 2, max: 2.7 } },
    ],
    topImports: [
      { name: 'النفط الخام والمنتجات البترولية', nameEn: 'Crude Oil & Petroleum', share: 16, value: { min: 8.5, max: 11 } },
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 12, value: { min: 6.5, max: 8.5 } },
      { name: 'القمح والحبوب', nameEn: 'Wheat & Grains', share: 8, value: { min: 4.3, max: 5.6 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 7, value: { min: 3.7, max: 4.9 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 6, value: { min: 3.2, max: 4.2 } },
      { name: 'البلاستيك', nameEn: 'Plastics', share: 5, value: { min: 2.7, max: 3.5 } },
    ],
    tradeGrowthRate: { min: 2, max: 7 },
  },
  {
    country: 'المملكة الأردنية الهاشمية',
    countryEn: 'Hashemite Kingdom of Jordan',
    countryCode: 'JO',
    currency: 'دينار أردني',
    currencyCode: 'JOD',
    totalExports: { min: 8, max: 12 },
    totalImports: { min: 20, max: 26 },
    topExportPartners: [
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 22, importShare: 6 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 12, importShare: 14 },
      { country: 'الهند', countryEn: 'India', exportShare: 10, importShare: 5 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 8, importShare: 8 },
      { country: 'العراق', countryEn: 'Iraq', exportShare: 7, importShare: 3 },
      { country: 'الكويت', countryEn: 'Kuwait', exportShare: 5, importShare: 4 },
    ],
    topImportPartners: [
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 12, importShare: 14 },
      { country: 'الصين', countryEn: 'China', exportShare: 3, importShare: 14 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 8, importShare: 8 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 22, importShare: 6 },
      { country: 'ألمانيا', countryEn: 'Germany', exportShare: 2, importShare: 5 },
      { country: 'مصر', countryEn: 'Egypt', exportShare: 3, importShare: 5 },
    ],
    topExports: [
      { name: 'الملابس الجاهزة', nameEn: 'Apparel', share: 22, value: { min: 1.7, max: 2.6 } },
      { name: 'البوتاس والأسمدة', nameEn: 'Potash & Fertilizers', share: 15, value: { min: 1.2, max: 1.8 } },
      { name: 'الفوسفات', nameEn: 'Phosphates', share: 10, value: { min: 0.8, max: 1.2 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 10, value: { min: 0.8, max: 1.2 } },
      { name: 'الخضروات', nameEn: 'Vegetables', share: 8, value: { min: 0.6, max: 1 } },
      { name: 'المجوهرات', nameEn: 'Jewelry', share: 5, value: { min: 0.4, max: 0.6 } },
    ],
    topImports: [
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 18, value: { min: 3.5, max: 4.7 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 10, value: { min: 2, max: 2.6 } },
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 10, value: { min: 2, max: 2.6 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 8, value: { min: 1.6, max: 2.1 } },
      { name: 'القمح والحبوب', nameEn: 'Wheat & Grains', share: 6, value: { min: 1.2, max: 1.6 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 5, value: { min: 1, max: 1.3 } },
    ],
    tradeGrowthRate: { min: 1, max: 5 },
  },
  {
    country: 'الجمهورية اللبنانية',
    countryEn: 'Lebanese Republic',
    countryCode: 'LB',
    currency: 'ليرة لبنانية',
    currencyCode: 'LBP',
    totalExports: { min: 3, max: 5 },
    totalImports: { min: 12, max: 18 },
    topExportPartners: [
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 15, importShare: 6 },
      { country: 'سوريا', countryEn: 'Syria', exportShare: 10, importShare: 3 },
      { country: 'السعودية', countryEn: 'Saudi Arabia', exportShare: 8, importShare: 5 },
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 6, importShare: 8 },
      { country: 'مصر', countryEn: 'Egypt', exportShare: 5, importShare: 4 },
      { country: 'العراق', countryEn: 'Iraq', exportShare: 5, importShare: 2 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 2, importShare: 12 },
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 6, importShare: 8 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 3, importShare: 7 },
      { country: 'اليونان', countryEn: 'Greece', exportShare: 2, importShare: 6 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 15, importShare: 6 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 4, importShare: 5 },
    ],
    topExports: [
      { name: 'المجوهرات', nameEn: 'Jewelry', share: 25, value: { min: 0.7, max: 1.3 } },
      { name: 'الآلات الكهربائية', nameEn: 'Electrical Machinery', share: 12, value: { min: 0.35, max: 0.6 } },
      { name: 'المنتجات الغذائية', nameEn: 'Food Products', share: 10, value: { min: 0.3, max: 0.5 } },
      { name: 'الكيماويات', nameEn: 'Chemicals', share: 8, value: { min: 0.24, max: 0.4 } },
      { name: 'المعادن', nameEn: 'Metals', share: 7, value: { min: 0.21, max: 0.35 } },
    ],
    topImports: [
      { name: 'المنتجات البترولية', nameEn: 'Petroleum Products', share: 22, value: { min: 2.6, max: 4 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 10, value: { min: 1.2, max: 1.8 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 8, value: { min: 0.95, max: 1.4 } },
      { name: 'المواد الغذائية', nameEn: 'Food Products', share: 12, value: { min: 1.4, max: 2.2 } },
      { name: 'الآلات', nameEn: 'Machinery', share: 8, value: { min: 0.95, max: 1.4 } },
    ],
    tradeGrowthRate: { min: -10, max: 3 },
  },
  {
    country: 'جمهورية العراق',
    countryEn: 'Republic of Iraq',
    countryCode: 'IQ',
    currency: 'دينار عراقي',
    currencyCode: 'IQD',
    totalExports: { min: 85, max: 115 },
    totalImports: { min: 50, max: 65 },
    topExportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 28, importShare: 25 },
      { country: 'الهند', countryEn: 'India', exportShare: 22, importShare: 5 },
      { country: 'كوريا الجنوبية', countryEn: 'South Korea', exportShare: 10, importShare: 3 },
      { country: 'الولايات المتحدة', countryEn: 'United States', exportShare: 8, importShare: 5 },
      { country: 'إيطاليا', countryEn: 'Italy', exportShare: 6, importShare: 3 },
      { country: 'اليونان', countryEn: 'Greece', exportShare: 5, importShare: 2 },
    ],
    topImportPartners: [
      { country: 'الصين', countryEn: 'China', exportShare: 28, importShare: 25 },
      { country: 'تركيا', countryEn: 'Turkey', exportShare: 2, importShare: 22 },
      { country: 'الإمارات', countryEn: 'UAE', exportShare: 3, importShare: 8 },
      { country: 'الهند', countryEn: 'India', exportShare: 22, importShare: 5 },
      { country: 'كوريا الجنوبية', countryEn: 'South Korea', exportShare: 10, importShare: 4 },
      { country: 'الأردن', countryEn: 'Jordan', exportShare: 1, importShare: 3 },
    ],
    topExports: [
      { name: 'النفط الخام', nameEn: 'Crude Oil', share: 95, value: { min: 80, max: 109 } },
      { name: 'المنتجات البترولية', nameEn: 'Refined Petroleum', share: 2, value: { min: 1.7, max: 2.3 } },
      { name: 'الذهب', nameEn: 'Gold', share: 1, value: { min: 0.8, max: 1.2 } },
    ],
    topImports: [
      { name: 'الآلات والمعدات', nameEn: 'Machinery', share: 15, value: { min: 7.5, max: 9.8 } },
      { name: 'المواد الغذائية', nameEn: 'Food Products', share: 12, value: { min: 6, max: 7.8 } },
      { name: 'السيارات', nameEn: 'Vehicles', share: 10, value: { min: 5, max: 6.5 } },
      { name: 'الأجهزة الإلكترونية', nameEn: 'Electronics', share: 8, value: { min: 4, max: 5.2 } },
      { name: 'الأدوية', nameEn: 'Pharmaceuticals', share: 6, value: { min: 3, max: 3.9 } },
      { name: 'الحديد والصلب', nameEn: 'Iron & Steel', share: 8, value: { min: 4, max: 5.2 } },
    ],
    tradeGrowthRate: { min: 0, max: 10 },
  },
];

// دالة لتوليد بيانات الميزان التجاري الواقعية
export interface TradeBalanceRecord {
  country: string;
  countryEn: string;
  countryCode: string;
  year: number;
  quarter: string;
  month: string;
  monthNumber: number;
  
  // الصادرات
  totalExports: number;
  exportGrowth: number;
  topExportPartner: string;
  topExportPartnerShare: number;
  topExportProduct: string;
  topExportProductValue: number;
  topExportProductShare: number;
  
  // الواردات
  totalImports: number;
  importGrowth: number;
  topImportPartner: string;
  topImportPartnerShare: number;
  topImportProduct: string;
  topImportProductValue: number;
  topImportProductShare: number;
  
  // الميزان التجاري
  tradeBalance: number;
  tradeBalanceStatus: string;
  tradeBalanceStatusEn: string;
  
  // إجمالي التجارة
  totalTrade: number;
  tradeToGdpRatio: number;
  
  // العملة
  currency: string;
  currencyCode: string;
}

export const generateTradeBalanceData = (
  language: 'ar' | 'en',
  countryCode?: string
): TradeBalanceRecord => {
  // اختيار الدولة
  let countryData: CountryTradeData;
  if (countryCode && countryCode !== 'ALL') {
    countryData = tradeBalanceDatabase.find(c => c.countryCode === countryCode) || 
                  tradeBalanceDatabase[Math.floor(Math.random() * tradeBalanceDatabase.length)];
  } else {
    countryData = tradeBalanceDatabase[Math.floor(Math.random() * tradeBalanceDatabase.length)];
  }
  
  // توليد السنة والشهر
  const year = 2020 + Math.floor(Math.random() * 5); // 2020-2024
  const monthNumber = 1 + Math.floor(Math.random() * 12);
  const quarter = `Q${Math.ceil(monthNumber / 3)}`;
  
  const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
  const month = language === 'ar' ? monthsAr[monthNumber - 1] : monthsEn[monthNumber - 1];
  
  // حساب الصادرات الشهرية (إجمالي سنوي / 12 مع تباين)
  const annualExports = countryData.totalExports.min + 
                        Math.random() * (countryData.totalExports.max - countryData.totalExports.min);
  const monthlyExports = (annualExports / 12) * (0.85 + Math.random() * 0.3);
  
  // حساب الواردات الشهرية
  const annualImports = countryData.totalImports.min + 
                        Math.random() * (countryData.totalImports.max - countryData.totalImports.min);
  const monthlyImports = (annualImports / 12) * (0.85 + Math.random() * 0.3);
  
  // اختيار أهم شريك تجاري للصادرات
  const topExportPartner = countryData.topExportPartners[0];
  // اختيار أهم شريك تجاري للواردات
  const topImportPartner = countryData.topImportPartners[0];
  // اختيار أهم منتج للصادرات
  const topExportProduct = countryData.topExports[0];
  // اختيار أهم منتج للواردات
  const topImportProduct = countryData.topImports[0];
  
  // حساب الميزان التجاري
  const tradeBalance = monthlyExports - monthlyImports;
  
  // حالة الميزان التجاري
  let tradeBalanceStatus: string;
  let tradeBalanceStatusEn: string;
  if (tradeBalance > 0) {
    tradeBalanceStatus = 'فائض';
    tradeBalanceStatusEn = 'Surplus';
  } else if (tradeBalance < 0) {
    tradeBalanceStatus = 'عجز';
    tradeBalanceStatusEn = 'Deficit';
  } else {
    tradeBalanceStatus = 'متوازن';
    tradeBalanceStatusEn = 'Balanced';
  }
  
  // معدل النمو
  const exportGrowth = countryData.tradeGrowthRate.min + 
                       Math.random() * (countryData.tradeGrowthRate.max - countryData.tradeGrowthRate.min);
  const importGrowth = countryData.tradeGrowthRate.min + 
                       Math.random() * (countryData.tradeGrowthRate.max - countryData.tradeGrowthRate.min);
  
  // إجمالي التجارة
  const totalTrade = monthlyExports + monthlyImports;
  
  // نسبة التجارة إلى الناتج المحلي (تقديرية)
  const tradeToGdpRatio = 40 + Math.random() * 80; // 40-120%
  
  // قيمة أهم منتج مصدر
  const topExportProductValue = (monthlyExports * topExportProduct.share / 100);
  // قيمة أهم منتج مستورد
  const topImportProductValue = (monthlyImports * topImportProduct.share / 100);
  
  return {
    country: language === 'ar' ? countryData.country : countryData.countryEn,
    countryEn: countryData.countryEn,
    countryCode: countryData.countryCode,
    year,
    quarter,
    month,
    monthNumber,
    
    totalExports: Math.round(monthlyExports * 100) / 100,
    exportGrowth: Math.round(exportGrowth * 10) / 10,
    topExportPartner: language === 'ar' ? topExportPartner.country : topExportPartner.countryEn,
    topExportPartnerShare: topExportPartner.exportShare,
    topExportProduct: language === 'ar' ? topExportProduct.name : topExportProduct.nameEn,
    topExportProductValue: Math.round(topExportProductValue * 100) / 100,
    topExportProductShare: topExportProduct.share,
    
    totalImports: Math.round(monthlyImports * 100) / 100,
    importGrowth: Math.round(importGrowth * 10) / 10,
    topImportPartner: language === 'ar' ? topImportPartner.country : topImportPartner.countryEn,
    topImportPartnerShare: topImportPartner.importShare,
    topImportProduct: language === 'ar' ? topImportProduct.name : topImportProduct.nameEn,
    topImportProductValue: Math.round(topImportProductValue * 100) / 100,
    topImportProductShare: topImportProduct.share,
    
    tradeBalance: Math.round(tradeBalance * 100) / 100,
    tradeBalanceStatus: language === 'ar' ? tradeBalanceStatus : tradeBalanceStatusEn,
    tradeBalanceStatusEn,
    
    totalTrade: Math.round(totalTrade * 100) / 100,
    tradeToGdpRatio: Math.round(tradeToGdpRatio * 10) / 10,
    
    currency: countryData.currency,
    currencyCode: countryData.currencyCode,
  };
};

// دالة لتوليد سياق الميزان التجاري
export const generateTradeBalanceContext = (
  language: 'ar' | 'en',
  countryCode?: string
): TradeBalanceRecord => {
  return generateTradeBalanceData(language, countryCode);
};
