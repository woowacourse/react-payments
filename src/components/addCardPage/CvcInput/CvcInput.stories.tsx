import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useFormInputs } from '@hooks/useFormInputs';
import CvcInput from './CvcInput';

function CvcStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const {
    formInputs: { addCardPage },
  } = useFormInputs();

  const { cvc } = addCardPage;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <CvcInput cvcInformation={cvc} />
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

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
