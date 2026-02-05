// SimAI - محرك الذكاء الاصطناعي المحاكي لتوليد بيانات واقعية ومنطقية
// هذا النظام يحاكي سلوك الذكاء الاصطناعي لإنتاج بيانات مترابطة ومنطقية

export interface PersonContext {
  id: string;
  gender: 'male' | 'female';
  age: number;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  birthDate: Date;
  maritalStatus: string;
  education: string;
  occupation: string;
  salary: number;
  company: string;
}

export interface CompanyContext {
  name: string;
  nameEn: string;
  sector: string;
  country: string;
  founded: number;
  employees: number;
  revenue: number;
  stockSymbol: string;
}

// قواعد البيانات الذكية
export const SMART_DATABASE = {
  // الأسماء العربية حسب الدولة والجنس
  names: {
    SA: {
      male: {
        first: ['محمد', 'عبدالله', 'فهد', 'سلطان', 'خالد', 'عبدالرحمن', 'سعود', 'تركي', 'نايف', 'بندر', 'فيصل', 'عبدالعزيز', 'أحمد', 'سعد', 'ماجد', 'وليد', 'عمر', 'يوسف', 'إبراهيم', 'علي'],
        last: ['القحطاني', 'العتيبي', 'الغامدي', 'الدوسري', 'الشمري', 'المطيري', 'الحربي', 'الزهراني', 'السبيعي', 'العنزي', 'الشهري', 'البقمي', 'الخالدي', 'السلمي', 'المالكي', 'الجهني', 'الرشيدي', 'العمري', 'الأحمدي', 'الفهيد']
      },
      female: {
        first: ['نورة', 'سارة', 'فاطمة', 'منيرة', 'هيفاء', 'ريم', 'دانة', 'لمى', 'غادة', 'أمل', 'هند', 'مها', 'عبير', 'وفاء', 'سلمى', 'رنا', 'ليلى', 'جواهر', 'البندري', 'لطيفة'],
        last: ['القحطاني', 'العتيبي', 'الغامدي', 'الدوسري', 'الشمري', 'المطيري', 'الحربي', 'الزهراني', 'السبيعي', 'العنزي']
      }
    },
    EG: {
      male: {
        first: ['أحمد', 'محمد', 'محمود', 'مصطفى', 'عمر', 'علي', 'حسن', 'حسين', 'إبراهيم', 'خالد', 'طارق', 'عمرو', 'كريم', 'ياسر', 'هشام', 'أشرف', 'وائل', 'سامح', 'شريف', 'رامي'],
        last: ['محمد', 'أحمد', 'حسن', 'إبراهيم', 'علي', 'عبدالله', 'السيد', 'عبدالرحمن', 'الشريف', 'المصري', 'النجار', 'الحداد', 'البنا', 'السعيد', 'فؤاد', 'رمضان', 'عيد', 'سالم', 'يوسف', 'خليل']
      },
      female: {
        first: ['فاطمة', 'زينب', 'آية', 'مريم', 'نور', 'سارة', 'هبة', 'إسراء', 'دينا', 'رنا', 'منى', 'هالة', 'سمر', 'ياسمين', 'نهى', 'شيماء', 'إيمان', 'أمنية', 'سلمى', 'مي'],
        last: ['محمد', 'أحمد', 'حسن', 'إبراهيم', 'علي', 'عبدالله', 'السيد', 'عبدالرحمن', 'الشريف', 'المصري']
      }
    },
    AE: {
      male: {
        first: ['محمد', 'أحمد', 'راشد', 'سلطان', 'خالد', 'عبدالله', 'سعيد', 'علي', 'حمدان', 'ماجد', 'منصور', 'سيف', 'عمر', 'زايد', 'طحنون', 'هزاع', 'عمار', 'فيصل', 'ثاني', 'حمد'],
        last: ['المنصوري', 'الكتبي', 'النعيمي', 'الشامسي', 'المزروعي', 'الظاهري', 'الحامدي', 'السويدي', 'الرميثي', 'الفلاسي', 'المهيري', 'الكعبي', 'الهاشمي', 'العامري', 'الخييلي', 'القبيسي', 'الدرمكي', 'المري', 'الطنيجي', 'النقبي']
      },
      female: {
        first: ['فاطمة', 'موزة', 'عائشة', 'مريم', 'شمسة', 'لطيفة', 'منى', 'هند', 'سلامة', 'علياء', 'آمنة', 'شيخة', 'ميثاء', 'حصة', 'سارة', 'نورة', 'ريم', 'دانة', 'مهرة', 'شما'],
        last: ['المنصوري', 'الكتبي', 'النعيمي', 'الشامسي', 'المزروعي', 'الظاهري', 'الحامدي', 'السويدي', 'الرميثي', 'الفلاسي']
      }
    },
    JO: {
      male: {
        first: ['محمد', 'أحمد', 'عبدالله', 'عمر', 'خالد', 'يوسف', 'إبراهيم', 'حسين', 'علي', 'طارق', 'زيد', 'معاذ', 'قصي', 'باسل', 'رامي', 'سامر', 'فادي', 'وسام', 'أنس', 'مالك'],
        last: ['العبادي', 'الطراونة', 'المجالي', 'الفايز', 'البطاينة', 'الزعبي', 'العمري', 'الشوابكة', 'القضاة', 'الحوراني', 'الرواشدة', 'الخوالدة', 'الحياري', 'المومني', 'الصمادي', 'النسور', 'الخريسات', 'الشريدة', 'العدوان', 'الخصاونة']
      },
      female: {
        first: ['رانيا', 'دانا', 'لين', 'نور', 'سارة', 'هبة', 'رنا', 'ديما', 'تالا', 'يارا', 'لارا', 'مايا', 'سلمى', 'آلاء', 'إسراء', 'نادين', 'رزان', 'سجى', 'جمانة', 'رهف'],
        last: ['العبادي', 'الطراونة', 'المجالي', 'الفايز', 'البطاينة', 'الزعبي', 'العمري', 'الشوابكة', 'القضاة', 'الحوراني']
      }
    },
    KW: {
      male: {
        first: ['محمد', 'أحمد', 'عبدالله', 'جاسم', 'خالد', 'فهد', 'سالم', 'مشاري', 'بدر', 'فيصل', 'ناصر', 'عبدالعزيز', 'يوسف', 'حمد', 'طلال', 'وليد', 'سعد', 'عمر', 'علي', 'حسين'],
        last: ['الصباح', 'العنزي', 'المطيري', 'الشمري', 'الرشيدي', 'العجمي', 'الفضلي', 'المطوع', 'البحوه', 'الشايع', 'الغانم', 'الخرافي', 'الصقر', 'البدر', 'الحمد', 'المضف', 'الراشد', 'العيار', 'القطان', 'السعد']
      },
      female: {
        first: ['فاطمة', 'منيرة', 'نورة', 'سارة', 'دانة', 'غدير', 'هيا', 'لولوة', 'شريفة', 'أمل', 'بثينة', 'سعاد', 'مريم', 'زهراء', 'آمنة', 'علياء', 'ريم', 'هند', 'مي', 'بيبي'],
        last: ['الصباح', 'العنزي', 'المطيري', 'الشمري', 'الرشيدي', 'العجمي', 'الفضلي', 'المطوع', 'البحوه', 'الشايع']
      }
    },
    QA: {
      male: {
        first: ['محمد', 'أحمد', 'عبدالله', 'خالد', 'حمد', 'تميم', 'جاسم', 'علي', 'ناصر', 'فهد', 'سعود', 'عبدالرحمن', 'يوسف', 'سلطان', 'راشد', 'مبارك', 'سالم', 'خليفة', 'عبدالعزيز', 'طلال'],
        last: ['آل ثاني', 'العطية', 'المهندي', 'الكواري', 'السليطي', 'الخليفي', 'النعيمي', 'المري', 'الهاجري', 'الكبيسي', 'السادة', 'البوعينين', 'الدوسري', 'المناعي', 'الأنصاري', 'الموسى', 'الحمادي', 'البنعلي', 'الجابر', 'الرميحي']
      },
      female: {
        first: ['موزة', 'نورة', 'فاطمة', 'مريم', 'شيخة', 'هند', 'علياء', 'دانة', 'سارة', 'آمنة', 'حصة', 'الجوهرة', 'لطيفة', 'ريم', 'منى', 'هيا', 'العنود', 'شمسة', 'مها', 'أسماء'],
        last: ['آل ثاني', 'العطية', 'المهندي', 'الكواري', 'السليطي', 'الخليفي', 'النعيمي', 'المري', 'الهاجري', 'الكبيسي']
      }
    },
    BH: {
      male: {
        first: ['محمد', 'أحمد', 'علي', 'حسين', 'خالد', 'عبدالله', 'حسن', 'جعفر', 'إبراهيم', 'يوسف', 'سلمان', 'عيسى', 'جاسم', 'ناصر', 'فيصل', 'عبدالرحمن', 'حمد', 'سعيد', 'ماجد', 'طارق'],
        last: ['آل خليفة', 'الزياني', 'الموسوي', 'الفضل', 'البنا', 'العلوي', 'كانو', 'فخرو', 'الشيراوي', 'القصاب', 'البحارنة', 'المؤيد', 'جناحي', 'رجب', 'المناعي', 'السيد', 'الحايكي', 'بوحسين', 'خلف', 'الغتم']
      },
      female: {
        first: ['فاطمة', 'زهراء', 'مريم', 'سارة', 'نورة', 'هدى', 'زينب', 'آمنة', 'حنان', 'سمية', 'إيمان', 'هالة', 'سبيكة', 'لطيفة', 'منى', 'هيفاء', 'دلال', 'أمل', 'سعاد', 'وفاء'],
        last: ['آل خليفة', 'الزياني', 'الموسوي', 'الفضل', 'البنا', 'العلوي', 'كانو', 'فخرو', 'الشيراوي', 'القصاب']
      }
    },
    OM: {
      male: {
        first: ['قابوس', 'هيثم', 'سعيد', 'محمد', 'أحمد', 'علي', 'خالد', 'سالم', 'ناصر', 'يوسف', 'حمد', 'سلطان', 'مالك', 'طارق', 'فهد', 'عبدالله', 'راشد', 'سيف', 'هلال', 'بدر'],
        last: ['البوسعيدي', 'الحارثي', 'البلوشي', 'الرواحي', 'الكندي', 'المحروقي', 'الهنائي', 'الشنفري', 'الغافري', 'السعدي', 'العبري', 'الراشدي', 'الوهيبي', 'المعولي', 'الشحي', 'البطاشي', 'الحاتمي', 'المقبالي', 'السيابي', 'اللمكي']
      },
      female: {
        first: ['فاطمة', 'آمنة', 'مريم', 'عائشة', 'سارة', 'نورة', 'زينب', 'خديجة', 'هدى', 'سلمى', 'منى', 'عهد', 'شيخة', 'موزة', 'ريم', 'بثينة', 'رقية', 'علياء', 'مها', 'بدرية'],
        last: ['البوسعيدي', 'الحارثي', 'البلوشي', 'الرواحي', 'الكندي', 'المحروقي', 'الهنائي', 'الشنفري', 'الغافري', 'السعدي']
      }
    },
    LB: {
      male: {
        first: ['محمد', 'أحمد', 'علي', 'حسن', 'كريم', 'سامي', 'طوني', 'جورج', 'إيلي', 'ربيع', 'وليد', 'رامي', 'زياد', 'فادي', 'مروان', 'باسم', 'بيار', 'ميشال', 'أنطوان', 'شربل'],
        last: ['الحريري', 'جنبلاط', 'بري', 'عون', 'فرنجية', 'جعجع', 'الجميل', 'سلام', 'كرامي', 'خوري', 'نصرالله', 'عيتاني', 'الصلح', 'شمعون', 'معوض', 'طرابلسي', 'حداد', 'صعب', 'نجار', 'بيطار']
      },
      female: {
        first: ['فاطمة', 'زينب', 'مريم', 'نادين', 'ريما', 'مايا', 'نانسي', 'هيفاء', 'إليسا', 'كارلا', 'ريتا', 'سيرين', 'لارا', 'تالا', 'ساندرا', 'جويل', 'كريستين', 'ماريا', 'لينا', 'سارة'],
        last: ['الحريري', 'جنبلاط', 'بري', 'عون', 'فرنجية', 'جعجع', 'الجميل', 'سلام', 'كرامي', 'خوري']
      }
    },
    MA: {
      male: {
        first: ['محمد', 'أحمد', 'يوسف', 'عبدالله', 'إبراهيم', 'عمر', 'أمين', 'كريم', 'ياسين', 'أيوب', 'حمزة', 'إلياس', 'آدم', 'زكريا', 'عثمان', 'إدريس', 'هشام', 'رشيد', 'سعيد', 'مهدي'],
        last: ['العلوي', 'الفاسي', 'بنكيران', 'العثماني', 'الحبيب', 'المراكشي', 'الرباطي', 'الودغيري', 'بوعزة', 'الشرقاوي', 'التازي', 'العماري', 'الإدريسي', 'المنصوري', 'بنموسى', 'الجواهري', 'بلخياط', 'الكتاني', 'اليوسفي', 'الوزاني']
      },
      female: {
        first: ['فاطمة الزهراء', 'مريم', 'خديجة', 'آمنة', 'سلمى', 'سارة', 'نجاة', 'حنان', 'ليلى', 'سناء', 'نادية', 'سعيدة', 'كريمة', 'رجاء', 'زينب', 'لطيفة', 'حياة', 'إيمان', 'وفاء', 'سميرة'],
        last: ['العلوي', 'الفاسي', 'بنكيران', 'العثماني', 'الحبيب', 'المراكشي', 'الرباطي', 'الودغيري', 'بوعزة', 'الشرقاوي']
      }
    },
    IQ: {
      male: {
        first: ['محمد', 'علي', 'حسين', 'حسن', 'أحمد', 'عباس', 'جعفر', 'كاظم', 'مصطفى', 'حيدر', 'قاسم', 'عمار', 'زيد', 'سجاد', 'مهند', 'كرار', 'علاء', 'حسام', 'باسم', 'فاضل'],
        last: ['الموسوي', 'الحسيني', 'العلوي', 'الخفاجي', 'الجبوري', 'السامرائي', 'الدليمي', 'العبيدي', 'الزبيدي', 'النجفي', 'الكربلائي', 'البصري', 'الكاظمي', 'الحلي', 'الشمري', 'العنبري', 'الربيعي', 'المياحي', 'السعدي', 'الطائي']
      },
      female: {
        first: ['زهراء', 'فاطمة', 'مريم', 'زينب', 'رقية', 'سجى', 'نور', 'آلاء', 'بتول', 'حوراء', 'كوثر', 'رحاب', 'دعاء', 'هدى', 'سارة', 'رنا', 'رغد', 'ريام', 'تبارك', 'أسماء'],
        last: ['الموسوي', 'الحسيني', 'العلوي', 'الخفاجي', 'الجبوري', 'السامرائي', 'الدليمي', 'العبيدي', 'الزبيدي', 'النجفي']
      }
    },
    SY: {
      male: {
        first: ['محمد', 'أحمد', 'محمود', 'خالد', 'عمر', 'علي', 'حسن', 'باسل', 'فراس', 'مازن', 'رامي', 'سامر', 'وسيم', 'كنان', 'يزن', 'أنس', 'معتز', 'غيث', 'حازم', 'قصي'],
        last: ['الأسد', 'الشرع', 'طلاس', 'كنعان', 'شهاب', 'الأتاسي', 'القوتلي', 'الحسني', 'العظم', 'الجابري', 'البيطار', 'مخلوف', 'الشيشكلي', 'الدويري', 'الكزبري', 'القدسي', 'الحفار', 'الصباغ', 'النحاس', 'المالح']
      },
      female: {
        first: ['فاطمة', 'زينب', 'ريم', 'رنا', 'لينا', 'دانا', 'سارة', 'هبة', 'ديمة', 'مايا', 'لمى', 'نور', 'سمر', 'رغد', 'سلمى', 'آلاء', 'رهف', 'تالا', 'يارا', 'جنى'],
        last: ['الأسد', 'الشرع', 'طلاس', 'كنعان', 'شهاب', 'الأتاسي', 'القوتلي', 'الحسني', 'العظم', 'الجابري']
      }
    },
    PS: {
      male: {
        first: ['محمد', 'أحمد', 'محمود', 'إبراهيم', 'يوسف', 'خالد', 'عمر', 'علي', 'حسن', 'سامي', 'طارق', 'رامي', 'باسم', 'وليد', 'نضال', 'جمال', 'كمال', 'صلاح', 'فادي', 'مروان'],
        last: ['عباس', 'هنية', 'عرفات', 'البرغوثي', 'نصرالله', 'الشقاقي', 'عشراوي', 'قريع', 'دحلان', 'المصري', 'سلام', 'الخطيب', 'السعدي', 'نابلسي', 'غزة', 'القدس', 'الخليلي', 'الرملاوي', 'اليافاوي', 'البيتاوي']
      },
      female: {
        first: ['فاطمة', 'خديجة', 'مريم', 'سارة', 'نور', 'آلاء', 'دانا', 'رنا', 'لينا', 'هبة', 'إسراء', 'يارا', 'ميس', 'ريم', 'رهف', 'جنى', 'سلمى', 'ليان', 'لمى', 'تالا'],
        last: ['عباس', 'هنية', 'عرفات', 'البرغوثي', 'نصرالله', 'الشقاقي', 'عشراوي', 'قريع', 'دحلان', 'المصري']
      }
    },
    YE: {
      male: {
        first: ['محمد', 'أحمد', 'علي', 'عبدالله', 'صالح', 'خالد', 'عبدالرحمن', 'ناصر', 'سالم', 'عمر', 'فهد', 'طارق', 'سعيد', 'عبدالملك', 'هاني', 'ياسر', 'مراد', 'أنور', 'جمال', 'كمال'],
        last: ['الأحمر', 'صالح', 'الحوثي', 'هادي', 'البيض', 'الزنداني', 'العطاس', 'الشامي', 'المقطري', 'الحميدي', 'باذيب', 'باسندوة', 'الجفري', 'السقاف', 'بن دغر', 'العولقي', 'الحاج', 'النخعي', 'الريمي', 'الوصابي']
      },
      female: {
        first: ['فاطمة', 'زينب', 'خديجة', 'آمنة', 'سارة', 'مريم', 'نورة', 'أمل', 'هدى', 'سعاد', 'نجلاء', 'سميرة', 'إيمان', 'حنان', 'وفاء', 'سمية', 'رقية', 'بلقيس', 'آسيا', 'منى'],
        last: ['الأحمر', 'صالح', 'الحوثي', 'هادي', 'البيض', 'الزنداني', 'العطاس', 'الشامي', 'المقطري', 'الحميدي']
      }
    },
    SD: {
      male: {
        first: ['محمد', 'أحمد', 'عمر', 'إبراهيم', 'عبدالله', 'صلاح', 'خالد', 'بكري', 'الصادق', 'جعفر', 'حسن', 'علي', 'طارق', 'معتصم', 'عوض', 'عثمان', 'مصطفى', 'زكريا', 'آدم', 'موسى'],
        last: ['البشير', 'المهدي', 'الترابي', 'حمدوك', 'البرهان', 'دقلو', 'كرتي', 'عوض', 'سوار الذهب', 'النميري', 'عبدالوهاب', 'الخليفة', 'آدم', 'الفاضل', 'محجوب', 'الصادق', 'حسين', 'عثمان', 'بابكر', 'الطيب']
      },
      female: {
        first: ['فاطمة', 'زينب', 'آمنة', 'مريم', 'خديجة', 'سارة', 'هالة', 'سلمى', 'نورة', 'إيمان', 'سمية', 'رحاب', 'إشراق', 'مروة', 'وفاء', 'سعاد', 'ريم', 'لمياء', 'هدى', 'أماني'],
        last: ['البشير', 'المهدي', 'الترابي', 'حمدوك', 'البرهان', 'دقلو', 'كرتي', 'عوض', 'سوار الذهب', 'النميري']
      }
    },
    LY: {
      male: {
        first: ['محمد', 'أحمد', 'علي', 'عمر', 'خالد', 'إبراهيم', 'سالم', 'عبدالسلام', 'مصطفى', 'عبدالله', 'سليمان', 'صلاح', 'عبدالرحمن', 'الصادق', 'فتحي', 'منصور', 'محمود', 'أنور', 'طارق', 'رمضان'],
        last: ['القذافي', 'حفتر', 'السراج', 'جلال', 'الورفلي', 'الزنتاني', 'المصراتي', 'البنغازي', 'الطرابلسي', 'السويحلي', 'الكيب', 'الثني', 'المقريف', 'عبدالجليل', 'الككلي', 'البدري', 'الشريف', 'العبار', 'الدبيبة', 'باشاغا']
      },
      female: {
        first: ['فاطمة', 'خديجة', 'عائشة', 'مريم', 'زينب', 'سالمة', 'آمنة', 'نورية', 'سعاد', 'نجاة', 'حميدة', 'رقية', 'سكينة', 'حليمة', 'مبروكة', 'سارة', 'إيمان', 'هدى', 'نوال', 'ليلى'],
        last: ['القذافي', 'حفتر', 'السراج', 'جلال', 'الورفلي', 'الزنتاني', 'المصراتي', 'البنغازي', 'الطرابلسي', 'السويحلي']
      }
    },
    TN: {
      male: {
        first: ['محمد', 'أحمد', 'علي', 'خالد', 'سامي', 'كريم', 'أمين', 'يوسف', 'هشام', 'منير', 'نبيل', 'وليد', 'طارق', 'رضا', 'فوزي', 'صابر', 'جمال', 'رياض', 'حاتم', 'معز'],
        last: ['بورقيبة', 'بن علي', 'سعيد', 'الغنوشي', 'المرزوقي', 'السبسي', 'جراد', 'الفخفاخ', 'المشيشي', 'بودن', 'الجريبي', 'العباسي', 'الناصري', 'بن جعفر', 'التونسي', 'الصفاقسي', 'القيرواني', 'السوسي', 'المنستيري', 'البنزرتي']
      },
      female: {
        first: ['فاطمة', 'خديجة', 'آمنة', 'ليلى', 'سارة', 'مريم', 'أسماء', 'نجاة', 'سلمى', 'هند', 'درة', 'عفاف', 'جميلة', 'سنية', 'لطيفة', 'نعيمة', 'زهرة', 'حياة', 'إيمان', 'سناء'],
        last: ['بورقيبة', 'بن علي', 'سعيد', 'الغنوشي', 'المرزوقي', 'السبسي', 'جراد', 'الفخفاخ', 'المشيشي', 'بودن']
      }
    },
    DZ: {
      male: {
        first: ['محمد', 'أحمد', 'عبدالقادر', 'كريم', 'أمين', 'يوسف', 'إسلام', 'رياض', 'سفيان', 'ياسين', 'بلال', 'أيمن', 'جمال', 'عمر', 'خالد', 'مصطفى', 'رشيد', 'حكيم', 'سعيد', 'نور الدين'],
        last: ['بوتفليقة', 'تبون', 'بن بلة', 'زروال', 'بومدين', 'الشاذلي', 'مساهل', 'بلحيمر', 'عمراني', 'بن تومي', 'بوضياف', 'الجزائري', 'القسنطيني', 'الوهراني', 'العاصمي', 'التلمساني', 'البجائي', 'السطايفي', 'الشلفي', 'البليدي']
      },
      female: {
        first: ['فاطمة الزهراء', 'خديجة', 'آمنة', 'مريم', 'ياسمين', 'سارة', 'أسماء', 'إيمان', 'نور الهدى', 'سلمى', 'هاجر', 'نسرين', 'حنان', 'سميرة', 'نادية', 'وردة', 'جميلة', 'زهور', 'لطيفة', 'نعيمة'],
        last: ['بوتفليقة', 'تبون', 'بن بلة', 'زروال', 'بومدين', 'الشاذلي', 'مساهل', 'بلحيمر', 'عمراني', 'بن تومي']
      }
    }
  },

  // المدن حسب الدولة
  cities: {
    SA: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الظهران', 'الطائف', 'تبوك', 'أبها', 'نجران', 'حائل', 'الجبيل', 'ينبع', 'القطيف', 'الخرج', 'بريدة', 'عنيزة', 'الأحساء', 'خميس مشيط'],
    EG: ['القاهرة', 'الإسكندرية', 'الجيزة', 'شبرا الخيمة', 'بورسعيد', 'السويس', 'الأقصر', 'أسوان', 'المنصورة', 'طنطا', 'الزقازيق', 'إسماعيلية', 'أسيوط', 'سوهاج', 'الفيوم', 'بني سويف', 'المنيا', 'دمياط', 'قنا', 'شرم الشيخ'],
    AE: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين', 'العين', 'خورفكان', 'دبا الحصن'],
    JO: ['عمان', 'إربد', 'الزرقاء', 'العقبة', 'السلط', 'مادبا', 'الكرك', 'جرش', 'عجلون', 'الطفيلة', 'معان', 'المفرق'],
    KW: ['الكويت', 'حولي', 'الفروانية', 'الجهراء', 'الأحمدي', 'مبارك الكبير', 'السالمية', 'صباح السالم'],
    QA: ['الدوحة', 'الوكرة', 'الخور', 'الريان', 'أم صلال', 'الذخيرة', 'مسيعيد', 'دخان'],
    BH: ['المنامة', 'المحرق', 'الرفاع', 'مدينة حمد', 'مدينة عيسى', 'سترة', 'البديع', 'الحد'],
    OM: ['مسقط', 'صلالة', 'صحار', 'نزوى', 'صور', 'عبري', 'البريمي', 'الرستاق', 'السيب', 'بوشر', 'مطرح', 'خصب'],
    LB: ['بيروت', 'طرابلس', 'صيدا', 'صور', 'جونية', 'زحلة', 'بعلبك', 'النبطية', 'عاليه', 'جبيل', 'البترون', 'برج حمود'],
    MA: ['الدار البيضاء', 'الرباط', 'فاس', 'مراكش', 'طنجة', 'مكناس', 'أكادير', 'وجدة', 'القنيطرة', 'تطوان', 'آسفي', 'المحمدية', 'الجديدة', 'الناظور', 'خريبكة'],
    IQ: ['بغداد', 'البصرة', 'الموصل', 'أربيل', 'النجف', 'كربلاء', 'كركوك', 'السليمانية', 'الحلة', 'الناصرية', 'العمارة', 'الكوت', 'سامراء', 'الرمادي', 'الفلوجة'],
    SY: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'حماة', 'طرطوس', 'دير الزور', 'الرقة', 'إدلب', 'درعا', 'السويداء', 'القامشلي'],
    PS: ['غزة', 'رام الله', 'نابلس', 'الخليل', 'بيت لحم', 'جنين', 'طولكرم', 'قلقيلية', 'أريحا', 'سلفيت', 'خان يونس', 'رفح'],
    YE: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'المكلا', 'إب', 'ذمار', 'عمران', 'حجة', 'صعدة', 'شبوة', 'مأرب', 'سيئون', 'المهرة'],
    SD: ['الخرطوم', 'أم درمان', 'بحري', 'بورتسودان', 'كسلا', 'الأبيض', 'ود مدني', 'نيالا', 'الفاشر', 'القضارف', 'كوستي', 'عطبرة'],
    LY: ['طرابلس', 'بنغازي', 'مصراتة', 'البيضاء', 'الزاوية', 'زليتن', 'سرت', 'طبرق', 'سبها', 'درنة', 'غريان', 'الخمس'],
    TN: ['تونس', 'صفاقس', 'سوسة', 'القيروان', 'بنزرت', 'قابس', 'أريانة', 'قفصة', 'المنستير', 'نابل', 'حمامات', 'المهدية', 'طبرقة', 'توزر'],
    DZ: ['الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'باتنة', 'بليدة', 'سطيف', 'سيدي بلعباس', 'بسكرة', 'تلمسان', 'بجاية', 'تيزي وزو', 'الشلف', 'ورقلة', 'غرداية']
  },

  // الأحياء حسب الدولة
  districts: {
    SA: ['العليا', 'النخيل', 'الملقا', 'الياسمين', 'الربوة', 'الروضة', 'السليمانية', 'الشفا', 'الحمراء', 'الفيصلية', 'النزهة', 'المروج', 'الورود', 'الصحافة', 'الملز', 'الغدير', 'قرطبة', 'الرائد', 'العزيزية', 'البديعة'],
    EG: ['المعادي', 'مدينة نصر', 'الزمالك', 'المهندسين', 'الدقي', 'الهرم', 'التجمع الخامس', 'الشيخ زايد', 'العجوزة', 'حلوان', 'شبرا', 'عين شمس', 'مصر الجديدة', 'المقطم', 'العباسية', '6 أكتوبر', 'الرحاب', 'القطامية', 'جاردن سيتي', 'وسط البلد'],
    AE: ['ديرة', 'بر دبي', 'جميرا', 'البرشاء', 'المارينا', 'داون تاون', 'الخليج التجاري', 'نخلة جميرا', 'الكرامة', 'القصيص', 'السطوة', 'الشندغة', 'أم سقيم', 'المنخول', 'الجافلية']
  },

  // الشركات حسب الدولة والقطاع
  companies: {
    SA: {
      oil: ['أرامكو السعودية', 'سابك', 'معادن', 'بترو رابغ', 'التصنيع الوطنية'],
      banking: ['الراجحي', 'الأهلي', 'سامبا', 'الرياض', 'البلاد', 'الإنماء', 'الجزيرة', 'العربي', 'السعودي الفرنسي', 'الاستثمار'],
      telecom: ['STC', 'موبايلي', 'زين'],
      retail: ['بندة', 'الدانوب', 'كارفور', 'العثيم', 'بنده', 'لولو', 'نستو', 'المزرعة'],
      real_estate: ['دار الأركان', 'جبل عمر', 'إعمار المدينة الاقتصادية', 'مكة للإنشاء', 'طيبة للاستثمار'],
      healthcare: ['مستشفى المملكة', 'مستشفى سليمان الحبيب', 'مجموعة الدكتور سليمان فقيه', 'مستشفى المواساة', 'مستشفى دلة']
    },
    EG: {
      oil: ['إيجاس', 'إينوك', 'البترول الوطنية', 'عز الدخيلة'],
      banking: ['البنك الأهلي المصري', 'بنك مصر', 'CIB', 'QNB الأهلي', 'البنك العربي الأفريقي', 'بنك الإسكندرية', 'HSBC مصر', 'بنك القاهرة'],
      telecom: ['فودافون مصر', 'أورانج مصر', 'اتصالات مصر', 'وي'],
      retail: ['كارفور', 'سبينس', 'هايبر وان', 'خير زمان', 'أولاد رجب'],
      real_estate: ['طلعت مصطفى', 'بالم هيلز', 'إعمار مصر', 'سوديك', 'ماونتن فيو', 'أوراسكوم للتنمية'],
      healthcare: ['مستشفى دار الفؤاد', 'كليوباترا', 'المجموعة الطبية المتحدة', 'مستشفى السلام الدولي']
    },
    AE: {
      oil: ['أدنوك', 'إينوك', 'دانة غاز', 'دريك آند سكل'],
      banking: ['بنك الإمارات دبي الوطني', 'بنك أبوظبي الأول', 'بنك المشرق', 'بنك دبي الإسلامي', 'بنك أبوظبي التجاري', 'الإمارات الإسلامي'],
      telecom: ['اتصالات', 'دو'],
      retail: ['ماجد الفطيم', 'الفطيم', 'لولو', 'كارفور', 'شرف دي جي', 'جيانت'],
      real_estate: ['إعمار', 'نخيل', 'الدار العقارية', 'داماك', 'ميراس', 'مجموعة دبي القابضة'],
      healthcare: ['مستشفى كليفلاند كلينيك أبوظبي', 'ميديكلينيك', 'مستشفى NMC', 'مستشفى الإمارات']
    }
  },

  // الوظائف حسب القطاع
  jobs: {
    management: ['مدير عام', 'مدير تنفيذي', 'مدير العمليات', 'مدير المشاريع', 'مدير الموارد البشرية', 'مدير التسويق', 'مدير المبيعات', 'مدير تقنية المعلومات', 'نائب الرئيس', 'رئيس القسم'],
    engineering: ['مهندس برمجيات', 'مهندس شبكات', 'مهندس أنظمة', 'مهندس مدني', 'مهندس معماري', 'مهندس كهربائي', 'مهندس ميكانيكي', 'مهندس صناعي', 'مهندس بترول', 'مهندس كيميائي'],
    medical: ['طبيب عام', 'طبيب أخصائي', 'طبيب استشاري', 'جراح', 'طبيب أسنان', 'صيدلي', 'ممرض', 'أخصائي تحاليل', 'أخصائي أشعة', 'معالج طبيعي'],
    education: ['أستاذ جامعي', 'معلم', 'مدير مدرسة', 'مشرف تربوي', 'باحث أكاديمي', 'محاضر', 'مدرب', 'مستشار تعليمي'],
    finance: ['محاسب', 'مراجع حسابات', 'محلل مالي', 'مدير استثمار', 'مصرفي', 'مستشار مالي', 'مدير الخزينة', 'محلل مخاطر'],
    legal: ['محامي', 'مستشار قانوني', 'قاضي', 'نائب عام', 'موثق عقود', 'باحث قانوني'],
    it: ['مطور ويب', 'مطور تطبيقات', 'مهندس DevOps', 'محلل بيانات', 'عالم بيانات', 'مهندس أمن سيبراني', 'مدير منتج', 'مصمم UX/UI', 'مهندس قواعد بيانات', 'مطور ألعاب'],
    marketing: ['مدير تسويق', 'أخصائي تسويق رقمي', 'كاتب محتوى', 'مصمم جرافيك', 'مدير وسائل التواصل', 'محلل تسويق', 'مدير العلامة التجارية'],
    sales: ['مندوب مبيعات', 'مدير حسابات', 'أخصائي مبيعات', 'مدير تطوير الأعمال', 'مسؤول علاقات العملاء']
  },

  // الجامعات حسب الدولة
  universities: {
    SA: ['جامعة الملك سعود', 'جامعة الملك عبدالعزيز', 'جامعة الملك فهد للبترول والمعادن', 'جامعة الإمام محمد بن سعود', 'جامعة أم القرى', 'جامعة الملك خالد', 'جامعة الملك فيصل', 'جامعة الأميرة نورة', 'جامعة الأمير سلطان', 'جامعة الفيصل'],
    EG: ['جامعة القاهرة', 'جامعة الإسكندرية', 'جامعة عين شمس', 'الجامعة الأمريكية بالقاهرة', 'جامعة الأزهر', 'جامعة المنصورة', 'جامعة طنطا', 'جامعة أسيوط', 'جامعة حلوان', 'الجامعة الألمانية بالقاهرة'],
    AE: ['جامعة الإمارات', 'جامعة خليفة', 'الجامعة الأمريكية في الشارقة', 'جامعة زايد', 'جامعة الشارقة', 'جامعة أبوظبي', 'جامعة دبي', 'جامعة عجمان', 'جامعة روتشستر للتقنية'],
    JO: ['الجامعة الأردنية', 'جامعة اليرموك', 'جامعة العلوم والتكنولوجيا', 'جامعة مؤتة', 'جامعة الهاشمية', 'الجامعة الأردنية الألمانية', 'جامعة البترا', 'جامعة عمان العربية']
  },

  // البنوك حسب الدولة
  banks: {
    SA: ['البنك الأهلي السعودي', 'مصرف الراجحي', 'بنك الرياض', 'البنك السعودي الفرنسي', 'بنك البلاد', 'مصرف الإنماء', 'بنك الجزيرة', 'البنك العربي الوطني', 'البنك السعودي للاستثمار', 'بنك ساب'],
    EG: ['البنك الأهلي المصري', 'بنك مصر', 'بنك القاهرة', 'البنك التجاري الدولي CIB', 'QNB الأهلي', 'بنك الإسكندرية', 'HSBC مصر', 'بنك كريدي أجريكول', 'البنك العربي الأفريقي', 'بنك فيصل الإسلامي'],
    AE: ['بنك الإمارات دبي الوطني', 'بنك أبوظبي الأول', 'بنك دبي الإسلامي', 'بنك المشرق', 'بنك أبوظبي التجاري', 'بنك الإمارات الإسلامي', 'بنك رأس الخيمة الوطني', 'بنك الفجيرة الوطني']
  },

  // المستشفيات حسب الدولة
  hospitals: {
    SA: ['مستشفى الملك فيصل التخصصي', 'مستشفى الملك فهد الجامعي', 'مستشفى المملكة', 'مستشفى الدكتور سليمان الحبيب', 'مستشفى السعودي الألماني', 'مستشفى المواساة', 'مستشفى دلة', 'مستشفى الحمادي', 'مستشفى الدكتور سليمان فقيه', 'مستشفى عبداللطيف جميل'],
    EG: ['مستشفى دار الفؤاد', 'مستشفى السلام الدولي', 'مستشفى الأندلسية', 'مستشفى المقطم', 'مستشفى كليوباترا', 'مستشفى الصفا', 'مستشفى 57357', 'مستشفى وادي النيل', 'مستشفى الدمرداش', 'مستشفى قصر العيني'],
    AE: ['مستشفى كليفلاند كلينيك أبوظبي', 'ميديكلينيك', 'مستشفى NMC', 'مستشفى الإمارات', 'مستشفى زايد', 'مستشفى راشد', 'مستشفى المفرق', 'مستشفى توام', 'مستشفى الجليلة للأطفال']
  },

  // English Names
  englishNames: {
    male: {
      first: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward', 'Jason', 'Jeffrey', 'Ryan', 'Jacob'],
      last: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson']
    },
    female: {
      first: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Dorothy', 'Carol', 'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia'],
      last: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']
    }
  },

  // English Cities
  englishCities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Seattle', 'Denver', 'Boston', 'Washington', 'Nashville', 'Detroit', 'Portland', 'Las Vegas', 'Memphis', 'Atlanta', 'Miami', 'San Francisco', 'Oakland', 'Minneapolis', 'Cleveland'],

  // English Companies
  englishCompanies: ['Apple', 'Microsoft', 'Amazon', 'Google', 'Meta', 'Tesla', 'Nvidia', 'Berkshire Hathaway', 'Johnson & Johnson', 'JPMorgan Chase', 'Visa', 'Procter & Gamble', 'Mastercard', 'UnitedHealth', 'Home Depot', 'Chevron', 'Pfizer', 'AbbVie', 'Coca-Cola', 'PepsiCo', 'Costco', 'McDonald\'s', 'Cisco', 'Adobe', 'Netflix', 'Intel', 'IBM', 'Nike', 'Disney', 'PayPal'],

  // أسعار النفط التاريخية (للواقعية)
  oilPrices: {
    brent: { min: 65, max: 95, avg: 80 },
    wti: { min: 60, max: 90, avg: 75 }
  },

  // أسعار العملات
  currencyRates: {
    USD_SAR: 3.75,
    USD_EGP: 50.85,
    USD_AED: 3.67,
    USD_JOD: 0.71,
    USD_KWD: 0.31,
    USD_QAR: 3.64,
    USD_BHD: 0.38,
    USD_OMR: 0.38,
    USD_LBP: 89500,
    USD_MAD: 10.05,
    USD_IQD: 1310,
    USD_SYP: 13000,
    USD_YER: 250,
    USD_SDG: 601,
    USD_LYD: 4.85,
    USD_TND: 3.12,
    USD_DZD: 135
  },

  // العملات الرقمية
  cryptoCurrencies: [
    { symbol: 'BTC', name: 'Bitcoin', nameAr: 'بيتكوين', priceRange: [60000, 105000] },
    { symbol: 'ETH', name: 'Ethereum', nameAr: 'إيثريوم', priceRange: [3000, 4500] },
    { symbol: 'BNB', name: 'Binance Coin', nameAr: 'بينانس كوين', priceRange: [500, 750] },
    { symbol: 'XRP', name: 'Ripple', nameAr: 'ريبل', priceRange: [0.5, 2.5] },
    { symbol: 'ADA', name: 'Cardano', nameAr: 'كاردانو', priceRange: [0.5, 1.5] },
    { symbol: 'SOL', name: 'Solana', nameAr: 'سولانا', priceRange: [150, 300] },
    { symbol: 'DOGE', name: 'Dogecoin', nameAr: 'دوجكوين', priceRange: [0.1, 0.5] },
    { symbol: 'DOT', name: 'Polkadot', nameAr: 'بولكادوت', priceRange: [6, 15] },
    { symbol: 'MATIC', name: 'Polygon', nameAr: 'بوليجون', priceRange: [0.8, 2] },
    { symbol: 'AVAX', name: 'Avalanche', nameAr: 'أفالانش', priceRange: [30, 60] }
  ],

  // الأسهم العربية
  arabStocks: {
    SA: [
      { symbol: '2222', name: 'أرامكو السعودية', sector: 'الطاقة', priceRange: [28, 35] },
      { symbol: '1120', name: 'الراجحي', sector: 'البنوك', priceRange: [75, 95] },
      { symbol: '1180', name: 'الأهلي', sector: 'البنوك', priceRange: [35, 45] },
      { symbol: '2010', name: 'سابك', sector: 'البتروكيماويات', priceRange: [80, 105] },
      { symbol: '7010', name: 'STC', sector: 'الاتصالات', priceRange: [40, 55] },
      { symbol: '2380', name: 'بترو رابغ', sector: 'الطاقة', priceRange: [15, 25] },
      { symbol: '4030', name: 'البحري', sector: 'النقل', priceRange: [30, 45] },
      { symbol: '4200', name: 'الدريس', sector: 'الطاقة', priceRange: [60, 85] },
      { symbol: '2280', name: 'المراعي', sector: 'الغذاء', priceRange: [50, 65] },
      { symbol: '4001', name: 'أسمنت الجنوب', sector: 'الأسمنت', priceRange: [65, 85] }
    ],
    EG: [
      { symbol: 'COMI', name: 'البنك التجاري الدولي', sector: 'البنوك', priceRange: [60, 85] },
      { symbol: 'HRHO', name: 'طلعت مصطفى', sector: 'العقارات', priceRange: [35, 55] },
      { symbol: 'EFIH', name: 'المصرية للاتصالات', sector: 'الاتصالات', priceRange: [20, 35] },
      { symbol: 'EAST', name: 'إيسترن كومباني', sector: 'الغذاء', priceRange: [15, 25] },
      { symbol: 'SWDY', name: 'السويدي إليكتريك', sector: 'الصناعة', priceRange: [10, 18] }
    ],
    AE: [
      { symbol: 'ADNOCDIST', name: 'أدنوك للتوزيع', sector: 'الطاقة', priceRange: [3.5, 5] },
      { symbol: 'FAB', name: 'بنك أبوظبي الأول', sector: 'البنوك', priceRange: [12, 18] },
      { symbol: 'EMIRATES', name: 'الإمارات للاتصالات', sector: 'الاتصالات', priceRange: [18, 28] },
      { symbol: 'EMAAR', name: 'إعمار العقارية', sector: 'العقارات', priceRange: [6, 10] },
      { symbol: 'DU', name: 'دو', sector: 'الاتصالات', priceRange: [5, 8] }
    ]
  }
};

