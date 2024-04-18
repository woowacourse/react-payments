import CardNumberTextField from '@components/payments/CardNumberTextField/CardNumberTextField';

import { generateArgTypes } from '@utils/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/CardNumberTextField',
  component: CardNumberTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 카드 번호 관련 설명 및 입력을 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    cardNumbers: {
      control: 'array',
      defaultValue: ['', '', '', ''],
      description: '각 카드 번호들',
    },
    cardNumberError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 상태 및 에러 메시지를 포함한 객체',
    },
    onAddCardNumber: {
      ...generateArgTypes({ control: 'function' }),
      description: '카드 번호를 추가하기 위한 이벤트 핸들러',
    },
  },
  args: {
    onAddCardNumber: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberTextField>;

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
    cardNumberError: { isError: false, errorMessage: '' },
    cardNumbers: ['', '', '', ''],
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: '에러가 발생했을 때의 상태',
      },
    },
  },

  args: {
    cardNumberError: { isError: true, errorMessage: '카드 번호는 16자리 숫자여야 합니다.' },
    cardNumbers: ['1234', '', '', ''],
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
    cardNumberError: { isError: false, errorMessage: '' },
    cardNumbers: ['1234', '5678', '9999', '2222'],
  },
};
