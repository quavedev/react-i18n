# React i18n components

## Usage

### Adding npm dependency in your project 

```shell
npm i @quave/react-i18n
```

```javascript
import { ENGLISH, PORTUGUESE } from '../i18n/languages';
import { LanguageChange } from '../i18n/Components/LanguageChange';
import { useTranslate } from '../i18n/hooks/use-translate';
import { Store } from '../i18n/state/Store';

export const TERMS = {
    pageTitle: {
        [ENGLISH]: 'English page title',
        [PORTUGUESE]: 'Título da página em português',
    },
};

const LanguageTest = () => {
  const { i18n } = useTranslate();
  return <div>{i18n('pageTitle')}</div>;
};

export const App = () => (
  <Store languageData={TERMS}>
    <LanguageChange {...args} />
    <LanguageTest />
  </Store>
);
```
