import CardNumberInput from './CardNumberInput';
import { generateArgTypes } from '@utils/generateArgTypes';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/CardNumberInput',
  component: CardNumberInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 값',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: 'input의 에러 여부',
    },
    onAddCardNumber: {
      ...generateArgTypes({ control: 'object' }),
      description: 'CardNumberInput의 이벤트 핸들러',
    },
  },
  args: {
    value: '',
    isError: false,
    onAddCardNumber: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '카드 번호 Input' } },
  },
};
