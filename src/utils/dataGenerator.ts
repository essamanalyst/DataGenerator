import { faker } from '@faker-js/faker';
import { FieldConfig, GeneratedData, FieldType } from '../types';
import {
  arabicMaleFirstNames,
  arabicFemaleFirstNames,
  arabicLastNames,
  arabicCities,
  arabicStreetTypes,
  arabicStreetNames,
  arabicCompanies,
  arabicJobTitles,
  arabicDepartments,
  arabicUniversities,
  arabicMajors,
  arabicEducationLevels,
  arabicGrades,
  arabicProductCategories,
  arabicMedicalData,
  arabicCurrencies,
  arabicPhoneCodes,
  arabicDomains,
  arabicSentences,
  arabicBankNames,
} from '../data/arabicData';

// Helper function to get random item from array
const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper function to generate random number in range
const randomNumber = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;

// Helper function to generate random decimal
const randomDecimal = (min: number, max: number, decimals: number = 2): number => 
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// Arabic colors
const arabicColors = ['أحمر', 'أزرق', 'أخضر', 'أصفر', 'برتقالي', 'بنفسجي', 'أبيض', 'أسود', 'رمادي', 'بني', 'وردي', 'ذهبي', 'فضي', 'بيج', 'نيلي'];

// Survey responses in Arabic
const surveyResponses = [
  'أوافق بشدة', 'أوافق', 'محايد', 'لا أوافق', 'لا أوافق بشدة',
  'راضٍ جداً', 'راضٍ', 'غير راضٍ', 'غير راضٍ تماماً',
  'ممتاز', 'جيد جداً', 'جيد', 'مقبول', 'ضعيف'
];

