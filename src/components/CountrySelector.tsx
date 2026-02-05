import { Globe, MapPin } from 'lucide-react';
import { countriesData } from '../data/countriesData';
import { useLanguage } from '../context/LanguageContext';

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

export function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const { t, language } = useLanguage();
  const countries = Object.values(countriesData);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-indigo-500" />
        <h3 className="text-lg font-bold text-gray-800">{t('country.title')}</h3>
      </div>
      
      <div className="space-y-3">
        <div className="text-sm text-gray-500 mb-3">
          {t('country.description')}
        </div>
        
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
        >
          <option value="all">{t('country.all')}</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {language === 'ar' ? country.nameAr : country.nameEn}
            </option>
          ))}
        </select>
        
        {/* Countries Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {countries.slice(0, 6).map((country) => (
            <div 
              key={country.code}
              className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg text-xs"
            >
              <MapPin className="w-3 h-3 text-indigo-500" />
              <span className="text-gray-600">
                {language === 'ar' ? country.nameAr : country.nameEn}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-xs text-gray-400 mt-2 text-center">
          + {countries.length - 6} {t('country.moreCountries')}
        </div>
      </div>
      
      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-center">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <div className="text-lg font-bold text-indigo-600">{countries.length}</div>
          <div className="text-xs text-gray-500">{t('country.arabCountries')}</div>
        </div>
        <div className="p-2 bg-purple-50 rounded-lg">
          <div className="text-lg font-bold text-purple-600">
            {countries.reduce((acc, c) => acc + c.cities.length, 0)}
          </div>
          <div className="text-xs text-gray-500">{t('country.realCities')}</div>
        </div>
      </div>
    </div>
  );
}
