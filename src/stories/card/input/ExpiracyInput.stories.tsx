import React, { FormEvent, useRef } from 'react';
import { useInput } from '../../../hooks/useInput';
import { Meta, StoryObj } from '@storybook/react';
import { useFocusInput } from '../../../hooks/useFocusInput';
import styled from 'styled-components';
import ExpiracyInput from '../../../components/card/input/ExpiracyInput';

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;

function ExpiracyStories() {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);

  const year = useInput('', {
    name: 'yearInput',
    errorMessage: '카드의 연도를 확인해주세요',
    maxLength: 2,
  });

  const month = useInput('', {
    name: 'monthInput',
    errorMessage: '카드의 달을 확인해주세요.',
    maxLength: 2,
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
      <ExpiracyInput year={year} month={month} />
    </InputWrapperParent>
  );
}

const meta: Meta<typeof ExpiracyStories> = {
  component: ExpiracyStories,
  title: 'CardInput',
};

export default meta;
type Story = StoryObj<typeof ExpiracyStories>;

export const Expiracy: Story = {
  args: {},
};
