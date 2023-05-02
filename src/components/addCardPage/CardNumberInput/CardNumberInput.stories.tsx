import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useFormInputs } from '@hooks/useFormInputs';
import CardNumberInput from './CardNumberInput';

function CardNumberStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const {
    formInputs: { addCardPage },
  } = useFormInputs();

  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
  } = addCardPage;

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
        firstNumberInformation={firstCardNumber}
        secondNumberInformation={secondCardNumber}
        thirdNumberInformation={thirdCardNumber}
        fourthNumberInformation={fourthCardNumber}
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

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
