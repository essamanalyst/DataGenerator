// Statistical Distribution Functions
// توزيعات إحصائية للبيانات

export type DistributionType = 
  | 'uniform'        // توزيع منتظم
  | 'normal'         // توزيع طبيعي (جاوسي)
  | 'exponential'    // توزيع أسي
  | 'logNormal'      // توزيع لوغاريتمي طبيعي
  | 'poisson'        // توزيع بواسون
  | 'binomial'       // توزيع ثنائي الحد
  | 'beta'           // توزيع بيتا
  | 'gamma'          // توزيع جاما
  | 'weibull'        // توزيع ويبل
  | 'pareto'         // توزيع باريتو
  | 'triangular'     // توزيع مثلثي
  | 'bimodal'        // توزيع ثنائي القمة
  | 'skewedLeft'     // توزيع منحرف يساراً
  | 'skewedRight'    // توزيع منحرف يميناً
  | 'custom';        // توزيع مخصص

export interface DistributionParams {
  type: DistributionType;
  min?: number;
  max?: number;
  mean?: number;
  stdDev?: number;
  lambda?: number;
  alpha?: number;
  beta?: number;
  n?: number;
  p?: number;
  shape?: number;
  scale?: number;
  mode?: number;
  customProbabilities?: number[];
  customValues?: number[];
}

export interface DistributionInfo {
  id: DistributionType;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  color: string;
  params: string[];
  useCases: { ar: string[]; en: string[] };
}

