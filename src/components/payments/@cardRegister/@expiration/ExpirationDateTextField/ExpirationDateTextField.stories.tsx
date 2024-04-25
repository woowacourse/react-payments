import ExpirationDateTextField from '@components/payments/@cardRegister/@expiration/ExpirationDateTextField/ExpirationDateTextField';

import { generateArgTypes } from '@utils/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/ExpirationDateTextField',
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
    expirationError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 메시지 및 상태를 포함',
    },
    onAddExpirationDate: {
      ...generateArgTypes({ control: 'function' }),
      description: '유효기간을 추가하기 위한 이벤트 핸들러',
    },
  },
  args: {
    onAddExpirationDate: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      },
    },
  },

  args: {
    month: '',
    year: '',
    expirationError: { isError: false, errorMessage: '' },
  },
};

export const MonthError: Story = {
  parameters: {
    docs: {
      description: {
        story: '올바르지 않은 월을 입력했을 때의 상태',
      },
    },
  },

  args: {
    month: '13',
    year: '',
    expirationError: { isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' },
  },
};

export const ExpirationError: Story = {
  parameters: {
    docs: {
      description: {
        story: '유효기간이 올바르게 입력하지 않았을 때의 상태',
      },
    },
  },

  args: {
    month: '01',
    year: '24',
    expirationError: { isError: true, errorMessage: '카드 유효기간이 지났습니다.' },
  },
};

export const Complete: Story = {
  parameters: {
    docs: {
      description: {
        story: '완전히 입력되었을 때의 상태',
      },
    },
  },

  args: {
    month: '05',
    year: '24',
    expirationError: { isError: false, errorMessage: '' },
  },
};
