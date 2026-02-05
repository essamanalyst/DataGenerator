// قاعدة بيانات العقارات الحقيقية والمترابطة منطقياً

// أنواع العقارات مع خصائصها
export const propertyTypes = {
  apartment: {
    nameAr: 'شقة',
    nameEn: 'Apartment',
    minArea: 60,
    maxArea: 400,
    minRooms: 1,
    maxRooms: 6,
    minFloor: 1,
    maxFloor: 50,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [0, 1, 2],
  },
  villa: {
    nameAr: 'فيلا',
    nameEn: 'Villa',
    minArea: 250,
    maxArea: 2000,
    minRooms: 4,
    maxRooms: 12,
    minFloor: 1,
    maxFloor: 3,
    hasGarden: true,
    hasPool: true,
    parkingSpaces: [2, 3, 4, 5],
  },
  duplex: {
    nameAr: 'دوبلكس',
    nameEn: 'Duplex',
    minArea: 180,
    maxArea: 500,
    minRooms: 3,
    maxRooms: 7,
    minFloor: 1,
    maxFloor: 2,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [1, 2, 3],
  },
  penthouse: {
    nameAr: 'بنتهاوس',
    nameEn: 'Penthouse',
    minArea: 200,
    maxArea: 800,
    minRooms: 3,
    maxRooms: 6,
    minFloor: 10,
    maxFloor: 50,
    hasGarden: false,
    hasPool: true,
    parkingSpaces: [2, 3],
  },
  studio: {
    nameAr: 'استوديو',
    nameEn: 'Studio',
    minArea: 25,
    maxArea: 60,
    minRooms: 0,
    maxRooms: 1,
    minFloor: 1,
    maxFloor: 30,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [0, 1],
  },
  townhouse: {
    nameAr: 'تاون هاوس',
    nameEn: 'Townhouse',
    minArea: 150,
    maxArea: 400,
    minRooms: 3,
    maxRooms: 5,
    minFloor: 2,
    maxFloor: 3,
    hasGarden: true,
    hasPool: false,
    parkingSpaces: [1, 2],
  },
  land: {
    nameAr: 'أرض',
    nameEn: 'Land',
    minArea: 200,
    maxArea: 10000,
    minRooms: 0,
    maxRooms: 0,
    minFloor: 0,
    maxFloor: 0,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [0],
  },
  office: {
    nameAr: 'مكتب',
    nameEn: 'Office',
    minArea: 30,
    maxArea: 2000,
    minRooms: 1,
    maxRooms: 20,
    minFloor: 1,
    maxFloor: 50,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [0, 1, 2, 5, 10],
  },
  shop: {
    nameAr: 'محل تجاري',
    nameEn: 'Shop',
    minArea: 20,
    maxArea: 500,
    minRooms: 1,
    maxRooms: 3,
    minFloor: 0,
    maxFloor: 2,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [0, 1, 2],
  },
  warehouse: {
    nameAr: 'مستودع',
    nameEn: 'Warehouse',
    minArea: 100,
    maxArea: 10000,
    minRooms: 1,
    maxRooms: 5,
    minFloor: 0,
    maxFloor: 1,
    hasGarden: false,
    hasPool: false,
    parkingSpaces: [2, 5, 10, 20],
  },
};

