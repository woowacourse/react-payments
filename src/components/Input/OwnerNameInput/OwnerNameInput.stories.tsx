import { Meta, StoryObj } from '@storybook/react';
import { OwnerNameInput } from './OwnerNameInput';

const meta = {
  component: OwnerNameInput,
  title: 'Section/Inputs/OwnerNameInput',
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnerNameStory: Story = {
  args: {
    value: 'PARK',
  },
};
