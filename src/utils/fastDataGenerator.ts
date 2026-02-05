// Fast Data Generator - High Performance Data Generation Engine
// Optimized for generating millions of records quickly

import { generateEconomicContext, EconomicContext, arabCountriesEconomicData } from '../data/economicData';
import { generateTradeBalanceContext, TradeBalanceRecord } from '../data/tradeBalanceData';
import { generateInterestRateContext, InterestRateContext } from '../data/interestRatesData';
import { generateEconomicIndicatorContext } from '../data/economicIndicatorsData';
import { generateStockContext } from '../data/realStocksData';
import { generateIPOContext, IPOContext } from '../data/ipoData';
import { generateForexContext, generateConversionContext, type ForexContext, type CurrencyConversionContext } from '../data/currencyData';
import { generateEnergyContext, type EnergyContext } from '../data/energyData';
import { generateRealEstateContext } from '../data/realEstateData';

interface DataField {
  id: string;
  name: string;
  type: string;
  enabled?: boolean;
  options?: {
    min?: number;
    max?: number;
    decimals?: number;
    values?: string[];
    [key: string]: unknown;
  };
}

// Pre-cached random values for faster generation
const CACHE_SIZE = 10000;
const randomCache: number[] = new Array(CACHE_SIZE);
let cacheIndex = 0;

// Initialize random cache
for (let i = 0; i < CACHE_SIZE; i++) {
  randomCache[i] = Math.random();
}

// Fast random number generator using cache
const fastRandom = (): number => {
  if (cacheIndex >= CACHE_SIZE) cacheIndex = 0;
  return randomCache[cacheIndex++];
};

const fastRandomInt = (min: number, max: number): number => {
  return Math.floor(fastRandom() * (max - min + 1)) + min;
};

const fastPick = <T>(arr: readonly T[]): T => {
  return arr[Math.floor(fastRandom() * arr.length)];
};

