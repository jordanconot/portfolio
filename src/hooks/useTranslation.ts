import { useState, useEffect } from 'react';

const useTranslation = (currentLang: string) => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    import(`../translations/${currentLang}.json`)
      .then((module) => {
        console.log("Traductions chargées :", module.default);
        setTranslations(module.default);
      });
  }, [currentLang]);

  const t = (key: string): string => {
    return key.split('.').reduce((o: any, i: any) => o ? o[i] : null, translations);
  }

  return { t };
}
export default useTranslation;
