import { saveAs } from 'file-saver';
import { GeneratedData, ExportFormat } from '../types';

export const exportToJSON = (data: GeneratedData[], filename: string = 'data') => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
  saveAs(blob, `${filename}.json`);
};

export const exportToCSV = (data: GeneratedData[], filename: string = 'data') => {
  if (data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(','),
    ...data.map(row =>
      headers.map(header => {
        const value = row[header];
        if (typeof value === 'string') {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(',')
    )
  ];

  const csvString = csvRows.join('\n');
  const blob = new Blob(['\ufeff' + csvString], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, `${filename}.csv`);
};

export const exportToSQL = (
  data: GeneratedData[],
  tableName: string = 'generated_data',
  filename: string = 'data'
) => {
  if (data.length === 0) return;

  const headers = Object.keys(data[0]);
  
  // Create table statement
  const createTable = `CREATE TABLE IF NOT EXISTS ${tableName} (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  ${headers
    .map(h => {
      const sampleValue = data[0][h];
      let sqlType = 'VARCHAR(255)';
      if (typeof sampleValue === 'number') {
        sqlType = Number.isInteger(sampleValue) ? 'INT' : 'DECIMAL(10,2)';
      } else if (typeof sampleValue === 'boolean') {
        sqlType = 'BOOLEAN';
      }
      return `${h} ${sqlType}`;
    })
    .join(',\n  ')}\n);\n\n`;

  // Insert statements
  const insertStatements = data.map(row => {
    const values = headers.map(header => {
      const value = row[header];
      if (typeof value === 'string') {
        return `'${value.replace(/'/g, "''")}'`;
      }
      if (typeof value === 'boolean') {
        return value ? 'TRUE' : 'FALSE';
      }
      return value;
    });
    return `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${values.join(', ')});`;
  });

  const sqlString = createTable + insertStatements.join('\n');
  const blob = new Blob([sqlString], { type: 'text/sql;charset=utf-8' });
  saveAs(blob, `${filename}.sql`);
};

export const exportToXML = (data: GeneratedData[], rootName: string = 'data', filename: string = 'data') => {
  if (data.length === 0) return;

  const xmlRows = data.map(row => {
    const fields = Object.entries(row)
      .map(([key, value]) => `    <${key}>${escapeXml(String(value))}</${key}>`)
      .join('\n');
    return `  <record>\n${fields}\n  </record>`;
  });

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootName}>\n${xmlRows.join('\n')}\n</${rootName}>`;
  const blob = new Blob([xmlString], { type: 'application/xml;charset=utf-8' });
  saveAs(blob, `${filename}.xml`);
};

const escapeXml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

export const exportData = (
  data: GeneratedData[],
  format: ExportFormat,
  filename: string = 'data',
  tableName: string = 'generated_data'
) => {
  switch (format) {
    case 'json':
      exportToJSON(data, filename);
      break;
    case 'csv':
      exportToCSV(data, filename);
      break;
    case 'sql':
      exportToSQL(data, tableName, filename);
      break;
    case 'xml':
      exportToXML(data, 'data', filename);
      break;
  }
};
