import type { Meta, StoryObj } from '@storybook/react';

import { CardPasswordInput } from '../components';

const meta = {
  title: 'Form',
  component: CardPasswordInput,
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPasswordInputDefault: Story = {
  args: {
    editCardPassword: () => {},
  },
};
