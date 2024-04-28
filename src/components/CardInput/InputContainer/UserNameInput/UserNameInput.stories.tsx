import { Meta, StoryObj } from '@storybook/react';

import UserNameInput from '.';

const meta: Meta<typeof UserNameInput> = {
  title: 'CardInput Container',
  component: UserNameInput,
  args: {
    nameError: false,
  },
};

export default meta;

type Story = StoryObj<typeof UserNameInput>;

export const UserName: Story = {};
