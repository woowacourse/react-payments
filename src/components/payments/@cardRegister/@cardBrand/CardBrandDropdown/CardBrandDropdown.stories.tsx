import CardBrandDropdown from './CardBrandDropdown';

import { CARD_BRAND_MAP } from './CardBrandDropdown.constant';

import { generateArgTypes } from '@utils/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/CardBrandDropdown',
  component: CardBrandDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카드 브랜드를 선택하기 위한 컴포넌트',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '315px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      ...generateArgTypes({ control: 'boolean' }),
      description: '컴포넌트를 열고 닫는 상태',
    },
    currentCardBrand: {
      ...generateArgTypes({ control: 'radio', options: Object.values(CARD_BRAND_MAP) }),
      description: '선택된 카드 브랜드',
    },
    onToggleDropdown: {
      ...generateArgTypes({ control: 'function' }),
      description: '드롭다운을 토글 할 때 Menu가 열고 닫히기 위한 핸들러 함수',
    },
    onSelectCardBrand: {
      ...generateArgTypes({ control: 'function' }),
      description: '카드 브랜드를 선택할 때 동작하는 핸들러 함수',
    },
  },
  args: {
    onToggleDropdown: fn(),
    onSelectCardBrand: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardBrandDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      },
    },
  },

  args: {
    isOpen: false,
    currentCardBrand: '',
  },
};

export const Open: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트를 클릭했을 때의 상태',
      },
    },
  },

  args: {
    isOpen: true,
    currentCardBrand: '',
  },
};

export const ClickBCCard: Story = {
  parameters: {
    docs: {
      description: {
        story: 'BC카드를 클릭했을 때의 상태',
      },
    },
  },

  args: {
    isOpen: true,
    currentCardBrand: 'bcCard',
  },
};

export const ClickKakaoBank: Story = {
  parameters: {
    docs: {
      description: {
        story: '카카오뱅크를 클릭했을 때의 상태',
      },
    },
  },

  args: {
    isOpen: true,
    currentCardBrand: 'kakaoBank',
  },
};

export const ClickKookminCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '국민카드를 클릭했을 때의 상태',
      },
    },
  },

  args: {
    isOpen: true,
    currentCardBrand: 'kookminCard',
  },
};
