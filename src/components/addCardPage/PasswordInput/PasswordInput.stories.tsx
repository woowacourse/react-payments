import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useAddCardFormData } from '@pages/AddCardPage/hooks/useAddCardFormData';
import { TEST_ID } from '@constants/storybookTest';
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('첫 번째 패스워드를 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.FIRST_PASSWORD), '3', {
        delay: 100,
      });
    });
    await step('두 번째 패스워드를 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.SECOND_PASSWORD), '3', {
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
