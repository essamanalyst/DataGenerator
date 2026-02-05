import { FieldTypeOption } from '../types';

export const fieldTypeOptions: FieldTypeOption[] = [
  // ==================== Personal Info - English ====================
  { value: 'firstName', label: 'الاسم الأول', labelEn: 'First Name', category: 'personal', icon: '👤', description: 'اسم أول إنجليزي', language: 'en' },
  { value: 'lastName', label: 'اسم العائلة', labelEn: 'Last Name', category: 'personal', icon: '👤', description: 'اسم عائلة إنجليزي', language: 'en' },
  { value: 'fullName', label: 'الاسم الكامل', labelEn: 'Full Name', category: 'personal', icon: '👤', description: 'اسم كامل إنجليزي', language: 'en' },
  { value: 'email', label: 'البريد الإلكتروني', labelEn: 'Email', category: 'personal', icon: '📧', description: 'بريد إلكتروني', language: 'en' },
  { value: 'phone', label: 'رقم الهاتف', labelEn: 'Phone', category: 'personal', icon: '📱', description: 'رقم هاتف دولي', language: 'en' },
  { value: 'username', label: 'اسم المستخدم', labelEn: 'Username', category: 'personal', icon: '👨‍💻', description: 'اسم مستخدم إنجليزي', language: 'en' },
  { value: 'password', label: 'كلمة المرور', labelEn: 'Password', category: 'personal', icon: '🔐', description: 'كلمة مرور آمنة', language: 'en' },
  { value: 'avatar', label: 'صورة شخصية', labelEn: 'Avatar', category: 'personal', icon: '🖼️', description: 'رابط صورة شخصية', language: 'en' },
  { value: 'age', label: 'العمر', labelEn: 'Age', category: 'personal', icon: '🎂', description: 'عمر بين 1-120', language: 'both' },
  { value: 'gender', label: 'الجنس (إنجليزي)', labelEn: 'Gender', category: 'personal', icon: '⚧', description: 'Male/Female', language: 'en' },
  { value: 'nationalId', label: 'رقم الهوية', labelEn: 'National ID', category: 'personal', icon: '🪪', description: 'رقم هوية وطنية', language: 'both' },

  // ==================== Personal Info - Arabic ====================
  { value: 'arabicFirstName', label: 'الاسم الأول (عربي)', labelEn: 'Arabic First Name', category: 'arabicPersonal', icon: '👤', description: 'اسم أول عربي حقيقي', language: 'ar' },
  { value: 'arabicLastName', label: 'اسم العائلة (عربي)', labelEn: 'Arabic Last Name', category: 'arabicPersonal', icon: '👤', description: 'اسم عائلة عربي حقيقي', language: 'ar' },
  { value: 'arabicFullName', label: 'الاسم الكامل (عربي)', labelEn: 'Arabic Full Name', category: 'arabicPersonal', icon: '👤', description: 'اسم كامل عربي حقيقي', language: 'ar' },
  { value: 'arabicEmail', label: 'بريد إلكتروني (عربي)', labelEn: 'Arabic Email', category: 'arabicPersonal', icon: '📧', description: 'بريد بنطاق عربي', language: 'ar' },
  { value: 'arabicPhone', label: 'هاتف (عربي)', labelEn: 'Arabic Phone', category: 'arabicPersonal', icon: '📱', description: 'رقم هاتف عربي حقيقي', language: 'ar' },
  { value: 'arabicUsername', label: 'اسم مستخدم (عربي)', labelEn: 'Arabic Username', category: 'arabicPersonal', icon: '👨‍💻', description: 'اسم مستخدم عربي', language: 'ar' },
  { value: 'arabicGender', label: 'الجنس (عربي)', labelEn: 'Arabic Gender', category: 'arabicPersonal', icon: '⚧', description: 'ذكر/أنثى', language: 'ar' },

  // ==================== Address - English ====================
  { value: 'address', label: 'العنوان', labelEn: 'Address', category: 'address', icon: '📍', description: 'عنوان كامل إنجليزي', language: 'en' },
  { value: 'city', label: 'المدينة', labelEn: 'City', category: 'address', icon: '🏙️', description: 'اسم مدينة إنجليزي', language: 'en' },
  { value: 'country', label: 'الدولة', labelEn: 'Country', category: 'address', icon: '🌍', description: 'اسم دولة إنجليزي', language: 'en' },
  { value: 'zipCode', label: 'الرمز البريدي', labelEn: 'Zip Code', category: 'address', icon: '📮', description: 'رمز بريدي', language: 'en' },
  { value: 'latitude', label: 'خط العرض', labelEn: 'Latitude', category: 'address', icon: '🌐', description: 'إحداثية خط العرض', language: 'both' },
  { value: 'longitude', label: 'خط الطول', labelEn: 'Longitude', category: 'address', icon: '🌐', description: 'إحداثية خط الطول', language: 'both' },
  { value: 'coordinates', label: 'إحداثيات', labelEn: 'Coordinates', category: 'address', icon: '📌', description: 'إحداثيات كاملة', language: 'both' },

  // ==================== Address - Arabic ====================
  { value: 'arabicAddress', label: 'العنوان (عربي)', labelEn: 'Arabic Address', category: 'arabicAddress', icon: '📍', description: 'عنوان عربي كامل', language: 'ar' },
  { value: 'arabicCity', label: 'المدينة (عربي)', labelEn: 'Arabic City', category: 'arabicAddress', icon: '🏙️', description: 'مدينة عربية حقيقية', language: 'ar' },
  { value: 'arabicCountry', label: 'الدولة (عربي)', labelEn: 'Arabic Country', category: 'arabicAddress', icon: '🌍', description: 'دولة عربية', language: 'ar' },

  // ==================== Business - English ====================
  { value: 'company', label: 'اسم الشركة', labelEn: 'Company', category: 'business', icon: '🏢', description: 'اسم شركة إنجليزي', language: 'en' },
  { value: 'jobTitle', label: 'المسمى الوظيفي', labelEn: 'Job Title', category: 'business', icon: '💼', description: 'مسمى وظيفي إنجليزي', language: 'en' },
  { value: 'department', label: 'القسم', labelEn: 'Department', category: 'business', icon: '🏛️', description: 'قسم إنجليزي', language: 'en' },

  // ==================== Business - Arabic ====================
  { value: 'arabicCompany', label: 'الشركة (عربي)', labelEn: 'Arabic Company', category: 'arabicBusiness', icon: '🏢', description: 'شركة عربية حقيقية', language: 'ar' },
  { value: 'arabicJobTitle', label: 'الوظيفة (عربي)', labelEn: 'Arabic Job Title', category: 'arabicBusiness', icon: '💼', description: 'مسمى وظيفي عربي', language: 'ar' },
  { value: 'arabicDepartment', label: 'القسم (عربي)', labelEn: 'Arabic Department', category: 'arabicBusiness', icon: '🏛️', description: 'قسم عربي', language: 'ar' },

  // ==================== Education ====================
  { value: 'university', label: 'الجامعة', labelEn: 'University', category: 'education', icon: '🎓', description: 'اسم جامعة إنجليزي', language: 'en' },
  { value: 'arabicUniversity', label: 'الجامعة (عربي)', labelEn: 'Arabic University', category: 'arabicEducation', icon: '🎓', description: 'جامعة عربية حقيقية', language: 'ar' },
  { value: 'major', label: 'التخصص', labelEn: 'Major', category: 'education', icon: '📚', description: 'تخصص دراسي إنجليزي', language: 'en' },
  { value: 'arabicMajor', label: 'التخصص (عربي)', labelEn: 'Arabic Major', category: 'arabicEducation', icon: '📚', description: 'تخصص دراسي عربي', language: 'ar' },
  { value: 'educationLevel', label: 'المستوى التعليمي', labelEn: 'Education Level', category: 'education', icon: '📖', description: 'مستوى تعليمي إنجليزي', language: 'en' },
  { value: 'arabicEducationLevel', label: 'المستوى التعليمي (عربي)', labelEn: 'Arabic Education Level', category: 'arabicEducation', icon: '📖', description: 'مستوى تعليمي عربي', language: 'ar' },
  { value: 'gpa', label: 'المعدل التراكمي', labelEn: 'GPA', category: 'education', icon: '📊', description: 'معدل من 4.0', language: 'both' },
  { value: 'arabicGrade', label: 'التقدير (عربي)', labelEn: 'Arabic Grade', category: 'arabicEducation', icon: '📊', description: 'تقدير عربي', language: 'ar' },

  // ==================== Medical - للأبحاث الطبية ====================
  { value: 'bloodType', label: 'فصيلة الدم', labelEn: 'Blood Type', category: 'medical', icon: '🩸', description: 'فصيلة دم حقيقية', language: 'both' },
  { value: 'medicalCondition', label: 'الحالة الصحية', labelEn: 'Medical Condition', category: 'medical', icon: '🏥', description: 'حالة طبية عربية', language: 'ar' },
  { value: 'medication', label: 'الدواء', labelEn: 'Medication', category: 'medical', icon: '💊', description: 'اسم دواء حقيقي', language: 'both' },
  { value: 'hospital', label: 'المستشفى', labelEn: 'Hospital', category: 'medical', icon: '🏨', description: 'مستشفى إنجليزي', language: 'en' },
  { value: 'arabicHospital', label: 'المستشفى (عربي)', labelEn: 'Arabic Hospital', category: 'medical', icon: '🏨', description: 'مستشفى عربي حقيقي', language: 'ar' },
  { value: 'medicalSpecialty', label: 'التخصص الطبي', labelEn: 'Medical Specialty', category: 'medical', icon: '⚕️', description: 'تخصص طبي عربي', language: 'ar' },
  { value: 'height', label: 'الطول (سم)', labelEn: 'Height (cm)', category: 'medical', icon: '📏', description: 'طول بالسنتيمتر', language: 'both' },
  { value: 'weight', label: 'الوزن (كجم)', labelEn: 'Weight (kg)', category: 'medical', icon: '⚖️', description: 'وزن بالكيلوجرام', language: 'both' },
  { value: 'bmi', label: 'مؤشر كتلة الجسم', labelEn: 'BMI', category: 'medical', icon: '📈', description: 'BMI محسوب', language: 'both' },

  // ==================== Finance - English ====================
  { value: 'creditCard', label: 'بطاقة ائتمان', labelEn: 'Credit Card', category: 'finance', icon: '💳', description: 'رقم بطاقة ائتمان', language: 'en' },
  { value: 'price', label: 'السعر', labelEn: 'Price', category: 'finance', icon: '💰', description: 'سعر بالدولار', language: 'en' },
  { value: 'currency', label: 'العملة', labelEn: 'Currency', category: 'finance', icon: '💵', description: 'رمز عملة دولي', language: 'en' },
  { value: 'accountNumber', label: 'رقم الحساب', labelEn: 'Account Number', category: 'finance', icon: '🏦', description: 'رقم حساب بنكي', language: 'en' },
  { value: 'iban', label: 'IBAN', labelEn: 'IBAN', category: 'finance', icon: '🏦', description: 'رقم IBAN دولي', language: 'en' },
  { value: 'bankName', label: 'اسم البنك', labelEn: 'Bank Name', category: 'finance', icon: '🏛️', description: 'اسم بنك إنجليزي', language: 'en' },
  { value: 'salary', label: 'الراتب', labelEn: 'Salary', category: 'finance', icon: '💵', description: 'راتب شهري', language: 'en' },

  // ==================== Finance - Arabic ====================
  { value: 'arabicPrice', label: 'السعر (عربي)', labelEn: 'Arabic Price', category: 'arabicFinance', icon: '💰', description: 'سعر بعملة عربية', language: 'ar' },
  { value: 'arabicCurrency', label: 'العملة (عربي)', labelEn: 'Arabic Currency', category: 'arabicFinance', icon: '💵', description: 'عملة عربية', language: 'ar' },
  { value: 'arabicBankName', label: 'البنك (عربي)', labelEn: 'Arabic Bank Name', category: 'arabicFinance', icon: '🏛️', description: 'بنك عربي حقيقي', language: 'ar' },
  { value: 'arabicSalary', label: 'الراتب (عربي)', labelEn: 'Arabic Salary', category: 'arabicFinance', icon: '💵', description: 'راتب بعملة عربية', language: 'ar' },

  // ==================== E-commerce - English ====================
  { value: 'productName', label: 'اسم المنتج', labelEn: 'Product Name', category: 'ecommerce', icon: '📦', description: 'اسم منتج إنجليزي', language: 'en' },
  { value: 'productCategory', label: 'فئة المنتج', labelEn: 'Product Category', category: 'ecommerce', icon: '🏷️', description: 'فئة منتج إنجليزي', language: 'en' },
  { value: 'color', label: 'اللون', labelEn: 'Color', category: 'ecommerce', icon: '🎨', description: 'لون إنجليزي', language: 'en' },
  { value: 'sku', label: 'SKU', labelEn: 'SKU', category: 'ecommerce', icon: '🏷️', description: 'رمز المنتج', language: 'en' },
  { value: 'barcode', label: 'الباركود', labelEn: 'Barcode', category: 'ecommerce', icon: '📊', description: 'رمز باركود', language: 'en' },

  // ==================== E-commerce - Arabic ====================
  { value: 'arabicProductName', label: 'المنتج (عربي)', labelEn: 'Arabic Product Name', category: 'arabicEcommerce', icon: '📦', description: 'منتج عربي حقيقي', language: 'ar' },
  { value: 'arabicProductCategory', label: 'فئة المنتج (عربي)', labelEn: 'Arabic Product Category', category: 'arabicEcommerce', icon: '🏷️', description: 'فئة عربية', language: 'ar' },
  { value: 'arabicColor', label: 'اللون (عربي)', labelEn: 'Arabic Color', category: 'arabicEcommerce', icon: '🎨', description: 'لون عربي', language: 'ar' },

  // ==================== Internet ====================
  { value: 'website', label: 'الموقع الإلكتروني', labelEn: 'Website', category: 'internet', icon: '🌐', description: 'رابط موقع', language: 'en' },
  { value: 'arabicWebsite', label: 'الموقع (عربي)', labelEn: 'Arabic Website', category: 'internet', icon: '🌐', description: 'موقع بنطاق عربي', language: 'ar' },
  { value: 'ipAddress', label: 'عنوان IP', labelEn: 'IP Address', category: 'internet', icon: '🔗', description: 'عنوان IP v4', language: 'en' },
  { value: 'macAddress', label: 'عنوان MAC', labelEn: 'MAC Address', category: 'internet', icon: '🔗', description: 'عنوان MAC', language: 'en' },
  { value: 'image', label: 'رابط صورة', labelEn: 'Image URL', category: 'internet', icon: '🖼️', description: 'رابط صورة', language: 'en' },
  { value: 'socialMedia', label: 'حساب تواصل اجتماعي', labelEn: 'Social Media', category: 'internet', icon: '📱', description: 'رابط حساب', language: 'en' },

  // ==================== Date & Time ====================
  { value: 'date', label: 'التاريخ', labelEn: 'Date', category: 'datetime', icon: '📅', description: 'تاريخ ميلادي', language: 'both' },
  { value: 'dateTime', label: 'التاريخ والوقت', labelEn: 'DateTime', category: 'datetime', icon: '🕐', description: 'تاريخ ووقت', language: 'both' },
  { value: 'birthDate', label: 'تاريخ الميلاد', labelEn: 'Birth Date', category: 'datetime', icon: '🎂', description: 'تاريخ ميلاد واقعي', language: 'both' },
  { value: 'futureDate', label: 'تاريخ مستقبلي', labelEn: 'Future Date', category: 'datetime', icon: '📆', description: 'تاريخ في المستقبل', language: 'both' },
  { value: 'time', label: 'الوقت', labelEn: 'Time', category: 'datetime', icon: '⏰', description: 'وقت', language: 'both' },
  { value: 'hijriDate', label: 'التاريخ الهجري', labelEn: 'Hijri Date', category: 'datetime', icon: '🌙', description: 'تاريخ هجري', language: 'ar' },

  // ==================== Text ====================
  { value: 'sentence', label: 'جملة', labelEn: 'Sentence', category: 'text', icon: '📝', description: 'جملة إنجليزية', language: 'en' },
  { value: 'arabicSentence', label: 'جملة (عربي)', labelEn: 'Arabic Sentence', category: 'arabicText', icon: '📝', description: 'جملة عربية واقعية', language: 'ar' },
  { value: 'paragraph', label: 'فقرة', labelEn: 'Paragraph', category: 'text', icon: '📄', description: 'فقرة إنجليزية', language: 'en' },
  { value: 'arabicParagraph', label: 'فقرة (عربي)', labelEn: 'Arabic Paragraph', category: 'arabicText', icon: '📄', description: 'فقرة عربية واقعية', language: 'ar' },
  { value: 'loremIpsum', label: 'نص Lorem', labelEn: 'Lorem Ipsum', category: 'text', icon: '📜', description: 'نص تجريبي', language: 'en' },

  // ==================== Numbers ====================
  { value: 'uuid', label: 'معرف فريد UUID', labelEn: 'UUID', category: 'numbers', icon: '🔑', description: 'معرف فريد عالمي', language: 'both' },
  { value: 'number', label: 'رقم صحيح', labelEn: 'Integer', category: 'numbers', icon: '🔢', description: 'رقم صحيح', language: 'both' },
  { value: 'decimal', label: 'رقم عشري', labelEn: 'Decimal', category: 'numbers', icon: '🔢', description: 'رقم عشري', language: 'both' },
  { value: 'percentage', label: 'نسبة مئوية', labelEn: 'Percentage', category: 'numbers', icon: '📊', description: 'نسبة 0-100', language: 'both' },
  { value: 'boolean', label: 'قيمة منطقية', labelEn: 'Boolean', category: 'numbers', icon: '✅', description: 'صح/خطأ', language: 'both' },

  // ==================== Research - للأبحاث والدراسات ====================
  { value: 'sampleId', label: 'رقم العينة', labelEn: 'Sample ID', category: 'research', icon: '🔬', description: 'معرف عينة بحثية', language: 'both' },
  { value: 'experimentId', label: 'رقم التجربة', labelEn: 'Experiment ID', category: 'research', icon: '🧪', description: 'معرف تجربة', language: 'both' },
  { value: 'surveyResponse', label: 'استجابة استبيان', labelEn: 'Survey Response', category: 'research', icon: '📋', description: 'إجابة استبيان', language: 'ar' },
  { value: 'likertScale', label: 'مقياس ليكرت', labelEn: 'Likert Scale', category: 'research', icon: '📊', description: 'مقياس 1-5', language: 'both' },
  { value: 'rating', label: 'تقييم', labelEn: 'Rating', category: 'research', icon: '⭐', description: 'تقييم 1-5', language: 'both' },
  { value: 'correlation', label: 'معامل ارتباط', labelEn: 'Correlation', category: 'research', icon: '📈', description: 'معامل ارتباط -1 إلى 1', language: 'both' },
  { value: 'pValue', label: 'قيمة P', labelEn: 'P-Value', category: 'research', icon: '📉', description: 'قيمة احتمالية', language: 'both' },
  { value: 'standardDeviation', label: 'الانحراف المعياري', labelEn: 'Standard Deviation', category: 'research', icon: '📊', description: 'انحراف معياري', language: 'both' },
];

