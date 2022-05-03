import React, { useRef } from 'react';
import { useCardInput } from '../../../hooks/useCardInput';
import ExpirationDateInput from './';

export default {
  component: ExpirationDateInput,
  title: 'Input',
};

const Template = args => {
  const [{ expirationDate }, cardInputDispatch] = useCardInput();
  const inputElementsRef = useRef({});
  return (
    <ExpirationDateInput
      {...args}
      expirationDate={expirationDate}
      cardInputDispatch={cardInputDispatch}
      inputElementsRef={inputElementsRef}
    />
  );
};

export const DefaultExpirationDateInput = Template.bind({});

DefaultExpirationDateInput.args = {
  stateName: 'expirationDate',
};
