import { OwnerNameTextField } from '@pages/payments';

import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ERROR_MESSAGE } from '@constants/index';

const meta = {
  title: 'Payments/PaymentsForm/OwnerName/OwnerNameTextField',
  component: OwnerNameTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 소유자 이름 관련 설명 및 입력을 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    ownerName: {
      ...generateArgTypes({ control: 'text' }),
      description: '소유자 이름',
    },
    ownerNameError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 메시지 및 상태를 포함',
    },
    onAddOwnerName: {
      ...generateArgTypes({ control: 'function' }),
      description: '소유자 이름을 추가하기 위한 이벤트 핸들러',
    },
  },
  args: {
    ownerName: '',
    ownerNameError: { isError: false, errorMessage: '' },
    onAddOwnerName: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '컴포넌트의 기본 상태' } },
  },
};

export const OwnerNameError: Story = {
  parameters: {
    docs: { description: { story: '영문을 입력하지 않았을 때의 상태' } },
  },

  args: {
    ownerNameError: { isError: true, errorMessage: ERROR_MESSAGE.invalidOwnerNameInput },
  },
};

export const Complete: Story = {
  parameters: {
    docs: { description: { story: '완전히 입력되었을 때의 상태' } },
  },

  args: {
    ownerName: 'NAMSUMIN',
  },
};