export const categoryLabels: Record<string, string> = {
  personal: '👤 المعلومات الشخصية (إنجليزي)',
  arabicPersonal: '👤 المعلومات الشخصية (عربي)',
  address: '📍 العناوين (إنجليزي)',
  arabicAddress: '📍 العناوين (عربي)',
  business: '💼 الأعمال (إنجليزي)',
  arabicBusiness: '💼 الأعمال (عربي)',
  education: '🎓 التعليم (إنجليزي)',
  arabicEducation: '🎓 التعليم (عربي)',
  medical: '🏥 البيانات الطبية',
  finance: '💰 المالية (إنجليزي)',
  arabicFinance: '💰 المالية (عربي)',
  ecommerce: '🛒 التجارة الإلكترونية (إنجليزي)',
  arabicEcommerce: '🛒 التجارة الإلكترونية (عربي)',
  internet: '🌐 الإنترنت',
  datetime: '📅 التاريخ والوقت',
  text: '📝 النصوص (إنجليزي)',
  arabicText: '📝 النصوص (عربي)',
  numbers: '🔢 الأرقام',
  research: '🔬 الأبحاث والدراسات',
};

export const categoryLabelsEn: Record<string, string> = {
  personal: '👤 Personal Info (English)',
  arabicPersonal: '👤 Personal Info (Arabic)',
  address: '📍 Address (English)',
  arabicAddress: '📍 Address (Arabic)',
  business: '💼 Business (English)',
  arabicBusiness: '💼 Business (Arabic)',
  education: '🎓 Education (English)',
  arabicEducation: '🎓 Education (Arabic)',
  medical: '🏥 Medical Data',
  finance: '💰 Finance (English)',
  arabicFinance: '💰 Finance (Arabic)',
  ecommerce: '🛒 E-commerce (English)',
  arabicEcommerce: '🛒 E-commerce (Arabic)',
  internet: '🌐 Internet',
  datetime: '📅 Date & Time',
  text: '📝 Text (English)',
  arabicText: '📝 Text (Arabic)',
  numbers: '🔢 Numbers',
  research: '🔬 Research & Studies',
};
