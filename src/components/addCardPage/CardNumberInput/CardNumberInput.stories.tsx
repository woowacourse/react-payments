import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useAddCardFormData } from '@pages/AddCardPage/hooks/useAddCardFormData';
import { ADD_CARD_TEST_ID } from '@constants/storybookTest';
import CardNumberInput from './CardNumberInput';

function CardNumberStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const { formData } = useAddCardFormData();

  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
  } = formData;

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
        id=""
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('카드 번호를 입력합니다.', async () => {
      await userEvent.type(
        canvas.getByTestId(ADD_CARD_TEST_ID.FIRST_CARD_NUMBER),
        '1234',
        {
          delay: 100,
        }
      );
      await userEvent.type(
        canvas.getByTestId(ADD_CARD_TEST_ID.SECOND_CARD_NUMBER),
        '1749',
        {
          delay: 100,
        }
      );
      await userEvent.type(
        canvas.getByTestId(ADD_CARD_TEST_ID.THIRD_CARD_NUMBER),
        '5678',
        {
          delay: 100,
        }
      );
      await userEvent.type(
        canvas.getByTestId(ADD_CARD_TEST_ID.FOURTH_CARD_NUMBER),
        '9012',
        {
          delay: 100,
        }
      );
    });
  },
};

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
