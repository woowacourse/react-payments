import React, { FormEvent, useRef } from 'react';
import { useInput } from '../../../hooks/useInput';
import { Meta, StoryObj } from '@storybook/react';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';
import PasswordInput from '../../../components/card/input/PasswordInput';

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;

function PasswordStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const firstPassword = useInput('', {
    name: 'firstPasswordInput',
    maxLength: 1,
  });
  const secondPassword = useInput('', {
    name: 'secondPasswordInput',
    maxLength: 1,
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <PasswordInput
        firstPassword={firstPassword}
        secondPassword={secondPassword}
      />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof PasswordStories> = {
  component: PasswordStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof PasswordStories>;

export const Password: Story = {
  args: {},
};
