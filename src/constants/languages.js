export const LANGUAGES = [
  { code: 'he', label: 'עברית', locale: 'he-IL', dir: 'rtl' },
  { code: 'en', label: 'English', locale: 'en-US', dir: 'ltr' },
  { code: 'fr', label: 'Français', locale: 'fr-FR', dir: 'ltr' },
];

export const getLanguageInfo = (code) =>
  LANGUAGES.find((lang) => lang.code === code) ?? LANGUAGES[0];