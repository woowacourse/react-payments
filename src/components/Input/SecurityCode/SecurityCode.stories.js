import React, { useRef } from 'react';
import SecurityCodeInput from '.';
import { useCardInput } from '../../../hooks/useCardInput';

export default {
  component: SecurityCodeInput,
  title: 'Input',
};

const Template = args => {
  const [{ securityCode }, cardInputDispatch] = useCardInput();
  const inputElementsRef = useRef({});
  return (
    <SecurityCodeInput
      {...args}
      securityCode={securityCode}
      cardInputDispatch={cardInputDispatch}
      inputElementsRef={inputElementsRef}
    />
  );
};

export const DefaultSecurityCodeInput = Template.bind({});

DefaultSecurityCodeInput.args = {
  stateName: 'expirationDate',
};
