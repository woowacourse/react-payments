import React, { FormEvent, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import styled from 'styled-components';
import { useFocusInput } from '@hooks/useFocusInput';
import { useAddCardFormData } from '@pages/AddCardPage/hooks/useAddCardFormData';
import { ADD_CARD_TEST_ID } from '@constants/storybookTest';
import OwnerInput from './OwnerInput';

function OwnerStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const { formData } = useAddCardFormData();

  const { owner } = formData;

  return (
    <InputWrapperParent
      onSubmit={onSubmit}
      ref={cardForm}
      onKeyDown={(e) => onInputKeydown(e)}
    >
      <OwnerInput id="" ownerInformation={owner} />
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('에러가 나오는 한글을 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(ADD_CARD_TEST_ID.OWNER), '우스', {
        delay: 100,
      });
    });
    await step('올바르게 작동하는 영어을 입력합니다.', async () => {
      await userEvent.clear(canvas.getByTestId(ADD_CARD_TEST_ID.OWNER));
      await userEvent.type(
        canvas.getByTestId(ADD_CARD_TEST_ID.OWNER),
        'abccajqjwidiwhiwhfiwqhioqwhoiqhowqihfwqoifhqwoq',
        {
          delay: 30,
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
