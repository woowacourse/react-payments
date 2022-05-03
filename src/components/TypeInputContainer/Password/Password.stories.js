import React, { useRef } from 'react';
import PasswordInput from '.';
import { useCardInput } from '../../../hooks/useCardInput';

export default {
  component: PasswordInput,
  title: 'Input',
};

const Template = args => {
  const [{ password }, cardInputDispatch] = useCardInput();
  const inputElementsRef = useRef({});
  return (
    <PasswordInput
      {...args}
      password={password}
      cardInputDispatch={cardInputDispatch}
      inputElementsRef={inputElementsRef}
    />
  );
};

export const DefaultPasswordInput = Template.bind({});

DefaultPasswordInput.args = {
  stateName: 'password',
};
