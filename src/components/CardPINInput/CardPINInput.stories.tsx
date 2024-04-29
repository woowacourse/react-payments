import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardPINInput from './CardPINInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardPINInput',
  component: CardPINInput,
  parameters: {
    docs: {
      description: {
        component: '카드 비밀번호 입력 컴포넌트',
      },
    },
  },
  argTypes: {
    isPINValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_PIN },
      },
      description: '카드 비밀번호 입력값의 유효성 검증 결과',
    },
    onChangePIN: {
      control: 'function',
      description: '카드 비밀번호 입력값을 상위 컴포넌트로 전송하는 콜백 함수',
    },
  },
  args: {
    onChangePIN: fn(),
  }
} satisfies Meta<typeof CardPINInput>;

export default meta;

type Story = StoryObj<typeof CardPINInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isPINValid: { isValid: true, errorMessage: '' },
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: '비밀번호 입력값 오류 상태',
      }
    }
  },
  args: {
    isPINValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_PIN },
  },
};
