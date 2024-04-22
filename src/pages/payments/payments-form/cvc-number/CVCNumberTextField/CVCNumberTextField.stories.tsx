import { CVCNumberTextField } from '@pages/payments';
import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ERROR_MESSAGE } from '@constants/index';

const meta = {
  title: 'Payments/PaymentsForm/CVCNumber/CVCNumberTextField',
  component: CVCNumberTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CVC 번호 입력을 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    cvcNumber: {
      ...generateArgTypes({ control: 'text' }),
      description: 'CVC 번호',
    },
    cvcNumberError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 메시지 및 상태를 포함',
    },
    onAddCVCNumber: {
      ...generateArgTypes({ control: 'function' }),
      description: 'CVC 번호 입력 시 동작하는 이벤트 핸들러',
    },
  },
  args: {
    cvcNumber: '',
    onAddCVCNumber: fn(),
    cvcNumberError: { isError: false, errorMessage: '' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CVCNumberTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태' } },
  },
};

export const Error: Story = {
  parameters: {
    docs: { description: { story: '에러 상태' } },
  },

  args: {
    cvcNumberError: { isError: true, errorMessage: ERROR_MESSAGE.invalidCVCNumberInput },
  },
};

export const Complete: Story = {
  parameters: {
    docs: { description: { story: '완료 상태' } },
  },

  args: {
    cvcNumber: '123',
  },
};
