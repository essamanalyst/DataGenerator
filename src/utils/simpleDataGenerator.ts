import * as RealFinance from '../data/realWorldFinancialData';
import { MARKETS, getMarketByCountry } from '../data/stocksByMarket';
import { getCityWithAddress } from '../data/addressData';
import { getRandomProduct, generateSKU, generateBarcode } from '../data/productsData';
import { generateBankContext, BankContext } from '../data/banksData';

// Country Data Interface
export interface CountryData {
  code: string;
  name: string;
  nameEn: string;
  flag: string;
  phoneCode: string;
  currency: string;
  cities: string[];
  maleNames: string[];
  femaleNames: string[];
  lastNames: string[];
  companies: string[];
  universities: string[];
  banks: string[];
}

// Countries Database
const countriesData: Record<string, CountryData> = {
  SA: {
    code: 'SA',
    name: 'السعودية',
    nameEn: 'Saudi Arabia',
    flag: '🇸🇦',
    phoneCode: '+966',
    currency: 'SAR',
    cities: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الطائف', 'تبوك', 'أبها', 'القصيم'],
    maleNames: ['محمد', 'عبدالله', 'فهد', 'سعود', 'خالد', 'أحمد', 'عبدالرحمن', 'سلطان', 'ناصر', 'بندر', 'تركي', 'عبدالعزيز'],
    femaleNames: ['نورة', 'سارة', 'فاطمة', 'منيرة', 'هيفاء', 'ريم', 'لمياء', 'العنود', 'مشاعل', 'أميرة', 'دلال', 'هند'],
    lastNames: ['القحطاني', 'العتيبي', 'الشمري', 'الدوسري', 'الحربي', 'الغامدي', 'الزهراني', 'المطيري', 'السبيعي', 'العنزي'],
    companies: ['أرامكو', 'سابك', 'الراجحي', 'مجموعة بن لادن', 'جرير', 'المراعي', 'اتصالات STC', 'بنك الأهلي', 'الفيصلية'],
    universities: ['جامعة الملك سعود', 'جامعة الملك عبدالعزيز', 'جامعة الإمام', 'جامعة الملك فهد للبترول'],
    banks: ['الراجحي', 'الأهلي', 'سامبا', 'الرياض', 'البلاد', 'الإنماء', 'الجزيرة']
  },
  EG: {
    code: 'EG',
    name: 'مصر',
    nameEn: 'Egypt',
    flag: '🇪🇬',
    phoneCode: '+20',
    currency: 'EGP',
    cities: ['القاهرة', 'الإسكندرية', 'الجيزة', 'شرم الشيخ', 'الأقصر', 'أسوان', 'المنصورة', 'طنطا', 'بورسعيد', 'السويس'],
    maleNames: ['أحمد', 'محمد', 'محمود', 'علي', 'حسن', 'عمر', 'يوسف', 'إبراهيم', 'خالد', 'طارق', 'مصطفى', 'كريم'],
    femaleNames: ['فاطمة', 'نورهان', 'سلمى', 'مريم', 'ياسمين', 'هبة', 'منى', 'دينا', 'رانيا', 'شيماء', 'إيمان', 'نادية'],
    lastNames: ['الشناوي', 'النجار', 'السيد', 'عبدالحميد', 'رمضان', 'حسين', 'إبراهيم', 'محمود', 'عبدالله', 'البنا'],
    companies: ['أوراسكوم', 'طلعت مصطفى', 'المقاولون العرب', 'السويدي', 'جهينة', 'إعمار مصر', 'سوديك', 'بالم هيلز'],
    universities: ['جامعة القاهرة', 'جامعة عين شمس', 'جامعة الإسكندرية', 'الجامعة الأمريكية بالقاهرة'],
    banks: ['الأهلي المصري', 'مصر', 'QNB الأهلي', 'CIB', 'البركة', 'الإسكندرية']
  },
  AE: {
    code: 'AE',
    name: 'الإمارات',
    nameEn: 'UAE',
    flag: '🇦🇪',
    phoneCode: '+971',
    currency: 'AED',
    cities: ['دبي', 'أبوظبي', 'الشارقة', 'العين', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين'],
    maleNames: ['راشد', 'سلطان', 'محمد', 'أحمد', 'خالد', 'سعيد', 'عبدالله', 'حمدان', 'منصور', 'ماجد'],
    femaleNames: ['موزة', 'شيخة', 'فاطمة', 'مريم', 'عائشة', 'لطيفة', 'حصة', 'سلامة', 'علياء', 'نورة'],
    lastNames: ['المنصوري', 'الكتبي', 'النعيمي', 'الشامسي', 'المزروعي', 'الفلاسي', 'الهاشمي', 'السويدي'],
    companies: ['إعمار', 'أبوظبي الوطنية للطاقة', 'دبي القابضة', 'اتصالات', 'طيران الإمارات', 'DP World', 'مبادلة'],
    universities: ['جامعة الإمارات', 'جامعة زايد', 'الجامعة الأمريكية في دبي', 'جامعة خليفة'],
    banks: ['الإمارات دبي الوطني', 'أبوظبي الأول', 'المشرق', 'دبي الإسلامي', 'أبوظبي التجاري']
  },
  JO: {
    code: 'JO',
    name: 'الأردن',
    nameEn: 'Jordan',
    flag: '🇯🇴',
    phoneCode: '+962',
    currency: 'JOD',
    cities: ['عمان', 'إربد', 'الزرقاء', 'العقبة', 'السلط', 'مادبا', 'جرش', 'الكرك'],
    maleNames: ['عبدالله', 'أحمد', 'محمد', 'عمر', 'يزن', 'كريم', 'طارق', 'فارس', 'زيد', 'حمزة'],
    femaleNames: ['رانيا', 'لينا', 'دينا', 'هالة', 'سوسن', 'منى', 'نادية', 'ريم', 'روان', 'لمى'],
    lastNames: ['الطراونة', 'المجالي', 'الزعبي', 'البطاينة', 'الشوابكة', 'العبادي', 'الحمود', 'الرواشدة'],
    companies: ['البوتاس العربية', 'الفوسفات الأردنية', 'زين الأردن', 'البنك العربي', 'أمنية'],
    universities: ['الجامعة الأردنية', 'جامعة اليرموك', 'الجامعة الهاشمية', 'جامعة العلوم والتكنولوجيا'],
    banks: ['البنك العربي', 'الأهلي الأردني', 'الإسلامي الأردني', 'القاهرة عمان', 'الاتحاد']
  },
  KW: {
    code: 'KW',
    name: 'الكويت',
    nameEn: 'Kuwait',
    flag: '🇰🇼',
    phoneCode: '+965',
    currency: 'KWD',
    cities: ['الكويت', 'حولي', 'الفروانية', 'الأحمدي', 'الجهراء', 'مبارك الكبير'],
    maleNames: ['جاسم', 'فهد', 'عبدالله', 'مشاري', 'بدر', 'حمد', 'سالم', 'ناصر', 'عبدالعزيز'],
    femaleNames: ['بثينة', 'منيرة', 'فاطمة', 'نورة', 'سارة', 'دانة', 'لطيفة', 'عائشة', 'مريم'],
    lastNames: ['الشايع', 'الخرافي', 'الصباح', 'الغانم', 'البحر', 'الرومي', 'المطوع', 'الفليج'],
    companies: ['بيت التمويل الكويتي', 'زين', 'أجيليتي', 'الأهلي المتحد', 'البنك الوطني'],
    universities: ['جامعة الكويت', 'الجامعة الأمريكية بالكويت', 'جامعة الخليج'],
    banks: ['الوطني', 'بيتك', 'الخليج', 'برقان', 'الأهلي المتحد']
  },
  QA: {
    code: 'QA',
    name: 'قطر',
    nameEn: 'Qatar',
    flag: '🇶🇦',
    phoneCode: '+974',
    currency: 'QAR',
    cities: ['الدوحة', 'الوكرة', 'الخور', 'الريان', 'أم صلال', 'الشمال'],
    maleNames: ['تميم', 'حمد', 'خالد', 'محمد', 'عبدالله', 'ناصر', 'جاسم', 'فهد', 'سعود'],
    femaleNames: ['شيخة', 'موزة', 'مريم', 'فاطمة', 'نورة', 'الجازي', 'حصة', 'عائشة'],
    lastNames: ['آل ثاني', 'العطية', 'الخليفي', 'المسند', 'السويدي', 'الكواري', 'النعيمي'],
    companies: ['قطر للبترول', 'الخطوط القطرية', 'أوريدو', 'بنك قطر الوطني', 'قطر للغاز'],
    universities: ['جامعة قطر', 'جامعة حمد بن خليفة', 'جامعة نورث وسترن قطر'],
    banks: ['قطر الوطني', 'التجاري', 'الدولي الإسلامي', 'الخليجي', 'الأهلي']
  },
  BH: {
    code: 'BH',
    name: 'البحرين',
    nameEn: 'Bahrain',
    flag: '🇧🇭',
    phoneCode: '+973',
    currency: 'BHD',
    cities: ['المنامة', 'المحرق', 'الرفاع', 'مدينة عيسى', 'مدينة حمد', 'سترة'],
    maleNames: ['حمد', 'خالد', 'سلمان', 'عبدالله', 'محمد', 'أحمد', 'راشد', 'فيصل'],
    femaleNames: ['سبيكة', 'مريم', 'فاطمة', 'هيا', 'نورة', 'لولوة', 'عائشة', 'شيخة'],
    lastNames: ['آل خليفة', 'الفاضل', 'البنعلي', 'الدوسري', 'الزياني', 'الموسوي', 'الخان'],
    companies: ['ألبا', 'بتلكو', 'طيران الخليج', 'ممتلكات', 'بنك البحرين الوطني'],
    universities: ['جامعة البحرين', 'جامعة الخليج العربي', 'الجامعة الأهلية'],
    banks: ['الوطني', 'الأهلي المتحد', 'بنك البحرين الإسلامي', 'السلام']
  },
  OM: {
    code: 'OM',
    name: 'عمان',
    nameEn: 'Oman',
    flag: '🇴🇲',
    phoneCode: '+968',
    currency: 'OMR',
    cities: ['مسقط', 'صلالة', 'صحار', 'نزوى', 'صور', 'البريمي', 'الرستاق'],
    maleNames: ['قابوس', 'هيثم', 'سعيد', 'حمد', 'خالد', 'محمد', 'طارق', 'سالم'],
    femaleNames: ['عهد', 'ثريا', 'فاطمة', 'عائشة', 'مريم', 'زينب', 'نورة', 'سلمى'],
    lastNames: ['البوسعيدي', 'الراشدي', 'البلوشي', 'الحارثي', 'الهنائي', 'المعمري', 'الكندي'],
    companies: ['عمانتل', 'بنك مسقط', 'النفط العمانية', 'عمران', 'الطيران العماني'],
    universities: ['جامعة السلطان قابوس', 'جامعة ظفار', 'جامعة نزوى'],
    banks: ['مسقط', 'الوطني العماني', 'صحار الدولي', 'الأهلي']
  },
  LB: {
    code: 'LB',
    name: 'لبنان',
    nameEn: 'Lebanon',
    flag: '🇱🇧',
    phoneCode: '+961',
    currency: 'LBP',
    cities: ['بيروت', 'طرابلس', 'صيدا', 'صور', 'زحلة', 'جونيه', 'بعلبك'],
    maleNames: ['كريم', 'أنطوان', 'جورج', 'إيلي', 'رامي', 'سامي', 'وليد', 'ربيع', 'مارك'],
    femaleNames: ['نادين', 'ريتا', 'كارلا', 'مايا', 'رنا', 'ليال', 'نور', 'هبة', 'سارة'],
    lastNames: ['الحريري', 'جنبلاط', 'فرنجية', 'خوري', 'حداد', 'نصار', 'سلامة', 'عون'],
    companies: ['سوليدير', 'طيران الشرق الأوسط', 'ألفا', 'تاتش', 'بنك عودة'],
    universities: ['الجامعة الأمريكية في بيروت', 'جامعة القديس يوسف', 'الجامعة اللبنانية'],
    banks: ['عودة', 'بيبلوس', 'لبنان والمهجر', 'بنك ميد', 'فرنسبنك']
  },
  MA: {
    code: 'MA',
    name: 'المغرب',
    nameEn: 'Morocco',
    flag: '🇲🇦',
    phoneCode: '+212',
    currency: 'MAD',
    cities: ['الرباط', 'الدار البيضاء', 'فاس', 'مراكش', 'طنجة', 'أغادير', 'مكناس', 'وجدة'],
    maleNames: ['يوسف', 'محمد', 'أمين', 'إدريس', 'كريم', 'عادل', 'حسن', 'ياسين', 'أنس'],
    femaleNames: ['فاطمة الزهراء', 'خديجة', 'سلمى', 'مريم', 'إيمان', 'نهى', 'أسماء', 'حنان'],
    lastNames: ['العلوي', 'الفاسي', 'بنعلي', 'الإدريسي', 'بنسعيد', 'الحسني', 'بنكيران', 'المنصوري'],
    companies: ['OCP', 'اتصالات المغرب', 'الخطوط الملكية', 'التجاري وفا بنك', 'مناجم'],
    universities: ['جامعة محمد الخامس', 'جامعة القاضي عياض', 'جامعة الأخوين'],
    banks: ['التجاري وفا', 'البنك الشعبي', 'BMCE', 'البنك المغربي للتجارة']
  }
};

// English Names Database
const englishData = {
  maleNames: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Joseph', 'Thomas', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian'],
  femaleNames: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Dorothy', 'Kimberly', 'Emily', 'Donna'],
  lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'],
  cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Indianapolis', 'Seattle', 'Denver', 'Boston', 'Nashville', 'Portland'],
  companies: ['Apple', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Tesla', 'Netflix', 'Adobe', 'Oracle', 'Salesforce', 'IBM', 'Intel', 'Cisco', 'NVIDIA', 'PayPal'],
  universities: ['Harvard University', 'MIT', 'Stanford University', 'Yale University', 'Princeton University', 'Columbia University', 'UCLA', 'UC Berkeley', 'NYU', 'Cornell University'],
  banks: ['JPMorgan Chase', 'Bank of America', 'Wells Fargo', 'Citibank', 'Goldman Sachs', 'Morgan Stanley', 'Capital One', 'TD Bank', 'PNC Bank', 'US Bank']
};

// Stock Context Interface for consistent stock data
interface StockContext {
  symbol: string;
  name: string;
  nameEn: string;
  market: string;
  marketEn: string;
  sector: string;
  sectorEn: string;
  currency: string;
  basePrice: number;
  open: number;
  high: number;
  low: number;
  close: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
}

// Education Level Interface
interface EducationContext {
  level: string;
  levelEn: string;
  gradeYear: number;
  schoolType: string;
  schoolTypeEn: string;
  minAge: number;
  maxAge: number;
}

// Date Range Context is defined inline in DataContext interface

// Address Context Interface
interface AddressContext {
  city: string;
  district: string;
  street: string;
  fullAddress: string;
  postalCode: string;
  landmark?: string;
}

// Product Context Interface
interface ProductContext {
  category: string;
  subCategory: string;
  productName: string;
  brand: string;
  price: number;
  unit: string;
  icon: string;
  sku: string;
  barcode: string;
}

// Order Context Interface (links quantity, unit price, and total logically)
interface OrderContext {
  quantity: number;
  unitPrice: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  taxPercent: number;
  taxAmount: number;
  total: number;
  shippingCost: number;
  grandTotal: number;
}

// Context Interface
interface DataContext {
  gender: 'male' | 'female';
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  birthDate: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  country: CountryData;
  language: 'ar' | 'en';
  stockContext?: StockContext;
  educationContext?: EducationContext;
  addressContext?: AddressContext;
  productContext?: ProductContext;
  // Order context for quantity, price, total calculations
  orderContext?: OrderContext;
  // Bank context for consistent bank data (account, branch, country)
  bankContext?: BankContext;
  // Date range context for start/end dates
  dateRangeContext?: {
    startDate: Date;
    endDate: Date;
    startDateStr: string;
    endDateStr: string;
    durationDays: number;
    durationMonths: number;
  };
}

// Distribution functions
function normalDistribution(mean: number, stdDev: number): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdDev + mean;
}

