import React, { useRef } from 'react';
import { useCardInput } from '../../../hooks/useCardInput';
import CardNumberInput from '.';

export default {
  component: CardNumberInput,
  title: 'Input',
};

const Template = args => {
  const [{ cardNumber }, cardInputDispatch] = useCardInput();
  const inputElementsRef = useRef({});
  return (
    <CardNumberInput
      {...args}
      cardNumber={cardNumber}
      cardInputDispatch={cardInputDispatch}
      inputElementsRef={inputElementsRef}
    />
  );
};

export const DefaultCardNumberInput = Template.bind({});

DefaultCardNumberInput.args = {
  stateName: 'cardNumber',
};
