import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButton from '../components/CardSelectButtonPack/CardSelectButton/CardSelectButton';
import { cardIcons } from '../pages/cardImages';

const meta = {
  component: CardSelectButton,
  title: 'CardSelectButton',
  tags: ['autodocs'],
} satisfies Meta<typeof CardSelectButton>;

type Story = StoryObj<typeof meta>;
export const BCIcon: Story = {
  args: { title: 'BC카드', src: cardIcons['BC카드'] },
};

export const ShinhanIcon: Story = {
  args: { title: '신한카드', src: cardIcons['신한카드'] },
};

export const KakaoIcon: Story = {
  args: { title: '카카오뱅크', src: cardIcons['카카오뱅크'] },
};

export const HyundaiIcon: Story = {
  args: { title: '현대카드', src: cardIcons['현대카드'] },
};

export const WooriIcon: Story = {
  args: { title: '우리카드', src: cardIcons['우리카드'] },
};

export const LotteCard: Story = {
  args: { title: '롯데카드', src: cardIcons['롯데카드'] },
};

export const HanaCard: Story = {
  args: { title: '하나카드', src: cardIcons['하나카드'] },
};

export const KookminCard: Story = {
  args: { title: '국민카드', src: cardIcons['국민카드'] },
};

export default meta;
