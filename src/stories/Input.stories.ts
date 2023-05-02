import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input';

const meta = {
  title: 'Payment/common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