// دوال مساعدة ذكية
export class SimAI {
  private language: 'ar' | 'en';
  private country: string;
  private context: Map<string, any> = new Map();

  constructor(language: 'ar' | 'en' = 'ar', country: string = 'SA') {
    this.language = language;
    this.country = country;
  }

  setLanguage(lang: 'ar' | 'en') {
    this.language = lang;
  }

  setCountry(country: string) {
    this.country = country;
  }

  resetContext() {
    this.context.clear();
  }

  // توليد جنس عشوائي
  generateGender(): 'male' | 'female' {
    return Math.random() > 0.5 ? 'male' : 'female';
  }

  // توليد عمر منطقي بناءً على السياق
  generateAge(context?: { occupation?: string; education?: string }): number {
    let minAge = 18;
    let maxAge = 65;

    if (context?.occupation) {
      if (context.occupation.includes('مدير') || context.occupation.includes('Manager') || context.occupation.includes('Director')) {
        minAge = 35;
        maxAge = 60;
      } else if (context.occupation.includes('استشاري') || context.occupation.includes('Consultant')) {
        minAge = 40;
        maxAge = 65;
      } else if (context.occupation.includes('متدرب') || context.occupation.includes('Intern') || context.occupation.includes('Junior')) {
        minAge = 21;
        maxAge = 28;
      }
    }

    if (context?.education) {
      if (context.education.includes('دكتوراه') || context.education.includes('PhD')) {
        minAge = Math.max(minAge, 28);
      } else if (context.education.includes('ماجستير') || context.education.includes('Master')) {
        minAge = Math.max(minAge, 25);
      }
    }

    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  }

