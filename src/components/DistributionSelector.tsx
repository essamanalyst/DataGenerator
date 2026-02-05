import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  DistributionType, 
  DistributionParams, 
  distributionsList,
  generateDistributionPreview,
  calculateDistributionStats
} from '../utils/distributions';

interface DistributionSelectorProps {
  value: DistributionParams;
  onChange: (params: DistributionParams) => void;
  fieldMin?: number;
  fieldMax?: number;
}

const DistributionChart: React.FC<{ 
  data: { x: number; y: number }[];
  color: string;
}> = ({ data, color }) => {
  const maxY = Math.max(...data.map(d => d.y));
  const height = 120;
  const width = 100;
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (d.y / maxY) * height;
    return `${x},${y}`;
  }).join(' ');
  
  const areaPoints = `0,${height} ${points} ${width},${height}`;
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className={`text-${color.split('-')[1]}-500`} style={{ stopColor: 'currentColor', stopOpacity: 0.8 }} />
          <stop offset="100%" className={`text-${color.split('-')[1]}-500`} style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(y => (
        <line 
          key={y}
          x1="0" 
          y1={height * y} 
          x2={width} 
          y2={height * y}
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeDasharray="2,2"
        />
      ))}
      
      {/* Area fill */}
      <polygon
        points={areaPoints}
        className={`fill-current text-blue-500 opacity-30`}
      />
      
      {/* Line */}
      <polyline
        points={points}
        fill="none"
        className={`stroke-current text-blue-500`}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

