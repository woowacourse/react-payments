import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButtonPack from '../components/CardSelectButtonPack/CardSelectButtonPack';
import { cardSelectButtonInfos } from '../pages/cardImages';

const meta = {
  component: CardSelectButtonPack,
  title: 'CardSelectButtonPack',
  tags: ['autodocs'],
} satisfies Meta<typeof CardSelectButtonPack>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { width: '290px', cardSelectButtonInfos: cardSelectButtonInfos },
};

export default meta;
