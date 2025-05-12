import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '@/components/features/CardPreview';
import { cardBrandOptions } from '@/components/features/CardPreview/cardBrand';
import { CardInputType } from '@/hooks/useCardInput';

const meta = {
  title: 'features/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 미리보기 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCardNumbers = (count: number, value: string): CardInputType[] => {
  return Array.from({ length: count }, () => ({ value, isValid: true }));
};

export const Default: Story = {
  args: {
    cardNumbers: createCardNumbers(4, '1234'),
    expireDate: {
      month: { value: '12', isValid: true },
      year: { value: '34', isValid: true },
    },
    cardBrand: null,
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
    cardBrand: {
      control: 'select',
      options: cardBrandOptions,
    },
  },
};

export const VisaCard: Story = {
  args: {
    cardNumbers: [{ value: '4123', isValid: true }, ...createCardNumbers(3, '5678')],
    expireDate: {
      month: { value: '12', isValid: true },
      year: { value: '34', isValid: true },
    },
    cardBrand: null,
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
    cardBrand: {
      control: 'select',
      options: cardBrandOptions,
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: [{ value: '5412', isValid: true }, ...createCardNumbers(3, '3456')],
    expireDate: {
      month: { value: '12', isValid: true },
      year: { value: '34', isValid: true },
    },
    cardBrand: null,
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
    cardBrand: {
      control: 'select',
      options: cardBrandOptions,
    },
  },
};
