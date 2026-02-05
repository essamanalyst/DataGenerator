import { useState } from 'react';
import { Download, Copy, Check, FileJson, FileSpreadsheet, Database, FileCode } from 'lucide-react';
import { GeneratedData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ExportPanelProps {
  data: GeneratedData[];
}

export function ExportPanel({ data }: ExportPanelProps) {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [filename, setFilename] = useState('data');
  const [tableName, setTableName] = useState('generated_data');

  if (data.length === 0) {
    return (
      <div className="card-elevated p-6 opacity-60">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
            <Download className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <h3 className="font-bold text-gray-400">{t('export.title')}</h3>
            <p className="text-sm text-gray-400">
              {language === 'ar' ? 'ولّد بيانات أولاً' : 'Generate data first'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const downloadFile = (content: string, extension: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    downloadFile(JSON.stringify(data, null, 2), 'json', 'application/json');
  };

  const exportCSV = () => {
    if (data.length === 0) return;
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(h => {
          const value = row[h];
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(',')
      )
    ].join('\n');
    downloadFile('\ufeff' + csvContent, 'csv', 'text/csv;charset=utf-8');
  };

  const exportSQL = () => {
    if (data.length === 0) return;
    const headers = Object.keys(data[0]);
    
    const createTable = `CREATE TABLE ${tableName} (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  ${headers.map(h => `${h} VARCHAR(255)`).join(',\n  ')}\n);\n\n`;
    
    const inserts = data.map(row => {
      const values = headers.map(h => {
        const val = row[h];
        if (val === null || val === undefined) return 'NULL';
        if (typeof val === 'number') return val;
        return `'${String(val).replace(/'/g, "''")}'`;
      });
      return `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${values.join(', ')});`;
    }).join('\n');

    downloadFile(createTable + inserts, 'sql', 'text/plain');
  };

  const exportXML = () => {
    if (data.length === 0) return;
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<data>\n${data.map(row => 
      `  <record>\n${Object.entries(row).map(([k, v]) => 
        `    <${k}>${String(v).replace(/[<>&]/g, c => c === '<' ? '&lt;' : c === '>' ? '&gt;' : '&amp;')}</${k}>`
      ).join('\n')}\n  </record>`
    ).join('\n')}\n</data>`;
    downloadFile(xmlContent, 'xml', 'application/xml');
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportFormats = [
    { id: 'json', name: 'JSON', icon: FileJson, action: exportJSON, color: 'from-amber-500 to-orange-500' },
    { id: 'csv', name: 'CSV', icon: FileSpreadsheet, action: exportCSV, color: 'from-green-500 to-emerald-500' },
    { id: 'sql', name: 'SQL', icon: Database, action: exportSQL, color: 'from-blue-500 to-indigo-500' },
    { id: 'xml', name: 'XML', icon: FileCode, action: exportXML, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="card-elevated p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{t('export.title')}</h3>
          <p className="text-sm text-gray-500">
            {data.length.toLocaleString()} {t('preview.records')}
          </p>
        </div>
      </div>

      {/* Filename Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('export.filename')}</label>
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="input"
          placeholder="data"
        />
      </div>

      {/* Table Name for SQL */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('export.tableName')}</label>
        <input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          className="input"
          placeholder="generated_data"
        />
      </div>

      {/* Export Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {exportFormats.map(format => {
          const Icon = format.icon;
          return (
            <button
              key={format.id}
              onClick={format.action}
              className={`flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${format.color} text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all`}
            >
              <Icon className="w-4 h-4" />
              <span>{format.name}</span>
            </button>
          );
        })}
      </div>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
          copied
            ? 'bg-green-100 text-green-700 border-2 border-green-300'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            {t('export.copied')}
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            {t('export.copy')}
          </>
        )}
      </button>
    </div>
  );
}
