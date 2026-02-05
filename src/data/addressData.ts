// قاعدة بيانات العناوين المرتبطة بالمدن

export interface CityAddress {
  city: string;
  cityEn: string;
  districts: string[];
  districtsEn: string[];
  streets: string[];
  streetsEn: string[];
  landmarks: string[];
  landmarksEn: string[];
  postalCodePrefix: string;
}

// العناوين حسب الدولة والمدينة
export const addressDatabase: Record<string, CityAddress[]> = {
  SA: [
    {
      city: 'الرياض',
      cityEn: 'Riyadh',
      districts: ['العليا', 'الملقا', 'النخيل', 'الياسمين', 'الروضة', 'السليمانية', 'الورود', 'العزيزية', 'الملز', 'النزهة', 'المرسلات', 'الربوة', 'حطين', 'الصحافة', 'الغدير'],
      districtsEn: ['Al Olaya', 'Al Malqa', 'Al Nakheel', 'Al Yasmin', 'Al Rawdah', 'Al Sulaymaniyah', 'Al Wurud', 'Al Aziziyah', 'Al Malaz', 'Al Nuzha', 'Al Mursalat', 'Al Rabwah', 'Hittin', 'Al Sahafah', 'Al Ghadir'],
      streets: ['طريق الملك فهد', 'طريق الملك عبدالله', 'شارع العليا', 'شارع التحلية', 'طريق خريص', 'شارع الأمير سلطان', 'طريق الدائري الشرقي', 'طريق الثمامة', 'شارع الضباب'],
      streetsEn: ['King Fahd Road', 'King Abdullah Road', 'Olaya Street', 'Tahlia Street', 'Khurais Road', 'Prince Sultan Street', 'Eastern Ring Road', 'Thumamah Road', 'Al Dhabbab Street'],
      landmarks: ['برج المملكة', 'برج الفيصلية', 'مركز غرناطة', 'حياة مول', 'الرياض بارك'],
      landmarksEn: ['Kingdom Tower', 'Al Faisaliah Tower', 'Granada Center', 'Hayat Mall', 'Riyadh Park'],
      postalCodePrefix: '11'
    },
    {
      city: 'جدة',
      cityEn: 'Jeddah',
      districts: ['الحمراء', 'الروضة', 'الزهراء', 'السلامة', 'الشاطئ', 'المحمدية', 'الأندلس', 'النزهة', 'البلد', 'الفيصلية', 'السامر', 'المروة', 'الخالدية'],
      districtsEn: ['Al Hamra', 'Al Rawdah', 'Al Zahra', 'Al Salamah', 'Al Shati', 'Al Muhammadiyah', 'Al Andalus', 'Al Nuzha', 'Al Balad', 'Al Faysaliyah', 'Al Samer', 'Al Marwah', 'Al Khalidiyah'],
      streets: ['شارع فلسطين', 'شارع التحلية', 'شارع الأمير سلطان', 'طريق المدينة', 'طريق الملك عبدالعزيز', 'شارع حراء', 'شارع الستين'],
      streetsEn: ['Palestine Street', 'Tahlia Street', 'Prince Sultan Street', 'Madinah Road', 'King Abdulaziz Road', 'Hera Street', 'Sitten Street'],
      landmarks: ['رد سي مول', 'جدة مول', 'مركز الأندلس', 'كورنيش جدة', 'نافورة الملك فهد'],
      landmarksEn: ['Red Sea Mall', 'Jeddah Mall', 'Andalus Mall', 'Jeddah Corniche', 'King Fahd Fountain'],
      postalCodePrefix: '21'
    },
    {
      city: 'الدمام',
      cityEn: 'Dammam',
      districts: ['الفيصلية', 'الشاطئ', 'العزيزية', 'الجلوية', 'المزروعية', 'الأنوار', 'غرناطة', 'العدامة', 'الريان'],
      districtsEn: ['Al Faisaliyah', 'Al Shati', 'Al Aziziyah', 'Al Jalawiyah', 'Al Mazrouiyah', 'Al Anwar', 'Granada', 'Al Adamah', 'Al Rayyan'],
      streets: ['طريق الملك فهد', 'شارع الأمير محمد بن فهد', 'طريق الظهران', 'شارع الخليج', 'شارع الملك سعود'],
      streetsEn: ['King Fahd Road', 'Prince Mohammed Bin Fahd Street', 'Dhahran Road', 'Gulf Street', 'King Saud Street'],
      landmarks: ['مجمع الظهران', 'مجمع العثيم', 'كورنيش الدمام', 'مركز الرايمون'],
      landmarksEn: ['Dhahran Mall', 'Al Othaim Mall', 'Dammam Corniche', 'Raymon Center'],
      postalCodePrefix: '31'
    },
    {
      city: 'مكة المكرمة',
      cityEn: 'Makkah',
      districts: ['العزيزية', 'الشوقية', 'النسيم', 'الرصيفة', 'الكعكية', 'العوالي', 'الحجون', 'المسفلة'],
      districtsEn: ['Al Aziziyah', 'Al Shawqiyah', 'Al Naseem', 'Al Rusayfah', 'Al Kakiyah', 'Al Awali', 'Al Hajoun', 'Al Misfalah'],
      streets: ['طريق المسجد الحرام', 'شارع إبراهيم الخليل', 'شارع العزيزية', 'طريق الملك عبدالعزيز'],
      streetsEn: ['Masjid Al Haram Road', 'Ibrahim Al Khalil Street', 'Aziziyah Street', 'King Abdulaziz Road'],
      landmarks: ['المسجد الحرام', 'أبراج البيت', 'مكة مول'],
      landmarksEn: ['Masjid Al Haram', 'Abraj Al Bait', 'Makkah Mall'],
      postalCodePrefix: '24'
    }
  ],
  EG: [
    {
      city: 'القاهرة',
      cityEn: 'Cairo',
      districts: ['مصر الجديدة', 'المعادي', 'الزمالك', 'المهندسين', 'الدقي', 'مدينة نصر', 'التجمع الخامس', 'الشروق', 'العبور', '6 أكتوبر', 'الشيخ زايد'],
      districtsEn: ['Heliopolis', 'Maadi', 'Zamalek', 'Mohandessin', 'Dokki', 'Nasr City', 'Fifth Settlement', 'El Shorouk', 'El Obour', '6th of October', 'Sheikh Zayed'],
      streets: ['شارع 26 يوليو', 'شارع الهرم', 'شارع الجامعة', 'شارع التحرير', 'كورنيش النيل', 'شارع شهاب', 'محور المشير', 'طريق النصر'],
      streetsEn: ['26th of July Street', 'Haram Street', 'University Street', 'Tahrir Street', 'Nile Corniche', 'Shehab Street', 'Al Mushir Axis', 'Nasr Road'],
      landmarks: ['سيتي ستارز', 'كايرو فيستيفال', 'المتحف المصري', 'برج القاهرة'],
      landmarksEn: ['City Stars', 'Cairo Festival City', 'Egyptian Museum', 'Cairo Tower'],
      postalCodePrefix: '11'
    },
    {
      city: 'الإسكندرية',
      cityEn: 'Alexandria',
      districts: ['سموحة', 'ستانلي', 'جليم', 'سيدي جابر', 'المنتزه', 'رشدي', 'كامب شيزار', 'محرم بك', 'العجمي', 'المندرة'],
      districtsEn: ['Smouha', 'Stanley', 'Gleem', 'Sidi Gaber', 'Montazah', 'Roushdy', 'Camp Chezar', 'Moharam Bek', 'Agami', 'El Mandara'],
      streets: ['كورنيش الإسكندرية', 'طريق الحرية', 'شارع أبو قير', 'شارع سعد زغلول', 'طريق الجيش'],
      streetsEn: ['Alexandria Corniche', 'Horreya Road', 'Abu Qir Street', 'Saad Zaghloul Street', 'Army Road'],
      landmarks: ['مكتبة الإسكندرية', 'قلعة قايتباي', 'سان ستيفانو'],
      landmarksEn: ['Bibliotheca Alexandrina', 'Qaitbay Citadel', 'San Stefano'],
      postalCodePrefix: '21'
    },
    {
      city: 'الجيزة',
      cityEn: 'Giza',
      districts: ['الدقي', 'المهندسين', 'العجوزة', 'فيصل', 'الهرم', 'حدائق الأهرام', 'الشيخ زايد', '6 أكتوبر'],
      districtsEn: ['Dokki', 'Mohandessin', 'Agouza', 'Faisal', 'Haram', 'Hadayek El Ahram', 'Sheikh Zayed', '6th of October'],
      streets: ['شارع الهرم', 'شارع السودان', 'شارع جامعة الدول العربية', 'ميدان لبنان', 'شارع البحر الأعظم'],
      streetsEn: ['Haram Street', 'Sudan Street', 'Arab League Street', 'Lebanon Square', 'El Bahr El Aazam Street'],
      landmarks: ['أهرامات الجيزة', 'مول العرب', 'دريم بارك'],
      landmarksEn: ['Giza Pyramids', 'Mall of Arabia', 'Dream Park'],
      postalCodePrefix: '12'
    }
  ],
  AE: [
    {
      city: 'دبي',
      cityEn: 'Dubai',
      districts: ['داون تاون', 'مارينا', 'الخليج التجاري', 'جميرا', 'البرشاء', 'ديرة', 'بر دبي', 'الكرامة', 'المرقبات', 'الممزر', 'نخلة جميرا'],
      districtsEn: ['Downtown', 'Marina', 'Business Bay', 'Jumeirah', 'Al Barsha', 'Deira', 'Bur Dubai', 'Karama', 'Muragabbat', 'Al Mamzar', 'Palm Jumeirah'],
      streets: ['شارع الشيخ زايد', 'شارع الوصل', 'شارع جميرا بيتش', 'شارع الخيل', 'طريق المطار'],
      streetsEn: ['Sheikh Zayed Road', 'Al Wasl Road', 'Jumeirah Beach Road', 'Al Khail Road', 'Airport Road'],
      landmarks: ['برج خليفة', 'دبي مول', 'مول الإمارات', 'برج العرب', 'نخلة جميرا'],
      landmarksEn: ['Burj Khalifa', 'Dubai Mall', 'Mall of the Emirates', 'Burj Al Arab', 'Palm Jumeirah'],
      postalCodePrefix: '00'
    },
    {
      city: 'أبوظبي',
      cityEn: 'Abu Dhabi',
      districts: ['الكورنيش', 'الخالدية', 'المرور', 'البطين', 'المشرف', 'الوحدة', 'الظفرة', 'جزيرة الريم', 'جزيرة السعديات', 'جزيرة ياس'],
      districtsEn: ['Corniche', 'Khalidiya', 'Muroor', 'Al Bateen', 'Al Mushrif', 'Al Wahda', 'Al Dhafra', 'Reem Island', 'Saadiyat Island', 'Yas Island'],
      streets: ['كورنيش أبوظبي', 'شارع المرور', 'شارع الخالدية', 'شارع الكرامة', 'طريق الشيخ زايد'],
      streetsEn: ['Abu Dhabi Corniche', 'Muroor Street', 'Khalidiya Street', 'Karama Street', 'Sheikh Zayed Road'],
      landmarks: ['جامع الشيخ زايد', 'ياس مول', 'المارينا مول', 'اللوفر أبوظبي'],
      landmarksEn: ['Sheikh Zayed Grand Mosque', 'Yas Mall', 'Marina Mall', 'Louvre Abu Dhabi'],
      postalCodePrefix: '00'
    },
    {
      city: 'الشارقة',
      cityEn: 'Sharjah',
      districts: ['المجاز', 'القاسمية', 'النهدة', 'الخان', 'القصباء', 'المجرة', 'الناصرية', 'الجزات'],
      districtsEn: ['Al Majaz', 'Al Qasimia', 'Al Nahda', 'Al Khan', 'Al Qasba', 'Al Majara', 'Al Nasserya', 'Al Jazzat'],
      streets: ['شارع الوحدة', 'شارع الملك عبدالعزيز', 'كورنيش بحيرة خالد', 'شارع الشارقة'],
      streetsEn: ['Al Wahda Street', 'King Abdulaziz Street', 'Khalid Lake Corniche', 'Sharjah Street'],
      landmarks: ['صحارى سنتر', 'سيتي سنتر الشارقة', 'القصباء'],
      landmarksEn: ['Sahara Centre', 'City Centre Sharjah', 'Al Qasba'],
      postalCodePrefix: '00'
    }
  ],
  JO: [
    {
      city: 'عمان',
      cityEn: 'Amman',
      districts: ['عبدون', 'الشميساني', 'الصويفية', 'دير غبار', 'الرابية', 'خلدا', 'تلاع العلي', 'الجبيهة', 'الدوار السابع', 'العبدلي'],
      districtsEn: ['Abdoun', 'Shmeisani', 'Sweifieh', 'Deir Ghbar', 'Rabieh', 'Khalda', 'Tlaa Al Ali', 'Jubeiha', 'Seventh Circle', 'Abdali'],
      streets: ['شارع الملك عبدالله', 'شارع المدينة المنورة', 'شارع مكة', 'شارع الجاردنز', 'شارع وصفي التل'],
      streetsEn: ['King Abdullah Street', 'Al Madinah Al Munawwarah Street', 'Mecca Street', 'Gardens Street', 'Wasfi Al Tal Street'],
      landmarks: ['مكة مول', 'سيتي مول', 'تاج مول', 'العبدلي بوليفارد'],
      landmarksEn: ['Mecca Mall', 'City Mall', 'Taj Mall', 'Abdali Boulevard'],
      postalCodePrefix: '11'
    }
  ],
  KW: [
    {
      city: 'الكويت',
      cityEn: 'Kuwait City',
      districts: ['السالمية', 'حولي', 'الفحيحيل', 'الجهراء', 'الأحمدي', 'الشويخ', 'الصليبخات', 'السرة', 'العقيلة'],
      districtsEn: ['Salmiya', 'Hawally', 'Fahaheel', 'Jahra', 'Ahmadi', 'Shuwaikh', 'Sulaibikhat', 'Surra', 'Uqaila'],
      streets: ['شارع الخليج', 'طريق الملك فهد', 'شارع سالم المبارك', 'الدائري الرابع', 'الدائري الخامس'],
      streetsEn: ['Gulf Street', 'King Fahd Road', 'Salem Al Mubarak Street', 'Fourth Ring Road', 'Fifth Ring Road'],
      landmarks: ['الأفنيوز', 'مجمع 360', 'أبراج الكويت', 'المباركية'],
      landmarksEn: ['The Avenues', '360 Mall', 'Kuwait Towers', 'Mubarakiya'],
      postalCodePrefix: '00'
    }
  ],
  QA: [
    {
      city: 'الدوحة',
      cityEn: 'Doha',
      districts: ['الخليج الغربي', 'اللؤلؤة', 'السد', 'المطار القديم', 'الوكرة', 'الريان', 'الثمامة', 'لوسيل'],
      districtsEn: ['West Bay', 'The Pearl', 'Al Sadd', 'Old Airport', 'Al Wakra', 'Al Rayyan', 'Al Thumama', 'Lusail'],
      streets: ['كورنيش الدوحة', 'طريق سلوى', 'شارع السد', 'طريق الشمال'],
      streetsEn: ['Doha Corniche', 'Salwa Road', 'Al Sadd Street', 'Al Shamal Road'],
      landmarks: ['فيلاجيو', 'مول قطر', 'سوق واقف', 'كتارا'],
      landmarksEn: ['Villaggio', 'Mall of Qatar', 'Souq Waqif', 'Katara'],
      postalCodePrefix: '00'
    }
  ],
  BH: [
    {
      city: 'المنامة',
      cityEn: 'Manama',
      districts: ['السيف', 'الجفير', 'العدلية', 'أمواج', 'البحرين باي', 'الحد', 'سترة'],
      districtsEn: ['Seef', 'Juffair', 'Adliya', 'Amwaj', 'Bahrain Bay', 'Hidd', 'Sitra'],
      streets: ['شارع الفاتح', 'طريق الشيخ خليفة', 'شارع الحكومة', 'كورنيش الفاتح'],
      streetsEn: ['Al Fatih Street', 'Sheikh Khalifa Highway', 'Government Avenue', 'Fatih Corniche'],
      landmarks: ['سيتي سنتر البحرين', 'مجمع السيف', 'باب البحرين'],
      landmarksEn: ['City Centre Bahrain', 'Seef Mall', 'Bab Al Bahrain'],
      postalCodePrefix: '00'
    }
  ],
  OM: [
    {
      city: 'مسقط',
      cityEn: 'Muscat',
      districts: ['القرم', 'الخوير', 'روي', 'بوشر', 'العذيبة', 'الموالح', 'السيب', 'مطرح'],
      districtsEn: ['Qurum', 'Al Khuwair', 'Ruwi', 'Bausher', 'Al Azaiba', 'Al Mawaleh', 'Seeb', 'Muttrah'],
      streets: ['شارع السلطان قابوس', 'طريق المطار', 'طريق الجامعة', 'كورنيش مطرح'],
      streetsEn: ['Sultan Qaboos Street', 'Airport Road', 'University Road', 'Muttrah Corniche'],
      landmarks: ['سيتي سنتر مسقط', 'جراند مول', 'سوق مطرح'],
      landmarksEn: ['City Centre Muscat', 'Grand Mall', 'Muttrah Souq'],
      postalCodePrefix: '100'
    }
  ],
  LB: [
    {
      city: 'بيروت',
      cityEn: 'Beirut',
      districts: ['الحمرا', 'فردان', 'الأشرفية', 'وسط بيروت', 'الروشة', 'السوديكو', 'الجميزة', 'مار مخايل'],
      districtsEn: ['Hamra', 'Verdun', 'Achrafieh', 'Downtown', 'Raouche', 'Sodeco', 'Gemmayzeh', 'Mar Mikhael'],
      streets: ['شارع الحمرا', 'طريق فردان', 'شارع مونو', 'كورنيش بيروت', 'شارع غورو'],
      streetsEn: ['Hamra Street', 'Verdun Road', 'Monot Street', 'Beirut Corniche', 'Gouraud Street'],
      landmarks: ['ABC مول', 'سيتي سنتر بيروت', 'صخرة الروشة', 'وسط بيروت'],
      landmarksEn: ['ABC Mall', 'City Centre Beirut', 'Raouche Rock', 'Downtown Beirut'],
      postalCodePrefix: '1100'
    }
  ],
  MA: [
    {
      city: 'الدار البيضاء',
      cityEn: 'Casablanca',
      districts: ['المعاريف', 'أنفا', 'عين الذئاب', 'المدينة القديمة', 'سيدي بليوط', 'بوسكورة', 'عين السبع'],
      districtsEn: ['Maarif', 'Anfa', 'Ain Diab', 'Old Medina', 'Sidi Belyout', 'Bouskoura', 'Ain Sebaa'],
      streets: ['شارع محمد الخامس', 'بوليفارد عنفا', 'كورنيش عين الذئاب', 'شارع الجيش الملكي'],
      streetsEn: ['Mohammed V Avenue', 'Anfa Boulevard', 'Ain Diab Corniche', 'Royal Army Avenue'],
      landmarks: ['مسجد الحسن الثاني', 'موروكو مول', 'أنفا بليس'],
      landmarksEn: ['Hassan II Mosque', 'Morocco Mall', 'Anfa Place'],
      postalCodePrefix: '20'
    }
  ]
};

