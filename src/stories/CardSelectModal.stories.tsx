import type { Meta, StoryObj } from '@storybook/react';

import CardSelectModal from '../components/CardSelectModal';

const meta: Meta<typeof CardSelectModal> = {
  title: 'CardSelectModal',
  tags: ['autodocs'],
  component: CardSelectModal,
};

export default meta;
type Story = StoryObj<typeof CardSelectModal>;

export const Primary: Story = {
  args: {
    closeModal: () => {
      console.log('닫힘!');
    },
    determineCardType: () => {
      console.log('카드 바뀜');
    },
  },
};
