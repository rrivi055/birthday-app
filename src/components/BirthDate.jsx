import { useEffect, useState } from 'react';
import useI18nContext from '../hooks/useI18nContext';
import { getLanguageInfo } from '../constants/languages';
import { translate } from '../services/translate';

function parseDate(dateString) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
}

export default function BirthDate({ birthDate }) {
  const { language } = useI18nContext();
  const { locale, dir } = getLanguageInfo(language);

  const date = parseDate(birthDate);
  const age = new Date().getFullYear() - date.getFullYear();
  const hebrewText = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא:`;

  const [text, setText] = useState(hebrewText);

  useEffect(() => {
    let ignore = false;

    translate(hebrewText, 'he', language)
      .then((translated) => {
        if (!ignore) setText(translated);
      })
      .catch(() => {
        if (!ignore) setText(hebrewText);
      });

    return () => {
      ignore = true;
    };
  }, [hebrewText, language]);

  return (
    <div className="birth-date" dir={dir}>
      <p>
        {text} {date.toLocaleDateString(locale)}
      </p>
    </div>
  );
}