// أسعار العقارات حسب الدولة والمدينة (سعر المتر المربع بالعملة المحلية)
export const realEstatePrices: Record<string, {
  currency: string;
  currencySymbol: string;
  cities: Record<string, {
    districts: Record<string, {
      pricePerSqm: { min: number; max: number };
      rentYield: number; // عائد الإيجار السنوي %
      tier: 'luxury' | 'premium' | 'standard' | 'economy';
    }>;
  }>;
}> = {
  SA: {
    currency: 'SAR',
    currencySymbol: 'ر.س',
    cities: {
      'الرياض': {
        districts: {
          'حي الملقا': { pricePerSqm: { min: 8000, max: 15000 }, rentYield: 5, tier: 'luxury' },
          'حي النخيل': { pricePerSqm: { min: 7000, max: 12000 }, rentYield: 5.5, tier: 'luxury' },
          'حي الياسمين': { pricePerSqm: { min: 6000, max: 10000 }, rentYield: 6, tier: 'premium' },
          'حي الربيع': { pricePerSqm: { min: 5000, max: 8000 }, rentYield: 6, tier: 'premium' },
          'حي العليا': { pricePerSqm: { min: 9000, max: 18000 }, rentYield: 4.5, tier: 'luxury' },
          'حي الورود': { pricePerSqm: { min: 4500, max: 7500 }, rentYield: 6.5, tier: 'standard' },
          'حي النرجس': { pricePerSqm: { min: 4000, max: 6500 }, rentYield: 7, tier: 'standard' },
          'حي الصحافة': { pricePerSqm: { min: 5500, max: 9000 }, rentYield: 5.5, tier: 'premium' },
          'حي الملك فهد': { pricePerSqm: { min: 6500, max: 11000 }, rentYield: 5, tier: 'premium' },
          'حي الروضة': { pricePerSqm: { min: 3500, max: 6000 }, rentYield: 7, tier: 'standard' },
        }
      },
      'جدة': {
        districts: {
          'حي الحمراء': { pricePerSqm: { min: 7000, max: 14000 }, rentYield: 5, tier: 'luxury' },
          'حي الروضة': { pricePerSqm: { min: 6000, max: 10000 }, rentYield: 5.5, tier: 'premium' },
          'حي الشاطئ': { pricePerSqm: { min: 8000, max: 16000 }, rentYield: 4.5, tier: 'luxury' },
          'حي الأندلس': { pricePerSqm: { min: 5000, max: 8500 }, rentYield: 6, tier: 'premium' },
          'حي النعيم': { pricePerSqm: { min: 4500, max: 7500 }, rentYield: 6.5, tier: 'standard' },
          'حي البساتين': { pricePerSqm: { min: 4000, max: 6500 }, rentYield: 7, tier: 'standard' },
          'حي السلامة': { pricePerSqm: { min: 5500, max: 9500 }, rentYield: 5.5, tier: 'premium' },
          'حي أبحر الشمالية': { pricePerSqm: { min: 6500, max: 12000 }, rentYield: 5, tier: 'luxury' },
        }
      },
      'الدمام': {
        districts: {
          'حي الفيصلية': { pricePerSqm: { min: 4500, max: 8000 }, rentYield: 6, tier: 'premium' },
          'حي الشاطئ': { pricePerSqm: { min: 5000, max: 9000 }, rentYield: 5.5, tier: 'premium' },
          'حي النور': { pricePerSqm: { min: 3500, max: 6000 }, rentYield: 7, tier: 'standard' },
          'حي المزروعية': { pricePerSqm: { min: 3000, max: 5000 }, rentYield: 7.5, tier: 'standard' },
          'حي الجلوية': { pricePerSqm: { min: 4000, max: 7000 }, rentYield: 6.5, tier: 'standard' },
        }
      },
      'مكة المكرمة': {
        districts: {
          'العزيزية': { pricePerSqm: { min: 8000, max: 20000 }, rentYield: 6, tier: 'luxury' },
          'الشوقية': { pricePerSqm: { min: 6000, max: 12000 }, rentYield: 6.5, tier: 'premium' },
          'النسيم': { pricePerSqm: { min: 4500, max: 8000 }, rentYield: 7, tier: 'standard' },
          'الرصيفة': { pricePerSqm: { min: 5000, max: 10000 }, rentYield: 6.5, tier: 'premium' },
        }
      },
    }
  },
  AE: {
    currency: 'AED',
    currencySymbol: 'د.إ',
    cities: {
      'دبي': {
        districts: {
          'داون تاون دبي': { pricePerSqm: { min: 18000, max: 35000 }, rentYield: 5, tier: 'luxury' },
          'نخلة جميرا': { pricePerSqm: { min: 20000, max: 45000 }, rentYield: 4, tier: 'luxury' },
          'دبي مارينا': { pricePerSqm: { min: 14000, max: 25000 }, rentYield: 5.5, tier: 'luxury' },
          'جميرا بيتش ريزيدنس': { pricePerSqm: { min: 15000, max: 28000 }, rentYield: 5, tier: 'luxury' },
          'الخليج التجاري': { pricePerSqm: { min: 12000, max: 20000 }, rentYield: 6, tier: 'premium' },
          'قرية جميرا الدائرية': { pricePerSqm: { min: 8000, max: 12000 }, rentYield: 7, tier: 'standard' },
          'دبي لاند': { pricePerSqm: { min: 6000, max: 10000 }, rentYield: 7.5, tier: 'standard' },
          'ديسكفري جاردنز': { pricePerSqm: { min: 5000, max: 8000 }, rentYield: 8, tier: 'economy' },
          'المرابع العربية': { pricePerSqm: { min: 10000, max: 18000 }, rentYield: 5.5, tier: 'premium' },
          'دبي هيلز': { pricePerSqm: { min: 12000, max: 22000 }, rentYield: 5, tier: 'luxury' },
        }
      },
      'أبوظبي': {
        districts: {
          'جزيرة السعديات': { pricePerSqm: { min: 15000, max: 30000 }, rentYield: 4.5, tier: 'luxury' },
          'جزيرة الريم': { pricePerSqm: { min: 10000, max: 18000 }, rentYield: 5.5, tier: 'premium' },
          'شاطئ الراحة': { pricePerSqm: { min: 12000, max: 22000 }, rentYield: 5, tier: 'luxury' },
          'جزيرة ياس': { pricePerSqm: { min: 11000, max: 20000 }, rentYield: 5.5, tier: 'premium' },
          'الخالدية': { pricePerSqm: { min: 8000, max: 14000 }, rentYield: 6, tier: 'premium' },
          'المرور': { pricePerSqm: { min: 6000, max: 10000 }, rentYield: 7, tier: 'standard' },
        }
      },
      'الشارقة': {
        districts: {
          'النهدة': { pricePerSqm: { min: 4000, max: 7000 }, rentYield: 7, tier: 'standard' },
          'المجاز': { pricePerSqm: { min: 5000, max: 9000 }, rentYield: 6.5, tier: 'premium' },
          'القاسمية': { pricePerSqm: { min: 3500, max: 6000 }, rentYield: 8, tier: 'economy' },
          'الخان': { pricePerSqm: { min: 6000, max: 10000 }, rentYield: 6, tier: 'premium' },
        }
      },
    }
  },
  EG: {
    currency: 'EGP',
    currencySymbol: 'ج.م',
    cities: {
      'القاهرة': {
        districts: {
          'التجمع الخامس': { pricePerSqm: { min: 25000, max: 80000 }, rentYield: 4, tier: 'luxury' },
          'مدينتي': { pricePerSqm: { min: 20000, max: 50000 }, rentYield: 4.5, tier: 'premium' },
          'الرحاب': { pricePerSqm: { min: 18000, max: 40000 }, rentYield: 5, tier: 'premium' },
          'مصر الجديدة': { pricePerSqm: { min: 22000, max: 55000 }, rentYield: 4.5, tier: 'premium' },
          'المعادي': { pricePerSqm: { min: 20000, max: 50000 }, rentYield: 5, tier: 'premium' },
          'الزمالك': { pricePerSqm: { min: 40000, max: 120000 }, rentYield: 3, tier: 'luxury' },
          'جاردن سيتي': { pricePerSqm: { min: 35000, max: 100000 }, rentYield: 3.5, tier: 'luxury' },
          'الشيخ زايد': { pricePerSqm: { min: 15000, max: 45000 }, rentYield: 5, tier: 'premium' },
          '6 أكتوبر': { pricePerSqm: { min: 10000, max: 30000 }, rentYield: 6, tier: 'standard' },
          'العاصمة الإدارية': { pricePerSqm: { min: 18000, max: 60000 }, rentYield: 4.5, tier: 'luxury' },
        }
      },
      'الإسكندرية': {
        districts: {
          'سان ستيفانو': { pricePerSqm: { min: 30000, max: 70000 }, rentYield: 4, tier: 'luxury' },
          'رشدي': { pricePerSqm: { min: 20000, max: 45000 }, rentYield: 5, tier: 'premium' },
          'سموحة': { pricePerSqm: { min: 18000, max: 40000 }, rentYield: 5.5, tier: 'premium' },
          'جليم': { pricePerSqm: { min: 25000, max: 55000 }, rentYield: 4.5, tier: 'luxury' },
          'العجمي': { pricePerSqm: { min: 8000, max: 18000 }, rentYield: 7, tier: 'standard' },
        }
      },
    }
  },
  JO: {
    currency: 'JOD',
    currencySymbol: 'د.أ',
    cities: {
      'عمان': {
        districts: {
          'عبدون': { pricePerSqm: { min: 1200, max: 3000 }, rentYield: 5, tier: 'luxury' },
          'الشميساني': { pricePerSqm: { min: 800, max: 1800 }, rentYield: 6, tier: 'premium' },
          'الصويفية': { pricePerSqm: { min: 900, max: 2000 }, rentYield: 5.5, tier: 'premium' },
          'دير غبار': { pricePerSqm: { min: 1000, max: 2500 }, rentYield: 5, tier: 'luxury' },
          'خلدا': { pricePerSqm: { min: 700, max: 1500 }, rentYield: 6.5, tier: 'premium' },
          'الجبيهة': { pricePerSqm: { min: 500, max: 1000 }, rentYield: 7, tier: 'standard' },
          'طبربور': { pricePerSqm: { min: 350, max: 700 }, rentYield: 8, tier: 'economy' },
        }
      },
    }
  },
  KW: {
    currency: 'KWD',
    currencySymbol: 'د.ك',
    cities: {
      'الكويت': {
        districts: {
          'السالمية': { pricePerSqm: { min: 1500, max: 3500 }, rentYield: 6, tier: 'premium' },
          'حولي': { pricePerSqm: { min: 1200, max: 2500 }, rentYield: 7, tier: 'standard' },
          'الشعب': { pricePerSqm: { min: 2000, max: 4500 }, rentYield: 5, tier: 'luxury' },
          'السرة': { pricePerSqm: { min: 2500, max: 5000 }, rentYield: 5, tier: 'luxury' },
          'الجابرية': { pricePerSqm: { min: 1800, max: 3500 }, rentYield: 6, tier: 'premium' },
          'الفحيحيل': { pricePerSqm: { min: 800, max: 1800 }, rentYield: 8, tier: 'standard' },
        }
      },
    }
  },
  QA: {
    currency: 'QAR',
    currencySymbol: 'ر.ق',
    cities: {
      'الدوحة': {
        districts: {
          'اللؤلؤة': { pricePerSqm: { min: 12000, max: 25000 }, rentYield: 5, tier: 'luxury' },
          'الخليج الغربي': { pricePerSqm: { min: 15000, max: 30000 }, rentYield: 4.5, tier: 'luxury' },
          'لوسيل': { pricePerSqm: { min: 10000, max: 20000 }, rentYield: 5.5, tier: 'premium' },
          'الوكرة': { pricePerSqm: { min: 6000, max: 12000 }, rentYield: 7, tier: 'standard' },
          'الريان': { pricePerSqm: { min: 7000, max: 14000 }, rentYield: 6.5, tier: 'premium' },
        }
      },
    }
  },
  BH: {
    currency: 'BHD',
    currencySymbol: 'د.ب',
    cities: {
      'المنامة': {
        districts: {
          'السيف': { pricePerSqm: { min: 800, max: 1800 }, rentYield: 6, tier: 'premium' },
          'الجفير': { pricePerSqm: { min: 700, max: 1500 }, rentYield: 6.5, tier: 'premium' },
          'أمواج': { pricePerSqm: { min: 900, max: 2000 }, rentYield: 5.5, tier: 'luxury' },
          'ديار المحرق': { pricePerSqm: { min: 600, max: 1200 }, rentYield: 7, tier: 'standard' },
        }
      },
    }
  },
  OM: {
    currency: 'OMR',
    currencySymbol: 'ر.ع',
    cities: {
      'مسقط': {
        districts: {
          'الموج': { pricePerSqm: { min: 800, max: 1800 }, rentYield: 5, tier: 'luxury' },
          'القرم': { pricePerSqm: { min: 600, max: 1200 }, rentYield: 6, tier: 'premium' },
          'الخوير': { pricePerSqm: { min: 450, max: 900 }, rentYield: 7, tier: 'standard' },
          'بوشر': { pricePerSqm: { min: 350, max: 700 }, rentYield: 7.5, tier: 'standard' },
        }
      },
    }
  },
  MA: {
    currency: 'MAD',
    currencySymbol: 'د.م',
    cities: {
      'الدار البيضاء': {
        districts: {
          'أنفا': { pricePerSqm: { min: 25000, max: 60000 }, rentYield: 4, tier: 'luxury' },
          'المعاريف': { pricePerSqm: { min: 18000, max: 40000 }, rentYield: 5, tier: 'premium' },
          'الحي المحمدي': { pricePerSqm: { min: 8000, max: 18000 }, rentYield: 7, tier: 'standard' },
          'عين الذئاب': { pricePerSqm: { min: 20000, max: 50000 }, rentYield: 4.5, tier: 'luxury' },
        }
      },
      'مراكش': {
        districts: {
          'جليز': { pricePerSqm: { min: 20000, max: 50000 }, rentYield: 5, tier: 'luxury' },
          'حي الداوديات': { pricePerSqm: { min: 15000, max: 35000 }, rentYield: 6, tier: 'premium' },
          'المنارة': { pricePerSqm: { min: 10000, max: 25000 }, rentYield: 6.5, tier: 'standard' },
        }
      },
    }
  },
};

