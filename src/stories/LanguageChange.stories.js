import React from 'react';

import { LanguageChange, useTranslate, Store } from '../../dist';
import { TERMS } from './language-data';

export default {
  title: 'LanguageChange',
  component: LanguageChange,
};

const LanguageTest = () => {
  const { i18n } = useTranslate();
  return <div>{i18n('pageTitle')}</div>;
};

const Template = (args) => (
  <Store languageData={TERMS}>
    <LanguageChange {...args} />
    <LanguageTest />
  </Store>
);

export const LanguageChangeTest = Template.bind({});
LanguageChangeTest.args = {};
