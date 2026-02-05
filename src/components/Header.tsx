import { Database, Sparkles, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-40"></div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black text-gray-900">
                DataForge <span className="text-indigo-600">Pro</span>
              </h1>
              <p className="text-xs text-gray-500 hidden md:block">{t('app.subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Features Badges */}
            <div className="flex items-center gap-2">
              <span className="badge badge-primary">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'ar' ? 'ذكاء اصطناعي' : 'AI Powered'}
              </span>
              <span className="badge badge-success">
                <Globe className="w-3.5 h-3.5" />
                {language === 'ar' ? 'بيانات واقعية' : 'Real Data'}
              </span>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg">{language === 'ar' ? '🇺🇸' : '🇸🇦'}</span>
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl font-bold text-sm"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'ar' ? 'ذكاء اصطناعي' : 'AI Powered'}
              </span>
              <span className="badge badge-success">
                <Globe className="w-3.5 h-3.5" />
                {language === 'ar' ? 'بيانات واقعية' : 'Real Data'}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