// Pre-defined data arrays (cached for performance)
const ARABIC_MALE_NAMES = ['محمد', 'أحمد', 'عبدالله', 'خالد', 'سعود', 'فهد', 'عمر', 'علي', 'يوسف', 'إبراهيم', 'سلطان', 'ناصر', 'بندر', 'تركي', 'فيصل', 'عبدالرحمن', 'سعد', 'طلال', 'نايف', 'مشعل'];
const ARABIC_FEMALE_NAMES = ['فاطمة', 'نورة', 'سارة', 'ريم', 'هند', 'منى', 'لمى', 'دانة', 'جواهر', 'العنود', 'مها', 'أمل', 'ابتسام', 'وفاء', 'سمر', 'رنا', 'هيا', 'لطيفة', 'موضي', 'شيخة'];
const ARABIC_LAST_NAMES = ['القحطاني', 'العتيبي', 'الشمري', 'الحربي', 'الدوسري', 'المطيري', 'السبيعي', 'الغامدي', 'الزهراني', 'البلوي', 'العنزي', 'الرشيدي', 'السهلي', 'الخالدي', 'المالكي', 'الشهري', 'القرني', 'العسيري', 'الأحمدي', 'السعيد'];
const ENGLISH_MALE_NAMES = ['James', 'John', 'Robert', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven'];
const ENGLISH_FEMALE_NAMES = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Sarah', 'Jessica', 'Emily', 'Ashley', 'Sophia', 'Emma', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Charlotte'];
const ENGLISH_LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore'];
const CITIES_AR = ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام', 'القاهرة', 'الإسكندرية', 'دبي', 'أبوظبي', 'الكويت', 'الدوحة', 'المنامة', 'مسقط', 'عمان', 'بيروت'];
const CITIES_EN = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'London', 'Paris', 'Tokyo', 'Sydney', 'Toronto', 'Berlin', 'Madrid', 'Rome', 'Dubai', 'Singapore'];
const COMPANIES_AR = ['شركة الراجحي', 'مجموعة سابك', 'أرامكو', 'الاتصالات السعودية', 'البنك الأهلي', 'شركة المراعي', 'مجموعة صافولا', 'شركة جرير', 'البنك السعودي الفرنسي', 'شركة موبايلي'];
const COMPANIES_EN = ['Apple Inc.', 'Microsoft', 'Amazon', 'Google', 'Tesla', 'Meta', 'Netflix', 'Adobe', 'Intel', 'IBM', 'Oracle', 'Cisco', 'Samsung', 'Sony', 'LG'];
const JOBS_AR = ['مدير', 'محاسب', 'مهندس', 'طبيب', 'معلم', 'محامي', 'مبرمج', 'مصمم', 'مدير مشاريع', 'محلل بيانات', 'مسؤول مبيعات', 'مدير تسويق', 'فني', 'سكرتير', 'مستشار'];
const JOBS_EN = ['Manager', 'Accountant', 'Engineer', 'Doctor', 'Teacher', 'Lawyer', 'Developer', 'Designer', 'Project Manager', 'Data Analyst', 'Sales Rep', 'Marketing Manager', 'Technician', 'Secretary', 'Consultant'];
const DEPARTMENTS_AR = ['الموارد البشرية', 'المالية', 'التسويق', 'المبيعات', 'تقنية المعلومات', 'العمليات', 'خدمة العملاء', 'البحث والتطوير', 'الإدارة', 'المشتريات'];
const DEPARTMENTS_EN = ['Human Resources', 'Finance', 'Marketing', 'Sales', 'IT', 'Operations', 'Customer Service', 'R&D', 'Administration', 'Procurement'];
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const GENDERS_AR = ['ذكر', 'أنثى'];
const GENDERS_EN = ['Male', 'Female'];
const MARITAL_AR = ['أعزب', 'متزوج', 'مطلق', 'أرمل'];
const MARITAL_EN = ['Single', 'Married', 'Divorced', 'Widowed'];
const EDUCATION_AR = ['ثانوية', 'دبلوم', 'بكالوريوس', 'ماجستير', 'دكتوراه'];
const EDUCATION_EN = ['High School', 'Diploma', 'Bachelor', 'Master', 'PhD'];
const PRODUCTS_AR = ['هاتف ذكي', 'لابتوب', 'تلفزيون', 'ثلاجة', 'غسالة', 'مكيف', 'كاميرا', 'ساعة ذكية', 'سماعات', 'جهاز لوحي'];
const PRODUCTS_EN = ['Smartphone', 'Laptop', 'Television', 'Refrigerator', 'Washing Machine', 'Air Conditioner', 'Camera', 'Smartwatch', 'Headphones', 'Tablet'];
const CATEGORIES_AR = ['إلكترونيات', 'ملابس', 'أثاث', 'أجهزة منزلية', 'رياضة', 'طعام', 'مستحضرات تجميل', 'كتب', 'ألعاب', 'سيارات'];
const CATEGORIES_EN = ['Electronics', 'Clothing', 'Furniture', 'Appliances', 'Sports', 'Food', 'Cosmetics', 'Books', 'Toys', 'Automotive'];
const STATUS_AR = ['نشط', 'معلق', 'مكتمل', 'ملغي', 'قيد المراجعة'];
const STATUS_EN = ['Active', 'Pending', 'Completed', 'Cancelled', 'Under Review'];
const PAYMENT_AR = ['نقداً', 'بطاقة ائتمان', 'تحويل بنكي', 'شيك', 'دفع إلكتروني'];
const PAYMENT_EN = ['Cash', 'Credit Card', 'Bank Transfer', 'Check', 'E-Payment'];
const CURRENCIES = ['SAR', 'USD', 'EUR', 'GBP', 'AED', 'EGP', 'KWD', 'QAR', 'BHD', 'OMR'];
const COUNTRIES_AR = ['السعودية', 'مصر', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عمان', 'الأردن', 'لبنان', 'المغرب'];
const COUNTRIES_EN = ['Saudi Arabia', 'Egypt', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Jordan', 'Lebanon', 'Morocco'];
const EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'company.com', 'mail.com', 'email.com'];
const STREETS_AR = ['شارع الملك فهد', 'شارع العليا', 'طريق الملك عبدالله', 'شارع التحلية', 'طريق الملك سلمان', 'شارع الأمير محمد', 'طريق المدينة', 'شارع فلسطين'];
const STREETS_EN = ['Main Street', 'First Avenue', 'Park Road', 'Oak Street', 'Maple Avenue', 'Cedar Lane', 'Pine Street', 'Elm Road'];
const DISTRICTS_AR = ['العليا', 'النخيل', 'الملقا', 'الياسمين', 'الورود', 'الروضة', 'المروج', 'الصفا', 'السليمانية', 'الملز'];
const DISTRICTS_EN = ['Downtown', 'Uptown', 'Midtown', 'Westside', 'Eastside', 'Northside', 'Southside', 'Central', 'Marina', 'Heights'];

// ======================================
// قاعدة بيانات البنوك المترابطة الكاملة
// ======================================
interface BankBranch {
  name: string;
  nameEn: string;
  city: string;
  cityEn: string;
  code: string;
}

interface Bank {
  name: string;
  nameEn: string;
  code: string;
  swift: string;
  branches: BankBranch[];
}

interface CountryBankData {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyEn: string;
  currencyCode: string;
  currencySymbol: string;
  ibanLength: number;
  phoneCode: string;
  banks: Bank[];
}

const BANKS_DATABASE: CountryBankData[] = [
  {
    country: 'السعودية',
    countryEn: 'Saudi Arabia',
    countryCode: 'SA',
    currency: 'ريال سعودي',
    currencyEn: 'Saudi Riyal',
    currencyCode: 'SAR',
    currencySymbol: 'ر.س',
    ibanLength: 24,
    phoneCode: '+966',
    banks: [
      {
        name: 'البنك الأهلي السعودي',
        nameEn: 'Saudi National Bank',
        code: '10',
        swift: 'NCBKSAJE',
        branches: [
          { name: 'فرع العليا', nameEn: 'Olaya Branch', city: 'الرياض', cityEn: 'Riyadh', code: '001' },
          { name: 'فرع الملك فهد', nameEn: 'King Fahd Branch', city: 'الرياض', cityEn: 'Riyadh', code: '002' },
          { name: 'فرع طريق الملك', nameEn: 'King Road Branch', city: 'جدة', cityEn: 'Jeddah', code: '003' },
          { name: 'فرع التحلية', nameEn: 'Tahlia Branch', city: 'جدة', cityEn: 'Jeddah', code: '004' },
          { name: 'فرع الكورنيش', nameEn: 'Corniche Branch', city: 'الدمام', cityEn: 'Dammam', code: '005' },
        ]
      },
      {
        name: 'مصرف الراجحي',
        nameEn: 'Al Rajhi Bank',
        code: '80',
        swift: 'RJHISARI',
        branches: [
          { name: 'فرع العليا الرئيسي', nameEn: 'Olaya Main Branch', city: 'الرياض', cityEn: 'Riyadh', code: '001' },
          { name: 'فرع الملقا', nameEn: 'Malqa Branch', city: 'الرياض', cityEn: 'Riyadh', code: '002' },
          { name: 'فرع الروضة', nameEn: 'Rawdah Branch', city: 'جدة', cityEn: 'Jeddah', code: '003' },
          { name: 'فرع الفيصلية', nameEn: 'Faisaliah Branch', city: 'الدمام', cityEn: 'Dammam', code: '004' },
        ]
      },
      {
        name: 'بنك الرياض',
        nameEn: 'Riyad Bank',
        code: '20',
        swift: 'RIABORIX',
        branches: [
          { name: 'فرع الرياض الرئيسي', nameEn: 'Riyadh Main Branch', city: 'الرياض', cityEn: 'Riyadh', code: '001' },
          { name: 'فرع جدة', nameEn: 'Jeddah Branch', city: 'جدة', cityEn: 'Jeddah', code: '002' },
        ]
      },
    ]
  },
  {
    country: 'مصر',
    countryEn: 'Egypt',
    countryCode: 'EG',
    currency: 'جنيه مصري',
    currencyEn: 'Egyptian Pound',
    currencyCode: 'EGP',
    currencySymbol: 'ج.م',
    ibanLength: 29,
    phoneCode: '+20',
    banks: [
      {
        name: 'البنك الأهلي المصري',
        nameEn: 'National Bank of Egypt',
        code: '0003',
        swift: 'NBEGEGCX',
        branches: [
          { name: 'فرع مصر الجديدة', nameEn: 'Heliopolis Branch', city: 'القاهرة', cityEn: 'Cairo', code: '001' },
          { name: 'فرع المعادي', nameEn: 'Maadi Branch', city: 'القاهرة', cityEn: 'Cairo', code: '002' },
          { name: 'فرع سموحة', nameEn: 'Smouha Branch', city: 'الإسكندرية', cityEn: 'Alexandria', code: '003' },
        ]
      },
      {
        name: 'بنك مصر',
        nameEn: 'Banque Misr',
        code: '0002',
        swift: 'BMISEGCX',
        branches: [
          { name: 'فرع التحرير', nameEn: 'Tahrir Branch', city: 'القاهرة', cityEn: 'Cairo', code: '001' },
          { name: 'فرع مدينة نصر', nameEn: 'Nasr City Branch', city: 'القاهرة', cityEn: 'Cairo', code: '002' },
        ]
      },
      {
        name: 'البنك التجاري الدولي',
        nameEn: 'Commercial International Bank',
        code: '0010',
        swift: 'CIBEEGCX',
        branches: [
          { name: 'فرع القاهرة الرئيسي', nameEn: 'Cairo Main Branch', city: 'القاهرة', cityEn: 'Cairo', code: '001' },
          { name: 'فرع الإسكندرية', nameEn: 'Alexandria Branch', city: 'الإسكندرية', cityEn: 'Alexandria', code: '002' },
        ]
      },
    ]
  },
  {
    country: 'الإمارات',
    countryEn: 'UAE',
    countryCode: 'AE',
    currency: 'درهم إماراتي',
    currencyEn: 'UAE Dirham',
    currencyCode: 'AED',
    currencySymbol: 'د.إ',
    ibanLength: 23,
    phoneCode: '+971',
    banks: [
      {
        name: 'بنك الإمارات دبي الوطني',
        nameEn: 'Emirates NBD',
        code: '260',
        swift: 'EABORIX',
        branches: [
          { name: 'فرع دبي مول', nameEn: 'Dubai Mall Branch', city: 'دبي', cityEn: 'Dubai', code: '001' },
          { name: 'فرع مارينا', nameEn: 'Marina Branch', city: 'دبي', cityEn: 'Dubai', code: '002' },
          { name: 'فرع أبوظبي', nameEn: 'Abu Dhabi Branch', city: 'أبوظبي', cityEn: 'Abu Dhabi', code: '003' },
        ]
      },
      {
        name: 'بنك أبوظبي الأول',
        nameEn: 'First Abu Dhabi Bank',
        code: '035',
        swift: 'FABAUEA',
        branches: [
          { name: 'فرع أبوظبي الرئيسي', nameEn: 'Abu Dhabi Main Branch', city: 'أبوظبي', cityEn: 'Abu Dhabi', code: '001' },
          { name: 'فرع دبي', nameEn: 'Dubai Branch', city: 'دبي', cityEn: 'Dubai', code: '002' },
        ]
      },
      {
        name: 'بنك دبي الإسلامي',
        nameEn: 'Dubai Islamic Bank',
        code: '040',
        swift: 'DUIBAEAD',
        branches: [
          { name: 'فرع ديرة', nameEn: 'Deira Branch', city: 'دبي', cityEn: 'Dubai', code: '001' },
          { name: 'فرع جميرا', nameEn: 'Jumeirah Branch', city: 'دبي', cityEn: 'Dubai', code: '002' },
        ]
      },
    ]
  },
  {
    country: 'الكويت',
    countryEn: 'Kuwait',
    countryCode: 'KW',
    currency: 'دينار كويتي',
    currencyEn: 'Kuwaiti Dinar',
    currencyCode: 'KWD',
    currencySymbol: 'د.ك',
    ibanLength: 30,
    phoneCode: '+965',
    banks: [
      {
        name: 'بنك الكويت الوطني',
        nameEn: 'National Bank of Kuwait',
        code: 'NBOK',
        swift: 'NABORIX',
        branches: [
          { name: 'فرع المدينة', nameEn: 'City Branch', city: 'الكويت', cityEn: 'Kuwait City', code: '001' },
          { name: 'فرع السالمية', nameEn: 'Salmiya Branch', city: 'السالمية', cityEn: 'Salmiya', code: '002' },
        ]
      },
      {
        name: 'بيت التمويل الكويتي',
        nameEn: 'Kuwait Finance House',
        code: 'KFHO',
        swift: 'KFHOKWKW',
        branches: [
          { name: 'فرع الكويت الرئيسي', nameEn: 'Kuwait Main Branch', city: 'الكويت', cityEn: 'Kuwait City', code: '001' },
        ]
      },
    ]
  },
  {
    country: 'قطر',
    countryEn: 'Qatar',
    countryCode: 'QA',
    currency: 'ريال قطري',
    currencyEn: 'Qatari Riyal',
    currencyCode: 'QAR',
    currencySymbol: 'ر.ق',
    ibanLength: 29,
    phoneCode: '+974',
    banks: [
      {
        name: 'بنك قطر الوطني',
        nameEn: 'Qatar National Bank',
        code: 'QNBA',
        swift: 'QNBAQAQA',
        branches: [
          { name: 'فرع الدوحة الرئيسي', nameEn: 'Doha Main Branch', city: 'الدوحة', cityEn: 'Doha', code: '001' },
          { name: 'فرع الخليج الغربي', nameEn: 'West Bay Branch', city: 'الدوحة', cityEn: 'Doha', code: '002' },
        ]
      },
      {
        name: 'مصرف قطر الإسلامي',
        nameEn: 'Qatar Islamic Bank',
        code: 'QISB',
        swift: 'QISBQAQA',
        branches: [
          { name: 'فرع الدوحة', nameEn: 'Doha Branch', city: 'الدوحة', cityEn: 'Doha', code: '001' },
        ]
      },
    ]
  },
  {
    country: 'البحرين',
    countryEn: 'Bahrain',
    countryCode: 'BH',
    currency: 'دينار بحريني',
    currencyEn: 'Bahraini Dinar',
    currencyCode: 'BHD',
    currencySymbol: 'د.ب',
    ibanLength: 22,
    phoneCode: '+973',
    banks: [
      {
        name: 'بنك البحرين الوطني',
        nameEn: 'National Bank of Bahrain',
        code: 'NBOB',
        swift: 'NBOBHBM',
        branches: [
          { name: 'فرع المنامة الرئيسي', nameEn: 'Manama Main Branch', city: 'المنامة', cityEn: 'Manama', code: '001' },
        ]
      },
    ]
  },
  {
    country: 'عمان',
    countryEn: 'Oman',
    countryCode: 'OM',
    currency: 'ريال عماني',
    currencyEn: 'Omani Rial',
    currencyCode: 'OMR',
    currencySymbol: 'ر.ع',
    ibanLength: 23,
    phoneCode: '+968',
    banks: [
      {
        name: 'بنك مسقط',
        nameEn: 'Bank Muscat',
        code: 'BMUS',
        swift: 'BMCMOMRU',
        branches: [
          { name: 'فرع مسقط الرئيسي', nameEn: 'Muscat Main Branch', city: 'مسقط', cityEn: 'Muscat', code: '001' },
          { name: 'فرع صلالة', nameEn: 'Salalah Branch', city: 'صلالة', cityEn: 'Salalah', code: '002' },
        ]
      },
    ]
  },
  {
    country: 'الأردن',
    countryEn: 'Jordan',
    countryCode: 'JO',
    currency: 'دينار أردني',
    currencyEn: 'Jordanian Dinar',
    currencyCode: 'JOD',
    currencySymbol: 'د.أ',
    ibanLength: 30,
    phoneCode: '+962',
    banks: [
      {
        name: 'البنك العربي',
        nameEn: 'Arab Bank',
        code: 'ARAB',
        swift: 'ARABJOAX',
        branches: [
          { name: 'فرع عمان الرئيسي', nameEn: 'Amman Main Branch', city: 'عمان', cityEn: 'Amman', code: '001' },
          { name: 'فرع الشميساني', nameEn: 'Shmeisani Branch', city: 'عمان', cityEn: 'Amman', code: '002' },
        ]
      },
      {
        name: 'بنك الأردن',
        nameEn: 'Bank of Jordan',
        code: 'BJOR',
        swift: 'BJORJOAX',
        branches: [
          { name: 'فرع عمان', nameEn: 'Amman Branch', city: 'عمان', cityEn: 'Amman', code: '001' },
        ]
      },
    ]
  },
  {
    country: 'لبنان',
    countryEn: 'Lebanon',
    countryCode: 'LB',
    currency: 'ليرة لبنانية',
    currencyEn: 'Lebanese Pound',
    currencyCode: 'LBP',
    currencySymbol: 'ل.ل',
    ibanLength: 28,
    phoneCode: '+961',
    banks: [
      {
        name: 'بنك عودة',
        nameEn: 'Bank Audi',
        code: 'AUDI',
        swift: 'AUDBLBBX',
        branches: [
          { name: 'فرع بيروت الرئيسي', nameEn: 'Beirut Main Branch', city: 'بيروت', cityEn: 'Beirut', code: '001' },
        ]
      },
    ]
  },
  {
    country: 'المغرب',
    countryEn: 'Morocco',
    countryCode: 'MA',
    currency: 'درهم مغربي',
    currencyEn: 'Moroccan Dirham',
    currencyCode: 'MAD',
    currencySymbol: 'د.م',
    ibanLength: 28,
    phoneCode: '+212',
    banks: [
      {
        name: 'التجاري وفا بنك',
        nameEn: 'Attijariwafa Bank',
        code: 'ATTW',
        swift: 'BCMAMAMC',
        branches: [
          { name: 'فرع الدار البيضاء', nameEn: 'Casablanca Branch', city: 'الدار البيضاء', cityEn: 'Casablanca', code: '001' },
          { name: 'فرع الرباط', nameEn: 'Rabat Branch', city: 'الرباط', cityEn: 'Rabat', code: '002' },
        ]
      },
    ]
  },
];

// سياق البنك المترابط
interface BankingContext {
  country: string;
  countryEn: string;
  countryCode: string;
  currency: string;
  currencyEn: string;
  currencyCode: string;
  currencySymbol: string;
  bankName: string;
  bankNameEn: string;
  bankCode: string;
  swiftCode: string;
  branchName: string;
  branchNameEn: string;
  branchCode: string;
  branchCity: string;
  branchCityEn: string;
  accountNumber: string;
  iban: string;
}

// توليد رقم IBAN صحيح
const generateValidIBAN = (countryCode: string, bankCode: string, ibanLength: number): string => {
  const paddedBankCode = bankCode.padStart(4, '0');
  const accountNumber = String(fastRandomInt(1000000000, 9999999999)) + String(fastRandomInt(1000, 9999));
  const checkDigits = String(fastRandomInt(10, 99));
  let iban = `${countryCode}${checkDigits}${paddedBankCode}${accountNumber}`;
  return iban.substring(0, ibanLength);
};

// توليد سياق بنكي مترابط
const generateBankingContext = (_language: 'ar' | 'en'): BankingContext => {
  const countryData = fastPick(BANKS_DATABASE);
  const bank = fastPick(countryData.banks);
  const branch = fastPick(bank.branches);
  const accountNumber = String(fastRandomInt(1000000000, 9999999999)) + String(fastRandomInt(10, 99));
  const iban = generateValidIBAN(countryData.countryCode, bank.code, countryData.ibanLength);
  
  return {
    country: countryData.country,
    countryEn: countryData.countryEn,
    countryCode: countryData.countryCode,
    currency: countryData.currency,
    currencyEn: countryData.currencyEn,
    currencyCode: countryData.currencyCode,
    currencySymbol: countryData.currencySymbol,
    bankName: bank.name,
    bankNameEn: bank.nameEn,
    bankCode: bank.code,
    swiftCode: bank.swift,
    branchName: branch.name,
    branchNameEn: branch.nameEn,
    branchCode: branch.code,
    branchCity: branch.city,
    branchCityEn: branch.cityEn,
    accountNumber,
    iban,
  };
};

// Pre-computed current year
const CURRENT_YEAR = new Date().getFullYear();

// Fast UUID generator
const fastUUID = (): string => {
  const hex = '0123456789abcdef';
  let uuid = '';
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else if (i === 14) {
      uuid += '4';
    } else if (i === 19) {
      uuid += hex[(fastRandomInt(0, 15) & 0x3) | 0x8];
    } else {
      uuid += hex[fastRandomInt(0, 15)];
    }
  }
  return uuid;
};