  // توليد اسم حسب الدولة والجنس واللغة
  generateName(gender: 'male' | 'female', country?: string): { firstName: string; lastName: string; fullName: string } {
    const c = country || this.country;
    
    if (this.language === 'en') {
      const names = SMART_DATABASE.englishNames[gender];
      const firstName = names.first[Math.floor(Math.random() * names.first.length)];
      const lastName = names.last[Math.floor(Math.random() * names.last.length)];
      return { firstName, lastName, fullName: `${firstName} ${lastName}` };
    }

    // أسماء عربية
    const countryNames = SMART_DATABASE.names[c as keyof typeof SMART_DATABASE.names] || SMART_DATABASE.names.SA;
    const genderNames = countryNames[gender];
    const firstName = genderNames.first[Math.floor(Math.random() * genderNames.first.length)];
    const lastName = genderNames.last[Math.floor(Math.random() * genderNames.last.length)];
    
    return { firstName, lastName, fullName: `${firstName} ${lastName}` };
  }

  // توليد مدينة حسب الدولة
  generateCity(country?: string): string {
    const c = country || this.country;
    
    if (this.language === 'en') {
      return SMART_DATABASE.englishCities[Math.floor(Math.random() * SMART_DATABASE.englishCities.length)];
    }

    const cities = SMART_DATABASE.cities[c as keyof typeof SMART_DATABASE.cities] || SMART_DATABASE.cities.SA;
    return cities[Math.floor(Math.random() * cities.length)];
  }