const DistributionSelector: React.FC<DistributionSelectorProps> = ({
  value,
  onChange,
  fieldMin = 0,
  fieldMax = 100
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  const [isOpen, setIsOpen] = useState(false);
  const [previewData, setPreviewData] = useState<{ x: number; y: number }[]>([]);
  const [stats, setStats] = useState<ReturnType<typeof calculateDistributionStats> | null>(null);
  
  const selectedDist = distributionsList.find(d => d.id === value.type) || distributionsList[0];
  
  // Update preview when distribution changes
  useEffect(() => {
    const params = { ...value, min: fieldMin, max: fieldMax };
    const data = generateDistributionPreview(params, 2000, 40);
    setPreviewData(data);
    const calcStats = calculateDistributionStats(params, 5000);
    setStats(calcStats);
  }, [value, fieldMin, fieldMax]);
  
  const handleTypeChange = (type: DistributionType) => {
    const newParams: DistributionParams = { 
      type,
      min: fieldMin,
      max: fieldMax
    };
    
    // Set default params based on type
    switch (type) {
      case 'normal':
        newParams.mean = (fieldMin + fieldMax) / 2;
        newParams.stdDev = (fieldMax - fieldMin) / 6;
        break;
      case 'exponential':
      case 'poisson':
        newParams.lambda = 1;
        break;
      case 'binomial':
        newParams.n = 10;
        newParams.p = 0.5;
        break;
      case 'beta':
        newParams.alpha = 2;
        newParams.beta = 5;
        break;
      case 'gamma':
      case 'weibull':
        newParams.shape = 2;
        newParams.scale = 1;
        break;
      case 'pareto':
        newParams.alpha = 2;
        break;
      case 'triangular':
        newParams.mode = (fieldMin + fieldMax) / 2;
        break;
    }
    
    onChange(newParams);
    setIsOpen(false);
  };
  
  const handleParamChange = (param: string, val: number) => {
    onChange({ ...value, [param]: val });
  };
  
  const renderParamInputs = () => {
    const inputs: React.ReactNode[] = [];
    
    if (value.type === 'normal' || value.type === 'logNormal' || 
        value.type === 'bimodal' || value.type === 'skewedLeft' || value.type === 'skewedRight') {
      inputs.push(
        <div key="mean" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'المتوسط (μ)' : 'Mean (μ)'}
          </label>
          <input
            type="number"
            value={value.mean ?? (fieldMin + fieldMax) / 2}
            onChange={e => handleParamChange('mean', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
      inputs.push(
        <div key="stdDev" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'الانحراف المعياري (σ)' : 'Std Dev (σ)'}
          </label>
          <input
            type="number"
            value={value.stdDev ?? (fieldMax - fieldMin) / 6}
            onChange={e => handleParamChange('stdDev', parseFloat(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'exponential' || value.type === 'poisson') {
      inputs.push(
        <div key="lambda" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'معامل λ (لامدا)' : 'Lambda (λ)'}
          </label>
          <input
            type="number"
            step="0.1"
            min="0.1"
            value={value.lambda ?? 1}
            onChange={e => handleParamChange('lambda', parseFloat(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'binomial') {
      inputs.push(
        <div key="n" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'عدد التجارب (n)' : 'Trials (n)'}
          </label>
          <input
            type="number"
            min="1"
            value={value.n ?? 10}
            onChange={e => handleParamChange('n', parseInt(e.target.value) || 10)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
      inputs.push(
        <div key="p" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'احتمال النجاح (p)' : 'Success Prob (p)'}
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="1"
            value={value.p ?? 0.5}
            onChange={e => handleParamChange('p', parseFloat(e.target.value) || 0.5)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'beta') {
      inputs.push(
        <div key="alpha" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'ألفا (α)' : 'Alpha (α)'}
          </label>
          <input
            type="number"
            step="0.5"
            min="0.1"
            value={value.alpha ?? 2}
            onChange={e => handleParamChange('alpha', parseFloat(e.target.value) || 2)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
      inputs.push(
        <div key="beta" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'بيتا (β)' : 'Beta (β)'}
          </label>
          <input
            type="number"
            step="0.5"
            min="0.1"
            value={value.beta ?? 5}
            onChange={e => handleParamChange('beta', parseFloat(e.target.value) || 5)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'gamma' || value.type === 'weibull') {
      inputs.push(
        <div key="shape" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'الشكل (k)' : 'Shape (k)'}
          </label>
          <input
            type="number"
            step="0.5"
            min="0.1"
            value={value.shape ?? 2}
            onChange={e => handleParamChange('shape', parseFloat(e.target.value) || 2)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
      inputs.push(
        <div key="scale" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'المقياس (θ)' : 'Scale (θ)'}
          </label>
          <input
            type="number"
            step="0.5"
            min="0.1"
            value={value.scale ?? 1}
            onChange={e => handleParamChange('scale', parseFloat(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'pareto') {
      inputs.push(
        <div key="alpha" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'ألفا (α) - شكل التوزيع' : 'Alpha (α) - Shape'}
          </label>
          <input
            type="number"
            step="0.5"
            min="0.1"
            value={value.alpha ?? 2}
            onChange={e => handleParamChange('alpha', parseFloat(e.target.value) || 2)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    if (value.type === 'triangular') {
      inputs.push(
        <div key="mode" className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            {isRTL ? 'المنوال (القيمة الأكثر تكراراً)' : 'Mode (Most Likely)'}
          </label>
          <input
            type="number"
            value={value.mode ?? (fieldMin + fieldMax) / 2}
            onChange={e => handleParamChange('mode', parseFloat(e.target.value) || 50)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      );
    }
    
    return inputs.length > 0 ? (
      <div className="flex gap-3 mt-3">
        {inputs}
      </div>
    ) : null;
  };
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-xl">📊</span>
          {isRTL ? 'توزيع البيانات' : 'Data Distribution'}
        </h4>
        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedDist.color} text-white`}>
          {isRTL ? selectedDist.nameAr : selectedDist.nameEn}
        </span>
      </div>
      
      {/* Selected Distribution Preview */}
      <div className="bg-white rounded-lg border border-gray-100 p-3 mb-3">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <DistributionChart data={previewData} color={selectedDist.color} />
          </div>
          {stats && (
            <div className="text-xs space-y-1 min-w-[120px]">
              <div className="flex justify-between">
                <span className="text-gray-500">{isRTL ? 'المتوسط:' : 'Mean:'}</span>
                <span className="font-mono font-medium">{stats.mean.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{isRTL ? 'الوسيط:' : 'Median:'}</span>
                <span className="font-mono font-medium">{stats.median.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{isRTL ? 'الانحراف:' : 'Std Dev:'}</span>
                <span className="font-mono font-medium">{stats.stdDev.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{isRTL ? 'الالتواء:' : 'Skewness:'}</span>
                <span className="font-mono font-medium">{stats.skewness.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Distribution Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selectedDist.icon}</span>
          <div className={`text-${isRTL ? 'right' : 'left'}`}>
            <div className="font-medium text-gray-800">
              {isRTL ? selectedDist.nameAr : selectedDist.nameEn}
            </div>
            <div className="text-xs text-gray-500">
              {isRTL ? selectedDist.descriptionAr : selectedDist.descriptionEn}
            </div>
          </div>
        </div>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Distribution Options Dropdown */}
      {isOpen && (
        <div className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {distributionsList.map(dist => (
              <button
                key={dist.id}
                onClick={() => handleTypeChange(dist.id)}
                className={`flex items-start gap-3 p-3 rounded-lg text-${isRTL ? 'right' : 'left'} transition-all ${
                  value.type === dist.id
                    ? `bg-gradient-to-r ${dist.color} text-white shadow-md`
                    : 'hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <span className="text-2xl">{dist.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">
                    {isRTL ? dist.nameAr : dist.nameEn}
                  </div>
                  <div className={`text-xs ${value.type === dist.id ? 'text-white/80' : 'text-gray-500'} line-clamp-2`}>
                    {isRTL ? dist.descriptionAr : dist.descriptionEn}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Parameter Inputs */}
      {renderParamInputs()}
      
      {/* Use Cases */}
      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
        <div className="text-xs font-medium text-blue-700 mb-2">
          {isRTL ? '💡 استخدامات هذا التوزيع:' : '💡 Use cases for this distribution:'}
        </div>
        <div className="flex flex-wrap gap-1">
          {(isRTL ? selectedDist.useCases.ar : selectedDist.useCases.en).map((useCase, i) => (
            <span key={i} className="px-2 py-1 bg-white text-blue-600 text-xs rounded-full border border-blue-100">
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributionSelector;
