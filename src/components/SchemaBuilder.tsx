import { Plus, Layers, Trash2, Sparkles } from 'lucide-react';
import { FieldConfig } from '../types';
import { FieldCard } from './FieldCard';
import { useLanguage } from '../context/LanguageContext';
import { templates } from '../data/templates';

interface SchemaBuilderProps {
  fields: FieldConfig[];
  onAddField: () => void;
  onUpdateField: (id: string, updates: Partial<FieldConfig>) => void;
  onRemoveField: (id: string) => void;
  onLoadPreset: (presetId: string) => void;
}

export function SchemaBuilder({
  fields,
  onAddField,
  onUpdateField,
  onRemoveField,
}: SchemaBuilderProps) {
  const { t, language } = useLanguage();

  const handleDeleteAll = () => {
    if (confirm(t('common.confirmDelete'))) {
      fields.forEach(f => onRemoveField(f.id));
    }
  };

  return (
    <div className="card-elevated p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{t('schema.title')}</h3>
            <p className="text-sm text-gray-500">
              {t('schema.subtitle').replace('{count}', templates.length.toString())}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {fields.length > 0 && (
            <span className="badge badge-primary">
              {fields.length} {t('schema.fields')}
            </span>
          )}
          {fields.length > 1 && (
            <button
              onClick={handleDeleteAll}
              className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t('common.deleteAll')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Smart Data Indicator */}
      <div className="flex items-center gap-2 mb-6 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <span className="text-sm font-medium text-emerald-700">
          {t('schema.smartData')} - {language === 'ar' ? '🇸🇦 عربي' : '🇺🇸 English'}
        </span>
      </div>

      {/* Fields List */}
      {fields.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Layers className="w-8 h-8 text-gray-400" />
          </div>
          <h4 className="font-bold text-gray-700 mb-2">{t('schema.noFields')}</h4>
          <p className="text-sm text-gray-500 mb-6">{t('schema.noFieldsHint')}</p>
          <button
            onClick={onAddField}
            className="btn btn-primary"
          >
            <Plus className="w-5 h-5" />
            {t('schema.addField')}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {fields.map((field) => (
            <FieldCard
              key={field.id}
              field={field}
              onUpdate={(id, updates) => onUpdateField(id, updates)}
              onRemove={(id) => onRemoveField(id)}
            />
          ))}
        </div>
      )}

      {/* Add Field Button */}
      {fields.length > 0 && (
        <button
          onClick={onAddField}
          className="w-full mt-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-semibold hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          {t('schema.addField')}
        </button>
      )}
    </div>
  );
}
