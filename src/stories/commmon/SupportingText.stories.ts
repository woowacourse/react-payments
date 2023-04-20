import type { Meta, StoryObj } from '@storybook/react';
import { SupportingText } from './InputContainer.stories';

const meta = {
  title: 'Payments/Common/SupportingText',
  component: SupportingText,
  tags: ['autodocs'],
} satisfies Meta<typeof SupportingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Supporting Text',
  },
};

export const Error: Story = {
  args: {
    message: 'Error Message',
    isError: true,
  },
};
