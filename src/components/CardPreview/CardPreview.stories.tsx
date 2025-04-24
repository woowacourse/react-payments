import type { Meta, StoryObj } from '@storybook/react';
import { CardPreview } from '@/components';

const meta = {
  title: 'Components/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카드 정보를 시각적으로 보여주는 프리뷰 컴포넌트입니다. 카드 앞면과 뒷면을 모두 표시할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisaCard: Story = {
  args: {
    cardType: 'visa',
    cardNumber: {
      first: '4242',
      second: '4242',
      third: '4242',
      fourth: '4242',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    selectedCompany: 'shinhan',
    cardCVCNumber: '',
    isFlipped: false,
  },
};

export const MasterCard: Story = {
  args: {
    cardType: 'master',
    cardNumber: {
      first: '5555',
      second: '5555',
      third: '5555',
      fourth: '5555',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    selectedCompany: 'samsung',
    cardCVCNumber: '',
    isFlipped: false,
  },
};

export const FlippedCard: Story = {
  args: {
    cardType: 'visa',
    cardNumber: {
      first: '4242',
      second: '4242',
      third: '4242',
      fourth: '4242',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    selectedCompany: 'shinhan',
    cardCVCNumber: '123',
    isFlipped: true,
  },
};
