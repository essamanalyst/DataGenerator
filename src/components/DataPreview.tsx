import { useState } from 'react';
import { Edit2, Check, X, Trash2, ChevronLeft, ChevronRight, Eye, Table, Search, Filter } from 'lucide-react';
import { GeneratedData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DataPreviewProps {
  data: GeneratedData[];
  onUpdateRow: (index: number, row: GeneratedData) => void;
  onDeleteRow: (index: number) => void;
}

export function DataPreview({ data, onUpdateRow, onDeleteRow }: DataPreviewProps) {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const [editingCell, setEditingCell] = useState<{ row: number; col: string } | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const pageSize = 20;
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = page * pageSize;
  const visibleData = data.slice(startIndex, startIndex + pageSize);
  
  if (data.length === 0) return null;

  const columns = Object.keys(data[0]);

  const handleEditStart = (rowIndex: number, col: string, value: unknown) => {
    setEditingCell({ row: startIndex + rowIndex, col });
    setEditValue(String(value));
  };

  const handleEditSave = () => {
    if (!editingCell) return;
    const row = { ...data[editingCell.row] };
    const originalValue = row[editingCell.col];
    
    if (typeof originalValue === 'number') {
      row[editingCell.col] = parseFloat(editValue) || 0;
    } else if (typeof originalValue === 'boolean') {
      row[editingCell.col] = editValue.toLowerCase() === 'true';
    } else {
      row[editingCell.col] = editValue;
    }
    
    onUpdateRow(editingCell.row, row);
    setEditingCell(null);
  };

  const handleEditCancel = () => {
    setEditingCell(null);
    setEditValue('');
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100">
      {/* Header */}
      <div className="relative p-5 border-b border-gray-100 bg-gradient-to-r from-slate-50 via-gray-50 to-indigo-50/30">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{t('preview.title')}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-bold">
                  <Table className="w-3 h-3" />
                  {data.length.toLocaleString()} {t('preview.records')}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-medium">
                  {columns.length} أعمدة
                </span>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="بحث..."
                className="w-48 pr-10 pl-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
              />
            </div>
            <button className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
        
        <p className="mt-3 text-sm text-gray-500 flex items-center gap-2">
          <Edit2 className="w-4 h-4 text-indigo-400" />
          {t('preview.editHint')}
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full table-modern">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-indigo-50/50">
              <th className="px-4 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-start border-b border-gray-100">
                #
              </th>
              {columns.map(col => (
                <th key={col} className="px-4 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-start border-b border-gray-100">
                  {col}
                </th>
              ))}
              <th className="px-4 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                {t('preview.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {visibleData.map((row, rowIndex) => (
              <tr 
                key={startIndex + rowIndex} 
                className="group hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/30 transition-all duration-300"
              >
                <td className="px-4 py-4 text-sm text-gray-400 font-mono">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg text-xs font-bold group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                    {(startIndex + rowIndex + 1).toLocaleString()}
                  </span>
                </td>
                {columns.map(col => {
                  const isEditing = editingCell?.row === startIndex + rowIndex && editingCell?.col === col;
                  const value = row[col];
                  
                  return (
                    <td key={col} className="px-4 py-4 text-sm">
                      {isEditing ? (
                        <div className="flex items-center gap-2 min-w-[200px]">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-indigo-400 rounded-lg focus:ring-4 focus:ring-indigo-100 text-sm font-medium"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleEditSave();
                              if (e.key === 'Escape') handleEditCancel();
                            }}
                          />
                          <button
                            onClick={handleEditSave}
                            className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => handleEditStart(rowIndex, col, value)}
                          className="cursor-pointer px-3 py-2 rounded-lg hover:bg-indigo-100/50 transition-all duration-200 group/cell flex items-center justify-between gap-2"
                        >
                          <span className="truncate max-w-[200px] text-gray-700" title={String(value)}>
                            {typeof value === 'boolean' ? (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${value ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {value ? '✓ نعم' : '✗ لا'}
                              </span>
                            ) : (
                              String(value)
                            )}
                          </span>
                          <Edit2 className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover/cell:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </td>
                  );
                })}
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => onDeleteRow(startIndex + rowIndex)}
                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title={t('common.delete')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-indigo-50/30 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">{t('preview.showing')}</span>{' '}
            <span className="font-bold text-indigo-600">{startIndex + 1}</span>
            {' - '}
            <span className="font-bold text-indigo-600">{Math.min(startIndex + pageSize, data.length)}</span>
            {' '}{t('preview.of')}{' '}
            <span className="font-bold text-gray-700">{data.length.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2.5 rounded-xl bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 shadow-sm">
              {page + 1} / {totalPages}
            </div>
            
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-2.5 rounded-xl bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
