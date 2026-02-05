// قوالب البيانات الجاهزة - أكثر من 60 قالب متنوع

export interface Template {
  id: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  category: string;
  icon: string;
  color: string;
  isEducationTemplate?: boolean;
  fields: Array<{
    name: string;
    type: string;
    options?: any;
  }>;
}

export const templateCategories = [
  { id: 'all', name: { ar: 'الكل', en: 'All' }, icon: '📋' },
  { id: 'users', name: { ar: 'المستخدمين', en: 'Users' }, icon: '👤' },
  { id: 'medical', name: { ar: 'الطبية', en: 'Medical' }, icon: '🏥' },
  { id: 'education', name: { ar: 'التعليم', en: 'Education' }, icon: '🎓' },
  { id: 'business', name: { ar: 'الأعمال', en: 'Business' }, icon: '💼' },
  { id: 'ecommerce', name: { ar: 'التجارة', en: 'E-Commerce' }, icon: '🛒' },
  { id: 'finance', name: { ar: 'المالية', en: 'Finance' }, icon: '💰' },
  { id: 'economy', name: { ar: 'الاقتصاد', en: 'Economy' }, icon: '📈' },
  { id: 'stocks', name: { ar: 'الأسهم', en: 'Stocks' }, icon: '📊' },
  { id: 'currencies', name: { ar: 'العملات', en: 'Currencies' }, icon: '💱' },
  { id: 'energy', name: { ar: 'الطاقة', en: 'Energy' }, icon: '⚡' },
  { id: 'realestate', name: { ar: 'العقارات', en: 'Real Estate' }, icon: '🏠' },
  { id: 'travel', name: { ar: 'السفر', en: 'Travel' }, icon: '✈️' },
  { id: 'food', name: { ar: 'المطاعم', en: 'Food' }, icon: '🍽️' },
  { id: 'sports', name: { ar: 'الرياضة', en: 'Sports' }, icon: '⚽' },
  { id: 'technology', name: { ar: 'التقنية', en: 'Technology' }, icon: '💻' },
  { id: 'media', name: { ar: 'الإعلام', en: 'Media' }, icon: '📰' },
  { id: 'government', name: { ar: 'الحكومية', en: 'Government' }, icon: '🏛️' },
  { id: 'research', name: { ar: 'البحث العلمي', en: 'Research' }, icon: '🔬' },
  { id: 'automotive', name: { ar: 'السيارات', en: 'Automotive' }, icon: '🚗' },
  { id: 'hr', name: { ar: 'الموارد البشرية', en: 'HR' }, icon: '👥' },
  { id: 'logistics', name: { ar: 'اللوجستيات', en: 'Logistics' }, icon: '📦' },
  { id: 'insurance', name: { ar: 'التأمين', en: 'Insurance' }, icon: '🛡️' },
  { id: 'telecom', name: { ar: 'الاتصالات', en: 'Telecom' }, icon: '📱' },
  { id: 'crypto', name: { ar: 'العملات الرقمية', en: 'Crypto' }, icon: '₿' },
];

