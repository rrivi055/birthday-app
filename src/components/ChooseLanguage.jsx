import useI18nContext from '../hooks/useI18nContext';
import { LANGUAGES } from '../constants/languages';

export default function ChooseLanguage() {
  const { setLanguage } = useI18nContext();

  return (
    <div className="choose-language">
      <label htmlFor="language">שפה / Language: </label>
      <select
        id="language"
        defaultValue="he"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}