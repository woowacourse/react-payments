import { PasswordPrefixTextField } from '@pages/payments';
import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ERROR_MESSAGE } from '@constants/index';

const meta = {
  title: 'Payments/PaymentsForm/PasswordPrefix/PasswordPrefixTextField',
  component: PasswordPrefixTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '비밀번호 앞 두자리 입력을 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    passwordPrefix: {
      ...generateArgTypes({ control: 'text' }),
      description: '비밀번호 앞 2자리',
    },
    passwordPrefixError: {
      ...generateArgTypes({ control: 'object' }),
      description: '에러 메시지 및 상태를 포함',
    },
    onAddPasswordPrefix: {
      ...generateArgTypes({ control: 'function' }),
      description: '비밀번호 입력 시 동작하는 이벤트 핸들러',
    },
  },
  args: {
    passwordPrefix: '',
    onAddPasswordPrefix: fn(),
    passwordPrefixError: { isError: false, errorMessage: '' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordPrefixTextField>;

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
    passwordPrefixError: { isError: true, errorMessage: ERROR_MESSAGE.invalidPasswordPrefixInput },
  },
};

export const Complete: Story = {
  parameters: {
    docs: { description: { story: '완료 상태' } },
  },

  args: {
    passwordPrefix: '11',
  },
};
