import React, { FormEvent, useRef } from 'react';
import { useInput } from '../../../hooks/useInput';
import { Meta, StoryObj } from '@storybook/react';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';
import CvcInput from '../../../components/card/input/CvcInput';

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;

function CvcStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const cvc = useInput('', { name: 'cvcInput', maxLength: 3 });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <CvcInput cvc={cvc} />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof CvcStories> = {
  component: CvcStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof CvcStories>;

export const Cvc: Story = {
  args: {},
};
