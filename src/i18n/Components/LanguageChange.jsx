import React, { useContext } from 'react';
import { ENGLISH, PORTUGUESE } from '../languages';
import { Context } from '../state/Store';
import { ACTIONS } from '../state/Reducer';
import BrSquare from './flags/br-square.svg';
import UsSquare from './flags/us-square.svg';

export const defaultCountries = [
  { lang: PORTUGUESE, Flag: BrSquare, title: 'Portugues BR' },
  { lang: ENGLISH, Flag: UsSquare, title: 'English US' },
];

export const LanguageChange = ({
  classWidth,
  classHeight,
  className,
  countries = defaultCountries,
}) => {
  const [{ userLanguage: currentLanguage }, dispatch] = useContext(Context);
  const setLanguage = (language) => {
    dispatch({ type: ACTIONS.SET_LANGUAGE, payload: language });
  };
  return (
    <div
      style={{ display: 'flex', gap: '8px', margin: '4px' }}
      className={className}
      role="menu"
    >
      {countries.map(({ lang, Flag, title }) => (
        <div
          key={lang}
          style={{
            overflow: 'hidden',
            borderRadius: '100%',
            color: 'gray',
            width: '20px',
            height: '20px',
            ...(currentLanguage !== lang ? { filter: 'grayscale(100%)' } : {}),
          }}
          className={`${classHeight} ${classWidth}`}
          title={title}
          onClick={() => setLanguage(lang)}
          role="button"
        >
          <Flag />
        </div>
      ))}
    </div>
  );
};
