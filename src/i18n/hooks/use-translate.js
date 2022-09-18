import { useContext, useCallback } from 'react';
import { Context } from '../state/Store';
import { getText } from '../i18n-helpers';

export const useTranslate = () => {
  const [state] = useContext(Context);
  const { userLanguage, languageData } = state;
  const i18n = useCallback(
    (term, options = {}) =>
      getText(languageData, term, { language: userLanguage, ...options }),
    [userLanguage, languageData]
  );
  return {
    language: userLanguage,
    i18n,
  };
};
