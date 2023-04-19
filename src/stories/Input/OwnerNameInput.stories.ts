import type { Meta, StoryObj } from '@storybook/react';

import { OwnerNameInput } from '../../components/input/OwnerNameInput';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnerName: Story = {};
