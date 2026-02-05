// مولد بيانات ذكي يربط البيانات بشكل منطقي ومتسق
import { countriesData, CountryData, getRandomItem, getRandomNumber } from '../data/countriesData';
import { generateFromDistribution, DistributionParams } from './distributions';
import { 
  medicalResearchData, 
  educationResearchData, 
  surveyResearchData, 
  realisticComments,
  getRandomDecimal,
  getWeightedBloodType
} from '../data/researchData';
import { FieldConfig, GeneratedData } from '../types';

// سياق البيانات للحفاظ على الترابط
interface GenerationContext {
  country?: CountryData;
  gender?: 'male' | 'female';
  age?: number;
  city?: { nameAr: string; nameEn: string };
  educationLevel?: string;
  occupation?: string;
  language: 'ar' | 'en' | 'mixed';
}

// توليد سياق متسق للسجل الواحد
const generateContext = (_fields: FieldConfig[], dataLanguage: 'ar' | 'en' = 'ar'): GenerationContext => {
  const countries = Object.values(countriesData);
  const country = getRandomItem(countries);
  const gender = Math.random() > 0.5 ? 'male' : 'female';
  const city = getRandomItem(country.cities);
  
  // تحديد العمر بشكل منطقي
  const age = getRandomNumber(18, 75);
  
  // تحديد المستوى التعليمي بناءً على العمر
  let educationLevel: string;
  if (dataLanguage === 'en') {
    if (age < 20) {
      educationLevel = getRandomItem(['High School', 'Bachelor']);
    } else if (age < 25) {
      educationLevel = getRandomItem(['Bachelor', 'Master']);
    } else if (age < 35) {
      educationLevel = getRandomItem(['Bachelor', 'Master', 'PhD']);
    } else {
      educationLevel = getRandomItem(['Bachelor', 'Master', 'PhD', 'Diploma']);
    }
  } else {
    if (age < 20) {
      educationLevel = getRandomItem(['ثانوي', 'بكالوريوس']);
    } else if (age < 25) {
      educationLevel = getRandomItem(['بكالوريوس', 'ماجستير']);
    } else if (age < 35) {
      educationLevel = getRandomItem(['بكالوريوس', 'ماجستير', 'دكتوراه']);
    } else {
      educationLevel = getRandomItem(['بكالوريوس', 'ماجستير', 'دكتوراه', 'دبلوم']);
    }
  }
  
  return {
    country,
    gender,
    age,
    city,
    educationLevel,
    language: dataLanguage,
  };
};

// توليد رقم هاتف واقعي
const generatePhone = (country: CountryData): string => {
  const format = country.phoneFormat;
  const phone = format.replace(/X/g, () => String(getRandomNumber(0, 9)));
  return `${country.phoneCode}${phone}`;
};

// توليد بريد إلكتروني واقعي
const generateEmail = (firstName: string, lastName: string, _language: 'ar' | 'en'): string => {
  const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com'];
  const domain = getRandomItem(domains);
  
  // تحويل الاسم العربي إلى لاتيني
  const latinFirst = transliterate(firstName).toLowerCase();
  const latinLast = transliterate(lastName).toLowerCase();
  
  const patterns = [
    `${latinFirst}.${latinLast}`,
    `${latinFirst}${latinLast}`,
    `${latinFirst}.${latinLast}${getRandomNumber(1, 99)}`,
    `${latinFirst}${getRandomNumber(100, 999)}`,
    `${latinFirst}_${latinLast}`,
  ];
  
  return `${getRandomItem(patterns)}@${domain}`.replace(/\s/g, '');
};

// تحويل النص العربي إلى لاتيني
const transliterate = (arabic: string): string => {
  const map: Record<string, string> = {
    'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th',
    'ج': 'j', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a',
    'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'a', 'ء': '', 'ئ': 'e',
    'ؤ': 'o', ' ': ''
  };
  
  return arabic.split('').map(char => map[char] || char).join('');
};

