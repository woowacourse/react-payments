import React, { FormEvent, useRef } from 'react';
import { useInput } from '../../../hooks/useInput';
import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from '../../../components/card/input/CardNumberInput';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;

function CardNumberStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const firstCardNumber = useInput('', {
    name: 'firstCardInput',
    maxLength: 4,
  });
  const secondCardNumber = useInput('', {
    name: 'secondCardInput',
    maxLength: 4,
  });
  const thirdCardNumber = useInput('', {
    name: 'thirdCardInput',
    maxLength: 4,
  });
  const fourthCardNumber = useInput('', {
    name: 'fourthCardInput',
    maxLength: 4,
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
      <CardNumberInput
        firstNumber={firstCardNumber}
        secondNumber={secondCardNumber}
        thirdNumber={thirdCardNumber}
        fourthNumber={fourthCardNumber}
      />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof CardNumberStories> = {
  component: CardNumberStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof CardNumberStories>;

export const CardNumber: Story = {
  args: {},
};
