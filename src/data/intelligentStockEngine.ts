// محرك توليد بيانات الأسهم الذكي
// يولد بيانات مترابطة ومنطقية 100%

import { getMarketByCountry, getRandomStock } from './stocksByMarket';

// واجهة بيانات السهم الكاملة
export interface StockDataComplete {
  symbol: string;
  name: string;
  nameEn: string;
  market: string;
  marketEn: string;
  sector: string;
  sectorEn: string;
  currency: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
  value: number;
  trades: number;
  marketCap: number;
  peRatio: number;
  pbRatio: number;
  eps: number;
  dividendYield: number;
  week52High: number;
  week52Low: number;
  avgVolume30: number;
  date: string;
  time: string;
}

// نطاقات الأسعار الواقعية لكل سوق
const MARKET_PRICE_RANGES: Record<string, { min: number; max: number; avgVolume: number }> = {
  'tadawul': { min: 5, max: 500, avgVolume: 5000000 },
  'egx': { min: 1, max: 200, avgVolume: 10000000 },
  'adx': { min: 1, max: 50, avgVolume: 3000000 },
  'dfm': { min: 0.5, max: 20, avgVolume: 20000000 },
  'boursa_kuwait': { min: 0.1, max: 5, avgVolume: 10000000 },
  'qse': { min: 1, max: 50, avgVolume: 2000000 },
  'bahrain': { min: 0.05, max: 2, avgVolume: 500000 },
  'msm': { min: 0.05, max: 1, avgVolume: 300000 },
  'nyse': { min: 10, max: 500, avgVolume: 10000000 },
  'nasdaq': { min: 50, max: 1000, avgVolume: 20000000 },
};

