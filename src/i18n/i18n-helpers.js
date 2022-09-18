import { DEFAULT_LANGUAGE, ENGLISH, PORTUGUESE } from './languages';

const I18nHelpers = [ENGLISH, PORTUGUESE];

const getLanguageKeyByString = (str) => {
  if (!str || str.length < 2) {
    return DEFAULT_LANGUAGE;
  }
  return I18nHelpers.find((lang) => lang === str.substring(0, 2));
};

function getDeviceLanguage() {
  return navigator?.language;
}

export const getLanguage = ({ initLanguage }) => {
  let language = initLanguage?.();
  if (!language) {
    language = getDeviceLanguage();
  }
  return language ? getLanguageKeyByString(language) : DEFAULT_LANGUAGE;
};

const getTermByKey = (terms, key) => {
  if (!terms) {
    return null;
  }
  let term = terms[key];
  if (term) {
    return term;
  }
  if (!key.includes('.')) {
    return null;
  }
  const [key1, ...nextKeys] = key.split('.');
  return getTermByKey(terms[key1], nextKeys.join('.'));
};

export const getText = (terms, key, options) => {
  const { language = getLanguage() } = options || {};
  const term = getTermByKey(terms, key);
  if (!term) {
    console.debug(`getText was called with an invalid key ${key}`);
    return key;
  }

  // It should not happen, the language should be always correct and defined
  // but just in case we have a fallback to our default language
  const text = term[language] || term[DEFAULT_LANGUAGE];
  if (!text) {
    console.debug(
      `getText was called with an invalid key ${key} for the language ${language}`
    );
    return key;
  }

  if (typeof text === 'function') {
    return text(options);
  }

  return text;
};