// حالات العقار
export const propertyConditions = [
  { id: 'new', nameAr: 'جديد', nameEn: 'New', ageRange: [0, 1], priceMultiplier: 1.15 },
  { id: 'excellent', nameAr: 'ممتاز', nameEn: 'Excellent', ageRange: [0, 5], priceMultiplier: 1.05 },
  { id: 'very_good', nameAr: 'جيد جداً', nameEn: 'Very Good', ageRange: [3, 10], priceMultiplier: 1.0 },
  { id: 'good', nameAr: 'جيد', nameEn: 'Good', ageRange: [5, 20], priceMultiplier: 0.9 },
  { id: 'fair', nameAr: 'مقبول', nameEn: 'Fair', ageRange: [15, 35], priceMultiplier: 0.75 },
  { id: 'needs_renovation', nameAr: 'يحتاج تجديد', nameEn: 'Needs Renovation', ageRange: [20, 50], priceMultiplier: 0.6 },
];

// التشطيبات
export const finishingTypes = [
  { id: 'super_lux', nameAr: 'سوبر لوكس', nameEn: 'Super Lux', priceMultiplier: 1.3, minTier: 'luxury' },
  { id: 'lux', nameAr: 'لوكس', nameEn: 'Lux', priceMultiplier: 1.15, minTier: 'premium' },
  { id: 'semi_finished', nameAr: 'نصف تشطيب', nameEn: 'Semi-Finished', priceMultiplier: 0.85, minTier: 'economy' },
  { id: 'without_finishing', nameAr: 'بدون تشطيب', nameEn: 'Without Finishing', priceMultiplier: 0.7, minTier: 'economy' },
  { id: 'fully_furnished', nameAr: 'مفروش بالكامل', nameEn: 'Fully Furnished', priceMultiplier: 1.4, minTier: 'premium' },
];