// أسعار تقريبية واقعية للأسهم الرئيسية
const REAL_STOCK_PRICES: Record<string, number> = {
  // السعودية
  '2222': 32.5,    // أرامكو
  '1120': 96.8,    // الراجحي
  '1180': 45.2,    // الأهلي
  '2010': 78.4,    // سابك
  '7010': 45.6,    // STC
  '2280': 58.3,    // المراعي
  '4190': 145.2,   // جرير
  '1010': 36.4,    // الرياض
  '2350': 42.1,    // كيان
  '4030': 135.6,   // البحري
  '2380': 156.8,   // بترورابغ
  '4200': 65.4,    // الدريس
  '8200': 28.9,    // الحكير
  '4001': 92.3,    // أسمنت الجوف
  '6010': 48.7,    // نادك
  '2290': 89.5,    // ينساب
  '1150': 25.6,    // عناية
  '4002': 45.8,    // المدينة
  '7020': 112.4,   // زين
  '3010': 32.1,    // أسمنت العربية
  '2170': 45.6,    // المصافي
  '1140': 28.3,    // البلاد
  '4260': 78.9,    // بدجت
  '7030': 95.2,    // موبايلي
  '8210': 18.4,    // بوان
  '2020': 156.7,   // سافكو
  '1050': 36.8,    // الإنماء
  '4005': 52.3,    // أسمنت الشمالية
  '6020': 28.9,    // صافولا
  '3020': 48.5,    // أسمنت اليمامة
  
  // مصر
  'COMI': 78.5,    // البنك التجاري الدولي
  'HRHO': 3.2,     // هيرميس
  'ETEL': 28.4,    // المصرية للاتصالات
  'TMGH': 12.8,    // طلعت مصطفى
  'SWDY': 25.6,    // السويدي
  'EAST': 18.9,    // إيسترن كومباني
  'EKHO': 0.45,    // القابضة المصرية الكويتية
  'PHDC': 2.8,     // بالم هيلز
  'AMOC': 5.6,     // الإسكندرية للزيوت
  'EFID': 8.9,     // العز الدخيلة
  'JUFO': 32.4,    // جهينة
  'ORWE': 15.6,    // أوراسكوم للتنمية
  'ESRS': 45.2,    // حديد عز
  'CCAP': 8.7,     // كريدي أجريكول
  'FWRY': 6.8,     // فوري
  'ABUK': 28.9,    // أبوقير للأسمدة
  'SKPC': 12.3,    // سيدي كرير
  'HELI': 2.1,     // مصر للطيران
  'MNHD': 4.5,     // مدينة نصر
  'OCDI': 1.8,     // أوراسكوم للإنشاء
  'EGAL': 38.5,    // إيجيترانس
  'AUTO': 2.9,     // جي بي أوتو
  'ALCN': 7.8,     // الكان
  'PORT': 25.6,    // موانئ دبي السخنة
  
  // الإمارات - أبوظبي
  'FAB': 14.2,     // بنك أبوظبي الأول
  'ADNOCDIST': 3.8, // أدنوك للتوزيع
  'ETISALAT': 25.6, // اتصالات
  'ADIB': 12.4,    // مصرف أبوظبي الإسلامي
  'ALDAR': 6.8,    // الدار العقارية
  'IHC': 245.0,    // القابضة الدولية
  'ADNOCGAS': 3.2, // أدنوك للغاز
  'ADNOCDRILLING': 4.5, // أدنوك للحفر
  'MULTIPLY': 2.8, // ملتيبلاي
  'ADPORTS': 5.6,  // موانئ أبوظبي
  'DANA': 1.2,     // دانة غاز
  'TAQA': 3.4,     // طاقة
  'ADNH': 4.8,     // أبوظبي الوطنية للفنادق
  'QAPC': 2.6,     // قدرة القابضة
  'ESHRAQ': 0.45,  // إشراق للاستثمار
  
  // الإمارات - دبي
  'EMAAR': 9.2,    // إعمار العقارية
  'DIB': 6.4,      // بنك دبي الإسلامي
  'DU': 6.8,       // دو
  'DEWA': 2.6,     // ديوا
  'SALIK': 3.2,    // سالك
  'DFM': 1.8,      // سوق دبي المالي
  'EMIRATESNBD': 18.5, // الإمارات دبي الوطني
  'DAMAC': 4.2,    // داماك
  'GGICO': 1.1,    // الخليج للملاحة
  'SHUAA': 0.35,   // شعاع كابيتال
  'TECOM': 5.8,    // تيكوم
  'PARKIN': 3.4,   // باركن
  'TALABAT': 1.5,  // طلبات
  'EMAARMALLS': 2.1, // إعمار مولز
  'DUBAIISURANCE': 0.85, // دبي للتأمين
  
  // الكويت
  'NBK': 1.2,      // بنك الكويت الوطني
  'ZAIN': 0.58,    // زين
  'KFH': 0.92,     // بيت التمويل الكويتي
  'AGILITY': 0.82, // أجيليتي
  'BOUBYAN': 0.75, // بنك بوبيان
  'MABANEE': 0.85, // المباني
  'HUMANSOFT': 3.2, // هيومن سوفت
  'GBK': 0.32,     // الخليج
  'ALIMTIAZ': 0.28, // الامتياز
  'KPPC': 0.18,    // البترولية الكويتية
  'AUB': 0.35,     // الأهلي المتحد
  'STCQ': 0.45,    // الخدمات
  'KIPCO': 0.15,   // المشاريع
  
  // قطر
  'QNB': 18.5,     // بنك قطر الوطني
  'QTEL': 1.6,     // أوريدو
  'IQCD': 14.2,    // صناعات قطر
  'QIBK': 8.5,     // قطر الإسلامي
  'QGTS': 4.2,     // ناقلات
  'MARK': 1.8,     // مسيعيد للبتروكيماويات
  'QAMC': 1.2,     // قطر للألمنيوم
  'QGMD': 0.85,    // قطر الألمانية
  'BLDN': 1.5,     // بروة
  'ERES': 3.2,     // إزدان
  'CBQK': 5.8,     // البنك التجاري
  'DOHI': 2.4,     // الدوحة للتأمين
  
  // بورصة نيويورك
  'BRK.A': 685000, // بيركشاير هاثاواي
  'JPM': 195.5,    // جي بي مورغان
  'V': 278.4,      // فيزا
  'JNJ': 156.8,    // جونسون آند جونسون
  'WMT': 165.2,    // وولمارت
  'PG': 168.5,     // بروكتر آند غامبل
  'MA': 445.6,     // ماستركارد
  'XOM': 112.4,    // إكسون موبيل
  'HD': 345.8,     // هوم ديبوت
  'CVX': 165.2,    // شيفرون
  'KO': 62.5,      // كوكاكولا
  'PEP': 185.4,    // بيبسيكو
  'ABBV': 168.9,   // آبفي
  'MRK': 125.6,    // ميرك
  'COST': 565.8,   // كوستكو
  'BAC': 35.8,     // بنك أوف أمريكا
  'DIS': 98.5,     // ديزني
  'TMO': 545.2,    // ثيرمو فيشر
  'CSCO': 52.4,    // سيسكو
  'VZ': 38.9,      // فيرايزون
  'INTC': 32.5,    // إنتل
  'WFC': 58.6,     // ويلز فارجو
  'ORCL': 125.8,   // أوراكل
  'NKE': 98.4,     // نايكي
  'UNH': 525.6,    // يونايتد هيلث
  'ABT': 112.5,    // أبوت
  'LLY': 785.4,    // إيلي ليلي
  'T': 18.5,       // AT&T
  'MCD': 285.6,    // ماكدونالدز
  'IBM': 168.9,    // IBM
  'CAT': 285.4,    // كاتربيلر
  'GS': 425.6,     // جولدمان ساكس
  'AXP': 215.8,    // أمريكان إكسبريس
  'MMM': 98.5,     // 3M
  'BA': 185.6,     // بوينج
  
  // ناسداك
  'AAPL': 185.5,   // آبل
  'MSFT': 425.8,   // مايكروسوفت
  'GOOGL': 175.2,  // ألفابت
  'AMZN': 185.6,   // أمازون
  'NVDA': 875.4,   // إنفيديا
  'META': 505.2,   // ميتا
  'TSLA': 245.8,   // تسلا
  'AVGO': 1285.6,  // برودكوم
  'NFLX': 625.4,   // نتفليكس
  'AMD': 165.8,    // AMD
  'ADBE': 545.2,   // أدوبي
  'CRM': 285.6,    // سيلزفورس
  'QCOM': 175.4,   // كوالكوم
  'PYPL': 62.5,    // باي بال
  'INTU': 625.8,   // إنتويت
};

