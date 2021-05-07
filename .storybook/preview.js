import '../src/index.css';
import { addDecorator } from '@storybook/react';
import { INPUT_NAME } from '../src/constants/input';
import { COLOR } from '../src/constants/color';
import CardDataContext from '../src/context/CardDataContext';
import { useState } from 'react';

const { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } = INPUT_NAME;

const cardData = {
  cardNumber: { [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' },
  cardExpiredDate: { [MONTH]: '', [YEAR]: '' },
  cardOwner: '',
  securityCode: '',
  cardPassword: { [FIRST]: '', [SECOND]: '' },
  selectedCardInfo: { id: null, name: '', color: COLOR.GRAY_100 },
  cardNickname: '',
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

const AppDecorator = storyFn => {
  const [cardInfo, setCardInfo] = useState(cardData);
  return (
    <CardDataContext.Provider value={{ cardInfo, setCardInfo, editCardId: null, setCurrentPage: () => {} }}>
      {storyFn()}
    </CardDataContext.Provider>
  );
};

addDecorator(AppDecorator);
