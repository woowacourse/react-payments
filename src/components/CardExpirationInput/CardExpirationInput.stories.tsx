import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardExpirationInput from './CardExpirationInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardExpirationInput',
  component: CardExpirationInput,
  parameters: {
    docs: {
      description: {
        component: '카드 유효기간 입력 컴포넌트',
      },
    },
  },
  argTypes: {
    isMonthValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH }
      },
      description: '카드 유효기간의 월(MM) 입력값 유효성 검증 결과',
    },
    isYearValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH }
      },
      description: '카드 유효기간의 연도(YY) 입력값 유효성 검증 결과',
    },
    onChangeExpireDate: {
      control: 'function',
      description: '카드 유효기간 입력값을 상위 컴포넌트로 전송하는 콜백 함수',
    },
  },
  args: {
    onChangeExpireDate: fn(),
  }
} satisfies Meta<typeof CardExpirationInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isMonthValid: { isValid: true, errorMessage: '' },
    isYearValid: { isValid: true, errorMessage: '' },
  },
};

export const ErrorMonthInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '월(MM) 입력 오류 상태',
      }
    }
  },
  args: {
    isMonthValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH },
    isYearValid: { isValid: true, errorMessage: '' },
  },
};

export const ErrorYearInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '연도(YY) 입력 오류 상태',
      }
    }
  },
  args: {
    isMonthValid: { isValid: true, errorMessage: '' },
    isYearValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH },
  },
};

export const ErrorDateInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '유효기간이 만료된 시점일 때 오류 상태',
      }
    }
  },
  args: {
    isMonthValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_DATE_EXPIRED },
    isYearValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_DATE_EXPIRED },
  },
};