export const distributionsList: DistributionInfo[] = [
  {
    id: 'uniform',
    nameAr: 'توزيع منتظم',
    nameEn: 'Uniform Distribution',
    descriptionAr: 'كل القيم لها نفس الاحتمالية - مثالي للاختيار العشوائي المتساوي',
    descriptionEn: 'All values have equal probability - ideal for equal random selection',
    icon: '▬',
    color: 'from-blue-500 to-blue-600',
    params: ['min', 'max'],
    useCases: {
      ar: ['رمي النرد', 'السحوبات العشوائية', 'توزيع الموارد بالتساوي'],
      en: ['Dice rolling', 'Random draws', 'Equal resource distribution']
    }
  },
  {
    id: 'normal',
    nameAr: 'توزيع طبيعي (جاوسي)',
    nameEn: 'Normal (Gaussian) Distribution',
    descriptionAr: 'منحنى الجرس - الأكثر شيوعاً في الطبيعة والعلوم',
    descriptionEn: 'Bell curve - most common in nature and sciences',
    icon: '🔔',
    color: 'from-green-500 to-green-600',
    params: ['mean', 'stdDev'],
    useCases: {
      ar: ['الطول والوزن', 'درجات الاختبارات', 'أخطاء القياس', 'IQ'],
      en: ['Height and weight', 'Test scores', 'Measurement errors', 'IQ']
    }
  },
  {
    id: 'exponential',
    nameAr: 'توزيع أسي',
    nameEn: 'Exponential Distribution',
    descriptionAr: 'للأحداث التي تحدث بمعدل ثابت - الفترات بين الأحداث',
    descriptionEn: 'For events occurring at constant rate - time between events',
    icon: '📉',
    color: 'from-red-500 to-red-600',
    params: ['lambda'],
    useCases: {
      ar: ['وقت انتظار العملاء', 'عمر المنتجات', 'فترات بين المكالمات'],
      en: ['Customer wait time', 'Product lifetime', 'Time between calls']
    }
  },
  {
    id: 'logNormal',
    nameAr: 'توزيع لوغاريتمي طبيعي',
    nameEn: 'Log-Normal Distribution',
    descriptionAr: 'للقيم الموجبة فقط مع ذيل طويل - الدخل والأسعار',
    descriptionEn: 'For positive values with long tail - income and prices',
    icon: '📊',
    color: 'from-purple-500 to-purple-600',
    params: ['mean', 'stdDev'],
    useCases: {
      ar: ['توزيع الدخل', 'أسعار الأسهم', 'حجم الشركات', 'أحجام الملفات'],
      en: ['Income distribution', 'Stock prices', 'Company sizes', 'File sizes']
    }
  },
  {
    id: 'poisson',
    nameAr: 'توزيع بواسون',
    nameEn: 'Poisson Distribution',
    descriptionAr: 'لعدد الأحداث في فترة زمنية - العد الصحيح',
    descriptionEn: 'For number of events in time period - integer counts',
    icon: '🔢',
    color: 'from-yellow-500 to-yellow-600',
    params: ['lambda'],
    useCases: {
      ar: ['عدد المكالمات/ساعة', 'عدد الحوادث', 'عدد العيوب', 'عدد الزوار'],
      en: ['Calls per hour', 'Accident counts', 'Defect counts', 'Visitor counts']
    }
  },
  {
    id: 'binomial',
    nameAr: 'توزيع ثنائي الحد',
    nameEn: 'Binomial Distribution',
    descriptionAr: 'لتجارب النجاح/الفشل المتكررة',
    descriptionEn: 'For repeated success/failure trials',
    icon: '🎯',
    color: 'from-pink-500 to-pink-600',
    params: ['n', 'p'],
    useCases: {
      ar: ['نتائج الاستبيانات', 'معدل النجاح', 'رمي العملة', 'معدل التحويل'],
      en: ['Survey results', 'Success rates', 'Coin flipping', 'Conversion rates']
    }
  },
  {
    id: 'beta',
    nameAr: 'توزيع بيتا',
    nameEn: 'Beta Distribution',
    descriptionAr: 'للنسب والاحتمالات (0-1) - مرن جداً',
    descriptionEn: 'For proportions and probabilities (0-1) - very flexible',
    icon: '📈',
    color: 'from-indigo-500 to-indigo-600',
    params: ['alpha', 'beta'],
    useCases: {
      ar: ['معدلات النجاح', 'نسب الرضا', 'احتمالات التحويل', 'A/B Testing'],
      en: ['Success rates', 'Satisfaction rates', 'Conversion probabilities', 'A/B Testing']
    }
  },
  {
    id: 'gamma',
    nameAr: 'توزيع جاما',
    nameEn: 'Gamma Distribution',
    descriptionAr: 'للقيم الموجبة - أوقات الانتظار التراكمية',
    descriptionEn: 'For positive values - cumulative waiting times',
    icon: '⏱️',
    color: 'from-orange-500 to-orange-600',
    params: ['shape', 'scale'],
    useCases: {
      ar: ['وقت إكمال المهام', 'كمية الأمطار', 'التأمين والمطالبات'],
      en: ['Task completion time', 'Rainfall amounts', 'Insurance claims']
    }
  },
  {
    id: 'weibull',
    nameAr: 'توزيع ويبل',
    nameEn: 'Weibull Distribution',
    descriptionAr: 'لتحليل الموثوقية وعمر المنتجات',
    descriptionEn: 'For reliability analysis and product lifetime',
    icon: '⚙️',
    color: 'from-teal-500 to-teal-600',
    params: ['shape', 'scale'],
    useCases: {
      ar: ['عمر الآلات', 'تحليل الأعطال', 'ضمان المنتجات'],
      en: ['Machine lifetime', 'Failure analysis', 'Product warranty']
    }
  },
  {
    id: 'pareto',
    nameAr: 'توزيع باريتو',
    nameEn: 'Pareto Distribution',
    descriptionAr: 'قاعدة 80/20 - الثروة والظواهر الطبيعية',
    descriptionEn: '80/20 rule - wealth and natural phenomena',
    icon: '💰',
    color: 'from-amber-500 to-amber-600',
    params: ['alpha', 'min'],
    useCases: {
      ar: ['توزيع الثروة', 'حجم المدن', 'شعبية المنتجات', 'قاعدة 80/20'],
      en: ['Wealth distribution', 'City sizes', 'Product popularity', '80/20 rule']
    }
  },
  {
    id: 'triangular',
    nameAr: 'توزيع مثلثي',
    nameEn: 'Triangular Distribution',
    descriptionAr: 'بسيط مع قيمة أكثر شيوعاً (المنوال)',
    descriptionEn: 'Simple with most common value (mode)',
    icon: '🔺',
    color: 'from-cyan-500 to-cyan-600',
    params: ['min', 'max', 'mode'],
    useCases: {
      ar: ['تقدير المشاريع', 'تحليل المخاطر', 'PERT'],
      en: ['Project estimation', 'Risk analysis', 'PERT']
    }
  },
  {
    id: 'bimodal',
    nameAr: 'توزيع ثنائي القمة',
    nameEn: 'Bimodal Distribution',
    descriptionAr: 'قمتان - لمجموعتين مختلفتين في البيانات',
    descriptionEn: 'Two peaks - for two different groups in data',
    icon: '🐪',
    color: 'from-rose-500 to-rose-600',
    params: ['mean', 'stdDev'],
    useCases: {
      ar: ['مجموعات مختلفة', 'ذكور وإناث', 'مبتدئين وخبراء'],
      en: ['Different groups', 'Males and females', 'Beginners and experts']
    }
  },
  {
    id: 'skewedLeft',
    nameAr: 'توزيع منحرف يساراً',
    nameEn: 'Left-Skewed Distribution',
    descriptionAr: 'ذيل طويل للقيم المنخفضة',
    descriptionEn: 'Long tail for low values',
    icon: '◀️',
    color: 'from-fuchsia-500 to-fuchsia-600',
    params: ['mean', 'stdDev'],
    useCases: {
      ar: ['أعمار الوفاة', 'درجات الاختبار السهل', 'رضا العملاء العالي'],
      en: ['Age at death', 'Easy test scores', 'High customer satisfaction']
    }
  },
  {
    id: 'skewedRight',
    nameAr: 'توزيع منحرف يميناً',
    nameEn: 'Right-Skewed Distribution',
    descriptionAr: 'ذيل طويل للقيم العالية',
    descriptionEn: 'Long tail for high values',
    icon: '▶️',
    color: 'from-lime-500 to-lime-600',
    params: ['mean', 'stdDev'],
    useCases: {
      ar: ['الدخل', 'أسعار المنازل', 'وقت الانتظار'],
      en: ['Income', 'House prices', 'Waiting time']
    }
  },
  {
    id: 'custom',
    nameAr: 'توزيع مخصص',
    nameEn: 'Custom Distribution',
    descriptionAr: 'حدد احتمالاتك الخاصة لكل قيمة',
    descriptionEn: 'Define your own probabilities for each value',
    icon: '🎨',
    color: 'from-gray-500 to-gray-600',
    params: ['customProbabilities', 'customValues'],
    useCases: {
      ar: ['توزيعات خاصة', 'بيانات تاريخية', 'سيناريوهات محددة'],
      en: ['Special distributions', 'Historical data', 'Specific scenarios']
    }
  }
];