// قطاعات الأسهم مع معدلات التقلب
const SECTOR_VOLATILITY: Record<string, number> = {
  'الطاقة': 0.025,
  'Energy': 0.025,
  'البنوك': 0.015,
  'Banks': 0.015,
  'Banking': 0.015,
  'المواد الأساسية': 0.02,
  'Materials': 0.02,
  'Basic Materials': 0.02,
  'الاتصالات': 0.018,
  'Telecom': 0.018,
  'Telecommunications': 0.018,
  'التجزئة': 0.022,
  'Retail': 0.022,
  'Consumer Discretionary': 0.022,
  'العقارات': 0.02,
  'Real Estate': 0.02,
  'الأغذية': 0.012,
  'Food': 0.012,
  'Consumer Staples': 0.012,
  'التكنولوجيا': 0.03,
  'Technology': 0.03,
  'الرعاية الصحية': 0.02,
  'Healthcare': 0.02,
  'الخدمات المالية': 0.018,
  'Financial Services': 0.018,
  'الصناعة': 0.02,
  'Industrial': 0.02,
  'Industrials': 0.02,
  'الخدمات': 0.015,
  'Utilities': 0.015,
  'Services': 0.015,
  'النقل': 0.022,
  'Transportation': 0.022,
  'التأمين': 0.018,
  'Insurance': 0.018,
  'البتروكيماويات': 0.025,
  'Petrochemicals': 0.025,
  'الأسمنت': 0.015,
  'Cement': 0.015,
};

