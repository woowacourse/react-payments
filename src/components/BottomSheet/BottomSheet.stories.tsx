import { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './BottomSheet';

const meta = {
  component: BottomSheet,
  title: 'Section/BottomSheet',
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomSheetStory: Story = {};
