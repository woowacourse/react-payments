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
    month: {
      ...generateArgTypes({ control: 'text' }),
      description: '유효기간에 포함된 월',
    },
    year: {
      ...generateArgTypes({ control: 'text' }),
      description: '유효기간에 포함된 년도',
    },
    expirationDateError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 메시지 및 상태를 포함',
    },
    onAddExpirationDate: {
      ...generateArgTypes({ control: 'function' }),
      description: '유효기간을 추가하기 위한 이벤트 핸들러',
    },
  },
  args: {
    month: '',
    year: '',
    expirationDateError: { isError: { month: false, year: false }, errorMessage: '' },
    onAddExpirationDate: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuerTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MonthError: Story = {
  parameters: {
    docs: { description: { story: '유효하지 않은 `월`를 입력하려고 시도할 때의 상태' } },
  },
};
