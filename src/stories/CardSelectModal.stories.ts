import type { Meta, StoryObj } from '@storybook/react';

import CardSelectModal from '../components/CardSelectModal';

const meta: Meta<typeof CardSelectModal> = {
  title: 'CardSelectModal',
  component: CardSelectModal,
};

export default meta;
type Story = StoryObj<typeof CardSelectModal>;

export const Primary: Story = {};
