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
    cardNumberList: {
      control: 'object',
      description: '카드번호 prop입니다',
      table: {
        type: { summary: 'string[]' },
      },
    },
    expirationDate: {
      control: 'text',
      description: '유효기간 prop입니다',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumberList: ['1234','1234','1234','1234'],
    expirationDate: '12/31',
  },
};

export const Visa: Story = {
  args: {
    cardNumberList: ['4234','1234','1234','1234'],
    expirationDate: '12/31',
  },
};

export const Master: Story = {
  args: {
    cardNumberList: ['5134','1234','1234','1234'],
    expirationDate: '12/31',
  },
};
