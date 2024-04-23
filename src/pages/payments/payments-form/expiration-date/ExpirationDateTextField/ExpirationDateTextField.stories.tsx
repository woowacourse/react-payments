import { ExpirationDateTextField } from '@pages/payments';

import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ERROR_MESSAGE } from '@constants/index';

const meta = {
  title: 'Payments/PaymentsForm/ExpirationDate/ExpirationDateTextField',
  component: ExpirationDateTextField,
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
    expirationDateState: {
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
    expirationDateState: { isError: { month: false, year: false }, errorMessage: '' },
    onAddExpirationDate: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MonthError: Story = {
  parameters: {
    docs: { description: { story: '유효하지 않은 `월`를 입력하려고 시도할 때의 상태' } },
  },

  args: {
    expirationDateState: {
      isError: { month: true, year: false },
      errorMessage: ERROR_MESSAGE.invalidMonthInput,
    },
  },
};

export const YearError: Story = {
  parameters: {
    docs: { description: { story: '유효하지 않은 `연도`를 입력하려고 시도할 때의 상태' } },
  },

  args: {
    expirationDateState: {
      isError: { month: false, year: true },
      errorMessage: ERROR_MESSAGE.invalidYearInput,
    },
  },
};

export const Complete: Story = {
  parameters: {
    docs: { description: { story: '올바른 유효기간을 입력한 상태' } },
  },

  args: {
    month: '5',
    year: '24',
  },
};
