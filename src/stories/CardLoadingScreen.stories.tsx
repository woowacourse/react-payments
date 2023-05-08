import CardLoadingScreen from '../components/CardLoadingScreen';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof CardLoadingScreen>;

const meta: Meta<typeof CardLoadingScreen> = {
  title: 'CardLoadingScreen',
  component: CardLoadingScreen,
};

export default meta;

export const Default: Story = {
  args: {
    message: '카드를 등록중이에요.',
    isShow: true,
  },
};