class IntelligentStockEngine {
  
  // الحصول على السعر الأساسي للسهم
  private getBasePrice(symbol: string, marketKey: string): number {
    // إذا كان السعر معروف، استخدمه
    if (REAL_STOCK_PRICES[symbol]) {
      return REAL_STOCK_PRICES[symbol];
    }
    
    // وإلا، ولد سعر عشوائي ضمن نطاق السوق
    const range = MARKET_PRICE_RANGES[marketKey] || { min: 10, max: 100 };
    return range.min + Math.random() * (range.max - range.min);
  }
  
  // الحصول على معدل التقلب للقطاع
  private getVolatility(sector: string): number {
    return SECTOR_VOLATILITY[sector] || 0.02;
  }
  
  // توليد تغيير سعر واقعي
  private generatePriceChange(basePrice: number, volatility: number): {
    change: number;
    changePercent: number;
  } {
    // توزيع طبيعي للتغيير اليومي
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    
    // التغيير النسبي (معظم الأسهم تتغير بين -3% و +3% يومياً)
    const changePercent = z * volatility * 100;
    const clampedChangePercent = Math.max(-5, Math.min(5, changePercent));
    
    const change = basePrice * (clampedChangePercent / 100);
    
    return {
      change: Number(change.toFixed(4)),
      changePercent: Number(clampedChangePercent.toFixed(2))
    };
  }
  
  // توليد بيانات OHLC منطقية
  private generateOHLC(previousClose: number, volatility: number): {
    open: number;
    high: number;
    low: number;
    close: number;
    change: number;
    changePercent: number;
  } {
    // سعر الافتتاح قريب من الإغلاق السابق (فجوة صغيرة)
    const gapPercent = (Math.random() - 0.5) * 0.01; // فجوة -0.5% إلى +0.5%
    const open = previousClose * (1 + gapPercent);
    
    // توليد التغيير اليومي
    const { changePercent } = this.generatePriceChange(previousClose, volatility);
    
    // سعر الإغلاق
    const close = previousClose * (1 + changePercent / 100);
    
    // أعلى وأدنى سعر
    const intraday = volatility * 1.5; // التقلب خلال اليوم
    const highFromOpen = open * (1 + Math.random() * intraday);
    const highFromClose = close * (1 + Math.random() * intraday * 0.5);
    const high = Math.max(open, close, highFromOpen, highFromClose);
    
    const lowFromOpen = open * (1 - Math.random() * intraday);
    const lowFromClose = close * (1 - Math.random() * intraday * 0.5);
    const low = Math.min(open, close, lowFromOpen, lowFromClose);
    
    const change = close - previousClose;
    
    return {
      open: Number(open.toFixed(4)),
      high: Number(high.toFixed(4)),
      low: Number(low.toFixed(4)),
      close: Number(close.toFixed(4)),
      change: Number(change.toFixed(4)),
      changePercent: Number(changePercent.toFixed(2))
    };
  }
  
  // توليد حجم تداول واقعي
  private generateVolume(marketKey: string, isBlueChip: boolean): number {
    const range = MARKET_PRICE_RANGES[marketKey] || { avgVolume: 1000000 };
    const baseVolume = range.avgVolume;
    
    // الأسهم القيادية لها حجم تداول أعلى
    const multiplier = isBlueChip ? 2 + Math.random() * 3 : 0.3 + Math.random() * 1.5;
    
    // تقلب حجم التداول
    const volumeVariation = 0.5 + Math.random();
    
    return Math.floor(baseVolume * multiplier * volumeVariation);
  }
  
