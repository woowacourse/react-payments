import type { Meta, StoryObj } from '@storybook/react';
import CardNumbers from '../../components/FormField/CardNumbers';
import { fn } from '@storybook/test';

const meta = {
  title: 'FormField_카드번호',
  component: CardNumbers,
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    cardNumberState: { first: '', second: '', third: '', fourth: '' },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn(),
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false,
    },
  },
};

export const 정상입력: Story = {
  args: {
    cardNumberState: { first: '1234', second: '5678', third: '1234', fourth: '1234' },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn(),
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false,
    },
  },
};

export const 숫자형식이_아닌경우: Story = {
  args: {
    cardNumberState: { first: '스토리북', second: '5678', third: '너무행복', fourth: '1234' },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn(),
    },
    cardNumberErrorState: {
      isFirstError: true,
      isSecondError: false,
      isThirdError: true,
      isFourthError: false,
    },
  },
};

export const 카드번호_자리수가_맞지_않은_경우: Story = {
  args: {
    cardNumberState: { first: '1234', second: '124', third: '1234', fourth: '1' },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn(),
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: true,
      isThirdError: false,
      isFourthError: true,
    },
  },
};
