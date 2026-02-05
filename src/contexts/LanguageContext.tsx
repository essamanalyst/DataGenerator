import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Header
    'app.title': 'DataForge Pro',
    'app.subtitle': 'مولد بيانات ذكي للأبحاث والدراسات',
    'app.feature.countries': '10+ دول عربية',
    'app.feature.research': 'للأبحاث العلمية',
    'app.feature.templates': '25+ قالب متخصص',
    'app.feature.millions': 'حتى 50 مليون',
    
    // Hero Section
    'hero.badge': 'مولد بيانات ذكي - بيانات واقعية ومترابطة منطقياً',
    'hero.title': 'بيانات عربية وإنجليزية حقيقية',
    'hero.description': 'بيانات واقعية ومنطقية مناسبة للأبحاث العلمية، الدراسات الأكاديمية، التدريب، واختبار الأنظمة.',
    'hero.stats': '+ قالب جاهز | 80+ نوع بيانات | 10+ دول عربية',
    
    // Feature Badges
    'badge.countries': '10+ دول عربية',
    'badge.research': 'للأبحاث العلمية',
    'badge.templates': 'قالب متخصص',
    'badge.millions': 'توليد بالملايين',
    'badge.dataTypes': '+80 نوع بيانات',
    
    // Quick Templates
    'templates.popular': 'أشهر القوالب',
    'templates.arabicUsers': 'مستخدمين عرب',
    'templates.medicalResearch': 'أبحاث طبية',
    'templates.surveys': 'استبيانات',
    'templates.employees': 'موظفين',
    'templates.education': 'طلاب وتعليم',
    'templates.ecommerce': 'تجارة إلكترونية',
    
    // AI Features
    'ai.title': 'مميزات الذكاء الاصطناعي',
    'ai.medical': 'بيانات طبية للأبحاث',
    'ai.education': 'بيانات تعليمية وأكاديمية',
    'ai.hr': 'بيانات موارد بشرية',
    'ai.realistic': 'أسماء ومدن حقيقية',
    
    // Schema Builder
    'schema.title': 'تصميم هيكل البيانات',
    'schema.subtitle': 'اختر من {count}+ قالب جاهز أو أضف حقولاً مخصصة',
    'schema.noFields': 'لم يتم إضافة حقول بعد',
    'schema.noFieldsHint': 'أضف حقولاً أو اختر قالباً جاهزاً للبدء',
    'schema.addField': 'إضافة حقل جديد',
    'schema.fields': 'الحقول',
    'schema.smartData': 'بيانات مترابطة ذكياً',
    'schema.showMore': 'عرض المزيد',
    'schema.showLess': 'عرض أقل',
    
    // Field Card
    'field.name': 'اسم الحقل',
    'field.type': 'نوع البيانات',
    'field.namePlaceholder': 'أدخل اسم الحقل',
    'field.moreOptions': 'المزيد',
    'field.hideOptions': 'إخفاء التفاصيل',
    'field.min': 'الحد الأدنى',
    'field.max': 'الحد الأقصى',
    'field.decimals': 'عدد الكسور',
    'field.unique': 'قيم فريدة',
    'field.nullable': 'السماح بقيم فارغة',
    'field.nullPercent': 'نسبة الفراغ',
    'field.delete': 'حذف الحقل',
    
    // Generator Controls
    'generator.title': 'إعدادات التوليد',
    'generator.count': 'عدد السجلات المطلوبة',
    'generator.warning': 'تنبيه:',
    'generator.warningText': 'توليد {count} سجل قد يستغرق بعض الوقت. يُنصح بتوليد دفعات أصغر للبيانات الضخمة.',
    'generator.infinityText': 'يمكنك توليد حتى',
    'generator.infinityCount': '50 مليون',
    'generator.infinityEnd': 'سجل!',
    'generator.generating': 'جاري التوليد الذكي...',
    'generator.generatingHint': 'يتم توليد بيانات مترابطة ومنطقية...',
    'generator.button': 'توليد البيانات 🚀',
    'generator.buttonGenerating': 'جاري التوليد الذكي...',
    
    // Data Preview
    'preview.title': 'معاينة البيانات',
    'preview.records': 'سجل',
    'preview.editHint': 'انقر على أي خلية للتعديل',
    'preview.actions': 'إجراءات',
    'preview.showing': 'عرض',
    'preview.of': 'من',
    
    // Export Panel
    'export.title': 'تصدير البيانات',
    'export.filename': 'اسم الملف',
    'export.tableName': 'اسم الجدول (SQL)',
    'export.json': 'JSON',
    'export.jsonDesc': 'ملف JSON منسق',
    'export.csv': 'CSV',
    'export.csvDesc': 'ملف Excel/CSV',
    'export.sql': 'SQL',
    'export.sqlDesc': 'استعلامات SQL',
    'export.xml': 'XML',
    'export.xmlDesc': 'ملف XML',
    'export.copy': 'نسخ JSON إلى الحافظة',
    'export.copied': 'تم النسخ!',
    
    // Stats Panel
    'stats.totalRecords': 'إجمالي السجلات',
    'stats.fieldsCount': 'عدد الحقول',
    'stats.generationTime': 'وقت التوليد',
    'stats.dataSize': 'حجم البيانات (تقديري)',
    
    // Country Selector
    'country.title': 'الدول المدعومة',
    'country.description': 'البيانات تُولد تلقائياً من جميع الدول العربية المدعومة بشكل عشوائي ومتوازن',
    'country.all': '🌍 جميع الدول العربية',
    'country.moreCountries': 'دول أخرى مدعومة',
    'country.arabCountries': 'دولة عربية',
    'country.realCities': 'مدينة حقيقية',
    
    // Language Selector
    'language.title': 'لغة البيانات',
    'language.ar': 'عربي',
    'language.arDesc': 'أسماء ومدن عربية',
    'language.en': 'English',
    'language.enDesc': 'English names & cities',
    'language.mixed': 'مختلط',
    'language.mixedDesc': 'عربي وإنجليزي',
    'language.note': 'ملاحظة:',
    'language.noteText': 'اللغة المختارة تؤثر على الأسماء والمدن والعناوين والشركات والجامعات وغيرها من البيانات النصية.',
    
    // Template Selector
    'templateSelector.title': 'قوالب جاهزة',
    'templateSelector.template': 'قالب',
    'templateSelector.search': 'ابحث عن قالب... (مثل: طبي، طلاب، موظفين)',
    'templateSelector.noResults': 'لا توجد نتائج لـ',
    'templateSelector.showAll': 'عرض جميع الفئات',
    'templateSelector.fields': 'حقول',
    
    // Advanced Features
    'advanced.title': 'إعدادات متقدمة',
    'advanced.seed': 'Seed (بذرة العشوائية)',
    'advanced.seedPlaceholder': 'اتركه فارغاً للعشوائية الكاملة',
    'advanced.seedHint': 'استخدم نفس الـ seed للحصول على نفس البيانات في كل مرة',
    'advanced.schema': 'إدارة الهيكل (Schema)',
    'advanced.export': 'تصدير',
    'advanced.copy': 'نسخ',
    'advanced.copied': 'تم النسخ',
    'advanced.import': 'استيراد',
    'advanced.importPlaceholder': 'الصق هيكل JSON هنا...',
    'advanced.applySchema': 'تطبيق الهيكل',
    'advanced.clear': 'مسح',
    'advanced.arabic': 'عربي',
    'advanced.english': 'إنجليزي',
    
    // Footer
    'footer.title': 'DataForge Pro - مولد البيانات الذكي',
    'footer.description': 'بيانات واقعية ومنطقية للأبحاث والدراسات العلمية والتدريب',
    'footer.templates': 'قالب جاهز',
    'footer.dataTypes': 'نوع بيانات',
    'footer.countries': 'دول عربية',
    'footer.records': 'حتى 50 مليون سجل',
    
    // Common
    'common.delete': 'حذف',
    'common.deleteAll': 'حذف الكل',
    'common.confirmDelete': 'هل تريد حذف جميع الحقول؟',
    'common.error': 'حدث خطأ',
    'common.addFieldError': 'يرجى إضافة حقل واحد على الأقل قبل التوليد',
    'common.generateError': 'حدث خطأ أثناء توليد البيانات',
    'common.invalidJson': 'صيغة JSON غير صحيحة',
  },
  
  en: {
    // Header
    'app.title': 'DataForge Pro',
    'app.subtitle': 'Smart Data Generator for Research & Studies',
    'app.feature.countries': '10+ Arab Countries',
    'app.feature.research': 'For Scientific Research',
    'app.feature.templates': '25+ Specialized Templates',
    'app.feature.millions': 'Up to 50 Million',
    
    // Hero Section
    'hero.badge': 'Smart Data Generator - Realistic & Logically Connected Data',
    'hero.title': 'Real Arabic & English Data',
    'hero.description': 'Realistic and logical data suitable for scientific research, academic studies, training, and system testing.',
    'hero.stats': '+ Ready Templates | 80+ Data Types | 10+ Arab Countries',
    
    // Feature Badges
    'badge.countries': '10+ Arab Countries',
    'badge.research': 'For Scientific Research',
    'badge.templates': 'Specialized Templates',
    'badge.millions': 'Generate Millions',
    'badge.dataTypes': '80+ Data Types',
    
    // Quick Templates
    'templates.popular': 'Popular Templates',
    'templates.arabicUsers': 'Arabic Users',
    'templates.medicalResearch': 'Medical Research',
    'templates.surveys': 'Surveys',
    'templates.employees': 'Employees',
    'templates.education': 'Students & Education',
    'templates.ecommerce': 'E-commerce',
    
    // AI Features
    'ai.title': 'AI-Powered Features',
    'ai.medical': 'Medical Research Data',
    'ai.education': 'Educational & Academic Data',
    'ai.hr': 'HR Data',
    'ai.realistic': 'Real Names & Cities',
    
    // Schema Builder
    'schema.title': 'Design Data Schema',
    'schema.subtitle': 'Choose from {count}+ ready templates or add custom fields',
    'schema.noFields': 'No fields added yet',
    'schema.noFieldsHint': 'Add fields or choose a template to get started',
    'schema.addField': 'Add New Field',
    'schema.fields': 'Fields',
    'schema.smartData': 'Smart connected data',
    'schema.showMore': 'Show More',
    'schema.showLess': 'Show Less',
    
    // Field Card
    'field.name': 'Field Name',
    'field.type': 'Data Type',
    'field.namePlaceholder': 'Enter field name',
    'field.moreOptions': 'More',
    'field.hideOptions': 'Hide Details',
    'field.min': 'Minimum',
    'field.max': 'Maximum',
    'field.decimals': 'Decimal Places',
    'field.unique': 'Unique Values',
    'field.nullable': 'Allow Null Values',
    'field.nullPercent': 'Null Percentage',
    'field.delete': 'Delete Field',
    
    // Generator Controls
    'generator.title': 'Generation Settings',
    'generator.count': 'Number of Records',
    'generator.warning': 'Warning:',
    'generator.warningText': 'Generating {count} records may take some time. Smaller batches recommended for large datasets.',
    'generator.infinityText': 'You can generate up to',
    'generator.infinityCount': '50 million',
    'generator.infinityEnd': 'records!',
    'generator.generating': 'Smart Generation in Progress...',
    'generator.generatingHint': 'Generating connected and logical data...',
    'generator.button': 'Generate Data 🚀',
    'generator.buttonGenerating': 'Generating...',
    
    // Data Preview
    'preview.title': 'Data Preview',
    'preview.records': 'records',
    'preview.editHint': 'Click any cell to edit',
    'preview.actions': 'Actions',
    'preview.showing': 'Showing',
    'preview.of': 'of',
    
    // Export Panel
    'export.title': 'Export Data',
    'export.filename': 'File Name',
    'export.tableName': 'Table Name (SQL)',
    'export.json': 'JSON',
    'export.jsonDesc': 'Formatted JSON file',
    'export.csv': 'CSV',
    'export.csvDesc': 'Excel/CSV file',
    'export.sql': 'SQL',
    'export.sqlDesc': 'SQL queries',
    'export.xml': 'XML',
    'export.xmlDesc': 'XML file',
    'export.copy': 'Copy JSON to Clipboard',
    'export.copied': 'Copied!',
    
    // Stats Panel
    'stats.totalRecords': 'Total Records',
    'stats.fieldsCount': 'Fields Count',
    'stats.generationTime': 'Generation Time',
    'stats.dataSize': 'Data Size (estimated)',
    
    // Country Selector
    'country.title': 'Supported Countries',
    'country.description': 'Data is automatically generated from all supported Arab countries randomly and balanced',
    'country.all': '🌍 All Arab Countries',
    'country.moreCountries': 'more countries supported',
    'country.arabCountries': 'Arab Countries',
    'country.realCities': 'Real Cities',
    
    // Language Selector
    'language.title': 'Data Language',
    'language.ar': 'Arabic',
    'language.arDesc': 'Arabic names & cities',
    'language.en': 'English',
    'language.enDesc': 'English names & cities',
    'language.mixed': 'Mixed',
    'language.mixedDesc': 'Arabic & English',
    'language.note': 'Note:',
    'language.noteText': 'Selected language affects names, cities, addresses, companies, universities, and other text data.',
    
    // Template Selector
    'templateSelector.title': 'Ready Templates',
    'templateSelector.template': 'templates',
    'templateSelector.search': 'Search templates... (e.g., medical, students, employees)',
    'templateSelector.noResults': 'No results for',
    'templateSelector.showAll': 'Show All Categories',
    'templateSelector.fields': 'fields',
    
    // Advanced Features
    'advanced.title': 'Advanced Settings',
    'advanced.seed': 'Seed (Randomness)',
    'advanced.seedPlaceholder': 'Leave empty for full randomness',
    'advanced.seedHint': 'Use same seed to get identical data each time',
    'advanced.schema': 'Schema Management',
    'advanced.export': 'Export',
    'advanced.copy': 'Copy',
    'advanced.copied': 'Copied',
    'advanced.import': 'Import',
    'advanced.importPlaceholder': 'Paste JSON schema here...',
    'advanced.applySchema': 'Apply Schema',
    'advanced.clear': 'Clear',
    'advanced.arabic': 'Arabic',
    'advanced.english': 'English',
    
    // Footer
    'footer.title': 'DataForge Pro - Smart Data Generator',
    'footer.description': 'Realistic data for research, studies, and training',
    'footer.templates': 'Ready Templates',
    'footer.dataTypes': 'Data Types',
    'footer.countries': 'Arab Countries',
    'footer.records': 'Up to 50M Records',
    
    // Common
    'common.delete': 'Delete',
    'common.deleteAll': 'Delete All',
    'common.confirmDelete': 'Delete all fields?',
    'common.error': 'Error occurred',
    'common.addFieldError': 'Please add at least one field before generating',
    'common.generateError': 'Error generating data',
    'common.invalidJson': 'Invalid JSON format',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