// Box-Muller transform for normal distribution
function boxMuller(): [number, number] {
  let u1 = 0, u2 = 0;
  while (u1 === 0) u1 = Math.random();
  while (u2 === 0) u2 = Math.random();
  const mag = Math.sqrt(-2.0 * Math.log(u1));
  const z0 = mag * Math.cos(2.0 * Math.PI * u2);
  const z1 = mag * Math.sin(2.0 * Math.PI * u2);
  return [z0, z1];
}

// Standard normal random number
function standardNormal(): number {
  return boxMuller()[0];
}

// Gamma distribution using Marsaglia and Tsang's method
function gammaVariate(shape: number, scale: number = 1): number {
  if (shape < 1) {
    return gammaVariate(shape + 1, scale) * Math.pow(Math.random(), 1 / shape);
  }
  
  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);
  
  while (true) {
    let x: number, v: number;
    do {
      x = standardNormal();
      v = 1 + c * x;
    } while (v <= 0);
    
    v = v * v * v;
    const u = Math.random();
    
    if (u < 1 - 0.0331 * (x * x) * (x * x)) {
      return d * v * scale;
    }
    
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) {
      return d * v * scale;
    }
  }
}

// Beta distribution
function betaVariate(alpha: number, beta: number): number {
  const x = gammaVariate(alpha);
  const y = gammaVariate(beta);
  return x / (x + y);
}

