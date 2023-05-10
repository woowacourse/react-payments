import type { Meta, StoryObj } from '@storybook/react';

import OwnerNameBox from '../components/OwnerNameBox/OwnerNameBox';

const meta: Meta<typeof OwnerNameBox> = {
  title: 'Components/OwnerNameBox',
  component: OwnerNameBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OwnerNameBox>;

export const Default: Story = {};
