import { Zap, Loader2, Sparkles, Rocket, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GeneratorControlsProps {
  count: number;
  onCountChange: (count: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  progress: number;
  disabled: boolean;
}

const presetCounts = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];

export function GeneratorControls({
  count,
  onCountChange,
  onGenerate,
  isGenerating,
  progress,
  disabled,
}: GeneratorControlsProps) {
  const { t, language } = useLanguage();

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="card-elevated p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{t('generator.title')}</h3>
          <p className="text-sm text-gray-500">{t('generator.count')}</p>
        </div>
      </div>

      {/* Count Input */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="number"
            value={count}
            onChange={(e) => onCountChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="input input-lg text-center text-2xl font-bold text-indigo-600"
            min={1}
            max={50000000}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {language === 'ar' ? 'سجل' : 'records'}
          </span>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {presetCounts.slice(0, 8).map((preset) => (
          <button
            key={preset}
            onClick={() => onCountChange(preset)}
            className={`py-2 px-1 rounded-lg text-sm font-semibold transition-all ${
              count === preset
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {formatNumber(preset)}
          </button>
        ))}
      </div>

      {/* Infinity Badge */}
      <div className="flex items-center justify-center gap-2 mb-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
        <Rocket className="w-4 h-4 text-amber-600" />
        <span className="text-sm text-amber-700">
          {t('generator.infinityText')} <span className="font-bold">{t('generator.infinityCount')}</span> {t('generator.infinityEnd')}
        </span>
      </div>

      {/* Warning for large counts */}
      {count > 100000 && (
        <div className="flex items-start gap-2 mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-700">
            <span className="font-bold">{t('generator.warning')}</span> {t('generator.warningText').replace('{count}', count.toLocaleString())}
          </p>
        </div>
      )}

      {/* Progress Bar */}
      {isGenerating && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              {t('generator.generating')}
            </span>
            <span className="font-bold text-indigo-600">{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        disabled={disabled || isGenerating}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
          disabled || isGenerating
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('generator.buttonGenerating')}
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            {t('generator.button')}
          </>
        )}
      </button>
    </div>
  );
}
