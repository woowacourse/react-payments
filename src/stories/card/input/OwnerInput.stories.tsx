import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';
import OwnerInput from '../../../components/card/input/OwnerInput';
import { useFormInputs } from '../../../hooks/useFormInputs';

function OwnerStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const {
    formInputs: { addCardPage },
  } = useFormInputs();

  const { owner } = addCardPage;

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <OwnerInput ownerInformation={owner} />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof OwnerStories> = {
  component: OwnerStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof OwnerStories>;

export const Owner: Story = {
  args: {},
};

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