// توليد عنوان واقعي
const generateAddress = (country: CountryData, city: { nameAr: string; nameEn: string }): string => {
  const street = getRandomItem(country.streets);
  const buildingNum = getRandomNumber(1, 500);
  const floorNum = getRandomNumber(1, 20);
  const apartmentNum = getRandomNumber(1, 50);
  
  return `${street}، مبنى ${buildingNum}، الطابق ${floorNum}، شقة ${apartmentNum}، ${city.nameAr}`;
};

// توليد تاريخ ميلاد منطقي بناءً على العمر
const generateBirthDate = (age: number): string => {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const month = getRandomNumber(1, 12).toString().padStart(2, '0');
  const day = getRandomNumber(1, 28).toString().padStart(2, '0');
  return `${birthYear}-${month}-${day}`;
};

// توليد راتب منطقي بناءً على المستوى التعليمي والعمر
const generateSalary = (age: number, educationLevel: string, currency: { symbol: string }): string => {
  let baseSalary = 3000;
  
  // زيادة حسب المستوى التعليمي
  if (educationLevel === 'ماجستير') baseSalary += 3000;
  else if (educationLevel === 'دكتوراه') baseSalary += 7000;
  else if (educationLevel === 'بكالوريوس') baseSalary += 1500;
  
  // زيادة حسب سنوات الخبرة (العمر - 22)
  const experience = Math.max(0, age - 22);
  baseSalary += experience * 200;
  
  // إضافة بعض العشوائية
  const variance = getRandomNumber(-1000, 2000);
  const finalSalary = Math.max(2000, baseSalary + variance);
  
  return `${finalSalary.toLocaleString()} ${currency.symbol}`;
};

// يمكن إضافة توليد بيانات طبية مترابطة لاحقاً

