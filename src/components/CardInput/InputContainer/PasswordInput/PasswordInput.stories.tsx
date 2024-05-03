import { Meta, StoryObj } from '@storybook/react';

import PasswordInput from './index';

const meta: Meta<typeof PasswordInput> = {
  title: 'CardInput Container',
  component: PasswordInput,
  args: {},
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Password: Story = {};
