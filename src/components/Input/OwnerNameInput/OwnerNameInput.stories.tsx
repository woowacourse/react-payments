import { Meta, StoryObj } from '@storybook/react';
import { OwnerNameInput } from './OwnerNameInput';

const meta = {
  title: 'Components/Input/OwnerNameInput',
  component: OwnerNameInput,
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnerNameStory: Story = {
  args: {
    value: 'PARK',
  },
};
