import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerInput from './CardOwnerInput';

const meta = {
  title: 'CardOwnerInput',
  component: CardOwnerInput,
} satisfies Meta<typeof CardOwnerInput>;

export default meta;

type Story = StoryObj<typeof CardOwnerInput>;

export const Default: Story = {};
