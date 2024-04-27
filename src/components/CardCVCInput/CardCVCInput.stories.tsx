import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardCVCInput from './CardCVCInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardCVCInput',
  component: CardCVCInput,
  parameters: {
    docs: {
      description: {
        component: 'CVC 번호 입력 컴포넌트',
      },
    },
  },
  argTypes: {
    isCVCValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CVC }
      },
      description: 'CVC 입력값의 유효성 검증 결과',
    },
    onChangeCVC: {
      control: 'function',
      description: 'CVC 입력값을 상위 컴포넌트로 전송하는 콜백 함수',
    },
    onChangeFocusCVC: {
      control: 'function',
      description: 'CVC 입력 필드에 대한 focus 여부를 상위 컴포넌트에 전송하는 콜백 함수'
    }
  },
  args: {
    onChangeCVC: fn(),
    onChangeFocusCVC: fn(),
  }
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof CardCVCInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isCVCValid: { isValid: true, errorMessage: '' },
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: 'CVC 번호 입력 오류 상태',
      }
    }
  },
  args: {
    isCVCValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CVC },
  },
};
