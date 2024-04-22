import { CardIssuerTextField } from '@pages/payments';

import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/PaymentsForm/CardIssuer/CardIssuerTextField',
  component: CardIssuerTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 유효 기간 관련 설명 및 입력을 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: '카드사',
    },
    onSelectCardIssuer: {
      ...generateArgTypes({ control: 'function' }),
      description: '카드사 변경이벤트 핸들러',
    },
  },
  args: {
    value: '',
    onSelectCardIssuer: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuerTextField>;

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
};
