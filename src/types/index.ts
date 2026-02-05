export type FieldType =
  // Personal - شخصية
  | 'firstName'
  | 'lastName'
  | 'fullName'
  | 'arabicFirstName'
  | 'arabicLastName'
  | 'arabicFullName'
  | 'email'
  | 'arabicEmail'
  | 'phone'
  | 'arabicPhone'
  | 'address'
  | 'arabicAddress'
  | 'city'
  | 'arabicCity'
  | 'country'
  | 'arabicCountry'
  | 'zipCode'
  | 'age'
  | 'gender'
  | 'arabicGender'
  | 'uuid'
  | 'username'
  | 'arabicUsername'
  | 'password'
  | 'nationalId'
  | 'avatar'

  // Business - أعمال
  | 'company'
  | 'arabicCompany'
  | 'jobTitle'
  | 'arabicJobTitle'
  | 'department'
  | 'arabicDepartment'
  
  // Education - تعليم
  | 'university'
  | 'arabicUniversity'
  | 'major'
  | 'arabicMajor'
  | 'educationLevel'
  | 'arabicEducationLevel'
  | 'gpa'
  | 'arabicGrade'
  
  // Medical - طبية
  | 'bloodType'
  | 'medicalCondition'
  | 'medication'
  | 'hospital'
  | 'arabicHospital'
  | 'medicalSpecialty'
  | 'height'
  | 'weight'
  | 'bmi'

  // Finance - مالية
  | 'creditCard'
  | 'price'
  | 'arabicPrice'
  | 'currency'
  | 'arabicCurrency'
  | 'accountNumber'
  | 'iban'
  | 'bankName'
  | 'arabicBankName'
  | 'salary'
  | 'arabicSalary'
  
  // E-commerce - تجارة
  | 'productName'
  | 'arabicProductName'
  | 'productCategory'
  | 'arabicProductCategory'
  | 'color'
  | 'arabicColor'
  | 'sku'
  | 'barcode'

  // Internet - إنترنت
  | 'website'
  | 'arabicWebsite'
  | 'ipAddress'
  | 'macAddress'
  | 'image'
  | 'socialMedia'

  // Date & Time - تاريخ ووقت
  | 'date'
  | 'dateTime'
  | 'birthDate'
  | 'futureDate'
  | 'time'
  | 'hijriDate'

  // Text - نصوص
  | 'sentence'
  | 'arabicSentence'
  | 'paragraph'
  | 'arabicParagraph'
  | 'loremIpsum'

  // Numbers - أرقام
  | 'number'
  | 'decimal'
  | 'percentage'
  | 'boolean'
  | 'latitude'
  | 'longitude'
  | 'coordinates'

  // Research - أبحاث
  | 'sampleId'
  | 'experimentId'
  | 'surveyResponse'
  | 'likertScale'
  | 'rating'
  | 'correlation'
  | 'pValue'
  | 'standardDeviation';

import { DistributionParams } from '../utils/distributions';

export interface FieldConfig {
  id: string;
  name: string;
  type: FieldType;
  language: 'ar' | 'en' | 'mixed';
  options?: {
    min?: number;
    max?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    nullable?: boolean;
    nullProbability?: number;
    unique?: boolean;
    customValues?: string[];
    distribution?: DistributionParams;
  };
}

export interface DataSchema {
  id: string;
  name: string;
  fields: FieldConfig[];
}

export interface GeneratedData {
  [key: string]: string | number | boolean | null;
}

export type ExportFormat = 'json' | 'csv' | 'sql' | 'xml' | 'excel';

export interface FieldTypeOption {
  value: FieldType;
  label: string;
  labelEn: string;
  category: string;
  icon: string;
  description: string;
  language: 'ar' | 'en' | 'both';
}
