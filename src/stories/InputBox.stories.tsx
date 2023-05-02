import { Meta, StoryObj } from '@storybook/react';
import InputBox from '../components/common/InputBox';

const meta = {
  title: 'Payment/common/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isError: false,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};
