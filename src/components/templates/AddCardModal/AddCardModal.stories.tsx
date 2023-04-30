import type { Meta, StoryObj } from '@storybook/react';

import AddCardModal from '.';

const meta: Meta<typeof AddCardModal> = {
  title: 'templates/AddCardModal',
  component: AddCardModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const showCardModal: Story = {
  args: {
    isModal: true,
  },
};

export const notShowCardModal: Story = {
  args: {
    isModal: false,
  },
};
