import React, { FormEvent, useRef } from 'react';
import { useInput } from '../../../hooks/useInput';
import { Meta, StoryObj } from '@storybook/react';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';
import OwnerInput from '../../../components/card/input/OwnerInput';

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;

function OwnerStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const owner = useInput('', {
    name: 'ownerInput',
    maxLength: 30,
  });

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <OwnerInput owner={owner} />
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
