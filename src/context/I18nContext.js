import { createContext } from 'react';

export const I18nContext = createContext({
  language: 'he',
  setLanguage: () => {},
});