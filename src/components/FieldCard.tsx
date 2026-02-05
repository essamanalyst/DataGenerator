import { Trash2, GripVertical, ChevronDown, ChevronUp, Settings, Tag, BarChart3 } from 'lucide-react';
import { FieldConfig, FieldType } from '../types';
import { fieldTypeOptions, categoryLabels, categoryLabelsEn } from '../data/fieldTypes';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import DistributionSelector from './DistributionSelector';
import { DistributionParams } from '../utils/distributions';

interface FieldCardProps {
  field: FieldConfig;
  onUpdate: (id: string, updates: Partial<FieldConfig>) => void;
  onRemove: (id: string) => void;
}

export function FieldCard({ field, onUpdate, onRemove }: FieldCardProps) {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedType = fieldTypeOptions.find(f => f.value === field.type);

  const groupedOptions = fieldTypeOptions.reduce((acc, option) => {
    if (!acc[option.category]) {
      acc[option.category] = [];
    }
    acc[option.category].push(option);
    return acc;
  }, {} as Record<string, typeof fieldTypeOptions>);

  const needsNumberOptions = ['number', 'decimal', 'age', 'price', 'salary', 'height', 'weight', 'percentage'].includes(field.type);

  const getLanguageBadge = () => {
    if (selectedType?.language === 'ar') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-medium">
          <span>🇸🇦</span>
          {language === 'ar' ? 'عربي' : 'Arabic'}
        </span>
      );
    } else if (selectedType?.language === 'en') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-medium">
          <span>🇺🇸</span>
          English
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 rounded-full text-xs font-medium">
        <span>🌍</span>
        {language === 'ar' ? 'مختلط' : 'Mixed'}
      </span>
    );
  };

  const labels = language === 'ar' ? categoryLabels : categoryLabelsEn;

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Drag Handle */}
          <div className="text-gray-300 cursor-move opacity-0 group-hover:opacity-100 transition-opacity pt-2">
            <GripVertical className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-4">
            {/* Main Row */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Field Name Input */}
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {t('field.name')}
                </label>
                <input
                  type="text"
                  value={field.name}
                  onChange={(e) => onUpdate(field.id, { name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all duration-300 text-sm font-medium"
                  placeholder={t('field.namePlaceholder')}
                  dir="auto"
                />
              </div>

              {/* Field Type Select */}
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <Settings className="w-3 h-3" />
                  {t('field.type')}
                </label>
                <div className="relative">
                  <select
                    value={field.type}
                    onChange={(e) => onUpdate(field.id, { type: e.target.value as FieldType })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all duration-300 text-sm appearance-none select-modern font-medium"
                  >
                    {Object.entries(groupedOptions).map(([category, options]) => (
                      <optgroup key={category} label={labels[category]}>
                        {options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.icon} {language === 'ar' ? option.label : option.labelEn}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
                    {selectedType?.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Type Info & Expand Button */}
            <div className="flex items-center gap-3 flex-wrap">
              {getLanguageBadge()}
              {selectedType && (
                <span className="text-xs text-gray-400 flex-1">{selectedType.description}</span>
              )}
              
              {/* Show Distribution Badge for Numeric Fields */}
              {needsNumberOptions && field.options?.distribution && field.options.distribution.type !== 'uniform' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold border border-purple-200 shadow-sm">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {language === 'ar' 
                    ? field.options.distribution.type === 'normal' ? 'توزيع طبيعي'
                      : field.options.distribution.type === 'exponential' ? 'توزيع أسي'
                      : field.options.distribution.type === 'poisson' ? 'توزيع بواسون'
                      : field.options.distribution.type === 'binomial' ? 'ثنائي الحد'
                      : field.options.distribution.type
                    : field.options.distribution.type}
                </span>
              )}
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  needsNumberOptions 
                    ? 'text-purple-600 hover:text-purple-700 hover:bg-purple-50 border border-purple-200' 
                    : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                {needsNumberOptions && <BarChart3 className="w-3.5 h-3.5" />}
                <Settings className="w-3.5 h-3.5" />
                {isExpanded ? t('field.hideOptions') : (needsNumberOptions ? (language === 'ar' ? 'التوزيع والخيارات' : 'Distribution & Options') : t('field.moreOptions'))}
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Expanded Options Panel */}
            {isExpanded && (
              <div className="p-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-xl border border-gray-100 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Number Options */}
                {needsNumberOptions && (
                  <div className="flex gap-4 flex-wrap">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">{t('field.min')}</label>
                      <input
                        type="number"
                        value={field.options?.min ?? 0}
                        onChange={(e) => onUpdate(field.id, {
                          options: { ...field.options, min: parseInt(e.target.value) || 0 }
                        })}
                        className="w-28 px-3 py-2 border-2 border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">{t('field.max')}</label>
                      <input
                        type="number"
                        value={field.options?.max ?? 100}
                        onChange={(e) => onUpdate(field.id, {
                          options: { ...field.options, max: parseInt(e.target.value) || 100 }
                        })}
                        className="w-28 px-3 py-2 border-2 border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                      />
                    </div>
                    {field.type === 'decimal' && (
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">{t('field.decimals')}</label>
                        <input
                          type="number"
                          value={field.options?.decimals ?? 2}
                          min={0}
                          max={10}
                          onChange={(e) => onUpdate(field.id, {
                            options: { ...field.options, decimals: parseInt(e.target.value) || 2 }
                          })}
                          className="w-24 px-3 py-2 border-2 border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Distribution Selector for Numeric Fields */}
                {needsNumberOptions && (
                  <div className="pt-4 border-t-2 border-indigo-100 mt-4">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-200">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-base font-bold text-gray-800 block">
                            {language === 'ar' ? '📊 توزيع البيانات الإحصائي' : '📊 Statistical Data Distribution'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {language === 'ar' ? 'اختر طريقة توزيع القيم الرقمية' : 'Choose how numeric values are distributed'}
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-bold">
                        {language === 'ar' ? '15 نوع توزيع' : '15 Distributions'}
                      </span>
                    </div>
                    <DistributionSelector
                      value={field.options?.distribution ?? { type: 'uniform' }}
                      onChange={(distribution: DistributionParams) => onUpdate(field.id, {
                        options: { ...field.options, distribution }
                      })}
                      fieldMin={field.options?.min ?? 0}
                      fieldMax={field.options?.max ?? 100}
                    />
                  </div>
                )}

                {/* Advanced Options */}
                <div className="flex gap-6 flex-wrap items-center">
                  <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer group/check">
                    <input
                      type="checkbox"
                      checked={field.options?.unique ?? false}
                      onChange={(e) => onUpdate(field.id, {
                        options: { ...field.options, unique: e.target.checked }
                      })}
                      className="checkbox-modern"
                    />
                    <span className="group-hover/check:text-indigo-600 transition-colors">{t('field.unique')}</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer group/check">
                    <input
                      type="checkbox"
                      checked={field.options?.nullable ?? false}
                      onChange={(e) => onUpdate(field.id, {
                        options: { ...field.options, nullable: e.target.checked, nullProbability: 0.1 }
                      })}
                      className="checkbox-modern"
                    />
                    <span className="group-hover/check:text-indigo-600 transition-colors">{t('field.nullable')}</span>
                  </label>

                  {field.options?.nullable && (
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-500">{t('field.nullPercent')}:</label>
                      <input
                        type="number"
                        value={Math.round((field.options?.nullProbability ?? 0.1) * 100)}
                        min={1}
                        max={50}
                        onChange={(e) => onUpdate(field.id, {
                          options: { ...field.options, nullProbability: (parseInt(e.target.value) || 10) / 100 }
                        })}
                        className="w-16 px-2 py-1 border-2 border-gray-100 rounded-lg text-sm text-center"
                      />
                      <span className="text-xs text-gray-400">%</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Delete Button */}
          <button
            onClick={() => onRemove(field.id)}
            className="p-2.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            title={t('field.delete')}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