// الإطلالات
export const viewTypes = [
  { id: 'sea', nameAr: 'إطلالة بحرية', nameEn: 'Sea View', priceMultiplier: 1.25 },
  { id: 'garden', nameAr: 'إطلالة حديقة', nameEn: 'Garden View', priceMultiplier: 1.1 },
  { id: 'city', nameAr: 'إطلالة مدينة', nameEn: 'City View', priceMultiplier: 1.05 },
  { id: 'pool', nameAr: 'إطلالة مسبح', nameEn: 'Pool View', priceMultiplier: 1.08 },
  { id: 'street', nameAr: 'إطلالة شارع', nameEn: 'Street View', priceMultiplier: 1.0 },
  { id: 'internal', nameAr: 'إطلالة داخلية', nameEn: 'Internal View', priceMultiplier: 0.95 },
];

// المرافق
export const amenities = {
  building: [
    { nameAr: 'مصعد', nameEn: 'Elevator' },
    { nameAr: 'أمن 24 ساعة', nameEn: '24/7 Security' },
    { nameAr: 'موقف سيارات', nameEn: 'Parking' },
    { nameAr: 'صالة رياضية', nameEn: 'Gym' },
    { nameAr: 'مسبح مشترك', nameEn: 'Shared Pool' },
    { nameAr: 'حديقة مشتركة', nameEn: 'Shared Garden' },
    { nameAr: 'خدمات استقبال', nameEn: 'Concierge' },
    { nameAr: 'غرفة اجتماعات', nameEn: 'Meeting Room' },
  ],
  unit: [
    { nameAr: 'تكييف مركزي', nameEn: 'Central AC' },
    { nameAr: 'شرفة', nameEn: 'Balcony' },
    { nameAr: 'غرفة خادمة', nameEn: 'Maid Room' },
    { nameAr: 'غرفة غسيل', nameEn: 'Laundry Room' },
    { nameAr: 'مطبخ مجهز', nameEn: 'Equipped Kitchen' },
    { nameAr: 'خزائن حائط', nameEn: 'Built-in Wardrobes' },
    { nameAr: 'جاكوزي', nameEn: 'Jacuzzi' },
    { nameAr: 'تراس', nameEn: 'Terrace' },
  ],
};

