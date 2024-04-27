import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

import { CARD_BRANDS } from '../../constants/conditions';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  parameters: {
    docs: {
      description: {
        component: '신규 입력 카드의 미리보기 컴포넌트',
      },
    },
  },
  argTypes: {
    cardNumbers: {
      options: {
        'No input': ['', '', '', ''],
        'First input': ['2222', '', '', ''],
        'Second input': ['2222', '3333', '', ''],
        'Third input': ['2222', '3333', '4444', ''],
        'Fourth input': ['2222', '3333', '4444', '5555'],
      },
      control: { type: 'select' },
    },
    month: {
      options: {
        Default: '12',
        'No input': '',
      },
      control: { type: 'select' },
    },
    year: {
      options: {
        Default: '24',
        'No input': '',
      },
      control: { type: 'select' },
    },
    owner: {
      options: {
        Default: 'PARSELY KIM',
        'No input': '',
      },
      control: { type: 'select' },
    },
    brand: {
      options: {
        'BC카드': CARD_BRANDS.BC카드.name,
        '국민카드': CARD_BRANDS.국민카드.name,
        '롯데카드': CARD_BRANDS.롯데카드.name,
        '신한카드': CARD_BRANDS.신한카드.name,
        '우리카드': CARD_BRANDS.우리카드.name,
        '카카오뱅크': CARD_BRANDS.카카오뱅크.name,
        '하나카드': CARD_BRANDS.하나카드.name,
        '현대카드': CARD_BRANDS.현대카드.name,
      },
      control: { type: 'select' },
    },
    CVC: {
      options: {
        Default: '123',
        'No input': '',
      },
      control: { type: 'select' },
    },
    showCardBackside: {
      control: 'boolean',
    }
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: ' 기본 상태',
      }
    }
  },
  args: {
    cardNumbers: ['2222', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
    CVC: '123',
    showCardBackside: false,
  },
};

export const CardBackside: Story = {
  args: {
    cardNumbers: ['5555', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
    CVC: '123',
    showCardBackside: true,
  },
};
