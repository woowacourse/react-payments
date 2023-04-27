import { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './CreditCard';

const meta = {
  component: CreditCard,
  title: 'Section/Card',
} satisfies Meta<typeof CreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    card: {
      bank: 'BC카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const ShinhanCard: Story = {
  args: {
    card: {
      bank: '신한카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const KakaoBank: Story = {
  args: {
    card: {
      bank: '카카오뱅크',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const WooriCard: Story = {
  args: {
    card: {
      bank: '우리카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const LotteCard: Story = {
  args: {
    card: {
      bank: '롯데카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const HanaCard: Story = {
  args: {
    card: {
      bank: '하나카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const KookminCard: Story = {
  args: {
    card: {
      bank: '국민카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
export const HyundaiCard: Story = {
  args: {
    card: {
      bank: '현대카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      ownerName: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
