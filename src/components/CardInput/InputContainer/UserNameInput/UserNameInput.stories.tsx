import { Meta, StoryObj } from '@storybook/react';

import UserNameInput from '.';

const meta: Meta<typeof UserNameInput> = {
  title: 'CardInput Container',
  component: UserNameInput,
  args: {
    userName: '',
    nameError: false,
    onNameChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof UserNameInput>;

export const UserName: Story = {};
