import React, { useRef } from 'react';
import OwnerNameInput from '.';
import { useCardInput } from '../../../hooks/useCardInput';

export default {
  component: OwnerNameInput,
  title: 'Input',
};

const Template = args => {
  const [{ ownerName }, cardInputDispatch] = useCardInput();
  const inputElementsRef = useRef({});
  return (
    <OwnerNameInput
      {...args}
      ownerName={ownerName}
      cardInputDispatch={cardInputDispatch}
      inputElementsRef={inputElementsRef}
    />
  );
};

export const DefaultOwnerNameInput = Template.bind({});

DefaultOwnerNameInput.args = {
  stateName: 'ownerName',
};
