import { CardNumberTextField } from '@pages/payments';

import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ERROR_MESSAGE } from '@constants/index';

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
    cardNumberError: { isError: false, errorMessage: '' },
    cardNumbers: ['', '', '', ''],
    onAddCardNumber: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '컴포넌트의 기본 상태' } },
  },
};

export const InvalidValueError: Story = {
  parameters: {
    docs: { description: { story: '유효하지 않은 값을 입력하려고 시도할 떄의 상태' } },
  },

  args: {
    cardNumberError: { isError: true, errorMessage: ERROR_MESSAGE.invalidCardNumberInput },
  },
};

export const Complete: Story = {
  parameters: {
    docs: { description: { story: '완전히 입력되었을 때의 상태' } },
  },

  args: {
    cardNumbers: ['5500', '0000', '0000', '0000'],
  },
};
