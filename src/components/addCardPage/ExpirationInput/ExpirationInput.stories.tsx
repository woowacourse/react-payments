import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useAddCardFormData } from '@pages/AddCardPage/hooks/useAddCardFormData';
import { ADD_CARD_TEST_ID } from '@constants/storybookTest';
import ExpirationInput from './ExpirationInput';

function ExpirationStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const { formData } = useAddCardFormData();

  const { year, month } = formData;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <ExpirationInput id="" yearInformation={year} monthInformation={month} />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof ExpirationStories> = {
  component: ExpirationStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof ExpirationStories>;

export const Expiration: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('잘못된 달을 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(ADD_CARD_TEST_ID.MONTH), '13', {
        delay: 100,
      });
    });

    await step('잘못된 년도를 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(ADD_CARD_TEST_ID.YEAR), '13', {
        delay: 100,
      });
    });

    await step('올바른 년도를 입력합니다.', async () => {
      await userEvent.clear(canvas.getByTestId(ADD_CARD_TEST_ID.YEAR));
      await userEvent.type(canvas.getByTestId(ADD_CARD_TEST_ID.YEAR), '24', {
        delay: 100,
      });
    });

    await step('올바른 달을 입력합니다.', async () => {
      await userEvent.clear(canvas.getByTestId(ADD_CARD_TEST_ID.MONTH));
      await userEvent.type(canvas.getByTestId(ADD_CARD_TEST_ID.MONTH), '12', {
        delay: 100,
      });
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
