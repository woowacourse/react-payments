import type { Meta, StoryObj } from '@storybook/react';

import InputCardPassword from '../components/InputCardPassword';

const meta: Meta<typeof InputCardPassword> = {
  title: 'InputCardPassword',
  component: InputCardPassword,
};

export default meta;
type Story = StoryObj<typeof InputCardPassword>;

export const Primary: Story = {
  args: {
    value: '1',
    onChange: (e) => {},
    status: true,
    maxDataLength: 1,
    errorMessage: '',
  },
};
