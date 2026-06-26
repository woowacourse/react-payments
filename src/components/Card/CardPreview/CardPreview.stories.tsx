import type { Meta, StoryObj } from '@storybook/react-vite';

import CardPreview from './CardPreview';

const meta = {
  title: 'Card',
  component: CardPreview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '입력한 카드의 정보를 실시간으로 보여주는 카드 프리뷰 컴포넌트입니다',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    fields: {
      control: 'object',
      description: '카드번호 및 유효기간 prop입니다',
    },
    cardBrand: {
      control: 'select',
      options: ['VISA', 'MASTER', 'DINERS', 'AMEX', 'UNION_PAY', 'LOCAL'],
      description: '카드 브랜드 prop입니다',
    },
    backgroundColor: {
      control: 'color',
      description: '카드 배경색 prop입니다',
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fields: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: '12/31',
    },
    cardBrand: 'LOCAL',
    backgroundColor: '#333333',
  },
};

export const Visa: Story = {
  args: {
    fields: {
      cardNumbers: ['4234', '1234', '1234', '1234'],
      expirationDate: '12/31',
    },
    cardBrand: 'VISA',
    backgroundColor: '#1a1f71',
  },
};

export const Master: Story = {
  args: {
    fields: {
      cardNumbers: ['5134', '1234', '1234', '1234'],
      expirationDate: '12/31',
    },
    cardBrand: 'MASTER',
    backgroundColor: '#eb001b',
  },
};
