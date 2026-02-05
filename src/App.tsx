import { useState, useCallback, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { 
  Database, Sparkles, Plus, Trash2, Copy, FileJson, 
  FileSpreadsheet, FileCode, FileText, Globe, BarChart3,
  Eye, Layers, BookTemplate, Wand2, CheckCircle2, Menu, X,
  RefreshCw, Table, Clock, TrendingUp,
  Mail, MessageCircle, ChevronRight, Search
} from 'lucide-react';
import { generateFastDataBatch } from './utils/fastDataGenerator';
import { templates, templateCategories as allTemplateCategories, Template } from './data/templates';
import { fieldCategories, FieldCategory, FieldType as FieldTypeData } from './data/simpleFieldTypes';

// Types
interface FieldSchema {
  id: string;
  name: string;
  type: string;
  options?: {
    min?: number;
    max?: number;
    decimals?: number;
    unique?: boolean;
    nullable?: boolean;
    nullProbability?: number;
    distribution?: string;
    distributionParams?: Record<string, number>;
  };
}

// Main App Content
function AppContent() {
  const { language, toggleLanguage, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'schema' | 'templates' | 'generate' | 'preview'>('schema');
  const [fields, setFields] = useState<FieldSchema[]>([
    { id: '1', name: language === 'ar' ? 'الاسم_الكامل' : 'full_name', type: language === 'ar' ? 'arabicFullName' : 'fullName' },
    { id: '2', name: language === 'ar' ? 'البريد_الإلكتروني' : 'email', type: language === 'ar' ? 'arabicEmail' : 'email' },
    { id: '3', name: language === 'ar' ? 'الهاتف' : 'phone', type: language === 'ar' ? 'arabicPhone' : 'phone' },
    { id: '4', name: language === 'ar' ? 'المدينة' : 'city', type: language === 'ar' ? 'arabicCity' : 'city' },
  ]);
  const [generatedData, setGeneratedData] = useState<Record<string, unknown>[]>([]);
  const [rowCount, setRowCount] = useState(100);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generationTime, setGenerationTime] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFieldSelector, setShowFieldSelector] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState<string>('all');
  const rowsPerPage = 10;

  // Update fields when language changes
  useEffect(() => {
    setFields(prev => prev.map(field => {
      const typeMapping: Record<string, string> = {
        'arabicFullName': 'fullName', 'fullName': 'arabicFullName',
        'arabicEmail': 'email', 'email': 'arabicEmail',
        'arabicPhone': 'phone', 'phone': 'arabicPhone',
        'arabicCity': 'city', 'city': 'arabicCity',
        'arabicAddress': 'address', 'address': 'arabicAddress',
        'arabicCompany': 'company', 'company': 'arabicCompany',
        'arabicJobTitle': 'jobTitle', 'jobTitle': 'arabicJobTitle',
        'arabicGender': 'gender', 'gender': 'arabicGender',
      };
      
      const newType = typeMapping[field.type] || field.type;
      return { ...field, type: newType };
    }));
  }, [language]);

  // Using fast data generator instead of SmartDataGenerator

  const addField = (type: string, name: string) => {
    const newField: FieldSchema = {
      id: Date.now().toString(),
      name: name.replace(/\s+/g, '_'),
      type,
    };
    setFields([...fields, newField]);
    setShowFieldSelector(false);
  };

  const removeField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const updateField = (id: string, updates: Partial<FieldSchema>) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const applyTemplate = (template: Template) => {
    setFields(template.fields.map((f, i) => ({
      id: Date.now().toString() + i,
      name: f.name,
      type: f.type,
      options: f.options
    })));
    setActiveTab('schema');
  };

  // Note: Education detection is now handled automatically by fast generator

  const generateData = useCallback(async () => {
    setIsGenerating(true);
    setProgress(0);
    setGeneratedData([]);
    
    const startTime = performance.now();
    
    try {
      // Convert fields to the format expected by fast generator
      const dataFields = fields.map(f => ({
        id: f.id,
        name: f.name,
        type: f.type,
        enabled: true,
        options: f.options
      }));
      
      // Use fast batch generation
      const allData = await generateFastDataBatch(
        dataFields,
        rowCount,
        language,
        10000, // batch size
        (progress) => setProgress(progress)
      );
      
      const endTime = performance.now();
      setGenerationTime(Math.round(endTime - startTime));
      setGeneratedData(allData);
      setActiveTab('preview');
    } catch (error) {
      console.error('Error generating data:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [fields, rowCount, language]);

  const exportData = (format: 'json' | 'csv' | 'sql' | 'xml') => {
    let content = '';
    let mimeType = '';
    let extension = '';
    
    switch (format) {
      case 'json':
        content = JSON.stringify(generatedData, null, 2);
        mimeType = 'application/json';
        extension = 'json';
        break;
      case 'csv':
        const headers = fields.map(f => f.name).join(',');
        const rows = generatedData.map(row => 
          fields.map(f => {
            const value = row[f.name];
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
          }).join(',')
        );
        content = [headers, ...rows].join('\n');
        mimeType = 'text/csv';
        extension = 'csv';
        break;
      case 'sql':
        const tableName = 'generated_data';
        const columns = fields.map(f => f.name).join(', ');
        const values = generatedData.map(row => {
          const vals = fields.map(f => {
            const value = row[f.name];
            return typeof value === 'string' ? `'${value.replace(/'/g, "''")}'` : value;
          }).join(', ');
          return `(${vals})`;
        }).join(',\n');
        content = `INSERT INTO ${tableName} (${columns}) VALUES\n${values};`;
        mimeType = 'text/sql';
        extension = 'sql';
        break;
      case 'xml':
        const xmlRows = generatedData.map(row => {
          const xmlFields = fields.map(f => `    <${f.name}>${row[f.name]}</${f.name}>`).join('\n');
          return `  <row>\n${xmlFields}\n  </row>`;
        }).join('\n');
        content = `<?xml version="1.0" encoding="UTF-8"?>\n<data>\n${xmlRows}\n</data>`;
        mimeType = 'text/xml';
        extension = 'xml';
        break;
    }
    
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data_${Date.now()}.${extension}`;
    a.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedData, null, 2));
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const tabs = [
    { id: 'schema', icon: Layers, label: language === 'ar' ? 'تصميم الهيكل' : 'Schema Design', color: 'indigo' },
    { id: 'templates', icon: BookTemplate, label: language === 'ar' ? 'القوالب الجاهزة' : 'Templates', color: 'purple' },
    { id: 'generate', icon: Wand2, label: language === 'ar' ? 'توليد البيانات' : 'Generate', color: 'emerald' },
    { id: 'preview', icon: Eye, label: language === 'ar' ? 'معاينة وتصدير' : 'Preview & Export', color: 'amber', badge: generatedData.length },
  ];

  const templateCategoriesUI = allTemplateCategories.map(cat => ({
    id: cat.id,
    icon: cat.icon,
    label: language === 'ar' ? cat.name.ar : cat.name.en
  }));

  const filteredTemplates = templates.filter(t => {
    if (selectedTemplateCategory !== 'all' && t.category !== selectedTemplateCategory) return false;
    if (searchQuery && !t.name[language].toLowerCase().includes(searchQuery.toLowerCase()) && 
        !t.description[language].toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const countries: { code: string; name: string; nameEn: string; flag: string }[] = [
    { code: 'ALL', name: 'جميع الدول', nameEn: 'All Countries', flag: '🌍' },
    { code: 'SA', name: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦' },
    { code: 'EG', name: 'مصر', nameEn: 'Egypt', flag: '🇪🇬' },
    { code: 'AE', name: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪' },
    { code: 'JO', name: 'الأردن', nameEn: 'Jordan', flag: '🇯🇴' },
    { code: 'KW', name: 'الكويت', nameEn: 'Kuwait', flag: '🇰🇼' },
    { code: 'QA', name: 'قطر', nameEn: 'Qatar', flag: '🇶🇦' },
    { code: 'BH', name: 'البحرين', nameEn: 'Bahrain', flag: '🇧🇭' },
    { code: 'OM', name: 'عمان', nameEn: 'Oman', flag: '🇴🇲' },
    { code: 'LB', name: 'لبنان', nameEn: 'Lebanon', flag: '🇱🇧' },
    { code: 'MA', name: 'المغرب', nameEn: 'Morocco', flag: '🇲🇦' },
    { code: 'IQ', name: 'العراق', nameEn: 'Iraq', flag: '🇮🇶' },
    { code: 'SY', name: 'سوريا', nameEn: 'Syria', flag: '🇸🇾' },
    { code: 'PS', name: 'فلسطين', nameEn: 'Palestine', flag: '🇵🇸' },
    { code: 'YE', name: 'اليمن', nameEn: 'Yemen', flag: '🇾🇪' },
    { code: 'SD', name: 'السودان', nameEn: 'Sudan', flag: '🇸🇩' },
    { code: 'LY', name: 'ليبيا', nameEn: 'Libya', flag: '🇱🇾' },
    { code: 'TN', name: 'تونس', nameEn: 'Tunisia', flag: '🇹🇳' },
    { code: 'DZ', name: 'الجزائر', nameEn: 'Algeria', flag: '🇩🇿' },
  ];

  const presetCounts = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  DataForge Pro
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  {language === 'ar' ? 'مولد البيانات الذكي' : 'Smart Data Generator'}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'ar' ? 'EN 🇺🇸' : '🇸🇦 عربي'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 py-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'schema' | 'templates' | 'generate' | 'preview')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge && tab.badge > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {tab.badge.toLocaleString()}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab: Schema Design */}
        {activeTab === 'schema' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'ar' ? 'تصميم هيكل البيانات' : 'Design Data Schema'}
                </h2>
                <p className="text-gray-500 mt-1">
                  {language === 'ar' ? 'أضف الحقول التي تريد توليد بيانات لها' : 'Add fields you want to generate data for'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  {fields.length} {language === 'ar' ? 'حقول' : 'fields'}
                </span>
              </div>
            </div>

            {/* Country Selector */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {language === 'ar' ? '🌍 اختر الدولة للبيانات المحلية' : '🌍 Select Country for Local Data'}
              </label>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => setSelectedCountry(country.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                      selectedCountry === country.code
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm font-medium">
                      {language === 'ar' ? country.name : country.nameEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fields List */}
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Index */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Field Name */}
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.name}
                        onChange={(e) => updateField(field.id, { name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        placeholder={language === 'ar' ? 'اسم الحقل' : 'Field name'}
                      />
                    </div>

                    {/* Field Type */}
                    <div className="w-48">
                      <select
                        value={field.type}
                        onChange={(e) => updateField(field.id, { type: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all bg-white"
                      >
                        {fieldCategories.map((category: FieldCategory) => (
                          <optgroup key={category.id} label={language === 'ar' ? category.nameAr : category.name}>
                            {category.fields.map((f: FieldTypeData) => (
                              <option key={f.type} value={f.type}>
                                {f.icon} {language === 'ar' ? f.nameAr : f.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    {/* Distribution for numeric fields */}
                    {['number', 'decimal', 'age', 'price', 'salary', 'percentage', 'rating'].includes(field.type) && (
                      <div className="w-40">
                        <select
                          value={field.options?.distribution || 'uniform'}
                          onChange={(e) => updateField(field.id, { 
                            options: { ...field.options, distribution: e.target.value } 
                          })}
                          className="w-full px-3 py-2 rounded-lg border border-purple-200 bg-purple-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm"
                        >
                          <option value="uniform">{language === 'ar' ? '📊 منتظم' : '📊 Uniform'}</option>
                          <option value="normal">{language === 'ar' ? '🔔 طبيعي' : '🔔 Normal'}</option>
                          <option value="exponential">{language === 'ar' ? '📈 أسي' : '📈 Exponential'}</option>
                          <option value="poisson">{language === 'ar' ? '🎯 بواسون' : '🎯 Poisson'}</option>
                          <option value="bimodal">{language === 'ar' ? '🐪 ثنائي القمة' : '🐪 Bimodal'}</option>
                        </select>
                      </div>
                    )}

                    {/* Delete Button */}
                    <button
                      onClick={() => removeField(field.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Options for numeric fields */}
                  {['number', 'decimal', 'age', 'price', 'salary'].includes(field.type) && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-500">
                          {language === 'ar' ? 'الحد الأدنى:' : 'Min:'}
                        </label>
                        <input
                          type="number"
                          value={field.options?.min ?? 0}
                          onChange={(e) => updateField(field.id, { 
                            options: { ...field.options, min: parseInt(e.target.value) } 
                          })}
                          className="w-24 px-2 py-1 rounded-lg border border-gray-200 text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-500">
                          {language === 'ar' ? 'الحد الأقصى:' : 'Max:'}
                        </label>
                        <input
                          type="number"
                          value={field.options?.max ?? 100}
                          onChange={(e) => updateField(field.id, { 
                            options: { ...field.options, max: parseInt(e.target.value) } 
                          })}
                          className="w-24 px-2 py-1 rounded-lg border border-gray-200 text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Add Field Button */}
            <button
              onClick={() => setShowFieldSelector(true)}
              className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">
                {language === 'ar' ? 'إضافة حقل جديد' : 'Add New Field'}
              </span>
            </button>

            {/* Field Selector Modal */}
            {showFieldSelector && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        {language === 'ar' ? 'اختر نوع الحقل' : 'Select Field Type'}
                      </h3>
                      <button
                        onClick={() => setShowFieldSelector(false)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'ابحث عن نوع الحقل...' : 'Search field type...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="mt-4 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                    />
                  </div>
                  <div className="p-6 overflow-y-auto max-h-[60vh]">
                    {fieldCategories.map((category: FieldCategory) => {
                      const filteredFields = category.fields.filter((f: FieldTypeData) =>
                        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        f.nameAr.includes(searchQuery)
                      );
                      if (filteredFields.length === 0) return null;
                      return (
                        <div key={category.id} className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 mb-3">
                            {category.icon} {language === 'ar' ? category.nameAr : category.name}
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {filteredFields.map((field: FieldTypeData) => (
                              <button
                                key={field.type}
                                onClick={() => addField(field.type, language === 'ar' ? field.nameAr : field.name)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition-all text-start"
                              >
                                <span>{field.icon}</span>
                                <span>{language === 'ar' ? field.nameAr : field.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Generate Button */}
            {fields.length > 0 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setActiveTab('generate')}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span>{language === 'ar' ? 'التالي: توليد البيانات' : 'Next: Generate Data'}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab: Templates */}
        {activeTab === 'templates' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'ar' ? 'القوالب الجاهزة' : 'Ready Templates'}
              </h2>
              <p className="text-gray-500 mt-1">
                {language === 'ar' ? 'اختر قالبًا جاهزًا لبدء العمل بسرعة' : 'Choose a template to get started quickly'}
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {templateCategoriesUI.map((cat) => {
                const iconStr = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedTemplateCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      selectedTemplateCategory === cat.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span className="text-lg">{iconStr}</span>
                    <span className="text-sm font-medium">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'ابحث في القوالب...' : 'Search templates...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none"
                />
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => applyTemplate(template)}
                  className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 text-start"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {template.name[language]}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {template.description[language]}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium">
                          {template.fields.length} {language === 'ar' ? 'حقول' : 'fields'}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Generate */}
        {activeTab === 'generate' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'ar' ? 'توليد البيانات' : 'Generate Data'}
              </h2>
              <p className="text-gray-500 mt-1">
                {language === 'ar' ? 'حدد عدد السجلات المطلوب توليدها' : 'Specify the number of records to generate'}
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{fields.length}</div>
                  <div className="text-white/70 text-sm">{language === 'ar' ? 'حقول' : 'Fields'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{countries.find(c => c.code === selectedCountry)?.flag}</div>
                  <div className="text-white/70 text-sm">{language === 'ar' ? 'الدولة' : 'Country'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{language === 'ar' ? '🇸🇦' : '🇺🇸'}</div>
                  <div className="text-white/70 text-sm">{language === 'ar' ? 'عربي' : 'English'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{rowCount.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">{language === 'ar' ? 'سجل' : 'Records'}</div>
                </div>
              </div>
            </div>

            {/* Row Count Input */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? '📊 عدد السجلات المطلوبة' : '📊 Number of Records'}
              </label>
              
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="number"
                  value={rowCount}
                  onChange={(e) => setRowCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="flex-1 px-4 py-3 text-2xl font-bold text-center rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none"
                  min="1"
                  max="50000000"
                />
              </div>

              {/* Preset Counts */}
              <div className="flex flex-wrap gap-2">
                {presetCounts.map((count) => (
                  <button
                    key={count}
                    onClick={() => setRowCount(count)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      rowCount === count
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {count >= 1000000 ? `${count / 1000000}M` : count >= 1000 ? `${count / 1000}K` : count}
                  </button>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-sm text-amber-700">
                  💡 {language === 'ar' 
                    ? 'يمكنك توليد حتى 50 مليون سجل! للكميات الكبيرة، قد يستغرق الأمر بعض الوقت.' 
                    : 'You can generate up to 50 million records! Large amounts may take some time.'}
                </p>
              </div>
            </div>

            {/* Distribution Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {language === 'ar' ? 'التوزيعات الإحصائية' : 'Statistical Distributions'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {language === 'ar' 
                      ? 'يمكنك تحديد توزيع البيانات للحقول الرقمية من تبويب "تصميم الهيكل"'
                      : 'You can set data distribution for numeric fields in "Schema Design" tab'}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Normal', 'Exponential', 'Poisson', 'Bimodal', 'Uniform'].map((dist) => (
                      <span key={dist} className="px-2 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium">
                        {dist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={generateData}
                disabled={isGenerating || fields.length === 0}
                className={`flex items-center gap-3 px-10 py-4 rounded-2xl text-xl font-bold shadow-xl transition-all duration-300 ${
                  isGenerating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-2xl hover:scale-105 shadow-emerald-500/30'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    <span>{language === 'ar' ? 'جاري التوليد...' : 'Generating...'}</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    <span>{language === 'ar' ? 'توليد البيانات الآن' : 'Generate Data Now'}</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Progress Bar */}
            {isGenerating && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {language === 'ar' ? 'جاري التوليد...' : 'Generating...'}
                  </span>
                  <span className="text-sm font-bold text-indigo-600">{progress}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab: Preview & Export */}
        {activeTab === 'preview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header with Stats */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'ar' ? 'معاينة وتصدير البيانات' : 'Preview & Export Data'}
                </h2>
                {generatedData.length > 0 && (
                  <p className="text-gray-500 mt-1">
                    {language === 'ar' 
                      ? `تم توليد ${generatedData.length.toLocaleString()} سجل في ${generationTime}ms`
                      : `Generated ${generatedData.length.toLocaleString()} records in ${generationTime}ms`}
                  </p>
                )}
              </div>

              {generatedData.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => exportData('json')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-md"
                  >
                    <FileJson className="w-4 h-4" />
                    <span>JSON</span>
                  </button>
                  <button
                    onClick={() => exportData('csv')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all shadow-md"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>CSV</span>
                  </button>
                  <button
                    onClick={() => exportData('sql')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-md"
                  >
                    <FileCode className="w-4 h-4" />
                    <span>SQL</span>
                  </button>
                  <button
                    onClick={() => exportData('xml')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-all shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>XML</span>
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all shadow-md ${
                      copiedToClipboard
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-500 text-white hover:bg-gray-600'
                    }`}
                  >
                    {copiedToClipboard ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedToClipboard ? (language === 'ar' ? 'تم النسخ!' : 'Copied!') : (language === 'ar' ? 'نسخ' : 'Copy')}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            {generatedData.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                  <Table className="w-6 h-6 mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{generatedData.length.toLocaleString()}</div>
                  <div className="text-sm text-white/70">{language === 'ar' ? 'إجمالي السجلات' : 'Total Records'}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                  <Layers className="w-6 h-6 mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{fields.length}</div>
                  <div className="text-sm text-white/70">{language === 'ar' ? 'عدد الحقول' : 'Fields'}</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white">
                  <Clock className="w-6 h-6 mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{generationTime}ms</div>
                  <div className="text-sm text-white/70">{language === 'ar' ? 'وقت التوليد' : 'Generation Time'}</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 text-white">
                  <TrendingUp className="w-6 h-6 mb-2 opacity-80" />
                  <div className="text-2xl font-bold">
                    {generationTime > 0 ? Math.round(generatedData.length / (generationTime / 1000)).toLocaleString() : 0}
                  </div>
                  <div className="text-sm text-white/70">{language === 'ar' ? 'سجل/ثانية' : 'records/sec'}</div>
                </div>
              </div>
            )}

            {/* Data Table */}
            {generatedData.length > 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-start text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        {fields.map((field) => (
                          <th key={field.id} className="px-4 py-3 text-start text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {field.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {generatedData
                        .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                        .map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm text-gray-400 font-mono">
                              {(currentPage - 1) * rowsPerPage + index + 1}
                            </td>
                            {fields.map((field) => (
                              <td key={field.id} className="px-4 py-3 text-sm text-gray-700">
                                {typeof row[field.name] === 'boolean' ? (
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    row[field.name] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                  }`}>
                                    {row[field.name] ? '✓' : '✗'}
                                  </span>
                                ) : (
                                  <span className="truncate block max-w-xs">
                                    {String(row[field.name])}
                                  </span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="text-sm text-gray-500">
                    {language === 'ar' 
                      ? `عرض ${(currentPage - 1) * rowsPerPage + 1} - ${Math.min(currentPage * rowsPerPage, generatedData.length)} من ${generatedData.length}`
                      : `Showing ${(currentPage - 1) * rowsPerPage + 1} - ${Math.min(currentPage * rowsPerPage, generatedData.length)} of ${generatedData.length}`}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-sm disabled:opacity-50 hover:bg-gray-100 transition-all"
                    >
                      {language === 'ar' ? 'السابق' : 'Previous'}
                    </button>
                    <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium">
                      {currentPage}
                    </span>
                    <button
                      onClick={() => setCurrentPage(p => p + 1)}
                      disabled={currentPage * rowsPerPage >= generatedData.length}
                      className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-sm disabled:opacity-50 hover:bg-gray-100 transition-all"
                    >
                      {language === 'ar' ? 'التالي' : 'Next'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Table className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'لا توجد بيانات بعد' : 'No Data Yet'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {language === 'ar' 
                    ? 'قم بتصميم هيكل البيانات ثم اضغط على توليد البيانات'
                    : 'Design your schema and click Generate to create data'}
                </p>
                <button
                  onClick={() => setActiveTab('schema')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <Layers className="w-5 h-5" />
                  <span>{language === 'ar' ? 'تصميم الهيكل' : 'Design Schema'}</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">DataForge Pro</span>
                <p className="text-sm text-gray-400">
                  {language === 'ar' ? 'مولد البيانات الذكي' : 'Smart Data Generator'}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="text-sm text-gray-400">
                {language === 'ar' ? 'تصميم وتطوير' : 'Designed & Developed by'}
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ESSAM SABBAH
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/201553993533"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://wa.me/201553993533', '_blank');
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all text-sm font-medium shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>+20 155 399 3533</span>
                </a>
                <a
                  href="mailto:essam.fathi.sabbah@gmail.com"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = 'mailto:essam.fathi.sabbah@gmail.com';
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              © 2025 DataForge Pro. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// App with Provider
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
