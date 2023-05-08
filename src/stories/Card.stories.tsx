import { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card/Card';

const meta = {
  component: Card,
  title: 'Item/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    cardNumbers: ['1111', '2222', '3333', '4444'],
    expiredDates: ['02', '27'],
    cardOwnerName: 'NAME',
    cardCompany: 'BC카드',
  },
};

export const ShinhanCard: Story = {
  args: {
    cardNumbers: ['1212', '2323', '3333', '4444'],
    expiredDates: ['03', '24'],
    cardOwnerName: 'NAME',
    cardCompany: '신한카드',
  },
};

export const KakaoCard: Story = {
  args: {
    cardNumbers: ['3434', '4444', '3333', '4444'],
    expiredDates: ['02', '25'],
    cardOwnerName: 'NAME',
    cardCompany: '카카오뱅크',
  },
};

export const HyundaiCard: Story = {
  args: {
    cardNumbers: ['4545', '5555', '3333', '4444'],
    expiredDates: ['10', '26'],
    cardOwnerName: 'NAME',
    cardCompany: '현대카드',
  },
};

export const WooriCard: Story = {
  args: {
    cardNumbers: ['5656', '7777', '3333', '4444'],
    expiredDates: ['11', '24'],
    cardOwnerName: 'NAME',
    cardCompany: '우리카드',
  },
};

export const LotteCard: Story = {
  args: {
    cardNumbers: ['6767', '7878', '3333', '4444'],
    expiredDates: ['02', '32'],
    cardOwnerName: 'NAME',
    cardCompany: '롯데카드',
  },
};

export const HanaCard: Story = {
  args: {
    cardNumbers: ['7777', '8888', '3333', '4444'],
    expiredDates: ['02', '25'],
    cardOwnerName: 'NAME',
    cardCompany: '하나카드',
  },
};

export const KBCard: Story = {
  args: {
    cardNumbers: ['8989', '9999', '3333', '4444'],
    expiredDates: ['07', '23'],
    cardOwnerName: 'NAME',
    cardCompany: '국민카드',
  },
};
