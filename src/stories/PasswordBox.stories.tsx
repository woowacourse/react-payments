import type { Meta, StoryObj } from '@storybook/react';

import PasswordBox from '../components/PasswordBox/PasswordBox';

const meta: Meta<typeof PasswordBox> = {
  title: 'Components/PasswordBox',
  component: PasswordBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordBox>;

export const Default: Story = {};
