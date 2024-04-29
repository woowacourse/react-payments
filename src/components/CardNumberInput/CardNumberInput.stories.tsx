import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardNumberInput from './CardNumberInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  parameters: {
    docs: {
      description: {
        component: '카드 번호 입력 컴포넌트',
      },
    },
  },
  argTypes: {
    isCardNumbersValid: {
      control: 'select',
      options: {
        '모든 입력값의 유효성 통과': { validStates: [true, true, true, true], errorMessage: '' },
        '첫 번째 입력 필드의 입력값 에러': { validStates: [false, true, true, true], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
        '두 번째 입력 필드의 입력값 에러': { validStates: [true, false, true, true], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
        '세 번째 입력 필드의 입력값 에러': { validStates: [true, true, false, true], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
        '네 번째 입력 필드의 입력값 에러': { validStates: [true, true, true, false], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
        '복수 입력 필드의 입력값 에러': { validStates: [true, false, true, false], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
        '전체 입력 필드의 입력값 에러': { validStates: [false, false, false, false], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
      },
      description: '카드 번호 입력값의 유효성 검증 결과',
    },
    onChangeCardNumbers: {
      control: 'function',
      description: '카드 번호 입력값을 상위 컴포넌트로 전송하는 콜백 함수',
    },
  },
  args: {
    onChangeCardNumbers: fn(),
  }
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isCardNumbersValid: { validStates: [true, true, true, true], errorMessage: '' },
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 번호 입력 오류 상태',
      }
    }
  },
  args: {
    isCardNumbersValid: { validStates: [false, true, true, true], errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH },
  },
};