// Generate value based on distribution
export function generateFromDistribution(
  params: DistributionParams,
  minValue: number = 0,
  maxValue: number = 100
): number {
  const { type } = params;
  const min = params.min ?? minValue;
  const max = params.max ?? maxValue;
  const mean = params.mean ?? (min + max) / 2;
  const stdDev = params.stdDev ?? (max - min) / 6;
  
  switch (type) {
    case 'uniform': {
      return min + Math.random() * (max - min);
    }
    
    case 'normal': {
      const value = mean + standardNormal() * stdDev;
      return Math.max(min, Math.min(max, value));
    }
    
    case 'exponential': {
      const lambda = params.lambda ?? 1;
      const value = -Math.log(1 - Math.random()) / lambda;
      return min + value * (max - min) / (3 / lambda);
    }
    
    case 'logNormal': {
      const logMean = Math.log(mean * mean / Math.sqrt(stdDev * stdDev + mean * mean));
      const logStdDev = Math.sqrt(Math.log(1 + (stdDev * stdDev) / (mean * mean)));
      const value = Math.exp(logMean + standardNormal() * logStdDev);
      return Math.max(min, Math.min(max, value));
    }
    
    case 'poisson': {
      const lambda = params.lambda ?? mean;
      const L = Math.exp(-lambda);
      let k = 0;
      let p = 1;
      do {
        k++;
        p *= Math.random();
      } while (p > L);
      const value = k - 1;
      return Math.max(min, Math.min(max, value));
    }
    
    case 'binomial': {
      const n = params.n ?? 10;
      const p = params.p ?? 0.5;
      let successes = 0;
      for (let i = 0; i < n; i++) {
        if (Math.random() < p) successes++;
      }
      const normalizedValue = min + (successes / n) * (max - min);
      return normalizedValue;
    }
    
    case 'beta': {
      const alpha = params.alpha ?? 2;
      const beta = params.beta ?? 5;
      const value = betaVariate(alpha, beta);
      return min + value * (max - min);
    }
    
    case 'gamma': {
      const shape = params.shape ?? 2;
      const scale = params.scale ?? 1;
      const value = gammaVariate(shape, scale);
      const normalized = value / (shape * scale * 3);
      return min + Math.min(1, normalized) * (max - min);
    }
    
    case 'weibull': {
      const shape = params.shape ?? 1.5;
      const scale = params.scale ?? 1;
      const u = Math.random();
      const value = scale * Math.pow(-Math.log(1 - u), 1 / shape);
      const normalized = value / (scale * 3);
      return min + Math.min(1, normalized) * (max - min);
    }
    
    case 'pareto': {
      const alpha = params.alpha ?? 2;
      const xm = params.min ?? 1;
      const u = Math.random();
      const value = xm / Math.pow(u, 1 / alpha);
      const normalized = (value - xm) / (xm * 10);
      return min + Math.min(1, normalized) * (max - min);
    }
    
    case 'triangular': {
      const mode = params.mode ?? mean;
      const fc = (mode - min) / (max - min);
      const u = Math.random();
      if (u < fc) {
        return min + Math.sqrt(u * (max - min) * (mode - min));
      } else {
        return max - Math.sqrt((1 - u) * (max - min) * (max - mode));
      }
    }
    
    case 'bimodal': {
      const peak1 = min + (max - min) * 0.3;
      const peak2 = min + (max - min) * 0.7;
      const localStdDev = (max - min) * 0.1;
      if (Math.random() < 0.5) {
        return Math.max(min, Math.min(max, peak1 + standardNormal() * localStdDev));
      } else {
        return Math.max(min, Math.min(max, peak2 + standardNormal() * localStdDev));
      }
    }
    
    case 'skewedLeft': {
      const value = betaVariate(5, 2);
      return min + value * (max - min);
    }
    
    case 'skewedRight': {
      const value = betaVariate(2, 5);
      return min + value * (max - min);
    }
    
    case 'custom': {
      const probs = params.customProbabilities ?? [0.25, 0.5, 0.25];
      const values = params.customValues ?? [min, mean, max];
      const cumulative: number[] = [];
      let sum = 0;
      for (const p of probs) {
        sum += p;
        cumulative.push(sum);
      }
      const r = Math.random() * sum;
      for (let i = 0; i < cumulative.length; i++) {
        if (r <= cumulative[i]) {
          return values[i] ?? min;
        }
      }
      return values[values.length - 1] ?? max;
    }
    
    default:
      return min + Math.random() * (max - min);
  }
}

// Generate distribution preview data for visualization
export function generateDistributionPreview(
  params: DistributionParams,
  sampleSize: number = 1000,
  bins: number = 50
): { x: number; y: number }[] {
  const min = params.min ?? 0;
  const max = params.max ?? 100;
  const samples: number[] = [];
  
  for (let i = 0; i < sampleSize; i++) {
    samples.push(generateFromDistribution(params, min, max));
  }
  
  const binWidth = (max - min) / bins;
  const histogram: number[] = new Array(bins).fill(0);
  
  for (const sample of samples) {
    const binIndex = Math.min(bins - 1, Math.floor((sample - min) / binWidth));
    histogram[binIndex]++;
  }
  
  const maxCount = Math.max(...histogram);
  
  return histogram.map((count, i) => ({
    x: min + (i + 0.5) * binWidth,
    y: count / maxCount
  }));
}

// Calculate distribution statistics
export function calculateDistributionStats(
  params: DistributionParams,
  sampleSize: number = 10000
): {
  mean: number;
  median: number;
  stdDev: number;
  min: number;
  max: number;
  skewness: number;
  kurtosis: number;
} {
  const min = params.min ?? 0;
  const max = params.max ?? 100;
  const samples: number[] = [];
  
  for (let i = 0; i < sampleSize; i++) {
    samples.push(generateFromDistribution(params, min, max));
  }
  
  samples.sort((a, b) => a - b);
  
  const n = samples.length;
  const sum = samples.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const median = n % 2 === 0 
    ? (samples[n/2 - 1] + samples[n/2]) / 2 
    : samples[Math.floor(n/2)];
  
  const squaredDiffs = samples.map(x => Math.pow(x - mean, 2));
  const variance = squaredDiffs.reduce((a, b) => a + b, 0) / n;
  const stdDev = Math.sqrt(variance);
  
  const cubedDiffs = samples.map(x => Math.pow((x - mean) / stdDev, 3));
  const skewness = cubedDiffs.reduce((a, b) => a + b, 0) / n;
  
  const fourthDiffs = samples.map(x => Math.pow((x - mean) / stdDev, 4));
  const kurtosis = fourthDiffs.reduce((a, b) => a + b, 0) / n - 3;
  
  return {
    mean,
    median,
    stdDev,
    min: samples[0],
    max: samples[n - 1],
    skewness,
    kurtosis
  };
}