function exponentialDistribution(lambda: number): number {
  return -Math.log(1 - Math.random()) / lambda;
}

function poissonDistribution(lambda: number): number {
  let L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

function bimodalDistribution(mean1: number, mean2: number, stdDev: number): number {
  if (Math.random() < 0.5) {
    return normalDistribution(mean1, stdDev);
  }
  return normalDistribution(mean2, stdDev);
}

// Smart Data Generator Class
export class SmartDataGenerator {

  // Random helper
  private random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generate number with distribution
  private generateNumber(min: number, max: number, distribution?: string, params?: Record<string, number>): number {
    let value: number;
    
    switch (distribution) {
      case 'normal':
        const mean = params?.mean ?? (min + max) / 2;
        const stdDev = params?.stdDev ?? (max - min) / 6;
        value = normalDistribution(mean, stdDev);
        break;
      case 'exponential':
        const lambda = params?.lambda ?? 1;
        value = min + exponentialDistribution(lambda) * (max - min) / 5;
        break;
      case 'poisson':
        const poissonLambda = params?.lambda ?? (min + max) / 2;
        value = poissonDistribution(poissonLambda);
        break;
      case 'bimodal':
        const mean1 = params?.mean1 ?? min + (max - min) * 0.3;
        const mean2 = params?.mean2 ?? min + (max - min) * 0.7;
        value = bimodalDistribution(mean1, mean2, (max - min) / 10);
        break;
      default:
        value = min + Math.random() * (max - min);
    }
    
    return Math.max(min, Math.min(max, Math.round(value)));
  }

  // Generate stock context with consistent OHLC data
  generateStockContext(countryCode: string): StockContext {
    // Get country-specific market
    const countryMarkets = getMarketByCountry(countryCode);
    let selectedMarket;
    if (countryMarkets.length > 0) {
      selectedMarket = countryMarkets[Math.floor(Math.random() * countryMarkets.length)];
    } else {
      // Fallback to random market
      selectedMarket = MARKETS[Math.floor(Math.random() * MARKETS.length)];
    }
    
    const randomStock = selectedMarket.stocks[Math.floor(Math.random() * selectedMarket.stocks.length)];
    
    // Generate realistic OHLC data with proper relationships
    const basePrice = randomStock.currentPrice || this.generateNumber(10, 500);
    
    // Previous close (yesterday's close)
    const previousClose = basePrice * (1 + (Math.random() * 0.04 - 0.02)); // ±2% from base
    
    // Today's change (realistic daily volatility based on sector)
    const sectorVolatility: Record<string, number> = {
      'البنوك': 0.015, 'Banks': 0.015,
      'الطاقة': 0.025, 'Energy': 0.025,
      'التقنية': 0.03, 'Technology': 0.03,
      'الاتصالات': 0.018, 'Telecom': 0.018,
      'العقارات': 0.02, 'Real Estate': 0.02,
      'الأغذية': 0.012, 'Food': 0.012,
      'المواد الأساسية': 0.022, 'Materials': 0.022,
      'الصناعة': 0.02, 'Industrial': 0.02,
    };
    
    const volatility = sectorVolatility[randomStock.sectorAr] || sectorVolatility[randomStock.sector] || 0.02;
    const changePercent = (Math.random() * 2 - 1) * volatility * 100; // Convert to percentage
    const change = previousClose * (changePercent / 100);
    const close = previousClose + change;
    
    // Open is close to previous close (gap of ±0.5%)
    const gapPercent = (Math.random() * 0.01 - 0.005);
    const open = previousClose * (1 + gapPercent);
    
    // High must be >= max(open, close) and Low must be <= min(open, close)
    const maxOC = Math.max(open, close);
    const minOC = Math.min(open, close);
    
    // High is above the max of open/close
    const highExtra = maxOC * (Math.random() * 0.01 + 0.001); // 0.1% to 1.1% above
    const high = maxOC + highExtra;
    
    // Low is below the min of open/close
    const lowExtra = minOC * (Math.random() * 0.01 + 0.001); // 0.1% to 1.1% below
    const low = minOC - lowExtra;
    
    // Volume based on stock liquidity
    const baseVolume = this.generateNumber(100000, 5000000);
    const volumeVariation = 0.5 + Math.random(); // 50% to 150% of base volume
    const volume = Math.round(baseVolume * volumeVariation);
    
    return {
      symbol: randomStock.symbol,
      name: randomStock.nameAr,
      nameEn: randomStock.nameEn,
      market: selectedMarket.nameAr,
      marketEn: selectedMarket.nameEn,
      sector: randomStock.sectorAr,
      sectorEn: randomStock.sector,
      currency: selectedMarket.currency,
      basePrice: parseFloat(basePrice.toFixed(2)),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      previousClose: parseFloat(previousClose.toFixed(2)),
      change: parseFloat(change.toFixed(2)),
      changePercent: parseFloat(changePercent.toFixed(2)),
      volume
    };
  }

  // Generate education context with appropriate age
  generateEducationContext(): EducationContext {
    // Education levels with appropriate ages - University students are 18+
    const educationLevels = [
      { level: 'ابتدائي', levelEn: 'Elementary', gradeYear: this.generateNumber(1, 6), schoolType: 'مدرسة ابتدائية', schoolTypeEn: 'Elementary School', minAge: 6, maxAge: 11 },
      { level: 'متوسط', levelEn: 'Middle School', gradeYear: this.generateNumber(1, 3), schoolType: 'مدرسة متوسطة', schoolTypeEn: 'Middle School', minAge: 12, maxAge: 14 },
      { level: 'ثانوي', levelEn: 'High School', gradeYear: this.generateNumber(1, 3), schoolType: 'مدرسة ثانوية', schoolTypeEn: 'High School', minAge: 15, maxAge: 17 },
      { level: 'جامعي - سنة أولى', levelEn: 'Freshman', gradeYear: 1, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 18, maxAge: 19 },
      { level: 'جامعي - سنة ثانية', levelEn: 'Sophomore', gradeYear: 2, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 19, maxAge: 20 },
      { level: 'جامعي - سنة ثالثة', levelEn: 'Junior', gradeYear: 3, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 20, maxAge: 21 },
      { level: 'جامعي - سنة رابعة', levelEn: 'Senior', gradeYear: 4, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 21, maxAge: 23 },
      { level: 'جامعي - سنة خامسة', levelEn: 'Fifth Year', gradeYear: 5, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 22, maxAge: 24 },
      { level: 'ماجستير - سنة أولى', levelEn: 'Master\'s Year 1', gradeYear: 1, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 23, maxAge: 28 },
      { level: 'ماجستير - سنة ثانية', levelEn: 'Master\'s Year 2', gradeYear: 2, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 24, maxAge: 30 },
      { level: 'دكتوراه - سنة أولى', levelEn: 'PhD Year 1', gradeYear: 1, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 26, maxAge: 35 },
      { level: 'دكتوراه - سنة ثانية', levelEn: 'PhD Year 2', gradeYear: 2, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 27, maxAge: 36 },
      { level: 'دكتوراه - سنة ثالثة', levelEn: 'PhD Year 3', gradeYear: 3, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 28, maxAge: 38 },
      { level: 'دكتوراه - سنة رابعة', levelEn: 'PhD Year 4', gradeYear: 4, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 29, maxAge: 40 }
    ];
    
    return this.random(educationLevels);
  }
  
  // Generate date range context (start date before end date by 3-12 months)
  generateDateRangeContext(): DataContext['dateRangeContext'] {
    const today = new Date();
    
    // Start date: random date within the past 2 years
    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - this.generateNumber(0, 2));
    startDate.setMonth(startDate.getMonth() - this.generateNumber(0, 11));
    startDate.setDate(this.generateNumber(1, 28));
    
    // Duration: 3 to 12 months
    const durationMonths = this.generateNumber(3, 12);
    
    // End date: start date + duration
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + durationMonths);
    
    // Calculate duration in days
    const durationDays = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Format dates as YYYY-MM-DD
    const formatDate = (d: Date) => {
      return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    };
    
    return {
      startDate,
      endDate,
      startDateStr: formatDate(startDate),
      endDateStr: formatDate(endDate),
      durationDays,
      durationMonths
    };
  }

  // Generate product context with consistent product/category data
  generateProductContext(language: 'ar' | 'en'): ProductContext {
    const product = getRandomProduct(language);
    const sku = generateSKU(product.category, product.productName);
    const barcode = generateBarcode();
    
    return {
      ...product,
      sku,
      barcode
    };
  }

  // Generate order context with consistent quantity, price, and total calculations
  generateOrderContext(productPrice?: number): OrderContext {
    // Random quantity (1-50 items)
    const quantity = this.generateNumber(1, 50);
    
    // Unit price - use product price if available, otherwise random
    const unitPrice = productPrice ?? parseFloat((this.generateNumber(10, 1000) + Math.random()).toFixed(2));
    
    // Calculate subtotal (Quantity × Unit Price)
    const subtotal = parseFloat((quantity * unitPrice).toFixed(2));
    
    // Random discount (0-30%)
    const discountPercent = this.generateNumber(0, 30);
    const discountAmount = parseFloat((subtotal * discountPercent / 100).toFixed(2));
    
    // Subtotal after discount
    const subtotalAfterDiscount = subtotal - discountAmount;
    
    // Tax (VAT 5-15%)
    const taxPercent = this.random([5, 10, 14, 15]);
    const taxAmount = parseFloat((subtotalAfterDiscount * taxPercent / 100).toFixed(2));
    
    // Total after tax
    const total = parseFloat((subtotalAfterDiscount + taxAmount).toFixed(2));
    
    // Shipping cost (0, 10, 15, 20, 25, 30 or free for orders over certain amount)
    const shippingCost = subtotal > 500 ? 0 : this.random([0, 10, 15, 20, 25, 30]);
    
    // Grand total
    const grandTotal = parseFloat((total + shippingCost).toFixed(2));
    
    return {
      quantity,
      unitPrice,
      subtotal,
      discountPercent,
      discountAmount,
      taxPercent,
      taxAmount,
      total,
      shippingCost,
      grandTotal
    };
  }

  // Generate university student context only (age 18+)
  generateUniversityStudentContext(): EducationContext {
    const universityLevels = [
      { level: 'جامعي - سنة أولى', levelEn: 'Freshman', gradeYear: 1, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 18, maxAge: 19 },
      { level: 'جامعي - سنة ثانية', levelEn: 'Sophomore', gradeYear: 2, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 19, maxAge: 20 },
      { level: 'جامعي - سنة ثالثة', levelEn: 'Junior', gradeYear: 3, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 20, maxAge: 21 },
      { level: 'جامعي - سنة رابعة', levelEn: 'Senior', gradeYear: 4, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 21, maxAge: 23 },
      { level: 'جامعي - سنة خامسة', levelEn: 'Fifth Year', gradeYear: 5, schoolType: 'جامعة', schoolTypeEn: 'University', minAge: 22, maxAge: 24 },
      { level: 'ماجستير - سنة أولى', levelEn: 'Master\'s Year 1', gradeYear: 1, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 23, maxAge: 28 },
      { level: 'ماجستير - سنة ثانية', levelEn: 'Master\'s Year 2', gradeYear: 2, schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 24, maxAge: 30 },
      { level: 'دكتوراه', levelEn: 'PhD', gradeYear: this.generateNumber(1, 4), schoolType: 'دراسات عليا', schoolTypeEn: 'Graduate School', minAge: 26, maxAge: 40 }
    ];
    
    return this.random(universityLevels);
  }

  // Generate context for a record with optional education focus
  generateContext(countryCode: string, language: 'ar' | 'en', isEducationTemplate: boolean = false): DataContext {
    const country = countriesData[countryCode] || countriesData['SA'];
    const gender = Math.random() > 0.5 ? 'male' : 'female';
    
    let firstName: string;
    let lastName: string;
    
    if (language === 'ar') {
      firstName = gender === 'male' 
        ? this.random(country.maleNames)
        : this.random(country.femaleNames);
      lastName = this.random(country.lastNames);
    } else {
      firstName = gender === 'male'
        ? this.random(englishData.maleNames)
        : this.random(englishData.femaleNames);
      lastName = this.random(englishData.lastNames);
    }
    
    // Generate education context if needed
    const educationContext = isEducationTemplate ? this.generateEducationContext() : undefined;
    
    // Generate age based on education level if education template, otherwise random adult age
    let age: number;
    if (educationContext) {
      // Age appropriate for education level
      age = this.generateNumber(educationContext.minAge, educationContext.maxAge);
    } else {
      // Regular adult age
      age = this.generateNumber(18, 65);
    }
    
    // Calculate birth date based on age (ensuring logical consistency)
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    
    // Birth year is current year minus age
    const birthYear = currentYear - age;
    
    // Random birth month and day
    const birthMonth = this.generateNumber(1, 12);
    const maxDay = new Date(birthYear, birthMonth, 0).getDate(); // Get max days in month
    const birthDay = this.generateNumber(1, maxDay);
    
    // Adjust age if birthday hasn't occurred yet this year
    let actualAge = age;
    if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
      actualAge = age - 1;
      // Ensure age doesn't go below minimum for education level
      if (educationContext && actualAge < educationContext.minAge) {
        actualAge = educationContext.minAge;
      }
    }
    
    // Format birth date as YYYY-MM-DD
    const birthDate = `${birthYear}-${birthMonth.toString().padStart(2, '0')}-${birthDay.toString().padStart(2, '0')}`;
    
    // Generate stock context for this record
    const stockContext = this.generateStockContext(countryCode);
    
    // Generate date range context for this record
    const dateRangeContext = this.generateDateRangeContext();
    
    // Generate address context for this record (city and address are linked)
    const addressContext = getCityWithAddress(countryCode, language);
    
    // Generate product context for this record (product and category are linked)
    const productContext = this.generateProductContext(language);
    
    // Generate order context for this record (quantity, price, total are linked)
    const orderContext = this.generateOrderContext(productContext.price);
    
    // Generate bank context for this record (bank, branch, IBAN are linked)
    const bankContext = generateBankContext(countryCode, language);
    
    return {
      gender,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      age: actualAge,
      birthDate,
      birthYear,
      birthMonth,
      birthDay,
      country,
      language,
      stockContext,
      educationContext,
      addressContext,
      productContext,
      orderContext,
      bankContext,
      dateRangeContext
    };
  }

  // Generate field value
  generateFieldValue(type: string, context: DataContext, options?: any): any {
    const { country, language, gender, firstName, lastName, fullName } = context;
    const min = options?.min ?? 0;
    const max = options?.max ?? 100;
    const distribution = options?.distribution;
    const distributionParams = options?.distributionParams;

    switch (type) {
      // Arabic Personal
      case 'arabicFullName':
        return fullName;
      case 'arabicFirstName':
        return firstName;
      case 'arabicLastName':
        return lastName;
      case 'arabicMaleName':
        return this.random(country.maleNames) + ' ' + this.random(country.lastNames);
      case 'arabicFemaleName':
        return this.random(country.femaleNames) + ' ' + this.random(country.lastNames);
      
      // English Personal
      case 'fullName':
        return `${this.random(englishData.maleNames)} ${this.random(englishData.lastNames)}`;
      case 'firstName':
        return this.random([...englishData.maleNames, ...englishData.femaleNames]);
      case 'lastName':
        return this.random(englishData.lastNames);
      case 'maleName':
        return `${this.random(englishData.maleNames)} ${this.random(englishData.lastNames)}`;
      case 'femaleName':
        return `${this.random(englishData.femaleNames)} ${this.random(englishData.lastNames)}`;
      
      // Contact
      case 'arabicEmail':
        const arName = firstName.replace(/\s/g, '').toLowerCase();
        return `${arName}${Math.floor(Math.random() * 999)}@${this.random(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'])}`;
      case 'email':
        const enName = this.random(englishData.maleNames).toLowerCase();
        return `${enName}${Math.floor(Math.random() * 999)}@${this.random(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'])}`;
      case 'arabicPhone':
        return `${country.phoneCode} ${this.generateNumber(500000000, 599999999)}`;
      case 'phone':
        return `+1 ${this.generateNumber(200, 999)}-${this.generateNumber(100, 999)}-${this.generateNumber(1000, 9999)}`;
      
      // Location - Using linked address context for consistency
      case 'arabicCity':
        return context.addressContext?.city || this.random(country.cities);
      case 'city':
        if (context.addressContext) {
          return context.addressContext.city;
        }
        return language === 'ar' ? this.random(country.cities) : this.random(englishData.cities);
      case 'district':
        return context.addressContext?.district || (language === 'ar' ? 'حي المركز' : 'Central District');
      case 'street':
        return context.addressContext?.street || (language === 'ar' ? 'الشارع الرئيسي' : 'Main Street');
      case 'postalCode':
        return context.addressContext?.postalCode || `${this.generateNumber(10000, 99999)}`;
      case 'landmark':
        return context.addressContext?.landmark || (language === 'ar' ? 'بالقرب من المركز التجاري' : 'Near the Shopping Center');
      case 'arabicCountry':
        return country.name;
      case 'country':
        return language === 'ar' ? country.name : country.nameEn;
      case 'arabicAddress':
        if (context.addressContext) {
          return context.addressContext.fullAddress;
        }
        return `شارع ${this.random(['الملك فهد', 'العليا', 'التحلية', 'الأمير سلطان', 'الستين'])}، ${this.random(country.cities)}`;
      case 'address':
        if (context.addressContext) {
          return context.addressContext.fullAddress;
        }
        return `${this.generateNumber(100, 9999)} ${this.random(['Main St', 'Oak Ave', 'Park Blvd', 'Cedar Ln', 'Elm St'])}, ${this.random(englishData.cities)}`;
      case 'fullAddress':
        if (context.addressContext) {
          return context.addressContext.fullAddress;
        }
        return language === 'ar'
          ? `حي ${this.random(['المركز', 'الروضة', 'النخيل'])}، شارع ${this.random(['الرئيسي', 'الملك', 'الأمير'])}، ${this.random(country.cities)}`
          : `${this.generateNumber(100, 9999)} Main St, ${this.random(englishData.cities)}`;
      
      // Business
      case 'arabicCompany':
        return this.random(country.companies);
      case 'company':
        return language === 'ar' ? this.random(country.companies) : this.random(englishData.companies);
      case 'arabicJobTitle':
        return this.random(['مدير', 'محاسب', 'مهندس', 'طبيب', 'معلم', 'مبرمج', 'محامي', 'صيدلي', 'مصمم', 'مدير مشروع']);
      case 'jobTitle':
        return this.random(['Manager', 'Engineer', 'Developer', 'Designer', 'Analyst', 'Consultant', 'Director', 'Specialist', 'Coordinator', 'Administrator']);
      case 'department':
        return language === 'ar' 
          ? this.random(['الموارد البشرية', 'المالية', 'التسويق', 'تقنية المعلومات', 'المبيعات', 'الإدارة'])
          : this.random(['Human Resources', 'Finance', 'Marketing', 'IT', 'Sales', 'Administration']);
      
      // Education
      case 'arabicUniversity':
        return this.random(country.universities);
      case 'university':
        return language === 'ar' ? this.random(country.universities) : this.random(englishData.universities);
      case 'major':
        return language === 'ar'
          ? this.random(['علوم الحاسب', 'إدارة الأعمال', 'الهندسة', 'الطب', 'القانون', 'المحاسبة', 'التسويق'])
          : this.random(['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Law', 'Accounting', 'Marketing']);
      case 'gpa':
        return (Math.random() * 2 + 2).toFixed(2);
      
      // Education with context - ensures age matches education level
      case 'studentAge':
        // Return age from context which is calculated based on education level
        return context.age;
      case 'studentBirthDate':
        // Return birthDate from context which matches the age
        return context.birthDate;
      case 'studentEducationLevel':
        if (context.educationContext) {
          return language === 'ar' ? context.educationContext.level : context.educationContext.levelEn;
        }
        return language === 'ar' ? 'جامعي' : 'University';
      case 'studentGradeYear':
        if (context.educationContext) {
          return language === 'ar' 
            ? `السنة ${context.educationContext.gradeYear}` 
            : `Year ${context.educationContext.gradeYear}`;
        }
        return language === 'ar' ? 'السنة 1' : 'Year 1';
      case 'studentSchoolType':
        if (context.educationContext) {
          return language === 'ar' ? context.educationContext.schoolType : context.educationContext.schoolTypeEn;
        }
        return language === 'ar' ? 'جامعة' : 'University';
      case 'studentExpectedGraduation':
        if (context.educationContext) {
          const today = new Date();
          const yearsRemaining = context.educationContext.maxAge - context.age;
          const gradYear = today.getFullYear() + Math.max(1, yearsRemaining);
          return gradYear;
        }
        return new Date().getFullYear() + 2;
      
      // Finance - Using consistent bank context
      case 'arabicBank':
        if (context.bankContext) {
          return context.bankContext.bankName;
        }
        return this.random(country.banks);
      case 'bank':
      case 'bankName':
        if (context.bankContext) {
          return language === 'ar' ? context.bankContext.bankName : context.bankContext.bankNameEn;
        }
        return language === 'ar' ? this.random(country.banks) : this.random(englishData.banks);
      case 'bankBranch':
      case 'branchName':
        if (context.bankContext) {
          return language === 'ar' ? context.bankContext.branchName : context.bankContext.branchNameEn;
        }
        return language === 'ar' ? 'الفرع الرئيسي' : 'Main Branch';
      case 'branchCity':
        if (context.bankContext) {
          return language === 'ar' ? context.bankContext.branchCity : context.bankContext.branchCityEn;
        }
        return this.random(country.cities);
      case 'bankCode':
        if (context.bankContext) {
          return context.bankContext.bankCode;
        }
        return `${this.generateNumber(10, 99)}`;
      case 'swiftCode':
        if (context.bankContext) {
          return context.bankContext.swiftCode;
        }
        return `${this.random(['ABCD', 'EFGH', 'IJKL', 'MNOP'])}${this.random(['SA', 'AE', 'EG', 'KW'])}${this.random(['XX', 'AX', 'BX'])}`;
      case 'salary':
        return this.generateNumber(min || 3000, max || 50000, distribution, distributionParams);
      case 'price':
        return this.generateNumber(min || 10, max || 10000, distribution, distributionParams);
      case 'currency':
      case 'currencyCode':
        if (context.bankContext) {
          return language === 'ar' ? context.bankContext.currency : context.bankContext.currencyCode;
        }
        return language === 'ar' ? country.currency : 'USD';
      case 'accountNumber':
        if (context.bankContext) {
          return context.bankContext.accountNumber;
        }
        return `${this.random(['SA', 'AE', 'EG', 'US'])}${this.generateNumber(1000000000, 9999999999)}${this.generateNumber(1000000000, 9999999999)}`;
      case 'iban':
        if (context.bankContext) {
          return context.bankContext.iban;
        }
        const ibanCtry = this.random(['SA', 'AE', 'EG', 'KW', 'QA', 'BH', 'OM', 'JO']);
        return `${ibanCtry}${this.generateNumber(10, 99)}${'0'.repeat(4)}${this.generateNumber(1000000000, 9999999999)}${this.generateNumber(1000000000, 9999999999)}`.substring(0, 24);
      case 'creditCard':
        return `${this.generateNumber(4000, 4999)}-${this.generateNumber(1000, 9999)}-${this.generateNumber(1000, 9999)}-${this.generateNumber(1000, 9999)}`;
      
      // Demographics
      case 'age':
        // Use the age from context (which is calculated from birthDate) to ensure consistency
        return context.age;
      case 'arabicGender':
        return gender === 'male' ? 'ذكر' : 'أنثى';
      case 'gender':
        return gender === 'male' ? 'Male' : 'Female';
      case 'birthDate':
        // Use the birthDate from context (which is calculated from age) to ensure consistency
        return context.birthDate;
      case 'birthYear':
        return context.birthYear;
      case 'birthMonth':
        return context.birthMonth;
      case 'birthDay':
        return context.birthDay;
      case 'nationalId':
        return `${this.generateNumber(1, 2)}${this.generateNumber(100000000, 999999999)}`;
      
      // Medical
      case 'bloodType':
        return this.random(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
      case 'height':
        return this.generateNumber(min || 150, max || 200, distribution, distributionParams);
      case 'weight':
        return this.generateNumber(min || 45, max || 120, distribution, distributionParams);
      case 'medicalCondition':
        return language === 'ar'
          ? this.random(['سكري', 'ضغط الدم', 'حساسية', 'ربو', 'سليم', 'سليم', 'سليم'])
          : this.random(['Diabetes', 'Hypertension', 'Allergy', 'Asthma', 'Healthy', 'Healthy', 'Healthy']);
      
      // Technical
      case 'uuid':
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      case 'ip':
        return `${this.generateNumber(1, 255)}.${this.generateNumber(0, 255)}.${this.generateNumber(0, 255)}.${this.generateNumber(1, 255)}`;
      case 'mac':
        return Array(6).fill(0).map(() => this.generateNumber(0, 255).toString(16).padStart(2, '0')).join(':');
      case 'url':
        return `https://www.${this.random(['example', 'test', 'sample', 'demo'])}.com/${this.random(['page', 'product', 'article', 'post'])}/${this.generateNumber(1, 9999)}`;
      case 'username':
        return `${this.random(englishData.maleNames).toLowerCase()}${this.generateNumber(1, 999)}`;
      case 'password':
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
        return Array(12).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
      
      // Numbers
      case 'number':
        return this.generateNumber(min, max, distribution, distributionParams);
      case 'decimal':
        const decimals = options?.decimals ?? 2;
        return parseFloat((min + Math.random() * (max - min)).toFixed(decimals));
      case 'percentage':
        return this.generateNumber(0, 100, distribution, distributionParams);
      
      // Research
      case 'likertScale':
        return this.generateNumber(1, 5, distribution, distributionParams);
      case 'rating':
        return this.generateNumber(1, 10, distribution, distributionParams);
      case 'satisfaction':
        return language === 'ar'
          ? this.random(['راضي جداً', 'راضي', 'محايد', 'غير راضي', 'غير راضي جداً'])
          : this.random(['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']);
      case 'yesNo':
        return language === 'ar' ? this.random(['نعم', 'لا']) : this.random(['Yes', 'No']);
      
      // Misc
      case 'boolean':
        return Math.random() > 0.5;
      case 'date':
        const startDate = new Date(2020, 0, 1);
        const endDate = new Date();
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        return randomDate.toISOString().split('T')[0];
      case 'datetime':
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const randomDT = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDT.toISOString();
      case 'time':
        return `${this.generateNumber(0, 23).toString().padStart(2, '0')}:${this.generateNumber(0, 59).toString().padStart(2, '0')}`;
      case 'color':
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
      case 'status':
        return language === 'ar'
          ? this.random(['نشط', 'غير نشط', 'معلق', 'مكتمل'])
          : this.random(['Active', 'Inactive', 'Pending', 'Completed']);
      
      // E-commerce - Using consistent product context
      case 'productName':
        if (context.productContext) {
          return context.productContext.productName;
        }
        return language === 'ar'
          ? this.random(['هاتف ذكي', 'لابتوب', 'ساعة ذكية', 'سماعات', 'تابلت', 'كاميرا', 'شاشة', 'طابعة'])
          : this.random(['Smartphone', 'Laptop', 'Smart Watch', 'Headphones', 'Tablet', 'Camera', 'Monitor', 'Printer']);
      case 'category':
        if (context.productContext) {
          return context.productContext.category;
        }
        return language === 'ar'
          ? this.random(['إلكترونيات', 'ملابس', 'أثاث', 'كتب', 'رياضة', 'ألعاب', 'مطبخ'])
          : this.random(['Electronics', 'Clothing', 'Furniture', 'Books', 'Sports', 'Games', 'Kitchen']);
      case 'subCategory':
        if (context.productContext) {
          return context.productContext.subCategory;
        }
        return language === 'ar'
          ? this.random(['هواتف ذكية', 'لابتوب', 'ملابس رجالية', 'ملابس نسائية', 'أثاث غرف نوم', 'أثاث صالات'])
          : this.random(['Smartphones', 'Laptops', 'Men Clothing', 'Women Clothing', 'Bedroom Furniture', 'Living Room']);
      case 'productBrand':
        if (context.productContext) {
          return context.productContext.brand;
        }
        return this.random(['Apple', 'Samsung', 'Sony', 'LG', 'Nike', 'Adidas', 'IKEA', 'Zara']);
      case 'productPrice':
        if (context.productContext) {
          return context.productContext.price;
        }
        return this.generateNumber(10, 10000);
      case 'productUnit':
        if (context.productContext) {
          return context.productContext.unit;
        }
        return language === 'ar' ? 'قطعة' : 'piece';
      case 'sku':
        if (context.productContext) {
          return context.productContext.sku;
        }
        return `SKU-${this.generateNumber(100000, 999999)}`;
      case 'barcode':
        if (context.productContext) {
          return context.productContext.barcode;
        }
        return `${this.generateNumber(100, 999)}${this.generateNumber(10000, 99999)}${this.generateNumber(10000, 99999)}`;
      case 'orderStatus':
        return language === 'ar'
          ? this.random(['قيد المعالجة', 'تم الشحن', 'تم التوصيل', 'ملغي'])
          : this.random(['Processing', 'Shipped', 'Delivered', 'Cancelled']);
      
      // Financial - Stocks (Using consistent stock context from DataContext)
      case 'stockSymbol':
      case 'stockName':
      case 'stockPrice':
      case 'stockChange':
      case 'stockChangePercent':
      case 'stockVolume':
      case 'stockOpen':
      case 'stockHigh':
      case 'stockLow':
      case 'stockClose':
      case 'marketCap':
      case 'peRatio':
      case 'dividendYield':
      case 'stockExchange':
      case 'stockSector': {
        // Use the pre-generated stock context for consistent data
        const stockCtx = context.stockContext;
        if (!stockCtx) {
          return language === 'ar' ? 'بيانات غير متوفرة' : 'Data not available';
        }
        
        switch (type) {
          case 'stockSymbol': return stockCtx.symbol;
          case 'stockName': return language === 'ar' ? stockCtx.name : stockCtx.nameEn;
          case 'stockPrice': return stockCtx.close; // Current price is closing price
          case 'stockOpen': return stockCtx.open;
          case 'stockHigh': return stockCtx.high;
          case 'stockLow': return stockCtx.low;
          case 'stockClose': return stockCtx.close;
          case 'stockChange': return stockCtx.change;
          case 'stockChangePercent': return stockCtx.changePercent;
          case 'stockVolume': return stockCtx.volume;
          case 'marketCap': return Math.round(stockCtx.close * stockCtx.volume * 10);
          case 'peRatio': return parseFloat((this.generateNumber(5, 50) + Math.random()).toFixed(2));
          case 'dividendYield': return parseFloat((Math.random() * 5).toFixed(2));
          case 'stockExchange': return language === 'ar' ? stockCtx.market : stockCtx.marketEn;
          case 'stockSector': return language === 'ar' ? stockCtx.sector : stockCtx.sectorEn;
          default: return language === 'ar' ? stockCtx.name : stockCtx.nameEn;
        }
      }
      
      // Financial - Currencies (Using Real Data)
      case 'currencyPair':
      case 'exchangeRate':
      case 'bidPrice':
      case 'askPrice':
      case 'spread': {
        const forexData = RealFinance.generateRealForexData(language, 'all');
        switch (type) {
          case 'currencyPair': return forexData.pair;
          case 'exchangeRate': return forexData.bid;
          case 'bidPrice': return forexData.bid;
          case 'askPrice': return forexData.ask;
          case 'spread': return forexData.spread;
          default: return forexData.pair;
        }
      }
      
      // Financial - Crypto (Using Real Data)
      case 'cryptoSymbol':
      case 'cryptoName':
      case 'cryptoPrice': {
        const cryptoData = RealFinance.generateRealCryptoData(language);
        switch (type) {
          case 'cryptoSymbol': return cryptoData.symbol;
          case 'cryptoName': return cryptoData.name;
          case 'cryptoPrice': return cryptoData.price;
          default: return cryptoData.symbol;
        }
      }
      case 'walletAddress': {
        const walletChars = '0123456789abcdef';
        return '0x' + Array(40).fill(0).map(() => walletChars[Math.floor(Math.random() * walletChars.length)]).join('');
      }
      case 'transactionHash': {
        const hashChars = '0123456789abcdef';
        return '0x' + Array(64).fill(0).map(() => hashChars[Math.floor(Math.random() * hashChars.length)]).join('');
      }
      
      // Energy (Using Real Data)
      case 'oilType':
      case 'oilPrice':
      case 'gasType':
      case 'gasPrice':
      case 'energyUnit': {
        const energyData = RealFinance.generateRealEnergyData(language, type.includes('gas') ? 'gas' : 'crude');
        switch (type) {
          case 'oilType': return energyData.name;
          case 'oilPrice': return energyData.price;
          case 'gasType': return energyData.name;
          case 'gasPrice': return energyData.price;
          case 'energyUnit': return energyData.unit;
          default: return energyData.name;
        }
      }
      
      // Economic Indicators (Using Real Data)
      case 'gdpGrowth':
      case 'inflationRate':
      case 'unemploymentRate':
      case 'interestRate':
      case 'debtToGdp':
      case 'creditRating':
      case 'tradeBalance': {
        const ecoData = RealFinance.generateRealEconomicIndicator(language, country.code);
        switch (type) {
          case 'gdpGrowth': return ecoData.gdpGrowth;
          case 'inflationRate': return ecoData.inflation;
          case 'unemploymentRate': return ecoData.unemployment;
          case 'interestRate': return ecoData.interestRate;
          case 'debtToGdp': return ecoData.debtToGdp;
          case 'creditRating': return ecoData.creditRating;
          case 'tradeBalance': return this.generateNumber(-50000, 100000);
          default: return ecoData.gdpGrowth;
        }
      }
      
      // Portfolio
      case 'portfolioName':
        return language === 'ar'
          ? this.random(['محفظة النمو', 'محفظة الدخل', 'محفظة متوازنة', 'محفظة المضاربة', 'محفظة الأسهم القيادية', 'محفظة التقنية'])
          : this.random(['Growth Portfolio', 'Income Portfolio', 'Balanced Portfolio', 'Aggressive Portfolio', 'Blue Chip Portfolio', 'Tech Portfolio']);
      case 'assetClass':
        return language === 'ar'
          ? this.random(['أسهم', 'سندات', 'صكوك', 'عقارات', 'سلع', 'نقد'])
          : this.random(['Stocks', 'Bonds', 'Sukuk', 'Real Estate', 'Commodities', 'Cash']);
      case 'investmentType':
        return language === 'ar'
          ? this.random(['طويل الأجل', 'متوسط الأجل', 'قصير الأجل', 'مضاربة يومية'])
          : this.random(['Long-term', 'Medium-term', 'Short-term', 'Day Trading']);
      case 'riskLevel':
        return language === 'ar'
          ? this.random(['منخفض جداً', 'منخفض', 'متوسط', 'مرتفع', 'مرتفع جداً'])
          : this.random(['Very Low', 'Low', 'Medium', 'High', 'Very High']);
      case 'returnRate':
        return parseFloat((Math.random() * 30 - 5).toFixed(2));
      
      // Commodities (Using Real Data)
      case 'commodityName':
      case 'commodityPrice':
      case 'commodityUnit': {
        const commodityData = RealFinance.generateRealCommodityData(language, 'all');
        switch (type) {
          case 'commodityName': return commodityData.name;
          case 'commodityPrice': return commodityData.price;
          case 'commodityUnit': return commodityData.unit;
          default: return commodityData.name;
        }
      }
      
      // Real Estate
      case 'propertyType':
        return language === 'ar'
          ? this.random(['شقة', 'فيلا', 'مكتب', 'محل تجاري', 'أرض', 'مستودع', 'عمارة سكنية'])
          : this.random(['Apartment', 'Villa', 'Office', 'Shop', 'Land', 'Warehouse', 'Building']);
      case 'propertyArea':
        return this.generateNumber(50, 1000);
      case 'propertyPrice':
        return this.generateNumber(100000, 5000000);
      case 'rentPrice':
        return this.generateNumber(1000, 20000);
      case 'propertyLocation':
        return language === 'ar'
          ? this.random(country.cities) + '، ' + this.random(['حي الملقا', 'حي النخيل', 'حي الياسمين', 'حي العليا', 'حي الروضة', 'حي المروج'])
          : this.random(englishData.cities) + ', ' + this.random(['Downtown', 'Suburbs', 'Business District', 'Residential Area']);
      case 'bedroomCount':
        return this.generateNumber(1, 6);
      case 'bathroomCount':
        return this.generateNumber(1, 4);
      
      // Travel
      case 'airlineName':
        return language === 'ar'
          ? this.random(['الخطوط السعودية', 'طيران الإمارات', 'الخطوط القطرية', 'طيران الاتحاد', 'طيران الخليج', 'مصر للطيران', 'الملكية الأردنية'])
          : this.random(['Emirates', 'Qatar Airways', 'Saudi Airlines', 'Etihad', 'Gulf Air', 'EgyptAir', 'Royal Jordanian', 'Turkish Airlines', 'Lufthansa', 'British Airways']);
      case 'flightNumber':
        const airlineCode = this.random(['EK', 'QR', 'SV', 'EY', 'GF', 'MS', 'RJ', 'TK', 'LH', 'BA']);
        return `${airlineCode}${this.generateNumber(100, 999)}`;
      case 'airport':
        return language === 'ar'
          ? this.random(['مطار الملك خالد الدولي', 'مطار دبي الدولي', 'مطار حمد الدولي', 'مطار القاهرة الدولي', 'مطار الكويت الدولي'])
          : this.random(['DXB', 'JFK', 'LHR', 'CDG', 'SIN', 'HND', 'LAX', 'ORD', 'AMS', 'FRA']);
      case 'destination':
        return language === 'ar'
          ? this.random(['دبي', 'لندن', 'باريس', 'نيويورك', 'طوكيو', 'سنغافورة', 'إسطنبول', 'كوالالمبور', 'بانكوك', 'برشلونة'])
          : this.random(['Dubai', 'London', 'Paris', 'New York', 'Tokyo', 'Singapore', 'Istanbul', 'Kuala Lumpur', 'Bangkok', 'Barcelona']);
      case 'flightClass':
        return language === 'ar'
          ? this.random(['الدرجة الأولى', 'درجة رجال الأعمال', 'الدرجة الاقتصادية الممتازة', 'الدرجة الاقتصادية'])
          : this.random(['First Class', 'Business Class', 'Premium Economy', 'Economy']);
      case 'hotelName':
        return language === 'ar'
          ? this.random(['فندق الريتز كارلتون', 'فندق فور سيزونز', 'فندق ماريوت', 'فندق هيلتون', 'فندق شيراتون', 'فندق حياة', 'فندق فيرمونت'])
          : this.random(['Ritz-Carlton', 'Four Seasons', 'Marriott', 'Hilton', 'Sheraton', 'Hyatt', 'Fairmont', 'InterContinental', 'Waldorf Astoria']);
      case 'hotelRating':
        return this.generateNumber(3, 5);
      case 'roomType':
        return language === 'ar'
          ? this.random(['غرفة قياسية', 'غرفة ديلوكس', 'جناح جونيور', 'جناح تنفيذي', 'جناح رئاسي'])
          : this.random(['Standard Room', 'Deluxe Room', 'Junior Suite', 'Executive Suite', 'Presidential Suite']);
      
      // Restaurant
      case 'dishName':
        return language === 'ar'
          ? this.random(['كبسة', 'مندي', 'شاورما', 'فلافل', 'حمص', 'فتوش', 'تبولة', 'كشري', 'ملوخية', 'مقلوبة', 'منسف', 'كنافة'])
          : this.random(['Kabsa', 'Shawarma', 'Falafel', 'Hummus', 'Grilled Chicken', 'Steak', 'Pasta', 'Pizza', 'Burger', 'Sushi', 'Salad']);
      case 'cuisineType':
        return language === 'ar'
          ? this.random(['عربي', 'سعودي', 'لبناني', 'مصري', 'إيطالي', 'صيني', 'ياباني', 'هندي', 'مكسيكي', 'أمريكي'])
          : this.random(['Arabic', 'Lebanese', 'Egyptian', 'Italian', 'Chinese', 'Japanese', 'Indian', 'Mexican', 'American', 'French']);
      case 'restaurantName':
        return language === 'ar'
          ? this.random(['مطعم البيت', 'مطعم الشرق', 'مطعم الديوان', 'مطعم النخيل', 'مطعم الريف', 'مطعم السلطان'])
          : this.random(['The Kitchen', 'Golden Spoon', 'Blue Ocean', 'Green Garden', 'Royal Feast', 'Urban Grill']);
      
      // Automotive
      case 'carBrand':
        return this.random(['Toyota', 'Honda', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Porsche', 'Ford', 'Chevrolet', 'Hyundai', 'Nissan', 'Land Rover', 'GMC']);
      case 'carModel':
        return this.random(['Camry', 'Accord', 'X5', 'E-Class', 'A6', 'ES350', 'Cayenne', 'Mustang', 'Tahoe', 'Sonata', 'Patrol', 'Range Rover', 'Yukon']);
      case 'carYear':
        return this.generateNumber(2015, 2024);
      case 'carColor':
        return language === 'ar'
          ? this.random(['أبيض', 'أسود', 'فضي', 'رمادي', 'أزرق', 'أحمر', 'بني', 'أخضر', 'ذهبي'])
          : this.random(['White', 'Black', 'Silver', 'Gray', 'Blue', 'Red', 'Brown', 'Green', 'Gold']);
      case 'carMileage':
        return this.generateNumber(0, 200000);
      case 'carPrice':
        return this.generateNumber(50000, 500000);
      case 'licensePlate':
        const letters = language === 'ar' ? ['أ', 'ب', 'ح', 'د', 'ر', 'س', 'ص', 'ط', 'ع', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ى'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T'];
        return `${this.random(letters)}${this.random(letters)}${this.random(letters)} ${this.generateNumber(1000, 9999)}`;
      
      // Sports
      case 'sportName':
        return language === 'ar'
          ? this.random(['كرة القدم', 'كرة السلة', 'التنس', 'السباحة', 'الجولف', 'الكريكيت', 'الفروسية', 'الملاكمة'])
          : this.random(['Football', 'Basketball', 'Tennis', 'Swimming', 'Golf', 'Cricket', 'Horse Racing', 'Boxing']);
      case 'teamName':
        return language === 'ar'
          ? this.random(['الهلال', 'النصر', 'الاتحاد', 'الأهلي', 'الزمالك', 'العين', 'الدحيل', 'الوحدة'])
          : this.random(['Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool', 'Bayern Munich', 'PSG', 'Juventus', 'AC Milan']);
      case 'playerPosition':
        return language === 'ar'
          ? this.random(['حارس مرمى', 'مدافع', 'لاعب وسط', 'مهاجم', 'جناح'])
          : this.random(['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Winger']);
      case 'playerNumber':
        return this.generateNumber(1, 99);
      
      // Insurance
      case 'policyNumber':
        return `POL-${this.generateNumber(100000, 999999)}`;
      case 'policyType':
        return language === 'ar'
          ? this.random(['تأمين صحي', 'تأمين سيارات', 'تأمين على الحياة', 'تأمين سفر', 'تأمين ممتلكات', 'تأمين مسؤولية'])
          : this.random(['Health Insurance', 'Auto Insurance', 'Life Insurance', 'Travel Insurance', 'Property Insurance', 'Liability Insurance']);
      case 'premium':
        return this.generateNumber(500, 10000);
      case 'coverage':
        return this.generateNumber(50000, 1000000);
      case 'claimStatus':
        return language === 'ar'
          ? this.random(['قيد المراجعة', 'تمت الموافقة', 'مرفوض', 'قيد الدفع', 'مغلق'])
          : this.random(['Under Review', 'Approved', 'Rejected', 'Pending Payment', 'Closed']);
      
      // Logistics
      case 'trackingNumber':
        return `TRK${this.generateNumber(1000000000, 9999999999)}`;
      case 'shipmentStatus':
        return language === 'ar'
          ? this.random(['تم الاستلام', 'في المستودع', 'قيد الشحن', 'في الطريق', 'جاري التوصيل', 'تم التسليم'])
          : this.random(['Received', 'In Warehouse', 'Shipped', 'In Transit', 'Out for Delivery', 'Delivered']);
      case 'carrier':
        return language === 'ar'
          ? this.random(['أرامكس', 'سمسا', 'DHL', 'فيديكس', 'ناقل', 'زاجل'])
          : this.random(['Aramex', 'SMSA', 'DHL', 'FedEx', 'UPS', 'TNT']);
      case 'packageWeight':
        return parseFloat((this.generateNumber(1, 50) + Math.random()).toFixed(2));
      case 'warehouseLocation':
        return language === 'ar'
          ? this.random(['مستودع الرياض', 'مستودع جدة', 'مستودع الدمام', 'مستودع دبي', 'مستودع القاهرة'])
          : this.random(['Riyadh Warehouse', 'Jeddah Warehouse', 'Dubai Warehouse', 'Cairo Warehouse', 'Kuwait Warehouse']);
      
      // IoT/Technical
      case 'sensorId':
        return `SENSOR-${this.generateNumber(100000, 999999)}`;
      case 'sensorType':
        return this.random(['Temperature', 'Humidity', 'Pressure', 'Motion', 'Light', 'Proximity', 'Gas', 'Water Level']);
      case 'sensorValue':
        return parseFloat((this.generateNumber(0, 100) + Math.random()).toFixed(2));
      case 'deviceStatus':
        return this.random(['Online', 'Offline', 'Maintenance', 'Error', 'Standby']);
      case 'firmwareVersion':
        return `v${this.generateNumber(1, 5)}.${this.generateNumber(0, 9)}.${this.generateNumber(0, 99)}`;
      case 'apiEndpoint':
        return `/api/v1/${this.random(['users', 'products', 'orders', 'payments', 'notifications', 'reports'])}`;
      case 'httpMethod':
        return this.random(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
      case 'httpStatusCode':
        return this.random([200, 201, 204, 400, 401, 403, 404, 500, 502, 503]);
      case 'responseTime':
        return this.generateNumber(10, 2000);
      case 'serverName':
        return `srv-${this.random(['web', 'app', 'db', 'api', 'cache', 'queue'])}-${this.generateNumber(1, 20).toString().padStart(2, '0')}`;
      case 'cpuUsage':
        return parseFloat((Math.random() * 100).toFixed(1));
      case 'memoryUsage':
        return parseFloat((Math.random() * 100).toFixed(1));
      case 'diskUsage':
        return parseFloat((Math.random() * 100).toFixed(1));
      
      // Media
      case 'articleTitle':
        return language === 'ar'
          ? this.random(['أخبار عاجلة: ', 'تقرير خاص: ', 'تحليل: ', 'حصري: ', 'رأي: ']) + this.random(['تطورات اقتصادية جديدة', 'اتفاقية تعاون استراتيجي', 'إطلاق مشروع ضخم', 'نتائج مالية قياسية', 'تعيينات إدارية جديدة'])
          : this.random(['Breaking: ', 'Exclusive: ', 'Analysis: ', 'Report: ', 'Opinion: ']) + this.random(['Major Economic Development', 'Strategic Partnership Announced', 'Mega Project Launched', 'Record Financial Results', 'New Leadership Appointments']);
      case 'authorName':
        return fullName;
      case 'publishDate':
        const pubYear = this.generateNumber(2020, 2024);
        const pubMonth = this.generateNumber(1, 12);
        const pubDay = this.generateNumber(1, 28);
        return `${pubYear}-${pubMonth.toString().padStart(2, '0')}-${pubDay.toString().padStart(2, '0')}`;
      case 'viewCount':
        return this.generateNumber(100, 1000000);
      case 'likeCount':
        return this.generateNumber(10, 100000);
      case 'commentCount':
        return this.generateNumber(0, 5000);
      case 'shareCount':
        return this.generateNumber(0, 10000);
      case 'channelName':
        return language === 'ar'
          ? this.random(['قناة التقنية', 'عالم المعرفة', 'أخبار اليوم', 'المطبخ العربي', 'رياضة بلا حدود', 'تعلم معنا'])
          : this.random(['Tech World', 'Knowledge Hub', 'Daily News', 'Cooking Master', 'Sports Zone', 'Learn With Us']);
      case 'videoTitle':
        return language === 'ar'
          ? this.random(['كيف تتعلم ', 'أسرار ', 'دليل شامل ل', '10 نصائح ل', 'مراجعة ']) + this.random(['البرمجة', 'النجاح', 'الاستثمار', 'الصحة', 'التقنية'])
          : this.random(['How to Learn ', 'Secrets of ', 'Complete Guide to ', '10 Tips for ', 'Review of ']) + this.random(['Programming', 'Success', 'Investing', 'Health', 'Technology']);
      case 'duration':
        return `${this.generateNumber(0, 2)}:${this.generateNumber(0, 59).toString().padStart(2, '0')}:${this.generateNumber(0, 59).toString().padStart(2, '0')}`;
      case 'subscribers':
        return this.generateNumber(1000, 10000000);
      
      // Government
      case 'serviceId':
        return `SRV-${this.generateNumber(100000, 999999)}`;
      case 'serviceName':
        return language === 'ar'
          ? this.random(['تجديد الهوية', 'إصدار جواز سفر', 'رخصة قيادة', 'تصريح إقامة', 'شهادة ميلاد', 'رخصة تجارية'])
          : this.random(['ID Renewal', 'Passport Issuance', 'Driving License', 'Residence Permit', 'Birth Certificate', 'Business License']);
      case 'applicationStatus':
        return language === 'ar'
          ? this.random(['مقدم', 'قيد المراجعة', 'مكتمل', 'مرفوض', 'معلق'])
          : this.random(['Submitted', 'Under Review', 'Completed', 'Rejected', 'Pending']);
      case 'violationType':
        return language === 'ar'
          ? this.random(['تجاوز السرعة', 'قطع إشارة', 'وقوف خاطئ', 'استخدام الهاتف', 'عدم ربط الحزام', 'تجاوز خاطئ'])
          : this.random(['Speeding', 'Red Light', 'Illegal Parking', 'Phone Usage', 'No Seatbelt', 'Illegal Overtaking']);
      case 'fineAmount':
        return this.generateNumber(100, 3000);
      case 'fineStatus':
        return language === 'ar'
          ? this.random(['غير مدفوعة', 'مدفوعة', 'معترض عليها', 'ملغاة'])
          : this.random(['Unpaid', 'Paid', 'Disputed', 'Cancelled']);
      
      // Weather
      case 'temperature':
        return this.generateNumber(-10, 50);
      case 'humidity':
        return this.generateNumber(10, 100);
      case 'windSpeed':
        return this.generateNumber(0, 100);
      case 'weatherCondition':
        return language === 'ar'
          ? this.random(['صحو', 'غائم جزئياً', 'غائم', 'ممطر', 'عاصف', 'ثلجي', 'ضباب'])
          : this.random(['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Stormy', 'Snowy', 'Foggy']);
      case 'precipitation':
        return parseFloat((Math.random() * 50).toFixed(1));
      
      // Agriculture
      case 'cropName':
        return language === 'ar'
          ? this.random(['قمح', 'أرز', 'ذرة', 'شعير', 'تمر', 'زيتون', 'طماطم', 'خيار', 'برتقال', 'تفاح'])
          : this.random(['Wheat', 'Rice', 'Corn', 'Barley', 'Dates', 'Olives', 'Tomatoes', 'Cucumbers', 'Oranges', 'Apples']);
      case 'cropYield':
        return this.generateNumber(100, 10000);
      case 'farmArea':
        return this.generateNumber(1, 1000);
      case 'soilType':
        return language === 'ar'
          ? this.random(['طيني', 'رملي', 'طميي', 'صخري', 'خصب'])
          : this.random(['Clay', 'Sandy', 'Loamy', 'Rocky', 'Fertile']);
      case 'irrigationType':
        return language === 'ar'
          ? this.random(['ري بالتنقيط', 'ري بالرش', 'ري سطحي', 'ري محوري'])
          : this.random(['Drip Irrigation', 'Sprinkler', 'Surface Irrigation', 'Center Pivot']);
      
      // Research
      case 'researchField':
        return language === 'ar'
          ? this.random(['علوم الحاسب', 'الطب', 'الفيزياء', 'الكيمياء', 'علم النفس', 'الاقتصاد', 'الهندسة', 'الأحياء'])
          : this.random(['Computer Science', 'Medicine', 'Physics', 'Chemistry', 'Psychology', 'Economics', 'Engineering', 'Biology']);
      case 'sampleId':
        return `SMPL-${this.generateNumber(100000, 999999)}`;
      case 'experimentId':
        return `EXP-${this.generateNumber(10000, 99999)}`;
      case 'pValue':
        return parseFloat((Math.random() * 0.1).toFixed(4));
      case 'correlation':
        return parseFloat((Math.random() * 2 - 1).toFixed(4));
      case 'standardDeviation':
        return parseFloat((Math.random() * 10).toFixed(4));
      case 'confidenceInterval':
        return `${parseFloat((Math.random() * 10).toFixed(2))} - ${parseFloat((10 + Math.random() * 10).toFixed(2))}`;
      case 'meanValue':
        return parseFloat((this.generateNumber(0, 100) + Math.random()).toFixed(4));
      case 'medianValue':
        return parseFloat((this.generateNumber(0, 100) + Math.random()).toFixed(4));
      case 'sampleSize':
        return this.generateNumber(30, 10000);
      case 'controlGroup':
        return language === 'ar' ? this.random(['مجموعة ضابطة', 'مجموعة تجريبية']) : this.random(['Control Group', 'Experimental Group']);
      
      // Academic
      case 'courseName':
        return language === 'ar'
          ? this.random(['مقدمة في البرمجة', 'الرياضيات التطبيقية', 'إدارة المشاريع', 'التسويق الرقمي', 'المحاسبة المالية', 'الإحصاء', 'قواعد البيانات'])
          : this.random(['Introduction to Programming', 'Applied Mathematics', 'Project Management', 'Digital Marketing', 'Financial Accounting', 'Statistics', 'Database Systems']);
      case 'courseCode':
        return `${this.random(['CS', 'BUS', 'ENG', 'MKT', 'FIN', 'STAT', 'MATH'])}${this.generateNumber(100, 499)}`;
      case 'grade':
        return this.random(['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F']);
      case 'gradePoints':
        return parseFloat((Math.random() * 4).toFixed(2));
      case 'creditHours':
        return this.generateNumber(1, 4);
      case 'semester':
        return language === 'ar'
          ? this.random(['الفصل الأول 2024', 'الفصل الثاني 2024', 'الفصل الصيفي 2024', 'الفصل الأول 2025'])
          : this.random(['Fall 2024', 'Spring 2024', 'Summer 2024', 'Fall 2025']);
      case 'academicYear':
        return `${this.generateNumber(2020, 2025)}/${this.generateNumber(2021, 2026)}`;
      case 'studentId':
        return `STD${this.generateNumber(100000, 999999)}`;
      case 'employeeId':
        return `EMP${this.generateNumber(10000, 99999)}`;
      case 'educationLevel':
        return language === 'ar'
          ? this.random(['ثانوي', 'دبلوم', 'بكالوريوس', 'ماجستير', 'دكتوراه'])
          : this.random(['High School', 'Diploma', 'Bachelor', 'Master', 'PhD']);
      case 'maritalStatus':
        return language === 'ar'
          ? this.random(['أعزب', 'متزوج', 'مطلق', 'أرمل'])
          : this.random(['Single', 'Married', 'Divorced', 'Widowed']);
      
      // Medical Extended
      case 'diagnosis':
        return language === 'ar'
          ? this.random(['سكري النوع 2', 'ارتفاع ضغط الدم', 'الربو', 'التهاب المفاصل', 'الصداع النصفي', 'حساسية موسمية', 'سليم'])
          : this.random(['Type 2 Diabetes', 'Hypertension', 'Asthma', 'Arthritis', 'Migraine', 'Seasonal Allergy', 'Healthy']);
      case 'medication':
        return this.random(['Metformin', 'Lisinopril', 'Ventolin', 'Ibuprofen', 'Paracetamol', 'Aspirin', 'Omeprazole', 'Amoxicillin']);
      case 'dosage':
        return `${this.generateNumber(1, 4)} x ${this.random(['100mg', '250mg', '500mg', '1000mg'])}`;
      case 'hospitalName':
        return language === 'ar'
          ? this.random(['مستشفى الملك فيصل التخصصي', 'مستشفى الحبيب', 'مستشفى سليمان الحبيب', 'مستشفى المملكة', 'مستشفى دار الشفاء'])
          : this.random(['King Faisal Specialist Hospital', 'Cleveland Clinic', 'Johns Hopkins Hospital', 'Mayo Clinic', 'Massachusetts General']);
      case 'doctorName':
        return language === 'ar'
          ? `د. ${this.random(country.maleNames)} ${this.random(country.lastNames)}`
          : `Dr. ${this.random(englishData.maleNames)} ${this.random(englishData.lastNames)}`;
      case 'appointmentDate':
        const appYear = this.generateNumber(2024, 2025);
        const appMonth = this.generateNumber(1, 12);
        const appDay = this.generateNumber(1, 28);
        return `${appYear}-${appMonth.toString().padStart(2, '0')}-${appDay.toString().padStart(2, '0')}`;
      case 'appointmentTime':
        return `${this.generateNumber(8, 17)}:${this.random(['00', '15', '30', '45'])}`;
      
      // Invoice/Order - Using consistent order context
      case 'invoiceNumber':
        return `INV-${this.generateNumber(100000, 999999)}`;
      case 'orderNumber':
        return `ORD-${this.generateNumber(100000, 999999)}`;
      case 'quantity':
        // Use quantity from order context for consistency
        if (context.orderContext) {
          return context.orderContext.quantity;
        }
        return this.generateNumber(1, 100);
      case 'unitPrice':
        // Use unit price from order context for consistency
        if (context.orderContext) {
          return context.orderContext.unitPrice;
        }
        return parseFloat((this.generateNumber(10, 1000) + Math.random()).toFixed(2));
      case 'subtotal':
        // Subtotal = Quantity × Unit Price
        if (context.orderContext) {
          return context.orderContext.subtotal;
        }
        return parseFloat((this.generateNumber(100, 50000) + Math.random()).toFixed(2));
      case 'totalAmount':
        // Total = Subtotal - Discount + Tax
        if (context.orderContext) {
          return context.orderContext.total;
        }
        return parseFloat((this.generateNumber(100, 50000) + Math.random()).toFixed(2));
      case 'grandTotal':
        // Grand Total = Total + Shipping
        if (context.orderContext) {
          return context.orderContext.grandTotal;
        }
        return parseFloat((this.generateNumber(100, 50000) + Math.random()).toFixed(2));
      case 'discount':
        // Discount percentage
        if (context.orderContext) {
          return context.orderContext.discountPercent;
        }
        return this.generateNumber(0, 50);
      case 'discountAmount':
        // Discount amount in currency
        if (context.orderContext) {
          return context.orderContext.discountAmount;
        }
        return parseFloat((this.generateNumber(0, 500) + Math.random()).toFixed(2));
      case 'tax':
        // Tax percentage
        if (context.orderContext) {
          return context.orderContext.taxPercent;
        }
        return parseFloat((this.generateNumber(5, 20) + Math.random()).toFixed(2));
      case 'taxAmount':
        // Tax amount in currency
        if (context.orderContext) {
          return context.orderContext.taxAmount;
        }
        return parseFloat((this.generateNumber(10, 1000) + Math.random()).toFixed(2));
      case 'shippingCost':
        // Shipping cost
        if (context.orderContext) {
          return context.orderContext.shippingCost;
        }
        return this.random([0, 10, 15, 20, 25, 30]);
      case 'paymentMethod':
        return language === 'ar'
          ? this.random(['نقداً', 'بطاقة ائتمان', 'تحويل بنكي', 'محفظة إلكترونية', 'أقساط'])
          : this.random(['Cash', 'Credit Card', 'Bank Transfer', 'E-Wallet', 'Installments']);
      case 'paymentStatus':
        return language === 'ar'
          ? this.random(['مدفوع', 'غير مدفوع', 'جزئي', 'مسترد', 'ملغي'])
          : this.random(['Paid', 'Unpaid', 'Partial', 'Refunded', 'Cancelled']);
      
      // Custom type with values array
      case 'custom':
        if (options?.values && Array.isArray(options.values) && options.values.length > 0) {
          return this.random(options.values);
        }
        return language === 'ar' ? 'قيمة مخصصة' : 'Custom Value';
      
      // Additional types for templates - iban is already handled in Finance section
      
      case 'degree':
        return language === 'ar'
          ? this.random(['ثانوية عامة', 'دبلوم', 'بكالوريوس', 'ماجستير', 'دكتوراه'])
          : this.random(['High School', 'Diploma', 'Bachelor', 'Master', 'PhD']);
      
      case 'arabicDepartment':
        return this.random(['الموارد البشرية', 'المالية', 'التسويق', 'تقنية المعلومات', 'المبيعات', 'خدمة العملاء', 'الإدارة', 'البحث والتطوير', 'الإنتاج', 'الجودة']);
      
      case 'futureDate':
        const futureYear = this.generateNumber(2025, 2030);
        const futureMonth = this.generateNumber(1, 12);
        const futureDay = this.generateNumber(1, 28);
        return `${futureYear}-${futureMonth.toString().padStart(2, '0')}-${futureDay.toString().padStart(2, '0')}`;
      
      // Start and End dates with logical relationship (3-12 months apart)
      case 'startDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        // Fallback to random past date
        const sYear = this.generateNumber(2022, 2024);
        const sMonth = this.generateNumber(1, 12);
        const sDay = this.generateNumber(1, 28);
        return `${sYear}-${sMonth.toString().padStart(2, '0')}-${sDay.toString().padStart(2, '0')}`;
      
      case 'endDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        // Fallback to random future date
        const eYear = this.generateNumber(2024, 2026);
        const eMonth = this.generateNumber(1, 12);
        const eDay = this.generateNumber(1, 28);
        return `${eYear}-${eMonth.toString().padStart(2, '0')}-${eDay.toString().padStart(2, '0')}`;
      
      case 'durationDays':
        if (context.dateRangeContext) {
          return context.dateRangeContext.durationDays;
        }
        return this.generateNumber(90, 365); // 3-12 months in days
      
      case 'durationMonths':
        if (context.dateRangeContext) {
          return context.dateRangeContext.durationMonths;
        }
        return this.generateNumber(3, 12);
      
      case 'contractStartDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        const csYear = this.generateNumber(2022, 2024);
        const csMonth = this.generateNumber(1, 12);
        const csDay = this.generateNumber(1, 28);
        return `${csYear}-${csMonth.toString().padStart(2, '0')}-${csDay.toString().padStart(2, '0')}`;
      
      case 'contractEndDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        const ceYear = this.generateNumber(2024, 2026);
        const ceMonth = this.generateNumber(1, 12);
        const ceDay = this.generateNumber(1, 28);
        return `${ceYear}-${ceMonth.toString().padStart(2, '0')}-${ceDay.toString().padStart(2, '0')}`;
      
      case 'subscriptionStartDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        const ssYear = this.generateNumber(2023, 2024);
        const ssMonth = this.generateNumber(1, 12);
        const ssDay = this.generateNumber(1, 28);
        return `${ssYear}-${ssMonth.toString().padStart(2, '0')}-${ssDay.toString().padStart(2, '0')}`;
      
      case 'subscriptionEndDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        const seYear = this.generateNumber(2024, 2025);
        const seMonth = this.generateNumber(1, 12);
        const seDay = this.generateNumber(1, 28);
        return `${seYear}-${seMonth.toString().padStart(2, '0')}-${seDay.toString().padStart(2, '0')}`;
      
      case 'projectStartDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        const psYear = this.generateNumber(2022, 2024);
        const psMonth = this.generateNumber(1, 12);
        const psDay = this.generateNumber(1, 28);
        return `${psYear}-${psMonth.toString().padStart(2, '0')}-${psDay.toString().padStart(2, '0')}`;
      
      case 'projectEndDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        const peYear = this.generateNumber(2024, 2026);
        const peMonth = this.generateNumber(1, 12);
        const peDay = this.generateNumber(1, 28);
        return `${peYear}-${peMonth.toString().padStart(2, '0')}-${peDay.toString().padStart(2, '0')}`;
      
      case 'leaseStartDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        const lsYear = this.generateNumber(2022, 2024);
        const lsMonth = this.generateNumber(1, 12);
        const lsDay = this.generateNumber(1, 28);
        return `${lsYear}-${lsMonth.toString().padStart(2, '0')}-${lsDay.toString().padStart(2, '0')}`;
      
      case 'leaseEndDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        const leYear = this.generateNumber(2024, 2026);
        const leMonth = this.generateNumber(1, 12);
        const leDay = this.generateNumber(1, 28);
        return `${leYear}-${leMonth.toString().padStart(2, '0')}-${leDay.toString().padStart(2, '0')}`;
      
      case 'employmentStartDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.startDateStr;
        }
        const esYear = this.generateNumber(2018, 2024);
        const esMonth = this.generateNumber(1, 12);
        const esDay = this.generateNumber(1, 28);
        return `${esYear}-${esMonth.toString().padStart(2, '0')}-${esDay.toString().padStart(2, '0')}`;
      
      case 'employmentEndDate':
        if (context.dateRangeContext) {
          return context.dateRangeContext.endDateStr;
        }
        const eeYear = this.generateNumber(2024, 2027);
        const eeMonth = this.generateNumber(1, 12);
        const eeDay = this.generateNumber(1, 28);
        return `${eeYear}-${eeMonth.toString().padStart(2, '0')}-${eeDay.toString().padStart(2, '0')}`;
      
      case 'website':
        const domains = ['com', 'net', 'org', 'io', 'co'];
        const companyName = this.random(['acme', 'global', 'tech', 'digital', 'smart', 'prime', 'alpha', 'beta']);
        return `https://www.${companyName}${this.generateNumber(1, 999)}.${this.random(domains)}`;
      
      case 'paragraph':
        return language === 'ar'
          ? 'هذا نص وصفي يحتوي على تفاصيل إضافية حول الموضوع المطروح. يمكن أن يتضمن معلومات متنوعة ومفيدة للقارئ.'
          : 'This is a descriptive paragraph containing additional details about the topic at hand. It can include various useful information for the reader.';
      
      case 'sentence':
        return language === 'ar'
          ? this.random(['هذا وصف مختصر للعنصر', 'ملاحظة إضافية مهمة', 'تفاصيل تكميلية', 'معلومات إضافية للمراجعة', 'نص توضيحي قصير'])
          : this.random(['This is a brief description', 'An important additional note', 'Supplementary details', 'Additional information for review', 'A short explanatory text']);
      
      case 'productCategory':
        return language === 'ar'
          ? this.random(['إلكترونيات', 'ملابس', 'أحذية', 'إكسسوارات', 'منزل ومطبخ', 'رياضة', 'كتب', 'ألعاب', 'جمال وعناية', 'طعام'])
          : this.random(['Electronics', 'Clothing', 'Shoes', 'Accessories', 'Home & Kitchen', 'Sports', 'Books', 'Games', 'Beauty', 'Food']);
      
      case 'avatar':
        return `https://i.pravatar.cc/150?u=${this.generateNumber(1, 10000)}`;
      
      case 'isbn':
        return `978-${this.generateNumber(0, 9)}-${this.generateNumber(10000, 99999)}-${this.generateNumber(100, 999)}-${this.generateNumber(0, 9)}`;
      
      case 'likert':
        return this.generateNumber(1, 5);
      
      // Fallback - generate realistic placeholder based on field name
      default:
        // First check if options has values (custom type with different name)
        if (options?.values && Array.isArray(options.values) && options.values.length > 0) {
          return this.random(options.values);
        }
        
        // Try to generate something sensible based on the type name
        if (type.toLowerCase().includes('name')) {
          return fullName;
        } else if (type.toLowerCase().includes('email')) {
          return `user${this.generateNumber(100, 9999)}@example.com`;
        } else if (type.toLowerCase().includes('phone')) {
          return `${country.phoneCode} ${this.generateNumber(500000000, 599999999)}`;
        } else if (type.toLowerCase().includes('price') || type.toLowerCase().includes('amount') || type.toLowerCase().includes('cost')) {
          return parseFloat((this.generateNumber(10, 10000) + Math.random()).toFixed(2));
        } else if (type.toLowerCase().includes('date')) {
          return `${this.generateNumber(2020, 2024)}-${this.generateNumber(1, 12).toString().padStart(2, '0')}-${this.generateNumber(1, 28).toString().padStart(2, '0')}`;
        } else if (type.toLowerCase().includes('id') || type.toLowerCase().includes('number') || type.toLowerCase().includes('code')) {
          return `${type.toUpperCase().substring(0, 3)}-${this.generateNumber(100000, 999999)}`;
        } else if (type.toLowerCase().includes('status')) {
          return language === 'ar' ? this.random(['نشط', 'معلق', 'مكتمل', 'ملغي']) : this.random(['Active', 'Pending', 'Completed', 'Cancelled']);
        } else if (type.toLowerCase().includes('description') || type.toLowerCase().includes('note') || type.toLowerCase().includes('comment')) {
          return language === 'ar' ? 'هذا نص وصفي للبيانات' : 'This is a descriptive text for the data';
        } else if (type.toLowerCase().includes('count') || type.toLowerCase().includes('qty') || type.toLowerCase().includes('quantity')) {
          return this.generateNumber(1, 1000);
        } else if (type.toLowerCase().includes('percent') || type.toLowerCase().includes('rate')) {
          return parseFloat((Math.random() * 100).toFixed(2));
        } else {
          // Final fallback - return a formatted version of the type
          return `${language === 'ar' ? 'قيمة' : 'Value'} ${this.generateNumber(1, 999)}`;
        }
    }
  }
}

export default SmartDataGenerator;
