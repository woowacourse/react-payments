import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../components/TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {};