// دالة للحصول على عنوان مناسب للمدينة
export function getAddressForCity(countryCode: string, city: string, language: 'ar' | 'en'): { 
  district: string; 
  street: string; 
  fullAddress: string; 
  postalCode: string;
  landmark?: string;
} {
  const countryAddresses = addressDatabase[countryCode];
  
  if (!countryAddresses) {
    // Fallback for countries not in database
    return {
      district: language === 'ar' ? 'حي المركز' : 'Central District',
      street: language === 'ar' ? 'الشارع الرئيسي' : 'Main Street',
      fullAddress: language === 'ar' ? `حي المركز، الشارع الرئيسي، ${city}` : `Central District, Main Street, ${city}`,
      postalCode: '00000'
    };
  }
  
  // Find the city in the database
  let cityData = countryAddresses.find(c => c.city === city || c.cityEn === city);
  
  // If city not found, use first city as fallback
  if (!cityData) {
    cityData = countryAddresses[0];
  }
  
  const randomIndex = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  const district = language === 'ar' ? randomIndex(cityData.districts) : randomIndex(cityData.districtsEn);
  const street = language === 'ar' ? randomIndex(cityData.streets) : randomIndex(cityData.streetsEn);
  const cityName = language === 'ar' ? cityData.city : cityData.cityEn;
  const buildingNo = Math.floor(Math.random() * 200) + 1;
  
  const fullAddress = language === 'ar'
    ? `حي ${district}، ${street}، مبنى ${buildingNo}، ${cityName}`
    : `${district}, ${street}, Building ${buildingNo}, ${cityName}`;
  
  const postalCode = cityData.postalCodePrefix + String(Math.floor(Math.random() * 9000) + 1000);
  
  // Optionally add landmark
  const includeLandmark = Math.random() > 0.7;
  let landmark: string | undefined;
  if (includeLandmark && cityData.landmarks.length > 0) {
    landmark = language === 'ar' ? randomIndex(cityData.landmarks) : randomIndex(cityData.landmarksEn);
  }
  
  return { district, street, fullAddress, postalCode, landmark };
}

// دالة للحصول على مدينة مع عنوان مترابط
export function getCityWithAddress(countryCode: string, language: 'ar' | 'en'): {
  city: string;
  district: string;
  street: string;
  fullAddress: string;
  postalCode: string;
  landmark?: string;
} {
  const countryAddresses = addressDatabase[countryCode];
  
  if (!countryAddresses || countryAddresses.length === 0) {
    return {
      city: language === 'ar' ? 'المدينة' : 'City',
      district: language === 'ar' ? 'حي المركز' : 'Central District',
      street: language === 'ar' ? 'الشارع الرئيسي' : 'Main Street',
      fullAddress: language === 'ar' ? 'حي المركز، الشارع الرئيسي' : 'Central District, Main Street',
      postalCode: '00000'
    };
  }
  
  // Pick a random city
  const cityData = countryAddresses[Math.floor(Math.random() * countryAddresses.length)];
  const city = language === 'ar' ? cityData.city : cityData.cityEn;
  
  const addressInfo = getAddressForCity(countryCode, city, language);
  
  return {
    city,
    ...addressInfo
  };
}