// Fast email generator
const fastEmail = (name: string): string => {
  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '') || 'user';
  return `${cleanName}${fastRandomInt(1, 999)}@${fastPick(EMAIL_DOMAINS)}`;
};

// Fast phone generator
const fastPhone = (): string => {
  return `+966${fastRandomInt(50, 59)}${fastRandomInt(1000000, 9999999)}`;
};

// Fast date generator
const fastDate = (startYear: number = 2020, endYear: number = 2024): string => {
  const year = fastRandomInt(startYear, endYear);
  const month = String(fastRandomInt(1, 12)).padStart(2, '0');
  const day = String(fastRandomInt(1, 28)).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Fast birth date from age
const fastBirthDate = (age: number): string => {
  const birthYear = CURRENT_YEAR - age;
  const month = String(fastRandomInt(1, 12)).padStart(2, '0');
  const day = String(fastRandomInt(1, 28)).padStart(2, '0');
  return `${birthYear}-${month}-${day}`;
};

// تم نقل توليد IBAN لسياق البنك المترابط

// Fast credit card generator
const fastCreditCard = (): string => {
  const prefixes = ['4', '5', '37', '6'];
  let card = fastPick(prefixes);
  while (card.length < 16) {
    card += String(fastRandomInt(0, 9));
  }
  return card.substring(0, 16);
};

// Fast IP generator
const fastIP = (): string => {
  return `${fastRandomInt(1, 255)}.${fastRandomInt(0, 255)}.${fastRandomInt(0, 255)}.${fastRandomInt(1, 254)}`;
};

// سياق الأسهم المترابط
interface StockRecordContext {
  symbol: string;
  stockName: string;
  stockNameEn: string;
  sector: string;
  sectorEn: string;
  market: string;
  marketEn: string;
  currency: string;
  currencySymbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
  changeDirection: string;
  changeDirectionEn: string;
  volume: number;
  volumeFormatted: string;
  turnover: number;
  turnoverFormatted: string;
  vwap: number;
  trades: number;
  marketCap: number;
  marketCapFormatted: string;
  peRatio: number;
  pbRatio: number;
  dividendYield: number;
  eps: number;
  beta: number;
  yearHigh: number;
  yearLow: number;
  sma20: number;
  sma50: number;
  sma200: number;
  rsi: number;
  macd: number;
  support1: number;
  resistance1: number;
  trend: string;
  trendEn: string;
  signal: string;
  signalEn: string;
  strength: number;
}

// Context for maintaining consistency within a record
interface RecordContext {
  gender: 'male' | 'female';
  age: number;
  language: 'ar' | 'en';
  country: string;
  firstName: string;
  lastName: string;
  fullName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  // بيانات البنك المترابطة
  bank: BankingContext;
  // البيانات الاقتصادية المترابطة
  economic: EconomicContext;
  // بيانات الميزان التجاري المترابطة
  trade: TradeBalanceRecord;
  // بيانات أسعار الفائدة المترابطة
  interestRate: InterestRateContext;
  // بيانات المؤشرات الاقتصادية المترابطة
  economicIndicator: Record<string, unknown>;
  // بيانات الأسهم المترابطة والواقعية
  stock: StockRecordContext;
  // بيانات الاكتتابات العامة المترابطة والواقعية
  ipo: IPOContext;
  // بيانات أسعار العملات المترابطة والواقعية
  forex: ForexContext;
  // بيانات تحويل العملات المترابطة والواقعية
  conversion: CurrencyConversionContext;
  // بيانات الطاقة المترابطة والواقعية
  energy: EnergyContext;
  // بيانات العقارات المترابطة والواقعية
  realEstate: Record<string, unknown>;
}

// Generate context for a record
const generateRecordContext = (language: 'ar' | 'en'): RecordContext => {
  const gender = fastRandom() > 0.5 ? 'male' : 'female';
  const age = fastRandomInt(18, 65);
  const bankContext = generateBankingContext(language);
  const country = language === 'ar' ? bankContext.country : bankContext.countryEn;
  
  // توليد السياق الاقتصادي المترابط
  const countryCodeMap: Record<string, string> = {
    'السعودية': 'SA', 'مصر': 'EG', 'الإمارات': 'AE', 'الكويت': 'KW', 
    'قطر': 'QA', 'البحرين': 'BH', 'عمان': 'OM', 'الأردن': 'JO',
    'لبنان': 'LB', 'المغرب': 'MA'
  };
  const economicCountryCode = countryCodeMap[bankContext.country] || 
    (arabCountriesEconomicData[bankContext.countryCode] ? bankContext.countryCode : 'SA');
  const economicContext = generateEconomicContext(economicCountryCode, language);
  
  let firstName: string, lastName: string;
  if (language === 'ar') {
    firstName = gender === 'male' ? fastPick(ARABIC_MALE_NAMES) : fastPick(ARABIC_FEMALE_NAMES);
    lastName = fastPick(ARABIC_LAST_NAMES);
  } else {
    firstName = gender === 'male' ? fastPick(ENGLISH_MALE_NAMES) : fastPick(ENGLISH_FEMALE_NAMES);
    lastName = fastPick(ENGLISH_LAST_NAMES);
  }
  
  const quantity = fastRandomInt(1, 20);
  const unitPrice = fastRandomInt(10, 5000);
  
  // توليد سياق الميزان التجاري المترابط
  const tradeContext = generateTradeBalanceContext(language, economicCountryCode);
  
  // توليد سياق أسعار الفائدة المترابط
  const interestRateContext = generateInterestRateContext(economicCountryCode, language);
  
  // توليد سياق المؤشرات الاقتصادية المترابط
  const economicIndicatorContext = generateEconomicIndicatorContext(economicCountryCode, language);
  
  // توليد سياق الأسهم المترابط والواقعي
  const stockContextRaw = generateStockContext(economicCountryCode, language);
  
  // توليد سياق الاكتتابات العامة المترابط والواقعي
  const ipoContext = generateIPOContext(language, economicCountryCode);
  
  // توليد سياق أسعار العملات المترابط والواقعي
  const forexContext = generateForexContext(language);
  
  // توليد سياق تحويل العملات المترابط والواقعي
  const conversionContext = generateConversionContext(language);
  
  // توليد سياق الطاقة المترابط والواقعي
  const energyContext = generateEnergyContext(language);
  
  // توليد سياق العقارات المترابط والواقعي
  const realEstateContext = generateRealEstateContext(economicCountryCode, language);
  
  const stockContext: StockRecordContext = {
    symbol: stockContextRaw.symbol,
    stockName: stockContextRaw.stockName,
    stockNameEn: stockContextRaw.stockNameEn,
    sector: stockContextRaw.sector,
    sectorEn: stockContextRaw.sectorEn,
    market: stockContextRaw.market,
    marketEn: stockContextRaw.marketEn,
    currency: stockContextRaw.currency,
    currencySymbol: stockContextRaw.currencySymbol,
    date: stockContextRaw.date,
    open: stockContextRaw.open,
    high: stockContextRaw.high,
    low: stockContextRaw.low,
    close: stockContextRaw.close,
    previousClose: stockContextRaw.previousClose,
    change: stockContextRaw.change,
    changePercent: stockContextRaw.changePercent,
    changeDirection: stockContextRaw.changeDirection,
    changeDirectionEn: stockContextRaw.changeDirectionEn,
    volume: stockContextRaw.volume,
    volumeFormatted: stockContextRaw.volumeFormatted,
    turnover: stockContextRaw.turnover,
    turnoverFormatted: stockContextRaw.turnoverFormatted,
    vwap: stockContextRaw.vwap,
    trades: stockContextRaw.trades,
    marketCap: stockContextRaw.marketCap,
    marketCapFormatted: stockContextRaw.marketCapFormatted,
    peRatio: stockContextRaw.peRatio,
    pbRatio: stockContextRaw.pbRatio,
    dividendYield: stockContextRaw.dividendYield,
    eps: stockContextRaw.eps,
    beta: stockContextRaw.beta,
    yearHigh: stockContextRaw.yearHigh,
    yearLow: stockContextRaw.yearLow,
    sma20: stockContextRaw.sma20,
    sma50: stockContextRaw.sma50,
    sma200: stockContextRaw.sma200,
    rsi: stockContextRaw.rsi,
    macd: stockContextRaw.macd,
    support1: stockContextRaw.support1,
    resistance1: stockContextRaw.resistance1,
    trend: stockContextRaw.trend,
    trendEn: stockContextRaw.trendEn,
    signal: stockContextRaw.signal,
    signalEn: stockContextRaw.signalEn,
    strength: stockContextRaw.strength,
  };
  
  return {
    gender,
    age,
    language,
    country,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    quantity,
    unitPrice,
    subtotal: quantity * unitPrice,
    bank: bankContext,
    economic: economicContext,
    trade: tradeContext,
    interestRate: interestRateContext,
    economicIndicator: economicIndicatorContext,
    stock: stockContext,
    ipo: ipoContext,
    forex: forexContext,
    conversion: conversionContext,
    energy: energyContext,
    realEstate: realEstateContext,
  };
};

// Main field value generator - optimized for speed
const generateFieldValue = (field: DataField, context: RecordContext, index: number): unknown => {
  const { type, options } = field;
  const { language, gender, age, firstName, quantity, unitPrice, subtotal } = context;
  const isArabic = language === 'ar';
  
  // Handle custom values first
  if (options?.values && Array.isArray(options.values) && options.values.length > 0) {
    return fastPick(options.values);
  }
  
  switch (type) {
    // Personal - Arabic
    case 'arabicMaleName':
      return fastPick(ARABIC_MALE_NAMES);
    case 'arabicFemaleName':
      return fastPick(ARABIC_FEMALE_NAMES);
    case 'arabicFullName':
      return `${gender === 'male' ? fastPick(ARABIC_MALE_NAMES) : fastPick(ARABIC_FEMALE_NAMES)} ${fastPick(ARABIC_LAST_NAMES)}`;
    case 'arabicLastName':
      return fastPick(ARABIC_LAST_NAMES);
      
    // Personal - English
    case 'fullName':
      return `${gender === 'male' ? fastPick(ENGLISH_MALE_NAMES) : fastPick(ENGLISH_FEMALE_NAMES)} ${fastPick(ENGLISH_LAST_NAMES)}`;
    case 'firstName':
      return gender === 'male' ? fastPick(ENGLISH_MALE_NAMES) : fastPick(ENGLISH_FEMALE_NAMES);
    case 'lastName':
      return fastPick(ENGLISH_LAST_NAMES);
    case 'maleName':
      return fastPick(ENGLISH_MALE_NAMES);
    case 'femaleName':
      return fastPick(ENGLISH_FEMALE_NAMES);
      
    // Contact
    case 'email':
    case 'arabicEmail':
      return fastEmail(firstName);
    case 'phone':
    case 'arabicPhone':
      return fastPhone();
    case 'username':
      return `${firstName.toLowerCase()}${fastRandomInt(1, 999)}`;
    case 'password':
      return `Pass${fastRandomInt(1000, 9999)}!`;
      
    // Demographics
    case 'age':
    case 'studentAge':
      return age;
    case 'birthDate':
    case 'studentBirthDate':
      return fastBirthDate(age);
    case 'gender':
      return isArabic ? fastPick(GENDERS_AR) : fastPick(GENDERS_EN);
    case 'arabicGender':
      return fastPick(GENDERS_AR);
    case 'bloodType':
      return fastPick(BLOOD_TYPES);
    case 'maritalStatus':
      return isArabic ? fastPick(MARITAL_AR) : fastPick(MARITAL_EN);
    case 'educationLevel':
    case 'studentEducationLevel':
      return isArabic ? fastPick(EDUCATION_AR) : fastPick(EDUCATION_EN);
      
    // Location
    case 'city':
    case 'arabicCity':
      return isArabic ? fastPick(CITIES_AR) : fastPick(CITIES_EN);
    case 'country':
      return isArabic ? fastPick(COUNTRIES_AR) : fastPick(COUNTRIES_EN);
    case 'address':
    case 'arabicAddress':
    case 'fullAddress':
      return isArabic 
        ? `${fastPick(DISTRICTS_AR)}، ${fastPick(STREETS_AR)}، مبنى ${fastRandomInt(1, 200)}`
        : `${fastRandomInt(1, 999)} ${fastPick(STREETS_EN)}, ${fastPick(DISTRICTS_EN)}`;
    case 'street':
      return isArabic ? fastPick(STREETS_AR) : fastPick(STREETS_EN);
    case 'district':
      return isArabic ? fastPick(DISTRICTS_AR) : fastPick(DISTRICTS_EN);
    case 'postalCode':
      return String(fastRandomInt(10000, 99999));
    case 'latitude':
      return Number((fastRandom() * 180 - 90).toFixed(6));
    case 'longitude':
      return Number((fastRandom() * 360 - 180).toFixed(6));
      
    // Business
    case 'company':
    case 'arabicCompany':
      return isArabic ? fastPick(COMPANIES_AR) : fastPick(COMPANIES_EN);
    case 'jobTitle':
    case 'arabicJobTitle':
      return isArabic ? fastPick(JOBS_AR) : fastPick(JOBS_EN);
    case 'department':
    case 'arabicDepartment':
      return isArabic ? fastPick(DEPARTMENTS_AR) : fastPick(DEPARTMENTS_EN);
    case 'salary':
      return fastRandomInt(3000, 50000);
      
    // Products
    case 'productName':
      return isArabic ? fastPick(PRODUCTS_AR) : fastPick(PRODUCTS_EN);
    case 'category':
    case 'productCategory':
    case 'subCategory':
      return isArabic ? fastPick(CATEGORIES_AR) : fastPick(CATEGORIES_EN);
    case 'productBrand':
      return fastPick(['Apple', 'Samsung', 'Sony', 'LG', 'Nike', 'Adidas', 'Zara', 'H&M']);
    case 'productPrice':
    case 'price':
      return fastRandomInt(10, 10000);
    case 'productUnit':
      return isArabic ? fastPick(['قطعة', 'كيلو', 'لتر', 'متر', 'علبة']) : fastPick(['Piece', 'Kg', 'Liter', 'Meter', 'Box']);
    case 'sku':
      return `SKU-${fastRandomInt(10000, 99999)}`;
    case 'barcode':
      return String(fastRandomInt(1000000000000, 9999999999999));
      
    // Order/Transaction
    case 'quantity':
      return quantity;
    case 'unitPrice':
      return unitPrice;
    case 'subtotal':
      return subtotal;
    case 'discount':
    case 'discountPercent':
      return fastRandomInt(0, 30);
    case 'discountAmount':
      return Math.round(subtotal * fastRandomInt(0, 30) / 100);
    case 'tax':
    case 'taxPercent':
      return fastPick([5, 10, 14, 15]);
    case 'taxAmount':
      return Math.round(subtotal * fastPick([5, 10, 14, 15]) / 100);
    case 'totalAmount':
    case 'total':
    case 'grandTotal':
      const taxRate = fastPick([5, 10, 14, 15]);
      const discountRate = fastRandomInt(0, 30);
      const afterDiscount = subtotal * (1 - discountRate / 100);
      return Math.round(afterDiscount * (1 + taxRate / 100));
    case 'shippingCost':
      return subtotal > 500 ? 0 : fastRandomInt(10, 50);
      
    // Status
    case 'status':
    case 'orderStatus':
    case 'paymentStatus':
      return isArabic ? fastPick(STATUS_AR) : fastPick(STATUS_EN);
    case 'paymentMethod':
      return isArabic ? fastPick(PAYMENT_AR) : fastPick(PAYMENT_EN);
      
    // Finance - استخدام البيانات البنكية المترابطة من السياق
    case 'bankName':
      return isArabic ? context.bank.bankName : context.bank.bankNameEn;
    case 'branchName':
      return isArabic ? context.bank.branchName : context.bank.branchNameEn;
    case 'branchCity':
      return isArabic ? context.bank.branchCity : context.bank.branchCityEn;
    case 'branchCode':
      return context.bank.branchCode;
    case 'accountNumber':
      return context.bank.accountNumber;
    case 'iban':
      return context.bank.iban;
    case 'swiftCode':
      return context.bank.swiftCode;
    case 'bankCode':
      return context.bank.bankCode;
    case 'currency':
      return isArabic ? context.bank.currency : context.bank.currencyEn;
    case 'currencyCode':
      return context.bank.currencyCode;
    case 'currencySymbol':
      return context.bank.currencySymbol;
    case 'bankCountry':
      return isArabic ? context.bank.country : context.bank.countryEn;
    case 'bankCountryCode':
      return context.bank.countryCode;
    case 'creditCard':
    case 'creditCardNumber':
      return fastCreditCard();
    case 'cvv':
      return String(fastRandomInt(100, 999));
    case 'expiryDate':
      return `${String(fastRandomInt(1, 12)).padStart(2, '0')}/${fastRandomInt(25, 30)}`;
    case 'balance':
      return fastRandomInt(100, 1000000);
    case 'transactionAmount':
    case 'amount':
      return fastRandomInt(10, 50000);
      
    // Stock Market - بيانات أسهم حقيقية ومترابطة ومنطقية
    case 'stockSymbol':
      return context.stock.symbol;
    case 'stockName':
      return isArabic ? context.stock.stockName : context.stock.stockNameEn;
    case 'stockExchange':
    case 'stockMarket':
      return isArabic ? context.stock.market : context.stock.marketEn;
    case 'stockPrice':
    case 'stockClose':
      return context.stock.close;
    case 'stockOpen':
      return context.stock.open;
    case 'stockHigh':
      return context.stock.high;
    case 'stockLow':
      return context.stock.low;
    case 'stockPreviousClose':
      return context.stock.previousClose;
    case 'stockVolume':
      return context.stock.volume;
    case 'stockVolumeFormatted':
      return context.stock.volumeFormatted;
    case 'stockTurnover':
      return context.stock.turnover;
    case 'stockTurnoverFormatted':
      return context.stock.turnoverFormatted;
    case 'stockVwap':
      return context.stock.vwap;
    case 'stockTrades':
      return context.stock.trades;
    case 'stockChange':
      return context.stock.change;
    case 'stockChangePercent':
      return context.stock.changePercent;
    case 'stockChangeDirection':
      return isArabic ? context.stock.changeDirection : context.stock.changeDirectionEn;
    case 'stockSector':
      return isArabic ? context.stock.sector : context.stock.sectorEn;
    case 'stockCurrency':
      return context.stock.currency;
    case 'stockCurrencySymbol':
      return context.stock.currencySymbol;
    case 'stockDate':
      return context.stock.date;
    case 'stockMarketCap':
      return context.stock.marketCap;
    case 'stockMarketCapFormatted':
      return context.stock.marketCapFormatted;
    case 'stockPeRatio':
    case 'peRatio':
      return context.stock.peRatio;
    case 'stockPbRatio':
    case 'pbRatio':
      return context.stock.pbRatio;
    case 'stockDividendYield':
    case 'dividendYield':
      return context.stock.dividendYield;
    case 'stockEps':
    case 'eps':
      return context.stock.eps;
    case 'stockBeta':
    case 'beta':
      return context.stock.beta;
    case 'stockYearHigh':
    case 'yearHigh':
    case '52WeekHigh':
      return context.stock.yearHigh;
    case 'stockYearLow':
    case 'yearLow':
    case '52WeekLow':
      return context.stock.yearLow;
    // المؤشرات الفنية للأسهم
    case 'stockSma20':
    case 'sma20':
      return context.stock.sma20;
    case 'stockSma50':
    case 'sma50':
      return context.stock.sma50;
    case 'stockSma200':
    case 'sma200':
      return context.stock.sma200;
    case 'stockRsi':
    case 'rsi':
      return context.stock.rsi;
    case 'stockMacd':
    case 'macd':
      return context.stock.macd;
    case 'stockSupport':
    case 'support1':
      return context.stock.support1;
    case 'stockResistance':
    case 'resistance1':
      return context.stock.resistance1;
    case 'stockTrend':
    case 'trend':
      return isArabic ? context.stock.trend : context.stock.trendEn;
    case 'stockSignal':
    case 'tradingSignal':
      return isArabic ? context.stock.signal : context.stock.signalEn;
    case 'stockStrength':
    case 'signalStrength':
      return context.stock.strength;
      
    // Economic Data - البيانات الاقتصادية المترابطة والواقعية
    case 'gdpCountry':
    case 'economicCountry':
      return isArabic ? context.economic.countryNameAr : context.economic.countryNameEn;
    case 'gdp':
    case 'grossDomesticProduct':
      return context.economic.gdp;
    case 'gdpGrowth':
    case 'gdpGrowthRate':
      return context.economic.gdpGrowth;
    case 'gdpPerCapita':
      return context.economic.gdpPerCapita;
    case 'inflationRate':
    case 'inflation':
      return context.economic.inflation;
    case 'unemploymentRate':
    case 'unemployment':
      return context.economic.unemployment;
    case 'debtToGdp':
    case 'publicDebt':
      return context.economic.debtToGdp;
    case 'interestRate':
    case 'centralBankRate':
      return context.economic.interestRate;
    case 'tradeBalance':
      return context.economic.tradeBalance;
    case 'creditRating':
      return context.economic.creditRating;
    case 'oilProduction':
      return context.economic.oilProduction || 0;
    case 'gasProduction':
      return context.economic.gasProduction || 0;
    case 'foreignReserves':
    case 'reserves':
      return context.economic.reserves;
    case 'population':
    case 'populationMillions':
      return context.economic.population;
    case 'economicYear':
    case 'fiscalYear':
      return context.economic.year;
    case 'economicQuarter':
    case 'fiscalQuarter':
      return `Q${context.economic.quarter}`;
    case 'economicSector':
      const sector = fastPick(context.economic.sectors);
      return isArabic ? sector.name : sector.nameEn;
    case 'sectorContribution':
      return fastPick(context.economic.sectors).contribution;
    case 'sectorValue':
      return fastPick(context.economic.sectors).value;
    case 'economicCurrency':
      return context.economic.currency;
    case 'economicCurrencyCode':
      return context.economic.currencyCode;
      
    // Trade Balance - بيانات الميزان التجاري المترابطة والواقعية
    case 'tradeCountry':
      return context.trade.country;
    case 'tradeYear':
      return context.trade.year;
    case 'tradeQuarter':
      return context.trade.quarter;
    case 'tradeMonth':
      return context.trade.month;
    case 'totalExports':
    case 'exports':
      return context.trade.totalExports;
    case 'exportGrowth':
      return context.trade.exportGrowth;
    case 'topExportPartner':
      return context.trade.topExportPartner;
    case 'topExportPartnerShare':
      return context.trade.topExportPartnerShare;
    case 'topExportProduct':
      return context.trade.topExportProduct;
    case 'topExportProductValue':
      return context.trade.topExportProductValue;
    case 'topExportProductShare':
      return context.trade.topExportProductShare;
    case 'totalImports':
    case 'imports':
      return context.trade.totalImports;
    case 'importGrowth':
      return context.trade.importGrowth;
    case 'topImportPartner':
      return context.trade.topImportPartner;
    case 'topImportPartnerShare':
      return context.trade.topImportPartnerShare;
    case 'topImportProduct':
      return context.trade.topImportProduct;
    case 'topImportProductValue':
      return context.trade.topImportProductValue;
    case 'topImportProductShare':
      return context.trade.topImportProductShare;
    case 'tradeBalanceValue':
      return context.trade.tradeBalance;
    case 'tradeBalanceStatus':
      return context.trade.tradeBalanceStatus;
    case 'totalTrade':
      return context.trade.totalTrade;
    case 'tradeToGdpRatio':
      return context.trade.tradeToGdpRatio;
    case 'tradeCurrency':
      return context.trade.currency;
    case 'tradeCurrencyCode':
      return context.trade.currencyCode;
      
    // Interest Rates - بيانات أسعار الفائدة المترابطة والواقعية
    case 'interestRateCountry':
      return isArabic ? context.interestRate.country : context.interestRate.countryEn;
    case 'centralBank':
    case 'centralBankName':
      return isArabic ? context.interestRate.centralBank : context.interestRate.centralBankEn;
    case 'centralBankAbbr':
      return context.interestRate.centralBankAbbr;
    case 'baseRate':
    case 'policyRate':
    case 'keyRate':
      return context.interestRate.baseRate;
    case 'previousRate':
      return context.interestRate.previousRate;
    case 'rateChange':
      return context.interestRate.rateChange;
    case 'rateChangePercent':
      return context.interestRate.rateChangePercent;
    case 'rateDecision':
      return isArabic ? context.interestRate.decision : context.interestRate.decisionEn;
    case 'overnightRate':
      return context.interestRate.overnightRate;
    case 'lendingRate':
      return context.interestRate.lendingRate;
    case 'depositRate':
      return context.interestRate.depositRate;
    case 'interbankRateName':
      return isArabic ? context.interestRate.interbankRate : context.interestRate.interbankRateEn;
    case 'interbankRateValue':
      return context.interestRate.interbankRateValue;
    case 'tenor':
    case 'rateTenor':
      return isArabic ? context.interestRate.tenor : context.interestRate.tenorEn;
    case 'tenorDays':
      return context.interestRate.tenorDays;
    case 'reserveRequirement':
      return context.interestRate.reserveRequirement;
    case 'inflationTarget':
      return context.interestRate.inflationTarget;
    case 'currentInflation':
      return context.interestRate.currentInflation;
    case 'realInterestRate':
      return context.interestRate.realInterestRate;
    case 'spreadToUS':
    case 'spreadToFed':
      return context.interestRate.spreadToUS;
    case 'meetingDate':
    case 'rateMeetingDate':
      return context.interestRate.meetingDate;
    case 'rateYear':
      return context.interestRate.year;
    case 'rateMonth':
      return isArabic ? context.interestRate.month : context.interestRate.monthEn;
    case 'rateCurrency':
      return isArabic ? context.interestRate.currency : context.interestRate.currencyCode;
    case 'rateCurrencyCode':
      return context.interestRate.currencyCode;
      
    // Economic Indicators - المؤشرات الاقتصادية المترابطة والواقعية
    case 'indicatorCountry':
      return context.economicIndicator.indicatorCountry;
    case 'indicatorCountryCode':
      return context.economicIndicator.indicatorCountryCode;
    case 'indicatorCurrency':
      return context.economicIndicator.indicatorCurrency;
    case 'indicatorCurrencyCode':
      return context.economicIndicator.indicatorCurrencyCode;
    case 'indicatorYear':
      return context.economicIndicator.indicatorYear;
    case 'indicatorQuarter':
      return context.economicIndicator.indicatorQuarter;
    case 'indicatorMonth':
      return context.economicIndicator.indicatorMonth;
    case 'indicatorDate':
      return context.economicIndicator.indicatorDate;
    case 'indicatorPeriod':
      return context.economicIndicator.indicatorPeriod;
    case 'indicatorName':
      return context.economicIndicator.indicatorName;
    case 'indicatorCategory':
      return context.economicIndicator.indicatorCategory;
    case 'indicatorUnit':
      return context.economicIndicator.indicatorUnit;
    case 'indicatorFrequency':
      return context.economicIndicator.indicatorFrequency;
    case 'indicatorSource':
      return context.economicIndicator.indicatorSource;
    case 'indicatorDescription':
      return context.economicIndicator.indicatorDescription;
    case 'pmiManufacturing':
    case 'manufacturingPmi':
      return context.economicIndicator.pmiManufacturing;
    case 'pmiServices':
    case 'servicesPmi':
      return context.economicIndicator.pmiServices;
    case 'pmiComposite':
    case 'compositePmi':
      return context.economicIndicator.pmiComposite;
    case 'previousPmi':
      return context.economicIndicator.previousPmi;
    case 'pmiChange':
      return context.economicIndicator.pmiChange;
    case 'pmiTrend':
      return context.economicIndicator.pmiTrend;
    case 'pmiStatus':
      return context.economicIndicator.pmiStatus;
    case 'economyCondition':
      return context.economicIndicator.economyCondition;
    case 'consumerConfidence':
    case 'consumerConfidenceIndex':
      return context.economicIndicator.consumerConfidence;
    case 'businessConfidence':
    case 'businessConfidenceIndex':
      return context.economicIndicator.businessConfidence;
    case 'confidenceLevel':
      return context.economicIndicator.confidenceLevel;
    case 'indicatorUnemploymentRate':
      return context.economicIndicator.unemploymentRate;
    case 'previousUnemployment':
      return context.economicIndicator.previousUnemployment;
    case 'unemploymentChange':
      return context.economicIndicator.unemploymentChange;
    case 'laborForceParticipation':
      return context.economicIndicator.laborForceParticipation;
    case 'jobsCreated':
      return context.economicIndicator.jobsCreated;
    case 'laborMarketStatus':
      return context.economicIndicator.laborMarketStatus;
    case 'cpi':
    case 'consumerPriceIndex':
      return context.economicIndicator.cpi;
    case 'previousCpi':
      return context.economicIndicator.previousCpi;
    case 'cpiChange':
      return context.economicIndicator.cpiChange;
    case 'cpiTrend':
      return context.economicIndicator.cpiTrend;
    case 'ppi':
    case 'producerPriceIndex':
      return context.economicIndicator.ppi;
    case 'coreInflation':
      return context.economicIndicator.coreInflation;
    case 'inflationStatus':
      return context.economicIndicator.inflationStatus;
    case 'industrialProduction':
      return context.economicIndicator.industrialProduction;
    case 'capacityUtilization':
      return context.economicIndicator.capacityUtilization;
    case 'industrialStatus':
      return context.economicIndicator.industrialStatus;
    case 'retailSales':
    case 'retailSalesGrowth':
      return context.economicIndicator.retailSales;
    case 'exportsGrowth':
      return context.economicIndicator.exportsGrowth;
    case 'importsGrowth':
      return context.economicIndicator.importsGrowth;
    case 'housingStarts':
      return context.economicIndicator.housingStarts;
    case 'buildingPermits':
      return context.economicIndicator.buildingPermits;
    case 'housePriceIndex':
      return context.economicIndicator.housePriceIndex;
    case 'm2MoneySupply':
    case 'moneySupply':
      return context.economicIndicator.m2MoneySupply;
    case 'creditGrowth':
      return context.economicIndicator.creditGrowth;
    case 'currentAccountBalance':
      return context.economicIndicator.currentAccount;
    case 'currentAccountStatus':
      return context.economicIndicator.currentAccountStatus;
    case 'fdi':
    case 'foreignDirectInvestment':
      return context.economicIndicator.fdi;
    case 'overallAssessment':
      return context.economicIndicator.overallAssessment;
    case 'economicOutlook':
    case 'outlook':
      return context.economicIndicator.outlook;
      
    // IPO Data - بيانات الاكتتابات العامة المترابطة والواقعية
    case 'ipoCompanyName':
    case 'ipoCompany':
      return isArabic ? context.ipo.companyName : context.ipo.companyNameEn;
    case 'ipoSymbol':
      return context.ipo.symbol;
    case 'ipoSector':
      return isArabic ? context.ipo.sector : context.ipo.sectorEn;
    case 'ipoMarket':
    case 'ipoExchange':
      return isArabic ? context.ipo.market : context.ipo.marketEn;
    case 'ipoMarketCode':
      return context.ipo.marketCode;
    case 'ipoCountry':
      return isArabic ? context.ipo.country : context.ipo.countryEn;
    case 'ipoRegulator':
      return isArabic ? context.ipo.regulator : context.ipo.regulatorEn;
    case 'ipoCurrency':
      return context.ipo.currency;
    case 'ipoCurrencySymbol':
      return context.ipo.currencySymbol;
    case 'ipoOfferPrice':
    case 'offerPrice':
      return context.ipo.offerPrice;
    case 'ipoPriceRangeLow':
    case 'priceRangeLow':
      return context.ipo.priceRangeLow;
    case 'ipoPriceRangeHigh':
    case 'priceRangeHigh':
      return context.ipo.priceRangeHigh;
    case 'ipoSharesOffered':
    case 'sharesOffered':
      return context.ipo.sharesOffered;
    case 'ipoSharesOfferedPercent':
    case 'sharesOfferedPercent':
      return context.ipo.sharesOfferedPercent;
    case 'ipoTotalShares':
    case 'totalShares':
      return context.ipo.totalShares;
    case 'ipoValuation':
    case 'valuation':
      return context.ipo.valuation;
    case 'ipoMarketCap':
    case 'marketCapAtOffer':
      return context.ipo.marketCapAtOffer;
    case 'ipoPeRatio':
      return context.ipo.peRatio;
    case 'ipoPbRatio':
      return context.ipo.pbRatio;
    case 'ipoInstitutionalPercent':
    case 'institutionalPercent':
      return context.ipo.institutionalPercent;
    case 'ipoRetailPercent':
    case 'retailPercent':
      return context.ipo.retailPercent;
    case 'ipoMinSubscription':
    case 'minSubscription':
      return context.ipo.minSubscription;
    case 'ipoMaxSubscription':
    case 'maxSubscription':
      return context.ipo.maxSubscription;
    case 'ipoSubscriptionMultiple':
    case 'subscriptionMultiple':
      return context.ipo.subscriptionMultiple;
    case 'ipoSubscriptionStart':
    case 'subscriptionStartDate':
      return context.ipo.subscriptionStartDate;
    case 'ipoSubscriptionEnd':
    case 'subscriptionEndDate':
      return context.ipo.subscriptionEndDate;
    case 'ipoAllocationDate':
    case 'allocationDate':
      return context.ipo.allocationDate;
    case 'ipoListingDate':
    case 'listingDate':
      return context.ipo.listingDate;
    case 'ipoRefundDate':
    case 'refundDate':
      return context.ipo.refundDate;
    case 'ipoOversubscriptionRetail':
    case 'oversubscriptionRetail':
      return context.ipo.oversubscriptionRetail;
    case 'ipoOversubscriptionInstitutional':
    case 'oversubscriptionInstitutional':
      return context.ipo.oversubscriptionInstitutional;
    case 'ipoTotalOversubscription':
    case 'totalOversubscription':
      return context.ipo.totalOversubscription;
    case 'ipoSubscribersCount':
    case 'subscribersCount':
      return context.ipo.subscribersCount;
    case 'ipoAmountRaised':
    case 'amountRaised':
      return context.ipo.amountRaised;
    case 'ipoFirstDayOpen':
    case 'firstDayOpen':
      return context.ipo.firstDayOpen;
    case 'ipoFirstDayHigh':
    case 'firstDayHigh':
      return context.ipo.firstDayHigh;
    case 'ipoFirstDayLow':
    case 'firstDayLow':
      return context.ipo.firstDayLow;
    case 'ipoFirstDayClose':
    case 'firstDayClose':
      return context.ipo.firstDayClose;
    case 'ipoFirstDayChange':
    case 'firstDayChange':
      return context.ipo.firstDayChange;
    case 'ipoFirstDayChangePercent':
    case 'firstDayChangePercent':
      return context.ipo.firstDayChangePercent;
    case 'ipoFirstDayVolume':
    case 'firstDayVolume':
      return context.ipo.firstDayVolume;
    case 'ipoFirstDayResult':
    case 'firstDayResult':
      return isArabic ? context.ipo.firstDayResult : context.ipo.firstDayResultEn;
    case 'ipoCurrentPrice':
      return context.ipo.currentPrice;
    case 'ipoChangeFromOffer':
    case 'changeFromOffer':
      return context.ipo.changeFromOffer;
    case 'ipoChangeFromOfferPercent':
    case 'changeFromOfferPercent':
      return context.ipo.changeFromOfferPercent;
    case 'ipoLeadUnderwriter':
    case 'leadUnderwriter':
      return isArabic ? context.ipo.leadUnderwriter : context.ipo.leadUnderwriterEn;
    case 'ipoFinancialAdvisor':
    case 'financialAdvisor':
      return isArabic ? context.ipo.financialAdvisor : context.ipo.financialAdvisorEn;
    case 'ipoLegalAdvisor':
    case 'legalAdvisor':
      return context.ipo.legalAdvisor;
    case 'ipoLockupPeriod':
    case 'lockupPeriod':
      return context.ipo.lockupPeriod;
    case 'ipoLockupEndDate':
    case 'lockupEndDate':
      return context.ipo.lockupEndDate;
    case 'ipoStatus':
      return isArabic ? context.ipo.status : context.ipo.statusEn;
    case 'ipoYear':
      return context.ipo.ipoYear;
    case 'ipoQuarter':
      return context.ipo.ipoQuarter;
      
    // Forex Data - بيانات أسعار العملات المترابطة والواقعية
    case 'currencyPair':
    case 'forexPair':
      return context.forex.pair.pair;
    case 'baseCurrency':
      return context.forex.baseCurrency.code;
    case 'baseCurrencyName':
      return isArabic ? context.forex.baseCurrency.nameAr : context.forex.baseCurrency.nameEn;
    case 'quoteCurrency':
      return context.forex.quoteCurrency.code;
    case 'quoteCurrencyName':
      return isArabic ? context.forex.quoteCurrency.nameAr : context.forex.quoteCurrency.nameEn;
    case 'exchangeRate':
    case 'forexRate':
    case 'rate':
      return context.forex.rate;
    case 'bidPrice':
    case 'forexBid':
      return context.forex.bid;
    case 'askPrice':
    case 'forexAsk':
      return context.forex.ask;
    case 'midPrice':
    case 'forexMid':
      return context.forex.mid;
    case 'forexSpread':
    case 'spread':
      return context.forex.spread;
    case 'spreadPips':
    case 'pips':
      return context.forex.spreadPips;
    case 'forexOpen':
      return context.forex.open;
    case 'forexHigh':
      return context.forex.high;
    case 'forexLow':
      return context.forex.low;
    case 'forexClose':
      return context.forex.close;
    case 'forexPreviousClose':
      return context.forex.previousClose;
    case 'forexChange':
      return context.forex.change;
    case 'forexChangePercent':
      return context.forex.changePercent;
    case 'forexVolume':
      return context.forex.volume;
    case 'forexSession':
    case 'tradingSession':
      return context.forex.session;
    case 'forexTrend':
      return context.forex.trend;
    case 'forexTimestamp':
      return context.forex.timestamp;
    case 'forexDate':
      return context.forex.date;
    case 'forexTime':
      return context.forex.time;
    case 'exchangeCompany':
    case 'exchangeHouse':
      return isArabic ? context.forex.exchangeCompany.nameAr : context.forex.exchangeCompany.nameEn;
    case 'pairCategory':
      return context.forex.pair.category;
    case 'pairVolatility':
      return context.forex.pair.volatility;
    case 'baseCurrencySymbol':
      return context.forex.baseCurrency.symbol;
    case 'quoteCurrencySymbol':
      return context.forex.quoteCurrency.symbol;
    case 'baseCurrencyCountry':
      return isArabic ? context.forex.baseCurrency.country : context.forex.baseCurrency.countryEn;
    case 'quoteCurrencyCountry':
      return isArabic ? context.forex.quoteCurrency.country : context.forex.quoteCurrency.countryEn;
    case 'baseCurrencyFlag':
      return context.forex.baseCurrency.flag;
    case 'quoteCurrencyFlag':
      return context.forex.quoteCurrency.flag;
      
    // Currency Conversion - بيانات تحويل العملات المترابطة والواقعية
    case 'conversionFromCurrency':
      return context.conversion.fromCurrency.code;
    case 'conversionFromCurrencyName':
      return isArabic ? context.conversion.fromCurrency.nameAr : context.conversion.fromCurrency.nameEn;
    case 'conversionToCurrency':
      return context.conversion.toCurrency.code;
    case 'conversionToCurrencyName':
      return isArabic ? context.conversion.toCurrency.nameAr : context.conversion.toCurrency.nameEn;
    case 'conversionAmount':
      return context.conversion.amount;
    case 'conversionRate':
      return context.conversion.rate;
    case 'convertedAmount':
      return context.conversion.convertedAmount;
    case 'conversionFee':
      return context.conversion.fee;
    case 'conversionFeePercent':
      return context.conversion.feePercent;
    case 'conversionTotalCost':
      return context.conversion.totalCost;
    case 'conversionNetAmount':
      return context.conversion.netAmount;
    case 'conversionExchangeCompany':
      return isArabic ? context.conversion.exchangeCompany.nameAr : context.conversion.exchangeCompany.nameEn;
    case 'conversionTransferTime':
      return context.conversion.transferTime;
    case 'conversionDate':
      return context.conversion.date;
    case 'conversionReferenceNumber':
      return context.conversion.referenceNumber;
      
    // Energy Data - بيانات الطاقة المترابطة والواقعية
    // النفط
    case 'oilType':
    case 'crudeOilType':
      return isArabic ? context.energy.oilType.nameAr : context.energy.oilType.nameEn;
    case 'oilCode':
    case 'crudeOilCode':
      return context.energy.oilType.code;
    case 'oilCategory':
      return context.energy.oilType.category;
    case 'oilApiGravity':
    case 'apiGravity':
      return context.energy.oilType.apiGravity;
    case 'oilSulfurContent':
    case 'sulfurContent':
      return context.energy.oilType.sulfurContent;
    case 'oilSource':
      return context.energy.oilType.source;
    case 'oilRegion':
      return context.energy.oilType.region;
    case 'oilOpen':
    case 'oilOpenPrice':
      return context.energy.oilOHLC.open;
    case 'oilHigh':
    case 'oilHighPrice':
      return context.energy.oilOHLC.high;
    case 'oilLow':
    case 'oilLowPrice':
      return context.energy.oilOHLC.low;
    case 'oilClose':
    case 'oilClosePrice':
    case 'oilPrice':
      return context.energy.oilOHLC.close;
    case 'oilPreviousClose':
      return context.energy.oilOHLC.previousClose;
    case 'oilChange':
      return context.energy.oilOHLC.change;
    case 'oilChangePercent':
      return context.energy.oilOHLC.changePercent;
    case 'oilVolume':
      return context.energy.oilVolume;
    case 'oilValue':
    case 'oilTurnover':
      return context.energy.oilValue;
    case 'oilUnit':
      return isArabic ? 'برميل' : 'Barrel';
    case 'oilCurrency':
      return 'USD';
      
    // الغاز الطبيعي
    case 'gasType':
    case 'naturalGasType':
      return isArabic ? context.energy.gasType.nameAr : context.energy.gasType.nameEn;
    case 'gasCode':
      return context.energy.gasType.code;
    case 'gasSource':
      return context.energy.gasType.source;
    case 'gasRegion':
      return context.energy.gasType.region;
    case 'gasOpen':
    case 'gasOpenPrice':
      return context.energy.gasOHLC.open;
    case 'gasHigh':
    case 'gasHighPrice':
      return context.energy.gasOHLC.high;
    case 'gasLow':
    case 'gasLowPrice':
      return context.energy.gasOHLC.low;
    case 'gasClose':
    case 'gasClosePrice':
    case 'gasPrice':
      return context.energy.gasOHLC.close;
    case 'gasPreviousClose':
      return context.energy.gasOHLC.previousClose;
    case 'gasChange':
      return context.energy.gasOHLC.change;
    case 'gasChangePercent':
      return context.energy.gasOHLC.changePercent;
    case 'gasVolume':
      return context.energy.gasVolume;
    case 'gasValue':
    case 'gasTurnover':
      return context.energy.gasValue;
    case 'gasUnit':
      return context.energy.gasType.unit;
      
    // المنتجات المكررة
    case 'refinedProduct':
    case 'refinedProductName':
      return isArabic ? context.energy.refinedProduct.nameAr : context.energy.refinedProduct.nameEn;
    case 'refinedProductCode':
      return context.energy.refinedProduct.code;
    case 'refinedProductCategory':
      return context.energy.refinedProduct.category;
    case 'refinedProductPrice':
      return context.energy.refinedOHLC.close;
    case 'refinedProductOpen':
      return context.energy.refinedOHLC.open;
    case 'refinedProductHigh':
      return context.energy.refinedOHLC.high;
    case 'refinedProductLow':
      return context.energy.refinedOHLC.low;
    case 'refinedProductChange':
      return context.energy.refinedOHLC.change;
    case 'refinedProductChangePercent':
      return context.energy.refinedOHLC.changePercent;
    case 'refinedProductUnit':
      return context.energy.refinedProduct.unit;
    case 'refineryMargin':
    case 'crackSpread':
      return context.energy.refineryMargin;
    case 'refinedYieldPercent':
      return context.energy.refinedProduct.yieldFromCrude;
      
    // الكهرباء
    case 'electricityMarket':
    case 'powerMarket':
      return isArabic ? context.energy.electricityMarket.nameAr : context.energy.electricityMarket.nameEn;
    case 'electricityMarketCode':
      return context.energy.electricityMarket.code;
    case 'electricityCountry':
      return context.energy.electricityMarket.country;
    case 'electricityPrice':
    case 'powerPrice':
      return context.energy.electricityPrice;
    case 'electricityPeakPrice':
    case 'peakPrice':
      return context.energy.electricityMarket.peakPrice;
    case 'electricityOffPeakPrice':
    case 'offPeakPrice':
      return context.energy.electricityMarket.offPeakPrice;
    case 'electricityBaseLoadPrice':
    case 'baseLoadPrice':
      return context.energy.electricityMarket.baseLoadPrice;
    case 'isPeakHour':
      return context.energy.isPeakHour;
    case 'peakHours':
      return context.energy.electricityMarket.peakHours;
    case 'electricityUnit':
    case 'powerUnit':
      return context.energy.electricityMarket.unit;
    case 'electricityCurrency':
    case 'powerCurrency':
      return context.energy.electricityMarket.currency;
    case 'electricityDemand':
    case 'powerDemand':
      return context.energy.demand;
      
    // الطاقة المتجددة
    case 'renewableType':
    case 'renewableEnergyType':
      return isArabic ? context.energy.renewable.nameAr : context.energy.renewable.nameEn;
    case 'renewableCode':
      return context.energy.renewable.code;
    case 'renewableCategory':
      return context.energy.renewable.type;
    case 'renewablePrice':
      return context.energy.renewablePrice;
    case 'renewableBasePrice':
      return context.energy.renewable.basePrice;
    case 'renewableUnit':
      return context.energy.renewable.unit;
    case 'renewableCapacityFactor':
    case 'capacityFactor':
      return context.energy.renewable.capacityFactor;
    case 'renewableCo2Avoided':
    case 'co2Avoided':
      return context.energy.renewable.co2Avoided;
    case 'renewableCapacityMW':
    case 'capacityMW':
      return context.energy.capacityMW;
      
    // الفحم
    case 'coalType':
    case 'coalName':
      return isArabic ? context.energy.coal.nameAr : context.energy.coal.nameEn;
    case 'coalCode':
      return context.energy.coal.code;
    case 'coalCategory':
      return context.energy.coal.type;
    case 'coalPrice':
      return context.energy.coalOHLC.close;
    case 'coalOpen':
      return context.energy.coalOHLC.open;
    case 'coalHigh':
      return context.energy.coalOHLC.high;
    case 'coalLow':
      return context.energy.coalOHLC.low;
    case 'coalChange':
      return context.energy.coalOHLC.change;
    case 'coalChangePercent':
      return context.energy.coalOHLC.changePercent;
    case 'coalUnit':
      return context.energy.coal.unit;
    case 'coalCalorificValue':
    case 'calorificValue':
      return context.energy.coal.calorificValue;
    case 'coalSource':
      return context.energy.coal.source;
      
    // معلومات الفترة
    case 'energyYear':
      return context.energy.year;
    case 'energyMonth':
      return context.energy.month;
    case 'energyQuarter':
      return context.energy.quarter;
    case 'energyContract':
      return context.energy.contract;
      
    // Real Estate Data - بيانات العقارات المترابطة والواقعية
    case 'propertyId':
      return context.realEstate.propertyId;
    case 'propertyType':
      return context.realEstate.propertyType;
    case 'propertyCity':
      return context.realEstate.city;
    case 'propertyDistrict':
      return context.realEstate.district;
    case 'propertyAddress':
    case 'propertyFullAddress':
      return context.realEstate.fullAddress;
    case 'propertyArea':
    case 'area':
      return context.realEstate.area;
    case 'areaUnit':
      return context.realEstate.areaUnit;
    case 'bedrooms':
    case 'bedroomCount':
      return context.realEstate.bedrooms;
    case 'bathrooms':
    case 'bathroomCount':
      return context.realEstate.bathrooms;
    case 'floor':
    case 'floorNumber':
      return context.realEstate.floor;
    case 'totalFloors':
      return context.realEstate.totalFloors;
    case 'unitNumber':
      return context.realEstate.unitNumber;
    case 'pricePerSqm':
    case 'pricePerMeter':
      return context.realEstate.pricePerSqm;
    case 'propertyPrice':
    case 'totalPrice':
      return context.realEstate.totalPrice;
    case 'priceFormatted':
      return context.realEstate.priceFormatted;
    case 'monthlyRent':
    case 'rentPrice':
      return context.realEstate.monthlyRent;
    case 'annualRent':
    case 'yearlyRent':
      return context.realEstate.annualRent;
    case 'rentFormatted':
      return context.realEstate.rentFormatted;
    case 'annualRentFormatted':
      return context.realEstate.annualRentFormatted;
    case 'rentYield':
    case 'rentalYield':
      return context.realEstate.rentYield;
    case 'propertyCurrency':
      return context.realEstate.currency;
    case 'propertyCurrencySymbol':
      return context.realEstate.currencySymbol;
    case 'propertyCondition':
    case 'condition':
      return context.realEstate.condition;
    case 'finishing':
    case 'finishingType':
      return context.realEstate.finishing;
    case 'view':
    case 'propertyView':
      return context.realEstate.view;
    case 'buildYear':
    case 'yearBuilt':
      return context.realEstate.buildYear;
    case 'buildingAge':
    case 'propertyAge':
      return context.realEstate.buildingAge;
    case 'parking':
    case 'parkingSpaces':
      return context.realEstate.parking;
    case 'hasGarden':
      return context.realEstate.hasGarden;
    case 'hasPool':
      return context.realEstate.hasPool;
    case 'buildingAmenities':
      return (context.realEstate.buildingAmenities as string[]).join('، ');
    case 'unitAmenities':
      return (context.realEstate.unitAmenities as string[]).join('، ');
    case 'propertyPurpose':
    case 'purpose':
      return context.realEstate.purpose;
    case 'agency':
    case 'realEstateAgency':
      return context.realEstate.agency;
    case 'propertyTier':
    case 'tier':
      return context.realEstate.tier;
    case 'tierLabel':
      return context.realEstate.tierLabel;
      
    // Dates
    case 'date':
    case 'pastDate':
      return fastDate(2020, 2024);
    case 'futureDate':
      return fastDate(2025, 2027);
    case 'startDate':
    case 'contractStartDate':
    case 'subscriptionStartDate':
    case 'projectStartDate':
    case 'leaseStartDate':
    case 'employmentStartDate':
      return fastDate(2023, 2024);
    case 'endDate':
    case 'contractEndDate':
    case 'subscriptionEndDate':
    case 'projectEndDate':
    case 'leaseEndDate':
    case 'employmentEndDate':
      return fastDate(2024, 2025);
    case 'datetime':
    case 'timestamp':
      return `${fastDate()} ${String(fastRandomInt(0, 23)).padStart(2, '0')}:${String(fastRandomInt(0, 59)).padStart(2, '0')}:${String(fastRandomInt(0, 59)).padStart(2, '0')}`;
    case 'time':
      return `${String(fastRandomInt(0, 23)).padStart(2, '0')}:${String(fastRandomInt(0, 59)).padStart(2, '0')}`;
    case 'durationDays':
      return fastRandomInt(90, 365);
    case 'durationMonths':
      return fastRandomInt(3, 12);
      
    // IDs
    case 'uuid':
    case 'id':
      return fastUUID();
    case 'number':
      const min = options?.min ?? 1;
      const max = options?.max ?? 1000;
      return fastRandomInt(min, max);
    case 'decimal':
      const dMin = options?.min ?? 0;
      const dMax = options?.max ?? 1000;
      const decimals = options?.decimals ?? 2;
      return Number((fastRandom() * (dMax - dMin) + dMin).toFixed(decimals));
    case 'percentage':
      return fastRandomInt(0, 100);
    case 'nationalId':
    case 'idNumber':
      return String(fastRandomInt(1000000000, 2999999999));
    case 'passportNumber':
      return `${String.fromCharCode(65 + fastRandomInt(0, 25))}${fastRandomInt(10000000, 99999999)}`;
    case 'licenseNumber':
      return `DL${fastRandomInt(100000, 999999)}`;
      
    // Tech
    case 'ip':
    case 'ipAddress':
      return fastIP();
    case 'mac':
    case 'macAddress':
      return Array.from({ length: 6 }, () => fastRandomInt(0, 255).toString(16).padStart(2, '0')).join(':');
    case 'url':
    case 'website':
      return `https://www.${firstName.toLowerCase()}${fastRandomInt(1, 999)}.com`;
    case 'domain':
      return `${firstName.toLowerCase()}.com`;
    case 'avatar':
    case 'image':
      return `https://i.pravatar.cc/150?u=${index}`;
    case 'color':
    case 'hexColor':
      return `#${fastRandomInt(0, 16777215).toString(16).padStart(6, '0')}`;
      
    // Text
    case 'text':
    case 'sentence':
    case 'paragraph':
      return isArabic
        ? 'هذا نص تجريبي يستخدم لأغراض الاختبار والتطوير.'
        : 'This is sample text used for testing and development purposes.';
    case 'word':
      return isArabic ? fastPick(['اختبار', 'تجربة', 'بيانات', 'نموذج', 'عينة']) : fastPick(['test', 'sample', 'data', 'model', 'example']);
    case 'description':
      return isArabic
        ? 'وصف تفصيلي للمنتج أو الخدمة المقدمة.'
        : 'Detailed description of the product or service.';
      
    // Boolean
    case 'boolean':
      return fastRandom() > 0.5;
    case 'yesNo':
      return isArabic ? (fastRandom() > 0.5 ? 'نعم' : 'لا') : (fastRandom() > 0.5 ? 'Yes' : 'No');
      
    // Rating
    case 'rating':
      return fastRandomInt(1, 5);
    case 'likert':
      return fastRandomInt(1, 5);
    case 'nps':
      return fastRandomInt(0, 10);
      
    // Custom type handling
    case 'custom':
      if (options?.values && Array.isArray(options.values) && options.values.length > 0) {
        return fastPick(options.values);
      }
      return `Value_${index}`;
      
    // Default - analyze field name for smart generation
    default:
      return generateByFieldName(type, field.name, isArabic, index, context);
  }
};

// Smart generation based on field name
const generateByFieldName = (type: string, name: string, isArabic: boolean, index: number, context: RecordContext): unknown => {
  const lowerName = name.toLowerCase();
  const lowerType = type.toLowerCase();
  
  if (lowerName.includes('name') || lowerType.includes('name')) {
    return context.fullName;
  }
  if (lowerName.includes('email') || lowerType.includes('email')) {
    return fastEmail(context.firstName);
  }
  if (lowerName.includes('phone') || lowerType.includes('phone')) {
    return fastPhone();
  }
  if (lowerName.includes('date') || lowerType.includes('date')) {
    return fastDate();
  }
  if (lowerName.includes('price') || lowerName.includes('amount') || lowerName.includes('cost')) {
    return fastRandomInt(10, 10000);
  }
  if (lowerName.includes('quantity') || lowerName.includes('qty') || lowerName.includes('count')) {
    return fastRandomInt(1, 100);
  }
  if (lowerName.includes('percent') || lowerName.includes('rate')) {
    return fastRandomInt(0, 100);
  }
  if (lowerName.includes('id') || lowerName.includes('code') || lowerName.includes('number')) {
    return fastRandomInt(1000, 999999);
  }
  if (lowerName.includes('status')) {
    return isArabic ? fastPick(STATUS_AR) : fastPick(STATUS_EN);
  }
  if (lowerName.includes('city')) {
    return isArabic ? fastPick(CITIES_AR) : fastPick(CITIES_EN);
  }
  if (lowerName.includes('country')) {
    return isArabic ? fastPick(COUNTRIES_AR) : fastPick(COUNTRIES_EN);
  }
  if (lowerName.includes('address')) {
    return isArabic 
      ? `${fastPick(DISTRICTS_AR)}، ${fastPick(STREETS_AR)}`
      : `${fastRandomInt(1, 999)} ${fastPick(STREETS_EN)}`;
  }
  if (lowerName.includes('company')) {
    return isArabic ? fastPick(COMPANIES_AR) : fastPick(COMPANIES_EN);
  }
  if (lowerName.includes('job') || lowerName.includes('title') || lowerName.includes('position')) {
    return isArabic ? fastPick(JOBS_AR) : fastPick(JOBS_EN);
  }
  if (lowerName.includes('department') || lowerName.includes('dept')) {
    return isArabic ? fastPick(DEPARTMENTS_AR) : fastPick(DEPARTMENTS_EN);
  }
  if (lowerName.includes('product')) {
    return isArabic ? fastPick(PRODUCTS_AR) : fastPick(PRODUCTS_EN);
  }
  if (lowerName.includes('category')) {
    return isArabic ? fastPick(CATEGORIES_AR) : fastPick(CATEGORIES_EN);
  }
  if (lowerName.includes('bank')) {
    return isArabic ? context.bank.bankName : context.bank.bankNameEn;
  }
  if (lowerName.includes('currency')) {
    return fastPick(CURRENCIES);
  }
  if (lowerName.includes('description') || lowerName.includes('desc') || lowerName.includes('note')) {
    return isArabic ? 'ملاحظات إضافية' : 'Additional notes';
  }
  
  // Default: return index-based value
  return `${isArabic ? 'قيمة' : 'Value'}_${index + 1}`;
};

// Main generation function - optimized for speed
export const generateFastData = (
  fields: DataField[],
  count: number,
  language: 'ar' | 'en' = 'ar',
  onProgress?: (progress: number) => void
): Record<string, unknown>[] => {
  const data: Record<string, unknown>[] = new Array(count);
  const progressInterval = Math.max(1, Math.floor(count / 100));
  
  for (let i = 0; i < count; i++) {
    // Generate context for this record
    const context = generateRecordContext(language);
    
    // Generate record
    const record: Record<string, unknown> = {};
    for (const field of fields) {
      if (field.enabled !== false) {
        record[field.name] = generateFieldValue(field, context, i);
      }
    }
    data[i] = record;
    
    // Report progress
    if (onProgress && (i % progressInterval === 0 || i === count - 1)) {
      onProgress(Math.round(((i + 1) / count) * 100));
    }
  }
  
  return data;
};

// Batch generation for very large datasets
export const generateFastDataBatch = async (
  fields: DataField[],
  count: number,
  language: 'ar' | 'en' = 'ar',
  batchSize: number = 10000,
  onProgress?: (progress: number) => void
): Promise<Record<string, unknown>[]> => {
  const data: Record<string, unknown>[] = [];
  let processed = 0;
  
  while (processed < count) {
    const currentBatch = Math.min(batchSize, count - processed);
    const batchData = generateFastData(fields, currentBatch, language);
    data.push(...batchData);
    processed += currentBatch;
    
    if (onProgress) {
      onProgress(Math.round((processed / count) * 100));
    }
    
    // Allow UI to update
    await new Promise(resolve => setTimeout(resolve, 0));
  }
  
  return data;
};

export default { generateFastData, generateFastDataBatch };