export const templates: Template[] = [
  // ==================== المستخدمين والحسابات ====================
  {
    id: 'basic-users-ar',
    name: { ar: 'مستخدمين عرب', en: 'Arab Users' },
    description: { ar: 'بيانات مستخدمين عرب أساسية', en: 'Basic Arab user data' },
    category: 'users',
    icon: '👤',
    color: 'blue',
    fields: [
      { name: 'id', type: 'uuid' },
      { name: 'الاسم الكامل', type: 'arabicFullName' },
      { name: 'البريد الإلكتروني', type: 'email' },
      { name: 'رقم الهاتف', type: 'arabicPhone' },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'العمر', type: 'age' },
      { name: 'الجنس', type: 'arabicGender' },
    ]
  },
  {
    id: 'basic-users-en',
    name: { ar: 'مستخدمين أجانب', en: 'International Users' },
    description: { ar: 'بيانات مستخدمين دوليين', en: 'International user data' },
    category: 'users',
    icon: '🌍',
    color: 'indigo',
    fields: [
      { name: 'id', type: 'uuid' },
      { name: 'Full Name', type: 'fullName' },
      { name: 'Email', type: 'email' },
      { name: 'Phone', type: 'phone' },
      { name: 'City', type: 'city' },
      { name: 'Country', type: 'country' },
      { name: 'Age', type: 'age' },
    ]
  },
  {
    id: 'social-media-users',
    name: { ar: 'حسابات تواصل اجتماعي', en: 'Social Media Accounts' },
    description: { ar: 'بيانات حسابات السوشيال ميديا', en: 'Social media account data' },
    category: 'users',
    icon: '📱',
    color: 'pink',
    fields: [
      { name: 'id', type: 'uuid' },
      { name: 'اسم المستخدم', type: 'username' },
      { name: 'الاسم الكامل', type: 'arabicFullName' },
      { name: 'البريد', type: 'email' },
      { name: 'عدد المتابعين', type: 'number', options: { min: 100, max: 1000000 } },
      { name: 'عدد المتابَعين', type: 'number', options: { min: 50, max: 5000 } },
      { name: 'عدد المنشورات', type: 'number', options: { min: 10, max: 2000 } },
      { name: 'تاريخ الانضمام', type: 'date' },
      { name: 'موثق', type: 'boolean' },
    ]
  },
  {
    id: 'user-profiles-detailed',
    name: { ar: 'ملفات مستخدمين تفصيلية', en: 'Detailed User Profiles' },
    description: { ar: 'بيانات مستخدمين شاملة ومفصلة', en: 'Comprehensive user profiles' },
    category: 'users',
    icon: '📋',
    color: 'purple',
    fields: [
      { name: 'id', type: 'uuid' },
      { name: 'الاسم الأول', type: 'arabicFirstName' },
      { name: 'اسم العائلة', type: 'arabicLastName' },
      { name: 'البريد', type: 'email' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'تاريخ الميلاد', type: 'birthDate' },
      { name: 'العمر', type: 'age' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'الحالة الاجتماعية', type: 'maritalStatus' },
      { name: 'المهنة', type: 'arabicJobTitle' },
      { name: 'الراتب', type: 'salary' },
    ]
  },
  {
    id: 'website-members',
    name: { ar: 'أعضاء موقع إلكتروني', en: 'Website Members' },
    description: { ar: 'بيانات أعضاء مسجلين في موقع', en: 'Registered website members' },
    category: 'users',
    icon: '🌐',
    color: 'cyan',
    fields: [
      { name: 'member_id', type: 'uuid' },
      { name: 'username', type: 'username' },
      { name: 'email', type: 'email' },
      { name: 'password_hash', type: 'password' },
      { name: 'full_name', type: 'arabicFullName' },
      { name: 'avatar_url', type: 'avatar' },
      { name: 'membership_type', type: 'custom', options: { values: ['Free', 'Basic', 'Premium', 'VIP'] } },
      { name: 'registration_date', type: 'date' },
      { name: 'last_login', type: 'datetime' },
      { name: 'is_active', type: 'boolean' },
      { name: 'email_verified', type: 'boolean' },
    ]
  },

  // ==================== الطبية والصحية ====================
  {
    id: 'patient-records',
    name: { ar: 'سجلات المرضى', en: 'Patient Records' },
    description: { ar: 'بيانات سجلات طبية للمرضى', en: 'Medical patient records' },
    category: 'medical',
    icon: '🏥',
    color: 'red',
    fields: [
      { name: 'رقم الملف', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'اسم المريض', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'تاريخ الميلاد', type: 'birthDate' },
      { name: 'العمر', type: 'age' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'فصيلة الدم', type: 'bloodType' },
      { name: 'الطول', type: 'height' },
      { name: 'الوزن', type: 'weight' },
      { name: 'رقم الهاتف', type: 'arabicPhone' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'تاريخ التسجيل', type: 'date' },
    ]
  },
  {
    id: 'medical-visits',
    name: { ar: 'زيارات طبية', en: 'Medical Visits' },
    description: { ar: 'بيانات زيارات المرضى للعيادات', en: 'Patient clinic visits' },
    category: 'medical',
    icon: '🩺',
    color: 'rose',
    fields: [
      { name: 'رقم الزيارة', type: 'uuid' },
      { name: 'رقم الملف', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'اسم المريض', type: 'arabicFullName' },
      { name: 'تاريخ الزيارة', type: 'datetime' },
      { name: 'القسم', type: 'custom', options: { values: ['الطوارئ', 'العيادات الخارجية', 'الباطنية', 'الجراحة', 'العظام', 'الأطفال', 'النساء والتوليد', 'الأسنان', 'العيون', 'الجلدية'] } },
      { name: 'اسم الطبيب', type: 'arabicFullName' },
      { name: 'التشخيص', type: 'diagnosis' },
      { name: 'الأدوية', type: 'medication' },
      { name: 'تكلفة الزيارة', type: 'price' },
      { name: 'حالة الدفع', type: 'custom', options: { values: ['مدفوع', 'غير مدفوع', 'تأمين'] } },
    ]
  },
  {
    id: 'lab-results',
    name: { ar: 'نتائج مختبرية', en: 'Lab Results' },
    description: { ar: 'بيانات نتائج التحاليل المخبرية', en: 'Laboratory test results' },
    category: 'medical',
    icon: '🧪',
    color: 'amber',
    fields: [
      { name: 'رقم العينة', type: 'uuid' },
      { name: 'رقم الملف', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'اسم المريض', type: 'arabicFullName' },
      { name: 'تاريخ السحب', type: 'datetime' },
      { name: 'نوع التحليل', type: 'custom', options: { values: ['CBC', 'Chemistry', 'Lipid Profile', 'Thyroid', 'HbA1c', 'Liver Function', 'Kidney Function', 'Urine Analysis'] } },
      { name: 'النتيجة', type: 'decimal', options: { min: 0, max: 500, decimals: 2 } },
      { name: 'الوحدة', type: 'custom', options: { values: ['mg/dL', 'g/dL', 'mmol/L', 'U/L', '%', 'cells/μL'] } },
      { name: 'الحالة', type: 'custom', options: { values: ['طبيعي', 'مرتفع', 'منخفض', 'حرج'] } },
      { name: 'اسم الفني', type: 'arabicFullName' },
    ]
  },
  {
    id: 'pharmacy-inventory',
    name: { ar: 'مخزون الأدوية', en: 'Pharmacy Inventory' },
    description: { ar: 'بيانات مخزون الصيدلية', en: 'Pharmacy stock data' },
    category: 'medical',
    icon: '💊',
    color: 'green',
    fields: [
      { name: 'رقم الدواء', type: 'uuid' },
      { name: 'اسم الدواء', type: 'medication' },
      { name: 'الاسم التجاري', type: 'custom', options: { values: ['Panadol', 'Augmentin', 'Lipitor', 'Glucophage', 'Zithromax', 'Nexium', 'Crestor', 'Ventolin'] } },
      { name: 'الفئة', type: 'custom', options: { values: ['مسكنات', 'مضادات حيوية', 'أدوية القلب', 'أدوية السكري', 'أدوية الضغط', 'فيتامينات', 'أدوية الجهاز الهضمي'] } },
      { name: 'الكمية', type: 'number', options: { min: 0, max: 1000 } },
      { name: 'سعر الشراء', type: 'price' },
      { name: 'سعر البيع', type: 'price' },
      { name: 'تاريخ الصلاحية', type: 'futureDate' },
      { name: 'الشركة المصنعة', type: 'arabicCompany' },
    ]
  },
  {
    id: 'clinical-trials',
    name: { ar: 'تجارب سريرية', en: 'Clinical Trials' },
    description: { ar: 'بيانات أبحاث التجارب السريرية - تاريخ البدء قبل الانتهاء بـ 3-12 شهر', en: 'Clinical trial research data - start date 3-12 months before end' },
    category: 'medical',
    icon: '🔬',
    color: 'violet',
    fields: [
      { name: 'رقم التجربة', type: 'uuid' },
      { name: 'اسم الدراسة', type: 'custom', options: { values: ['تجربة عشوائية مضبوطة', 'دراسة مقطعية', 'دراسة أترابية', 'تجربة المرحلة الثالثة'] } },
      { name: 'رقم المشارك', type: 'number', options: { min: 1000, max: 9999 } },
      { name: 'المجموعة', type: 'custom', options: { values: ['Control', 'Treatment A', 'Treatment B', 'Placebo'] } },
      { name: 'العمر', type: 'age' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'القياس الأساسي', type: 'decimal', options: { min: 50, max: 200, decimals: 1 } },
      { name: 'القياس النهائي', type: 'decimal', options: { min: 50, max: 200, decimals: 1 } },
      { name: 'الأعراض الجانبية', type: 'boolean' },
      { name: 'تاريخ البدء', type: 'startDate' },
      { name: 'تاريخ الانتهاء', type: 'endDate' },
      { name: 'المدة (أشهر)', type: 'durationMonths' },
    ]
  },
  {
    id: 'hospital-staff',
    name: { ar: 'طاقم المستشفى', en: 'Hospital Staff' },
    description: { ar: 'بيانات العاملين في المستشفى', en: 'Hospital employees data' },
    category: 'medical',
    icon: '👨‍⚕️',
    color: 'teal',
    fields: [
      { name: 'الرقم الوظيفي', type: 'number', options: { min: 10000, max: 99999 } },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'المسمى الوظيفي', type: 'custom', options: { values: ['طبيب استشاري', 'طبيب أخصائي', 'طبيب مقيم', 'ممرض/ة', 'فني مختبر', 'فني أشعة', 'صيدلي', 'إداري'] } },
      { name: 'القسم', type: 'custom', options: { values: ['الطوارئ', 'العناية المركزة', 'الجراحة', 'الباطنية', 'الأطفال', 'النساء والتوليد', 'المختبر', 'الأشعة', 'الصيدلية'] } },
      { name: 'التخصص', type: 'custom', options: { values: ['قلب', 'عظام', 'أعصاب', 'جلدية', 'عيون', 'أنف وأذن', 'مسالك بولية', 'عام'] } },
      { name: 'سنوات الخبرة', type: 'number', options: { min: 1, max: 35 } },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'البريد', type: 'email' },
      { name: 'الراتب', type: 'salary' },
      { name: 'تاريخ التعيين', type: 'date' },
    ]
  },

  // ==================== التعليم ====================
  {
    id: 'student-records',
    name: { ar: 'سجلات الطلاب', en: 'Student Records' },
    description: { ar: 'بيانات طلاب المدارس والجامعات - عمر مناسب للمرحلة', en: 'School and university students - age appropriate for level' },
    category: 'education',
    icon: '🎓',
    color: 'blue',
    isEducationTemplate: true,
    fields: [
      { name: 'رقم الطالب', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'الاسم الكامل', type: 'arabicFullName' },
      { name: 'تاريخ الميلاد', type: 'studentBirthDate' },
      { name: 'العمر', type: 'studentAge' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'المرحلة', type: 'studentEducationLevel' },
      { name: 'السنة الدراسية', type: 'studentGradeYear' },
      { name: 'نوع المؤسسة', type: 'studentSchoolType' },
      { name: 'المعدل', type: 'gpa' },
      { name: 'التقدير', type: 'grade' },
      { name: 'هاتف ولي الأمر', type: 'arabicPhone' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'سنة التخرج المتوقعة', type: 'studentExpectedGraduation' },
    ]
  },
  {
    id: 'university-students',
    name: { ar: 'طلاب جامعيين', en: 'University Students' },
    description: { ar: 'بيانات طلاب الجامعات - عمر 18-25 سنة', en: 'University students data - age 18-25' },
    category: 'education',
    icon: '🏛️',
    color: 'indigo',
    isEducationTemplate: true,
    fields: [
      { name: 'الرقم الجامعي', type: 'number', options: { min: 430000000, max: 449999999 } },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'تاريخ الميلاد', type: 'studentBirthDate' },
      { name: 'العمر', type: 'studentAge' },
      { name: 'البريد الجامعي', type: 'email' },
      { name: 'الكلية', type: 'custom', options: { values: ['الهندسة', 'الطب', 'العلوم', 'الحاسب', 'إدارة الأعمال', 'الحقوق', 'التربية', 'الآداب', 'الصيدلة'] } },
      { name: 'التخصص', type: 'major' },
      { name: 'المستوى الدراسي', type: 'studentGradeYear' },
      { name: 'الساعات المكتسبة', type: 'number', options: { min: 0, max: 160 } },
      { name: 'المعدل التراكمي', type: 'gpa' },
      { name: 'الحالة الأكاديمية', type: 'custom', options: { values: ['منتظم', 'إنذار أول', 'إنذار ثاني', 'مفصول', 'متخرج', 'منسحب'] } },
      { name: 'نوع القبول', type: 'custom', options: { values: ['منحة كاملة', 'منحة جزئية', 'عادي', 'موازي'] } },
      { name: 'تاريخ الالتحاق', type: 'date' },
      { name: 'سنة التخرج المتوقعة', type: 'studentExpectedGraduation' },
    ]
  },
  {
    id: 'course-grades',
    name: { ar: 'درجات المقررات', en: 'Course Grades' },
    description: { ar: 'بيانات درجات الطلاب في المقررات', en: 'Student course grades' },
    category: 'education',
    icon: '📝',
    color: 'green',
    fields: [
      { name: 'رقم الطالب', type: 'number', options: { min: 430000000, max: 449999999 } },
      { name: 'اسم الطالب', type: 'arabicFullName' },
      { name: 'رمز المقرر', type: 'custom', options: { values: ['CS101', 'MATH201', 'ENG102', 'PHY101', 'CHEM101', 'BIO101', 'ACC201', 'MGT301'] } },
      { name: 'اسم المقرر', type: 'custom', options: { values: ['مقدمة في البرمجة', 'التفاضل والتكامل', 'اللغة الإنجليزية', 'الفيزياء العامة', 'الكيمياء العامة', 'الأحياء العامة', 'مبادئ المحاسبة', 'مبادئ الإدارة'] } },
      { name: 'أعمال السنة', type: 'number', options: { min: 20, max: 40 } },
      { name: 'الاختبار النهائي', type: 'number', options: { min: 25, max: 60 } },
      { name: 'الدرجة الكلية', type: 'number', options: { min: 50, max: 100 } },
      { name: 'التقدير', type: 'grade' },
      { name: 'الفصل الدراسي', type: 'custom', options: { values: ['الأول 1445', 'الثاني 1445', 'الصيفي 1445', 'الأول 1446'] } },
    ]
  },
  {
    id: 'teachers',
    name: { ar: 'بيانات المعلمين', en: 'Teachers Data' },
    description: { ar: 'بيانات الكادر التعليمي', en: 'Teaching staff data' },
    category: 'education',
    icon: '👨‍🏫',
    color: 'amber',
    fields: [
      { name: 'الرقم الوظيفي', type: 'number', options: { min: 10000, max: 99999 } },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'التخصص', type: 'major' },
      { name: 'المرحلة', type: 'custom', options: { values: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'] } },
      { name: 'المادة', type: 'custom', options: { values: ['رياضيات', 'لغة عربية', 'لغة إنجليزية', 'علوم', 'فيزياء', 'كيمياء', 'أحياء', 'تاريخ', 'جغرافيا', 'حاسب'] } },
      { name: 'سنوات الخبرة', type: 'number', options: { min: 1, max: 35 } },
      { name: 'الراتب', type: 'salary' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'البريد', type: 'email' },
      { name: 'اسم المدرسة', type: 'custom', options: { values: ['مدرسة الملك فهد', 'مدرسة الأمير سلطان', 'مدرسة النور', 'مدرسة الفيصلية', 'مدرسة العروبة'] } },
    ]
  },
  {
    id: 'online-courses',
    name: { ar: 'دورات أونلاين', en: 'Online Courses' },
    description: { ar: 'بيانات المتدربين في الدورات الإلكترونية - تاريخ البدء قبل الانتهاء بـ 3-12 شهر', en: 'Online course trainees - start date 3-12 months before end' },
    category: 'education',
    icon: '💻',
    color: 'purple',
    fields: [
      { name: 'رقم المتدرب', type: 'uuid' },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'البريد', type: 'email' },
      { name: 'اسم الدورة', type: 'custom', options: { values: ['Python للمبتدئين', 'تحليل البيانات', 'تطوير الويب', 'التسويق الرقمي', 'إدارة المشاريع', 'الذكاء الاصطناعي', 'تصميم UI/UX', 'Excel المتقدم'] } },
      { name: 'المدرب', type: 'arabicFullName' },
      { name: 'نسبة الإنجاز', type: 'percentage' },
      { name: 'الدرجة النهائية', type: 'number', options: { min: 60, max: 100 } },
      { name: 'حالة الشهادة', type: 'custom', options: { values: ['جاري الدراسة', 'اجتاز', 'لم يجتز', 'منسحب'] } },
      { name: 'تاريخ البدء', type: 'startDate' },
      { name: 'تاريخ الانتهاء', type: 'endDate' },
      { name: 'المدة (أشهر)', type: 'durationMonths' },
    ]
  },
  {
    id: 'library-books',
    name: { ar: 'كتب المكتبة', en: 'Library Books' },
    description: { ar: 'بيانات كتب المكتبة', en: 'Library book catalog' },
    category: 'education',
    icon: '📚',
    color: 'orange',
    fields: [
      { name: 'رقم الكتاب', type: 'isbn' },
      { name: 'عنوان الكتاب', type: 'custom', options: { values: ['مقدمة في علم النفس', 'أساسيات الفيزياء', 'تاريخ الحضارات', 'مبادئ الاقتصاد', 'فن الإدارة', 'البرمجة بلغة بايثون'] } },
      { name: 'المؤلف', type: 'arabicFullName' },
      { name: 'الناشر', type: 'arabicCompany' },
      { name: 'سنة النشر', type: 'number', options: { min: 1990, max: 2024 } },
      { name: 'التصنيف', type: 'custom', options: { values: ['علوم', 'أدب', 'تاريخ', 'دين', 'تقنية', 'اقتصاد', 'طب', 'هندسة'] } },
      { name: 'عدد النسخ', type: 'number', options: { min: 1, max: 20 } },
      { name: 'متاح', type: 'boolean' },
    ]
  },

  // ==================== الأعمال والموارد البشرية ====================
  {
    id: 'employees',
    name: { ar: 'بيانات الموظفين', en: 'Employee Data' },
    description: { ar: 'بيانات موظفي الشركات', en: 'Company employee data' },
    category: 'business',
    icon: '💼',
    color: 'slate',
    fields: [
      { name: 'الرقم الوظيفي', type: 'number', options: { min: 1000, max: 9999 } },
      { name: 'الاسم الكامل', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'البريد الإلكتروني', type: 'email' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'القسم', type: 'arabicDepartment' },
      { name: 'المسمى الوظيفي', type: 'arabicJobTitle' },
      { name: 'تاريخ التعيين', type: 'date' },
      { name: 'الراتب الأساسي', type: 'salary' },
      { name: 'البدلات', type: 'price' },
      { name: 'نوع العقد', type: 'custom', options: { values: ['دائم', 'مؤقت', 'تدريب', 'استشاري'] } },
    ]
  },
  {
    id: 'job-applications',
    name: { ar: 'طلبات التوظيف', en: 'Job Applications' },
    description: { ar: 'بيانات المتقدمين للوظائف', en: 'Job applicant data' },
    category: 'hr',
    icon: '📄',
    color: 'sky',
    fields: [
      { name: 'رقم الطلب', type: 'uuid' },
      { name: 'اسم المتقدم', type: 'arabicFullName' },
      { name: 'البريد', type: 'email' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'الوظيفة المطلوبة', type: 'arabicJobTitle' },
      { name: 'سنوات الخبرة', type: 'number', options: { min: 0, max: 25 } },
      { name: 'المؤهل', type: 'degree' },
      { name: 'الجامعة', type: 'university' },
      { name: 'الراتب المتوقع', type: 'salary' },
      { name: 'حالة الطلب', type: 'custom', options: { values: ['جديد', 'قيد المراجعة', 'مقابلة', 'مقبول', 'مرفوض'] } },
      { name: 'تاريخ التقديم', type: 'date' },
    ]
  },
  {
    id: 'performance-reviews',
    name: { ar: 'تقييم الأداء', en: 'Performance Reviews' },
    description: { ar: 'بيانات تقييمات أداء الموظفين', en: 'Employee performance reviews' },
    category: 'hr',
    icon: '⭐',
    color: 'yellow',
    fields: [
      { name: 'رقم التقييم', type: 'uuid' },
      { name: 'الرقم الوظيفي', type: 'number', options: { min: 1000, max: 9999 } },
      { name: 'اسم الموظف', type: 'arabicFullName' },
      { name: 'القسم', type: 'arabicDepartment' },
      { name: 'اسم المقيّم', type: 'arabicFullName' },
      { name: 'الفترة', type: 'custom', options: { values: ['الربع الأول 2024', 'الربع الثاني 2024', 'الربع الثالث 2024', 'الربع الرابع 2024'] } },
      { name: 'جودة العمل', type: 'rating' },
      { name: 'الالتزام', type: 'rating' },
      { name: 'العمل الجماعي', type: 'rating' },
      { name: 'الإبداع', type: 'rating' },
      { name: 'التقييم العام', type: 'custom', options: { values: ['ممتاز', 'جيد جداً', 'جيد', 'مقبول', 'ضعيف'] } },
      { name: 'الملاحظات', type: 'paragraph' },
    ]
  },
  {
    id: 'attendance-records',
    name: { ar: 'سجلات الحضور', en: 'Attendance Records' },
    description: { ar: 'بيانات حضور وانصراف الموظفين', en: 'Employee attendance records' },
    category: 'hr',
    icon: '⏰',
    color: 'emerald',
    fields: [
      { name: 'الرقم الوظيفي', type: 'number', options: { min: 1000, max: 9999 } },
      { name: 'اسم الموظف', type: 'arabicFullName' },
      { name: 'التاريخ', type: 'date' },
      { name: 'وقت الحضور', type: 'time' },
      { name: 'وقت الانصراف', type: 'time' },
      { name: 'ساعات العمل', type: 'decimal', options: { min: 4, max: 12, decimals: 1 } },
      { name: 'الحالة', type: 'custom', options: { values: ['حاضر', 'غائب', 'إجازة', 'مأذونية', 'عمل عن بعد'] } },
      { name: 'ملاحظات', type: 'sentence' },
    ]
  },
  {
    id: 'companies',
    name: { ar: 'بيانات الشركات', en: 'Company Data' },
    description: { ar: 'بيانات شركات ومؤسسات', en: 'Companies and organizations' },
    category: 'business',
    icon: '🏢',
    color: 'gray',
    fields: [
      { name: 'رقم السجل', type: 'number', options: { min: 1000000000, max: 9999999999 } },
      { name: 'اسم الشركة', type: 'arabicCompany' },
      { name: 'النشاط', type: 'custom', options: { values: ['تقنية المعلومات', 'التجارة', 'المقاولات', 'الخدمات', 'الصناعة', 'العقارات', 'الأغذية', 'النقل'] } },
      { name: 'رأس المال', type: 'number', options: { min: 100000, max: 100000000 } },
      { name: 'عدد الموظفين', type: 'number', options: { min: 5, max: 5000 } },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'البريد', type: 'email' },
      { name: 'الموقع', type: 'website' },
      { name: 'تاريخ التأسيس', type: 'date' },
    ]
  },

  // ==================== التجارة الإلكترونية ====================
  {
    id: 'products',
    name: { ar: 'كتالوج المنتجات', en: 'Product Catalog' },
    description: { ar: 'بيانات منتجات المتاجر - المنتج مرتبط بالفئة منطقياً', en: 'Store product data - Product linked to category logically' },
    category: 'ecommerce',
    icon: '📦',
    color: 'orange',
    fields: [
      { name: 'رقم المنتج', type: 'sku' },
      { name: 'الباركود', type: 'barcode' },
      { name: 'اسم المنتج', type: 'productName' },
      { name: 'الفئة الرئيسية', type: 'category' },
      { name: 'الفئة الفرعية', type: 'subCategory' },
      { name: 'الماركة', type: 'productBrand' },
      { name: 'الوصف', type: 'paragraph' },
      { name: 'سعر الشراء', type: 'productPrice' },
      { name: 'سعر البيع', type: 'productPrice' },
      { name: 'الوحدة', type: 'productUnit' },
      { name: 'الكمية المتاحة', type: 'number', options: { min: 0, max: 500 } },
      { name: 'الحد الأدنى للمخزون', type: 'number', options: { min: 5, max: 50 } },
      { name: 'التقييم', type: 'rating' },
      { name: 'عدد التقييمات', type: 'number', options: { min: 0, max: 5000 } },
      { name: 'متاح', type: 'boolean' },
    ]
  },
  {
    id: 'orders',
    name: { ar: 'طلبات العملاء', en: 'Customer Orders' },
    description: { ar: 'بيانات طلبات الشراء - الكمية × السعر = الإجمالي', en: 'Purchase order data - Quantity × Price = Total' },
    category: 'ecommerce',
    icon: '🛒',
    color: 'green',
    fields: [
      { name: 'رقم الطلب', type: 'orderNumber' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'البريد', type: 'email' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'المنتج', type: 'productName' },
      { name: 'الفئة', type: 'category' },
      { name: 'الكمية', type: 'quantity' },
      { name: 'سعر الوحدة', type: 'unitPrice' },
      { name: 'المجموع الفرعي', type: 'subtotal' },
      { name: 'الخصم (%)', type: 'discount' },
      { name: 'قيمة الخصم', type: 'discountAmount' },
      { name: 'الضريبة (%)', type: 'tax' },
      { name: 'قيمة الضريبة', type: 'taxAmount' },
      { name: 'تكلفة الشحن', type: 'shippingCost' },
      { name: 'الإجمالي', type: 'grandTotal' },
      { name: 'طريقة الدفع', type: 'paymentMethod' },
      { name: 'حالة الدفع', type: 'paymentStatus' },
      { name: 'حالة الطلب', type: 'orderStatus' },
      { name: 'عنوان التوصيل', type: 'fullAddress' },
      { name: 'تاريخ الطلب', type: 'datetime' },
    ]
  },
  {
    id: 'customer-reviews',
    name: { ar: 'تقييمات العملاء', en: 'Customer Reviews' },
    description: { ar: 'تقييمات ومراجعات المنتجات', en: 'Product reviews and ratings' },
    category: 'ecommerce',
    icon: '⭐',
    color: 'yellow',
    fields: [
      { name: 'رقم التقييم', type: 'uuid' },
      { name: 'رقم المنتج', type: 'uuid' },
      { name: 'اسم المنتج', type: 'productName' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'التقييم', type: 'rating' },
      { name: 'عنوان المراجعة', type: 'sentence' },
      { name: 'نص المراجعة', type: 'paragraph' },
      { name: 'موصى به', type: 'boolean' },
      { name: 'تاريخ التقييم', type: 'date' },
      { name: 'مفيد', type: 'number', options: { min: 0, max: 100 } },
    ]
  },
  {
    id: 'shopping-cart',
    name: { ar: 'سلة التسوق', en: 'Shopping Cart' },
    description: { ar: 'بيانات سلات تسوق العملاء', en: 'Customer shopping cart data' },
    category: 'ecommerce',
    icon: '🛍️',
    color: 'pink',
    fields: [
      { name: 'رقم السلة', type: 'uuid' },
      { name: 'رقم العميل', type: 'uuid' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'المنتج', type: 'productName' },
      { name: 'الكمية', type: 'number', options: { min: 1, max: 5 } },
      { name: 'السعر', type: 'price' },
      { name: 'تاريخ الإضافة', type: 'datetime' },
      { name: 'حالة السلة', type: 'custom', options: { values: ['نشطة', 'مهجورة', 'مكتملة'] } },
    ]
  },
  {
    id: 'coupons',
    name: { ar: 'كوبونات الخصم', en: 'Discount Coupons' },
    description: { ar: 'بيانات كوبونات وعروض الخصم', en: 'Discount coupon data' },
    category: 'ecommerce',
    icon: '🎟️',
    color: 'red',
    fields: [
      { name: 'كود الكوبون', type: 'custom', options: { values: ['SAVE10', 'FIRST20', 'VIP30', 'SUMMER25', 'WINTER15', 'FLASH50'] } },
      { name: 'نوع الخصم', type: 'custom', options: { values: ['نسبة مئوية', 'مبلغ ثابت', 'شحن مجاني'] } },
      { name: 'قيمة الخصم', type: 'number', options: { min: 5, max: 50 } },
      { name: 'الحد الأدنى للطلب', type: 'price' },
      { name: 'عدد الاستخدامات', type: 'number', options: { min: 0, max: 1000 } },
      { name: 'الحد الأقصى', type: 'number', options: { min: 100, max: 5000 } },
      { name: 'تاريخ البدء', type: 'date' },
      { name: 'تاريخ الانتهاء', type: 'futureDate' },
      { name: 'فعال', type: 'boolean' },
    ]
  },

  // ==================== المالية والبنكية ====================
  {
    id: 'bank-accounts',
    name: { ar: 'حسابات بنكية', en: 'Bank Accounts' },
    description: { ar: 'بيانات الحسابات البنكية - رقم الحساب والفرع والبنك والدولة مترابطة', en: 'Bank account data - Account, branch, bank and country are linked' },
    category: 'finance',
    icon: '🏦',
    color: 'blue',
    fields: [
      { name: 'رقم IBAN', type: 'iban' },
      { name: 'رقم الحساب', type: 'accountNumber' },
      { name: 'اسم صاحب الحساب', type: 'arabicFullName' },
      { name: 'البنك', type: 'bankName' },
      { name: 'كود البنك', type: 'bankCode' },
      { name: 'SWIFT', type: 'swiftCode' },
      { name: 'الفرع', type: 'branchName' },
      { name: 'مدينة الفرع', type: 'branchCity' },
      { name: 'نوع الحساب', type: 'custom', options: { values: ['جاري', 'توفير', 'استثماري', 'راتب'] } },
      { name: 'الرصيد', type: 'price' },
      { name: 'العملة', type: 'currencyCode' },
      { name: 'تاريخ الفتح', type: 'date' },
      { name: 'الحالة', type: 'custom', options: { values: ['نشط', 'مجمد', 'مغلق'] } },
    ]
  },
  {
    id: 'transactions',
    name: { ar: 'المعاملات المالية', en: 'Financial Transactions' },
    description: { ar: 'بيانات العمليات المالية - رقم الحساب والبنك والفرع مترابطة', en: 'Financial transaction data - Account, bank and branch are linked' },
    category: 'finance',
    icon: '💳',
    color: 'green',
    fields: [
      { name: 'رقم العملية', type: 'uuid' },
      { name: 'رقم IBAN', type: 'iban' },
      { name: 'البنك', type: 'bankName' },
      { name: 'الفرع', type: 'branchName' },
      { name: 'نوع العملية', type: 'custom', options: { values: ['إيداع', 'سحب', 'تحويل', 'دفع فاتورة', 'شراء', 'استلام'] } },
      { name: 'المبلغ', type: 'price' },
      { name: 'العملة', type: 'currencyCode' },
      { name: 'الوصف', type: 'sentence' },
      { name: 'المستفيد', type: 'arabicFullName' },
      { name: 'بنك المستفيد', type: 'bankName' },
      { name: 'التاريخ والوقت', type: 'datetime' },
      { name: 'الحالة', type: 'custom', options: { values: ['مكتملة', 'معلقة', 'ملغية', 'فاشلة'] } },
      { name: 'رقم المرجع', type: 'number', options: { min: 100000000, max: 999999999 } },
    ]
  },
  {
    id: 'invoices',
    name: { ar: 'الفواتير', en: 'Invoices' },
    description: { ar: 'بيانات الفواتير التجارية - الكمية × السعر = الإجمالي', en: 'Commercial invoice data - Quantity × Price = Total' },
    category: 'finance',
    icon: '🧾',
    color: 'amber',
    fields: [
      { name: 'رقم الفاتورة', type: 'invoiceNumber' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'الشركة', type: 'arabicCompany' },
      { name: 'المنتج/الخدمة', type: 'productName' },
      { name: 'الكمية', type: 'quantity' },
      { name: 'سعر الوحدة', type: 'unitPrice' },
      { name: 'المجموع الفرعي', type: 'subtotal' },
      { name: 'الخصم (%)', type: 'discount' },
      { name: 'قيمة الخصم', type: 'discountAmount' },
      { name: 'نسبة الضريبة (%)', type: 'tax' },
      { name: 'قيمة الضريبة', type: 'taxAmount' },
      { name: 'الإجمالي', type: 'grandTotal' },
      { name: 'تاريخ الإصدار', type: 'date' },
      { name: 'تاريخ الاستحقاق', type: 'futureDate' },
      { name: 'طريقة الدفع', type: 'paymentMethod' },
      { name: 'حالة الدفع', type: 'paymentStatus' },
    ]
  },
  {
    id: 'loans',
    name: { ar: 'القروض', en: 'Loans' },
    description: { ar: 'بيانات القروض البنكية - البنك والفرع ورقم الحساب مترابطة', en: 'Bank loan data - Bank, branch and account are linked' },
    category: 'finance',
    icon: '💰',
    color: 'indigo',
    fields: [
      { name: 'رقم القرض', type: 'uuid' },
      { name: 'اسم المقترض', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'البنك', type: 'bankName' },
      { name: 'الفرع', type: 'branchName' },
      { name: 'مدينة الفرع', type: 'branchCity' },
      { name: 'رقم الحساب', type: 'iban' },
      { name: 'نوع القرض', type: 'custom', options: { values: ['شخصي', 'عقاري', 'سيارة', 'تعليمي', 'تجاري'] } },
      { name: 'مبلغ القرض', type: 'number', options: { min: 10000, max: 2000000 } },
      { name: 'نسبة الفائدة', type: 'percentage' },
      { name: 'مدة السداد (شهر)', type: 'durationMonths' },
      { name: 'القسط الشهري', type: 'price' },
      { name: 'المتبقي', type: 'price' },
      { name: 'العملة', type: 'currencyCode' },
      { name: 'تاريخ البدء', type: 'contractStartDate' },
      { name: 'تاريخ الانتهاء', type: 'contractEndDate' },
      { name: 'الحالة', type: 'custom', options: { values: ['سار', 'متعثر', 'مسدد', 'ملغي'] } },
    ]
  },
  {
    id: 'credit-cards',
    name: { ar: 'بطاقات الائتمان', en: 'Credit Cards' },
    description: { ar: 'بيانات بطاقات الائتمان - البنك والفرع ورقم الحساب مترابطة', en: 'Credit card data - Bank, branch and account are linked' },
    category: 'finance',
    icon: '💳',
    color: 'purple',
    fields: [
      { name: 'رقم البطاقة', type: 'creditCard' },
      { name: 'اسم حامل البطاقة', type: 'arabicFullName' },
      { name: 'البنك', type: 'bankName' },
      { name: 'الفرع', type: 'branchName' },
      { name: 'رقم الحساب المرتبط', type: 'iban' },
      { name: 'SWIFT', type: 'swiftCode' },
      { name: 'نوع البطاقة', type: 'custom', options: { values: ['Visa', 'Mastercard', 'Amex', 'Mada'] } },
      { name: 'الفئة', type: 'custom', options: { values: ['Classic', 'Gold', 'Platinum', 'Infinite', 'Signature'] } },
      { name: 'الحد الائتماني', type: 'number', options: { min: 5000, max: 500000 } },
      { name: 'الرصيد المستخدم', type: 'price' },
      { name: 'العملة', type: 'currencyCode' },
      { name: 'تاريخ الإصدار', type: 'date' },
      { name: 'تاريخ الانتهاء', type: 'futureDate' },
      { name: 'الحالة', type: 'custom', options: { values: ['نشطة', 'موقوفة', 'ملغية', 'منتهية'] } },
    ]
  },

  // ==================== العقارات ====================
  {
    id: 'real-estate-listings',
    name: { ar: 'عروض عقارية', en: 'Real Estate Listings' },
    description: { ar: 'بيانات العقارات المعروضة الحقيقية والمترابطة - السعر والإيجار ومساحة منطقية', en: 'Real property listings with coherent price, rent and area data' },
    category: 'realestate',
    icon: '🏠',
    color: 'teal',
    fields: [
      { name: 'رقم العقار', type: 'propertyId' },
      { name: 'نوع العقار', type: 'propertyType' },
      { name: 'الغرض', type: 'propertyPurpose' },
      { name: 'المدينة', type: 'propertyCity' },
      { name: 'الحي', type: 'propertyDistrict' },
      { name: 'العنوان الكامل', type: 'propertyFullAddress' },
      { name: 'المساحة (م²)', type: 'propertyArea' },
      { name: 'الوحدة', type: 'areaUnit' },
      { name: 'عدد الغرف', type: 'bedrooms' },
      { name: 'عدد الحمامات', type: 'bathrooms' },
      { name: 'الطابق', type: 'floor' },
      { name: 'إجمالي الطوابق', type: 'totalFloors' },
      { name: 'رقم الوحدة', type: 'unitNumber' },
      { name: 'سعر المتر', type: 'pricePerSqm' },
      { name: 'السعر الإجمالي', type: 'totalPrice' },
      { name: 'السعر (منسق)', type: 'priceFormatted' },
      { name: 'الإيجار الشهري', type: 'monthlyRent' },
      { name: 'الإيجار السنوي', type: 'annualRent' },
      { name: 'عائد الإيجار (%)', type: 'rentYield' },
      { name: 'العملة', type: 'propertyCurrency' },
      { name: 'الحالة', type: 'propertyCondition' },
      { name: 'التشطيب', type: 'finishing' },
      { name: 'الإطلالة', type: 'view' },
      { name: 'سنة البناء', type: 'buildYear' },
      { name: 'عمر العقار', type: 'buildingAge' },
      { name: 'مواقف السيارات', type: 'parking' },
      { name: 'حديقة', type: 'hasGarden' },
      { name: 'مسبح', type: 'hasPool' },
      { name: 'مرافق المبنى', type: 'buildingAmenities' },
      { name: 'مرافق الوحدة', type: 'unitAmenities' },
      { name: 'الوكالة العقارية', type: 'agency' },
      { name: 'التصنيف', type: 'tierLabel' },
    ]
  },
  {
    id: 'rental-contracts',
    name: { ar: 'عقود الإيجار', en: 'Rental Contracts' },
    description: { ar: 'بيانات عقود الإيجار الحقيقية والمترابطة - تاريخ البدء قبل الانتهاء بـ 3-12 شهر', en: 'Real rental contracts - start date 3-12 months before end' },
    category: 'realestate',
    icon: '📝',
    color: 'cyan',
    fields: [
      { name: 'رقم العقد', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'اسم المستأجر', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'هاتف المستأجر', type: 'arabicPhone' },
      { name: 'اسم المؤجر', type: 'arabicFullName' },
      { name: 'رقم العقار', type: 'propertyId' },
      { name: 'نوع العقار', type: 'propertyType' },
      { name: 'المدينة', type: 'propertyCity' },
      { name: 'الحي', type: 'propertyDistrict' },
      { name: 'العنوان', type: 'propertyFullAddress' },
      { name: 'المساحة (م²)', type: 'propertyArea' },
      { name: 'عدد الغرف', type: 'bedrooms' },
      { name: 'عدد الحمامات', type: 'bathrooms' },
      { name: 'الإيجار الشهري', type: 'monthlyRent' },
      { name: 'الإيجار الشهري (منسق)', type: 'rentFormatted' },
      { name: 'الإيجار السنوي', type: 'annualRent' },
      { name: 'الإيجار السنوي (منسق)', type: 'annualRentFormatted' },
      { name: 'العملة', type: 'propertyCurrency' },
      { name: 'تاريخ البدء', type: 'leaseStartDate' },
      { name: 'تاريخ الانتهاء', type: 'leaseEndDate' },
      { name: 'المدة (أشهر)', type: 'durationMonths' },
      { name: 'طريقة الدفع', type: 'custom', options: { values: ['سنوي', 'نصف سنوي', 'ربع سنوي', 'شهري'] } },
      { name: 'الحالة', type: 'propertyCondition' },
      { name: 'التشطيب', type: 'finishing' },
      { name: 'الوكالة العقارية', type: 'agency' },
    ]
  },

  // ==================== السفر والسياحة ====================
  {
    id: 'flight-bookings',
    name: { ar: 'حجوزات الطيران', en: 'Flight Bookings' },
    description: { ar: 'بيانات حجوزات رحلات الطيران', en: 'Flight booking data' },
    category: 'travel',
    icon: '✈️',
    color: 'sky',
    fields: [
      { name: 'رقم الحجز', type: 'custom', options: { values: ['ABC123', 'XYZ789', 'DEF456', 'GHI012', 'JKL345'] } },
      { name: 'اسم المسافر', type: 'arabicFullName' },
      { name: 'رقم الجواز', type: 'custom', options: { values: ['A12345678', 'B98765432', 'C11223344', 'D55667788'] } },
      { name: 'شركة الطيران', type: 'custom', options: { values: ['الخطوط السعودية', 'طيران ناس', 'طيران أديل', 'الإمارات', 'القطرية', 'الاتحاد'] } },
      { name: 'رقم الرحلة', type: 'custom', options: { values: ['SV100', 'XY200', 'EK300', 'QR400', 'EY500'] } },
      { name: 'من', type: 'arabicCity' },
      { name: 'إلى', type: 'arabicCity' },
      { name: 'تاريخ السفر', type: 'futureDate' },
      { name: 'وقت المغادرة', type: 'time' },
      { name: 'الدرجة', type: 'custom', options: { values: ['اقتصادية', 'أعمال', 'أولى'] } },
      { name: 'السعر', type: 'price' },
      { name: 'حالة الحجز', type: 'custom', options: { values: ['مؤكد', 'قائمة انتظار', 'ملغي'] } },
    ]
  },
  {
    id: 'hotel-bookings',
    name: { ar: 'حجوزات الفنادق', en: 'Hotel Bookings' },
    description: { ar: 'بيانات حجوزات الفنادق', en: 'Hotel booking data' },
    category: 'travel',
    icon: '🏨',
    color: 'indigo',
    fields: [
      { name: 'رقم الحجز', type: 'uuid' },
      { name: 'اسم النزيل', type: 'arabicFullName' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'البريد', type: 'email' },
      { name: 'اسم الفندق', type: 'custom', options: { values: ['فندق الريتز كارلتون', 'فندق هيلتون', 'فندق الفور سيزونز', 'فندق ماريوت', 'فندق كراون بلازا'] } },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'نوع الغرفة', type: 'custom', options: { values: ['فردية', 'مزدوجة', 'جناح', 'جناح رئاسي'] } },
      { name: 'تاريخ الوصول', type: 'futureDate' },
      { name: 'تاريخ المغادرة', type: 'futureDate' },
      { name: 'عدد الليالي', type: 'number', options: { min: 1, max: 14 } },
      { name: 'سعر الليلة', type: 'price' },
      { name: 'الإجمالي', type: 'price' },
      { name: 'شامل الإفطار', type: 'boolean' },
    ]
  },
  {
    id: 'tour-packages',
    name: { ar: 'باقات سياحية', en: 'Tour Packages' },
    description: { ar: 'بيانات البرامج السياحية', en: 'Tour package data' },
    category: 'travel',
    icon: '🌍',
    color: 'emerald',
    fields: [
      { name: 'رقم البرنامج', type: 'uuid' },
      { name: 'اسم البرنامج', type: 'custom', options: { values: ['جولة إسطنبول الساحرة', 'استكشاف دبي', 'رحلة المالديف', 'مغامرة سويسرا', 'عطلة شرم الشيخ'] } },
      { name: 'الوجهة', type: 'country' },
      { name: 'المدة (أيام)', type: 'number', options: { min: 3, max: 15 } },
      { name: 'السعر للفرد', type: 'price' },
      { name: 'يشمل الطيران', type: 'boolean' },
      { name: 'يشمل الفندق', type: 'boolean' },
      { name: 'يشمل الوجبات', type: 'boolean' },
      { name: 'التقييم', type: 'rating' },
      { name: 'عدد الحجوزات', type: 'number', options: { min: 0, max: 500 } },
      { name: 'متاح', type: 'boolean' },
    ]
  },

  // ==================== المطاعم والضيافة ====================
  {
    id: 'restaurant-menu',
    name: { ar: 'قائمة الطعام', en: 'Restaurant Menu' },
    description: { ar: 'بيانات أصناف المطعم', en: 'Restaurant menu items' },
    category: 'food',
    icon: '🍽️',
    color: 'red',
    fields: [
      { name: 'رقم الصنف', type: 'uuid' },
      { name: 'اسم الصنف', type: 'custom', options: { values: ['برجر كلاسيك', 'بيتزا مارغريتا', 'سلطة سيزر', 'ستيك لحم', 'سمك مشوي', 'مكرونة بولونيز', 'كباب مشكل', 'شاورما عربي'] } },
      { name: 'الفئة', type: 'custom', options: { values: ['مقبلات', 'أطباق رئيسية', 'سلطات', 'مشويات', 'حلويات', 'مشروبات'] } },
      { name: 'الوصف', type: 'sentence' },
      { name: 'السعر', type: 'price' },
      { name: 'السعرات', type: 'number', options: { min: 100, max: 1500 } },
      { name: 'وقت التحضير (دقيقة)', type: 'number', options: { min: 5, max: 45 } },
      { name: 'حار', type: 'boolean' },
      { name: 'نباتي', type: 'boolean' },
      { name: 'متاح', type: 'boolean' },
    ]
  },
  {
    id: 'restaurant-orders',
    name: { ar: 'طلبات المطعم', en: 'Restaurant Orders' },
    description: { ar: 'بيانات طلبات العملاء في المطعم', en: 'Restaurant customer orders' },
    category: 'food',
    icon: '🍔',
    color: 'orange',
    fields: [
      { name: 'رقم الطلب', type: 'number', options: { min: 1000, max: 9999 } },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'نوع الطلب', type: 'custom', options: { values: ['داخل المطعم', 'سفري', 'توصيل'] } },
      { name: 'رقم الطاولة', type: 'number', options: { min: 1, max: 30 } },
      { name: 'الأصناف', type: 'custom', options: { values: ['برجر + بطاطس', 'بيتزا كبيرة', 'وجبة عائلية', 'سلطة + عصير', 'مشاوي مشكلة'] } },
      { name: 'الكمية', type: 'number', options: { min: 1, max: 5 } },
      { name: 'الإجمالي', type: 'price' },
      { name: 'طريقة الدفع', type: 'custom', options: { values: ['نقداً', 'بطاقة', 'تطبيق'] } },
      { name: 'وقت الطلب', type: 'datetime' },
      { name: 'حالة الطلب', type: 'custom', options: { values: ['جديد', 'قيد التحضير', 'جاهز', 'تم التوصيل'] } },
    ]
  },
  {
    id: 'food-delivery',
    name: { ar: 'توصيل الطعام', en: 'Food Delivery' },
    description: { ar: 'بيانات طلبات توصيل الطعام', en: 'Food delivery orders' },
    category: 'food',
    icon: '🛵',
    color: 'green',
    fields: [
      { name: 'رقم الطلب', type: 'uuid' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'اسم المطعم', type: 'custom', options: { values: ['مطعم البيك', 'ماكدونالدز', 'كنتاكي', 'بيتزا هت', 'هرفي', 'شاورمر'] } },
      { name: 'الطلب', type: 'custom', options: { values: ['وجبة برجر', 'بيتزا عائلية', 'وجبة دجاج', 'شاورما', 'سلطة'] } },
      { name: 'سعر الطعام', type: 'price' },
      { name: 'رسوم التوصيل', type: 'number', options: { min: 5, max: 25 } },
      { name: 'الإجمالي', type: 'price' },
      { name: 'اسم السائق', type: 'arabicFullName' },
      { name: 'وقت الطلب', type: 'datetime' },
      { name: 'وقت التوصيل', type: 'time' },
      { name: 'تقييم السائق', type: 'rating' },
    ]
  },

  // ==================== الرياضة ====================
  {
    id: 'sports-players',
    name: { ar: 'اللاعبين الرياضيين', en: 'Sports Players' },
    description: { ar: 'بيانات اللاعبين في الأندية', en: 'Club player data' },
    category: 'sports',
    icon: '⚽',
    color: 'green',
    fields: [
      { name: 'رقم اللاعب', type: 'number', options: { min: 1, max: 99 } },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'الجنسية', type: 'country' },
      { name: 'تاريخ الميلاد', type: 'birthDate' },
      { name: 'العمر', type: 'age' },
      { name: 'الطول', type: 'height' },
      { name: 'الوزن', type: 'weight' },
      { name: 'المركز', type: 'custom', options: { values: ['حارس مرمى', 'مدافع', 'ظهير أيمن', 'ظهير أيسر', 'وسط دفاعي', 'وسط هجومي', 'جناح', 'مهاجم'] } },
      { name: 'النادي', type: 'custom', options: { values: ['الهلال', 'النصر', 'الأهلي', 'الاتحاد', 'الشباب', 'الفتح', 'التعاون'] } },
      { name: 'القيمة السوقية', type: 'number', options: { min: 100000, max: 50000000 } },
      { name: 'عدد الأهداف', type: 'number', options: { min: 0, max: 50 } },
      { name: 'عدد المباريات', type: 'number', options: { min: 0, max: 200 } },
    ]
  },
  {
    id: 'gym-members',
    name: { ar: 'أعضاء النادي الرياضي', en: 'Gym Members' },
    description: { ar: 'بيانات أعضاء الصالة الرياضية - تاريخ الاشتراك قبل الانتهاء بـ 3-12 شهر', en: 'Gym membership data - subscription start 3-12 months before end' },
    category: 'sports',
    icon: '🏋️',
    color: 'orange',
    fields: [
      { name: 'رقم العضوية', type: 'number', options: { min: 10000, max: 99999 } },
      { name: 'الاسم', type: 'arabicFullName' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'العمر', type: 'age' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'نوع الاشتراك', type: 'custom', options: { values: ['شهري', 'ربع سنوي', 'نصف سنوي', 'سنوي'] } },
      { name: 'تاريخ الاشتراك', type: 'subscriptionStartDate' },
      { name: 'تاريخ الانتهاء', type: 'subscriptionEndDate' },
      { name: 'المدة (أشهر)', type: 'durationMonths' },
      { name: 'المبلغ', type: 'price' },
      { name: 'مدرب خاص', type: 'boolean' },
      { name: 'الوزن الحالي', type: 'weight' },
      { name: 'الهدف', type: 'custom', options: { values: ['خسارة وزن', 'بناء عضلات', 'لياقة عامة', 'تحسين الصحة'] } },
    ]
  },
  {
    id: 'sports-matches',
    name: { ar: 'المباريات الرياضية', en: 'Sports Matches' },
    description: { ar: 'بيانات نتائج المباريات', en: 'Match results data' },
    category: 'sports',
    icon: '🏆',
    color: 'yellow',
    fields: [
      { name: 'رقم المباراة', type: 'uuid' },
      { name: 'البطولة', type: 'custom', options: { values: ['الدوري السعودي', 'كأس الملك', 'دوري أبطال آسيا', 'كأس السوبر', 'كأس العالم للأندية'] } },
      { name: 'الفريق الأول', type: 'custom', options: { values: ['الهلال', 'النصر', 'الأهلي', 'الاتحاد', 'الشباب'] } },
      { name: 'الفريق الثاني', type: 'custom', options: { values: ['الفتح', 'التعاون', 'الرائد', 'الفيحاء', 'ضمك'] } },
      { name: 'أهداف الأول', type: 'number', options: { min: 0, max: 7 } },
      { name: 'أهداف الثاني', type: 'number', options: { min: 0, max: 7 } },
      { name: 'تاريخ المباراة', type: 'date' },
      { name: 'الملعب', type: 'custom', options: { values: ['استاد الملك فهد', 'استاد مرسول بارك', 'استاد الأمير فيصل', 'استاد الجوهرة'] } },
      { name: 'الحضور', type: 'number', options: { min: 5000, max: 65000 } },
    ]
  },

  // ==================== التقنية ====================
  {
    id: 'software-bugs',
    name: { ar: 'تقارير الأخطاء', en: 'Bug Reports' },
    description: { ar: 'بيانات تقارير أخطاء البرمجيات', en: 'Software bug reports' },
    category: 'technology',
    icon: '🐛',
    color: 'red',
    fields: [
      { name: 'رقم التقرير', type: 'uuid' },
      { name: 'العنوان', type: 'sentence' },
      { name: 'الوصف', type: 'paragraph' },
      { name: 'المشروع', type: 'custom', options: { values: ['تطبيق الجوال', 'لوحة التحكم', 'API', 'الموقع الإلكتروني', 'نظام ERP'] } },
      { name: 'الأولوية', type: 'custom', options: { values: ['حرجة', 'عالية', 'متوسطة', 'منخفضة'] } },
      { name: 'الحالة', type: 'custom', options: { values: ['جديد', 'قيد الدراسة', 'قيد الإصلاح', 'تم الإصلاح', 'مغلق', 'مرفوض'] } },
      { name: 'المبلغ', type: 'arabicFullName' },
      { name: 'المسؤول', type: 'arabicFullName' },
      { name: 'تاريخ الإبلاغ', type: 'datetime' },
      { name: 'تاريخ الحل', type: 'datetime' },
    ]
  },
  {
    id: 'iot-sensors',
    name: { ar: 'بيانات الحساسات', en: 'IoT Sensor Data' },
    description: { ar: 'بيانات أجهزة إنترنت الأشياء', en: 'IoT device sensor data' },
    category: 'technology',
    icon: '📡',
    color: 'cyan',
    fields: [
      { name: 'رقم الجهاز', type: 'uuid' },
      { name: 'نوع الحساس', type: 'custom', options: { values: ['حرارة', 'رطوبة', 'ضغط', 'حركة', 'ضوء', 'صوت', 'غاز'] } },
      { name: 'الموقع', type: 'arabicCity' },
      { name: 'القراءة', type: 'decimal', options: { min: 0, max: 100, decimals: 2 } },
      { name: 'الوحدة', type: 'custom', options: { values: ['°C', '%', 'hPa', 'lux', 'dB', 'ppm'] } },
      { name: 'الحالة', type: 'custom', options: { values: ['طبيعي', 'تحذير', 'خطر'] } },
      { name: 'مستوى البطارية', type: 'percentage' },
      { name: 'وقت القراءة', type: 'datetime' },
      { name: 'متصل', type: 'boolean' },
    ]
  },
  {
    id: 'api-logs',
    name: { ar: 'سجلات API', en: 'API Logs' },
    description: { ar: 'بيانات سجلات طلبات API', en: 'API request logs' },
    category: 'technology',
    icon: '🔗',
    color: 'violet',
    fields: [
      { name: 'request_id', type: 'uuid' },
      { name: 'endpoint', type: 'custom', options: { values: ['/api/users', '/api/products', '/api/orders', '/api/auth/login', '/api/search'] } },
      { name: 'method', type: 'custom', options: { values: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] } },
      { name: 'status_code', type: 'custom', options: { values: ['200', '201', '400', '401', '403', '404', '500'] } },
      { name: 'response_time_ms', type: 'number', options: { min: 10, max: 5000 } },
      { name: 'ip_address', type: 'ip' },
      { name: 'user_agent', type: 'custom', options: { values: ['Chrome/120', 'Firefox/121', 'Safari/17', 'Mobile App/2.0'] } },
      { name: 'user_id', type: 'uuid' },
      { name: 'timestamp', type: 'datetime' },
    ]
  },
  {
    id: 'server-metrics',
    name: { ar: 'مقاييس الخوادم', en: 'Server Metrics' },
    description: { ar: 'بيانات أداء الخوادم', en: 'Server performance metrics' },
    category: 'technology',
    icon: '🖥️',
    color: 'gray',
    fields: [
      { name: 'server_id', type: 'custom', options: { values: ['srv-001', 'srv-002', 'srv-003', 'srv-004', 'srv-005'] } },
      { name: 'hostname', type: 'custom', options: { values: ['web-server-1', 'api-server-1', 'db-server-1', 'cache-server-1'] } },
      { name: 'cpu_usage', type: 'percentage' },
      { name: 'memory_usage', type: 'percentage' },
      { name: 'disk_usage', type: 'percentage' },
      { name: 'network_in_mbps', type: 'decimal', options: { min: 0, max: 1000, decimals: 2 } },
      { name: 'network_out_mbps', type: 'decimal', options: { min: 0, max: 1000, decimals: 2 } },
      { name: 'active_connections', type: 'number', options: { min: 0, max: 10000 } },
      { name: 'status', type: 'custom', options: { values: ['healthy', 'warning', 'critical', 'offline'] } },
      { name: 'timestamp', type: 'datetime' },
    ]
  },

  // ==================== الإعلام والمحتوى ====================
  {
    id: 'news-articles',
    name: { ar: 'المقالات الإخبارية', en: 'News Articles' },
    description: { ar: 'بيانات الأخبار والمقالات', en: 'News and article data' },
    category: 'media',
    icon: '📰',
    color: 'slate',
    fields: [
      { name: 'رقم المقال', type: 'uuid' },
      { name: 'العنوان', type: 'sentence' },
      { name: 'المحتوى', type: 'paragraph' },
      { name: 'الكاتب', type: 'arabicFullName' },
      { name: 'التصنيف', type: 'custom', options: { values: ['سياسة', 'اقتصاد', 'رياضة', 'تقنية', 'ثقافة', 'صحة', 'ترفيه'] } },
      { name: 'المصدر', type: 'custom', options: { values: ['العربية', 'الجزيرة', 'سكاي نيوز', 'BBC عربي', 'CNN عربي'] } },
      { name: 'تاريخ النشر', type: 'datetime' },
      { name: 'المشاهدات', type: 'number', options: { min: 100, max: 100000 } },
      { name: 'التعليقات', type: 'number', options: { min: 0, max: 500 } },
      { name: 'المشاركات', type: 'number', options: { min: 0, max: 1000 } },
    ]
  },
  {
    id: 'youtube-videos',
    name: { ar: 'فيديوهات يوتيوب', en: 'YouTube Videos' },
    description: { ar: 'بيانات فيديوهات يوتيوب', en: 'YouTube video data' },
    category: 'media',
    icon: '🎬',
    color: 'red',
    fields: [
      { name: 'video_id', type: 'uuid' },
      { name: 'عنوان الفيديو', type: 'sentence' },
      { name: 'اسم القناة', type: 'arabicFullName' },
      { name: 'التصنيف', type: 'custom', options: { values: ['ترفيه', 'تعليم', 'تقنية', 'طبخ', 'رياضة', 'موسيقى', 'أفلام'] } },
      { name: 'المدة (دقيقة)', type: 'number', options: { min: 1, max: 120 } },
      { name: 'المشاهدات', type: 'number', options: { min: 1000, max: 10000000 } },
      { name: 'الإعجابات', type: 'number', options: { min: 100, max: 500000 } },
      { name: 'التعليقات', type: 'number', options: { min: 10, max: 50000 } },
      { name: 'تاريخ الرفع', type: 'date' },
      { name: 'HD', type: 'boolean' },
    ]
  },
  {
    id: 'podcasts',
    name: { ar: 'البودكاست', en: 'Podcasts' },
    description: { ar: 'بيانات حلقات البودكاست', en: 'Podcast episode data' },
    category: 'media',
    icon: '🎙️',
    color: 'purple',
    fields: [
      { name: 'رقم الحلقة', type: 'number', options: { min: 1, max: 500 } },
      { name: 'عنوان الحلقة', type: 'sentence' },
      { name: 'اسم البودكاست', type: 'custom', options: { values: ['سوالف بزنس', 'فنجان', 'أبجورة', 'بودكاست كلام', 'ثمانية'] } },
      { name: 'المقدم', type: 'arabicFullName' },
      { name: 'الضيف', type: 'arabicFullName' },
      { name: 'المدة (دقيقة)', type: 'number', options: { min: 20, max: 180 } },
      { name: 'التصنيف', type: 'custom', options: { values: ['أعمال', 'تقنية', 'ثقافة', 'تطوير ذات', 'ترفيه', 'تاريخ'] } },
      { name: 'تاريخ النشر', type: 'date' },
      { name: 'الاستماعات', type: 'number', options: { min: 500, max: 100000 } },
      { name: 'التقييم', type: 'rating' },
    ]
  },

  // ==================== الحكومية ====================
  {
    id: 'citizen-services',
    name: { ar: 'خدمات المواطنين', en: 'Citizen Services' },
    description: { ar: 'بيانات طلبات الخدمات الحكومية', en: 'Government service requests' },
    category: 'government',
    icon: '🏛️',
    color: 'blue',
    fields: [
      { name: 'رقم الطلب', type: 'number', options: { min: 1000000, max: 9999999 } },
      { name: 'نوع الخدمة', type: 'custom', options: { values: ['إصدار هوية', 'تجديد جواز', 'شهادة ميلاد', 'رخصة قيادة', 'تصريح بناء', 'رخصة تجارية'] } },
      { name: 'اسم المواطن', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'تاريخ التقديم', type: 'date' },
      { name: 'حالة الطلب', type: 'custom', options: { values: ['جديد', 'قيد المراجعة', 'مكتمل', 'مرفوض', 'بانتظار مستندات'] } },
      { name: 'الرسوم', type: 'price' },
      { name: 'تاريخ الانتهاء', type: 'futureDate' },
    ]
  },
  {
    id: 'traffic-violations',
    name: { ar: 'المخالفات المرورية', en: 'Traffic Violations' },
    description: { ar: 'بيانات المخالفات المرورية', en: 'Traffic violation data' },
    category: 'government',
    icon: '🚦',
    color: 'red',
    fields: [
      { name: 'رقم المخالفة', type: 'number', options: { min: 10000000, max: 99999999 } },
      { name: 'رقم اللوحة', type: 'custom', options: { values: ['أ ب ج 1234', 'ب ج د 5678', 'ج د ه 9012', 'د ه و 3456'] } },
      { name: 'نوع المخالفة', type: 'custom', options: { values: ['تجاوز السرعة', 'قطع إشارة', 'وقوف خاطئ', 'استخدام الجوال', 'عدم ربط الحزام', 'مخالفة مسار'] } },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'الموقع', type: 'arabicAddress' },
      { name: 'تاريخ المخالفة', type: 'datetime' },
      { name: 'قيمة المخالفة', type: 'custom', options: { values: ['150', '300', '500', '1000', '2000', '3000'] } },
      { name: 'حالة الدفع', type: 'custom', options: { values: ['غير مدفوعة', 'مدفوعة', 'متأخرة', 'اعتراض'] } },
    ]
  },

  // ==================== التأمين ====================
  {
    id: 'insurance-policies',
    name: { ar: 'وثائق التأمين', en: 'Insurance Policies' },
    description: { ar: 'بيانات وثائق التأمين - تاريخ البدء قبل الانتهاء بـ 3-12 شهر', en: 'Insurance policy data - start date 3-12 months before end' },
    category: 'insurance',
    icon: '🛡️',
    color: 'indigo',
    fields: [
      { name: 'رقم الوثيقة', type: 'number', options: { min: 1000000000, max: 9999999999 } },
      { name: 'نوع التأمين', type: 'custom', options: { values: ['تأمين سيارات', 'تأمين صحي', 'تأمين حياة', 'تأمين سفر', 'تأمين ممتلكات'] } },
      { name: 'اسم المؤمن له', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'شركة التأمين', type: 'custom', options: { values: ['التعاونية', 'بوبا', 'ميدغلف', 'الراجحي للتأمين', 'تكافل الراجحي'] } },
      { name: 'القسط السنوي', type: 'price' },
      { name: 'مبلغ التغطية', type: 'number', options: { min: 50000, max: 5000000 } },
      { name: 'تاريخ البدء', type: 'contractStartDate' },
      { name: 'تاريخ الانتهاء', type: 'contractEndDate' },
      { name: 'المدة (أشهر)', type: 'durationMonths' },
      { name: 'الحالة', type: 'custom', options: { values: ['سارية', 'منتهية', 'ملغية', 'قيد التجديد'] } },
    ]
  },
  {
    id: 'insurance-claims',
    name: { ar: 'مطالبات التأمين', en: 'Insurance Claims' },
    description: { ar: 'بيانات مطالبات التأمين', en: 'Insurance claim data' },
    category: 'insurance',
    icon: '📋',
    color: 'amber',
    fields: [
      { name: 'رقم المطالبة', type: 'uuid' },
      { name: 'رقم الوثيقة', type: 'number', options: { min: 1000000000, max: 9999999999 } },
      { name: 'اسم المؤمن له', type: 'arabicFullName' },
      { name: 'نوع المطالبة', type: 'custom', options: { values: ['حادث مروري', 'علاج طبي', 'سرقة', 'حريق', 'أضرار طبيعية'] } },
      { name: 'وصف الحادث', type: 'paragraph' },
      { name: 'تاريخ الحادث', type: 'date' },
      { name: 'المبلغ المطالب به', type: 'price' },
      { name: 'المبلغ المعتمد', type: 'price' },
      { name: 'حالة المطالبة', type: 'custom', options: { values: ['جديدة', 'قيد الدراسة', 'معتمدة', 'مرفوضة', 'مدفوعة'] } },
      { name: 'تاريخ التقديم', type: 'date' },
    ]
  },

  // ==================== اللوجستيات ====================
  {
    id: 'shipments',
    name: { ar: 'الشحنات', en: 'Shipments' },
    description: { ar: 'بيانات تتبع الشحنات', en: 'Shipment tracking data' },
    category: 'logistics',
    icon: '📦',
    color: 'orange',
    fields: [
      { name: 'رقم الشحنة', type: 'uuid' },
      { name: 'اسم المرسل', type: 'arabicFullName' },
      { name: 'اسم المستلم', type: 'arabicFullName' },
      { name: 'هاتف المستلم', type: 'arabicPhone' },
      { name: 'من مدينة', type: 'arabicCity' },
      { name: 'إلى مدينة', type: 'arabicCity' },
      { name: 'الوزن (كجم)', type: 'decimal', options: { min: 0.5, max: 100, decimals: 1 } },
      { name: 'شركة الشحن', type: 'custom', options: { values: ['أرامكس', 'سمسا', 'DHL', 'فيديكس', 'زاجل', 'ناقل'] } },
      { name: 'نوع الشحن', type: 'custom', options: { values: ['عادي', 'سريع', 'في نفس اليوم'] } },
      { name: 'التكلفة', type: 'price' },
      { name: 'حالة الشحنة', type: 'custom', options: { values: ['تم الاستلام', 'في الطريق', 'خارج للتوصيل', 'تم التسليم', 'مرتجع'] } },
      { name: 'تاريخ الإرسال', type: 'datetime' },
    ]
  },
  {
    id: 'warehouse-inventory',
    name: { ar: 'مخزون المستودعات', en: 'Warehouse Inventory' },
    description: { ar: 'بيانات مخزون المستودعات - المنتج مرتبط بالفئة منطقياً', en: 'Warehouse stock data - Product linked to category logically' },
    category: 'logistics',
    icon: '🏭',
    color: 'gray',
    fields: [
      { name: 'رمز المنتج (SKU)', type: 'sku' },
      { name: 'الباركود', type: 'barcode' },
      { name: 'اسم المنتج', type: 'productName' },
      { name: 'الفئة الرئيسية', type: 'category' },
      { name: 'الفئة الفرعية', type: 'subCategory' },
      { name: 'الماركة', type: 'productBrand' },
      { name: 'الكمية الحالية', type: 'number', options: { min: 0, max: 5000 } },
      { name: 'الحد الأدنى للمخزون', type: 'number', options: { min: 10, max: 100 } },
      { name: 'موقع الرف', type: 'custom', options: { values: ['A-01-01', 'A-01-02', 'A-02-01', 'B-01-01', 'B-02-01', 'C-01-01', 'C-01-02', 'D-01-01'] } },
      { name: 'المستودع', type: 'custom', options: { values: ['مستودع الرياض الرئيسي', 'مستودع جدة', 'مستودع الدمام', 'مستودع مكة', 'مستودع المدينة'] } },
      { name: 'سعر التكلفة', type: 'productPrice' },
      { name: 'الوحدة', type: 'productUnit' },
      { name: 'تاريخ آخر جرد', type: 'date' },
      { name: 'تاريخ آخر استلام', type: 'date' },
      { name: 'حالة المخزون', type: 'custom', options: { values: ['متوفر', 'منخفض', 'نفد', 'قيد الطلب'] } },
    ]
  },

  // ==================== الاتصالات ====================
  {
    id: 'mobile-subscribers',
    name: { ar: 'مشتركي الجوال', en: 'Mobile Subscribers' },
    description: { ar: 'بيانات مشتركي خطوط الجوال', en: 'Mobile line subscriber data' },
    category: 'telecom',
    icon: '📱',
    color: 'blue',
    fields: [
      { name: 'رقم الجوال', type: 'arabicPhone' },
      { name: 'اسم المشترك', type: 'arabicFullName' },
      { name: 'رقم الهوية', type: 'nationalId' },
      { name: 'شركة الاتصالات', type: 'custom', options: { values: ['STC', 'موبايلي', 'زين'] } },
      { name: 'نوع الخط', type: 'custom', options: { values: ['مفوتر', 'مسبق الدفع'] } },
      { name: 'الباقة', type: 'custom', options: { values: ['أساسية', 'متوسطة', 'متقدمة', 'لا محدود'] } },
      { name: 'القيمة الشهرية', type: 'price' },
      { name: 'البيانات (جيجا)', type: 'number', options: { min: 5, max: 500 } },
      { name: 'تاريخ التفعيل', type: 'date' },
      { name: 'الحالة', type: 'custom', options: { values: ['نشط', 'موقوف', 'ملغي'] } },
    ]
  },
  {
    id: 'internet-subscriptions',
    name: { ar: 'اشتراكات الإنترنت', en: 'Internet Subscriptions' },
    description: { ar: 'بيانات اشتراكات الإنترنت المنزلي', en: 'Home internet subscriptions' },
    category: 'telecom',
    icon: '🌐',
    color: 'cyan',
    fields: [
      { name: 'رقم الاشتراك', type: 'number', options: { min: 100000, max: 999999 } },
      { name: 'اسم المشترك', type: 'arabicFullName' },
      { name: 'العنوان', type: 'arabicAddress' },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'مزود الخدمة', type: 'custom', options: { values: ['STC', 'موبايلي', 'زين', 'GO'] } },
      { name: 'نوع الاتصال', type: 'custom', options: { values: ['ألياف بصرية', 'DSL', '5G'] } },
      { name: 'السرعة (ميجا)', type: 'custom', options: { values: ['100', '200', '300', '500', '1000'] } },
      { name: 'الاشتراك الشهري', type: 'price' },
      { name: 'تاريخ التركيب', type: 'date' },
      { name: 'الحالة', type: 'custom', options: { values: ['نشط', 'موقوف', 'قيد التركيب'] } },
    ]
  },

  // ==================== السيارات ====================
  {
    id: 'vehicles',
    name: { ar: 'بيانات المركبات', en: 'Vehicle Data' },
    description: { ar: 'بيانات السيارات والمركبات', en: 'Car and vehicle data' },
    category: 'automotive',
    icon: '🚗',
    color: 'slate',
    fields: [
      { name: 'رقم اللوحة', type: 'custom', options: { values: ['أ ب ج 1234', 'ب ج د 5678', 'ج د ه 9012'] } },
      { name: 'رقم الهيكل', type: 'uuid' },
      { name: 'الماركة', type: 'custom', options: { values: ['تويوتا', 'هونداي', 'نيسان', 'شيفروليه', 'فورد', 'مرسيدس', 'بي إم دبليو', 'لكزس'] } },
      { name: 'الموديل', type: 'custom', options: { values: ['كامري', 'أكسنت', 'التيما', 'ماليبو', 'تورس', 'C-Class', 'X5', 'ES350'] } },
      { name: 'السنة', type: 'number', options: { min: 2010, max: 2024 } },
      { name: 'اللون', type: 'color' },
      { name: 'نوع الوقود', type: 'custom', options: { values: ['بنزين', 'ديزل', 'هايبرد', 'كهربائي'] } },
      { name: 'عداد الكيلومترات', type: 'number', options: { min: 0, max: 300000 } },
      { name: 'اسم المالك', type: 'arabicFullName' },
      { name: 'تاريخ التسجيل', type: 'date' },
      { name: 'تاريخ انتهاء الاستمارة', type: 'futureDate' },
    ]
  },
  {
    id: 'car-sales',
    name: { ar: 'مبيعات السيارات', en: 'Car Sales' },
    description: { ar: 'بيانات مبيعات السيارات', en: 'Car sales data' },
    category: 'automotive',
    icon: '🏪',
    color: 'emerald',
    fields: [
      { name: 'رقم الصفقة', type: 'uuid' },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'الماركة', type: 'custom', options: { values: ['تويوتا', 'هونداي', 'نيسان', 'شيفروليه', 'كيا', 'هوندا'] } },
      { name: 'الموديل', type: 'custom', options: { values: ['كورولا', 'سوناتا', 'باترول', 'تاهو', 'سبورتاج', 'أكورد'] } },
      { name: 'الحالة', type: 'custom', options: { values: ['جديد', 'مستعمل'] } },
      { name: 'سعر البيع', type: 'number', options: { min: 30000, max: 500000 } },
      { name: 'طريقة الدفع', type: 'custom', options: { values: ['كاش', 'تقسيط', 'تأجير منتهي بالتمليك'] } },
      { name: 'المعرض', type: 'custom', options: { values: ['عبداللطيف جميل', 'الجميح', 'المجدوعي', 'الحاج حسين'] } },
      { name: 'مندوب المبيعات', type: 'arabicFullName' },
      { name: 'تاريخ البيع', type: 'date' },
    ]
  },
  {
    id: 'car-maintenance',
    name: { ar: 'صيانة السيارات', en: 'Car Maintenance' },
    description: { ar: 'بيانات صيانة وإصلاح السيارات', en: 'Car maintenance and repair data' },
    category: 'automotive',
    icon: '🔧',
    color: 'yellow',
    fields: [
      { name: 'رقم أمر العمل', type: 'number', options: { min: 10000, max: 99999 } },
      { name: 'رقم اللوحة', type: 'custom', options: { values: ['أ ب ج 1234', 'ب ج د 5678', 'ج د ه 9012'] } },
      { name: 'الماركة والموديل', type: 'custom', options: { values: ['تويوتا كامري', 'هونداي أكسنت', 'نيسان التيما'] } },
      { name: 'اسم العميل', type: 'arabicFullName' },
      { name: 'الهاتف', type: 'arabicPhone' },
      { name: 'نوع الخدمة', type: 'custom', options: { values: ['صيانة دورية', 'تغيير زيت', 'فحص شامل', 'إصلاح', 'كهرباء', 'مكيف'] } },
      { name: 'الوصف', type: 'sentence' },
      { name: 'تكلفة القطع', type: 'price' },
      { name: 'تكلفة العمالة', type: 'price' },
      { name: 'الإجمالي', type: 'price' },
      { name: 'تاريخ الاستلام', type: 'date' },
      { name: 'تاريخ التسليم', type: 'date' },
      { name: 'الحالة', type: 'custom', options: { values: ['قيد العمل', 'جاهز', 'تم التسليم'] } },
    ]
  },

  // ==================== الاقتصاد ====================
  {
    id: 'gdp-data',
    name: { ar: 'الناتج المحلي الإجمالي', en: 'GDP Data' },
    description: { ar: 'بيانات اقتصادية حقيقية وواقعية للدول العربية والعالمية', en: 'Real and realistic economic data for Arab and world countries' },
    category: 'economy',
    icon: '📈',
    color: 'emerald',
    fields: [
      { name: 'الدولة', type: 'economicCountry' },
      { name: 'السنة', type: 'economicYear' },
      { name: 'الربع', type: 'economicQuarter' },
      { name: 'الناتج المحلي (مليار $)', type: 'gdp' },
      { name: 'معدل النمو (%)', type: 'gdpGrowth' },
      { name: 'نصيب الفرد ($)', type: 'gdpPerCapita' },
      { name: 'معدل التضخم (%)', type: 'inflationRate' },
      { name: 'معدل البطالة (%)', type: 'unemploymentRate' },
      { name: 'الدين العام (% من GDP)', type: 'debtToGdp' },
      { name: 'سعر الفائدة (%)', type: 'interestRate' },
      { name: 'الميزان التجاري (مليار $)', type: 'tradeBalance' },
      { name: 'التصنيف الائتماني', type: 'creditRating' },
      { name: 'الاحتياطي الأجنبي (مليار $)', type: 'foreignReserves' },
      { name: 'عدد السكان (مليون)', type: 'populationMillions' },
      { name: 'العملة', type: 'economicCurrency' },
    ]
  },
  {
    id: 'inflation-data',
    name: { ar: 'بيانات التضخم', en: 'Inflation Data' },
    description: { ar: 'مؤشرات التضخم وأسعار المستهلك', en: 'Inflation and CPI data' },
    category: 'economy',
    icon: '📊',
    color: 'red',
    fields: [
      { name: 'الدولة', type: 'country' },
      { name: 'الشهر', type: 'custom', options: { values: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] } },
      { name: 'السنة', type: 'number', options: { min: 2020, max: 2024 } },
      { name: 'مؤشر أسعار المستهلك (CPI)', type: 'decimal', options: { min: 100, max: 150, decimals: 2 } },
      { name: 'التضخم الشهري (%)', type: 'decimal', options: { min: -1, max: 5, decimals: 2 } },
      { name: 'التضخم السنوي (%)', type: 'decimal', options: { min: -2, max: 30, decimals: 2 } },
      { name: 'تضخم الغذاء (%)', type: 'decimal', options: { min: 0, max: 50, decimals: 2 } },
      { name: 'تضخم الطاقة (%)', type: 'decimal', options: { min: -20, max: 100, decimals: 2 } },
      { name: 'التضخم الأساسي (%)', type: 'decimal', options: { min: 0, max: 20, decimals: 2 } },
    ]
  },
  {
    id: 'trade-balance',
    name: { ar: 'الميزان التجاري', en: 'Trade Balance' },
    description: { ar: 'بيانات الصادرات والواردات الحقيقية والمترابطة', en: 'Real and coherent import/export data' },
    category: 'economy',
    icon: '🚢',
    color: 'blue',
    fields: [
      { name: 'الدولة', type: 'tradeCountry' },
      { name: 'السنة', type: 'tradeYear' },
      { name: 'الربع', type: 'tradeQuarter' },
      { name: 'الشهر', type: 'tradeMonth' },
      { name: 'الصادرات (مليار $)', type: 'totalExports' },
      { name: 'نمو الصادرات (%)', type: 'exportGrowth' },
      { name: 'أهم شريك للصادرات', type: 'topExportPartner' },
      { name: 'نسبة الشريك (%)', type: 'topExportPartnerShare' },
      { name: 'أهم منتج مصدر', type: 'topExportProduct' },
      { name: 'قيمة المنتج (مليار $)', type: 'topExportProductValue' },
      { name: 'نسبة المنتج (%)', type: 'topExportProductShare' },
      { name: 'الواردات (مليار $)', type: 'totalImports' },
      { name: 'نمو الواردات (%)', type: 'importGrowth' },
      { name: 'أهم شريك للواردات', type: 'topImportPartner' },
      { name: 'أهم منتج مستورد', type: 'topImportProduct' },
      { name: 'الميزان التجاري (مليار $)', type: 'tradeBalanceValue' },
      { name: 'حالة الميزان', type: 'tradeBalanceStatus' },
      { name: 'إجمالي التجارة (مليار $)', type: 'totalTrade' },
      { name: 'نسبة التجارة/الناتج (%)', type: 'tradeToGdpRatio' },
      { name: 'العملة', type: 'tradeCurrency' },
    ]
  },
  {
    id: 'interest-rates',
    name: { ar: 'أسعار الفائدة', en: 'Interest Rates' },
    description: { ar: 'بيانات أسعار الفائدة الحقيقية والمترابطة للبنوك المركزية العربية والعالمية', en: 'Real and coherent interest rate data for Arab and world central banks' },
    category: 'economy',
    icon: '🏛️',
    color: 'indigo',
    fields: [
      { name: 'الدولة', type: 'interestRateCountry' },
      { name: 'البنك المركزي', type: 'centralBankName' },
      { name: 'اختصار البنك', type: 'centralBankAbbr' },
      { name: 'السنة', type: 'rateYear' },
      { name: 'الشهر', type: 'rateMonth' },
      { name: 'تاريخ الاجتماع', type: 'meetingDate' },
      { name: 'سعر الفائدة الأساسي (%)', type: 'baseRate' },
      { name: 'السعر السابق (%)', type: 'previousRate' },
      { name: 'التغيير (نقطة أساس)', type: 'rateChange' },
      { name: 'نسبة التغيير (%)', type: 'rateChangePercent' },
      { name: 'القرار', type: 'rateDecision' },
      { name: 'سعر الليلة الواحدة (%)', type: 'overnightRate' },
      { name: 'سعر الإقراض (%)', type: 'lendingRate' },
      { name: 'سعر الإيداع (%)', type: 'depositRate' },
      { name: 'معدل الفائدة بين البنوك', type: 'interbankRateName' },
      { name: 'قيمة المعدل (%)', type: 'interbankRateValue' },
      { name: 'الفترة', type: 'tenor' },
      { name: 'أيام الفترة', type: 'tenorDays' },
      { name: 'نسبة الاحتياطي (%)', type: 'reserveRequirement' },
      { name: 'التضخم المستهدف (%)', type: 'inflationTarget' },
      { name: 'التضخم الحالي (%)', type: 'currentInflation' },
      { name: 'سعر الفائدة الحقيقي (%)', type: 'realInterestRate' },
      { name: 'الفرق عن الفيدرالي', type: 'spreadToUS' },
      { name: 'العملة', type: 'rateCurrency' },
    ]
  },
  {
    id: 'economic-indicators',
    name: { ar: 'المؤشرات الاقتصادية', en: 'Economic Indicators' },
    description: { ar: 'مؤشرات اقتصادية شاملة ومترابطة وحقيقية - PMI، ثقة المستهلك، سوق العمل، التضخم', en: 'Comprehensive, coherent and real economic indicators - PMI, consumer confidence, labor market, inflation' },
    category: 'economy',
    icon: '📉',
    color: 'teal',
    fields: [
      { name: 'الدولة', type: 'indicatorCountry' },
      { name: 'السنة', type: 'indicatorYear' },
      { name: 'الربع', type: 'indicatorQuarter' },
      { name: 'الشهر', type: 'indicatorMonth' },
      { name: 'الفترة', type: 'indicatorPeriod' },
      { name: 'العملة', type: 'indicatorCurrency' },
      { name: 'مؤشر PMI الصناعي', type: 'pmiManufacturing' },
      { name: 'مؤشر PMI الخدمات', type: 'pmiServices' },
      { name: 'مؤشر PMI المركب', type: 'pmiComposite' },
      { name: 'اتجاه PMI', type: 'pmiTrend' },
      { name: 'حالة PMI', type: 'pmiStatus' },
      { name: 'حالة الاقتصاد', type: 'economyCondition' },
      { name: 'ثقة المستهلك', type: 'consumerConfidence' },
      { name: 'ثقة الأعمال', type: 'businessConfidence' },
      { name: 'مستوى الثقة', type: 'confidenceLevel' },
      { name: 'معدل البطالة (%)', type: 'indicatorUnemploymentRate' },
      { name: 'مشاركة القوى العاملة (%)', type: 'laborForceParticipation' },
      { name: 'الوظائف المستحدثة', type: 'jobsCreated' },
      { name: 'حالة سوق العمل', type: 'laborMarketStatus' },
      { name: 'مؤشر أسعار المستهلك (%)', type: 'cpi' },
      { name: 'مؤشر أسعار المنتج (%)', type: 'ppi' },
      { name: 'التضخم الأساسي (%)', type: 'coreInflation' },
      { name: 'اتجاه التضخم', type: 'cpiTrend' },
      { name: 'حالة التضخم', type: 'inflationStatus' },
      { name: 'الإنتاج الصناعي (%)', type: 'industrialProduction' },
      { name: 'استغلال الطاقة (%)', type: 'capacityUtilization' },
      { name: 'مبيعات التجزئة (%)', type: 'retailSales' },
      { name: 'الحساب الجاري (% GDP)', type: 'currentAccountBalance' },
      { name: 'حالة الحساب الجاري', type: 'currentAccountStatus' },
      { name: 'الاستثمار الأجنبي المباشر (%)', type: 'fdi' },
      { name: 'التقييم العام', type: 'overallAssessment' },
      { name: 'التوقعات', type: 'economicOutlook' },
    ]
  },

  // ==================== الأسهم ====================
  {
    id: 'stock-prices',
    name: { ar: 'أسعار الأسهم', en: 'Stock Prices' },
    description: { ar: 'بيانات أسعار أسهم حقيقية ومترابطة - OHLC منطقية', en: 'Real stock prices with coherent OHLC data' },
    category: 'stocks',
    icon: '📊',
    color: 'green',
    fields: [
      { name: 'رمز السهم', type: 'stockSymbol' },
      { name: 'اسم الشركة', type: 'stockName' },
      { name: 'السوق', type: 'stockExchange' },
      { name: 'القطاع', type: 'stockSector' },
      { name: 'العملة', type: 'stockCurrency' },
      { name: 'التاريخ', type: 'stockDate' },
      { name: 'الإغلاق السابق', type: 'stockPreviousClose' },
      { name: 'سعر الافتتاح', type: 'stockOpen' },
      { name: 'أعلى سعر', type: 'stockHigh' },
      { name: 'أدنى سعر', type: 'stockLow' },
      { name: 'سعر الإغلاق', type: 'stockClose' },
      { name: 'التغيير', type: 'stockChange' },
      { name: 'التغيير (%)', type: 'stockChangePercent' },
      { name: 'الاتجاه', type: 'stockChangeDirection' },
      { name: 'حجم التداول', type: 'stockVolume' },
      { name: 'قيمة التداول', type: 'stockTurnover' },
      { name: 'عدد الصفقات', type: 'stockTrades' },
      { name: 'متوسط السعر المرجح (VWAP)', type: 'stockVwap' },
    ]
  },
  {
    id: 'stock-portfolio',
    name: { ar: 'محفظة استثمارية', en: 'Investment Portfolio' },
    description: { ar: 'بيانات محافظ الأسهم', en: 'Stock portfolio data' },
    category: 'stocks',
    icon: '💼',
    color: 'purple',
    fields: [
      { name: 'رقم المحفظة', type: 'uuid' },
      { name: 'اسم المستثمر', type: 'arabicFullName' },
      { name: 'رمز السهم', type: 'stockSymbol' },
      { name: 'اسم الشركة', type: 'stockName' },
      { name: 'السوق', type: 'stockExchange' },
      { name: 'عدد الأسهم', type: 'number', options: { min: 10, max: 10000 } },
      { name: 'سعر الشراء', type: 'stockPrice' },
      { name: 'السعر الحالي', type: 'stockPrice' },
      { name: 'القيمة الحالية', type: 'number', options: { min: 1000, max: 5000000 } },
      { name: 'الربح/الخسارة', type: 'stockChange' },
      { name: 'العائد (%)', type: 'stockChangePercent' },
      { name: 'تاريخ الشراء', type: 'date' },
    ]
  },
  {
    id: 'stock-dividends',
    name: { ar: 'توزيعات الأرباح', en: 'Stock Dividends' },
    description: { ar: 'بيانات توزيعات أرباح الأسهم', en: 'Stock dividend data' },
    category: 'stocks',
    icon: '💵',
    color: 'emerald',
    fields: [
      { name: 'رمز السهم', type: 'stockSymbol' },
      { name: 'اسم الشركة', type: 'stockName' },
      { name: 'السوق', type: 'stockExchange' },
      { name: 'السنة', type: 'number', options: { min: 2020, max: 2024 } },
      { name: 'الربع', type: 'custom', options: { values: ['Q1', 'Q2', 'Q3', 'Q4'] } },
      { name: 'التوزيع للسهم', type: 'dividendYield' },
      { name: 'تاريخ الإعلان', type: 'date' },
      { name: 'تاريخ الاستحقاق', type: 'date' },
      { name: 'تاريخ التوزيع', type: 'date' },
      { name: 'عائد التوزيع (%)', type: 'dividendYield' },
      { name: 'نوع التوزيع', type: 'custom', options: { values: ['نقدي', 'أسهم مجانية', 'مختلط'] } },
    ]
  },
  {
    id: 'stock-analysis',
    name: { ar: 'تحليل الأسهم', en: 'Stock Analysis' },
    description: { ar: 'بيانات التحليل الفني والأساسي - مؤشرات حقيقية ومترابطة', en: 'Technical and fundamental analysis - real and coherent indicators' },
    category: 'stocks',
    icon: '🔍',
    color: 'blue',
    fields: [
      { name: 'رمز السهم', type: 'stockSymbol' },
      { name: 'اسم الشركة', type: 'stockName' },
      { name: 'السوق', type: 'stockExchange' },
      { name: 'القطاع', type: 'stockSector' },
      { name: 'التاريخ', type: 'stockDate' },
      { name: 'السعر الحالي', type: 'stockClose' },
      { name: 'القيمة السوقية', type: 'stockMarketCap' },
      { name: 'مكرر الربحية (P/E)', type: 'stockPeRatio' },
      { name: 'مكرر القيمة الدفترية (P/B)', type: 'stockPbRatio' },
      { name: 'ربحية السهم (EPS)', type: 'stockEps' },
      { name: 'عائد التوزيعات (%)', type: 'stockDividendYield' },
      { name: 'معامل بيتا', type: 'stockBeta' },
      { name: 'أعلى 52 أسبوع', type: 'stockYearHigh' },
      { name: 'أدنى 52 أسبوع', type: 'stockYearLow' },
      { name: 'المتوسط المتحرك 20', type: 'stockSma20' },
      { name: 'المتوسط المتحرك 50', type: 'stockSma50' },
      { name: 'المتوسط المتحرك 200', type: 'stockSma200' },
      { name: 'مؤشر RSI', type: 'stockRsi' },
      { name: 'مؤشر MACD', type: 'stockMacd' },
      { name: 'مستوى الدعم', type: 'stockSupport' },
      { name: 'مستوى المقاومة', type: 'stockResistance' },
      { name: 'الاتجاه', type: 'stockTrend' },
      { name: 'إشارة التداول', type: 'stockSignal' },
      { name: 'قوة الإشارة', type: 'stockStrength' },
    ]
  },
  {
    id: 'ipo-data',
    name: { ar: 'الاكتتابات العامة', en: 'IPO Data' },
    description: { ar: 'بيانات الطروحات الأولية الحقيقية والمترابطة منطقياً', en: 'Real and logically coherent IPO data' },
    category: 'stocks',
    icon: '🎯',
    color: 'orange',
    fields: [
      { name: 'اسم الشركة', type: 'ipoCompanyName' },
      { name: 'رمز السهم', type: 'ipoSymbol' },
      { name: 'القطاع', type: 'ipoSector' },
      { name: 'السوق', type: 'ipoMarket' },
      { name: 'الدولة', type: 'ipoCountry' },
      { name: 'الجهة الرقابية', type: 'ipoRegulator' },
      { name: 'العملة', type: 'ipoCurrency' },
      { name: 'نطاق السعر (أدنى)', type: 'ipoPriceRangeLow' },
      { name: 'نطاق السعر (أعلى)', type: 'ipoPriceRangeHigh' },
      { name: 'سعر الطرح النهائي', type: 'ipoOfferPrice' },
      { name: 'الأسهم المطروحة (مليون)', type: 'ipoSharesOffered' },
      { name: 'نسبة الطرح (%)', type: 'ipoSharesOfferedPercent' },
      { name: 'إجمالي الأسهم (مليون)', type: 'ipoTotalShares' },
      { name: 'التقييم (مليار)', type: 'ipoValuation' },
      { name: 'القيمة السوقية عند الطرح (مليار)', type: 'ipoMarketCap' },
      { name: 'مكرر الربحية (P/E)', type: 'ipoPeRatio' },
      { name: 'مكرر القيمة الدفترية (P/B)', type: 'ipoPbRatio' },
      { name: 'نسبة المؤسسات (%)', type: 'ipoInstitutionalPercent' },
      { name: 'نسبة الأفراد (%)', type: 'ipoRetailPercent' },
      { name: 'الحد الأدنى للاكتتاب', type: 'ipoMinSubscription' },
      { name: 'الحد الأقصى للاكتتاب', type: 'ipoMaxSubscription' },
      { name: 'مضاعف الاكتتاب', type: 'ipoSubscriptionMultiple' },
      { name: 'بداية الاكتتاب', type: 'ipoSubscriptionStart' },
      { name: 'نهاية الاكتتاب', type: 'ipoSubscriptionEnd' },
      { name: 'تاريخ التخصيص', type: 'ipoAllocationDate' },
      { name: 'تاريخ الإدراج', type: 'ipoListingDate' },
      { name: 'تاريخ الاسترداد', type: 'ipoRefundDate' },
      { name: 'تغطية الأفراد (مرة)', type: 'ipoOversubscriptionRetail' },
      { name: 'تغطية المؤسسات (مرة)', type: 'ipoOversubscriptionInstitutional' },
      { name: 'إجمالي التغطية (مرة)', type: 'ipoTotalOversubscription' },
      { name: 'عدد المكتتبين', type: 'ipoSubscribersCount' },
      { name: 'الأموال المجمعة (مليار)', type: 'ipoAmountRaised' },
      { name: 'افتتاح أول يوم', type: 'ipoFirstDayOpen' },
      { name: 'أعلى سعر أول يوم', type: 'ipoFirstDayHigh' },
      { name: 'أدنى سعر أول يوم', type: 'ipoFirstDayLow' },
      { name: 'إغلاق أول يوم', type: 'ipoFirstDayClose' },
      { name: 'التغيير أول يوم', type: 'ipoFirstDayChange' },
      { name: 'التغيير % أول يوم', type: 'ipoFirstDayChangePercent' },
      { name: 'حجم التداول أول يوم (مليون)', type: 'ipoFirstDayVolume' },
      { name: 'أداء أول يوم', type: 'ipoFirstDayResult' },
      { name: 'السعر الحالي', type: 'ipoCurrentPrice' },
      { name: 'التغيير عن سعر الطرح', type: 'ipoChangeFromOffer' },
      { name: 'التغيير % عن سعر الطرح', type: 'ipoChangeFromOfferPercent' },
      { name: 'مدير الإصدار', type: 'ipoLeadUnderwriter' },
      { name: 'المستشار المالي', type: 'ipoFinancialAdvisor' },
      { name: 'المستشار القانوني', type: 'ipoLegalAdvisor' },
      { name: 'فترة الحظر (يوم)', type: 'ipoLockupPeriod' },
      { name: 'نهاية فترة الحظر', type: 'ipoLockupEndDate' },
      { name: 'حالة الاكتتاب', type: 'ipoStatus' },
      { name: 'السنة', type: 'ipoYear' },
      { name: 'الربع', type: 'ipoQuarter' },
    ]
  },

  // ==================== العملات ====================
  {
    id: 'forex-rates',
    name: { ar: 'أسعار صرف العملات', en: 'Forex Rates' },
    description: { ar: 'بيانات أسعار صرف العملات الحقيقية والمترابطة - OHLC منطقية مع Bid/Ask', en: 'Real forex rates with coherent OHLC and Bid/Ask data' },
    category: 'currencies',
    icon: '💱',
    color: 'blue',
    fields: [
      { name: 'زوج العملات', type: 'currencyPair' },
      { name: 'عملة الأساس', type: 'baseCurrency' },
      { name: 'اسم عملة الأساس', type: 'baseCurrencyName' },
      { name: 'عملة التسعير', type: 'quoteCurrency' },
      { name: 'اسم عملة التسعير', type: 'quoteCurrencyName' },
      { name: 'التاريخ', type: 'forexDate' },
      { name: 'الوقت', type: 'forexTime' },
      { name: 'جلسة التداول', type: 'forexSession' },
      { name: 'الإغلاق السابق', type: 'forexPreviousClose' },
      { name: 'سعر الافتتاح', type: 'forexOpen' },
      { name: 'أعلى سعر', type: 'forexHigh' },
      { name: 'أدنى سعر', type: 'forexLow' },
      { name: 'سعر الإغلاق', type: 'forexClose' },
      { name: 'سعر الشراء (Bid)', type: 'bidPrice' },
      { name: 'سعر البيع (Ask)', type: 'askPrice' },
      { name: 'السعر الوسط', type: 'midPrice' },
      { name: 'الفارق (Spread)', type: 'forexSpread' },
      { name: 'الفارق (Pips)', type: 'spreadPips' },
      { name: 'التغيير', type: 'forexChange' },
      { name: 'التغيير (%)', type: 'forexChangePercent' },
      { name: 'الاتجاه', type: 'forexTrend' },
      { name: 'حجم التداول', type: 'forexVolume' },
      { name: 'فئة الزوج', type: 'pairCategory' },
    ]
  },
  {
    id: 'currency-converter',
    name: { ar: 'تحويل العملات', en: 'Currency Converter' },
    description: { ar: 'بيانات عمليات تحويل العملات الحقيقية - المبلغ × السعر = المحول', en: 'Real currency conversion - Amount × Rate = Converted' },
    category: 'currencies',
    icon: '🔄',
    color: 'green',
    fields: [
      { name: 'رقم المرجع', type: 'conversionReferenceNumber' },
      { name: 'من عملة', type: 'conversionFromCurrency' },
      { name: 'اسم عملة المصدر', type: 'conversionFromCurrencyName' },
      { name: 'إلى عملة', type: 'conversionToCurrency' },
      { name: 'اسم عملة الهدف', type: 'conversionToCurrencyName' },
      { name: 'المبلغ الأصلي', type: 'conversionAmount' },
      { name: 'سعر الصرف', type: 'conversionRate' },
      { name: 'المبلغ المحول', type: 'convertedAmount' },
      { name: 'نسبة الرسوم (%)', type: 'conversionFeePercent' },
      { name: 'قيمة الرسوم', type: 'conversionFee' },
      { name: 'التكلفة الإجمالية', type: 'conversionTotalCost' },
      { name: 'المبلغ الصافي', type: 'conversionNetAmount' },
      { name: 'شركة الصرافة', type: 'conversionExchangeCompany' },
      { name: 'مدة التحويل', type: 'conversionTransferTime' },
      { name: 'تاريخ العملية', type: 'conversionDate' },
    ]
  },
  {
    id: 'remittances',
    name: { ar: 'الحوالات المالية', en: 'Remittances' },
    description: { ar: 'بيانات الحوالات الدولية الحقيقية والمترابطة', en: 'Real and coherent international remittance data' },
    category: 'currencies',
    icon: '💸',
    color: 'purple',
    fields: [
      { name: 'رقم الحوالة', type: 'conversionReferenceNumber' },
      { name: 'اسم المرسل', type: 'arabicFullName' },
      { name: 'هاتف المرسل', type: 'arabicPhone' },
      { name: 'دولة المرسل', type: 'baseCurrencyCountry' },
      { name: 'اسم المستلم', type: 'arabicFullName' },
      { name: 'هاتف المستلم', type: 'arabicPhone' },
      { name: 'دولة المستلم', type: 'quoteCurrencyCountry' },
      { name: 'عملة الإرسال', type: 'conversionFromCurrency' },
      { name: 'المبلغ المرسل', type: 'conversionAmount' },
      { name: 'سعر الصرف', type: 'conversionRate' },
      { name: 'عملة الاستلام', type: 'conversionToCurrency' },
      { name: 'المبلغ المستلم', type: 'convertedAmount' },
      { name: 'نسبة الرسوم (%)', type: 'conversionFeePercent' },
      { name: 'قيمة الرسوم', type: 'conversionFee' },
      { name: 'شركة التحويل', type: 'conversionExchangeCompany' },
      { name: 'مدة التحويل', type: 'conversionTransferTime' },
      { name: 'تاريخ الإرسال', type: 'conversionDate' },
      { name: 'الحالة', type: 'custom', options: { values: ['تم الإرسال', 'تم الاستلام', 'قيد التحويل', 'ملغية'] } },
    ]
  },
  {
    id: 'currency-historical',
    name: { ar: 'بيانات العملات التاريخية', en: 'Historical Currency Data' },
    description: { ar: 'أسعار العملات التاريخية للتحليل', en: 'Historical currency prices for analysis' },
    category: 'currencies',
    icon: '📅',
    color: 'indigo',
    fields: [
      { name: 'العملة', type: 'custom', options: { values: ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CNY', 'SAR', 'AED', 'EGP'] } },
      { name: 'السنة', type: 'number', options: { min: 2015, max: 2024 } },
      { name: 'الشهر', type: 'custom', options: { values: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] } },
      { name: 'متوسط السعر', type: 'decimal', options: { min: 0.5, max: 50, decimals: 4 } },
      { name: 'أعلى سعر', type: 'decimal', options: { min: 0.5, max: 50, decimals: 4 } },
      { name: 'أدنى سعر', type: 'decimal', options: { min: 0.5, max: 50, decimals: 4 } },
      { name: 'التقلب (%)', type: 'decimal', options: { min: 0, max: 20, decimals: 2 } },
      { name: 'حجم التداول (مليار)', type: 'decimal', options: { min: 10, max: 1000, decimals: 1 } },
    ]
  },

  // ==================== الطاقة ====================
  {
    id: 'oil-prices',
    name: { ar: 'أسعار النفط', en: 'Oil Prices' },
    description: { ar: 'بيانات أسعار النفط الخام الحقيقية والمترابطة - OHLC منطقية', en: 'Real crude oil prices with coherent OHLC data' },
    category: 'energy',
    icon: '🛢️',
    color: 'gray',
    fields: [
      { name: 'نوع النفط', type: 'oilType' },
      { name: 'كود النفط', type: 'oilCode' },
      { name: 'الفئة', type: 'oilCategory' },
      { name: 'كثافة API', type: 'oilApiGravity' },
      { name: 'نسبة الكبريت (%)', type: 'oilSulfurContent' },
      { name: 'المصدر', type: 'oilSource' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الربع', type: 'energyQuarter' },
      { name: 'العقد', type: 'energyContract' },
      { name: 'الإغلاق السابق ($/برميل)', type: 'oilPreviousClose' },
      { name: 'سعر الافتتاح', type: 'oilOpen' },
      { name: 'أعلى سعر', type: 'oilHigh' },
      { name: 'أدنى سعر', type: 'oilLow' },
      { name: 'سعر الإغلاق', type: 'oilClose' },
      { name: 'التغيير ($)', type: 'oilChange' },
      { name: 'التغيير (%)', type: 'oilChangePercent' },
      { name: 'حجم التداول (برميل)', type: 'oilVolume' },
      { name: 'قيمة التداول ($)', type: 'oilValue' },
      { name: 'الوحدة', type: 'oilUnit' },
      { name: 'العملة', type: 'oilCurrency' },
    ]
  },
  {
    id: 'gas-prices',
    name: { ar: 'أسعار الغاز', en: 'Gas Prices' },
    description: { ar: 'بيانات أسعار الغاز الطبيعي الحقيقية والمترابطة - OHLC منطقية', en: 'Real natural gas prices with coherent OHLC data' },
    category: 'energy',
    icon: '🔥',
    color: 'orange',
    fields: [
      { name: 'نوع الغاز', type: 'gasType' },
      { name: 'كود الغاز', type: 'gasCode' },
      { name: 'المصدر', type: 'gasSource' },
      { name: 'المنطقة', type: 'gasRegion' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الربع', type: 'energyQuarter' },
      { name: 'العقد', type: 'energyContract' },
      { name: 'الإغلاق السابق', type: 'gasPreviousClose' },
      { name: 'سعر الافتتاح', type: 'gasOpen' },
      { name: 'أعلى سعر', type: 'gasHigh' },
      { name: 'أدنى سعر', type: 'gasLow' },
      { name: 'سعر الإغلاق', type: 'gasClose' },
      { name: 'التغيير', type: 'gasChange' },
      { name: 'التغيير (%)', type: 'gasChangePercent' },
      { name: 'حجم التداول', type: 'gasVolume' },
      { name: 'قيمة التداول ($)', type: 'gasValue' },
      { name: 'الوحدة', type: 'gasUnit' },
    ]
  },
  {
    id: 'electricity-prices',
    name: { ar: 'أسعار الكهرباء', en: 'Electricity Prices' },
    description: { ar: 'بيانات أسعار الطاقة الكهربائية الحقيقية والمترابطة', en: 'Real electricity price data' },
    category: 'energy',
    icon: '⚡',
    color: 'yellow',
    fields: [
      { name: 'السوق', type: 'electricityMarket' },
      { name: 'كود السوق', type: 'electricityMarketCode' },
      { name: 'الدولة', type: 'electricityCountry' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الشهر', type: 'energyMonth' },
      { name: 'وقت الذروة', type: 'isPeakHour' },
      { name: 'ساعات الذروة', type: 'peakHours' },
      { name: 'سعر الذروة', type: 'electricityPeakPrice' },
      { name: 'سعر خارج الذروة', type: 'electricityOffPeakPrice' },
      { name: 'سعر الحمل الأساسي', type: 'electricityBaseLoadPrice' },
      { name: 'السعر الحالي', type: 'electricityPrice' },
      { name: 'الطلب (ميجاواط)', type: 'electricityDemand' },
      { name: 'الوحدة', type: 'electricityUnit' },
      { name: 'العملة', type: 'electricityCurrency' },
    ]
  },
  {
    id: 'renewable-energy',
    name: { ar: 'الطاقة المتجددة', en: 'Renewable Energy' },
    description: { ar: 'بيانات مشاريع الطاقة المتجددة الحقيقية', en: 'Real renewable energy project data' },
    category: 'energy',
    icon: '☀️',
    color: 'green',
    fields: [
      { name: 'نوع الطاقة', type: 'renewableType' },
      { name: 'كود النوع', type: 'renewableCode' },
      { name: 'الفئة', type: 'renewableCategory' },
      { name: 'السعر الأساسي', type: 'renewableBasePrice' },
      { name: 'السعر الحالي', type: 'renewablePrice' },
      { name: 'الوحدة', type: 'renewableUnit' },
      { name: 'معامل القدرة (%)', type: 'renewableCapacityFactor' },
      { name: 'القدرة (ميجاواط)', type: 'renewableCapacityMW' },
      { name: 'توفير CO2 (كجم/MWh)', type: 'renewableCo2Avoided' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الربع', type: 'energyQuarter' },
    ]
  },
  {
    id: 'refined-products',
    name: { ar: 'المنتجات المكررة', en: 'Refined Products' },
    description: { ar: 'بيانات أسعار المنتجات البترولية المكررة', en: 'Refined petroleum products prices' },
    category: 'energy',
    icon: '⛽',
    color: 'slate',
    fields: [
      { name: 'المنتج', type: 'refinedProduct' },
      { name: 'كود المنتج', type: 'refinedProductCode' },
      { name: 'الفئة', type: 'refinedProductCategory' },
      { name: 'الإغلاق السابق', type: 'oilPreviousClose' },
      { name: 'سعر الافتتاح', type: 'refinedProductOpen' },
      { name: 'أعلى سعر', type: 'refinedProductHigh' },
      { name: 'أدنى سعر', type: 'refinedProductLow' },
      { name: 'سعر الإغلاق', type: 'refinedProductPrice' },
      { name: 'التغيير', type: 'refinedProductChange' },
      { name: 'التغيير (%)', type: 'refinedProductChangePercent' },
      { name: 'الوحدة', type: 'refinedProductUnit' },
      { name: 'نسبة الإنتاج من الخام (%)', type: 'refinedYieldPercent' },
      { name: 'هامش التكرير (%)', type: 'refineryMargin' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الشهر', type: 'energyMonth' },
    ]
  },
  {
    id: 'coal-prices',
    name: { ar: 'أسعار الفحم', en: 'Coal Prices' },
    description: { ar: 'بيانات أسعار الفحم الحقيقية والمترابطة', en: 'Real coal prices data' },
    category: 'energy',
    icon: '⚫',
    color: 'gray',
    fields: [
      { name: 'نوع الفحم', type: 'coalType' },
      { name: 'كود الفحم', type: 'coalCode' },
      { name: 'الفئة', type: 'coalCategory' },
      { name: 'المصدر', type: 'coalSource' },
      { name: 'القيمة الحرارية (kcal/kg)', type: 'coalCalorificValue' },
      { name: 'الإغلاق السابق', type: 'oilPreviousClose' },
      { name: 'سعر الافتتاح', type: 'coalOpen' },
      { name: 'أعلى سعر', type: 'coalHigh' },
      { name: 'أدنى سعر', type: 'coalLow' },
      { name: 'سعر الإغلاق', type: 'coalPrice' },
      { name: 'التغيير', type: 'coalChange' },
      { name: 'التغيير (%)', type: 'coalChangePercent' },
      { name: 'الوحدة', type: 'coalUnit' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الربع', type: 'energyQuarter' },
    ]
  },
  {
    id: 'opec-production',
    name: { ar: 'إنتاج أوبك', en: 'OPEC Production' },
    description: { ar: 'بيانات إنتاج دول أوبك', en: 'OPEC countries production data' },
    category: 'energy',
    icon: '🏭',
    color: 'slate',
    fields: [
      { name: 'الدولة', type: 'custom', options: { values: ['السعودية', 'الإمارات', 'الكويت', 'العراق', 'إيران', 'نيجيريا', 'فنزويلا', 'الجزائر', 'ليبيا', 'أنغولا'] } },
      { name: 'الشهر', type: 'custom', options: { values: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] } },
      { name: 'السنة', type: 'number', options: { min: 2020, max: 2024 } },
      { name: 'الإنتاج (مليون برميل/يوم)', type: 'decimal', options: { min: 0.5, max: 12, decimals: 2 } },
      { name: 'الحصة المقررة', type: 'decimal', options: { min: 0.5, max: 12, decimals: 2 } },
      { name: 'الالتزام (%)', type: 'decimal', options: { min: 80, max: 110, decimals: 1 } },
      { name: 'الاحتياطي (مليار برميل)', type: 'decimal', options: { min: 10, max: 300, decimals: 1 } },
      { name: 'الطاقة الإنتاجية', type: 'decimal', options: { min: 1, max: 15, decimals: 2 } },
      { name: 'الصادرات (مليون ب/ي)', type: 'decimal', options: { min: 0.3, max: 8, decimals: 2 } },
    ]
  },
  {
    id: 'energy-commodities',
    name: { ar: 'سلع الطاقة', en: 'Energy Commodities' },
    description: { ar: 'أسعار سلع الطاقة المختلفة الحقيقية والمترابطة', en: 'Real energy commodity prices' },
    category: 'energy',
    icon: '📈',
    color: 'red',
    fields: [
      { name: 'نوع النفط', type: 'oilType' },
      { name: 'كود النفط', type: 'oilCode' },
      { name: 'الفئة', type: 'oilCategory' },
      { name: 'كثافة API', type: 'oilApiGravity' },
      { name: 'سعر الافتتاح', type: 'oilOpen' },
      { name: 'أعلى سعر', type: 'oilHigh' },
      { name: 'أدنى سعر', type: 'oilLow' },
      { name: 'سعر الإغلاق', type: 'oilClose' },
      { name: 'التغيير اليومي ($)', type: 'oilChange' },
      { name: 'التغيير (%)', type: 'oilChangePercent' },
      { name: 'حجم التداول', type: 'oilVolume' },
      { name: 'الوحدة', type: 'oilUnit' },
      { name: 'السنة', type: 'energyYear' },
      { name: 'الربع', type: 'energyQuarter' },
      { name: 'العقد', type: 'energyContract' },
    ]
  },

  // ==================== العملات الرقمية ====================
  {
    id: 'crypto-prices',
    name: { ar: 'أسعار العملات الرقمية', en: 'Crypto Prices' },
    description: { ar: 'بيانات أسعار العملات المشفرة', en: 'Cryptocurrency price data' },
    category: 'crypto',
    icon: '₿',
    color: 'orange',
    fields: [
      { name: 'العملة', type: 'custom', options: { values: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Binance Coin (BNB)', 'Ripple (XRP)', 'Cardano (ADA)', 'Solana (SOL)', 'Dogecoin (DOGE)', 'Polkadot (DOT)', 'Polygon (MATIC)', 'Litecoin (LTC)'] } },
      { name: 'الرمز', type: 'custom', options: { values: ['BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL', 'DOGE', 'DOT', 'MATIC', 'LTC'] } },
      { name: 'التاريخ', type: 'date' },
      { name: 'السعر ($)', type: 'decimal', options: { min: 0.01, max: 70000, decimals: 2 } },
      { name: 'حجم التداول (24س)', type: 'number', options: { min: 1000000, max: 50000000000 } },
      { name: 'القيمة السوقية', type: 'number', options: { min: 100000000, max: 1500000000000 } },
      { name: 'التغيير 24س (%)', type: 'decimal', options: { min: -20, max: 30, decimals: 2 } },
      { name: 'التغيير 7 أيام (%)', type: 'decimal', options: { min: -40, max: 60, decimals: 2 } },
      { name: 'أعلى سعر تاريخي', type: 'decimal', options: { min: 1, max: 75000, decimals: 2 } },
      { name: 'الترتيب', type: 'number', options: { min: 1, max: 100 } },
    ]
  },
  {
    id: 'crypto-portfolio',
    name: { ar: 'محفظة عملات رقمية', en: 'Crypto Portfolio' },
    description: { ar: 'بيانات محافظ العملات الرقمية', en: 'Crypto portfolio data' },
    category: 'crypto',
    icon: '👛',
    color: 'purple',
    fields: [
      { name: 'رقم المحفظة', type: 'uuid' },
      { name: 'اسم المستثمر', type: 'arabicFullName' },
      { name: 'العملة', type: 'custom', options: { values: ['BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL'] } },
      { name: 'الكمية', type: 'decimal', options: { min: 0.001, max: 100, decimals: 6 } },
      { name: 'سعر الشراء ($)', type: 'decimal', options: { min: 0.1, max: 60000, decimals: 2 } },
      { name: 'السعر الحالي ($)', type: 'decimal', options: { min: 0.1, max: 70000, decimals: 2 } },
      { name: 'القيمة الحالية ($)', type: 'decimal', options: { min: 10, max: 500000, decimals: 2 } },
      { name: 'الربح/الخسارة ($)', type: 'decimal', options: { min: -50000, max: 100000, decimals: 2 } },
      { name: 'العائد (%)', type: 'decimal', options: { min: -90, max: 500, decimals: 2 } },
      { name: 'تاريخ الشراء', type: 'date' },
      { name: 'المنصة', type: 'custom', options: { values: ['Binance', 'Coinbase', 'Kraken', 'KuCoin', 'Rain', 'BitOasis'] } },
    ]
  },
  {
    id: 'crypto-transactions',
    name: { ar: 'معاملات العملات الرقمية', en: 'Crypto Transactions' },
    description: { ar: 'بيانات معاملات البلوكتشين', en: 'Blockchain transaction data' },
    category: 'crypto',
    icon: '🔗',
    color: 'blue',
    fields: [
      { name: 'رقم المعاملة (Hash)', type: 'uuid' },
      { name: 'الشبكة', type: 'custom', options: { values: ['Bitcoin', 'Ethereum', 'BNB Smart Chain', 'Solana', 'Polygon', 'Avalanche'] } },
      { name: 'من عنوان', type: 'uuid' },
      { name: 'إلى عنوان', type: 'uuid' },
      { name: 'المبلغ', type: 'decimal', options: { min: 0.0001, max: 1000, decimals: 8 } },
      { name: 'العملة', type: 'custom', options: { values: ['BTC', 'ETH', 'BNB', 'USDT', 'USDC', 'SOL'] } },
      { name: 'رسوم الغاز ($)', type: 'decimal', options: { min: 0.01, max: 100, decimals: 2 } },
      { name: 'التاريخ والوقت', type: 'datetime' },
      { name: 'رقم البلوك', type: 'number', options: { min: 1000000, max: 20000000 } },
      { name: 'التأكيدات', type: 'number', options: { min: 1, max: 100 } },
      { name: 'الحالة', type: 'custom', options: { values: ['مؤكدة', 'قيد الانتظار', 'فاشلة'] } },
    ]
  },

  // ==================== البحث العلمي ====================
  {
    id: 'research-survey',
    name: { ar: 'استبيان بحثي', en: 'Research Survey' },
    description: { ar: 'بيانات استبيانات البحث العلمي', en: 'Research survey data' },
    category: 'research',
    icon: '📊',
    color: 'violet',
    fields: [
      { name: 'رقم المستجيب', type: 'number', options: { min: 1, max: 1000 } },
      { name: 'العمر', type: 'age' },
      { name: 'الجنس', type: 'arabicGender' },
      { name: 'المستوى التعليمي', type: 'degree' },
      { name: 'المدينة', type: 'arabicCity' },
      { name: 'السؤال 1 (ليكرت)', type: 'likert' },
      { name: 'السؤال 2 (ليكرت)', type: 'likert' },
      { name: 'السؤال 3 (ليكرت)', type: 'likert' },
      { name: 'السؤال 4 (ليكرت)', type: 'likert' },
      { name: 'السؤال 5 (ليكرت)', type: 'likert' },
      { name: 'التعليقات', type: 'paragraph' },
      { name: 'تاريخ التعبئة', type: 'datetime' },
    ]
  },
  {
    id: 'experiment-data',
    name: { ar: 'بيانات تجريبية', en: 'Experimental Data' },
    description: { ar: 'بيانات التجارب العلمية', en: 'Scientific experiment data' },
    category: 'research',
    icon: '🔬',
    color: 'teal',
    fields: [
      { name: 'رقم التجربة', type: 'number', options: { min: 1, max: 100 } },
      { name: 'رقم العينة', type: 'number', options: { min: 1, max: 500 } },
      { name: 'المجموعة', type: 'custom', options: { values: ['ضابطة', 'تجريبية أ', 'تجريبية ب'] } },
      { name: 'المتغير المستقل', type: 'decimal', options: { min: 0, max: 100, decimals: 2 } },
      { name: 'المتغير التابع', type: 'decimal', options: { min: 0, max: 100, decimals: 2 } },
      { name: 'القياس القبلي', type: 'decimal', options: { min: 0, max: 100, decimals: 2 } },
      { name: 'القياس البعدي', type: 'decimal', options: { min: 0, max: 100, decimals: 2 } },
      { name: 'الانحراف المعياري', type: 'decimal', options: { min: 0, max: 20, decimals: 3 } },
      { name: 'قيمة P', type: 'decimal', options: { min: 0, max: 1, decimals: 4 } },
      { name: 'دال إحصائياً', type: 'boolean' },
      { name: 'تاريخ التجربة', type: 'date' },
      { name: 'الباحث', type: 'arabicFullName' },
    ]
  },
  {
    id: 'weather-data',
    name: { ar: 'بيانات الطقس', en: 'Weather Data' },
    description: { ar: 'بيانات أرصاد جوية', en: 'Meteorological data' },
    category: 'research',
    icon: '🌤️',
    color: 'sky',
    fields: [
      { name: 'المحطة', type: 'arabicCity' },
      { name: 'التاريخ', type: 'date' },
      { name: 'الوقت', type: 'time' },
      { name: 'درجة الحرارة (°C)', type: 'decimal', options: { min: -10, max: 55, decimals: 1 } },
      { name: 'الرطوبة (%)', type: 'percentage' },
      { name: 'الضغط الجوي (hPa)', type: 'number', options: { min: 990, max: 1030 } },
      { name: 'سرعة الرياح (km/h)', type: 'number', options: { min: 0, max: 100 } },
      { name: 'اتجاه الرياح', type: 'custom', options: { values: ['شمال', 'جنوب', 'شرق', 'غرب', 'شمال شرق', 'جنوب غرب'] } },
      { name: 'كمية الأمطار (mm)', type: 'decimal', options: { min: 0, max: 50, decimals: 1 } },
      { name: 'الحالة', type: 'custom', options: { values: ['صحو', 'غائم جزئياً', 'غائم', 'ممطر', 'عاصف'] } },
    ]
  },
  {
    id: 'agricultural-data',
    name: { ar: 'بيانات زراعية', en: 'Agricultural Data' },
    description: { ar: 'بيانات المحاصيل الزراعية', en: 'Crop and agricultural data' },
    category: 'research',
    icon: '🌾',
    color: 'green',
    fields: [
      { name: 'رقم المزرعة', type: 'number', options: { min: 100, max: 999 } },
      { name: 'الموقع', type: 'arabicCity' },
      { name: 'نوع المحصول', type: 'custom', options: { values: ['قمح', 'شعير', 'تمور', 'طماطم', 'خيار', 'بطاطس', 'بصل', 'زيتون'] } },
      { name: 'المساحة (هكتار)', type: 'decimal', options: { min: 1, max: 100, decimals: 1 } },
      { name: 'كمية الإنتاج (طن)', type: 'decimal', options: { min: 1, max: 500, decimals: 1 } },
      { name: 'الإنتاجية (طن/هكتار)', type: 'decimal', options: { min: 1, max: 20, decimals: 2 } },
      { name: 'نظام الري', type: 'custom', options: { values: ['تنقيط', 'رش', 'غمر', 'محوري'] } },
      { name: 'تاريخ الزراعة', type: 'date' },
      { name: 'تاريخ الحصاد', type: 'date' },
      { name: 'جودة المحصول', type: 'custom', options: { values: ['ممتازة', 'جيدة', 'متوسطة', 'ضعيفة'] } },
    ]
  },
];

export const getTemplatesByCategory = (categoryId: string): Template[] => {
  if (categoryId === 'all') return templates;
  return templates.filter(t => t.category === categoryId);
};

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(t => t.id === id);
};

export const searchTemplates = (query: string, language: 'ar' | 'en'): Template[] => {
  const lowerQuery = query.toLowerCase();
  return templates.filter(t => 
    t.name[language].toLowerCase().includes(lowerQuery) ||
    t.description[language].toLowerCase().includes(lowerQuery)
  );
};
