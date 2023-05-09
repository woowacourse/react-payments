import { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from '../../components/BottomSheet/BottomSheet';

const meta = {
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomSheetStory: Story = {
  args: {},
};