const generateFieldValue = (field: FieldConfig): string | number | boolean | null => {
  const { type, options } = field;
  
  // Handle nullable fields
  if (options?.nullable && options?.nullProbability) {
    if (Math.random() < options.nullProbability) {
      return null;
    }
  }

  switch (type) {
    // ==================== Personal - English ====================
    case 'firstName':
      return faker.person.firstName();
    case 'lastName':
      return faker.person.lastName();
    case 'fullName':
      return faker.person.fullName();
    case 'email':
      return faker.internet.email().toLowerCase();
    case 'phone':
      return faker.phone.number();
    case 'username':
      return faker.internet.username().toLowerCase();
    case 'password':
      return faker.internet.password({ length: 12, memorable: false });
    case 'avatar':
      return faker.image.avatar();
    case 'age':
      return randomNumber(options?.min ?? 18, options?.max ?? 80);
    case 'gender':
      return faker.person.sex();
    case 'nationalId': {
      const prefix = randomItem(['1', '2']); // 1 for male, 2 for female in Saudi
      return prefix + faker.string.numeric(9);
    }

    // ==================== Personal - Arabic ====================
    case 'arabicFirstName': {
      const isMale = Math.random() > 0.5;
      return isMale ? randomItem(arabicMaleFirstNames) : randomItem(arabicFemaleFirstNames);
    }
    case 'arabicLastName':
      return randomItem(arabicLastNames);
    case 'arabicFullName': {
      const isMale = Math.random() > 0.5;
      const firstName = isMale ? randomItem(arabicMaleFirstNames) : randomItem(arabicFemaleFirstNames);
      const middleName = randomItem(arabicMaleFirstNames);
      const lastName = randomItem(arabicLastNames);
      return `${firstName} ${middleName} ${lastName}`;
    }
    case 'arabicEmail': {
      const firstName = randomItem(arabicMaleFirstNames);
      const lastName = randomItem(arabicLastNames);
      const domain = randomItem(['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com']);
      const latinFirst = transliterate(firstName);
      const latinLast = transliterate(lastName);
      return `${latinFirst}.${latinLast}${randomNumber(1, 99)}@${domain}`.toLowerCase();
    }
    case 'arabicPhone': {
      const cityData = randomItem(arabicCities);
      const phoneInfo = arabicPhoneCodes[cityData.country] || { code: '+966', format: '5XXXXXXXX' };
      const number = phoneInfo.format.replace(/X/g, () => String(randomNumber(0, 9)));
      return `${phoneInfo.code}${number}`;
    }
    case 'arabicUsername': {
      const firstName = randomItem(arabicMaleFirstNames);
      const latin = transliterate(firstName);
      return `${latin}${randomNumber(100, 9999)}`.toLowerCase();
    }
    case 'arabicGender':
      return Math.random() > 0.5 ? 'ذكر' : 'أنثى';

    // ==================== Address - English ====================
    case 'address':
      return faker.location.streetAddress();
    case 'city':
      return faker.location.city();
    case 'country':
      return faker.location.country();
    case 'zipCode':
      return faker.location.zipCode();
    case 'latitude':
      return randomDecimal(-90, 90, 6);
    case 'longitude':
      return randomDecimal(-180, 180, 6);
    case 'coordinates':
      return `${randomDecimal(-90, 90, 6)}, ${randomDecimal(-180, 180, 6)}`;

    // ==================== Address - Arabic ====================
    case 'arabicAddress': {
      const streetType = randomItem(arabicStreetTypes);
      const streetName = randomItem(arabicStreetNames);
      const buildingNum = randomNumber(1, 500);
      return `${streetType} ${streetName}، مبنى ${buildingNum}`;
    }
    case 'arabicCity': {
      return randomItem(arabicCities).city;
    }
    case 'arabicCountry': {
      return randomItem(arabicCities).country;
    }

    // ==================== Business - English ====================
    case 'company':
      return faker.company.name();
    case 'jobTitle':
      return faker.person.jobTitle();
    case 'department':
      return faker.commerce.department();

    // ==================== Business - Arabic ====================
    case 'arabicCompany':
      return randomItem(arabicCompanies);
    case 'arabicJobTitle':
      return randomItem(arabicJobTitles);
    case 'arabicDepartment':
      return randomItem(arabicDepartments);

    // ==================== Education ====================
    case 'university':
      return faker.company.name() + ' University';
    case 'arabicUniversity':
      return randomItem(arabicUniversities);
    case 'major':
      return faker.person.jobArea();
    case 'arabicMajor':
      return randomItem(arabicMajors);
    case 'educationLevel':
      return randomItem(['High School', 'Associate', 'Bachelor', 'Master', 'PhD']);
    case 'arabicEducationLevel':
      return randomItem(arabicEducationLevels);
    case 'gpa':
      return randomDecimal(1.0, 4.0, 2);
    case 'arabicGrade':
      return randomItem(arabicGrades);

    // ==================== Medical ====================
    case 'bloodType':
      return randomItem(arabicMedicalData.bloodTypes);
    case 'medicalCondition':
      return randomItem(arabicMedicalData.conditions);
    case 'medication':
      return randomItem(arabicMedicalData.medications);
    case 'hospital':
      return faker.company.name() + ' Hospital';
    case 'arabicHospital':
      return randomItem(arabicMedicalData.hospitals);
    case 'medicalSpecialty':
      return randomItem(arabicMedicalData.specialties);
    case 'height':
      return randomNumber(options?.min ?? 150, options?.max ?? 200);
    case 'weight':
      return randomNumber(options?.min ?? 45, options?.max ?? 120);
    case 'bmi': {
      const h = randomNumber(150, 200) / 100;
      const w = randomNumber(45, 120);
      return parseFloat((w / (h * h)).toFixed(1));
    }

    // ==================== Finance - English ====================
    case 'creditCard':
      return faker.finance.creditCardNumber();
    case 'price':
      return parseFloat(faker.commerce.price({ min: options?.min ?? 1, max: options?.max ?? 1000 }));
    case 'currency':
      return faker.finance.currencyCode();
    case 'accountNumber':
      return faker.finance.accountNumber(12);
    case 'iban':
      return faker.finance.iban();
    case 'bankName':
      return faker.company.name() + ' Bank';
    case 'salary':
      return randomNumber(options?.min ?? 3000, options?.max ?? 50000);

    // ==================== Finance - Arabic ====================
    case 'arabicPrice': {
      const curr = randomItem(arabicCurrencies);
      const amount = randomNumber(options?.min ?? 10, options?.max ?? 10000);
      return `${amount.toLocaleString()} ${curr.symbol}`;
    }
    case 'arabicCurrency': {
      const curr = randomItem(arabicCurrencies);
      return curr.name;
    }
    case 'arabicBankName':
      return randomItem(arabicBankNames);
    case 'arabicSalary': {
      const curr = randomItem(arabicCurrencies);
      const amount = randomNumber(options?.min ?? 3000, options?.max ?? 50000);
      return `${amount.toLocaleString()} ${curr.symbol}`;
    }

    // ==================== E-commerce - English ====================
    case 'productName':
      return faker.commerce.productName();
    case 'productCategory':
      return faker.commerce.department();
    case 'color':
      return faker.color.human();
    case 'sku':
      return `SKU-${faker.string.alphanumeric(8).toUpperCase()}`;
    case 'barcode':
      return faker.string.numeric(13);

    // ==================== E-commerce - Arabic ====================
    case 'arabicProductName': {
      const cat = randomItem(arabicProductCategories);
      return randomItem(cat.products);
    }
    case 'arabicProductCategory': {
      const cat = randomItem(arabicProductCategories);
      return cat.category;
    }
    case 'arabicColor':
      return randomItem(arabicColors);

    // ==================== Internet ====================
    case 'website':
      return faker.internet.url();
    case 'arabicWebsite': {
      const name = transliterate(randomItem(arabicCompanies).split(' ')[0]);
      const domain = randomItem(arabicDomains);
      return `https://www.${name}${domain}`.toLowerCase();
    }
    case 'ipAddress':
      return faker.internet.ip();
    case 'macAddress':
      return faker.internet.mac();
    case 'image':
      return faker.image.url();
    case 'socialMedia': {
      const platform = randomItem(['twitter.com', 'instagram.com', 'linkedin.com/in', 'facebook.com']);
      const username = faker.internet.username().toLowerCase();
      return `https://${platform}/${username}`;
    }

    // ==================== Date & Time ====================
    case 'date':
      return faker.date.past().toISOString().split('T')[0];
    case 'dateTime':
      return faker.date.past().toISOString();
    case 'birthDate': {
      const age = randomNumber(18, 80);
      const year = new Date().getFullYear() - age;
      const month = randomNumber(1, 12).toString().padStart(2, '0');
      const day = randomNumber(1, 28).toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    case 'futureDate':
      return faker.date.future().toISOString().split('T')[0];
    case 'time': {
      const h = randomNumber(0, 23).toString().padStart(2, '0');
      const m = randomNumber(0, 59).toString().padStart(2, '0');
      const s = randomNumber(0, 59).toString().padStart(2, '0');
      return `${h}:${m}:${s}`;
    }
    case 'hijriDate': {
      const year = randomNumber(1400, 1446);
      const month = randomNumber(1, 12);
      const day = randomNumber(1, 30);
      const hijriMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 
                          'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
      return `${day} ${hijriMonths[month - 1]} ${year}هـ`;
    }

    // ==================== Text ====================
    case 'sentence':
      return faker.lorem.sentence();
    case 'arabicSentence':
      return randomItem(arabicSentences);
    case 'paragraph':
      return faker.lorem.paragraph();
    case 'arabicParagraph': {
      const sentences = [];
      for (let i = 0; i < 3; i++) {
        sentences.push(randomItem(arabicSentences));
      }
      return sentences.join(' ');
    }
    case 'loremIpsum':
      return faker.lorem.paragraphs(2);

    // ==================== Numbers ====================
    case 'uuid':
      return faker.string.uuid();
    case 'number':
      return randomNumber(options?.min ?? 0, options?.max ?? 10000);
    case 'decimal':
      return randomDecimal(options?.min ?? 0, options?.max ?? 1000, options?.decimals ?? 2);
    case 'percentage':
      return randomNumber(0, 100);
    case 'boolean':
      return Math.random() > 0.5;

    // ==================== Research ====================
    case 'sampleId':
      return `SMP-${faker.string.alphanumeric(6).toUpperCase()}`;
    case 'experimentId':
      return `EXP-${new Date().getFullYear()}-${faker.string.alphanumeric(4).toUpperCase()}`;
    case 'surveyResponse':
      return randomItem(surveyResponses);
    case 'likertScale':
      return randomNumber(1, 5);
    case 'rating':
      return randomNumber(1, 5);
    case 'correlation':
      return randomDecimal(-1, 1, 3);
    case 'pValue':
      return randomDecimal(0, 1, 4);
    case 'standardDeviation':
      return randomDecimal(0, 10, 3);

    default:
      return faker.string.alphanumeric(10);
  }
};

// Simple transliteration for Arabic to Latin
const transliterate = (arabic: string): string => {
  const map: Record<string, string> = {
    'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th',
    'ج': 'j', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a',
    'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'a', 'ء': '', 'ئ': 'e',
    'ؤ': 'o', ' ': '_'
  };
  
  return arabic.split('').map(char => map[char] || char).join('');
};

export const generateData = (
  fields: FieldConfig[],
  count: number,
  onProgress?: (progress: number) => void
): GeneratedData[] => {
  const data: GeneratedData[] = [];
  const batchSize = 10000;
  const totalBatches = Math.ceil(count / batchSize);
  const uniqueValues: Record<string, Set<string | number>> = {};

  // Initialize unique value sets
  fields.forEach(field => {
    if (field.options?.unique) {
      uniqueValues[field.name] = new Set();
    }
  });

  for (let batch = 0; batch < totalBatches; batch++) {
    const batchStart = batch * batchSize;
    const batchEnd = Math.min(batchStart + batchSize, count);

    for (let i = batchStart; i < batchEnd; i++) {
      const row: GeneratedData = {};
      for (const field of fields) {
        let value = generateFieldValue(field);
        
        // Handle unique values
        if (field.options?.unique && value !== null) {
          let attempts = 0;
          while (uniqueValues[field.name].has(value as string | number) && attempts < 100) {
            value = generateFieldValue(field);
            attempts++;
          }
          if (value !== null) {
            uniqueValues[field.name].add(value as string | number);
          }
        }
        
        row[field.name] = value;
      }
      data.push(row);
    }

    if (onProgress) {
      onProgress(Math.round((batchEnd / count) * 100));
    }
  }

  return data;
};

export const getFieldTypeLabel = (type: FieldType): string => {
  const labels: Record<FieldType, string> = {
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    fullName: 'الاسم الكامل',
    arabicFirstName: 'الاسم الأول (عربي)',
    arabicLastName: 'اسم العائلة (عربي)',
    arabicFullName: 'الاسم الكامل (عربي)',
    email: 'البريد الإلكتروني',
    arabicEmail: 'بريد إلكتروني (عربي)',
    phone: 'رقم الهاتف',
    arabicPhone: 'هاتف (عربي)',
    address: 'العنوان',
    arabicAddress: 'العنوان (عربي)',
    city: 'المدينة',
    arabicCity: 'المدينة (عربي)',
    country: 'الدولة',
    arabicCountry: 'الدولة (عربي)',
    zipCode: 'الرمز البريدي',
    company: 'اسم الشركة',
    arabicCompany: 'الشركة (عربي)',
    jobTitle: 'المسمى الوظيفي',
    arabicJobTitle: 'الوظيفة (عربي)',
    department: 'القسم',
    arabicDepartment: 'القسم (عربي)',
    date: 'التاريخ',
    dateTime: 'التاريخ والوقت',
    birthDate: 'تاريخ الميلاد',
    futureDate: 'تاريخ مستقبلي',
    time: 'الوقت',
    hijriDate: 'التاريخ الهجري',
    age: 'العمر',
    gender: 'الجنس',
    arabicGender: 'الجنس (عربي)',
    uuid: 'معرف فريد',
    username: 'اسم المستخدم',
    arabicUsername: 'اسم مستخدم (عربي)',
    password: 'كلمة المرور',
    nationalId: 'رقم الهوية',
    website: 'الموقع الإلكتروني',
    arabicWebsite: 'الموقع (عربي)',
    ipAddress: 'عنوان IP',
    macAddress: 'عنوان MAC',
    creditCard: 'بطاقة ائتمان',
    price: 'السعر',
    arabicPrice: 'السعر (عربي)',
    currency: 'العملة',
    arabicCurrency: 'العملة (عربي)',
    accountNumber: 'رقم الحساب',
    iban: 'IBAN',
    bankName: 'اسم البنك',
    arabicBankName: 'البنك (عربي)',
    salary: 'الراتب',
    arabicSalary: 'الراتب (عربي)',
    productName: 'اسم المنتج',
    arabicProductName: 'المنتج (عربي)',
    productCategory: 'فئة المنتج',
    arabicProductCategory: 'فئة المنتج (عربي)',
    color: 'اللون',
    arabicColor: 'اللون (عربي)',
    sku: 'SKU',
    barcode: 'الباركود',
    sentence: 'جملة',
    arabicSentence: 'جملة (عربي)',
    paragraph: 'فقرة',
    arabicParagraph: 'فقرة (عربي)',
    loremIpsum: 'نص Lorem',
    number: 'رقم',
    decimal: 'رقم عشري',
    percentage: 'نسبة مئوية',
    boolean: 'قيمة منطقية',
    avatar: 'صورة الملف الشخصي',
    image: 'رابط صورة',
    socialMedia: 'حساب تواصل اجتماعي',
    university: 'الجامعة',
    arabicUniversity: 'الجامعة (عربي)',
    major: 'التخصص',
    arabicMajor: 'التخصص (عربي)',
    educationLevel: 'المستوى التعليمي',
    arabicEducationLevel: 'المستوى التعليمي (عربي)',
    gpa: 'المعدل التراكمي',
    arabicGrade: 'التقدير (عربي)',
    bloodType: 'فصيلة الدم',
    medicalCondition: 'الحالة الصحية',
    medication: 'الدواء',
    hospital: 'المستشفى',
    arabicHospital: 'المستشفى (عربي)',
    medicalSpecialty: 'التخصص الطبي',
    height: 'الطول',
    weight: 'الوزن',
    bmi: 'مؤشر كتلة الجسم',
    latitude: 'خط العرض',
    longitude: 'خط الطول',
    coordinates: 'إحداثيات',
    sampleId: 'رقم العينة',
    experimentId: 'رقم التجربة',
    surveyResponse: 'استجابة استبيان',
    likertScale: 'مقياس ليكرت',
    rating: 'تقييم',
    correlation: 'معامل ارتباط',
    pValue: 'قيمة P',
    standardDeviation: 'الانحراف المعياري',
  };
  return labels[type] || type;
};
