import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardIssuerSelect from './CardIssuerSelect';

const meta = {
  title: 'Payments/PaymentsForm/CardIssuer/CardIssuerSelect',
  component: CardIssuerSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'select의 값',
    },
    onSelectCardIssuer: {
      ...generateArgTypes({ control: 'object' }),
      description: 'CardIssuerSelect의 이벤트 핸들러',
    },
  },
  args: {
    value: '',
    onSelectCardIssuer: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuerSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태' } },
  },
};

export const Selected: Story = {
  parameters: {
    docs: { description: { story: '카드사를 선택한 상태' } },
  },

  args: {
    value: '1',
  },
};
