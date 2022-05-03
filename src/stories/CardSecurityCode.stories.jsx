import React from 'react';
import CardSecurityCode from '../components/CardSecurityCode';
import useInputHandler from '../hooks/useInputHandler';
import { validateCardCode } from '../validator';

export default {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
};

const Template = () => {
  const {
    errorMessage: cardCodeErrorMessage,
    inputValue: cardCode,
    updateInputState: updateCardCode,
  } = useInputHandler(validateCardCode, {
    cvc: '',
  });

  return <CardSecurityCode errorMessage={cardCodeErrorMessage} cardCode={cardCode} updateCardCode={updateCardCode} />;
};

export const Primary = Template.bind({});
