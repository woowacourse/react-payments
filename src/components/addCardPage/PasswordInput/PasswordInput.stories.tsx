import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useAddCardFormData } from '@pages/AddCardPage/hooks/useAddCardFormData';
import PasswordInput from './PasswordInput';

function PasswordStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const { formData } = useAddCardFormData();

  const { firstPassword, secondPassword } = formData;

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
        id=""
        firstPasswordInformation={firstPassword}
        secondPasswordInformation={secondPassword}
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

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
