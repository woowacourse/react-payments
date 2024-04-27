import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardBrandInput from './CardBrandInput';
import { ERROR_MESSAGE } from '../../constants/messages';

const meta = {
  title: 'CardBrandInput',
  component: CardBrandInput,
  parameters: {
    docs: {
      description: {
        component: '카드사 선택 컴포넌트',
      },
    },
  },
  argTypes: {
    isBrandValid: {
      control: 'select',
      options: {
        '유효성 통과': { isValid: true, errorMessage: '' },
        '유효성 미통과': { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_BRAND }
      },
      description: '카드사 선택 결과에 따른 유효성 검증 결과',
    },
    onChangeBrand: {
      control: 'function',
      description: '카드사 선택 결과를 상위 컴포넌트로 전송하는 콜백 함수',
    },
  },
  args: {
    onChangeBrand: fn(),
  }
} satisfies Meta<typeof CardBrandInput>;

export default meta;

type Story = StoryObj<typeof CardBrandInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      }
    }
  },
  args: {
    isBrandValid: { isValid: true, errorMessage: '' },
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드사 입력 오류 상태',
      }
    }
  },
  args: {
    isBrandValid: { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_BRAND },
  },
};
