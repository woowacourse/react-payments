import React from 'react';
import CardNumbersInput from '.';
import useCardNumbers from '../../hooks/useCardNumbers';
import MESSAGE from '../../constant/message';

export default {
  title: 'Payment/CardNumbersInput',
  component: CardNumbersInput,
};

export const Default = args => {
  const { cardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } = useCardNumbers();

  return (
    <CardNumbersInput
      cardNumbers={cardNumbers}
      handleInputChange={handleChangeCardNumbersInput}
      isValid={isValidCardNumbers}
      invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
      {...args}
    />
  );
};

Default.args = {
  width: '318px',
};