// توليد قيمة حقل واحد
export const generateFieldValue = (
  field: FieldConfig, 
  context: GenerationContext,
  firstName?: string,
  lastName?: string
): string | number | boolean | null => {
  const { type, options } = field;
  const { country, gender, age, city, educationLevel } = context;
  
  // التعامل مع القيم الفارغة
  if (options?.nullable && options?.nullProbability) {
    if (Math.random() < options.nullProbability) {
      return null;
    }
  }
  
  switch (type) {
    // ==================== الأسماء ====================
    case 'arabicFirstName':
      return gender === 'male' 
        ? getRandomItem(country!.maleNames) 
        : getRandomItem(country!.femaleNames);
    
    case 'arabicLastName':
      return getRandomItem(country!.lastNames);
    
    case 'arabicFullName': {
      const first = gender === 'male' 
        ? getRandomItem(country!.maleNames) 
        : getRandomItem(country!.femaleNames);
      const middle = getRandomItem(country!.maleNames);
      const last = getRandomItem(country!.lastNames);
      return `${first} ${middle} ${last}`;
    }
    
    case 'firstName':
      return getRandomItem(['John', 'Michael', 'David', 'James', 'Robert', 'William', 'Joseph', 'Thomas', 'Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia', 'Charlotte', 'Amelia', 'Harper']);
    
    case 'lastName':
      return getRandomItem(['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson']);
    
    case 'fullName':
      const fn = getRandomItem(['John', 'Michael', 'David', 'Emma', 'Olivia', 'Sophia']);
      const ln = getRandomItem(['Smith', 'Johnson', 'Williams', 'Brown', 'Jones']);
      return `${fn} ${ln}`;
    
    // ==================== الاتصال ====================
    case 'arabicEmail':
      return generateEmail(firstName || 'user', lastName || 'name', 'ar');
    
    case 'email':
      return generateEmail(firstName || 'user', lastName || 'name', 'en');
    
    case 'arabicPhone':
      return generatePhone(country!);
    
    case 'phone':
      return `+1${getRandomNumber(200, 999)}${getRandomNumber(1000000, 9999999)}`;
    
    // ==================== العناوين ====================
    case 'arabicAddress':
      return generateAddress(country!, city!);
    
    case 'arabicCity':
      return city!.nameAr;
    
    case 'arabicCountry':
      return country!.nameAr;
    
    case 'address':
      return `${getRandomNumber(1, 999)} ${getRandomItem(['Main', 'Oak', 'Maple', 'Cedar', 'Pine'])} ${getRandomItem(['Street', 'Avenue', 'Boulevard', 'Road', 'Lane'])}`;
    
    case 'city':
      return city!.nameEn;
    
    case 'country':
      return country!.nameEn;
    
    // ==================== العمل والتعليم ====================
    case 'arabicCompany':
      return getRandomItem(country!.companies);
    
    case 'arabicJobTitle':
      const jobs = ['مدير', 'مهندس', 'محاسب', 'طبيب', 'معلم', 'مبرمج', 'محلل', 'مصمم', 'مسؤول', 'أخصائي'];
      const departments = ['تقنية المعلومات', 'الموارد البشرية', 'المالية', 'التسويق', 'المبيعات', 'العمليات'];
      return `${getRandomItem(jobs)} ${getRandomItem(departments)}`;
    
    case 'arabicDepartment':
      return getRandomItem(['الإدارة', 'الموارد البشرية', 'المالية', 'تقنية المعلومات', 'التسويق', 'المبيعات', 'خدمة العملاء', 'البحث والتطوير']);
    
    case 'arabicUniversity':
      return getRandomItem(country!.universities);
    
    case 'arabicMajor':
      const allMajors = Object.values(educationResearchData.majors).flat();
      return getRandomItem(allMajors);
    
    case 'arabicEducationLevel':
      return educationLevel || getRandomItem(educationResearchData.levels.map(l => l.level));
    
    case 'arabicGrade':
      return getRandomItem(educationResearchData.grades.map(g => g.grade));
    
    case 'gpa':
      return getRandomDecimal(1.5, 4.0, 2);
    
    // ==================== المالية ====================
    case 'arabicSalary':
      return generateSalary(age!, educationLevel!, country!.currency);
    
    case 'arabicPrice':
      const priceAmount = getRandomNumber(options?.min ?? 10, options?.max ?? 5000);
      return `${priceAmount.toLocaleString()} ${country!.currency.symbol}`;
    
    case 'arabicCurrency':
      return country!.currency.nameAr;
    
    case 'arabicBankName':
      return getRandomItem(country!.banks);
    
    case 'salary':
      return getRandomNumber(options?.min ?? 2000, options?.max ?? 50000);
    
    case 'price':
      return getRandomDecimal(options?.min ?? 1, options?.max ?? 1000, 2);
    
    // ==================== البيانات الطبية ====================
    case 'bloodType':
      return getWeightedBloodType();
    
    case 'medicalCondition':
      return getRandomItem(medicalResearchData.conditions);
    
    case 'medication': {
      const med = getRandomItem(medicalResearchData.medications);
      return `${med.name} (${med.nameEn}) ${med.dosage}`;
    }
    
    case 'arabicHospital':
      return getRandomItem(country!.hospitals);
    
    case 'medicalSpecialty':
      return getRandomItem(medicalResearchData.specialties);
    
    case 'height': {
      const dist = options?.distribution as DistributionParams | undefined;
      const minH = gender === 'male' ? (options?.min ?? 160) : (options?.min ?? 150);
      const maxH = gender === 'male' ? (options?.max ?? 195) : (options?.max ?? 175);
      if (dist && dist.type !== 'uniform') {
        const value = generateFromDistribution(dist, minH, maxH);
        return Math.round(value);
      }
      return getRandomNumber(minH, maxH);
    }
    
    case 'weight': {
      const dist = options?.distribution as DistributionParams | undefined;
      const minW = gender === 'male' ? (options?.min ?? 55) : (options?.min ?? 45);
      const maxW = gender === 'male' ? (options?.max ?? 110) : (options?.max ?? 90);
      if (dist && dist.type !== 'uniform') {
        const value = generateFromDistribution(dist, minW, maxW);
        return Math.round(value);
      }
      return getRandomNumber(minW, maxW);
    }
    
    case 'bmi': {
      const h = (gender === 'male' ? getRandomNumber(165, 185) : getRandomNumber(155, 170)) / 100;
      const w = gender === 'male' ? getRandomNumber(60, 100) : getRandomNumber(50, 80);
      return Math.round((w / (h * h)) * 10) / 10;
    }
    
    // ==================== التاريخ والوقت ====================
    case 'date':
      return new Date(Date.now() - getRandomNumber(1, 365) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    case 'dateTime':
      return new Date(Date.now() - getRandomNumber(1, 365) * 24 * 60 * 60 * 1000).toISOString();
    
    case 'birthDate':
      return generateBirthDate(age!);
    
    case 'age':
      return age!;
    
    case 'arabicGender':
      return gender === 'male' ? 'ذكر' : 'أنثى';
    
    case 'gender':
      return gender === 'male' ? 'Male' : 'Female';
    
    case 'hijriDate': {
      const hijriMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
      return `${getRandomNumber(1, 30)} ${getRandomItem(hijriMonths)} ${getRandomNumber(1440, 1446)}هـ`;
    }
    
    // ==================== الأبحاث والاستبيانات ====================
    case 'likertScale':
      return getRandomNumber(1, 5);
    
    case 'surveyResponse':
      return getRandomItem(surveyResearchData.likertResponses[5]);
    
    case 'rating':
      return getRandomNumber(1, 5);
    
    case 'correlation':
      return getRandomDecimal(-1, 1, 3);
    
    case 'pValue':
      return getRandomDecimal(0.001, 0.5, 4);
    
    case 'standardDeviation':
      return getRandomDecimal(0.1, 5, 3);
    
    case 'sampleId':
      return `SMP-${new Date().getFullYear()}-${getRandomNumber(10000, 99999)}`;
    
    case 'experimentId':
      return `EXP-${getRandomNumber(1000, 9999)}-${String.fromCharCode(65 + getRandomNumber(0, 25))}`;
    
    // ==================== النصوص ====================
    case 'arabicSentence':
      return getRandomItem([...realisticComments.positive, ...realisticComments.neutral, ...realisticComments.academic]);
    
    case 'arabicParagraph':
      const sentences = [];
      for (let i = 0; i < 3; i++) {
        sentences.push(getRandomItem([...realisticComments.academic, ...realisticComments.neutral]));
      }
      return sentences.join(' ');
    
    // ==================== المعرفات والأرقام ====================
    case 'uuid':
      return crypto.randomUUID();
    
    case 'nationalId': {
      // توليد رقم هوية بتنسيق الدولة
      const prefix = gender === 'male' ? '1' : '2';
      return prefix + Array.from({ length: 9 }, () => getRandomNumber(0, 9)).join('');
    }
    
    case 'number': {
      const dist = options?.distribution as DistributionParams | undefined;
      if (dist && dist.type !== 'uniform') {
        const value = generateFromDistribution(dist, options?.min ?? 0, options?.max ?? 10000);
        return Math.round(value);
      }
      return getRandomNumber(options?.min ?? 0, options?.max ?? 10000);
    }
    
    case 'decimal': {
      const dist = options?.distribution as DistributionParams | undefined;
      if (dist && dist.type !== 'uniform') {
        const value = generateFromDistribution(dist, options?.min ?? 0, options?.max ?? 1000);
        return parseFloat(value.toFixed(options?.decimals ?? 2));
      }
      return getRandomDecimal(options?.min ?? 0, options?.max ?? 1000, options?.decimals ?? 2);
    }
    
    case 'percentage': {
      const dist = options?.distribution as DistributionParams | undefined;
      if (dist && dist.type !== 'uniform') {
        const value = generateFromDistribution(dist, 0, 100);
        return Math.round(value);
      }
      return getRandomNumber(0, 100);
    }
    
    case 'boolean':
      return Math.random() > 0.5;
    
    // ==================== أخرى ====================
    case 'username': {
      const base = firstName ? transliterate(firstName) : 'user';
      return `${base.toLowerCase()}${getRandomNumber(100, 9999)}`;
    }
    
    case 'arabicUsername': {
      const base = firstName ? transliterate(firstName) : 'user';
      return `${base.toLowerCase()}${getRandomNumber(100, 9999)}`;
    }
    
    case 'password':
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
      return Array.from({ length: 12 }, () => chars[getRandomNumber(0, chars.length - 1)]).join('');
    
    case 'ipAddress':
      return `${getRandomNumber(1, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(1, 254)}`;
    
    case 'latitude':
      return getRandomDecimal(-90, 90, 6);
    
    case 'longitude':
      return getRandomDecimal(-180, 180, 6);
    
    case 'coordinates':
      return `${getRandomDecimal(-90, 90, 6)}, ${getRandomDecimal(-180, 180, 6)}`;
    
    case 'website':
      return `https://www.${transliterate(getRandomItem(country!.companies).split(' ')[0]).toLowerCase().replace(/\s/g, '')}.com`;
    
    case 'arabicWebsite': {
      const name = transliterate(getRandomItem(country!.companies).split(' ')[0]).toLowerCase();
      const domains = ['.sa', '.ae', '.eg', '.com', '.net'];
      return `https://www.${name.replace(/\s/g, '')}${getRandomItem(domains)}`;
    }
    
    default:
      return `value_${getRandomNumber(1, 10000)}`;
  }
};

// المولد الرئيسي للبيانات
export const generateIntelligentData = (
  fields: FieldConfig[],
  count: number,
  dataLanguage: 'ar' | 'en' = 'ar',
  onProgress?: (progress: number) => void
): GeneratedData[] => {
  const data: GeneratedData[] = [];
  const batchSize = Math.min(10000, count);
  const uniqueValues: Record<string, Set<string | number>> = {};
  
  // تهيئة مجموعات القيم الفريدة
  fields.forEach(field => {
    if (field.options?.unique) {
      uniqueValues[field.name] = new Set();
    }
  });
  
  for (let i = 0; i < count; i++) {
    // توليد سياق متسق لكل سجل
    const context = generateContext(fields, dataLanguage);
    
    // توليد الاسم أولاً للاستخدام في الحقول الأخرى
    let firstName: string | undefined;
    let lastName: string | undefined;
    
    // البحث عن حقول الاسم
    const firstNameField = fields.find(f => f.type.includes('FirstName'));
    const lastNameField = fields.find(f => f.type.includes('LastName'));
    
    if (firstNameField) {
      firstName = context.gender === 'male' 
        ? getRandomItem(context.country!.maleNames)
        : getRandomItem(context.country!.femaleNames);
    }
    
    if (lastNameField) {
      lastName = getRandomItem(context.country!.lastNames);
    }
    
    const row: GeneratedData = {};
    
    for (const field of fields) {
      let value = generateFieldValue(field, context, firstName, lastName);
      
      // التعامل مع القيم الفريدة
      if (field.options?.unique && value !== null) {
        let attempts = 0;
        while (uniqueValues[field.name].has(value as string | number) && attempts < 100) {
          value = generateFieldValue(field, context, firstName, lastName);
          attempts++;
        }
        if (value !== null) {
          uniqueValues[field.name].add(value as string | number);
        }
      }
      
      row[field.name] = value;
    }
    
    data.push(row);
    
    // تحديث التقدم
    if (onProgress && i % batchSize === 0) {
      onProgress(Math.round((i / count) * 100));
    }
  }
  
  if (onProgress) {
    onProgress(100);
  }
  
  return data;
};
