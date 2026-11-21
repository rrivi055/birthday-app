import { useEffect, useState } from 'react';
import useI18nContext from '../hooks/useI18nContext';
import { getLanguageInfo } from '../constants/languages';
import { translate } from '../services/translate';

export default function GreetingCard({ greeting }) {
  const { language } = useI18nContext();
  const { dir } = getLanguageInfo(language);
  const [text, setText] = useState(greeting);

  useEffect(() => {
    let ignore = false;

    translate(greeting, 'he', language)
      .then((translated) => {
        if (!ignore) setText(translated);
      })
      .catch(() => {
        if (!ignore) setText(greeting);
      });

    return () => {
      ignore = true;
    };
  }, [greeting, language]);

  return (
    <div className="greeting-card" dir={dir}>
      {text}
    </div>
  );
}