// أغراض العقار
export const propertyPurposes = [
  { id: 'sale', nameAr: 'للبيع', nameEn: 'For Sale' },
  { id: 'rent', nameAr: 'للإيجار', nameEn: 'For Rent' },
  { id: 'rent_to_own', nameAr: 'إيجار منتهي بالتمليك', nameEn: 'Rent to Own' },
];

// الوكالات العقارية
export const realEstateAgencies: Record<string, string[]> = {
  SA: ['دار الأركان', 'جبل عمر', 'إعمار السعودية', 'رافال', 'سدكو', 'طيبة القابضة', 'مكين العقارية', 'الصفا العقارية'],
  AE: ['إعمار', 'داماك', 'نخيل', 'الدار', 'مراس', 'ديار', 'أرادَ', 'شوبا', 'عزيزي', 'دانوب'],
  EG: ['طلعت مصطفى', 'بالم هيلز', 'سوديك', 'إعمار مصر', 'مدينة نصر للإسكان', 'المقاولون العرب', 'حسن علام', 'أورا'],
  JO: ['سرايا القابضة', 'عبدالي للتطوير', 'العقارية الأردنية', 'دار السلام'],
  KW: ['المزايا القابضة', 'الوطنية العقارية', 'عقارات الكويت', 'تمدين'],
  QA: ['الديار القطرية', 'بروة', 'مشيرب', 'لوسيل'],
  BH: ['ديار المحرق', 'إيجل هيلز', 'أملاك'],
  OM: ['الموج مسقط', 'المجموعة العمانية', 'خليج عمان'],
  MA: ['العمران', 'إعمار المغرب', 'يناء القابضة'],
};

