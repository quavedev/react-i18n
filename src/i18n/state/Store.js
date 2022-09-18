import React, { createContext, useEffect, useReducer } from 'react';
import { Reducer } from './Reducer';
import { getLanguage } from '../i18n-helpers';

export const Context = createContext({});

export const Store = ({
  languageData = {},
  onLanguageChange,
  initLanguage,
  children,
}) => {
  const [state, dispatch] = useReducer(Reducer, {
    userLanguage: getLanguage({ initLanguage }),
    languageData,
  });
  const { userLanguage } = state;
  useEffect(() => {
    if (!onLanguageChange) {
      return;
    }
    onLanguageChange(userLanguage);
  }, [userLanguage, onLanguageChange]);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
