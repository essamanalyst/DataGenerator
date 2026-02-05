import { Database, Layers, Clock, HardDrive, Sparkles } from 'lucide-react';
import { FieldConfig, GeneratedData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface StatsPanelProps {
  data: GeneratedData[];
  fields: FieldConfig[];
  generationTime: number;
}

export function StatsPanel({ data, fields, generationTime }: StatsPanelProps) {
  const { t, language } = useLanguage();

  const estimatedSize = () => {
    const jsonStr = JSON.stringify(data.slice(0, 10));
    const avgRecordSize = jsonStr.length / Math.min(10, data.length);
    const totalBytes = avgRecordSize * data.length;
    
    if (totalBytes >= 1073741824) return `${(totalBytes / 1073741824).toFixed(2)} GB`;
    if (totalBytes >= 1048576) return `${(totalBytes / 1048576).toFixed(2)} MB`;
    if (totalBytes >= 1024) return `${(totalBytes / 1024).toFixed(2)} KB`;
    return `${totalBytes.toFixed(0)} B`;
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${ms.toFixed(0)} ms`;
    return `${(ms / 1000).toFixed(2)} s`;
  };

  const recordsPerSecond = generationTime > 0 ? Math.round((data.length / generationTime) * 1000) : 0;

  const stats = [
    {
      icon: Database,
      label: t('stats.totalRecords'),
      value: data.length.toLocaleString(),
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Layers,
      label: t('stats.fieldsCount'),
      value: fields.length.toString(),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      label: t('stats.generationTime'),
      value: formatTime(generationTime),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: HardDrive,
      label: t('stats.dataSize'),
      value: estimatedSize(),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">
              {language === 'ar' ? 'إحصائيات التوليد' : 'Generation Stats'}
            </h3>
            <p className="text-sm text-gray-500">
              {language === 'ar' ? 'تم التوليد بنجاح' : 'Successfully generated'}
            </p>
          </div>
        </div>
        
        {recordsPerSecond > 1000 && (
          <div className="badge badge-success flex items-center gap-1">
            <span>⚡</span>
            <span>{recordsPerSecond.toLocaleString()} {language === 'ar' ? 'سجل/ث' : 'rec/s'}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-xl p-4 border border-gray-100`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