  // توليد القيمة السوقية
  private generateMarketCap(price: number, isBlueChip: boolean): number {
    const sharesOutstanding = isBlueChip 
      ? (5 + Math.random() * 15) * 1e9  // 5-20 مليار سهم للشركات الكبرى
      : (0.1 + Math.random() * 2) * 1e9; // 100 مليون - 2 مليار للشركات الصغيرة
    
    return price * sharesOutstanding;
  }
  
  // توليد مؤشرات مالية منطقية
  private generateFinancialRatios(sector: string, isBlueChip: boolean): {
    peRatio: number;
    pbRatio: number;
    eps: number;
    dividendYield: number;
  } {
    // P/E Ratio حسب القطاع
    const sectorPE: Record<string, { min: number; max: number }> = {
      'التكنولوجيا': { min: 20, max: 50 },
      'Technology': { min: 20, max: 50 },
      'البنوك': { min: 8, max: 15 },
      'Banks': { min: 8, max: 15 },
      'Banking': { min: 8, max: 15 },
      'الطاقة': { min: 10, max: 20 },
      'Energy': { min: 10, max: 20 },
      'العقارات': { min: 10, max: 25 },
      'Real Estate': { min: 10, max: 25 },
      'الأغذية': { min: 15, max: 25 },
      'Food': { min: 15, max: 25 },
      'Consumer Staples': { min: 15, max: 25 },
      'الاتصالات': { min: 12, max: 20 },
      'Telecom': { min: 12, max: 20 },
      'Telecommunications': { min: 12, max: 20 },
    };
    
    const peRange = sectorPE[sector] || { min: 10, max: 25 };
    const peRatio = peRange.min + Math.random() * (peRange.max - peRange.min);
    
    const pbRatio = 0.8 + Math.random() * 4;
    const eps = 0.5 + Math.random() * 10;
    
    // عائد التوزيعات - أعلى للشركات القيادية
    const dividendYield = isBlueChip 
      ? 1.5 + Math.random() * 4 
      : Math.random() * 2;
    
    return {
      peRatio: Number(peRatio.toFixed(2)),
      pbRatio: Number(pbRatio.toFixed(2)),
      eps: Number(eps.toFixed(2)),
      dividendYield: Number(dividendYield.toFixed(2))
    };
  }
  
  // توليد أعلى وأدنى 52 أسبوع
  private generate52WeekRange(currentPrice: number, volatility: number): {
    week52High: number;
    week52Low: number;
  } {
    // عادة الأسهم تتحرك 20-50% خلال السنة
    const yearlyVolatility = volatility * 15 + 0.1;
    
    const week52High = currentPrice * (1 + yearlyVolatility * (0.5 + Math.random() * 0.5));
    const week52Low = currentPrice * (1 - yearlyVolatility * (0.3 + Math.random() * 0.4));
    
    return {
      week52High: Number(Math.max(week52High, currentPrice * 1.01).toFixed(4)),
      week52Low: Number(Math.min(week52Low, currentPrice * 0.99).toFixed(4))
    };
  }
  
