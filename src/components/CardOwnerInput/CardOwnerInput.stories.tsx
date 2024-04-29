import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardOwnerInput from './CardOwnerInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardOwnerInput',
  component: CardOwnerInput,
  parameters: {
    docs: {
      description: {
        component: '카드 소유자 입력 컴포넌트',
      },
    },
  },
  argTypes: {
    isOwnerValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과(미허용 문자 입력시)': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_CHARACTER },
        '유효성 미통과(허용 글자수 초과시)': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_LENGTH },
      },
      description: '카드 소유자 입력값의 유효성 검증 결과',
    },
    onChangeOwner: {
      control: 'function',
      description: '카드 소유자 입력값을 상위 컴포넌트로 전송하는 콜백 함수',
    },
    onSubmitOwner: {
      control: 'function',
      description: '카드 소유자 입력 종료 이벤트를 전송하는 콜백 함수',
    },
  },
  args: {
    onChangeOwner: fn(),
    onSubmitOwner: fn(),
  }
} satisfies Meta<typeof CardOwnerInput>;

export default meta;

type Story = StoryObj<typeof CardOwnerInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isOwnerValid: { isValid: true, errorMessage: '' },
  },
};

export const ErrorInvalidCharacter: Story = {
  parameters: {
    docs: {
      description: {
        story: '미허용 문자 입력으로 인한 오류 상태',
      }
    }
  },
  args: {
    isOwnerValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_CHARACTER },
  },
};

export const ErrorExceededLength: Story = {
  parameters: {
    docs: {
      description: {
        story: '글자수(30자) 초과 입력으로 인한 오류 상태',
      }
    }
  },
  args: {
    isOwnerValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_LENGTH },
  },
};
