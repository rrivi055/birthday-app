import { useState } from 'react';
import { I18nContext } from './I18nContext';

export default function I18nProvider({ children }) {
  const [language, setLanguage] = useState('he');

  return (
    <I18nContext value={{ language, setLanguage }}>
      {children}
    </I18nContext>
  );
}