  // توليد بيانات سهم كاملة
  generateCompleteStockData(
    countryCode?: string,
    language: 'ar' | 'en' = 'ar'
  ): StockDataComplete {
    // اختيار سهم عشوائي
    let stockData: { stock: any; market: any };
    
    if (countryCode && countryCode !== 'ALL') {
      const markets = getMarketByCountry(countryCode);
      if (markets.length > 0) {
        const market = markets[Math.floor(Math.random() * markets.length)];
        const stock = market.stocks[Math.floor(Math.random() * market.stocks.length)];
        stockData = { stock, market };
      } else {
        stockData = getRandomStock();
      }
    } else {
      stockData = getRandomStock();
    }
    
    const stock = stockData.stock;
    const stockMarket = stockData.market;
    
    if (!stock) {
      // قيم افتراضية إذا لم يتم العثور على سهم
      return this.generateDefaultStockData(language);
    }
    
    const isBlueChip = ['2222', '1120', 'COMI', 'FAB', 'EMAAR', 'QNB', 'NBK', 'AAPL', 'MSFT'].includes(stock.symbol);
    const marketKey = stockMarket?.code?.toLowerCase() || 'tadawul';
    const volatility = this.getVolatility(stock.sector || stock.sectorAr);
    
    // السعر الأساسي
    const basePrice = this.getBasePrice(stock.symbol, marketKey);
    const previousClose = basePrice * (0.98 + Math.random() * 0.04);
    
    // توليد OHLC
    const ohlc = this.generateOHLC(previousClose, volatility);
    
    // حجم التداول
    const volume = this.generateVolume(marketKey, isBlueChip);
    const value = volume * ohlc.close;
    const trades = Math.floor(volume / (100 + Math.random() * 500));
    
    // القيمة السوقية
    const marketCap = this.generateMarketCap(ohlc.close, isBlueChip);
    
    // المؤشرات المالية
    const ratios = this.generateFinancialRatios(stock.sector, isBlueChip);
    
    // نطاق 52 أسبوع
    const weekRange = this.generate52WeekRange(ohlc.close, volatility);
    
    // متوسط حجم التداول
    const avgVolume30 = Math.floor(volume * (0.7 + Math.random() * 0.6));
    
    // التاريخ والوقت
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const hours = 9 + Math.floor(Math.random() * 6);
    const minutes = Math.floor(Math.random() * 60);
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    
    return {
      symbol: stock.symbol,
      name: language === 'ar' ? (stock.nameAr || stock.name) : stock.nameEn,
      nameEn: stock.nameEn,
      market: language === 'ar' ? (stockMarket?.nameAr || 'تداول') : (stockMarket?.nameEn || 'Tadawul'),
      marketEn: stockMarket?.nameEn || 'Tadawul',
      sector: language === 'ar' ? (stock.sectorAr || stock.sector) : stock.sector,
      sectorEn: stock.sector,
      currency: stock.currency,
      openPrice: ohlc.open,
      highPrice: ohlc.high,
      lowPrice: ohlc.low,
      closePrice: ohlc.close,
      previousClose: Number(previousClose.toFixed(4)),
      change: ohlc.change,
      changePercent: ohlc.changePercent,
      volume,
      value: Math.floor(value),
      trades,
      marketCap: Math.floor(marketCap),
      ...ratios,
      ...weekRange,
      avgVolume30,
      date,
      time
    };
  }
  
  // بيانات افتراضية
  private generateDefaultStockData(language: 'ar' | 'en'): StockDataComplete {
    const isArabic = language === 'ar';
    return {
      symbol: '2222',
      name: isArabic ? 'أرامكو السعودية' : 'Saudi Aramco',
      nameEn: 'Saudi Aramco',
      market: isArabic ? 'تداول' : 'Tadawul',
      marketEn: 'Tadawul',
      sector: isArabic ? 'الطاقة' : 'Energy',
      sectorEn: 'Energy',
      currency: 'SAR',
      openPrice: 32.45,
      highPrice: 32.85,
      lowPrice: 32.20,
      closePrice: 32.65,
      previousClose: 32.50,
      change: 0.15,
      changePercent: 0.46,
      volume: 15000000,
      value: 489750000,
      trades: 25000,
      marketCap: 6500000000000,
      peRatio: 15.5,
      pbRatio: 2.8,
      eps: 2.1,
      dividendYield: 4.5,
      week52High: 38.50,
      week52Low: 28.20,
      avgVolume30: 12000000,
      date: new Date().toISOString().split('T')[0],
      time: '14:30:00'
    };
  }
  