  // توليد بريد إلكتروني منطقي
  generateEmail(firstName: string, lastName: string): string {
    const domains = this.language === 'en' 
      ? ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com']
      : ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const formats = [
      `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
      `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
      `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
      `${firstName.toLowerCase()}${Math.floor(Math.random() * 999)}`,
    ];
    const format = formats[Math.floor(Math.random() * formats.length)];
    
    // تحويل الأسماء العربية للإنجليزية للبريد
    const transliterate = (str: string): string => {
      const map: { [key: string]: string } = {
        'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th',
        'ج': 'j', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z',
        'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a',
        'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
        'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'a', 'ء': 'a', 'ئ': 'e',
        'ؤ': 'o', ' ': ''
      };
      return str.split('').map(c => map[c] || c).join('').toLowerCase().replace(/[^a-z0-9._]/g, '');
    };

    return `${transliterate(format)}@${domain}`;
  }

  // توليد رقم هاتف حسب الدولة
  generatePhone(country?: string): string {
    const c = country || this.country;
    const codes: { [key: string]: { code: string; format: string } } = {
      SA: { code: '+966', format: '5XXXXXXXX' },
      EG: { code: '+20', format: '1XXXXXXXXX' },
      AE: { code: '+971', format: '5XXXXXXXX' },
      JO: { code: '+962', format: '7XXXXXXXX' },
      KW: { code: '+965', format: '9XXXXXXX' },
      QA: { code: '+974', format: '5XXXXXXX' },
      BH: { code: '+973', format: '3XXXXXXX' },
      OM: { code: '+968', format: '9XXXXXXX' },
      LB: { code: '+961', format: '7XXXXXXX' },
      MA: { code: '+212', format: '6XXXXXXXX' },
      IQ: { code: '+964', format: '7XXXXXXXXX' },
      SY: { code: '+963', format: '9XXXXXXXX' },
      PS: { code: '+970', format: '5XXXXXXXX' },
      YE: { code: '+967', format: '7XXXXXXXX' },
      SD: { code: '+249', format: '9XXXXXXXX' },
      LY: { code: '+218', format: '9XXXXXXXX' },
      TN: { code: '+216', format: '9XXXXXXX' },
      DZ: { code: '+213', format: '5XXXXXXXX' }
    };

    const countryInfo = codes[c] || codes.SA;
    const phone = countryInfo.format.replace(/X/g, () => Math.floor(Math.random() * 10).toString());
    return `${countryInfo.code} ${phone}`;
  }

  // توليد راتب منطقي
  generateSalary(context?: { age?: number; education?: string; occupation?: string; country?: string }): number {
    let baseSalary = 5000;
    let multiplier = 1;

    // ضبط حسب الدولة
    const countryMultipliers: { [key: string]: number } = {
      SA: 1.5, AE: 2, QA: 2.2, KW: 1.8, BH: 1.3, OM: 1.2,
      EG: 0.3, JO: 0.7, LB: 0.5, MA: 0.4, IQ: 0.5, SY: 0.2,
      PS: 0.4, YE: 0.15, SD: 0.2, LY: 0.6, TN: 0.35, DZ: 0.35
    };
    const salaryCountry = context?.country || this.country;
    multiplier *= countryMultipliers[salaryCountry] || 1;

    // ضبط حسب العمر
    if (context?.age) {
      if (context.age > 45) multiplier *= 1.8;
      else if (context.age > 35) multiplier *= 1.5;
      else if (context.age > 28) multiplier *= 1.2;
    }

    // ضبط حسب التعليم
    if (context?.education) {
      if (context.education.includes('دكتوراه') || context.education.includes('PhD')) multiplier *= 2;
      else if (context.education.includes('ماجستير') || context.education.includes('Master')) multiplier *= 1.5;
      else if (context.education.includes('بكالوريوس') || context.education.includes('Bachelor')) multiplier *= 1.2;
    }

    // ضبط حسب الوظيفة
    if (context?.occupation) {
      if (context.occupation.includes('مدير') || context.occupation.includes('Director') || context.occupation.includes('CEO')) {
        multiplier *= 3;
      } else if (context.occupation.includes('استشاري') || context.occupation.includes('Consultant')) {
        multiplier *= 2.5;
      } else if (context.occupation.includes('أخصائي') || context.occupation.includes('Specialist')) {
        multiplier *= 1.5;
      }
    }

    const salary = baseSalary * multiplier;
    // تقريب لأقرب 500
    return Math.round(salary / 500) * 500 + Math.floor(Math.random() * 5) * 500;
  }

  // توليد شركة
  generateCompany(country?: string, sector?: string): string {
    const c = country || this.country;
    
    if (this.language === 'en') {
      return SMART_DATABASE.englishCompanies[Math.floor(Math.random() * SMART_DATABASE.englishCompanies.length)];
    }

    const countryCompanies = SMART_DATABASE.companies[c as keyof typeof SMART_DATABASE.companies];
    if (countryCompanies) {
      const sectors = Object.keys(countryCompanies);
      const selectedSector = sector || sectors[Math.floor(Math.random() * sectors.length)];
      const companies = countryCompanies[selectedSector as keyof typeof countryCompanies] || countryCompanies[sectors[0] as keyof typeof countryCompanies];
      if (companies && companies.length > 0) {
        return companies[Math.floor(Math.random() * companies.length)];
      }
    }

    return this.language === 'ar' ? 'شركة المستقبل' : 'Future Company';
  }

  // توليد وظيفة
  generateJob(sector?: string): string {
    const sectors = Object.keys(SMART_DATABASE.jobs);
    const selectedSector = sector || sectors[Math.floor(Math.random() * sectors.length)];
    const jobs = SMART_DATABASE.jobs[selectedSector as keyof typeof SMART_DATABASE.jobs] || SMART_DATABASE.jobs.management;
    
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    
    if (this.language === 'en') {
      const translations: { [key: string]: string } = {
        'مدير عام': 'General Manager',
        'مدير تنفيذي': 'CEO',
        'مهندس برمجيات': 'Software Engineer',
        'محاسب': 'Accountant',
        'طبيب': 'Doctor',
        // يمكن إضافة المزيد
      };
      return translations[job] || job;
    }
    
    return job;
  }

  // توليد جامعة
  generateUniversity(country?: string): string {
    const c = country || this.country;
    const universities = SMART_DATABASE.universities[c as keyof typeof SMART_DATABASE.universities] || SMART_DATABASE.universities.SA;
    return universities[Math.floor(Math.random() * universities.length)];
  }

  // توليد بنك
  generateBank(country?: string): string {
    const c = country || this.country;
    const banks = SMART_DATABASE.banks[c as keyof typeof SMART_DATABASE.banks] || SMART_DATABASE.banks.SA;
    return banks[Math.floor(Math.random() * banks.length)];
  }

  // توليد مستشفى
  generateHospital(country?: string): string {
    const c = country || this.country;
    const hospitals = SMART_DATABASE.hospitals[c as keyof typeof SMART_DATABASE.hospitals] || SMART_DATABASE.hospitals.SA;
    return hospitals[Math.floor(Math.random() * hospitals.length)];
  }

  // توليد سعر نفط واقعي
  generateOilPrice(type: 'brent' | 'wti' = 'brent'): number {
    const range = SMART_DATABASE.oilPrices[type];
    const base = range.avg;
    const variance = (Math.random() - 0.5) * (range.max - range.min);
    return Math.round((base + variance) * 100) / 100;
  }

  // توليد سعر عملة رقمية
  generateCryptoPrice(symbol?: string): { symbol: string; name: string; nameAr: string; price: number } {
    const crypto = symbol 
      ? SMART_DATABASE.cryptoCurrencies.find(c => c.symbol === symbol) || SMART_DATABASE.cryptoCurrencies[0]
      : SMART_DATABASE.cryptoCurrencies[Math.floor(Math.random() * SMART_DATABASE.cryptoCurrencies.length)];
    
    const [min, max] = crypto.priceRange;
    const price = min + Math.random() * (max - min);
    
    return {
      symbol: crypto.symbol,
      name: crypto.name,
      nameAr: crypto.nameAr,
      price: Math.round(price * 100) / 100
    };
  }

  // توليد سهم عربي
  generateArabStock(country?: string): { symbol: string; name: string; sector: string; price: number; change: number } {
    const c = country || this.country;
    const stocks = SMART_DATABASE.arabStocks[c as keyof typeof SMART_DATABASE.arabStocks] || SMART_DATABASE.arabStocks.SA;
    const stock = stocks[Math.floor(Math.random() * stocks.length)];
    
    const [min, max] = stock.priceRange;
    const price = min + Math.random() * (max - min);
    const change = (Math.random() - 0.5) * 10; // تغيير بين -5% و +5%
    
    return {
      symbol: stock.symbol,
      name: stock.name,
      sector: stock.sector,
      price: Math.round(price * 100) / 100,
      change: Math.round(change * 100) / 100
    };
  }

  // توليد سعر صرف
  generateExchangeRate(fromCurrency: string = 'USD', toCurrency?: string): { pair: string; rate: number; change: number } {
    const c = toCurrency || (this.country === 'SA' ? 'SAR' : 'EGP');
    const key = `${fromCurrency}_${c}` as keyof typeof SMART_DATABASE.currencyRates;
    const baseRate = SMART_DATABASE.currencyRates[key] || 1;
    
    // إضافة تذبذب صغير للواقعية
    const variance = (Math.random() - 0.5) * 0.02 * baseRate;
    const rate = baseRate + variance;
    const change = (Math.random() - 0.5) * 2; // تغيير بين -1% و +1%
    
    return {
      pair: `${fromCurrency}/${c}`,
      rate: Math.round(rate * 10000) / 10000,
      change: Math.round(change * 100) / 100
    };
  }

  // توليد تاريخ ميلاد منطقي
  generateBirthDate(age: number): Date {
    const now = new Date();
    const year = now.getFullYear() - age;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    return new Date(year, month, day);
  }

  // توليد رقم هوية
  generateNationalId(country?: string): string {
    const c = country || this.country;
    
    switch (c) {
      case 'SA':
        // رقم الهوية السعودية: يبدأ بـ 1 أو 2، 10 أرقام
        const prefix = Math.random() > 0.5 ? '1' : '2';
        return prefix + Array(9).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
      case 'EG':
        // الرقم القومي المصري: 14 رقم
        return Array(14).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
      case 'AE':
        // رقم الهوية الإماراتية: 784-XXXX-XXXXXXX-X
        return `784-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(Math.random() * 10)}`;
      default:
        return Array(10).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    }
  }

  // توليد طول منطقي
  generateHeight(personGender: 'male' | 'female'): number {
    if (personGender === 'male') {
      return Math.floor(Math.random() * (190 - 160 + 1)) + 160; // 160-190 سم
    } else {
      return Math.floor(Math.random() * (175 - 150 + 1)) + 150; // 150-175 سم
    }
  }

  // توليد وزن منطقي
  generateWeight(_gender: 'male' | 'female', height: number): number {
    // BMI طبيعي بين 18.5 و 30
    const bmi = 18.5 + Math.random() * 11.5;
    const heightInM = height / 100;
    const weight = bmi * heightInM * heightInM;
    return Math.round(weight * 10) / 10;
  }

  // توليد فصيلة دم
  generateBloodType(): string {
    const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const weights = [0.30, 0.06, 0.09, 0.02, 0.04, 0.01, 0.36, 0.12]; // توزيع واقعي
    
    const random = Math.random();
    let cumulative = 0;
    for (let i = 0; i < types.length; i++) {
      cumulative += weights[i];
      if (random < cumulative) return types[i];
    }
    return 'O+';
  }

  // توليد مستوى تعليمي
  generateEducationLevel(age: number): string {
    const levels = this.language === 'ar' 
      ? ['ثانوية عامة', 'دبلوم', 'بكالوريوس', 'ماجستير', 'دكتوراه']
      : ['High School', 'Diploma', 'Bachelor', 'Master', 'PhD'];
    
    if (age < 22) return levels[0];
    if (age < 24) return levels[Math.floor(Math.random() * 2)];
    if (age < 28) return levels[Math.floor(Math.random() * 3)];
    if (age < 32) return levels[Math.floor(Math.random() * 4)];
    return levels[Math.floor(Math.random() * 5)];
  }

  // توليد حالة اجتماعية منطقية
  generateMaritalStatus(age: number): string {
    const statuses = this.language === 'ar'
      ? ['أعزب', 'متزوج', 'مطلق', 'أرمل']
      : ['Single', 'Married', 'Divorced', 'Widowed'];
    
    if (age < 22) return statuses[0];
    if (age < 28) return Math.random() > 0.7 ? statuses[1] : statuses[0];
    if (age < 40) return Math.random() > 0.3 ? statuses[1] : (Math.random() > 0.5 ? statuses[0] : statuses[2]);
    return Math.random() > 0.2 ? statuses[1] : statuses[Math.floor(Math.random() * 4)];
  }

  // توليد عدد أطفال منطقي
  generateChildrenCount(age: number, maritalStatus: string): number {
    if (maritalStatus === 'أعزب' || maritalStatus === 'Single') return 0;
    if (age < 25) return Math.floor(Math.random() * 2);
    if (age < 35) return Math.floor(Math.random() * 4);
    if (age < 45) return Math.floor(Math.random() * 5) + 1;
    return Math.floor(Math.random() * 6) + 1;
  }

  // توليد سياق شخصي متكامل
  generatePersonContext(overrides?: Partial<PersonContext>): PersonContext {
    const personCountry = overrides?.country || this.country;
    const personGender: 'male' | 'female' = overrides?.gender || this.generateGender();
    const occupation = overrides?.occupation || this.generateJob();
    const education = overrides?.education || this.generateEducationLevel(35);
    const age = overrides?.age || this.generateAge({ occupation, education });
    const nameData = this.generateName(personGender, personCountry);
    const firstName = nameData.firstName;
    const lastName = nameData.lastName;
    const fullName = nameData.fullName;
    const city = overrides?.city || this.generateCity(personCountry);
    const email = overrides?.email || this.generateEmail(firstName, lastName);
    const phone = overrides?.phone || this.generatePhone(personCountry);
    const birthDate = overrides?.birthDate || this.generateBirthDate(age);
    const maritalStatus = overrides?.maritalStatus || this.generateMaritalStatus(age);
    const salary = overrides?.salary || this.generateSalary({ age, education, occupation, country: personCountry });
    const company = overrides?.company || this.generateCompany(personCountry);

    return {
      id: this.generateUUID(),
      gender: personGender,
      age,
      country: personCountry,
      city,
      firstName,
      lastName,
      fullName,
      email,
      phone,
      birthDate,
      maritalStatus,
      education,
      occupation,
      salary,
      company
    };
  }

  // توليد UUID
  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // توليد رقم IBAN
  generateIBAN(country?: string): string {
    const c = country || this.country;
    const countryCodes: { [key: string]: { code: string; length: number } } = {
      SA: { code: 'SA', length: 24 },
      AE: { code: 'AE', length: 23 },
      EG: { code: 'EG', length: 29 },
      JO: { code: 'JO', length: 30 },
      KW: { code: 'KW', length: 30 },
      QA: { code: 'QA', length: 29 },
      BH: { code: 'BH', length: 22 },
      OM: { code: 'OM', length: 23 },
      LB: { code: 'LB', length: 28 }
    };

    const info = countryCodes[c] || countryCodes.SA;
    const checkDigits = Math.floor(10 + Math.random() * 90).toString();
    const remaining = Array(info.length - 4).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    
    return `${info.code}${checkDigits}${remaining}`;
  }

  // توليد رقم بطاقة ائتمان
  generateCreditCard(): { number: string; expiry: string; cvv: string; type: string } {
    const types = ['Visa', 'Mastercard', 'Mada'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let prefix: string;
    switch (type) {
      case 'Visa': prefix = '4'; break;
      case 'Mastercard': prefix = '5' + Math.floor(1 + Math.random() * 5); break;
      case 'Mada': prefix = '9'; break;
      default: prefix = '4';
    }

    const number = prefix + Array(16 - prefix.length).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    const formattedNumber = number.match(/.{1,4}/g)?.join(' ') || number;
    
    const now = new Date();
    const expiryYear = now.getFullYear() + Math.floor(Math.random() * 5) + 1;
    const expiryMonth = Math.floor(Math.random() * 12) + 1;
    const expiry = `${expiryMonth.toString().padStart(2, '0')}/${expiryYear.toString().slice(-2)}`;
    
    const cvv = Math.floor(100 + Math.random() * 900).toString();

    return { number: formattedNumber, expiry, cvv, type };
  }

  // توليد عنوان IP
  generateIP(version: 'v4' | 'v6' = 'v4'): string {
    if (version === 'v4') {
      return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    } else {
      return Array(8).fill(0).map(() => 
        Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')
      ).join(':');
    }
  }

  // توليد عنوان MAC
  generateMAC(): string {
    return Array(6).fill(0).map(() => 
      Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()
    ).join(':');
  }

  // توليد URL
  generateURL(): string {
    const domains = ['example.com', 'test.org', 'demo.net', 'sample.io', 'data.dev'];
    const paths = ['api', 'v1', 'users', 'products', 'orders', 'data', 'reports'];
    
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const pathCount = Math.floor(Math.random() * 3) + 1;
    const path = Array(pathCount).fill(0).map(() => paths[Math.floor(Math.random() * paths.length)]).join('/');
    
    return `https://${domain}/${path}`;
  }

  // توليد لون HEX
  generateColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
  }

  // توليد إحداثيات جغرافية
  generateCoordinates(country?: string): { latitude: number; longitude: number } {
    const c = country || this.country;
    
    // نطاقات تقريبية للدول العربية
    const ranges: { [key: string]: { lat: [number, number]; lng: [number, number] } } = {
      SA: { lat: [16, 32], lng: [35, 55] },
      EG: { lat: [22, 32], lng: [25, 35] },
      AE: { lat: [22, 26], lng: [51, 56] },
      JO: { lat: [29, 33], lng: [35, 39] },
      KW: { lat: [28, 30], lng: [46, 49] },
      QA: { lat: [24, 26], lng: [50, 52] },
    };

    const range = ranges[c] || { lat: [20, 35], lng: [35, 55] };
    
    return {
      latitude: Math.round((range.lat[0] + Math.random() * (range.lat[1] - range.lat[0])) * 1000000) / 1000000,
      longitude: Math.round((range.lng[0] + Math.random() * (range.lng[1] - range.lng[0])) * 1000000) / 1000000
    };
  }
}

export default SimAI;
