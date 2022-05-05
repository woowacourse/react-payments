import React, { useMemo } from 'react';
import CardNumber from '../components/CardNumber';
import useInputHandler from '../hooks/useInputHandler';
import { validateCardNumbers } from '../validator';

export default {
  title: 'CardNumber',
  component: CardNumber,
};

const Template = () => {
  const {
    errorMessage: cardNoErrorMessage,
    setErrorMessage: setCardNoErrorMessage,
    inputValue: cardNumbers,
    updateInputState: updateCardNumbers,
  } = useInputHandler(validateCardNumbers, {
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  });

  const isCorrectCardNumber = useMemo(() => Object.values(cardNumbers).join('').length === 16, [cardNumbers]);

  return (
    <CardNumber
      errorMessage={cardNoErrorMessage}
      setErrorMessage={setCardNoErrorMessage}
      cardNumbers={cardNumbers}
      updateCardNumbers={updateCardNumbers}
      isCorrectCardNumber={isCorrectCardNumber}
    />
  );
};

export const Primary = Template.bind({});
