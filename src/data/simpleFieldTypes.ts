// Field Category Interface
export interface FieldType {
  type: string;
  name: string;
  nameAr: string;
  icon: string;
}

export interface FieldCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  fields: FieldType[];
}

// All Field Categories
export const fieldCategories: FieldCategory[] = [
  {
    id: 'personal_ar',
    name: 'Personal (Arabic)',
    nameAr: 'شخصية (عربي)',
    icon: '👤',
    fields: [
      { type: 'arabicFullName', name: 'Full Name (AR)', nameAr: 'الاسم الكامل', icon: '👤' },
      { type: 'arabicFirstName', name: 'First Name (AR)', nameAr: 'الاسم الأول', icon: '👤' },
      { type: 'arabicLastName', name: 'Last Name (AR)', nameAr: 'اسم العائلة', icon: '👤' },
      { type: 'arabicMaleName', name: 'Male Name (AR)', nameAr: 'اسم ذكر', icon: '👨' },
      { type: 'arabicFemaleName', name: 'Female Name (AR)', nameAr: 'اسم أنثى', icon: '👩' },
      { type: 'arabicEmail', name: 'Email (AR)', nameAr: 'البريد الإلكتروني', icon: '📧' },
      { type: 'arabicPhone', name: 'Phone (AR)', nameAr: 'رقم الهاتف', icon: '📱' },
      { type: 'arabicGender', name: 'Gender (AR)', nameAr: 'الجنس', icon: '⚧' },
    ]
  },
  {
    id: 'personal_en',
    name: 'Personal (English)',
    nameAr: 'شخصية (إنجليزي)',
    icon: '👤',
    fields: [
      { type: 'fullName', name: 'Full Name', nameAr: 'الاسم الكامل (EN)', icon: '👤' },
      { type: 'firstName', name: 'First Name', nameAr: 'الاسم الأول (EN)', icon: '👤' },
      { type: 'lastName', name: 'Last Name', nameAr: 'اسم العائلة (EN)', icon: '👤' },
      { type: 'maleName', name: 'Male Name', nameAr: 'اسم ذكر (EN)', icon: '👨' },
      { type: 'femaleName', name: 'Female Name', nameAr: 'اسم أنثى (EN)', icon: '👩' },
      { type: 'email', name: 'Email', nameAr: 'البريد الإلكتروني (EN)', icon: '📧' },
      { type: 'phone', name: 'Phone', nameAr: 'رقم الهاتف (EN)', icon: '📱' },
      { type: 'gender', name: 'Gender', nameAr: 'الجنس (EN)', icon: '⚧' },
    ]
  },
  {
    id: 'location_ar',
    name: 'Location (Arabic)',
    nameAr: 'عناوين (عربي)',
    icon: '📍',
    fields: [
      { type: 'arabicCity', name: 'City (AR)', nameAr: 'المدينة', icon: '🏙️' },
      { type: 'arabicCountry', name: 'Country (AR)', nameAr: 'الدولة', icon: '🌍' },
      { type: 'arabicAddress', name: 'Address (AR)', nameAr: 'العنوان', icon: '📍' },
    ]
  },
  {
    id: 'location_en',
    name: 'Location (English)',
    nameAr: 'عناوين (إنجليزي)',
    icon: '📍',
    fields: [
      { type: 'city', name: 'City', nameAr: 'المدينة (EN)', icon: '🏙️' },
      { type: 'country', name: 'Country', nameAr: 'الدولة (EN)', icon: '🌍' },
      { type: 'address', name: 'Address', nameAr: 'العنوان (EN)', icon: '📍' },
    ]
  },
  {
    id: 'business',
    name: 'Business',
    nameAr: 'أعمال',
    icon: '💼',
    fields: [
      { type: 'arabicCompany', name: 'Company (AR)', nameAr: 'الشركة (عربي)', icon: '🏢' },
      { type: 'company', name: 'Company', nameAr: 'الشركة (EN)', icon: '🏢' },
      { type: 'arabicJobTitle', name: 'Job Title (AR)', nameAr: 'المسمى الوظيفي (عربي)', icon: '💼' },
      { type: 'jobTitle', name: 'Job Title', nameAr: 'المسمى الوظيفي (EN)', icon: '💼' },
      { type: 'department', name: 'Department', nameAr: 'القسم', icon: '🏛️' },
    ]
  },
  {
    id: 'education',
    name: 'Education',
    nameAr: 'تعليم',
    icon: '🎓',
    fields: [
      { type: 'arabicUniversity', name: 'University (AR)', nameAr: 'الجامعة (عربي)', icon: '🎓' },
      { type: 'university', name: 'University', nameAr: 'الجامعة (EN)', icon: '🎓' },
      { type: 'major', name: 'Major', nameAr: 'التخصص', icon: '📚' },
      { type: 'gpa', name: 'GPA', nameAr: 'المعدل', icon: '📊' },
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    nameAr: 'مالية',
    icon: '💰',
    fields: [
      { type: 'arabicBank', name: 'Bank (AR)', nameAr: 'البنك (عربي)', icon: '🏦' },
      { type: 'bank', name: 'Bank', nameAr: 'البنك (EN)', icon: '🏦' },
      { type: 'salary', name: 'Salary', nameAr: 'الراتب', icon: '💵' },
      { type: 'price', name: 'Price', nameAr: 'السعر', icon: '💲' },
      { type: 'currency', name: 'Currency', nameAr: 'العملة', icon: '💱' },
      { type: 'accountNumber', name: 'Account Number', nameAr: 'رقم الحساب', icon: '🔢' },
      { type: 'creditCard', name: 'Credit Card', nameAr: 'بطاقة ائتمان', icon: '💳' },
    ]
  },
  {
    id: 'demographics',
    name: 'Demographics',
    nameAr: 'ديموغرافيا',
    icon: '📊',
    fields: [
      { type: 'age', name: 'Age', nameAr: 'العمر', icon: '🎂' },
      { type: 'birthDate', name: 'Birth Date', nameAr: 'تاريخ الميلاد', icon: '📅' },
      { type: 'nationalId', name: 'National ID', nameAr: 'رقم الهوية', icon: '🪪' },
    ]
  },
  {
    id: 'medical',
    name: 'Medical',
    nameAr: 'طبية',
    icon: '🏥',
    fields: [
      { type: 'bloodType', name: 'Blood Type', nameAr: 'فصيلة الدم', icon: '🩸' },
      { type: 'height', name: 'Height (cm)', nameAr: 'الطول (سم)', icon: '📏' },
      { type: 'weight', name: 'Weight (kg)', nameAr: 'الوزن (كجم)', icon: '⚖️' },
      { type: 'medicalCondition', name: 'Medical Condition', nameAr: 'الحالة الصحية', icon: '🏥' },
    ]
  },
  {
    id: 'technical',
    name: 'Technical',
    nameAr: 'تقنية',
    icon: '💻',
    fields: [
      { type: 'uuid', name: 'UUID', nameAr: 'معرف فريد', icon: '🔑' },
      { type: 'ip', name: 'IP Address', nameAr: 'عنوان IP', icon: '🌐' },
      { type: 'mac', name: 'MAC Address', nameAr: 'عنوان MAC', icon: '📡' },
      { type: 'url', name: 'URL', nameAr: 'رابط', icon: '🔗' },
      { type: 'username', name: 'Username', nameAr: 'اسم المستخدم', icon: '👤' },
      { type: 'password', name: 'Password', nameAr: 'كلمة المرور', icon: '🔒' },
    ]
  },
  {
    id: 'numbers',
    name: 'Numbers',
    nameAr: 'أرقام',
    icon: '🔢',
    fields: [
      { type: 'number', name: 'Integer', nameAr: 'رقم صحيح', icon: '🔢' },
      { type: 'decimal', name: 'Decimal', nameAr: 'رقم عشري', icon: '🔢' },
      { type: 'percentage', name: 'Percentage', nameAr: 'نسبة مئوية', icon: '📊' },
    ]
  },
  {
    id: 'research',
    name: 'Research',
    nameAr: 'أبحاث',
    icon: '🔬',
    fields: [
      { type: 'likertScale', name: 'Likert Scale (1-5)', nameAr: 'مقياس ليكرت (1-5)', icon: '📊' },
      { type: 'rating', name: 'Rating (1-10)', nameAr: 'تقييم (1-10)', icon: '⭐' },
      { type: 'satisfaction', name: 'Satisfaction', nameAr: 'مستوى الرضا', icon: '😊' },
      { type: 'yesNo', name: 'Yes/No', nameAr: 'نعم/لا', icon: '✅' },
    ]
  },
  {
    id: 'datetime',
    name: 'Date & Time',
    nameAr: 'تاريخ ووقت',
    icon: '📅',
    fields: [
      { type: 'date', name: 'Date', nameAr: 'تاريخ', icon: '📅' },
      { type: 'datetime', name: 'Date & Time', nameAr: 'تاريخ ووقت', icon: '📅' },
      { type: 'time', name: 'Time', nameAr: 'وقت', icon: '⏰' },
    ]
  },
  {
    id: 'misc',
    name: 'Miscellaneous',
    nameAr: 'متنوعة',
    icon: '🎨',
    fields: [
      { type: 'boolean', name: 'Boolean', nameAr: 'قيمة منطقية', icon: '✅' },
      { type: 'color', name: 'Color', nameAr: 'لون', icon: '🎨' },
      { type: 'status', name: 'Status', nameAr: 'الحالة', icon: '📋' },
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    nameAr: 'تجارة إلكترونية',
    icon: '🛒',
    fields: [
      { type: 'productName', name: 'Product Name', nameAr: 'اسم المنتج', icon: '📦' },
      { type: 'category', name: 'Category', nameAr: 'الفئة', icon: '🏷️' },
      { type: 'sku', name: 'SKU', nameAr: 'رمز المنتج', icon: '🔖' },
      { type: 'orderStatus', name: 'Order Status', nameAr: 'حالة الطلب', icon: '📋' },
    ]
  },
];

export default fieldCategories;
