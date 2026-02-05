import { useState } from 'react';
import { Settings, Shuffle, Save, Upload, Download, RefreshCw, Copy, Check, Info } from 'lucide-react';
import { FieldConfig } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AdvancedFeaturesProps {
  fields: FieldConfig[];
  onImportSchema: (fields: FieldConfig[]) => void;
  seed?: number;
  onSeedChange: (seed: number | undefined) => void;
}

export function AdvancedFeatures({ fields, onImportSchema, seed, onSeedChange }: AdvancedFeaturesProps) {
  const { t } = useLanguage();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);

  const handleExportSchema = () => {
    const schema = JSON.stringify(fields, null, 2);
    const blob = new Blob([schema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data_schema.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(fields, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  const handleImportSchema = () => {
    try {
      const parsed = JSON.parse(importText);
      if (Array.isArray(parsed)) {
        onImportSchema(parsed.map(f => ({ ...f, id: crypto.randomUUID() })));
        setShowImport(false);
        setImportText('');
      }
    } catch {
      alert(t('common.invalidJson'));
    }
  };

  const handleRandomSeed = () => {
    onSeedChange(Math.floor(Math.random() * 1000000));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-indigo-500" />
          <h3 className="font-bold text-gray-800">{t('advanced.title')}</h3>
        </div>
        <div className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {showAdvanced && (
        <div className="p-4 pt-0 space-y-4">
          {/* Seed Control */}
          <div className="p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Shuffle className="w-4 h-4 text-indigo-500" />
                {t('advanced.seed')}
              </label>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleRandomSeed}
                  className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  title="Generate random seed"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSeedChange(undefined)}
                  className="px-2 py-1 text-xs text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {t('advanced.clear')}
                </button>
              </div>
            </div>
            <input
              type="number"
              value={seed ?? ''}
              onChange={e => onSeedChange(e.target.value ? parseInt(e.target.value) : undefined)}
              placeholder={t('advanced.seedPlaceholder')}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
            <p className="mt-1 text-xs text-gray-500 flex items-start gap-1">
              <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
              {t('advanced.seedHint')}
            </p>
          </div>

          {/* Schema Management */}
          <div className="p-3 bg-gray-50 rounded-xl">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Save className="w-4 h-4 text-indigo-500" />
              {t('advanced.schema')}
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleExportSchema}
                disabled={fields.length === 0}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {t('advanced.export')}
              </button>
              <button
                onClick={handleCopySchema}
                disabled={fields.length === 0}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm disabled:opacity-50"
              >
                {copiedSchema ? (
                  <>
                    <Check className="w-4 h-4" />
                    {t('advanced.copied')}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t('advanced.copy')}
                  </>
                )}
              </button>
              <button
                onClick={() => setShowImport(!showImport)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
              >
                <Upload className="w-4 h-4" />
                {t('advanced.import')}
              </button>
            </div>

            {showImport && (
              <div className="mt-3 space-y-2">
                <textarea
                  value={importText}
                  onChange={e => setImportText(e.target.value)}
                  placeholder={t('advanced.importPlaceholder')}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-24 resize-none font-mono"
                  dir="ltr"
                />
                <button
                  onClick={handleImportSchema}
                  disabled={!importText}
                  className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm disabled:opacity-50"
                >
                  {t('advanced.applySchema')}
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          {fields.length > 0 && (
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <div className="text-lg font-bold text-indigo-600">{fields.length}</div>
                <div className="text-xs text-gray-500">{t('schema.fields')}</div>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-600">
                  {fields.filter(f => f.type.includes('arabic') || f.type.includes('Arabic')).length}
                </div>
                <div className="text-xs text-gray-500">{t('advanced.arabic')}</div>
              </div>
              <div className="p-2 bg-pink-50 rounded-lg">
                <div className="text-lg font-bold text-pink-600">
                  {fields.filter(f => !f.type.includes('arabic') && !f.type.includes('Arabic')).length}
                </div>
                <div className="text-xs text-gray-500">{t('advanced.english')}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