  // توليد صف بيانات للقوالب
  generateStockRowData(
    fieldType: string,
    countryCode?: string,
    language: 'ar' | 'en' = 'ar',
    context?: Record<string, any>
  ): any {
    // إذا كان السياق يحتوي على بيانات سهم، استخدمها
    if (!context?._stockData) {
      context = context || {};
      context._stockData = this.generateCompleteStockData(countryCode, language);
    }
    
    const stock = context._stockData as StockDataComplete;
    
    switch (fieldType) {
      case 'stockSymbol':
      case 'stockTicker':
      case 'رمز_السهم':
        return stock.symbol;
        
      case 'stockName':
      case 'companyName':
      case 'اسم_الشركة':
      case 'اسم_السهم':
        return stock.name;
        
      case 'stockMarket':
      case 'exchange':
      case 'market':
      case 'السوق':
      case 'البورصة':
        return stock.market;
        
      case 'stockSector':
      case 'sector':
      case 'القطاع':
        return stock.sector;
        
      case 'stockCurrency':
      case 'currency':
      case 'العملة':
        return stock.currency;
        
      case 'openPrice':
      case 'open':
      case 'سعر_الافتتاح':
        return stock.openPrice;
        
      case 'highPrice':
      case 'high':
      case 'أعلى_سعر':
        return stock.highPrice;
        
      case 'lowPrice':
      case 'low':
      case 'أدنى_سعر':
        return stock.lowPrice;
        
      case 'closePrice':
      case 'close':
      case 'سعر_الإغلاق':
        return stock.closePrice;
        
      case 'previousClose':
      case 'prevClose':
      case 'الإغلاق_السابق':
        return stock.previousClose;
        
      case 'priceChange':
      case 'change':
      case 'التغيير':
        return stock.change;
        
      case 'priceChangePercent':
      case 'changePercent':
      case 'نسبة_التغيير':
      case 'التغيير_نسبة':
        return stock.changePercent;
        
      case 'stockVolume':
      case 'volume':
      case 'حجم_التداول':
        return stock.volume;
        
      case 'tradeValue':
      case 'value':
      case 'قيمة_التداول':
        return stock.value;
        
      case 'tradesCount':
      case 'trades':
      case 'عدد_الصفقات':
        return stock.trades;
        
      case 'marketCap':
      case 'القيمة_السوقية':
        return stock.marketCap;
        
      case 'peRatio':
      case 'pe':
      case 'مكرر_الأرباح':
        return stock.peRatio;
        
      case 'pbRatio':
      case 'pb':
      case 'مضاعف_القيمة_الدفترية':
        return stock.pbRatio;
        
      case 'eps':
      case 'ربحية_السهم':
        return stock.eps;
        
      case 'dividendYield':
      case 'dividend':
      case 'عائد_التوزيعات':
        return stock.dividendYield;
        
      case 'week52High':
      case 'yearHigh':
      case 'أعلى_52_أسبوع':
        return stock.week52High;
        
      case 'week52Low':
      case 'yearLow':
      case 'أدنى_52_أسبوع':
        return stock.week52Low;
        
      case 'avgVolume':
      case 'avgVolume30':
      case 'متوسط_التداول':
        return stock.avgVolume30;
        
      case 'tradeDate':
      case 'date':
      case 'التاريخ':
        return stock.date;
        
      case 'tradeTime':
      case 'time':
      case 'الوقت':
        return stock.time;
        
      default:
        return null;
    }
  }
}

// تصدير نسخة واحدة من المحرك
export const intelligentStockEngine = new IntelligentStockEngine();

// تصدير دوال مساعدة
export const generateCompleteStockData = (countryCode?: string, language: 'ar' | 'en' = 'ar') => 
  intelligentStockEngine.generateCompleteStockData(countryCode, language);

export const generateStockFieldValue = (
  fieldType: string,
  countryCode?: string,
  language: 'ar' | 'en' = 'ar',
  context?: Record<string, any>
) => intelligentStockEngine.generateStockRowData(fieldType, countryCode, language, context);