// دالة توليد سياق عقاري متكامل
export function generateRealEstateContext(
  countryCode: string,
  language: 'ar' | 'en' = 'ar'
): Record<string, any> {
  const countryData = realEstatePrices[countryCode] || realEstatePrices['SA'];
  const cities = Object.keys(countryData.cities);
  const city = cities[Math.floor(Math.random() * cities.length)];
  const districts = Object.keys(countryData.cities[city].districts);
  const district = districts[Math.floor(Math.random() * districts.length)];
  const districtData = countryData.cities[city].districts[district];
  
  // اختيار نوع العقار
  const propertyTypeKeys = Object.keys(propertyTypes);
  const propertyTypeKey = propertyTypeKeys[Math.floor(Math.random() * propertyTypeKeys.length)];
  const propertyType = propertyTypes[propertyTypeKey as keyof typeof propertyTypes];
  
  // حساب المساحة
  const area = Math.floor(Math.random() * (propertyType.maxArea - propertyType.minArea + 1)) + propertyType.minArea;
  
  // حساب عدد الغرف بناءً على المساحة ونوع العقار
  let bedrooms = 0;
  if (propertyType.maxRooms > 0) {
    const roomsPerArea = area / 50; // غرفة لكل 50 متر تقريباً
    bedrooms = Math.min(
      Math.max(propertyType.minRooms, Math.floor(roomsPerArea)),
      propertyType.maxRooms
    );
  }
  
  // حساب عدد الحمامات (عادة غرف النوم + 1 أو نصف الغرف + 1)
  const bathrooms = Math.max(1, Math.min(bedrooms + 1, Math.floor(bedrooms * 0.7) + 1));
  
  // حساب سعر المتر
  const pricePerSqm = Math.floor(
    Math.random() * (districtData.pricePerSqm.max - districtData.pricePerSqm.min + 1)
  ) + districtData.pricePerSqm.min;
  
  // اختيار الحالة والتشطيب والإطلالة
  const condition = propertyConditions[Math.floor(Math.random() * propertyConditions.length)];
  const finishing = finishingTypes[Math.floor(Math.random() * finishingTypes.length)];
  const view = viewTypes[Math.floor(Math.random() * viewTypes.length)];
  
  // عمر البناء
  const buildingAge = Math.floor(Math.random() * (condition.ageRange[1] - condition.ageRange[0] + 1)) + condition.ageRange[0];
  const buildYear = new Date().getFullYear() - buildingAge;
  
  // حساب السعر الإجمالي
  const basePrice = area * pricePerSqm;
  const adjustedPrice = Math.round(basePrice * condition.priceMultiplier * finishing.priceMultiplier * view.priceMultiplier);
  
  // تقريب السعر لأقرب ألف
  const roundedPrice = Math.round(adjustedPrice / 1000) * 1000;
  
  // حساب الإيجار السنوي
  const annualRent = Math.round((roundedPrice * districtData.rentYield) / 100);
  const monthlyRent = Math.round(annualRent / 12);
  
  // تقريب الإيجار
  const roundedMonthlyRent = Math.round(monthlyRent / 100) * 100;
  const roundedAnnualRent = roundedMonthlyRent * 12;
  
  // الطابق
  let floor = 0;
  if (propertyType.maxFloor > 0) {
    floor = Math.floor(Math.random() * (propertyType.maxFloor - propertyType.minFloor + 1)) + propertyType.minFloor;
  }
  
  // مواقف السيارات
  const parking = propertyType.parkingSpaces[Math.floor(Math.random() * propertyType.parkingSpaces.length)];
  
  // الغرض (بيع أو إيجار)
  const purpose = propertyPurposes[Math.floor(Math.random() * propertyPurposes.length)];
  
  // الوكالة العقارية
  const agencies = realEstateAgencies[countryCode] || realEstateAgencies['SA'];
  const agency = agencies[Math.floor(Math.random() * agencies.length)];
  
  // المرافق
  const selectedBuildingAmenities = amenities.building
    .filter(() => Math.random() > 0.5)
    .slice(0, Math.floor(Math.random() * 4) + 2);
  const selectedUnitAmenities = amenities.unit
    .filter(() => Math.random() > 0.5)
    .slice(0, Math.floor(Math.random() * 4) + 2);
  
  // معرف العقار
  const propertyId = `${countryCode}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  
  // رقم الوحدة
  const unitNumber = `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 999) + 1}`;
  
  return {
    // معلومات العقار
    propertyId,
    propertyType: language === 'ar' ? propertyType.nameAr : propertyType.nameEn,
    propertyTypeKey,
    
    // الموقع
    country: countryCode,
    city,
    district,
    fullAddress: language === 'ar' 
      ? `${district}، ${city}` 
      : `${district}, ${city}`,
    
    // المساحة والغرف
    area,
    areaUnit: language === 'ar' ? 'م²' : 'sqm',
    bedrooms,
    bathrooms,
    floor,
    totalFloors: propertyType.maxFloor,
    unitNumber,
    
    // الأسعار
    pricePerSqm,
    totalPrice: roundedPrice,
    priceFormatted: `${roundedPrice.toLocaleString()} ${countryData.currencySymbol}`,
    monthlyRent: roundedMonthlyRent,
    annualRent: roundedAnnualRent,
    rentFormatted: `${roundedMonthlyRent.toLocaleString()} ${countryData.currencySymbol}`,
    annualRentFormatted: `${roundedAnnualRent.toLocaleString()} ${countryData.currencySymbol}`,
    rentYield: districtData.rentYield,
    currency: countryData.currency,
    currencySymbol: countryData.currencySymbol,
    
    // الحالة والتشطيب
    condition: language === 'ar' ? condition.nameAr : condition.nameEn,
    finishing: language === 'ar' ? finishing.nameAr : finishing.nameEn,
    view: language === 'ar' ? view.nameAr : view.nameEn,
    buildYear,
    buildingAge,
    
    // المرافق
    parking,
    hasGarden: propertyType.hasGarden,
    hasPool: propertyType.hasPool,
    buildingAmenities: selectedBuildingAmenities.map(a => language === 'ar' ? a.nameAr : a.nameEn),
    unitAmenities: selectedUnitAmenities.map(a => language === 'ar' ? a.nameAr : a.nameEn),
    
    // الغرض والوكالة
    purpose: language === 'ar' ? purpose.nameAr : purpose.nameEn,
    purposeId: purpose.id,
    agency,
    
    // التصنيف
    tier: districtData.tier,
    tierLabel: language === 'ar' 
      ? { luxury: 'فاخر', premium: 'مميز', standard: 'قياسي', economy: 'اقتصادي' }[districtData.tier]
      : districtData.tier.charAt(0).toUpperCase() + districtData.tier.slice(1),
  };
}

// دالة لتوليد عقد إيجار
export function generateLeaseContract(
  realEstateContext: Record<string, any>,
  language: 'ar' | 'en' = 'ar'
): Record<string, any> {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth() + Math.floor(Math.random() * 3), 1);
  const durationMonths = [6, 12, 24, 36][Math.floor(Math.random() * 4)];
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + durationMonths);
  
  const contractNumber = `LC-${startDate.getFullYear()}-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
  
  const securityDeposit = realEstateContext.monthlyRent * 2;
  const totalContractValue = realEstateContext.monthlyRent * durationMonths;
  
  return {
    contractNumber,
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
    durationMonths,
    monthlyRent: realEstateContext.monthlyRent,
    annualRent: realEstateContext.annualRent,
    securityDeposit,
    totalContractValue,
    paymentFrequency: language === 'ar' ? 'شهري' : 'Monthly',
    ...realEstateContext,
  };
}
