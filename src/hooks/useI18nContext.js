import { use } from 'react';
import { I18nContext } from '../context/I18nContext';

export default function useI18nContext() {
  return use(I18nContext);
}