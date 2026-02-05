import { Globe, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectorProps {
  selectedLanguage: 'ar' | 'en' | 'mixed';
  onLanguageChange: (language: 'ar' | 'en' | 'mixed') => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const { t } = useLanguage();
  
  const languages = [
    { id: 'ar' as const, label: t('language.ar'), flag: '🇸🇦', description: t('language.arDesc') },
    { id: 'en' as const, label: t('language.en'), flag: '🇺🇸', description: t('language.enDesc') },
    { id: 'mixed' as const, label: t('language.mixed'), flag: '🌍', description: t('language.mixedDesc') },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Languages className="w-5 h-5 text-indigo-500" />
        <h3 className="text-lg font-bold text-gray-800">{t('language.title')}</h3>
      </div>

      <div className="space-y-2">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onLanguageChange(lang.id)}
            className={`w-full p-3 rounded-xl transition-all flex items-center gap-3 ${
              selectedLanguage === lang.id
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <div className="flex-1 text-start">
              <div className="font-bold">{lang.label}</div>
              <div className={`text-xs ${selectedLanguage === lang.id ? 'text-white/80' : 'text-gray-500'}`}>
                {lang.description}
              </div>
            </div>
            {selectedLanguage === lang.id && (
              <div className="w-3 h-3 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <div className="flex items-start gap-2">
          <Globe className="w-4 h-4 text-indigo-500 mt-0.5" />
          <div className="text-xs text-gray-600">
            <strong>{t('language.note')}</strong> {t('language.noteText')}
          </div>
        </div>
      </div>
    </div>
  );
}
